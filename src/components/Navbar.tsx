import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { LEDGER_APP_URL } from '../constants';
import { LedgerLogo } from './LedgerLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setAboutDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Zone 1: Exact Ledger Logo */}
        <Link 
          to="/" 
          className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md py-1"
          aria-label="Ledger Home"
        >
          <LedgerLogo size="sm" showTagline={true} />
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors whitespace-nowrap py-1 relative ${
              isActive('/')
                ? 'text-emerald-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Home
            {isActive('/') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </Link>

          {/* About Dropdown (matching marked screenshot from user) */}
          <div 
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap py-1 cursor-pointer focus:outline-none ${
                isActive('/about') || isActive('/product')
                  ? 'text-emerald-700 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-expanded={aboutDropdownOpen}
            >
              <span>About</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
              {(isActive('/about') || isActive('/product')) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
              )}
            </button>

            {/* Dropdown Card matching screenshot in Image 2 */}
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 w-44 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="bg-white rounded-2xl p-1.5 shadow-xl border border-slate-100 ring-1 ring-black/5 divide-y divide-slate-100">
                  <div className="py-0.5">
                    <Link
                      to="/about"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={`block px-3.5 py-2 text-sm rounded-xl font-medium transition-colors ${
                        location.pathname === '/about'
                          ? 'bg-emerald-50 text-emerald-800 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      About
                    </Link>
                  </div>
                  <div className="py-0.5">
                    <Link
                      to="/product"
                      onClick={() => setAboutDropdownOpen(false)}
                      className={`block px-3.5 py-2 text-sm rounded-xl font-medium transition-colors ${
                        location.pathname === '/product'
                          ? 'bg-emerald-50 text-emerald-800 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      Product
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/how-it-works"
            className={`text-sm font-medium transition-colors whitespace-nowrap py-1 relative ${
              isActive('/how-it-works')
                ? 'text-emerald-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            How It Works
            {isActive('/how-it-works') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </Link>

          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors whitespace-nowrap py-1 relative ${
              isActive('/contact')
                ? 'text-emerald-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Contact
            {isActive('/contact') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </Link>

          <Link
            to="/faq"
            className={`text-sm font-medium transition-colors whitespace-nowrap py-1 relative ${
              isActive('/faq')
                ? 'text-emerald-700 font-semibold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            FAQ
            {isActive('/faq') && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
            )}
          </Link>
        </nav>

        {/* Zone 3: Prominent Open Ledger action button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={LEDGER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-sm font-semibold text-white bg-slate-950 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 hover:-translate-y-0.5"
          >
            <span>Open Ledger</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={LEDGER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-slate-950 rounded-lg"
          >
            <span>Open</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              location.pathname === '/'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Home
          </Link>

          {/* About & Product in mobile */}
          <div className="pl-2 border-l-2 border-emerald-400 space-y-1 my-1">
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/about'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              About
            </Link>
            <Link
              to="/product"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/product'
                  ? 'bg-emerald-50 text-emerald-800 font-semibold'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              Product
            </Link>
          </div>

          <Link
            to="/how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              location.pathname === '/how-it-works'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            How It Works
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              location.pathname === '/contact'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
              location.pathname === '/faq'
                ? 'bg-emerald-50 text-emerald-800 font-semibold'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            FAQ
          </Link>
          <div className="pt-3 border-t border-slate-100">
            <a
              href={LEDGER_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-slate-950 hover:bg-emerald-700 rounded-lg shadow-sm"
            >
              <span>Open Ledger Software</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
