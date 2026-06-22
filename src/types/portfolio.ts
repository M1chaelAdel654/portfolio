export type Locale = "en" | "ar";

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ContactLink {
  label: LocalizedText;
  value: string;
  href: string;
}

export interface ExperienceItem {
  role: LocalizedText;
  company: string;
  period: string;
  points: LocalizedText[];
}

export interface EducationItem {
  degree: LocalizedText;
  institution: string;
  period: string;
  details: LocalizedText;
}

export interface CertificationItem {
  title: LocalizedText;
  issuer: string;
  date: string;
  note?: LocalizedText;
}

export interface ProjectItem {
  name: string;
  category: LocalizedText;
  description: LocalizedText;
  challenge: LocalizedText;
  impact: LocalizedText;
  technologies: string[];
  screenshots: string[];
  hasDetailedScreenshots: boolean;
  links: {
    github?: string;
    liveDemo?: string;
    playStore?: string;
    video?: string;
  };
}

export interface PortfolioData {
  fullName: string;
  title: LocalizedText;
  summary: LocalizedText;
  contacts: ContactLink[];
  skills: {
    title: LocalizedText;
    items: string[];
  }[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  education: EducationItem[];
}
