import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getNewsOfTheDay } from '@/data/news';
import { getCountryById } from '@/data/countries';

interface NewsOfTheDayProps {
  selectedCountry?: string | null;
  selectedTopic?: string | null;
}

const NewsOfTheDay: React.FC<NewsOfTheDayProps> = ({ selectedCountry = null, selectedTopic = null }) => {
  const item = getNewsOfTheDay(selectedCountry, selectedTopic);
  const country = getCountryById(item.country);

  return (
    <Card className="overflow-hidden border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-lg text-[#03353E]">
          <Sparkles className="mr-2 h-5 w-5 text-[#D1835A]" />
          News of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-3 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-36 w-full object-cover"
          />
        </div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {country && (
            <span className="inline-block rounded-full bg-[#5C8C85]/10 px-2.5 py-0.5 text-xs font-medium text-[#5C8C85]">
              {country.flag} {country.name}
            </span>
          )}
          <span className="inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
            {item.category}
          </span>
        </div>
        <h4 className="mb-2 text-base font-semibold text-[#03353E] leading-snug">
          {item.title}
        </h4>
        <p className="mb-3 text-sm text-gray-600 leading-relaxed">
          {item.description}
        </p>
        <button className="flex items-center gap-1.5 text-sm font-semibold text-[#D1835A] hover:text-[#bf6f47] transition-colors">
          Read Full Story
          <ArrowRight className="h-4 w-4" />
        </button>
      </CardContent>
    </Card>
  );
};

export default NewsOfTheDay;
