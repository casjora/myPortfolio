export const PERSONAL_INFO = {
  name: "Rafael Lopez",
  location: "Tegucigalpa, Honduras",
  email: "casjorahn@gmail.com",
  secondaryEmail: "casjora@gmail.com",
  phone: "+504 9283-5545",
  linkedin: "https://www.linkedin.com/in/rafaellopez90",
  github: "https://github.com/casjora",
  languages: [
    { name: "English", level: "Full Professional Proficiency (C1)" },
    { name: "Spanish", level: "Native / Bilingual" }
  ],
  roles: [
    { id: "all", label: "All Specializations", icon: "Sparkles", color: "from-indigo-500 to-purple-600" },
    { id: "webdev", label: "Frontend Web Developer", icon: "Code2", color: "from-indigo-600 to-blue-500" },
    { id: "data", label: "Data Analyst & KPI Specialist", icon: "BarChart3", color: "from-emerald-600 to-teal-500" },
    { id: "qa", label: "QA Manager & BPO Automation", icon: "ShieldCheck", color: "from-amber-500 to-orange-600" }
  ]
};

export const HIGHLIGHT_STATS = [
  {
    id: "exp",
    number: "6+",
    label: "Years Operations & QA Leadership",
    description: "Leading QA teams of 20+ members, auditing complex datasets, & enforcing SLA compliance."
  },
  {
    id: "efficiency",
    number: "41%",
    label: "Process Time Reduction",
    description: "Engineered JavaScript & Apps Script automation cutting evaluation times from 60+ to 35 mins."
  },
  {
    id: "csat",
    number: "+20%",
    label: "CSAT & KPI Score Lift",
    description: "Designed data-driven root-cause action plans resulting in 10-20% CSAT improvements."
  },
  {
    id: "tech",
    number: "100%",
    label: "Data Integrity & Code Quality",
    description: "Meta & Google certified professional combining modern React with rigorous QA verification."
  }
];

export const PROJECTS = [
  {
    id: "iconic-boutique",
    title: "Iconic Boutique HN",
    rank: 1,
    category: "webdev",
    isFlagship: true,
    github: "https://github.com/casjora/iconic-boutique-hn",
    description: "Full-stack wholesale e-commerce SPA for premium fragrance sales with AI-powered inventory management (Gemini), barcode generation, Telegram order alerts, and Supabase RLS policies.",
    keyHighlights: [
      "AI-Powered Invoice & Inventory parsing using Gemini AI",
      "Real-time inventory synchronization with Supabase backend",
      "Automated order dispatch alerts via Telegram API webhooks",
      "Enterprise security with Row Level Security (RLS) policies"
    ],
    tags: ["React", "Vite", "Express", "Supabase", "Gemini AI", "Telegram API", "Tailwind CSS"],
    image: "/pages/images/desktop/image-hero.jpg"
  },
  {
    id: "luxe-store",
    title: "LUXE. - E-Commerce Demo",
    rank: 2,
    category: "webdev",
    github: "https://github.com/casjora/fake-store",
    description: "Modern React e-commerce application built with FakeStoreAPI featuring custom fetch hooks, dynamic category filtering, instant search, and mobile-first responsive layout.",
    keyHighlights: [
      "Custom `useFetchProducts` React hook for optimal data caching",
      "Mobile-first responsive architecture with micro-interactions",
      "Resilient error-state boundaries and graceful offline fallback"
    ],
    tags: ["React", "JavaScript (ES6+)", "Tailwind CSS", "REST API", "Custom Hooks"],
    image: "/public/images/info-card.png"
  },
  {
    id: "react-wallet",
    title: "React Wallet",
    rank: 3,
    category: "webdev",
    github: "https://github.com/casjora/react-wallet",
    description: "Financial tracking and transactional dashboard managing account balances, budget tracking, and real-time transaction history with persistent local state.",
    keyHighlights: [
      "Complex transactional calculations and balance analytics",
      "Clean financial card UI with real-time budget status indicators",
      "Modular component design using Vite + React"
    ],
    tags: ["React", "Vite", "JavaScript", "Tailwind CSS", "State Management"],
    image: "/public/images/water-draft.png"
  },
  {
    id: "weather-app",
    title: "Weather Data Dashboard",
    rank: "Honorable Mention",
    category: "webdev",
    github: "https://github.com/casjora/weather-app",
    description: "Interactive weather application consuming geolocation and forecast APIs with dynamic data visualization.",
    keyHighlights: ["API integration", "Interactive weather metrics", "Responsive card layouts"],
    tags: ["JavaScript", "REST API", "HTML5/CSS3"],
    image: "/public/images/info-card-2.png"
  },
  {
    id: "team-page",
    title: "Team Showcase Page",
    rank: "Honorable Mention",
    category: "webdev",
    github: "https://github.com/casjora/team-page",
    description: "Modern component-driven team directory demonstrating responsive grid layouts and card composition.",
    keyHighlights: ["Component composition", "Accessible design", "Flex/Grid layout"],
    tags: ["React", "CSS Modules", "Tailwind CSS"],
    image: "/pages/images/desktop/image-soccer-team.jpg"
  }
];

export const DATA_CASE_STUDIES = [
  {
    id: "bpo-kpi",
    title: "BPO Operations & QA KPI Analytics Dashboard",
    client: "Interactive Contact Center & IntouchCX",
    impact: "Cut handling times by 41% & boosted CSAT by 10-20%",
    description: "Designed Looker Studio dashboards and automated SQL/Google Sheets data pipelines for executive stakeholder reporting across 20+ QA team members.",
    metrics: [
      { label: "Review Time", value: "35 mins", detail: "Down from 60+ mins baseline" },
      { label: "CSAT Improvement", value: "+10% - 20%", detail: "Via root cause action plans" },
      { label: "Dataset Accuracy", value: "100%", detail: "Strict automated data validation" }
    ],
    chartData: [
      { month: "Jan", handlingTime: 62, csat: 78, accuracy: 88 },
      { month: "Mar", handlingTime: 55, csat: 82, accuracy: 91 },
      { month: "May", handlingTime: 48, csat: 85, accuracy: 94 },
      { month: "Jul", handlingTime: 42, csat: 89, accuracy: 97 },
      { month: "Sep", handlingTime: 38, csat: 92, accuracy: 99 },
      { month: "Nov", handlingTime: 35, csat: 95, accuracy: 100 }
    ]
  },
  {
    id: "data-cleaning",
    title: "Client Interaction Data Cleaning & Anomaly Detection",
    client: "Google Data Analytics Capstone",
    impact: "Zero-error rate on client dataset validation",
    description: "Utilized SQL and Python scripts to clean dirty datasets, extract trend anomalies, and format multi-source BPO call logs into structured schemas.",
    metrics: [
      { label: "Pipeline", value: "SQL + Apps Script", detail: "Automated ingestion" },
      { label: "Cleaned Records", value: "10,000+", detail: "Multi-client interactions" }
    ],
    chartData: [
      { category: "Doc Errors", count: 42, resolved: 42 },
      { category: "Data Inconsistencies", count: 35, resolved: 35 },
      { category: "Format Mismatches", count: 28, resolved: 28 },
      { category: "AI System Flags", count: 19, resolved: 19 }
    ]
  }
];

export const QA_AUTOMATION_CASE_STUDIES = [
  {
    id: "apps-script-engine",
    title: "JavaScript / Google Apps Script BPO Review Engine",
    role: "QA Coordinator & Automation Developer",
    impact: "Saved 25 mins per evaluation (60m ➔ 35m)",
    description: "Engineered a custom JavaScript-based Google Apps Script tool that parses raw interaction logs, automates scoring formulas, checks documentation edge cases, and dispatches real-time alerts.",
    features: [
      "Automated scoring calculations eliminating manual math errors",
      "Instant Telegram/Google Workspace notifications for critical client flags",
      "Standardized data entry templates reducing repetitive keystrokes by 20%",
      "Edge-case validation rules checking SOW & SLA documentation compliance"
    ]
  },
  {
    id: "qa-framework",
    title: "5-Stage Quality Assurance Audit Framework",
    role: "QA Supervisor & Team Lead (20+ Members)",
    impact: "100% SOW SOW alignment for 12+ consecutive months",
    description: "Established a structured QA lifecycle combining human expertise with AI-assisted validation for high-volume BPO operations.",
    stages: [
      { step: "01", name: "Data Ingestion", desc: "Automated sampling of call, chat, and ticket interactions." },
      { step: "02", name: "AI + Human Audit", desc: "Evaluating responses against documentation edge cases." },
      { step: "03", name: "Calibration Sessions", desc: "Standardizing scoring across 20+ QA auditors." },
      { step: "04", name: "RCA Analytics", desc: "Identifying root causes of agent performance dips." },
      { step: "05", name: "CSAT Action Plans", desc: "Deploying targeted coaching and KPI dashboards." }
    ]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "webdev",
    title: "Frontend & Web Development",
    icon: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: 92, tag: "Core Language" },
      { name: "React & Hooks", level: 90, tag: "UI Framework" },
      { name: "HTML5 & CSS3", level: 95, tag: "Web Standards" },
      { name: "Tailwind CSS v4", level: 92, tag: "Styling" },
      { name: "Vite & Tooling", level: 88, tag: "Build Engine" },
      { name: "Node.js & Express", level: 82, tag: "Backend APIs" },
      { name: "Supabase & RLS", level: 85, tag: "Cloud Database" },
      { name: "RESTful APIs", level: 90, tag: "Integration" }
    ]
  },
  {
    category: "data",
    title: "Data Analytics & KPI Dashboards",
    icon: "BarChart3",
    skills: [
      { name: "SQL & Querying", level: 88, tag: "Database" },
      { name: "Looker Studio", level: 92, tag: "BI Dashboards" },
      { name: "Google Sheets / Excel", level: 95, tag: "Data Analysis" },
      { name: "Python (Data Basics)", level: 80, tag: "Scripting" },
      { name: "R Programming", level: 75, tag: "Statistical Data" },
      { name: "Data Cleaning", level: 94, tag: "ETL / Integrity" },
      { name: "KPI & CSAT Tracking", level: 95, tag: "Metrics" }
    ]
  },
  {
    category: "qa",
    title: "QA Operations & Process Automation",
    icon: "ShieldCheck",
    skills: [
      { name: "Google Apps Script", level: 94, tag: "JS Automation" },
      { name: "QA Team Supervision", level: 92, tag: "Leadership" },
      { name: "SLA / SOW Auditing", level: 96, tag: "Compliance" },
      { name: "Root Cause Analysis (RCA)", level: 90, tag: "Strategy" },
      { name: "Process Optimization", level: 95, tag: "Workflow" },
      { name: "AI Validation Auditing", level: 88, tag: "AI Quality Control" }
    ]
  }
];

export const EXPERIENCES = [
  {
    period: "May 2024 – Jan 2026",
    role: "Quality Assurance Coordinator",
    company: "Interactive Contact Center",
    location: "Remote",
    highlights: [
      "Built and deployed JavaScript-based Google Apps Script automation that cut evaluation review handling time from 60+ to 35 minutes (41% efficiency improvement).",
      "Developed interactive Looker Studio dashboards to visualize real-time KPI data and agent performance for executive stakeholder reporting.",
      "Verified and certified large volumes of quality-related data to ensure 100% accuracy across client datasets."
    ]
  },
  {
    period: "Oct 2021 – May 2024",
    role: "Quality Assurance Supervisor",
    company: "IntouchCX (formerly 24-7 Intouch)",
    location: "Tegucigalpa, Honduras",
    highlights: [
      "Oversaw accuracy and integrity of data generated by a 20-member QA team, ensuring alignment with documentation standards.",
      "Reviewed and validated data generated through AI-assisted systems and human inputs, resulting in +10-20% CSAT and QA KPI boosts.",
      "Created standardized automated tools and procedures that reduced repetitive data entry tasks and handling time by 20%."
    ]
  },
  {
    period: "Oct 2020 – Oct 2021",
    role: "Quality Assurance Team Lead",
    company: "IntouchCX",
    location: "Tegucigalpa, Honduras",
    highlights: [
      "Led QA specialist team in auditing technical and data-entry outputs against strict client documentation standards.",
      "Conducted weekly calibration sessions to align scoring metrics across operations."
    ]
  },
  {
    period: "May 2018 – Dec 2020",
    role: "Quality Assurance Specialist / Senior Tech Support Agent",
    company: "IntouchCX",
    location: "Tegucigalpa, Honduras",
    highlights: [
      "Designed and built custom scripts and automation tools that reduced repetitive tasks and handling time by 20%.",
      "Audited technical support interactions with extreme attention to edge cases and documentation accuracy."
    ]
  },
  {
    period: "Apr 2009 – Oct 2009",
    role: "IT Support Desk Technician",
    company: "INCOGEHSA",
    location: "Tegucigalpa, Honduras",
    highlights: [
      "Configured LAN infrastructure, network routing, and provided hardware/software technical support."
    ]
  }
];

export const EDUCATION = [
  {
    institution: "Brigham Young University - Idaho",
    degree: "Software Development & Information Technology",
    period: "2021 – 2027",
    details: "Certificate in Web & Computer Programming (Completed Jun 2025)"
  },
  {
    institution: "Meta (Coursera)",
    degree: "Meta Front-End Development Professional Certificate",
    period: "Expected Apr 2026",
    details: "Advanced React, JavaScript, HTML/CSS, UI design, Git version control"
  },
  {
    institution: "Google (Coursera)",
    degree: "Google Data Analytics Professional Certificate",
    period: "Completed 2023",
    details: "Data cleaning, SQL querying, R programming, data visualization, Tableau/Looker"
  }
];
