import React, { useEffect, useRef, useState } from 'react';
import {
  X,
  ShieldCheck,
  Search,
  Link2,
  ImageUp,
  Video,
  Loader2,
  CheckCircle2,
  Info,
  RotateCcw,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  verifyImage,
  verifyVideo,
  VerificationResult,
  VerdictTone,
} from '@/lib/verification';
import { extractVideoFrames } from '@/lib/videoFrames';
import { runEvidenceVerification } from '@/services/verificationEngine';
import { EvidenceVerificationResult } from '@/services/types';
import EvidenceResultPanel from './verification/EvidenceResultPanel';

type Mode = 'claim' | 'url' | 'image' | 'video';

interface VerifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: Mode;
  initialValue?: string;
}

const modeConfig: Record<Mode, { label: string; icon: React.ElementType }> = {
  claim: { label: 'Claim / Text', icon: Search },
  url: { label: 'Article URL', icon: Link2 },
  image: { label: 'Image', icon: ImageUp },
  video: { label: 'Video', icon: Video },
};

const toneColor: Record<VerdictTone, string> = {
  positive: '#5C8C85',
  negative: '#D1835A',
  caution: '#c2872f',
  neutral: '#9CA3AF',
};

const VerifyModal: React.FC<VerifyModalProps> = ({
  isOpen,
  onClose,
  initialMode = 'claim',
  initialValue = '',
}) => {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [textValue, setTextValue] = useState(initialValue);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [evidenceResult, setEvidenceResult] = useState<EvidenceVerificationResult | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
      setTextValue(initialValue);
      setStatus('idle');
      setResult(null);
      setEvidenceResult(null);
      setErrorMessage('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, initialMode, initialValue]);

  const readFileAsDataUrl = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject(new Error('Could not read this file.'));
      reader.readAsDataURL(file);
    });

  const handleImageSelect = (file: File | null) => {
    setImageFile(file);
    setImagePreview(file ? URL.createObjectURL(file) : null);
  };

  const handleVideoSelect = (file: File | null) => {
    setVideoFile(file);
    setVideoPreview(file ? URL.createObjectURL(file) : null);
  };

  const runVerification = async () => {
    setErrorMessage('');
    setResult(null);
    setEvidenceResult(null);

    if (mode === 'claim' && !textValue.trim()) return;
    if (mode === 'url' && !textValue.trim()) return;
    if (mode === 'image' && !imageFile) return;
    if (mode === 'video' && !videoFile) return;

    setStatus('loading');
    try {
      let verdict: VerificationResult;
      if (mode === 'claim') {
        const evidence = await runEvidenceVerification(textValue.trim());
        setEvidenceResult(evidence);
        setStatus('done');
        return;
      } else if (mode === 'url') {
        const evidence = await runEvidenceVerification(textValue.trim());
        setEvidenceResult(evidence);
        setStatus('done');
        return;
      } else if (mode === 'image') {
        const dataUrl = await readFileAsDataUrl(imageFile as File);
        verdict = await verifyImage(dataUrl);
      } else {
        const frames = await extractVideoFrames(videoFile as File);
        verdict = await verifyVideo(frames);
      }
      setResult(verdict);
      setStatus('done');
    } catch (error) {
      console.error('Verification error:', error);
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong during verification.'
      );
      setStatus('error');
    }
  };

  const reset = () => {
    setStatus('idle');
    setResult(null);
    setEvidenceResult(null);
    setErrorMessage('');
  };

  const canVerify =
    (mode === 'claim' || mode === 'url' ? textValue.trim().length > 0 : false) ||
    (mode === 'image' && !!imageFile) ||
    (mode === 'video' && !!videoFile);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl border shadow-2xl"
            style={{ backgroundColor: '#F1E8DB', borderColor: '#D1835A', maxHeight: '88vh' }}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between p-5"
              style={{ backgroundColor: '#5C8C85' }}
            >
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="h-5 w-5" />
                <span className="text-base font-semibold">Verify News</span>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white"
                aria-label="Close verification tool"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6">
              {/* Mode tabs */}
              <div className="mb-5 flex flex-wrap gap-2">
                {(Object.keys(modeConfig) as Mode[]).map((m) => {
                  const { label, icon: Icon } = modeConfig[m];
                  const active = mode === m;
                  return (
                    <button
                      key={m}
                      onClick={() => {
                        setMode(m);
                        reset();
                      }}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'bg-white text-[#1f4f4f] shadow-sm'
                          : 'bg-white/50 text-[#03353E]/70 hover:bg-white/80'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Input area */}
              {(mode === 'claim' || mode === 'url') && (
                <textarea
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                  rows={mode === 'claim' ? 4 : 2}
                  placeholder={
                    mode === 'claim'
                      ? 'Paste the claim or statement you want checked...'
                      : 'Paste an article URL...'
                  }
                  className="w-full resize-none rounded-xl border border-gray-300 bg-white p-3 text-sm text-gray-800 placeholder:text-gray-400 focus:border-[#5C8C85] focus:outline-none focus:ring-2 focus:ring-[#5C8C85]/30"
                />
              )}

              {mode === 'image' && (
                <div>
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageSelect(e.target.files?.[0] ?? null)}
                  />
                  {imagePreview ? (
                    <div className="rounded-xl border border-gray-300 bg-white p-3">
                      <img
                        src={imagePreview}
                        alt="Selected for verification"
                        className="mx-auto max-h-56 rounded-lg object-contain"
                      />
                      <button
                        onClick={() => imageInputRef.current?.click()}
                        className="mt-2 text-xs font-medium text-[#D1835A] hover:text-[#bf6f47]"
                      >
                        Choose a different image
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => imageInputRef.current?.click()}
                      className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white py-10 text-gray-500 hover:border-[#5C8C85] hover:text-[#5C8C85]"
                    >
                      <ImageUp className="h-8 w-8" />
                      <span className="text-sm font-medium">Click to upload an image</span>
                    </button>
                  )}
                </div>
              )}

              {mode === 'video' && (
                <div>
                  <input
                    ref={videoInputRef}
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => handleVideoSelect(e.target.files?.[0] ?? null)}
                  />
                  {videoPreview ? (
                    <div className="rounded-xl border border-gray-300 bg-white p-3">
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <video src={videoPreview} controls className="mx-auto max-h-56 rounded-lg" />
                      <button
                        onClick={() => videoInputRef.current?.click()}
                        className="mt-2 text-xs font-medium text-[#D1835A] hover:text-[#bf6f47]"
                      >
                        Choose a different video
                      </button>
                      <p className="mt-1 text-xs text-gray-500">
                        We'll analyze 3 frames sampled across the video.
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => videoInputRef.current?.click()}
                      className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-white py-10 text-gray-500 hover:border-[#5C8C85] hover:text-[#5C8C85]"
                    >
                      <Video className="h-8 w-8" />
                      <span className="text-sm font-medium">Click to upload a video</span>
                    </button>
                  )}
                </div>
              )}

              {/* Verify button */}
              {status !== 'done' && (
                <button
                  onClick={runVerification}
                  disabled={!canVerify || status === 'loading'}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#487f7b] py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#3a6a68] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-4 w-4" />
                      Verify
                    </>
                  )}
                </button>
              )}

              {/* Error */}
              {status === 'error' && (
                <div className="mt-4 rounded-xl border border-[#D1835A]/40 bg-[#D1835A]/10 p-3 text-sm text-[#8a4a29]">
                  {errorMessage}
                </div>
              )}

              {/* Result */}
              {status === 'done' && evidenceResult && (
                <EvidenceResultPanel
                  result={evidenceResult}
                  onReset={reset}
                />
              )}

              {status === 'done' && result && !evidenceResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 rounded-xl border border-gray-200 bg-white p-5"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="rounded-full px-3 py-1 text-sm font-semibold text-white"
                      style={{ backgroundColor: toneColor[result.tone] }}
                    >
                      {result.verdict}
                    </span>
                    <div className="text-right">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                        Confidence
                      </p>
                      <p className="text-xl font-bold" style={{ color: toneColor[result.tone] }}>
                        {result.confidence}%
                      </p>
                    </div>
                  </div>

                  <div className="mb-4 h-2 w-full rounded-full bg-gray-100">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: toneColor[result.tone] }}
                      initial={{ width: 0 }}
                      animate={{ width: `${result.confidence}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-[#03353E]">{result.summary}</p>

                  <ul className="mb-4 space-y-2">
                    {result.reasoning.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5C8C85]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {result.caveats && (
                    <div className="mb-4 flex items-start gap-2 rounded-lg bg-gray-50 p-3 text-xs text-gray-500">
                      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      {result.caveats}
                    </div>
                  )}

                  <button
                    onClick={reset}
                    className="flex items-center gap-1.5 text-sm font-semibold text-[#D1835A] hover:text-[#bf6f47]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Verify another
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default VerifyModal;
