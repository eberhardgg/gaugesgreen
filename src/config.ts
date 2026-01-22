import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://www.gaugesgreen.com/",
    author: "Ryan Eberhard",
    desc: "Fractional Product & Growth Leadership",
    title: "Gauges Green",
    ogImage: "og.png",
    lightAndDarkMode: true,
    postPerPage: 3,
    scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
    lang: "en",
    langTag: ["en-US"],
} as const;

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/eberhard",
        linkTitle: "Ryan Eberhard on LinkedIn",
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:eberhard@gaugesgreen.com",
        linkTitle: "Email Ryan Eberhard",
        active: true,
    },
];

export const EXPERIENCE = [
    {
        id: "gauges_green",
        company: "Gauges Green",
        role: "Founder",
        startDate: "2026",
        endDate: "Present",
        description: "Helping Series A/B companies diagnose and fix stalled growth.",
    },
    {
        id: "swing",
        company: "Swing Education",
        role: "Chief Product & Technology Officer",
        startDate: "2023",
        endDate: "2024",
        description: "Shipped AI substitute-teacher matching that cut OpEx 50% in one year. Led company to sustainable unit economics.",
    },
    {
        id: "jobget",
        company: "JobGet",
        role: "President",
        startDate: "2021",
        endDate: "2023",
        description: "Stepped in as President. Cut burn from $2M/month to sustainable, grew revenue past $100M, and laid the foundation for acquisitions of two competitors (Snagajob, Seasoned).",
    },
    {
        id: "ziprecruiter",
        company: "ZipRecruiter",
        role: "Chief Product Officer",
        startDate: "2014",
        endDate: "2021",
        description: "Series A to NYSE IPO, $100M → $900M revenue. Built the marketplace that served 110M job seekers and 2.8M employers. Shipped AI matching that delivered quality candidates to 80% of employers within 24 hours. Invite to Apply drove 2.5x candidate flow; recipients were 3x more likely to get hired.",
    },
    {
        id: "murad",
        company: "Murad",
        role: "GM, Direct-to-Consumer",
        startDate: "2008",
        endDate: "2014",
        description: "Built Murad's ecommerce into their #1 revenue channel. 25% CAGR, positive ROAS every quarter, 25-person team. Laid the foundation for Unilever acquisition.",
    },
    {
        id: "cmu",
        company: "Carnegie Mellon University",
        role: "B.S. Logic & Computation, MBA",
        startDate: "1994",
        endDate: "2002",
        description: "Worked as a research systems programmer, later director, paying tuition as I went.",
    },
];

export const SERVICES = [
    {
        title: "Growth Model Audit",
        description: "Diagnose why product is shipping but growth isn't responding. Find the disconnect between build and GTM.",
    },
    {
        title: "Product & Eng Assessment",
        description: "Evaluate your product and engineering team. Identify talent gaps, process bottlenecks, and opportunities to double velocity.",
    },
    {
        title: "AI Transformation",
        description: "Implement AI and automation where it creates leverage. Cut OpEx while maintaining growth.",
    },
    {
        title: "US Market Entry",
        description: "Help LatAm companies enter the US market. Navigate go-to-market, positioning, and operational scaling.",
    },
];

export const PROJECTS = [
    {
        title: "Products",
        description: "Building in private. Request early access.",
        tags: [],
        link: "#contact",
        github: "",
        image: "",
    },
];

export const SKILLS = [
    { name: "Product Strategy", icon: "target" },
    { name: "Growth", icon: "trending-up" },
    { name: "AI/ML", icon: "cpu" },
    { name: "Marketplaces", icon: "users" },
    { name: "B2B SaaS", icon: "building" },
    { name: "Mobile", icon: "smartphone" },
];

export const ENGAGEMENT_MODEL = {
    duration: "4-12 weeks",
    commitment: "2-3 days/week",
    phases: [
        {
            id: "discovery",
            phase: "Discovery",
            duration: "Week 1",
            description: "Deep dive into metrics, team, and blockers. I talk to your team, review your data, and map the landscape.",
        },
        {
            id: "diagnosis",
            phase: "Diagnosis",
            duration: "Week 2",
            description: "Root cause analysis and opportunity mapping. You'll get a clear picture of what's broken and what to fix first.",
        },
        {
            id: "execution",
            phase: "Execution",
            duration: "Weeks 3-12",
            description: "Hands-on implementation with your team. I ship alongside your engineers, not from a deck.",
        },
    ],
};

export const IDEAL_CLIENTS = [
    {
        id: "series_a_c",
        title: "Technology Startups",
        description: "Post-PMF but growth has stalled or plateaued. You're shipping features but the needle isn't moving.",
    },
    {
        id: "latam_founders",
        title: "LatAm Founders Entering US",
        description: "Expanding to the US market and need GTM guidance from someone who knows both worlds.",
    },
    {
        id: "marketplaces",
        title: "Marketplaces & EdTech",
        description: "Two-sided platforms with supply/demand challenges. These are the models I know cold.",
    },
];

export const TRANSFORMATIONS = [
    {
        id: "growth",
        before: "Shipping features but metrics don't move",
        after: "Clear causality between releases and growth",
    },
    {
        id: "burn",
        before: "Burning cash with no path to profitability",
        after: "Sustainable unit economics and clear runway",
    },
    {
        id: "team",
        before: "Team gaps the founder can't diagnose",
        after: "Right people in right seats with clear accountability",
    },
];

export const NAV_LINKS = [
    { href: "/", key: "nav_home", label: "Home" },
    { href: "/services", key: "nav_services", label: "Services" },
    { href: "/experience", key: "nav_experience", label: "Experience" },
    { href: "/log", key: "nav_log", label: "Log" },
    { href: "/about", key: "nav_about", label: "About" },
    { href: "/metrics", key: "nav_metrics", label: "Metrics" },
];
