import React from 'react';
import { CheckCircle2, Circle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TrailStep } from '@/services/types';

interface VerificationTrailProps {
  trail: TrailStep[];
  compact?: boolean;
}

const VerificationTrail: React.FC<VerificationTrailProps> = ({ trail, compact = false }) => {
  return (
    <div className={compact ? 'space-y-2' : 'space-y-3'}>
      {trail.map((step, i) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.04 }}
          className="flex items-start gap-2.5"
        >
          {step.status === 'done' ? (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#5C8C85]" />
          ) : step.status === 'active' ? (
            <Loader2 className="mt-0.5 h-4 w-4 shrink-0 animate-spin text-[#D1835A]" />
          ) : (
            <Circle className="mt-0.5 h-4 w-4 shrink-0 text-gray-300" />
          )}
          <div className="min-w-0">
            <p
              className={`text-sm font-medium ${
                step.status === 'pending' ? 'text-gray-400' : 'text-[#03353E]'
              }`}
            >
              {step.label}
            </p>
            {step.detail && (
              <p className="text-xs text-[#03353E]/50">{step.detail}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default VerificationTrail;
