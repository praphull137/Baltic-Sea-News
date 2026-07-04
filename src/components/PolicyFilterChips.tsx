import React from 'react';
import { PolicyIssue } from '@/data/parties/types';

interface PolicyFilterChipsProps {
  issues: PolicyIssue[];
  activeIssueId: string | null;
  onSelectIssue: (id: string | null) => void;
}

const PolicyFilterChips: React.FC<PolicyFilterChipsProps> = ({
  issues,
  activeIssueId,
  onSelectIssue,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onSelectIssue(null)}
        className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
          activeIssueId === null
            ? 'bg-[#5C8C85] text-white shadow-sm'
            : 'bg-white text-[#03353E]/70 border border-gray-200 hover:border-[#5C8C85]/40'
        }`}
      >
        All Issues
      </button>
      {issues.map((issue) => {
        const isActive = activeIssueId === issue.id;
        return (
          <button
            key={issue.id}
            onClick={() => onSelectIssue(isActive ? null : issue.id)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-[#D1835A] text-white shadow-sm'
                : 'bg-white text-[#03353E]/70 border border-gray-200 hover:border-[#5C8C85]/40'
            }`}
          >
            {issue.label}
          </button>
        );
      })}
    </div>
  );
};

export default PolicyFilterChips;
