import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SourceCardProps {
  name: string;
  logoUrl: string;
  reliability: number;
  url: string;
  actionLabel: string;
  summary?: string;
  meta?: string;
  accentColor?: string; // left-border accent (e.g. supporting=teal, contradicting=terracotta)
  compact?: boolean;
}

const reliabilityColor = (score: number): string => {
  if (score >= 85) return '#5C8C85';
  if (score >= 60) return '#c2872f';
  return '#D1835A';
};

const SourceCard: React.FC<SourceCardProps> = ({
  name,
  logoUrl,
  reliability,
  url,
  actionLabel,
  summary,
  meta,
  accentColor,
  compact = false,
}) => {
  return (
    <div
      className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4"
      style={accentColor ? { borderLeftWidth: 3, borderLeftColor: accentColor } : undefined}
    >
      <img
        src={logoUrl}
        alt=""
        className="mt-0.5 h-8 w-8 shrink-0 rounded-full border border-gray-100 bg-gray-50 object-contain p-1"
        onError={(e) => {
          (e.target as HTMLImageElement).style.visibility = 'hidden';
        }}
      />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-semibold text-[#03353E]">{name}</span>
          <span
            className="shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold text-white"
            style={{ backgroundColor: reliabilityColor(reliability) }}
          >
            {reliability}/100
          </span>
        </div>
        {meta && <p className="mt-0.5 text-xs text-[#03353E]/50">{meta}</p>}
        {summary && !compact && (
          <p className="mt-1.5 text-sm leading-relaxed text-[#03353E]/80">{summary}</p>
        )}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#5C8C85] hover:text-[#4d7975]"
        >
          <ExternalLink className="h-3 w-3" />
          {actionLabel}
        </a>
      </div>
    </div>
  );
};

export default SourceCard;
