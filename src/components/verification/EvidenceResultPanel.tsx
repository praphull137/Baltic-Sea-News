import React from 'react';
import { motion } from 'framer-motion';
import { Download, RotateCcw, Sparkles } from 'lucide-react';
import { EvidenceVerificationResult, VerdictTone } from '@/services/types';
import { downloadEvidenceReportPdf } from '@/services/reportGenerator';
import EvidenceSection from './EvidenceSection';
import SourcesUsedList from './SourcesUsedList';
import SourceIntelligencePanel from './SourceIntelligencePanel';
import VerificationTrail from './VerificationTrail';

const toneColor: Record<VerdictTone, string> = {
  positive: '#5C8C85',
  negative: '#D1835A',
  caution: '#c2872f',
  neutral: '#9CA3AF',
};

interface EvidenceResultPanelProps {
  result: EvidenceVerificationResult;
  onReset: () => void;
}

const EvidenceResultPanel: React.FC<EvidenceResultPanelProps> = ({ result, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-5 space-y-6 rounded-xl border border-gray-200 bg-white p-5"
    >
      {/* Verdict + confidence */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 text-sm font-semibold text-white"
            style={{ backgroundColor: toneColor[result.tone] }}
          >
            {result.verdict}
          </span>
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Confidence</p>
            <p className="text-xl font-bold" style={{ color: toneColor[result.tone] }}>
              {result.confidence}%
            </p>
          </div>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-100">
          <motion.div
            className="h-2 rounded-full"
            style={{ backgroundColor: toneColor[result.tone] }}
            initial={{ width: 0 }}
            animate={{ width: `${result.confidence}%` }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <p className="mt-3 text-sm font-medium text-[#03353E]/70">Claim assessed:</p>
        <p className="text-sm italic text-[#03353E]">"{result.claim}"</p>
      </div>

      {/* AI Analysis */}
      <div>
        <div className="mb-1.5 flex items-center gap-1.5">
          <Sparkles className="h-4 w-4 text-[#5C8C85]" />
          <h4 className="text-sm font-semibold text-[#03353E]">AI Analysis</h4>
        </div>
        <p className="text-sm leading-relaxed text-[#03353E]/80">{result.aiAnalysis}</p>
      </div>

      {/* Why we reached this conclusion */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="mb-4 text-sm font-semibold text-[#03353E]">Why We Reached This Conclusion</h4>
        <div className="space-y-5">
          <EvidenceSection
            title="Supporting Evidence"
            items={result.supportingEvidence}
            stance="supporting"
            sources={result.sources}
          />
          <EvidenceSection
            title="Contradicting Evidence"
            items={result.contradictingEvidence}
            stance="contradicting"
            sources={result.sources}
          />
        </div>
      </div>

      {/* Sources used */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="mb-3 text-sm font-semibold text-[#03353E]">
          Sources Used <span className="font-normal text-[#03353E]/50">({result.sources.length})</span>
        </h4>
        <SourcesUsedList sources={result.sources} />
      </div>

      {/* Source intelligence */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="mb-3 text-sm font-semibold text-[#03353E]">Source Intelligence</h4>
        <SourceIntelligencePanel sources={result.sources} intelligence={result.sourceIntelligence} />
      </div>

      {/* Verification trail */}
      <div className="border-t border-gray-100 pt-5">
        <h4 className="mb-3 text-sm font-semibold text-[#03353E]">Verification Trail</h4>
        <VerificationTrail trail={result.trail} />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-5">
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 text-sm font-semibold text-[#D1835A] hover:text-[#bf6f47]"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Verify another
        </button>
        <button
          onClick={() => downloadEvidenceReportPdf(result)}
          className="flex items-center gap-1.5 rounded-lg bg-[#487f7b] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3a6a68]"
        >
          <Download className="h-3.5 w-3.5" />
          Download Evidence Report
        </button>
      </div>
    </motion.div>
  );
};

export default EvidenceResultPanel;
