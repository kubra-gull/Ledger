import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  PlusCircle, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LEDGER_APP_URL } from '../constants';

const STEPS = [
  {
    number: '01',
    title: 'Record',
    subtitle: 'Add your sales and business transactions in seconds.',
    description: 'Whether a customer walks in, orders on WhatsApp, or calls by phone, logging the sale takes just a few taps. Choose the item, specify quantity, and tag the payment mode.',
    icon: PlusCircle,
    details: [
      'Select product or type custom sale amount',
      'Choose payment method: Cash, Card, Bank Transfer, or Advance',
      'Record customer name and phone for automatic receipt generation',
    ],
    highlight: 'Instant 3-second sale entry',
  },
  {
    number: '02',
    title: 'Track',
    subtitle: 'Monitor orders, cash, inventory, and expenses continuously.',
    description: 'Never wonder if you have enough cash in the drawer or if a customer still owes you a remaining balance. Ledger tracks pending dues and automatically adjusts inventory numbers.',
    icon: LineChart,
    details: [
      'Automatic stock reduction upon completed sales',
      'Log customer partial deposits and track remaining balances',
      'Keep track of daily physical cash vs. digital payments',
    ],
    highlight: 'Live cash drawer & dues visibility',
  },
  {
    number: '03',
    title: 'Understand',
    subtitle: 'See revenue, costs, and profit in one clean place.',
    description: 'High sales do not always mean high profit. Ledger pairs every selling price with its unit cost to give you your true net profit margin automatically.',
    icon: PieChart,
    details: [
      'Instant gross revenue and cost of goods sold (COGS)',
      'Real-time net profit calculation on every item and day',
      'Zero complex accounting equations or debits/credits to decipher',
    ],
    highlight: 'Automated margin & net profit calculations',
  },
  {
    number: '04',
    title: 'Grow',
    subtitle: 'Use clear financial information to make better business decisions.',
    description: 'Armed with accurate records, you know exactly which products make the most profit, when to reorder inventory, and how to scale your business sustainably.',
    icon: TrendingUp,
    details: [
      'Spot your highest margin products and top sellers',
      'Eliminate dead stock holding up working capital',
      'Reinvest earnings with complete financial confidence',
    ],
    highlight: 'Clear data for sustainable scaling',
  },
];

export const HowItWorksPage: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <div className="py-12 sm:py-20 space-y-20">
      
      {/* Top Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          How Ledger Works
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Four practical steps to run your business with complete clarity and zero accounting headaches.
        </p>

        {/* Visual Flow: Record → Track → Understand → Grow */}
        <div className="pt-6">
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-slate-800">
            <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">Record</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-teal-700 bg-teal-50 px-3 py-1 rounded-lg">Track</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-blue-700 bg-blue-50 px-3 py-1 rounded-lg">Understand</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
            <span className="text-indigo-700 bg-indigo-50 px-3 py-1 rounded-lg">Grow</span>
          </div>
        </div>
      </motion.section>

      {/* Interactive Step Explorer */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-md ${
                activeStepIndex === idx
                  ? 'bg-emerald-50/50 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-slate-400">
                  {step.number}
                </span>
                {activeStepIndex === idx && (
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                )}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{step.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              STEP {activeStep.number}
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {activeStep.number} — {activeStep.title}: {activeStep.subtitle}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {activeStep.description}
            </p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Key Capabilities</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {activeStep.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clean Light Outcome Focus Card (clean modern aesthetic, no dark preview box) */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                {activeStep.number}
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Workflow Outcome</p>
                <h4 className="text-base font-bold text-slate-900">{activeStep.title} in Practice</h4>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Business Impact</p>
              <p className="text-sm font-medium text-slate-800">{activeStep.highlight}</p>
            </div>

            <div className="pt-2">
              <a
                href={LEDGER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-all"
              >
                <span>Try this in Ledger now</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>
            </div>
          </div>
        </div>

      </motion.section>

      {/* 4-Step Summary Cards */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-bold text-slate-900">The Complete Cycle at a Glance</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">Every step connects seamlessly into your daily ledger.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 hover:-translate-y-1.5 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">{step.number}</span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-emerald-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">{step.subtitle}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-medium text-emerald-700">
                  <span>Simple &amp; fast</span>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Large Prominent Open Ledger CTA */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 text-center border border-slate-800 shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white max-w-xl mx-auto">
            Experience the 4 steps in action now.
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Open Ledger in your browser immediately. No installation required.
          </p>

          <div className="pt-2">
            <a
              href={LEDGER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg transition-all hover:-translate-y-0.5"
            >
              <span>Open Ledger</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-slate-500">Redirects directly to https://ledger-wfwc.vercel.app</p>
        </div>
      </motion.section>

    </div>
  );
};
