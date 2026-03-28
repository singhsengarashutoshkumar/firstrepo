export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: 'Completed' | 'In Progress';
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  tagline: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  skills: SkillCategory[];
  projects: Project[];
  certifications: Certification[];
  blogPosts: BlogPost[];
}
