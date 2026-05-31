export const profile = {
  name: "Zvi Naiman",
  title: "Senior Full Stack Developer",
  subtitle: "Technical Lead · Enterprise Systems · .NET · Angular",
  email: "zvi.naiman@gmail.com",
  phone: "050-960-5770",
  location: "Israel",
  summary: [
    "Senior Full Stack Developer with over 15 years of experience building and leading complex enterprise information systems, cross-organizational infrastructures, and integration solutions at scale.",
    "Technical leadership across development teams—mentoring engineers, writing specifications, and partnering with business, infrastructure, security, and vendor stakeholders.",
    "Deep expertise in C#, .NET Framework through .NET 8+, and Angular frontends; distributed systems, microservices, Web APIs, and messaging (RabbitMQ, Azure Service Bus) for mission-critical multi-user platforms.",
  ],
  education: {
    degree: "B.Sc. in Computer Science",
    institution: "Lev Academic Center",
  },
  languages: ["Hebrew — Native", "English — Native"],
} as const;

export type CareerRole = {
  period: string;
  company: string;
  role: string;
  highlight?: string;
  bullets: string[];
};

export const career: CareerRole[] = [
  {
    period: "Jun 2023 — Present",
    company: "Freelance",
    role: "Senior Full Stack Developer",
    highlight: "Raffi Weinberger Law Office — real estate process & documentation platform",
    bullets: [
      "Client-facing requirements analysis and end-to-end solution design",
      "Technical specifications and leadership of a 5-developer team",
      "Microservices on ASP.NET Core Web API (.NET 8), Angular 16–20, Tailwind",
      "JWT / ASP.NET Identity, Azure Service Bus, RabbitMQ, EF Code First",
    ],
  },
  {
    period: "Dec 2022 — May 2023",
    company: "Malam Team",
    role: "Full Stack Developer",
    bullets: [
      "Enterprise information system development and maintenance",
      ".NET Framework & .NET Core, ASP.NET Web API / MVC",
      "Angular 16, PrimeNG, legacy modernization",
    ],
  },
  {
    period: "Jun 2022 — Dec 2022",
    company: "Rotem Dynamics",
    role: "Integration Developer",
    bullets: [
      "Microsoft Dynamics CRM 365 integrations",
      "REST APIs, ASP.NET MVC, SSRS reporting",
    ],
  },
  {
    period: "May 2020 — May 2022",
    company: "Face-Int",
    role: "Full Stack Developer",
    bullets: [
      "ASP.NET Core Web API, JWT, OAuth, SSO, security middleware",
      "Angular frontend, SignalR real-time updates",
    ],
  },
  {
    period: "2011 — 2020",
    company: "Israel Courts Administration",
    role: "Senior Full Stack Developer · Team Lead",
    bullets: [
      "Team Lead for enterprise systems serving thousands of users",
      "ASP.NET Web API / MVC, Identity, Net HaMishpat & Dynamics CRM integration",
      "BI domain lead — SSRS, SSIS, ETL; Agile / Scrum delivery",
      "Vendor collaboration, root-cause analysis, performance optimization",
    ],
  },
  {
    period: "2012 — 2018",
    company: "Lev Academic Center",
    role: "Lecturer · Teaching Assistant",
    bullets: [
      "Computerized Systems Analysis, Internet Software Engineering",
      "Mentoring students in analysis, specs, and .NET / Node.js projects",
    ],
  },
  {
    period: "2010",
    company: "Government Forms Service",
    role: "Integration Specialist",
    bullets: [
      "Smart-card authentication, IBM DataPower, WCF services",
      "Led complex tasks and mentored Matrix Global developers",
    ],
  },
  {
    period: "2006 — 2009",
    company: "Rashim · Green Point",
    role: "Software Developer",
    bullets: [
      "ASP.NET WebForms, Classic ASP, VB.NET, SQL Server",
      "Salesforce CRM integrations",
    ],
  },
];

export const techStacks = [
  {
    category: "Backend",
    items: ["C#", ".NET 8+", "ASP.NET Web API", "ASP.NET MVC", "WebForms"],
  },
  {
    category: "Frontend",
    items: ["Angular 2–21", "TypeScript", "Tailwind", "Angular Material", "PrimeNG"],
  },
  {
    category: "Architecture",
    items: ["Microservices", "Azure Service Bus", "RabbitMQ", "REST APIs", "SignalR"],
  },
  {
    category: "Security",
    items: ["JWT", "OAuth", "SSO", "ASP.NET Identity"],
  },
  {
    category: "Data & BI",
    items: ["SQL Server", "MySQL", "EF Core", "SSRS", "SSIS"],
  },
  {
    category: "Platform",
    items: ["Azure", "Git", "Azure DevOps", "CI/CD", "IIS"],
  },
] as const;

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  href?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "enterprise-platforms",
    title: "Enterprise Platforms",
    description:
      "Large-scale court and government systems — architecture, integrations, and delivery leadership.",
  },
  {
    id: "microservices-law",
    title: "Legal Tech Microservices",
    description:
      "Real estate documentation platform — .NET 8 APIs, Angular, messaging, and identity.",
  },
  {
    id: "integrations-bi",
    title: "Integrations & BI",
    description: "CRM, ETL, and reporting pipelines across enterprise data estates.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#stack", label: "Stack" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
] as const;
