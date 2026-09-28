import React, { useState } from 'react';
import { Sparkles, MessageSquare, ArrowRight, CheckCircle2, Copy } from 'lucide-react';

interface ParsedResult {
  customer: string;
  phone: string;
  items: { name: string; qty: number; price: number }[];
  deliveryAddress: string;
  paymentMethod: string;
  notes: string;
}

const PRESET_MESSAGES = [
  {
    label: 'Boutique Apparel Order',
    raw: `Salam sister, please send 2 Linen Shirts in Blue (Large) and 1 Leather Cardholder. Deliver to Flat 302, Phase 5 DHA Karachi. Name is Sana Tariq, 0300-1234567. I will pay cash on delivery.`,
    parsed: {
      customer: 'Sana Tariq',
      phone: '0300-1234567',
      items: [
        { name: 'Linen Shirt (Blue / L)', qty: 2, price: 2800 },
        { name: 'Leather Cardholder', qty: 1, price: 1850 },
      ],
      deliveryAddress: 'Flat 302, Phase 5 DHA Karachi',
      paymentMethod: 'Cash on Delivery',
      notes: 'Standard courier delivery',
    },
  },
  {
    label: 'Artisan Bakery Order',
    raw: `Hi! Need 1 Chocolate Fudge Cake (2 lbs) and 6 Butter Croissants for tomorrow 4 PM. Deliver to House 14, Street 9, F-8/2 Islamabad. My name is Omar Farooq 0321-9876543. Paid advance Rs. 1,500 via Raast, balance Rs. 2,300 cash.`,
    parsed: {
      customer: 'Omar Farooq',
      phone: '0321-9876543',
      items: [
        { name: 'Chocolate Fudge Cake (2 lbs)', qty: 1, price: 2600 },
        { name: 'Butter Croissants', qty: 6, price: 1200 },
      ],
      deliveryAddress: 'House 14, Street 9, F-8/2 Islamabad',
      paymentMethod: 'Advance Paid (Rs. 1,500) · Cash Due (Rs. 2,300)',
      notes: 'Delivery scheduled tomorrow by 4:00 PM',
    },
  },
];

export const AiParserDemo: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [inputMessage, setInputMessage] = useState(PRESET_MESSAGES[0].raw);
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedResult | null>(PRESET_MESSAGES[0].parsed);

  const handleSelectPreset = (index: number) => {
    setSelectedPreset(index);
    setInputMessage(PRESET_MESSAGES[index].raw);
    setParsedData(PRESET_MESSAGES[index].parsed);
  };

  const handleParse = () => {
    setIsProcessing(true);
    setTimeout(() => {
      // If user kept preset 1
      if (inputMessage.includes('Cake') || inputMessage.includes('Omar')) {
        setParsedData(PRESET_MESSAGES[1].parsed);
      } else {
        setParsedData(PRESET_MESSAGES[0].parsed);
      }
      setIsProcessing(false);
    }, 400);
  };

  const itemsTotal = parsedData 
    ? parsedData.items.reduce((sum, item) => sum + item.qty * item.price, 0) 
    : 0;

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Practical Utility</span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-400">Zero Copy-Paste Manual Effort</span>
          </div>
          <h3 className="text-xl font-bold text-white mt-1">AI Message Parser in Action</h3>
          <p className="text-sm text-slate-400 mt-0.5">
            Turn messy customer WhatsApp messages or DMs directly into clean, recorded orders.
          </p>
        </div>

        {/* Preset Selectors */}
        <div className="flex items-center gap-2 bg-slate-800/80 p-1 rounded-lg">
          {PRESET_MESSAGES.map((preset, idx) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handleSelectPreset(idx)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                selectedPreset === idx
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        
        {/* Left: Input Message */}
        <div className="lg:col-span-6 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Customer WhatsApp / Chat Message</span>
            </div>
            <span>Raw text input</span>
          </div>

          <div className="relative">
            <textarea
              rows={5}
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="w-full bg-slate-800/90 text-slate-100 p-3.5 rounded-xl border border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-sans leading-relaxed resize-none"
              placeholder="Paste customer WhatsApp message here..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleParse}
              disabled={isProcessing}
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-xs rounded-lg transition-colors shadow-sm disabled:opacity-50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isProcessing ? 'Extracting Order...' : 'Parse to Ledger Order'}</span>
            </button>
          </div>
        </div>

        {/* Right: Structured Output */}
        <div className="lg:col-span-6 bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-700/80">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Structured Ledger Order</span>
            </div>
            <span className="text-slate-400">Ready for 1-click recording</span>
          </div>

          {parsedData && (
            <div className="mt-3 space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2 pb-2.5 border-b border-slate-700/60">
                <div>
                  <p className="text-slate-400 text-[11px]">Customer Name</p>
                  <p className="font-semibold text-white mt-0.5">{parsedData.customer}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-[11px]">Contact Phone</p>
                  <p className="font-semibold text-white mt-0.5 tabular-nums">{parsedData.phone}</p>
                </div>
              </div>

              <div>
                <p className="text-slate-400 text-[11px] mb-1.5">Parsed Items</p>
                <div className="space-y-1.5">
                  {parsedData.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center bg-slate-800/80 px-2.5 py-1.5 rounded">
                      <span className="text-slate-200">
                        {item.qty}x {item.name}
                      </span>
                      <span className="font-semibold text-white tabular-nums">
                        Rs. {(item.qty * item.price).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 space-y-1 text-slate-300">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Delivery Address:</span>
                  <span className="font-medium text-right text-slate-200 truncate max-w-[200px]">
                    {parsedData.deliveryAddress}
                  </span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Payment Status:</span>
                  <span className="font-medium text-emerald-400">{parsedData.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-700 text-sm font-bold text-white">
                  <span>Calculated Total</span>
                  <span className="text-emerald-400 tabular-nums">Rs. {itemsTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
