import React from 'react';
import { Check, X, Minus, HelpCircle } from 'lucide-react';
import { Stance } from '@/data/parties/types';

export const stanceMeta: Record<Stance, { label: string; icon: React.ElementType; color: string }> = {
  support: { label: 'Support', icon: Check, color: '#5C8C85' },
  oppose: { label: 'Oppose', icon: X, color: '#D1835A' },
  partial: { label: 'Partial Support', icon: Minus, color: '#c2872f' },
  unknown: { label: 'No Clear Position', icon: HelpCircle, color: '#9CA3AF' },
};

interface StanceIndicatorProps {
  stance: Stance;
  size?: 'sm' | 'md';
  showLabel?: boolean;
}

const StanceIndicator: React.FC<StanceIndicatorProps> = ({ stance, size = 'md', showLabel = false }) => {
  const meta = stanceMeta[stance];
  const Icon = meta.icon;

  if (showLabel) {
    return (
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-white"
        style={{ backgroundColor: meta.color }}
      >
        <Icon className="h-3.5 w-3.5" />
        {meta.label}
      </span>
    );
  }

  const dim = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';
  const iconDim = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <span
      className={`inline-flex items-center justify-center rounded-full ${dim}`}
      style={{ backgroundColor: `${meta.color}1f` }}
      title={meta.label}
    >
      <Icon className={iconDim} style={{ color: meta.color }} />
    </span>
  );
};

export default StanceIndicator;
