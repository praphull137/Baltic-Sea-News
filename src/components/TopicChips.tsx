import React from 'react';
import { X } from 'lucide-react';
import { topics } from '@/data/topics';
import { getNewsByFilters } from '@/data/news';

interface TopicChipsProps {
  selectedCountry: string | null;
  selectedTopic: string | null;
  onSelectTopic: (id: string | null) => void;
}

const TopicChips: React.FC<TopicChipsProps> = ({
  selectedCountry,
  selectedTopic,
  onSelectTopic,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        onClick={() => onSelectTopic(null)}
        className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
          selectedTopic === null
            ? 'bg-[#5C8C85] text-white shadow-sm'
            : 'bg-white text-[#03353E]/70 border border-gray-200 hover:border-[#5C8C85]/40'
        }`}
      >
        All Topics
      </button>
      {topics.map((topic) => {
        const count = getNewsByFilters(selectedCountry, topic.id).length;
        const isActive = selectedTopic === topic.id;
        return (
          <button
            key={topic.id}
            onClick={() => onSelectTopic(isActive ? null : topic.id)}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-[#D1835A] text-white shadow-sm'
                : 'bg-white text-[#03353E]/70 border border-gray-200 hover:border-[#5C8C85]/40'
            }`}
          >
            {topic.label}
            <span
              className={`rounded-full px-1.5 text-xs font-semibold ${
                isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {count}
            </span>
            {isActive && <X className="h-3 w-3" />}
          </button>
        );
      })}
    </div>
  );
};

export default TopicChips;
