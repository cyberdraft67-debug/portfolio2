import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  links?: {
    demo?: string;
    github?: string;
  };
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export interface Experience {
  role: string;
  company: string;
  period?: string;
  description: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}