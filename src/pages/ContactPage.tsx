import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { LEDGER_APP_URL } from '../constants';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError(null);
    setSubmitting(true);

    try {
      const response = await fetch(
       https://script.google.com/macros/s/AKfycbxA6s0tgT-mcWJzRQMjlx8Agqx9IscpeM8NAi8V-9h8NGhDg2cgLZy1sarIH7Eat7m3WA/exec,
        {
          method: 'POST',
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          businessname:'',
          subject: '',
          message: '',
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setError('Unable to send your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Let's talk
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Have a question, suggestion, or want to learn more about Ledger? We'd love to hear from you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto"
      >

        {/* Left: Contact Info & NIC Hyderabad Location Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 hover:-translate-y-1 hover:shadow-md transition-all duration-200">

            <h3 className="text-xl font-bold text-slate-900">
              Connect with the Team
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are an independent shopkeeper testing Ledger or an incubator partner, we welcome your feedback and inquiries.
            </p>

            <div className="space-y-4 text-sm text-slate-700 pt-2 border-t border-slate-100">

              <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Email Us
                  </p>

                  <p className="font-semibold text-slate-900">
                    Support@myledger.pk
                  </p>

                  <p className="text-xs text-slate-500 mt-0.5">
                   Support@myledger.pk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Incubation Base
                  </p>

                  <p className="font-semibold text-slate-900">
                    National Incubation Center (NIC) Hyderabad
                  </p>

                  <p className="text-xs text-slate-500 mt-0.5">
                    Hyderabad, Sindh, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 font-medium">
                    Product Status
                  </p>

                  <p className="font-semibold text-slate-900">
                    Live &amp; Accessible Worldwide
                  </p>

                  <p className="text-xs text-slate-500 mt-0.5">
                    Free for small business owners
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={LEDGER_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-slate-950 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl transition-all"
              >
                <span>Launch Software Directly</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>

        {/* Right: Clean Contact Form */}
        <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">

          {submitted ? (

            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">

              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Thank you for reaching out!
              </h3>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your message has been received by Shamsa Malik &amp; Kubra Batool. We will get back to you shortly.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>

            </div>

          ) : (

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Send us a message
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  We typically reply within 24 hours.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Tariq Khan"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-slate-700"
                  >
                    Email Address <span className="text-rose-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tariq@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-slate-700"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Question about inventory tracking or feedback"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-slate-700"
                >
                  Message <span className="text-rose-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help your business?"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm rounded-xl shadow-sm transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />

                  <span>
                    {submitting ? 'Sending Message...' : 'Send Message'}
                  </span>
                </button>
              </div>

            </form>

          )}

        </div>
      </motion.div>

    </div>
  );
};
