import React from 'react';
import { Users, TrendingUp, Landmark, Vote, Tag, ShieldCheck, Newspaper } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCountryById, countries } from '@/data/countries';
import { getCountryProfile } from '@/data/countryProfiles';
import { getArticlesThisWeek, getActiveTopicCount, newsData } from '@/data/news';
import { getFactChecksThisWeek, factChecksData } from '@/data/factChecks';

interface CountryProfileCardProps {
  selectedCountry: string | null;
}

const Stat: React.FC<{ icon: React.ElementType; label: string; value: React.ReactNode }> = ({
  icon: Icon,
  label,
  value,
}) => (
  <div className="flex items-center justify-between border-b border-gray-100 py-2.5 last:border-b-0">
    <span className="flex items-center gap-2 text-sm text-[#03353E]/70">
      <Icon className="h-4 w-4 text-[#5C8C85]" />
      {label}
    </span>
    <span className="text-sm font-semibold text-[#03353E]">{value}</span>
  </div>
);

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

const CountryProfileCard: React.FC<CountryProfileCardProps> = ({ selectedCountry }) => {
  const country = getCountryById(selectedCountry);
  const profile = getCountryProfile(selectedCountry);

  if (!country || !profile) {
    return (
      <Card className="border border-gray-200 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg text-[#03353E]">Baltic & Nordic Region</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-[#03353E]/70">
            Select a country on the map to open its full civic profile — population,
            economy, elections, and verification activity.
          </p>
          <Stat icon={Landmark} label="Countries Tracked" value={countries.length} />
          <Stat icon={Newspaper} label="Articles This Week" value={newsData.length} />
          <Stat icon={ShieldCheck} label="Fact Checks This Week" value={factChecksData.length} />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg text-[#03353E]">
          <span className="text-2xl leading-none">{country.flag}</span>
          {country.name.toUpperCase()}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Stat icon={Users} label="Population" value={profile.population} />
        <Stat icon={TrendingUp} label="GDP" value={profile.gdp} />
        <Stat
          icon={Landmark}
          label="EU Member"
          value={
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                profile.euMember
                  ? 'bg-[#5C8C85]/15 text-[#5C8C85]'
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {profile.euMember ? 'Yes' : 'No (EEA/EFTA)'}
            </span>
          }
        />
        <Stat
          icon={Vote}
          label="Current Election"
          value={
            <span className="text-right">
              {profile.election.name}
              <br />
              <span className="text-xs font-normal text-[#03353E]/60">
                {formatDate(profile.election.electionDay)}
              </span>
            </span>
          }
        />
        <Stat icon={Tag} label="Active Topics" value={getActiveTopicCount(country.id)} />
        <Stat
          icon={ShieldCheck}
          label="Fact Checks This Week"
          value={getFactChecksThisWeek(country.id)}
        />
        <Stat
          icon={Newspaper}
          label="News Articles This Week"
          value={getArticlesThisWeek(country.id)}
        />
      </CardContent>
    </Card>
  );
};

export default CountryProfileCard;
