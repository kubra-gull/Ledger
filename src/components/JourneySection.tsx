import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="py-20 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Subtle radial glow background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            From an idea to something real.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Ledger started with a single conviction: small businesses and everyday entrepreneurs shouldn't have to fight complicated accounting spreadsheets just to know how much profit they made today.
          </p>
        </div>

        {/* Narrative & Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: NIC Hyderabad Incubation & Product Evolution */}
          <div className="lg:col-span-6 bg-slate-800/80 rounded-2xl p-7 sm:p-9 border border-slate-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Shaped by real merchants, practical feedback, and live counters.
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                During our incubation at the <strong>National Incubation Center (NIC) Hyderabad</strong>, we spent weeks observing local retail shops, boutique owners, and home bakers. We watched them scramble with handwritten diaries, unrecorded cash, and lost sales tickets.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                Most existing software was either too bloated, too expensive, or designed for corporate accountants. We stripped away the excess to build Ledger: a focused, intuitive tool that gives merchants instant clarity over sales, inventory, and net profit.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-700/60 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-400">Environment</p>
                <p className="text-sm font-bold text-white mt-0.5">NIC Hyderabad</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Core Focus</p>
                <p className="text-sm font-bold text-emerald-400 mt-0.5">Micro-POS</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Philosophy</p>
                <p className="text-sm font-bold text-white mt-0.5">Simplicity First</p>
              </div>
            </div>
          </div>

          {/* Right: Founders Showcase */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            
            {/* Shamsa Malik */}
            <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-700/80 hover:border-emerald-500/50 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                SM
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">Shamsa Malik</h4>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                    Founder
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">Product &amp; System Architecture</p>
                <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-relaxed">
                  "Our goal was never to build the most complex accounting suite. It was to build the simplest one — so an entrepreneur can record a sale in 3 seconds and know their exact net profit."
                </p>
              </div>
            </div>

            {/* Kubra Batool */}
            <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-700/80 hover:border-teal-500/50 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-700 flex items-center justify-center text-white text-xl font-bold shrink-0 shadow-md group-hover:scale-105 transition-transform">
                KB
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">Kubra Batool</h4>
                  <span className="text-xs font-semibold text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800/40">
                    Co-Founder
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-medium">Merchant Experience &amp; Growth</p>
                <p className="text-xs sm:text-sm text-slate-300 pt-1 leading-relaxed">
                  "Listening to home-based businesses and small shopkeepers at NIC Hyderabad taught us that real simplicity is hard work. Ledger removes cognitive overload from daily business."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </motion.section>
  );
};
