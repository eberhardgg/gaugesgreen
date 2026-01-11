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
        description: "Fractional product and growth leadership for scaling startups. Launched January 2026.",
    },
    {
        id: "swing",
        company: "Swing Education",
        role: "Chief Product & Technology Officer",
        startDate: "2023",
        endDate: "2024",
        description: "Drove end-to-end AI transformation that cut OpEx and COGS by 50%+ YoY while maintaining growth and product velocity.",
    },
    {
        id: "jobget",
        company: "JobGet",
        role: "President",
        startDate: "2021",
        endDate: "2023",
        description: "Grew revenue to over $100M/year while cutting burn from $2M/month, enabling acquisitions of Snagajob and Seasoned.",
    },
    {
        id: "ziprecruiter",
        company: "ZipRecruiter",
        role: "Chief Product Officer",
        startDate: "2014",
        endDate: "2021",
        description: "Series A to NYSE IPO, $100M to $900M in revenue. Led 92-person product org that built the #1-rated job seeker apps for 8 years running, cut time-to-hire 59% (39→16 days), and pioneered ML matching where 80% of employers get a quality candidate within 24 hours.",
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
