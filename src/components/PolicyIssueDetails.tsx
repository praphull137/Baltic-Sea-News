import React from 'react';
import { ExternalLink, Calendar, X } from 'lucide-react';
import { Party, PolicyIssue } from '@/data/parties/types';
import { getPosition } from '@/data/parties';
import StanceIndicator from './StanceIndicator';

interface PolicyIssueDetailsProps {
  countryId: string;
  issue: PolicyIssue;
  parties: Party[];
  onClose: () => void;
}

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const PolicyIssueDetails: React.FC<PolicyIssueDetailsProps> = ({
  countryId,
  issue,
  parties,
  onClose,
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h4 className="text-lg font-semibold text-[#03353E]">{issue.label} — Party Positions</h4>
        <button
          onClick={onClose}
          className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          aria-label="Close details"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {parties.map((party) => {
          const position = getPosition(countryId, party.id, issue.id);
          return (
            <div key={party.id} className="rounded-xl border border-gray-100 bg-[#F5F5F5] p-4">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="font-semibold text-[#03353E]">{party.shortName}</span>
                <StanceIndicator stance={position?.stance ?? 'unknown'} showLabel />
              </div>
              <p className="mb-3 text-sm leading-relaxed text-[#03353E]/80">
                {position?.evidence ?? 'No verified public position found for this issue.'}
              </p>
              <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-2 text-xs text-[#03353E]/50">
                {position?.source ? (
                  <a
                    href={position.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-medium text-[#5C8C85] hover:text-[#4d7975]"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Official source
                  </a>
                ) : (
                  <span className="italic">No citable source on file</span>
                )}
                {position?.lastUpdated && (
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    Verified {formatDate(position.lastUpdated)}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PolicyIssueDetails;
