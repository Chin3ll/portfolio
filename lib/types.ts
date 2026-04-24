export type SocialLink = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  impact: string;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  siteUrl: string;
  ogImage: string;
};

export type PortfolioConfig = {
  person: {
    fullName: string;
    title: string;
    location: string;
    email: string;
    shortBio: string;
    longBio: string;
    avatarUrl: string;
    resumeUrl?: string;
  };
  socials: SocialLink[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  seo: SeoConfig;
};
