import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { LEDGER_APP_URL, NAV_ITEMS } from '../constants';
import { LedgerLogo } from './LedgerLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <LedgerLogo size="md" showTagline={true} theme="dark" />
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Simple financial management and micro-POS designed for small businesses, local shops, and independent entrepreneurs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Navigation</p>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product & Action */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Software Access</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ready to record sales, track inventory, and understand your profit in seconds?
            </p>
            <div className="pt-1">
              <a
                href={LEDGER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-sm"
              >
                <span>Open Ledger Web App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Ledger. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with care for small businesses by Shamsa Malik &amp; Kubra Batool</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
