import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Plus, 
  DollarSign, 
  Package, 
  ShoppingBag, 
  TrendingUp, 
  CreditCard, 
  Check, 
  Wallet,
  Receipt,
  Search
} from 'lucide-react';
import { LEDGER_APP_URL } from '../constants';

interface SaleItem {
  id: string;
  name: string;
  category: string;
  price: number;
  cost: number;
  stock: number;
}

const SAMPLE_ITEMS: SaleItem[] = [
  { id: '1', name: 'Cotton Linen Shirt', category: 'Apparel', price: 2800, cost: 1600, stock: 24 },
  { id: '2', name: 'Artisan Ceramic Mug', category: 'Kitchen', price: 950, cost: 450, stock: 48 },
  { id: '3', name: 'Organic Cold Brew 500ml', category: 'Beverage', price: 650, cost: 280, stock: 18 },
  { id: '4', name: 'Handcrafted Leather Cardholder', category: 'Accessories', price: 1850, cost: 900, stock: 12 },
];

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pos' | 'ledger' | 'inventory'>('pos');
  const [selectedItemId, setSelectedItemId] = useState<string>('1');
  const [quantity, setQuantity] = useState<number>(1);
  const [paymentType, setPaymentType] = useState<'Cash' | 'Card' | 'Online'>('Cash');
  const [justRecorded, setJustRecorded] = useState<boolean>(false);

  const selectedItem = SAMPLE_ITEMS.find((item) => item.id === selectedItemId) || SAMPLE_ITEMS[0];
  const totalAmount = selectedItem.price * quantity;
  const estimatedProfit = (selectedItem.price - selectedItem.cost) * quantity;

  const handleRecord = (e: React.FormEvent) => {
    e.preventDefault();
    setJustRecorded(true);
    setTimeout(() => setJustRecorded(false), 2400);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      
      {/* Floating Card 1: Revenue (Top Right on desktop) */}
      <div className="hidden lg:flex absolute -top-6 -right-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-200/90 animate-bounce-slow">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Revenue</p>
          <p className="text-base font-bold text-slate-900 tabular-nums">Rs. 125,000</p>
        </div>
        <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
          +18.4%
        </span>
      </div>

      {/* Floating Card 2: Net Profit (Bottom Left) */}
      <div className="hidden lg:flex absolute -bottom-5 -left-6 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-slate-200/90">
        <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
          <DollarSign className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Net Profit</p>
          <p className="text-base font-bold text-emerald-700 tabular-nums">Rs. 42,500</p>
        </div>
        <span className="text-[11px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
          34% margin
        </span>
      </div>

      {/* Floating Card 3: Orders (Bottom Right) */}
      <div className="hidden sm:flex absolute -bottom-5 right-10 z-20 items-center gap-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-slate-200/90">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <ShoppingBag className="w-4 h-4" />
        </div>
        <div>
          <span className="text-xs text-slate-500">Orders </span>
          <span className="text-sm font-bold text-slate-900 tabular-nums">128</span>
          <span className="text-xs text-slate-400"> (14 today)</span>
        </div>
      </div>

      {/* Main SaaS Window Frame */}
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200 overflow-hidden">
        
        {/* Top Window Chrome */}
        <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-slate-700">Metro Boutique &amp; Roastery</span>
              <span className="text-xs text-slate-400">· Active Session</span>
            </div>
          </div>

          {/* Quick tab switcher inside mockup */}
          <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg text-xs font-medium">
            <button
              onClick={() => setActiveTab('pos')}
              className={`px-3 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === 'pos'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Quick Sale POS
            </button>
            <button
              onClick={() => setActiveTab('ledger')}
              className={`px-3 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === 'ledger'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Daily Ledger
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-3 py-1 rounded-md transition-all whitespace-nowrap ${
                activeTab === 'inventory'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Inventory
            </button>
          </div>
        </div>

        {/* Dashboard Top Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-100 divide-x divide-slate-100 bg-white">
          <div className="p-4 sm:p-5">
            <span className="text-xs text-slate-500 font-medium">Today's Revenue</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">Rs. 18,450</span>
              <span className="text-xs font-medium text-emerald-600">+12%</span>
            </div>
          </div>
          <div className="p-4 sm:p-5">
            <span className="text-xs text-slate-500 font-medium">Today's Profit</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg sm:text-xl font-bold text-emerald-700 tabular-nums">Rs. 6,800</span>
              <span className="text-xs text-slate-400">36.8%</span>
            </div>
          </div>
          <div className="p-4 sm:p-5">
            <span className="text-xs text-slate-500 font-medium">Cash in Drawer</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg sm:text-xl font-bold text-slate-900 tabular-nums">Rs. 14,200</span>
              <span className="text-xs text-slate-400">Balanced</span>
            </div>
          </div>
          <div className="p-4 sm:p-5">
            <span className="text-xs text-slate-500 font-medium">Pending Dues</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-lg sm:text-xl font-bold text-amber-700 tabular-nums">Rs. 3,250</span>
              <span className="text-xs text-amber-600">2 orders</span>
            </div>
          </div>
        </div>

        {/* Interactive Workspace Body */}
        <div className="p-4 sm:p-6 bg-slate-50/50">
          
          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Product catalog quick pick */}
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Quick Items (Click to Select)
                  </span>
                  <span className="text-xs text-slate-400">4 items in catalogue</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SAMPLE_ITEMS.map((item) => {
                    const isSelected = item.id === selectedItemId;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedItemId(item.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50/70 border-emerald-400 shadow-sm ring-1 ring-emerald-400'
                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-semibold text-slate-900 truncate pr-2">{item.name}</p>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.category} · {item.stock} in stock</p>
                        <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-slate-100">
                          <span className="text-xs font-bold text-slate-900 tabular-nums">
                            Rs. {item.price.toLocaleString()}
                          </span>
                          <span className="text-[11px] text-emerald-600 tabular-nums">
                            Cost: Rs. {item.cost.toLocaleString()}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Order checkout & profit calculation */}
              <div className="md:col-span-5 bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Current Transaction
                    </span>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      Live Margin Calc
                    </span>
                  </div>

                  <div className="mt-3 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600 font-medium truncate max-w-[160px]">{selectedItem.name}</span>
                      <span className="font-semibold text-slate-900 tabular-nums">Rs. {selectedItem.price.toLocaleString()}</span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center justify-between py-2 border-y border-slate-100 text-sm">
                      <span className="text-slate-600 text-xs">Quantity</span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-7 h-7 rounded border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center font-bold text-sm"
                        >
                          -
                        </button>
                        <span className="font-semibold text-slate-900 tabular-nums text-sm">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-7 h-7 rounded border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center font-bold text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Payment Mode */}
                    <div className="space-y-1.5">
                      <span className="text-xs text-slate-500 font-medium">Payment Mode</span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {(['Cash', 'Card', 'Online'] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            onClick={() => setPaymentType(mode)}
                            className={`py-1.5 text-xs font-medium rounded border transition-colors ${
                              paymentType === mode
                                ? 'bg-slate-900 text-white border-slate-900'
                                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Total & Profit Breakdown */}
                    <div className="bg-slate-50 p-3 rounded-lg space-y-1.5 mt-2">
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Total Cost (COGS)</span>
                        <span className="tabular-nums">Rs. {(selectedItem.cost * quantity).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs font-medium text-emerald-700">
                        <span>Expected Net Profit</span>
                        <span className="tabular-nums font-bold">+Rs. {estimatedProfit.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-base font-bold text-slate-900 pt-1.5 border-t border-slate-200">
                        <span>Total Due</span>
                        <span className="tabular-nums text-emerald-600">Rs. {totalAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    onClick={handleRecord}
                    className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                      justRecorded
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    {justRecorded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Sale Recorded in Ledger!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Record Sale &amp; Print Receipt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ledger' && (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-3.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">Today's Transactions Ledger</span>
                <span className="text-xs text-emerald-700 font-medium">Auto-balanced</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                    <tr>
                      <th className="py-2.5 px-4 font-medium">Time</th>
                      <th className="py-2.5 px-4 font-medium">Customer / Description</th>
                      <th className="py-2.5 px-4 font-medium">Method</th>
                      <th className="py-2.5 px-4 font-medium text-right">Amount</th>
                      <th className="py-2.5 px-4 font-medium text-right">Net Profit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400">14:32</td>
                      <td className="py-2.5 px-4 font-medium text-slate-900">Cotton Linen Shirt (x2) · Ayesha K.</td>
                      <td className="py-2.5 px-4"><span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">Cash</span></td>
                      <td className="py-2.5 px-4 text-right font-bold text-slate-900 tabular-nums">Rs. 5,600</td>
                      <td className="py-2.5 px-4 text-right font-semibold text-emerald-600 tabular-nums">+Rs. 2,400</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400">13:10</td>
                      <td className="py-2.5 px-4 font-medium text-slate-900">Artisan Ceramic Mug (x4) · Bilal R.</td>
                      <td className="py-2.5 px-4"><span className="text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-[11px]">Card</span></td>
                      <td className="py-2.5 px-4 text-right font-bold text-slate-900 tabular-nums">Rs. 3,800</td>
                      <td className="py-2.5 px-4 text-right font-semibold text-emerald-600 tabular-nums">+Rs. 2,000</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400">11:45</td>
                      <td className="py-2.5 px-4 font-medium text-slate-900">Cold Brew (x3) + Leather Cardholder</td>
                      <td className="py-2.5 px-4"><span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded text-[11px]">Cash</span></td>
                      <td className="py-2.5 px-4 text-right font-bold text-slate-900 tabular-nums">Rs. 3,800</td>
                      <td className="py-2.5 px-4 text-right font-semibold text-emerald-600 tabular-nums">+Rs. 1,790</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-slate-400">10:15</td>
                      <td className="py-2.5 px-4 font-medium text-slate-900">Advance for custom tailor order #128</td>
                      <td className="py-2.5 px-4"><span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded text-[11px]">Advance</span></td>
                      <td className="py-2.5 px-4 text-right font-bold text-slate-900 tabular-nums">Rs. 2,000</td>
                      <td className="py-2.5 px-4 text-right text-slate-400 tabular-nums">Pending Balance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="p-3.5 border-b border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700">Stock &amp; Cost Registry</span>
                <span className="text-xs text-slate-500">4 active products</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 border-b border-slate-100">
                    <tr>
                      <th className="py-2.5 px-4 font-medium">Product</th>
                      <th className="py-2.5 px-4 font-medium">Stock</th>
                      <th className="py-2.5 px-4 font-medium">Cost Price</th>
                      <th className="py-2.5 px-4 font-medium">Selling Price</th>
                      <th className="py-2.5 px-4 font-medium text-right">Margin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {SAMPLE_ITEMS.map((item) => (
                      <tr key={item.id}>
                        <td className="py-2.5 px-4 font-semibold text-slate-900">{item.name}</td>
                        <td className="py-2.5 px-4">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-medium tabular-nums ${
                            item.stock < 15 ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {item.stock} in stock
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-slate-500 tabular-nums">Rs. {item.cost.toLocaleString()}</td>
                        <td className="py-2.5 px-4 font-semibold text-slate-900 tabular-nums">Rs. {item.price.toLocaleString()}</td>
                        <td className="py-2.5 px-4 text-right font-semibold text-emerald-600 tabular-nums">
                          {Math.round(((item.price - item.cost) / item.price) * 100)}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Mockup bottom bar */}
        <div className="bg-white px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Ledger Micro-POS v1.0 · Fast, offline-ready &amp; simple</span>
          </div>
          <a
            href={LEDGER_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1"
          >
            <span>Open Actual App</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
