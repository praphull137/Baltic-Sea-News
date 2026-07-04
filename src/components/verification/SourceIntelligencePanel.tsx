import React from 'react';
import { Source, SourceIntelligenceEntry } from '@/services/types';

interface SourceIntelligencePanelProps {
  sources: Source[];
  intelligence: SourceIntelligenceEntry[];
}

const SourceIntelligencePanel: React.FC<SourceIntelligencePanelProps> = ({ sources, intelligence }) => {
  if (sources.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 p-4 text-xs text-gray-500">
        No sources to profile for this verdict.
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {sources.map((source) => {
        const intel = intelligence.find((e) => e.sourceId === source.id);
        if (!intel) return null;
        return (
          <div key={source.id} className="rounded-xl border border-gray-100 bg-[#F5F5F5] p-4">
            <div className="mb-2 flex items-center gap-2">
              <img
                src={source.logoUrl}
                alt=""
                className="h-6 w-6 rounded-full border border-gray-200 bg-white object-contain p-0.5"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.visibility = 'hidden';
                }}
              />
              <span className="text-sm font-semibold text-[#03353E]">{source.name}</span>
            </div>
            <dl className="space-y-1.5 text-xs">
              <div className="flex justify-between gap-2">
                <dt className="text-[#03353E]/50">Ownership</dt>
                <dd className="text-right text-[#03353E]/80">{intel.ownership}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[#03353E]/50">Country</dt>
                <dd className="text-right text-[#03353E]/80">{intel.country}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[#03353E]/50">Political Bias</dt>
                <dd className="text-right text-[#03353E]/80">{intel.bias}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-[#03353E]/50">Reliability</dt>
                <dd className="text-right font-semibold text-[#03353E]">{source.reliability}/100</dd>
              </div>
              <div className="border-t border-gray-200 pt-1.5 text-[#03353E]/60">
                {intel.factCheckHistory}
              </div>
            </dl>
          </div>
        );
      })}
    </div>
  );
};

export default SourceIntelligencePanel;
