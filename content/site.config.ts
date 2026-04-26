import { PortfolioConfig } from "@/lib/types";

export const siteConfig: PortfolioConfig = {
  person: {
    fullName: "Oluwatoyin Chinell Olotu",
    title: "Business Analyst",
    location: "Liverpool, United Kingdom",
    email: "Ochinell@outlook.com",
    shortBio:
      "Published author. CS graduate. Litigation Caseworker. Business Analyst. Where creativity meets technology and legal excellence.",
    longBio:
      "A First Class Computer Science graduate with a dual professional profile spanning legal operations and business analysis. As a Litigation Caseworker, I manage complex legal cases under strict regulatory frameworks, while concurrently applying analytical and systems-thinking skills as a volunteer Business Analyst. I bring a rare combination of technical rigour, process-driven thinking, and practical exposure to high-stakes environments.",
    avatarUrl: "/avatar-placeholder.png",
    resumeUrl: "/resume.pdf"
  },
  socials: [
    { label: "GitHub", href: "https://github.com/chin3ll" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ochinell-olotu-43226a219" },
    { label: "X", href: "https://x.com/yourhandle" }
  ],
  skills: [
    {
      title: "Business Analysis",
      skills: [
        "Requirements Gathering",
        "Stakeholder Management",
        "Business Process Mapping",
        "Gap Analysis"
      ]
    },
    {
      title: "Data and Reporting",
      skills: [
        "Data Analysis",
        "Excel (Advanced)",
        "Power BI",
        "KPI and Dashboard Design"
      ]
    },
    {
      title: "Delivery and Documentation",
      skills: [
        "User Stories and Acceptance Criteria",
        "Agile (Scrum/Kanban)",
        "UAT Planning and Support",
        "BRD and Functional Specifications"
      ]
    }
  ],
  experience: [
    {
      company: "UK Home Office",
      role: "Litigation Caseworker",
      location: "Liverpool, United Kingdom",
      startDate: "2026",
      endDate: "Present",
      achievements: [
        "Managed end-to-end judicial review litigation across the Upper Tribunal and High Court, including pre-action protocol responses and defence coordination with Government Legal Department lawyers.",
        "Assessed and triaged legal challenges against immigration legislation and policy, escalating systemic issues and collaborating with operational teams to remediate original decision-making errors.",
        "Coordinated multi-stakeholder case strategy with counsel, policy teams and operational colleagues to meet deadlines and improve settlement and cost outcomes.",
        "Maintained accurate auditable records across JIRA, ATLAS and SharePoint while handling a high-volume litigation caseload."
      ]
    },
    {
      company: "Digitus Technologies (Volunteer)",
      role: "IT Business Analyst",
      location: "Manchester, United Kingdom",
      startDate: "Nov 2025",
      endDate: "Present",
      achievements: [
        "Led business analysis training programmes for junior analysts and cross-functional teams on requirements gathering, process mapping and stakeholder engagement.",
        "Mentored business analysts across project lifecycles, translating business requirements into functional specifications and improving delivery quality.",
        "Established standardised BA frameworks, templates and documentation practices to improve consistency and continuous improvement."
      ]
    },
    {
      company: "Crown Prosecution Service",
      role: "Casework Assistant",
      location: "Liverpool, United Kingdom",
      startDate: "Jun 2025",
      endDate: "Nov 2026",
      achievements: [
        "Prepared and managed criminal case files for magistrates' and Crown Court hearings, ensuring court-ready documentation standards.",
        "Acted as first point of contact for criminal justice partners, victims and witnesses, providing high-quality communication and case support.",
        "Maintained accurate and retrievable case records in case management systems under tight court deadlines."
      ]
    },
    {
      company: "I-Lotus Homes",
      role: "Data Analyst Intern",
      location: "Lagos, Nigeria",
      startDate: "Apr 2024",
      endDate: "Oct 2024",
      achievements: [
        "Designed Power BI dashboards for property valuations, occupancy rates and rental yields to support executive portfolio decisions.",
        "Executed ETL pipelines to consolidate listings, transactions and market data into a central repository with consistent data quality.",
        "Supported ELT workflows in cloud data warehouse environments to produce analysis-ready datasets for sales, lettings and asset management reporting.",
        "Used SQL and exploratory analysis to identify pricing patterns, demand fluctuations and portfolio anomalies for technical and non-technical stakeholders."
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
    },
    {
      slug: "feedback-pro",
      title: "Feedback Pro",
      summary:
        "A Django-based evaluation platform where students submit code assignments and receive automated feedback on syntax, indentation, and commenting quality.",
      impact:
        "Improved consistency and speed of assignment evaluation by combining tutor-configurable criteria with role-based workflows for students, tutors, and admins.",
      techStack: ["Python", "Django", "SQLite", "HTML", "CSS"],
      repoUrl: "https://github.com/Chin3ll/feedback-pro"
    }
  ],
  education: [
    {
      institution: "Liverpool John Moores University",
      degree: "BSc (Hons) Computer Science - First Class",
      startDate: "Sept 2022",
      endDate: "Apr 2025"
    },
    {
      institution: "Liverpool John Moores University (ISC)",
      degree: "Foundation Certificate - Distinction",
      startDate: "Jan 2022",
      endDate: "Jul 2022"
    },
    {
      institution: "University of Benin",
      degree: "Diploma, Computer Engineering",
      startDate: "Sept 2009",
      endDate: "Aug 2011"
    }
  ],
  seo: {
    title: "Oluwatoyin Chinell Olotu | Business Analyst",
    description:
      "Software engineer portfolio showcasing projects, experience, and technical expertise.",
    siteUrl: "https://yourdomain.com",
    ogImage: "/og-image.png"
  }
};
