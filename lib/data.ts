// export const projects = [
//   {
//     id: "knimble",
//     name: "Knimble",
//     category: "App UI",
//     description:
//       "A sleek, intuitive mobile app interface designed for seamless user experience and modern aesthetics.",
//     fullDescription:
//       "Knimble is a revolutionary mobile application that redefines how users interact with their daily tasks. Built with a focus on intuitive design and seamless user experience, this app showcases the perfect blend of form and function.",
//     image: "/mobile-app-ui-design-dark-modern-interface.jpg",
//     gradient: "from-violet-500 to-purple-500",
//     stats: { users: "50K+", rating: "4.9", downloads: "100K+" },
//     technologies: ["React Native", "TypeScript", "Reanimated", "Zustand"],
//     year: "2024",
//   },
//   {
//     id: "highpath",
//     name: "HighPath",
//     category: "KPI Dashboard",
//     description:
//       "Executive-level KPI dashboard providing real-time insights and data visualization for decision makers.",
//     fullDescription:
//       "HighPath delivers powerful business intelligence through a beautifully crafted dashboard that transforms complex data into actionable insights. Designed for C-suite executives and team leads.",
//     image: "/kpi-dashboard-analytics-dark-theme-executive.jpg",
//     gradient: "from-accent to-orange-500",
//     stats: { metrics: "200+", users: "5K", uptime: "99.9%" },
//     technologies: ["Next.js", "D3.js", "PostgreSQL", "Redis"],
//     year: "2024",
//   },
//   {
//     id: "porta",
//     name: "Porta",
//     category: "Operations Dashboard",
//     description:
//       "Comprehensive operations management dashboard streamlining workflows and team productivity.",
//     fullDescription:
//       "Porta is an all-in-one operations platform that helps teams collaborate, track progress, and optimize their workflows. Built for scale with enterprise-grade security.",
//     image: "/operations-dashboard-dark-theme-workflow-managemen.jpg",
//     gradient: "from-cyan-500 to-blue-500",
//     stats: { tasks: "1M+", teams: "500+", efficiency: "+40%" },
//     technologies: ["React", "Node.js", "MongoDB", "WebSockets"],
//     year: "2024",
//   },
//   {
//     id: "loadtrends",
//     name: "Loadtrends",
//     category: "Logistics Dashboard",
//     description:
//       "Logistics and supply chain dashboard with real-time tracking and predictive analytics.",
//     fullDescription:
//       "Loadtrends revolutionizes supply chain management with AI-powered predictions and real-time tracking. Monitor shipments, optimize routes, and reduce costs.",
//     image: "/logistics-dashboard-supply-chain-tracking-dark.jpg",
//     gradient: "from-emerald-500 to-teal-500",
//     stats: { shipments: "10K+", savings: "$2M", accuracy: "98%" },
//     technologies: ["Vue.js", "Python", "TensorFlow", "AWS"],
//     year: "2023",
//   },
//   {
//     id: "event-app",
//     name: "Event App",
//     category: "Event Management UI",
//     description:
//       "Full-featured event management platform for organizing, promoting, and managing events at scale.",
//     fullDescription:
//       "A comprehensive event management solution that handles everything from ticketing to attendee engagement. Perfect for conferences, concerts, and corporate events.",
//     image: "/event-management-app-ui-dark-modern-calendar.jpg",
//     gradient: "from-pink-500 to-rose-500",
//     stats: { events: "10K+", attendees: "1M+", revenue: "$50M+" },
//     technologies: ["Next.js", "Stripe", "Supabase", "Tailwind"],
//     year: "2023",
//   },
//   {
//     id: "financial-dashboard",
//     name: "Financial Dashboard",
//     category: "Insights & Analytics",
//     description:
//       "Advanced financial analytics dashboard with AI-powered insights and forecasting capabilities.",
//     fullDescription:
//       "Transform financial data into strategic decisions with our AI-powered analytics platform. Real-time market analysis, portfolio tracking, and predictive modeling.",
//     image: "/financial-dashboard-analytics-charts-dark-theme.jpg",
//     gradient: "from-amber-500 to-yellow-500",
//     stats: { portfolios: "5K+", aum: "$500M", accuracy: "94%" },
//     technologies: ["React", "Python", "PyTorch", "TimescaleDB"],
//     year: "2023",
//   },
//   {
//     id: "getlannyai",
//     name: "GetLannyAI",
//     category: "AI Content Tool",
//     description:
//       "AI-powered content creation platform for content creators, marketers, and founders to scale their output.",
//     fullDescription:
//       "GetLannyAI is an intelligent content creation assistant that helps you write, edit, and optimize content 10x faster. From blog posts to social media, we've got you covered.",
//     image: "/ai-content-creation-tool-interface-dark-modern.jpg",
//     gradient: "from-indigo-500 to-violet-500",
//     stats: { users: "25K+", content: "5M+", timeSaved: "10K hrs" },
//     technologies: ["Next.js", "OpenAI", "Vercel AI SDK", "Prisma"],
//     year: "2024",
//   },
//   {
//     id: "morpheusbusinessai",
//     name: "MorpheusBusinessAI",
//     category: "AI Business Partner",
//     description:
//       "Intelligent AI business assistant that automates tasks, provides insights, and drives growth.",
//     fullDescription:
//       "MorpheusBusinessAI is your AI-powered business partner that handles everything from market research to competitor analysis. Make data-driven decisions faster.",
//     image: "/ai-business-assistant-dashboard-dark-futuristic.jpg",
//     gradient: "from-blue-500 to-cyan-500",
//     stats: { businesses: "2K+", automation: "80%", roi: "300%" },
//     technologies: ["Python", "LangChain", "FastAPI", "Pinecone"],
//     year: "2024",
//   },
//   {
//     id: "closeworks",
//     name: "CloseWorks",
//     category: "Sales Coaching AI",
//     description:
//       "Real-time AI-powered sales call coaching that helps teams close more deals with actionable feedback.",
//     fullDescription:
//       "CloseWorks analyzes sales calls in real-time, providing instant feedback and coaching to help your team close more deals. Powered by advanced NLP and sentiment analysis.",
//     image: "/sales-coaching-ai-interface-call-analytics-dark.jpg",
//     gradient: "from-green-500 to-emerald-500",
//     stats: { calls: "500K+", closeRate: "+35%", teams: "300+" },
//     technologies: ["React", "WebRTC", "Whisper AI", "GPT-4"],
//     year: "2024",
//   },
//   {
//     id: "ai-grant-writing",
//     name: "AI Grant Writing System",
//     category: "Grant Automation",
//     description:
//       "AI-powered grant writing, submission, and proposal system that streamlines funding applications.",
//     fullDescription:
//       "Automate your grant writing process with AI that understands funding requirements, writes compelling proposals, and tracks submissions. Increase your success rate dramatically.",
//     image: "/grant-writing-ai-document-automation-dark.jpg",
//     gradient: "from-orange-500 to-red-500",
//     stats: { grants: "10K+", funded: "$100M+", successRate: "45%" },
//     technologies: ["Next.js", "Claude AI", "PostgreSQL", "AWS S3"],
//     year: "2023",
//   },
//   {
//     id: "fund2grow",
//     name: "Fund2Grow",
//     category: "Funding Automation",
//     description:
//       "Fully automated funding platform that connects startups with investors and streamlines the process.",
//     fullDescription:
//       "Fund2Grow is a complete funding automation platform that matches startups with the right investors, handles due diligence, and streamlines the entire investment process.",
//     image: "/funding-platform-startup-investment-dark-modern.jpg",
//     gradient: "from-purple-500 to-pink-500",
//     stats: { startups: "5K+", raised: "$250M+", investors: "1K+" },
//     technologies: ["Next.js", "Supabase", "Stripe", "AI Matching"],
//     year: "2024",
//   },
// ];
export const projects = [
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
  {
    id: "viral-app",
    name: "Viral.app",
    category: "Viral UGC",
    description: "Optimize viral UGC content creation.",
    fullDescription:
      "An AI-powered tool designed to analyze and optimize user-generated content for maximum viral potential on TikTok and Reels.",
    image: "/ViralAPP.png",
    gradient: "from-orange-500 to-red-500",
    stats: { status: "Concept", type: "Content", delivery: "14 Days" },
    technologies: ["Next.js", "FFmpeg", "OpenAI Vision"],
    year: "2025",
    link: "https://viral.app",
  },
  {
    id: "migma",
    name: "Migma AI",
    category: "Email AI",
    description:
      "Lovable for Email. Automated newsletter and drip campaign builder.",
    fullDescription:
      "A 'Lovable-like' interface for building complex email marketing flows using natural language prompts.",
    image: "/MigmaAI.png",
    gradient: "from-pink-500 to-rose-500",
    stats: { status: "Concept", type: "Email", delivery: "14 Days" },
    technologies: ["Next.js", "Resend", "Supabase"],
    year: "2025",
    link: "https://migma.ai",
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
