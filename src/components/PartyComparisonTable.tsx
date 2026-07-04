import React from 'react';
import { Party, PolicyIssue, Stance } from '@/data/parties/types';
import { getPosition } from '@/data/parties';
import StanceIndicator, { stanceMeta } from './StanceIndicator';

interface PartyComparisonTableProps {
  countryId: string;
  issues: PolicyIssue[];
  parties: Party[];
  activeIssueId: string | null;
  onSelectIssue: (id: string) => void;
}

const ALL_STANCES: Stance[] = ['support', 'oppose', 'partial', 'unknown'];

const PartyComparisonTable: React.FC<PartyComparisonTableProps> = ({
  countryId,
  issues,
  parties,
  activeIssueId,
  onSelectIssue,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white">
      {/* Mobile/tablet: horizontal scroll instead of squeezing columns */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-sm font-semibold text-[#03353E]">Policy Issue</th>
              {parties.map((party) => (
                <th key={party.id} className="px-4 py-3 text-sm font-semibold text-[#03353E]">
                  <div>{party.shortName}</div>
                  <div className="text-xs font-normal text-[#03353E]/50 line-clamp-1">
                    {party.name}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr
                key={issue.id}
                onClick={() => onSelectIssue(issue.id)}
                className={`cursor-pointer border-t border-gray-100 transition-colors hover:bg-[#5C8C85]/5 ${
                  activeIssueId === issue.id ? 'bg-[#5C8C85]/10' : 'bg-white'
                }`}
              >
                <td className="px-4 py-3 text-sm font-medium text-[#03353E]">{issue.label}</td>
                {parties.map((party) => {
                  const position = getPosition(countryId, party.id, issue.id);
                  return (
                    <td key={party.id} className="px-4 py-3">
                      <StanceIndicator stance={position?.stance ?? 'unknown'} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 border-t border-gray-100 bg-gray-50 px-4 py-3 text-xs text-[#03353E]/60">
        {ALL_STANCES.map((s) => (
          <div key={s} className="flex items-center gap-1.5">
            <StanceIndicator stance={s} size="sm" />
            {stanceMeta[s].label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartyComparisonTable;
