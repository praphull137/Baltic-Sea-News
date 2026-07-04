import React from 'react';
import { Vote, ClipboardCheck, CalendarCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getCountryById, getCountryFlagSrc } from '@/data/countries';
import { countryProfiles, getCountryProfile } from '@/data/countryProfiles';

interface ElectionCountdownProps {
  selectedCountry: string | null;
}

const daysUntil = (date: string) => {
  const target = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.max(0, Math.ceil((target.getTime() - today.getTime()) / 86_400_000));
};

const CountdownRow: React.FC<{ icon: React.ElementType; label: string; date: string }> = ({
  icon: Icon,
  label,
  date,
}) => (
  <div className="flex items-center justify-between border-b border-gray-100 py-2.5 last:border-b-0">
    <span className="flex items-center gap-2 text-sm text-[#03353E]/70">
      <Icon className="h-4 w-4 text-[#5C8C85]" />
      {label}
    </span>
    <span className="text-sm font-semibold text-[#03353E]">{daysUntil(date)} days</span>
  </div>
);

const ElectionCountdown: React.FC<ElectionCountdownProps> = ({ selectedCountry }) => {
  const profile = getCountryProfile(selectedCountry);
  const country = getCountryById(selectedCountry);
  const flagSrc = getCountryFlagSrc(selectedCountry);

  if (!profile || !country) {
    const upcoming = countryProfiles
      .slice()
      .sort((a, b) => (a.election.electionDay < b.election.electionDay ? -1 : 1))
      .slice(0, 4);

    return (
      <Card className="border border-gray-200 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg text-[#03353E]">
            <Vote className="mr-2 h-5 w-5 text-[#D1835A]" />
            Upcoming Elections
          </CardTitle>
        </CardHeader>
        <CardContent>
          {upcoming.map((p) => {
            const c = getCountryById(p.id);
            return (
              <div
                key={p.id}
                className="flex items-center justify-between border-b border-gray-100 py-2.5 last:border-b-0"
              >
                <span className="text-sm text-[#03353E]/70">
                  {getCountryFlagSrc(c?.id ?? null) ? (
                    <img
                      src={getCountryFlagSrc(c?.id ?? null) as string}
                      alt=""
                      className="mr-1 inline-block h-4 w-6 rounded-sm object-cover align-[-2px]"
                    />
                  ) : (
                    `${c?.flag} `
                  )}
                  {c?.name}
                </span>
                <span className="text-sm font-semibold text-[#03353E]">
                  {daysUntil(p.election.electionDay)} days
                </span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-gray-200 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg text-[#03353E]">
            <Vote className="mr-2 h-5 w-5 text-[#D1835A]" />
            Election Countdown
          </CardTitle>
        <p className="text-sm text-[#03353E]/60">
          {flagSrc ? (
            <img src={flagSrc} alt="" className="mr-1 inline-block h-4 w-6 rounded-sm object-cover align-[-2px]" />
          ) : (
            `${country.flag} `
          )}
          {profile.election.name}
        </p>
      </CardHeader>
      <CardContent>
        <CountdownRow
          icon={ClipboardCheck}
          label="Registration closes"
          date={profile.election.registrationDeadline}
        />
        <CountdownRow
          icon={CalendarCheck}
          label="Early voting"
          date={profile.election.earlyVotingStart}
        />
        <CountdownRow icon={Vote} label="Election day" date={profile.election.electionDay} />
      </CardContent>
    </Card>
  );
};

export default ElectionCountdown;
