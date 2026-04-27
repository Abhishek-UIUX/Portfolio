export const personal = {
  name: "Abhishek Jaiswar",
  title: "Full Stack Developer & Team Lead",
  email: "jaiswarabhishek2@gmail.com",
  phone: "+91-9768425825",
  location: "Mumbai, India",
  linkedin: "https://linkedin.com/in/abhishek-jaiswar",
  github: "https://github.com/abhishekjaiswar",
  brandStatement: {
    headline: "I don't just ship features — I architect systems that scale.",
    subline:
      "7 years of turning enterprise complexity into clean, performant interfaces — from AI-first ECM platforms to cross-platform mobile apps — always on time, always production-ready.",
  },
};

export const stats = [
  { label: "Years Experience", value: "7+", accent: "violet" },
  { label: "Enterprise Projects", value: "10+", accent: "cyan" },
  { label: "On-Time Delivery", value: "100%", accent: "green" },
  { label: "Team Members Led", value: "5+", accent: "coral" },
];

export const techStack = {
  frontend: ["Next.js", "React.js", "Angular CLI", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
  mobile: ["React Native", "Ionic"],
  backend: ["Node.js", "Python", "Laravel", "PHP"],
  database: ["MySQL"],
  auth: ["OAuth", "JWT"],
  architecture: ["REST API", "Microservices", "SEO Optimization"],
  tools: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Trello", "Asana", "Notion", "Lighthouse", "DBeaver"],
};

export type Project = {
  id: string;
  title: string;
  role: string;
  stack: string[];
  category: "web" | "mobile" | "tool";
  featured: boolean;
  tagline: string;
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  metrics: { label: string; value: string }[];
  tradeoffs: string;
};

export const projects: Project[] = [
  {
    id: "sharedocs-enterpriser",
    title: "ShareDocs Enterpriser",
    role: "Team Lead",
    stack: ["Next.js", "React.js", "Node.js", "MySQL"],
    category: "web",
    featured: true,
    tagline: "AI-first Enterprise Content Management System",
    star: {
      situation:
        "Enterprise clients needed a modern ECM replacing fragmented document workflows spread across email, shared drives, and legacy portals — no single source of truth, zero audit trail.",
      task:
        "Architect and lead front-end development of an AI-first ECM platform capable of handling document ingestion, approval workflows, version control, and role-based access at enterprise scale.",
      action:
        "Designed a modular Next.js architecture with server components for SSR performance, integrated AI-based document classification, built a Rule Engine for dynamic workflow routing, and implemented an E-Sign PDF module — all as reusable microservices consumed across the platform.",
      result:
        "Delivered a production-ready ECM system adopted enterprise-wide, with document processing workflows that previously took hours now resolved in minutes. Zero post-launch critical bugs in first 90 days.",
    },
    metrics: [
      { label: "Workflow Time Reduction", value: "~80%" },
      { label: "Critical Post-Launch Bugs", value: "0" },
      { label: "Reusable Modules Shipped", value: "6+" },
    ],
    tradeoffs:
      "Chose SSR over full SPA to prioritize SEO and initial load time — trade-off was increased server complexity, mitigated by aggressive caching at the layout level.",
  },
  {
    id: "ckyc-revamp",
    title: "CKYC Revamp",
    role: "Team Lead",
    stack: ["Next.js", "MySQL"],
    category: "web",
    featured: true,
    tagline: "Legacy-to-Next.js migration with 3x performance gain",
    star: {
      situation:
        "A Central KYC portal running on legacy PHP/jQuery was failing compliance audits — slow load times, poor mobile responsiveness, and no SEO structure were blocking regulatory approval.",
      task:
        "Lead a full frontend revamp: migrate to Next.js, redesign UI for compliance UX standards, and optimize performance metrics to pass Lighthouse audits.",
      action:
        "Replaced jQuery DOM manipulation with React state management, introduced dynamic imports and image optimization, rebuilt all forms with the JSON-driven Form Builder for maintainability, and enforced strict semantic HTML for accessibility and SEO.",
      result:
        "UI performance and operational throughput improved by 3x. Lighthouse score jumped from ~40 to 90+. Compliance audit passed on first submission post-revamp.",
    },
    metrics: [
      { label: "Performance Improvement", value: "3x" },
      { label: "Lighthouse Score", value: "90+" },
      { label: "Compliance Audit", value: "Passed" },
    ],
    tradeoffs:
      "Full rewrite vs incremental migration — chose full rewrite given the tight compliance deadline. Risk was higher but avoided months of maintaining dual codebases.",
  },
  {
    id: "dms-mobile-app",
    title: "DMS Mobile App",
    role: "Team Lead",
    stack: ["React Native", "Laravel", "MySQL"],
    category: "mobile",
    featured: true,
    tagline: "Enterprise document workflow approvals on mobile",
    star: {
      situation:
        "Field executives and managers needed to approve documents and access enterprise content on-the-go — desktop-only ECM was blocking business continuity outside office.",
      task:
        "Lead frontend development and mobile UI architecture for a cross-platform app serving both iOS and Android, integrated with the existing Laravel/MySQL backend.",
      action:
        "Built a React Native app with offline-capable document queuing, push notification approval flows, biometric auth, and a native-feeling document viewer. Designed reusable mobile UI components shared across DMS and CPAPP.",
      result:
        "Enabled remote document approvals, cutting approval turnaround from 24h to under 2h for mobile users. App adopted by 200+ enterprise users at launch.",
    },
    metrics: [
      { label: "Approval Turnaround", value: "24h → 2h" },
      { label: "Platforms", value: "iOS + Android" },
      { label: "Launch Users", value: "200+" },
    ],
    tradeoffs:
      "React Native over Flutter — chosen for code-sharing with existing React.js codebase and team expertise. Trade-off was occasional native module debugging complexity.",
  },
  {
    id: "cpapp-mobile-app",
    title: "CPAPP Mobile App",
    role: "Team Lead",
    stack: ["React Native"],
    category: "mobile",
    featured: false,
    tagline: "Real-time workflow tracking & document approvals",
    star: {
      situation:
        "Cross-functional teams had no unified mobile interface for tracking workflow status, leading to missed approvals and communication gaps.",
      task:
        "Build an enterprise React Native app for workflow tracking, document approvals, and real-time push notifications.",
      action:
        "Implemented real-time notification architecture with deep-link routing, built approval chain UI with optimistic updates, and led cross-platform mobile API integration.",
      result:
        "Consolidated workflow visibility across teams, reducing missed approvals by ~60% in the first quarter post-launch.",
    },
    metrics: [
      { label: "Missed Approvals Reduction", value: "~60%" },
      { label: "Platforms", value: "Cross-platform" },
    ],
    tradeoffs:
      "Optimistic UI updates chosen over pessimistic for perceived speed — required robust rollback logic on API failures.",
  },
  {
    id: "aadhar-masking-tool",
    title: "Aadhar Masking Tool",
    role: "Team Lead",
    stack: ["Next.js", "Python"],
    category: "tool",
    featured: false,
    tagline: "Bulk Aadhar masking with AI auto-detection + payment gateway",
    star: {
      situation:
        "Financial institutions processing KYC documents needed a compliant way to mask Aadhar numbers at scale — manual masking was error-prone and non-scalable.",
      task:
        "Engineer a platform supporting both bulk and single Aadhar masking, integrating AI-based auto-detection APIs and a payment gateway for SaaS billing.",
      action:
        "Built a Next.js frontend with drag-and-drop bulk upload, integrated Python-based AI detection API for automatic Aadhar region identification, and wired up Razorpay for subscription-based access.",
      result:
        "Reduced manual KYC masking effort by 90%+ for clients processing 1000s of documents daily. Platform became a standalone revenue-generating SaaS product.",
    },
    metrics: [
      { label: "Manual Effort Reduction", value: "90%+" },
      { label: "Processing Mode", value: "Bulk + Single" },
      { label: "Monetization", value: "SaaS" },
    ],
    tradeoffs:
      "AI auto-detection vs rule-based masking — AI chosen for accuracy but required fallback manual mode for edge-case documents.",
  },
  {
    id: "asset-management",
    title: "Asset Management Tool",
    role: "Team Member",
    stack: ["Next.js", "PHP"],
    category: "web",
    featured: false,
    tagline: "Multi-tenant fixed asset management with QR tracking",
    star: {
      situation:
        "Enterprise clients lacked a centralized system to track physical assets — spreadsheets caused audit failures and asset loss.",
      task:
        "Build a multi-tenant Fixed Asset Management System with QR-enabled tracking, asset lifecycle workflows, audit trails, and analytics dashboards.",
      action:
        "Implemented QR code generation and scanning flow, built role-based access with tenant isolation, created audit trail logging, and designed analytics dashboards with filterable asset lifecycle views.",
      result:
        "Reduced asset loss incidents and enabled clients to pass internal audits with full traceability.",
    },
    metrics: [
      { label: "Tenancy", value: "Multi-tenant" },
      { label: "Tracking", value: "QR-enabled" },
    ],
    tradeoffs:
      "QR over RFID — lower infrastructure cost, sufficient for client scale.",
  },
  {
    id: "qb-tool",
    title: "QB Tool — Question Bank",
    role: "Team Member",
    stack: ["Angular CLI"],
    category: "web",
    featured: false,
    tagline: "Multi-tenant question bank with role-based approval workflows",
    star: {
      situation:
        "Educational institutions needed a centralized system to manage, review, and approve exam questions across departments with strict role hierarchy.",
      task:
        "Develop modules for a multi-tenant Question Bank Management System including dynamic question components, multi-stage approval workflows, RBAC, and reporting.",
      action:
        "Built Angular modules for dynamic question rendering (MCQ, subjective, matrix), implemented multi-stage approval state machine, and created reporting dashboards with export functionality.",
      result:
        "Enabled institutions to manage thousands of questions with full audit trails and role-gated access.",
    },
    metrics: [
      { label: "Approval Stages", value: "Multi-stage" },
      { label: "Question Types", value: "Dynamic" },
    ],
    tradeoffs:
      "Angular chosen over React for this project — existing team expertise and enterprise Angular ecosystem fit the client's long-term maintenance requirements.",
  },
];

export const reusableComponents = [
  {
    id: "rule-engine",
    title: "Rule Engine",
    description: "Visual drag-and-drop rule builder for dynamic workflow routing logic.",
    tags: ["React.js", "JSON", "Microservice"],
    icon: "GitBranch",
  },
  {
    id: "esign-pdf",
    title: "E-Sign PDF",
    description: "In-browser PDF signing with AcroForm detection and digital signature placement.",
    tags: ["Next.js", "PDF", "Canvas"],
    icon: "FileSignature",
  },
  {
    id: "dynogrid",
    title: "DynoGrid",
    description: "Configurable data grid engine with sorting, filtering, pagination, and column resize.",
    tags: ["React.js", "TypeScript"],
    icon: "LayoutGrid",
  },
  {
    id: "form-builder",
    title: "JSON Form Builder",
    description: "Schema-driven React form generator — define forms in JSON, render dynamically.",
    tags: ["React.js", "JSON Schema"],
    icon: "FormInput",
  },
  {
    id: "ai-face-validation",
    title: "AI Face Validation",
    description: "AI-powered face detection and liveness validation microservice.",
    tags: ["Python", "AI/ML", "API"],
    icon: "ScanFace",
  },
  {
    id: "redaction-tool",
    title: "Redaction Tool",
    description: "Smart document redaction with manual and AI-assisted region detection.",
    tags: ["Next.js", "Python", "Canvas"],
    icon: "EyeOff",
  },
  {
    id: "notification-service",
    title: "Notification Service",
    description: "Unified push/email/in-app notification microservice with template support.",
    tags: ["Node.js", "Microservice"],
    icon: "Bell",
  },
  {
    id: "pdf-editor",
    title: "PDF Editor",
    description: "Browser-based PDF editing with AcroForm field detection and data injection.",
    tags: ["Next.js", "PDF", "AcroForm"],
    icon: "FileEdit",
  },
];

export const experience = [
  {
    company: "Hridayamsoft Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    role: "Team Leader / Full Stack Developer",
    period: "Feb 2019 – Present",
    duration: "6+ years",
    highlights: [
      "Directed front-end and full stack development for ShareDocs Enterpriser and DMS Mobile App",
      "Revamped CKYC — legacy system to Next.js, 3x performance improvement",
      "Designed reusable components: Rule Builder, E-sign Tool, DynoGrid",
      "Led cross-functional teams, enforced Agile workflow and coding standards",
      "Optimized SEO for corporate websites, boosting organic traffic significantly",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    year: "2022",
  },
  {
    degree: "Bachelor of Science in IT (B.Sc. IT)",
    institution: "Mumbai University",
    year: "2018",
  },
];
