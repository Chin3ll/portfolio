import { PortfolioConfig } from "@/lib/types";

export const siteConfig: PortfolioConfig = {
  person: {
    fullName: "Oluwatoyin Chinell Olotu",
    title: "Computer Science Graduate",
    location: "Liverpool, United Kingdom",
    email: "Ochinell@outlook.com",
    shortBio:
      "I am a Computer Science graduate volunteering as a Business Analyst while also working as a Litigation Caseworker.",
    longBio:
      "I am a Computer Science graduate with a multidisciplinary background across technology, legal operations, and business analysis. I currently volunteer as a Business Analyst and also work as a Litigation Caseworker, bringing structured problem-solving, stakeholder communication, and process improvement to every project.",
    avatarUrl: "/avatar-placeholder.png",
    resumeUrl: "/resume.pdf"
  },
  socials: [
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "X", href: "https://x.com/yourhandle" }
  ],
  skills: [
    {
      title: "Frontend",
      skills: ["TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Engineering Practices",
      skills: ["Testing", "CI/CD", "System Design", "Code Reviews"]
    }
  ],
  experience: [
    {
      company: "Example Corp",
      role: "Software Engineer",
      location: "Remote",
      startDate: "2023-01",
      endDate: "Present",
      achievements: [
        "Led feature delivery for a customer-facing dashboard used by 10,000+ users.",
        "Reduced API response latency by 35% through caching and query optimization.",
        "Introduced CI quality checks that lowered regressions in production."
      ]
    }
  ],
  projects: [
    {
      slug: "payments-platform",
      title: "Payments Platform",
      summary:
        "A modular payment orchestration platform for routing transactions across multiple providers.",
      impact: "Improved successful transaction rates by 14%.",
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      repoUrl: "https://github.com/yourhandle/payments-platform",
      liveUrl: "https://example-payments.vercel.app"
    },
    {
      slug: "hiring-analytics",
      title: "Hiring Analytics",
      summary:
        "An analytics suite that helps recruiting teams visualize funnel conversion and time-to-hire.",
      impact: "Cut weekly reporting time from 4 hours to 20 minutes.",
      techStack: ["React", "TypeScript", "Python", "BigQuery"],
      repoUrl: "https://github.com/yourhandle/hiring-analytics"
    }
  ],
  education: [
    {
      institution: "Your University",
      degree: "B.Sc. Computer Science",
      startDate: "2018",
      endDate: "2022"
    }
  ],
  seo: {
    title: "Your Name | Software Engineer",
    description:
      "Software engineer portfolio showcasing projects, experience, and technical expertise.",
    siteUrl: "https://yourdomain.com",
    ogImage: "/og-image.png"
  }
};
