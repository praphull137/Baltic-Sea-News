import React, { useMemo, useState } from 'react';
import { CalendarDays, Vote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { getNewsByDate } from '@/data/news';
import { getCountryById } from '@/data/countries';
import { countryProfiles, getCountryProfile, CivicEvent } from '@/data/countryProfiles';

interface CivicCalendarProps {
  selectedCountry: string | null;
}

const toDateKey = (d: Date) => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

const formatLong = (date: string) =>
  new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

const CivicCalendar: React.FC<CivicCalendarProps> = ({ selectedCountry }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [open, setOpen] = useState(false);

  const profile = getCountryProfile(selectedCountry);
  const civicEvents: CivicEvent[] = profile
    ? profile.civicEvents
    : countryProfiles.flatMap((p) => p.civicEvents);

  const civicDates = useMemo(
    () => civicEvents.map((e) => new Date(`${e.date}T00:00:00`)),
    [civicEvents]
  );

  const dateKey = selectedDate ? toDateKey(selectedDate) : null;
  const archive = dateKey ? getNewsByDate(dateKey).filter((n) => !selectedCountry || n.country === selectedCountry) : [];
  const eventsOnDate = dateKey ? civicEvents.filter((e) => e.date === dateKey) : [];

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setSelectedDate(date);
    setOpen(true);
  };

  return (
    <>
      <Card className="border border-gray-200 bg-white">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center text-lg text-[#03353E]">
            <CalendarDays className="mr-2 h-5 w-5 text-[#5C8C85]" />
            {profile ? `${getCountryById(selectedCountry)?.name} Events Calendar` : 'Country Events Calendar'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2 text-sm text-gray-600">
            Election dates, deadlines, and debates — click a day for details.
          </p>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={handleSelect}
            modifiers={{ hasCivicEvent: civicDates }}
            modifiersClassNames={{
              hasCivicEvent:
                'relative after:content-[""] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-[#D1835A]',
            }}
            className="rounded-md border border-gray-100 mx-auto"
          />
        </CardContent>
      </Card>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-[#03353E]">
              {dateKey ? formatLong(dateKey) : ''}
            </DialogTitle>
            <DialogDescription>Civic events and news archive for this date.</DialogDescription>
          </DialogHeader>

          {eventsOnDate.length > 0 && (
            <div className="space-y-2">
              {eventsOnDate.map((event, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-[#D1835A]/30 bg-[#D1835A]/5 p-3"
                >
                  <Vote className="mt-0.5 h-4 w-4 shrink-0 text-[#D1835A]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#D1835A]">
                      {event.type}
                    </p>
                    <p className="text-sm text-[#03353E]">{event.label}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {archive.length === 0 ? (
            eventsOnDate.length === 0 && (
              <p className="py-6 text-center text-sm text-gray-500">
                No civic events or archived news for this date.
              </p>
            )
          ) : (
            <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
              {archive.map((item) => {
                const country = getCountryById(item.country);
                return (
                  <div key={item.id} className="rounded-lg border border-gray-200 p-3">
                    <div className="mb-1 flex items-center justify-between text-xs text-gray-500">
                      <span className="font-medium text-[#5C8C85]">
                        {country ? `${country.flag} ${country.name}` : item.country}
                      </span>
                      <span>{item.category}</span>
                    </div>
                    <h5 className="mb-1 text-sm font-semibold text-[#03353E]">{item.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CivicCalendar;
