import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, 
  Search, 
  ArrowUpRight, 
  MessageSquare
} from 'lucide-react';
import { FAQS, LEDGER_APP_URL } from '../constants';
import { Link } from 'react-router-dom';

export const FaqPage: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 8]); // Open first two and last question by default
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Audience', 'Features', 'Technology', 'Getting Started'];

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = 
      selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Top Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
          Everything you need to know about Ledger, micro-POS features, and getting started.
        </p>
      </motion.div>

      {/* Search & Filter Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        className="space-y-4"
      >
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. profit, receipts, inventory, AI...)"
            className="w-full pl-12 pr-4 py-3.5 bg-white rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
          />
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Accordion Questions */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="space-y-4"
      >
        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 text-slate-500 text-sm">
            No questions matching "{searchQuery}". Try searching another keyword.
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            const isAccessQuestion = faq.question.toLowerCase().includes('how can i access ledger');

            return (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-sm ${
                  isOpen ? 'border-emerald-500/60 shadow-sm' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-50 text-emerald-700' : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200 space-y-4">
                    <p>{faq.answer}</p>

                    {/* For "How can I access Ledger?", provide an Open Ledger button */}
                    {isAccessQuestion && (
                      <div className="pt-2">
                        <a
                          href={LEDGER_APP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-950 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                        >
                          <span>Open Ledger</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}
      </motion.div>

      {/* Still have questions card */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 text-center space-y-4 hover:shadow-md transition-shadow"
      >
        <h3 className="text-lg font-bold text-slate-900">Have a question not listed here?</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          We are always happy to explain how Ledger fits into your store or studio workflow.
        </p>
        <div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 font-semibold text-xs rounded-xl shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Contact Support</span>
          </Link>
        </div>
      </motion.div>

    </div>
  );
};
