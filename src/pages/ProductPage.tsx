import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  CreditCard, 
  BarChart3, 
  Wallet, 
  Boxes, 
  FileCheck, 
  Sparkles, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { LEDGER_APP_URL, FEATURES } from '../constants';

export const ProductPage: React.FC = () => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>('sales');

  const detailedModules = [
    {
      id: 'sales',
      title: 'Micro-POS & Sales Logging',
      badge: 'Core Engine',
      description: 'Record retail counter transactions in under 3 seconds. Tap items or enter custom amounts with immediate receipt generation.',
      points: [
        'Single-touch product catalog selection',
        'Multi-payment methods: Cash, Card, Bank Transfer, Customer Advance',
        'Automatic customer order linking and digital receipt dispatch',
      ],
      previewStats: { label: 'Average checkout time', value: '2.8s' },
    },
    {
      id: 'profit',
      title: 'Real-Time Net Profit Engine',
      badge: 'Financial Clarity',
      description: 'Never guess whether your business is actually making money. Ledger matches every selling price with its unit cost automatically.',
      points: [
        'Instant cost-of-goods deduction upon sale',
        'Daily, weekly, and monthly net profit reports',
        'Product-level profit margin analytics',
      ],
      previewStats: { label: 'Automated margin tracking', value: '100% Real-time' },
    },
    {
      id: 'orders',
      title: 'Cash Drawer & Dues Manager',
      badge: 'Liquidity Tracking',
      description: 'Know exactly how much cash is in your counter drawer versus in bank accounts, and track pending customer credit/dues.',
      points: [
        'Register opening and closing drawer reconciliation',
        'Track partial customer deposits and balances due',
        'Instant alerts for unsettled balances',
      ],
      previewStats: { label: 'Register accuracy', value: 'Zero discrepancy' },
    },
    {
      id: 'inventory',
      title: 'Simple Inventory & Stock Alerts',
      badge: 'Stock Control',
      description: 'Keep your stock counts accurate without complex warehouse software. Monitor quantities and get alerted before running out.',
      points: [
        'Automatic stock depletion on every recorded sale',
        'Configurable low-stock warning thresholds',
        'Fast product adding with cost price vs. retail price',
      ],
      previewStats: { label: 'Stock monitoring', value: 'Live countdown' },
    },
    {
      id: 'receipts',
      title: 'Digital Branded Receipts',
      badge: 'Customer Trust',
      description: 'Send professional, clean receipts directly to customers via WhatsApp or SMS in a single tap, or print them on thermal paper.',
      points: [
        'One-click WhatsApp receipt sharing',
        'Custom business name, logo, and contact info',
        'Thermal printer compatible formatting',
      ],
      previewStats: { label: 'Receipt generation', value: '1-click send' },
    },
    {
      id: 'ai-parser',
      title: 'AI Message Parser for Orders',
      badge: 'Practical Helper',
      description: 'Paste unstructured customer messages from WhatsApp or Instagram DMs to automatically extract items, address, and totals.',
      points: [
        'Extracts item names, quantities, and variations',
        'Pulls delivery address and phone number',
        'Calculates total amount due instantly',
      ],
      previewStats: { label: 'Time saved per phone order', value: '~3 minutes' },
    },
  ];

  return (
    <div className="py-12 sm:py-20 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center space-y-5"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          The Ledger Software
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed text-balance">
          Simple micro-POS, cash flow tracking, and profit analytics built specifically for small businesses, local retail shops, and independent entrepreneurs.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={LEDGER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md hover:-translate-y-0.5"
          >
            <span>Open Ledger Software</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>
      </motion.section>

      {/* Product Modules Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-10"
      >
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Everything in One Place</h2>
          <p className="text-sm text-slate-600">Six dedicated modules working seamlessly together.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedModules.map((mod) => {
            const isSelected = selectedFeatureId === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => setSelectedFeatureId(mod.id)}
                className={`p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-lg ${
                  isSelected
                    ? 'bg-emerald-50/40 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {mod.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 tabular-nums">
                      {mod.previewStats.value}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    {mod.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{mod.previewStats.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Product Simplicity Comparison Banner */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8"
      >
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Small Businesses Choose Ledger</h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Unlike corporate accounting software that requires weeks of training, Ledger requires zero setup time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <span className="text-xs font-semibold text-rose-400">Traditional Accounting Tools</span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>❌ Requires debits, credits, and journal balance rules</li>
              <li>❌ Slow, multi-step checkout processes</li>
              <li>❌ Expensive monthly subscriptions per terminal</li>
              <li>❌ Steep learning curve for retail employees</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-3">
            <span className="text-xs font-semibold text-emerald-400">With Ledger</span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
              <li>✓ Plain numbers: Sales, Expenses, Cash, and Net Profit</li>
              <li>✓ 3-second quick sales logging right on phone or counter</li>
              <li>✓ 100% Free to start with zero complicated setups</li>
              <li>✓ Anyone can use it in 60 seconds without training</li>
            </ul>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Accessible in any modern browser on mobile, tablet, or PC</span>
          </div>

          <a
            href={LEDGER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-md shrink-0 hover:-translate-y-0.5"
          >
            <span>Launch Ledger Software</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.section>

    </div>
  );
};
