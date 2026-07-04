// Samples a few frames from a video file entirely in the browser (an
// off-screen <video> + <canvas>) and returns them as base64 JPEG data URLs.
// No server or ffmpeg dependency — this is what lets "verify video" work
// from a pure static frontend.
export async function extractVideoFrames(
  file: File,
  fractions: number[] = [0.15, 0.5, 0.85]
): Promise<string[]> {
  const objectUrl = URL.createObjectURL(file);

  try {
    const video = document.createElement('video');
    video.src = objectUrl;
    video.muted = true;
    video.playsInline = true;

    await new Promise<void>((resolve, reject) => {
      video.addEventListener('loadedmetadata', () => resolve(), { once: true });
      video.addEventListener('error', () => reject(new Error('Could not read this video file.')), {
        once: true,
      });
    });

    const maxDimension = 640;
    const scale = Math.min(1, maxDimension / Math.max(video.videoWidth, video.videoHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(video.videoWidth * scale);
    canvas.height = Math.round(video.videoHeight * scale);
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not supported in this browser.');

    const frames: string[] = [];
    for (const fraction of fractions) {
      const targetTime = Math.min(video.duration * fraction, Math.max(video.duration - 0.05, 0));
      await new Promise<void>((resolve, reject) => {
        const onSeeked = () => {
          video.removeEventListener('seeked', onSeeked);
          resolve();
        };
        video.addEventListener('seeked', onSeeked);
        video.addEventListener('error', () => reject(new Error('Could not seek this video.')), {
          once: true,
        });
        video.currentTime = targetTime;
      });
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      frames.push(canvas.toDataURL('image/jpeg', 0.8));
    }

    return frames;
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
