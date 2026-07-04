import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Party, PolicyIssue } from '@/data/parties/types';
import { getPosition } from '@/data/parties';
import StanceIndicator from './StanceIndicator';

interface PartyCompareModeProps {
  countryId: string;
  parties: Party[];
  issues: PolicyIssue[];
}

const MAX_COMPARE = 4;

const PartyCompareMode: React.FC<PartyCompareModeProps> = ({ countryId, parties, issues }) => {
  const [selected, setSelected] = useState<string[]>(() => parties.slice(0, 2).map((p) => p.id));

  // Reset the selection when the country changes so stale party ids don't linger.
  useEffect(() => {
    setSelected(parties.slice(0, 2).map((p) => p.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId]);

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  };

  const selectedParties = parties.filter((p) => selected.includes(p.id));

  return (
    <div>
      <p className="mb-3 text-sm text-[#03353E]/60">
        Pick 2–4 parties for a focused, side-by-side view.
      </p>
      <div className="mb-6 flex flex-wrap gap-2">
        {parties.map((party) => {
          const isActive = selected.includes(party.id);
          return (
            <button
              key={party.id}
              onClick={() => toggle(party.id)}
              disabled={!isActive && selected.length >= MAX_COMPARE}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${
                isActive
                  ? 'border-[#5C8C85] bg-[#5C8C85] text-white'
                  : 'border-gray-200 bg-white text-[#03353E]/70 hover:border-[#5C8C85]/40'
              }`}
            >
              {party.shortName}
            </button>
          );
        })}
      </div>

      {selectedParties.length < 2 ? (
        <div className="rounded-xl border border-dashed border-gray-300 p-10 text-center text-sm text-gray-500">
          Select at least 2 parties above to compare them side by side.
        </div>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {selectedParties.map((party) => (
            <div
              key={party.id}
              className="w-72 shrink-0 rounded-2xl border border-gray-200 bg-white p-4 sm:w-auto sm:flex-1"
            >
              <h4 className="mb-1 text-base font-semibold text-[#03353E]">{party.shortName}</h4>
              <p className="mb-4 text-xs text-[#03353E]/50">{party.name}</p>
              <div className="space-y-3">
                {issues.map((issue, i) => {
                  const position = getPosition(countryId, party.id, issue.id);
                  return (
                    <div key={issue.id} className={i > 0 ? 'border-t border-gray-100 pt-3' : ''}>
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-[#03353E]/70">{issue.label}</span>
                        <StanceIndicator stance={position?.stance ?? 'unknown'} size="sm" />
                      </div>
                      {position?.evidence && (
                        <p className="mb-1 text-xs leading-relaxed text-[#03353E]/60">
                          {position.evidence}
                        </p>
                      )}
                      {position?.source && (
                        <a
                          href={position.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[11px] font-medium text-[#5C8C85] hover:text-[#4d7975]"
                        >
                          <ExternalLink className="h-2.5 w-2.5" />
                          Source
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PartyCompareMode;
