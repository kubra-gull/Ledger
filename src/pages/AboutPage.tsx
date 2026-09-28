import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  BookOpen, 
  Check, 
  Sparkles, 
  CreditCard, 
  BarChart3, 
  Wallet, 
  Boxes, 
  FileCheck, 
  Layers,
  Code2,
  Cpu,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { LEDGER_APP_URL } from '../constants';
import { LedgerLogo } from '../components/LedgerLogo';

export const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'project'>('about');
  const [selectedFeatureIdx, setSelectedFeatureIdx] = useState<number>(0);

  const productFeatures = [
    {
      title: 'Sales Management',
      icon: CreditCard,
      description: 'Quickly log counter, online, or walk-in sales with product items, tags, and multi-mode payment support.',
      capabilities: ['Fast 3-second recording', 'Multi-mode payment logging', 'Customer phone & order link'],
    },
    {
      title: 'Profit Tracking',
      icon: BarChart3,
      description: 'Automatic cost-of-goods separation to see your daily, weekly, and monthly net margins accurately.',
      capabilities: ['Gross margin calculation', 'COGS deduction', 'Daily net profit summary'],
    },
    {
      title: 'Orders & Cash Flow',
      icon: Wallet,
      description: 'Monitor ongoing orders, advance deposits, pending dues, and verify cash in your register drawer.',
      capabilities: ['Register balance auditing', 'Customer advance tracking', 'Pending receivables log'],
    },
    {
      title: 'Inventory',
      icon: Boxes,
      description: 'Add products, update cost and selling prices, track current inventory levels, and receive stock warnings.',
      capabilities: ['Product catalog', 'Low stock alerts', 'Unit cost management'],
    },
    {
      title: 'Receipts',
      icon: FileCheck,
      description: 'Create clean, branded digital receipts that can be sent straight to customers over WhatsApp or printed.',
      capabilities: ['One-tap WhatsApp share', 'Custom store branding', 'Print-friendly format'],
    },
    {
      title: 'AI Message Parsing',
      icon: Sparkles,
      description: 'Convert unstructured customer chat messages into structured order items with automatic math.',
      capabilities: ['Instant chat parsing', 'Item and quantity extraction', 'Address detection'],
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          About Ledger
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed text-balance">
          Ledger is a simple business management and financial tracking software built to help small businesses stay organized and understand their numbers.
        </p>

        {/* Tab Switcher: About Company & Story VS. Product / Project Page */}
        <div className="pt-4 flex items-center justify-center gap-2">
          <div className="bg-slate-200/80 p-1 rounded-xl flex items-center gap-1 text-sm font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`px-5 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'about'
                  ? 'bg-white text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About Ledger &amp; Team
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('project')}
              className={`px-5 py-2 rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'project'
                  ? 'bg-white text-slate-950 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Project &amp; Product Page</span>
            </button>
          </div>
        </div>
      </motion.section>

      {/* VIEW 1: ABOUT COMPANY & STORY */}
      {activeTab === 'about' && (
        <div className="space-y-16">
          
          {/* Origin & Development Journey (No image per user request) */}
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6"
          >
            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                Built from direct observation of daily retail operations.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                The idea behind Ledger was born from watching everyday shopkeepers, bazaar vendors, home bakers, and online entrepreneurs struggle with confusing accounting packages. Most available tools were built for accountants, requiring debits, credits, journal entries, and reconciliation rules that slow small business owners down.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Through practical development, testing, and feedback at the <strong>National Incubation Center (NIC) Hyderabad</strong>, the founders stripped away all accounting jargon to focus solely on what matters: how much was sold, what was spent on stock, what is left in cash, and what net profit was made.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs text-slate-400 font-mono">01</span>
                <p className="text-sm font-bold text-slate-900 mt-1">Real Merchant Feedback</p>
                <p className="text-xs text-slate-500 mt-0.5">Tested with live bazaar and online sellers.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs text-slate-400 font-mono">02</span>
                <p className="text-sm font-bold text-slate-900 mt-1">Zero Accounting Jargon</p>
                <p className="text-xs text-slate-500 mt-0.5">No debit/credit confusion or complicated math.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs text-slate-400 font-mono">03</span>
                <p className="text-sm font-bold text-slate-900 mt-1">3-Second Sales Logging</p>
                <p className="text-xs text-slate-500 mt-0.5">Instant touch entry for rapid checkout.</p>
              </div>
            </div>
          </motion.section>

          {/* Leadership & Co-Founders */}
          <motion.section 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">The People Behind Ledger</h2>
              <p className="text-sm text-slate-600">Guided by real-world merchant experience and practical software engineering.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Shamsa Malik */}
              <div 
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-emerald-500 hover:-translate-y-1.5 hover:shadow-md transition-all duration-200 cursor-pointer space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-bold text-xl flex items-center justify-center shadow-sm">
                    SM
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Shamsa Malik</h3>
                    <p className="text-xs font-semibold text-emerald-700">Founder</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Leading product vision, technical architecture, and system design. Shamsa focused on ensuring Ledger handles transactions instantly on any device with zero friction.
                </p>
              </div>

              {/* Kubra Batool */}
              <div 
                className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs hover:border-teal-500 hover:-translate-y-1.5 hover:shadow-md transition-all duration-200 cursor-pointer space-y-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-teal-600 text-white font-bold text-xl flex items-center justify-center shadow-sm">
                    KB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Kubra Batool</h3>
                    <p className="text-xs font-semibold text-teal-700">Co-Founder</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Spearheading merchant interviews, user onboarding, and operational clarity. Kubra ensures every feature solves real pain points encountered by small entrepreneurs.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      )}

      {/* VIEW 2: PRODUCT / PROJECT PAGE */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-xl space-y-10"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Ledger Product</h2>
            <p className="text-slate-400 text-sm mt-1">
              Micro-POS and real-time financial tracking architecture for small businesses.
            </p>
          </div>

          <a
            href={LEDGER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shrink-0 hover:-translate-y-0.5"
          >
            <span>Open Ledger Software</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Product Information & Features with Clickable Hover Boxes */}
        <div className="space-y-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Explore Product Modules (Click any box to inspect)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              const isSelected = selectedFeatureIdx === idx;
              return (
                <div
                  key={feat.title}
                  onClick={() => setSelectedFeatureIdx(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-lg ${
                    isSelected
                      ? 'bg-slate-900 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-emerald-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">{feat.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-1 text-xs text-slate-400">
                    {feat.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Project Architecture Overview Box */}
        <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <Cpu className="w-4 h-4" />
            <span>ARCHITECTURAL PRINCIPLES</span>
          </div>
          <h3 className="text-xl font-bold text-white">Built for speed, offline reliability, and absolute zero bloat.</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300 pt-2">
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <p className="font-bold text-white mb-1">Instant Response</p>
              <p className="text-slate-400 leading-relaxed">Runs directly in mobile and desktop browsers with sub-100ms interaction feedback.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <p className="font-bold text-white mb-1">Single Source of Truth</p>
              <p className="text-slate-400 leading-relaxed">Eliminates double-entry books. Sales instantly update inventory, cash, and profit.</p>
            </div>
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <p className="font-bold text-white mb-1">Zero Lock-in</p>
              <p className="text-slate-400 leading-relaxed">Merchants can export and share records via WhatsApp receipts anytime.</p>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
