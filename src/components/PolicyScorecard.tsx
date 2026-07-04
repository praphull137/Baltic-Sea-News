import React from 'react';
import { Party, PolicyIssue } from '@/data/parties/types';
import { getPosition } from '@/data/parties';
import StanceIndicator, { stanceMeta } from './StanceIndicator';

interface PolicyScorecardProps {
  countryId: string;
  countryName: string;
  issues: PolicyIssue[];
  parties: Party[];
}

const PolicyScorecard: React.FC<PolicyScorecardProps> = ({
  countryId,
  countryName,
  issues,
  parties,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h4 className="mb-6 text-lg font-semibold text-[#03353E]">{countryName} Policy Scorecard</h4>
      <div className="space-y-5 overflow-x-auto">
        {issues.map((issue) => (
          <div key={issue.id} className="min-w-[560px]">
            <p className="mb-2 text-sm font-medium text-[#03353E]/70">{issue.label}</p>
            <div
              className="grid gap-2"
              style={{ gridTemplateColumns: `repeat(${parties.length}, minmax(0, 1fr))` }}
            >
              {parties.map((party) => {
                const position = getPosition(countryId, party.id, issue.id);
                const stance = position?.stance ?? 'unknown';
                const meta = stanceMeta[stance];
                return (
                  <div
                    key={party.id}
                    className="flex flex-col items-center gap-1.5 rounded-xl p-3 text-center"
                    style={{ backgroundColor: `${meta.color}15` }}
                  >
                    <span className="text-xs font-semibold text-[#03353E]">{party.shortName}</span>
                    <StanceIndicator stance={stance} size="sm" />
                    <span className="text-[10px] font-medium" style={{ color: meta.color }}>
                      {meta.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PolicyScorecard;
