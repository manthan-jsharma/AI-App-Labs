export const projects = [
  {
    id: "lenny-ai",
    name: "Lenny AI",
    category: "Content AI",
    description:
      "AI tool for creating VIRAL content & ads while saving 100s of hours.",
    fullDescription:
      "Helps content creators, founders, and marketers generate high-performing, viral content and advertisements automatically, drastically reducing production time.",
    image: "/GetLennyAI.png",
    gradient: "from-pink-500 to-rose-500",
    stats: { status: "Live", type: "Content Tool", efficiency: "10x" },
    technologies: ["Next.js", "React", "AI Video", "Cloudflare"],
    year: "2024",
    link: "https://getlenny.ai",
  },

  {
    id: "grant-writing",
    name: "AI Grant Writing",
    category: "Grant AI",
    description:
      "AI-powered grant discovery, proposal writing, and submission platform.",
    fullDescription:
      "A comprehensive system that automates the entire grant lifecycle: from finding relevant opportunities to writing compelling proposals and handling submission.",
    image: "/AI-Grant-Writing.png",
    gradient: "from-orange-500 to-amber-500",
    stats: { status: "Live", type: "Automation", focus: "Grants" },
    technologies: ["Next.js", "OpenAI", "Supabase", "Stripe"],
    year: "2024",
    link: "https://aigrantwritingmachine.com",
  },

  {
    id: "morpheus",
    name: "Morpheus AI",
    category: "Agent Builder",
    description:
      "Agent Builder & Resell Platform. Built for Client Nick Granberry.",
    fullDescription:
      "A complete end-to-end AI platform allowing users to build and resell AI agents. This product was built from zero to live execution, featuring complex agent orchestration and billing systems.",
    image: "/MorpheusAI.png",
    gradient: "from-blue-500 to-cyan-500",
    stats: { status: "Live", type: "SaaS", delivery: "14 Days" },
    technologies: ["Next.js", "LangChain", "Supabase", "Stripe Connect"],
    year: "2024",
    link: "https://www.morpheusbusiness.ai/",
    founder: "Nick Granberry",
  },

  {
    id: "fund2grow",
    name: "Fund2Grow",
    category: "FinTech AI",
    description:
      "AI-powered platform that analyzes credit and auto-applies to 80+ lenders.",
    fullDescription:
      "Fund2Grow streamlines the funding process by using AI to analyze credit profiles and automatically submit applications to over 80 lenders on autopilot.",
    image: "/Fund2Grow.png",
    gradient: "from-green-500 to-emerald-600",
    stats: { status: "Live", type: "FinTech", automation: "100%" },
    technologies: ["Next.js", "Plaid", "Python", "AWS"],
    year: "2024",
    link: "https://www.fund2grow.ai/",
  },

  {
    id: "limora",
    name: "Limora AI",
    category: "High-Velocity CRM",
    description:
      "High-Velocity CRM for automated outreach. Built for Client Adrien Ninet.",
    fullDescription:
      "We automated the entire sales outreach process. Limora allows users to scrape leads, enrich data, and send AI-personalized emails at scale.",
    image: "/LimoraAI.png", // Using best fit placeholder
    gradient: "from-violet-500 to-purple-500",
    stats: { status: "Live", type: "CRM", delivery: "14 Days" },
    technologies: ["Next.js", "OpenAI", "Resend", "PostgreSQL"],
    year: "2024",
    link: "https://limora.ai",
    founder: "Adrien Ninet",
  },
  {
    id: "closeworks",
    name: "CLoseWorksAI",
    category: "AI Phone Rep",
    description:
      "AI phone live representative agent. Built for Client Jaylen Feliciano.",
    fullDescription:
      "Real-time voice AI that handles inbound and outbound sales calls. Features ultra-low latency voice processing and direct CRM integration.",
    image: "/CloseWorksAI.png",
    gradient: "from-emerald-500 to-teal-500",
    stats: { status: "Live", type: "Voice AI", delivery: "14 Days" },
    technologies: ["Vapi.ai", "Python", "Next.js", "Twilio"],
    year: "2024",
    link: "https://www.closeworks.io/#/",
    founder: "Jaylen Feliciano",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "The Validator (MVP)",
    subtitle: "Speed to Market",
    description: "For the founder who needs to validate an idea immediately.",
    price: "$15,000",
    period: "One-Time",
    features: [
      "14-Day Delivery Guarantee",
      "Core Features & Auth",
      "Stripe Integration",
      "User Dashboard",
      "Same-Day Prototype (Day 1)",
      "14 Days Post-Launch Support",
    ],
    cta: "Build MVP",
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    id: 2,
    name: "The Scale Asset",
    subtitle: "Revenue Focused",
    description: "For the founder who wants revenue, not just software.",
    price: "$50,000",
    period: "One-Time",
    features: [
      "Everything in MVP",
      "7+ Custom Features",
      "Affiliate System Setup",
      "Agent Mode AI Integration",
      "Hire 3x UGC Content Creators",
      "Viral Format Creation",
      "White Label B2B Suite",
      "90 Days Distribution Strategy",
    ],
    cta: "Start Scaling",
    gradient: "from-accent to-orange-500",
    popular: true,
  },
  {
    id: 3,
    name: "The Enterprise Exit",
    subtitle: "Exit-Ready Asset",
    description:
      "For High-Net-Worth Founders demanding an acquisition-ready asset.",
    price: "$100,000",
    period: "One-Time",
    features: [
      "Founder-Level Architecture",
      "Due Diligence Ready Code",
      "SSO & Advanced Security",
      "High-Concurrency Scaling",
      "12-Month Strategic Board Access",
      "Exit Planning Roadmap",
    ],
    cta: "Build Enterprise",
    gradient: "from-violet-500 to-purple-500",
    popular: false,
  },
];

export const processSteps = [
  {
    id: 1,
    title: "Same-Day Prototype",
    subtitle: "Day 1",
    description:
      "We don't wait for 'Discovery'. You get a clickable, working model in your hands before the sun goes down on Day 1.",
    gradient: "from-accent to-orange-500",
  },
  {
    id: 2,
    title: "Daily Build Loop",
    subtitle: "Days 2–13",
    description:
      "Radical transparency. We code user flows, auth, and billing. You get a Loom update every single day by EOD. No ghosting.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "The Money Engine",
    subtitle: "Day 14",
    description:
      "We don't just hand over keys; we install the engine. We deploy the app + activate the Tier 2 Distribution System.",
    gradient: "from-emerald-500 to-teal-500",
  },
];
export const conceptExamples = [
  { name: "Viral.app", desc: "Optimize viral UGC", link: "https://viral.app" },
  { name: "Migma.ai", desc: "Loveable for email", link: "https://migma.ai" },
  {
    name: "Director.ai",
    desc: "Automate your browser",
    link: "https://www.director.ai",
  },
  {
    name: "Layercode.com",
    desc: "Build Voice AI agents",
    link: "https://layercode.com",
  },
];

export const clientProofs = [
  {
    name: "Nick Granberry",
    instagram: "https://www.instagram.com/nick.granberry",
    productLink: "https://www.morpheusbusiness.ai/",
    productName: "Morpheus AI",
  },
  {
    name: "Adrien Ninet",
    instagram: "https://www.instagram.com/adrien.ninet",
    productLink: "https://limora.ai",
    productName: "Limora AI",
  },
  {
    name: "Jaylen Feliciano",
    instagram:
      "https://www.instagram.com/jaylenfeliciano?igsh=d3FjdW51azBhOG11",
    productLink: "https://www.closeworks.io/#/",
    productName: "CloseWorks",
  },
];
