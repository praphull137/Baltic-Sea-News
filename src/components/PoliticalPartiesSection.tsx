import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Table2, LayoutGrid, GitCompare, ShieldCheck, Landmark } from 'lucide-react';
import { countries, getCountryById } from '@/data/countries';
import { getCountryProfile } from '@/data/countryProfiles';
import {
  getPartiesByCountry,
  getIssuesByCountry,
  getVerifiedPositionCount,
} from '@/data/parties';
import PolicyFilterChips from './PolicyFilterChips';
import PartyComparisonTable from './PartyComparisonTable';
import PolicyIssueDetails from './PolicyIssueDetails';
import PolicyScorecard from './PolicyScorecard';
import PartyCompareMode from './PartyCompareMode';

interface PoliticalPartiesSectionProps {
  selectedCountry: string | null;
  selectedTopic: string | null;
}

type ViewMode = 'table' | 'scorecard' | 'compare';

const viewTabs: { id: ViewMode; label: string; icon: React.ElementType }[] = [
  { id: 'table', label: 'Comparison Table', icon: Table2 },
  { id: 'scorecard', label: 'Scorecard', icon: LayoutGrid },
  { id: 'compare', label: 'Compare 2–4', icon: GitCompare },
];

const PoliticalPartiesSection: React.FC<PoliticalPartiesSectionProps> = ({
  selectedCountry,
  selectedTopic,
}) => {
  const activeCountryId = selectedCountry || countries[0].id;
  const country = getCountryById(activeCountryId);
  const profile = getCountryProfile(activeCountryId);
  const parties = getPartiesByCountry(activeCountryId);
  const allIssues = getIssuesByCountry(activeCountryId);
  const verifiedCount = getVerifiedPositionCount(activeCountryId);
  const totalCount = parties.length * allIssues.length;

  const [activeIssueId, setActiveIssueId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('table');

  // Best-effort sync with the site-wide topic filter — only applies if this
  // country happens to have an issue tagged with the same global topic.
  useEffect(() => {
    if (!selectedTopic) return;
    const match = allIssues.find((i) => i.topicId === selectedTopic);
    if (match) setActiveIssueId(match.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTopic, activeCountryId]);

  const visibleIssues = useMemo(
    () => (activeIssueId ? allIssues.filter((i) => i.id === activeIssueId) : allIssues),
    [allIssues, activeIssueId]
  );

  const activeIssue = allIssues.find((i) => i.id === activeIssueId) ?? null;

  return (
    <section id="parties" className="py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4">
            Party Policy Comparison Center
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-4 rounded-full" />
          <p className="text-lg text-[#03353E]/70 max-w-3xl mx-auto">
            Compare political parties across key national issues and public policy areas.
          </p>
          {!selectedCountry && (
            <p className="mt-3 text-sm text-[#5C8C85]">
              Showing {country?.name} by default — select a country on the map above to
              compare its parties.
            </p>
          )}
        </motion.div>

        {/* Responsive: sidebar / main content */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          {/* Country sidebar */}
          <motion.aside
            className="lg:sticky lg:top-28 lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-gray-200 bg-[#F5F5F5] p-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl leading-none">{country?.flag}</span>
                <div>
                  <h3 className="font-semibold text-[#03353E]">{country?.name}</h3>
                  {profile && (
                    <p className="text-xs text-[#03353E]/50">{profile.parliamentName}</p>
                  )}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#03353E]/60">
                    <Landmark className="h-3.5 w-3.5" />
                    Parties tracked
                  </span>
                  <span className="font-semibold text-[#03353E]">{parties.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#03353E]/60">
                    <Table2 className="h-3.5 w-3.5" />
                    Policy issues
                  </span>
                  <span className="font-semibold text-[#03353E]">{allIssues.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#03353E]/60">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Sourced positions
                  </span>
                  <span className="font-semibold text-[#03353E]">
                    {verifiedCount}/{totalCount}
                  </span>
                </div>
              </div>
              <p className="mt-4 border-t border-gray-200 pt-3 text-xs text-[#03353E]/50 leading-relaxed">
                Positions come only from official manifestos, party websites, parliamentary
                records, and government publications. Anything we couldn't verify is marked
                "No Clear Position" rather than guessed.
              </p>
            </div>
          </motion.aside>

          {/* Main content */}
          <div className="lg:col-span-9 space-y-6">
            {/* Policy filter chips */}
            <PolicyFilterChips
              issues={allIssues}
              activeIssueId={activeIssueId}
              onSelectIssue={setActiveIssueId}
            />

            {/* View mode tabs */}
            <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
              {viewTabs.map(({ id, label, icon: Icon }) => {
                const isActive = viewMode === id;
                return (
                  <button
                    key={id}
                    onClick={() => setViewMode(id)}
                    className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#03353E] text-white'
                        : 'text-[#03353E]/60 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>

            {viewMode === 'table' && (
              <>
                <PartyComparisonTable
                  countryId={activeCountryId}
                  issues={visibleIssues}
                  parties={parties}
                  activeIssueId={activeIssueId}
                  onSelectIssue={(id) => setActiveIssueId(id === activeIssueId ? null : id)}
                />
                {activeIssue && (
                  <PolicyIssueDetails
                    countryId={activeCountryId}
                    issue={activeIssue}
                    parties={parties}
                    onClose={() => setActiveIssueId(null)}
                  />
                )}
              </>
            )}

            {viewMode === 'scorecard' && (
              <PolicyScorecard
                countryId={activeCountryId}
                countryName={country?.name ?? ''}
                issues={visibleIssues}
                parties={parties}
              />
            )}

            {viewMode === 'compare' && (
              <PartyCompareMode
                countryId={activeCountryId}
                parties={parties}
                issues={visibleIssues}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoliticalPartiesSection;
