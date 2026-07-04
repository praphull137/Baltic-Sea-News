import React from 'react';
import { ShieldCheck, ShieldAlert } from 'lucide-react';
import { EvidenceItem, Source } from '@/services/types';
import SourceCard from './SourceCard';

interface EvidenceSectionProps {
  title: string;
  items: EvidenceItem[];
  stance: 'supporting' | 'contradicting';
  sources: Source[];
}

const EvidenceSection: React.FC<EvidenceSectionProps> = ({ title, items, stance, sources }) => {
  const accentColor = stance === 'supporting' ? '#5C8C85' : '#D1835A';
  const Icon = stance === 'supporting' ? ShieldCheck : ShieldAlert;

  return (
    <div>
      <div className="mb-2 flex items-center gap-1.5">
        <Icon className="h-4 w-4" style={{ color: accentColor }} />
        <h4 className="text-sm font-semibold text-[#03353E]">
          {title} <span className="font-normal text-[#03353E]/50">({items.length})</span>
        </h4>
      </div>
      {items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-4 text-xs text-gray-500">
          No {stance} evidence was found among the retrieved sources.
        </div>
      ) : (
        <div className="space-y-2.5">
          {items.map((item) => {
            const source = sources.find((s) => s.id === item.sourceId);
            return (
              <SourceCard
                key={item.id}
                name={item.publisher}
                logoUrl={source?.logoUrl ?? ''}
                reliability={item.reliability}
                url={item.url}
                actionLabel="Read Source"
                summary={item.summary}
                meta={`Published ${item.publishedDate ?? 'date unknown'}`}
                accentColor={accentColor}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EvidenceSection;
