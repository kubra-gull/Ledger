import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight, DollarSign, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LEDGER_APP_URL } from '../constants';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-none mx-auto pt-6 pb-4">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Floating Card: Gross Profit Widget (matching the Metric screenshot) */}
      <motion.div 
        initial={{ opacity: 0, y: 15, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden sm:flex absolute -top-4 -right-3 sm:-right-4 z-20 bg-slate-900/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-2xl border border-slate-800 shadow-2xl text-white space-y-2.5 min-w-[200px]"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-semibold text-slate-300">Gross Profit</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-800/40">
            34% Margin
          </span>
        </div>

        <div>
          <span className="text-xl font-extrabold text-white tabular-nums tracking-tight">
            Rs. 42,500
          </span>
          <p className="text-[10px] text-slate-400 mt-0.5">Calculated automatically</p>
        </div>

        {/* Glowing SVG Area Sparkline Graph */}
        <div className="pt-0.5">
          <svg viewBox="0 0 150 35" className="w-full h-8 overflow-visible">
            <defs>
              <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 30 Q 30 24, 55 26 T 95 15 T 125 12 T 150 5 L 150 35 L 0 35 Z"
              fill="url(#profitGrad)"
            />
            <path
              d="M 0 30 Q 30 24, 55 26 T 95 15 T 125 12 T 150 5"
              fill="none"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="150" cy="5" r="3" fill="#10B981" className="animate-pulse" />
          </svg>
        </div>
      </motion.div>

      {/* Floating Card: Revenue & Growth (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="hidden sm:flex absolute -bottom-3 -left-3 sm:-left-4 z-20 bg-slate-900/95 backdrop-blur-xl px-4 py-3 rounded-2xl border border-slate-800 shadow-2xl text-white items-center gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
          <TrendingUp className="w-4 h-4" />
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Total Revenue</span>
            <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-1 py-0.2 rounded">
              +18.4%
            </span>
          </div>
          <p className="text-base font-bold text-white tabular-nums">Rs. 125,000</p>
        </div>
      </motion.div>

      {/* Main Hero Card Container */}
      <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-5 sm:p-8 border border-slate-800/90 shadow-2xl relative overflow-hidden">
        
        {/* Subtle radial sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/25 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 space-y-5">
          
          {/* Top Bar of Card */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black border border-slate-700 flex items-center justify-center">
                {/* Mini Ledger Diamond glyph */}
                <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
                  <rect x="25" y="25" width="50" height="50" rx="3" transform="rotate(45 50 50)" stroke="#FFFFFF" strokeWidth="8" fill="none" />
                  <rect x="36" y="36" width="28" height="28" rx="2" transform="rotate(45 50 50)" stroke="#FFFFFF" strokeWidth="6" fill="none" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Ledger Financial Dashboard</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </p>
                <p className="text-[11px] text-slate-400">Real-time daily ledger &amp; micro-POS</p>
              </div>
            </div>

            <a
              href={LEDGER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>Live App</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Central Insight Pill / Message Bubble */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-3.5 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-[11px] text-slate-400 font-medium">Daily Financial Summary</p>
              <p className="text-xs sm:text-sm font-semibold text-white">
                "Today your net profit margin reached <span className="text-emerald-400 font-bold">34%</span> on 128 orders."
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 bg-emerald-950/90 px-2.5 py-1 rounded-lg border border-emerald-800/60 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cash Register Balanced</span>
            </div>
          </div>

          {/* 2x2 Core Metrics Grid (perfect for side-by-side right column) */}
          <div className="grid grid-cols-2 gap-3 pt-0.5">
            <div className="bg-slate-900/90 p-3 sm:p-3.5 rounded-xl border border-slate-800/90 space-y-0.5">
              <span className="text-[11px] text-slate-400">Total Revenue</span>
              <p className="text-base sm:text-lg font-bold text-white tabular-nums">Rs. 125,000</p>
              <p className="text-[10px] text-emerald-400 font-medium">+18.4% month</p>
            </div>

            <div className="bg-slate-900/90 p-3 sm:p-3.5 rounded-xl border border-slate-800/90 space-y-0.5">
              <span className="text-[11px] text-slate-400">Net Profit</span>
              <p className="text-base sm:text-lg font-bold text-emerald-400 tabular-nums">Rs. 42,500</p>
              <p className="text-[10px] text-slate-400">34% actual margin</p>
            </div>

            <div className="bg-slate-900/90 p-3 sm:p-3.5 rounded-xl border border-slate-800/90 space-y-0.5">
              <span className="text-[11px] text-slate-400">Completed Orders</span>
              <p className="text-base sm:text-lg font-bold text-white tabular-nums">128</p>
              <p className="text-[10px] text-slate-400">14 today</p>
            </div>

            <div className="bg-slate-900/90 p-3 sm:p-3.5 rounded-xl border border-slate-800/90 space-y-0.5">
              <span className="text-[11px] text-slate-400">Cash in Hand</span>
              <p className="text-base sm:text-lg font-bold text-white tabular-nums">Rs. 14,200</p>
              <p className="text-[10px] text-teal-400 font-medium">Safe in drawer</p>
            </div>
          </div>

          {/* Bottom Trust Note */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero accounting knowledge required</span>
            </div>
            <span className="text-slate-500 font-mono text-[10px]">Ledger Engine</span>
          </div>

        </div>

      </div>

    </div>
  );
};
