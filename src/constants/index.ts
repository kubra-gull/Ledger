export const LEDGER_APP_URL = 'https://ledger-wfwc.vercel.app';

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
];

export interface BusinessSegment {
  id: string;
  title: string;
  description: string;
  example: string;
  iconName: string;
}

export const BUSINESS_SEGMENTS: BusinessSegment[] = [
  {
    id: 'shops',
    title: 'Small Shops',
    description: 'Boutiques, grocery counters, kiosks, and convenience stores needing rapid checkout.',
    example: 'Fast sales logging, cash drawer tracking, and daily totals.',
    iconName: 'Store',
  },
  {
    id: 'online',
    title: 'Online Businesses',
    description: 'Instagram, WhatsApp, and social commerce sellers managing incoming orders and deliveries.',
    example: 'Track cash-on-delivery, customer advances, and balance due.',
    iconName: 'ShoppingBag',
  },
  {
    id: 'home',
    title: 'Home-Based Businesses',
    description: 'Bakers, custom craft makers, tailoring studios, and catering entrepreneurs.',
    example: 'Know exact raw cost vs. selling price to safeguard profit.',
    iconName: 'Home',
  },
  {
    id: 'entrepreneurs',
    title: 'Entrepreneurs & Freelancers',
    description: 'Solo founders, trade professionals, and independent service providers.',
    example: 'Issue quick professional receipts without complicated software.',
    iconName: 'Briefcase',
  },
];

export interface ProblemSolution {
  title: string;
  description: string;
  takeaway: string;
  icon: string;
}

export const REAL_PROBLEMS: ProblemSolution[] = [
  {
    title: 'Know Your Sales',
    description: 'Record every sale in seconds and keep your business transactions organized without notebook clutter.',
    takeaway: 'Instant sales record',
    icon: 'ReceiptText',
  },
  {
    title: 'Understand Your Profit',
    description: 'Automatically separate revenue from item costs so you always know your actual margin at the end of the day.',
    takeaway: 'Real-time profit margins',
    icon: 'TrendingUp',
  },
  {
    title: 'Track Your Cash',
    description: 'Know exactly where your money is, what was paid in cash, what is sitting in bank accounts, and what is still pending.',
    takeaway: 'Clear cash & dues visibility',
    icon: 'Coins',
  },
  {
    title: 'Manage Your Inventory',
    description: 'Keep track of products in stock, monitor unit costs, and identify low-stock items before running out.',
    takeaway: 'Stock alerts & counts',
    icon: 'Package',
  },
  {
    title: 'Keep Records Simple',
    description: 'Eliminate double-entry accounting jargon, tax balance sheets, and confusing corporate screens.',
    takeaway: 'Zero accounting background required',
    icon: 'CheckCircle2',
  },
];

export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  icon: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: 'sales',
    title: 'Sales Tracking',
    subtitle: 'Point-of-Sale made effortless',
    description: 'Record and organize every daily business sale with single-tap item selections, payment method tags, and instant calculation.',
    bullets: ['Instant sale entry', 'Cash, card, and digital payment tags', 'Daily and weekly revenue totals'],
    icon: 'CreditCard',
  },
  {
    id: 'profit',
    title: 'Profit Tracking',
    subtitle: 'Clarity over your real numbers',
    description: 'See revenue, cost of goods, and actual net profit clearly without spending hours balancing spreadsheets.',
    bullets: ['Automated margin calculation', 'Product-level profitability', 'Net earnings summary'],
    icon: 'BarChart3',
  },
  {
    id: 'orders',
    title: 'Orders & Cash Flow',
    subtitle: 'Complete money visibility',
    description: 'Track ongoing customer orders, upfront deposits, pending dues, cash in hand, and settled balances.',
    bullets: ['Advance deposits & dues tracking', 'Pending order status', 'Cash in register balance'],
    icon: 'Wallet',
  },
  {
    id: 'inventory',
    title: 'Inventory',
    subtitle: 'Stock counts that stay accurate',
    description: 'Add products, monitor current quantities, update cost prices, and identify items needing reorders.',
    bullets: ['Quick product catalog', 'Low stock indicators', 'Cost price vs retail price'],
    icon: 'Boxes',
  },
  {
    id: 'receipts',
    title: 'Receipts',
    subtitle: 'Clean customer confirmations',
    description: 'Generate and share professional, branded sales receipts via WhatsApp, SMS, or print in a single click.',
    bullets: ['Instant digital receipts', 'Custom business header', 'Shareable customer links'],
    icon: 'FileCheck',
  },
  {
    id: 'ai-parser',
    title: 'AI Message Parser',
    subtitle: 'From messy chat to clean order',
    description: 'A practical helper that turns unstructured customer chat messages into organized order items, quantities, and totals.',
    bullets: ['Paste WhatsApp / Instagram DMs', 'Extracts items, address & amounts', 'Saves minutes on every phone order'],
    icon: 'Sparkles',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FaqItem[] = [
  {
    question: 'What is Ledger?',
    answer: 'Ledger is a simple financial management and micro-POS software designed specifically for small businesses and independent entrepreneurs. It lets you record sales, monitor inventory, calculate net profit, track customer dues, and generate receipts without any complicated accounting knowledge.',
    category: 'General',
  },
  {
    question: 'Who is Ledger for?',
    answer: 'Ledger is built for small retail shop owners, home-based bakers and artisans, online Instagram/WhatsApp sellers, freelancers, and small business operators who need clean financial organization without enterprise software bloat.',
    category: 'Audience',
  },
  {
    question: 'What can I manage with Ledger?',
    answer: 'With Ledger, you can manage daily sales, customer orders, cash drawers, product inventory levels, pending payments (dues and advances), profit margins, and digital receipts.',
    category: 'Features',
  },
  {
    question: 'Can Ledger track sales and profit?',
    answer: 'Yes! When you input sales and cost of goods, Ledger automatically calculates your gross revenue, total costs, and net profit in real-time, showing you exactly how much money your business is making.',
    category: 'Features',
  },
  {
    question: 'Can I manage inventory?',
    answer: 'Yes. You can add your products, track available quantities, set purchase and selling prices, and monitor stock levels so you know when items are running low.',
    category: 'Features',
  },
  {
    question: 'Does Ledger generate receipts?',
    answer: 'Yes. Ledger creates clean, branded sales receipts that you can immediately send to customers over WhatsApp, email, or print out directly after each transaction.',
    category: 'Features',
  },
  {
    question: 'What is the AI message parser?',
    answer: 'The AI message parser is a practical utility built into Ledger. When a customer sends a raw order message via WhatsApp or Instagram (e.g. "Hi, please send 2 linen shirts and 1 mug to Gulshan block 4, I will pay cash"), the parser extracts the items, quantities, customer details, and total, converting it directly into an organized order.',
    category: 'Technology',
  },
  {
    question: 'Is Ledger suitable for small businesses?',
    answer: 'Yes, it was designed specifically for small businesses. There is zero accounting jargon, no double-entry ledgers, no complex debit/credit balancing, and no steep learning curve.',
    category: 'Audience',
  },
  {
    question: 'How can I access Ledger?',
    answer: 'You can access and start using Ledger right now in your web browser on mobile, tablet, or desktop by clicking the "Open Ledger" button or visiting https://ledger-wfwc.vercel.app.',
    category: 'Getting Started',
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  badge?: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For individuals and very small businesses getting started.',
    price: 'Free',
    period: 'to start',
    badge: 'Popular for solo sellers',
    features: [
      'Unlimited daily sales recording',
      'Basic profit & revenue tracking',
      'Product inventory up to 50 items',
      'Digital sales receipts',
      'Standard cash drawer tracker',
      'Mobile & desktop browser access',
    ],
    ctaText: 'Start Using Ledger',
    isPopular: false,
  },
  {
    id: 'business',
    name: 'Business',
    tagline: 'For growing small businesses needing deeper inventory & dues tracking.',
    price: 'Contact us',
    period: 'for rollout',
    badge: 'Best for shops',
    features: [
      'Everything in Starter',
      'Full inventory management & low-stock alerts',
      'Customer advance & balance dues tracking',
      'WhatsApp digital receipt sharing',
      'AI Message Parser for customer orders',
      'Daily profit & loss breakdown',
      'Exportable financial summaries',
    ],
    ctaText: 'Start Using Ledger',
    isPopular: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For businesses that need advanced multi-counter or custom functionality.',
    price: 'Coming Soon',
    period: 'in development',
    features: [
      'Everything in Business',
      'Multi-counter & multi-staff sales logging',
      'Advanced supplier purchase orders',
      'Custom receipt branding & barcodes',
      'Priority onboarding support',
      'Automated end-of-day reconciliation',
    ],
    ctaText: 'Contact Us',
    isPopular: false,
  },
];
