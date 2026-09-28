import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowRight, 
  Store, 
  ShoppingBag, 
  Home, 
  Briefcase, 
  ReceiptText, 
  TrendingUp, 
  Coins, 
  Package, 
  CheckCircle2, 
  CreditCard, 
  BarChart3, 
  Wallet, 
  Boxes, 
  FileCheck, 
  Sparkles,
  Check
} from 'lucide-react';
import { 
  LEDGER_APP_URL, 
  BUSINESS_SEGMENTS, 
  REAL_PROBLEMS, 
  FEATURES, 
  PRICING_PLANS 
} from '../constants';
import { HeroVisual } from '../components/HeroVisual';
import { ProblemSolutionFlow } from '../components/ProblemSolutionFlow';
import { JourneySection } from '../components/JourneySection';

export const HomePage: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>('shops');
  const [selectedProblemIdx, setSelectedProblemIdx] = useState<number>(0);
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>('sales');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('business');

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative pt-12 sm:pt-20 pb-8 overflow-hidden"
      >
        {/* Subtle mesh background accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-100/60 via-teal-50/40 to-emerald-50/60 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left side: Hero text */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
               Run your business.
Know your numbers.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Ledger helps small businesses record sales, track cash, understand profit, manage inventory, and keep their financial records organized — without complicated accounting.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={LEDGER_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-950 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>Open Ledger</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>

                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 active:bg-slate-100 rounded-xl border border-slate-200 shadow-xs transition-all hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <span>See How It Works</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2">
                <span>Zero accounting knowledge needed</span>
                <span aria-hidden="true">·</span>
                <span>Instant browser access</span>
                <span aria-hidden="true">·</span>
                <span>100% Free to start</span>
              </div>
            </div>

            {/* Right side: Image / Visual Mockup */}
            <div className="lg:col-span-6">
              <HeroVisual />
            </div>

          </div>

        </div>
      </motion.section>

      {/* 2. BUILT FOR SMALL BUSINESSES SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Built for small businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
            Running a small business shouldn't require complicated accounting software. Ledger is designed for entrepreneurs who want a simple way to record transactions, understand their numbers, and stay in control of their business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_SEGMENTS.map((seg) => {
            const getIcon = (name: string) => {
              switch (name) {
                case 'Store': return Store;
                case 'ShoppingBag': return ShoppingBag;
                case 'Home': return Home;
                default: return Briefcase;
              }
            };
            const IconComponent = getIcon(seg.iconName);
            const isSelected = selectedSegmentId === seg.id;

            return (
              <div
                key={seg.id}
                onClick={() => setSelectedSegmentId(seg.id)}
                className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-md ${
                  isSelected
                    ? 'bg-emerald-50/50 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold transition-colors ${
                      isSelected ? 'text-emerald-900' : 'text-slate-900 group-hover:text-emerald-800'
                    }`}>
                      {seg.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {seg.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">
                    <span className="text-emerald-700 font-semibold">Practical use: </span>
                    {seg.example}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 3. BUILT AROUND REAL BUSINESS PROBLEMS SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Built around real business problems
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Ledger solves the everyday operational pain points small business owners face every morning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_PROBLEMS.map((problem, idx) => {
            const getIcon = (name: string) => {
              switch (name) {
                case 'ReceiptText': return ReceiptText;
                case 'TrendingUp': return TrendingUp;
                case 'Coins': return Coins;
                case 'Package': return Package;
                default: return CheckCircle2;
              }
            };
            const Icon = getIcon(problem.icon);
            const isSelected = selectedProblemIdx === idx;

            return (
              <div
                key={problem.title}
                onClick={() => setSelectedProblemIdx(idx)}
                className={`p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-md ${
                  isSelected
                    ? 'bg-emerald-50/40 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{problem.takeaway}</span>
                </div>
              </div>
            );
          })}

          {/* Quick interactive callout card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 text-white p-7 rounded-2xl shadow-md flex flex-col justify-between hover:-translate-y-1.5 transition-all">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Experience the difference today</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No sign-up fee, no long manuals, and no complex settings. Open Ledger right away and record your first sale.
              </p>
            </div>
            <div className="pt-6">
              <a
                href={LEDGER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl transition-all"
              >
                <span>Launch Ledger Web App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 4. REAL EXPERIENCE SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-slate-50 py-16 sm:py-20 border-y border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built from real experience
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed text-balance">
              We believe software should solve real problems, not create more complexity. Ledger focuses on the information business owners actually need to understand their business every day.
            </p>
          </div>

          {/* Visual: Problem → Simple Solution → Better Control */}
          <ProblemSolutionFlow />

        </div>
      </motion.section>

      {/* 5. FEATURES SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12"
      >
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Everything you need to understand your business
          </h2>
          <p className="text-base sm:text-lg text-slate-600 text-balance">
            Every feature in Ledger is designed to be self-explanatory, helping you manage money, stock, and orders with confidence.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat) => {
            const getIcon = (name: string) => {
              switch (name) {
                case 'CreditCard': return CreditCard;
                case 'BarChart3': return BarChart3;
                case 'Wallet': return Wallet;
                case 'Boxes': return Boxes;
                case 'FileCheck': return FileCheck;
                default: return Sparkles;
              }
            };
            const Icon = getIcon(feat.icon);
            const isSelected = selectedFeatureId === feat.id;

            return (
              <div
                key={feat.id}
                onClick={() => setSelectedFeatureId(feat.id)}
                className={`p-7 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-md ${
                  isSelected
                    ? 'bg-emerald-50/40 border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                    : 'bg-white border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-50 text-slate-800'
                  }`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-xs text-emerald-700 font-medium mt-0.5">{feat.subtitle}</p>
                  <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">{feat.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {feat.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 6. OUR JOURNEY SECTION (NIC HYDERABAD & FOUNDERS) */}
      <JourneySection />

      {/* 7. PACKAGES / PRICING SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Simple plans for growing businesses
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Start completely free. Upgrade only when your volume or team needs advanced multi-terminal tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isSelected = selectedPlanId === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlanId(plan.id)}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 cursor-pointer hover:-translate-y-1.5 hover:shadow-lg ${
                  isSelected
                    ? 'bg-white border-2 border-emerald-500 shadow-xl ring-2 ring-emerald-500/10'
                    : plan.isPopular
                    ? 'bg-white border-2 border-slate-300 shadow-md'
                    : 'bg-white border border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  {plan.badge && (
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.tagline}</p>

                  <div className="mt-5 pb-6 border-b border-slate-100 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-slate-900 tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400">{plan.period}</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Included Features</p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={plan.price === 'Coming Soon' ? '/contact' : LEDGER_APP_URL}
                    target={plan.price === 'Coming Soon' ? '_self' : '_blank'}
                    rel={plan.price === 'Coming Soon' ? '' : 'noopener noreferrer'}
                    className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.isPopular || isSelected
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                        : 'bg-slate-950 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* 8. PRE-FOOTER CTA SECTION */}
      <motion.section 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-emerald-950 rounded-3xl p-8 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to simplify your business finances?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Join small shopkeepers, artisans, and online sellers using Ledger to record sales and understand their profit every single day.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LEDGER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-md transition-all whitespace-nowrap hover:-translate-y-0.5"
              >
                <span>Open Ledger Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                to="/faq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white/90 hover:text-white border border-white/20 hover:border-white/50 rounded-xl transition-all whitespace-nowrap"
              >
                <span>Read Questions &amp; Answers</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

    </div>
  );
};
