export type Site = {
    website: string;
    author: string;
    desc: string;
    title: string;
    ogImage?: string;
    lightAndDarkMode: boolean;
    postPerPage: number;
    scheduledPostMargin: number;
};

export type SocialObjects = {
    name: SocialMedia;
    href: string;
    active: boolean;
    linkTitle: string;
}[];

export type SocialMedia =
    | "Github"
    | "Facebook"
    | "Instagram"
    | "LinkedIn"
    | "Mail"
    | "Twitter"
    | "Twitch"
    | "YouTube"
    | "WhatsApp"
    | "Snapchat"
    | "Pinterest"
    | "TikTok"
    | "CodePen"
    | "Discord"
    | "GitLab"
    | "Reddit"
    | "Skype"
    | "Steam"
    | "Telegram"
    | "Mastodon";

export type Experience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
}[];

export type Project = {
    title: string;
    description: string;
    tags: string[];
    link: string;
    github?: string;
    image?: string;
}[];

export type Skill = {
    name: string;
    icon: string; // Lucide icon name or custom SVG
    level?: string; // Beginner, Intermediate, Expert
}[];
