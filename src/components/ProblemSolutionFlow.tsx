import React from 'react';
import { ArrowRight, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProblemSolutionFlow: React.FC = () => {
  const steps = [
    {
      step: '01',
      phase: 'The Problem',
      icon: AlertCircle,
      iconColor: 'text-rose-500 bg-rose-50',
      title: 'Scattered Notebooks & Jargon',
      points: [
        'Sales recorded on paper receipts that get lost',
        'No idea of true profit after subtracting inventory costs',
        'Overcomplicated accounting software designed for big corps',
      ],
    },
    {
      step: '02',
      phase: 'The Simple Solution',
      icon: Sparkles,
      iconColor: 'text-amber-500 bg-amber-50',
      title: 'Ledger Micro-POS',
      points: [
        'One-tap sales recording right on your phone or counter',
        'Automatic margin calculation on every single transaction',
        'Clean receipts sent to WhatsApp in one tap',
      ],
    },
    {
      step: '03',
      phase: 'Better Control',
      icon: CheckCircle2,
      iconColor: 'text-emerald-500 bg-emerald-50',
      title: 'Peace of Mind Every Day',
      points: [
        'Know daily revenue, actual profit, and pending dues instantly',
        'Restock products before running out of top sellers',
        'Make confident business decisions with clear numbers',
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      {steps.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={item.phase}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs relative flex flex-col justify-between hover:border-slate-300 transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                  {item.step}
                </span>
                <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                  {item.phase}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.iconColor}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h4>
              </div>

              <ul className="space-y-2.5 mt-4 text-xs sm:text-sm text-slate-600">
                {item.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400 mt-1 shrink-0">·</span>
                    <span className="leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {index < 2 && (
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white p-1 rounded-full border border-slate-200 text-slate-400 shadow-xs">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
