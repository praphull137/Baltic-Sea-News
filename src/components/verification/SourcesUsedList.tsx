import React from 'react';
import { Source } from '@/services/types';
import SourceCard from './SourceCard';

interface SourcesUsedListProps {
  sources: Source[];
}

const TYPE_LABEL: Record<Source['type'], string> = {
  government: 'Government Source',
  international_org: 'International Organization',
  news_agency: 'News Agency',
  public_broadcaster: 'Public Broadcaster',
  newspaper: 'Newspaper',
  fact_check_org: 'Fact-Check Organization',
  research: 'Research / Academic',
  encyclopedia: 'Encyclopedia (background only)',
  blog: 'Blog',
  social_media: 'Social Media',
  unknown: 'Unclassified Source',
};

const SourcesUsedList: React.FC<SourcesUsedListProps> = ({ sources }) => {
  if (sources.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-gray-300 p-4 text-xs text-gray-500">
        No sources contributed to this verdict.
      </div>
    );
  }

  return (
    <div className="space-y-2.5">
      {sources.map((source, i) => (
        <SourceCard
          key={source.id}
          name={`${i + 1}. ${source.name}`}
          logoUrl={source.logoUrl}
          reliability={source.reliability}
          url={source.url}
          actionLabel="Visit Source"
          meta={TYPE_LABEL[source.type]}
          compact
        />
      ))}
    </div>
  );
};

export default SourcesUsedList;
