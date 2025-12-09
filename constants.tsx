import { 
  Code, 
  Cpu, 
  Globe, 
  Terminal, 
  Wrench, 
  Zap, 
  Layout, 
  Server, 
  Bot,
  Brain,
  Smartphone
} from 'lucide-react';
import { Project, SkillCategory, Experience } from './types';

export const HERO_CONTENT = {
  greeting: "Hi, I'm Muhammad Umar",
  title: "Student Developer & Robotics Enthusiast",
  description: "I'm an O Level 2 student at The Lab School passionate about building real-world applications and intelligent robots. From line-following bots to EdTech platforms, I turn ideas into reality.",
};

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming & Web",
    icon: Globe,
    color: "text-blue-400",
    skills: ["Python", "HTML5", "CSS3", "JavaScript", "React Basics"]
  },
  {
    title: "Robotics & Hardware",
    icon: Bot,
    color: "text-emerald-400",
    skills: ["Line Following Robots", "Circuit Assembly", "Sensor Logic", "Electronics Troubleshooting", "Motor Control"]
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    color: "text-purple-400",
    skills: ["GitHub", "Vercel", "AI Studio", "VS Code", "Soldering"]
  },
  {
    title: "Current Learning",
    icon: Brain,
    color: "text-pink-400",
    skills: ["Advanced Python", "UI/UX Layouts", "Product Planning", "Complex Robotics"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'studiesmate',
    title: 'StudiesMate',
    role: 'CTO (Student Role)',
    description: 'An educational tech project designed to help students learn better. As the technical lead, I help decide technologies, feature roadmaps, and user experience strategies. (Launch: Summer)',
    tags: ['EdTech', 'Leadership', 'Product Design', 'Planning'],
    featured: true
  },
  {
    id: 'safaayico',
    title: 'SafaayiCO',
    role: 'CEO & Founder',
    description: 'My first deployed app project. I handled the code organization, GitHub management, and deployment via Vercel, utilizing AI Studio to accelerate development.',
    tags: ['Web App', 'HTML/CSS', 'Vercel', 'GitHub', 'AI Studio'],
    featured: true,
    links: {
      demo: 'https://safaayi-co.vercel.app/'
    }
  },
  {
    id: 'robotics',
    title: 'Autonomous Line Follower',
    role: 'Robotics Engineer',
    description: 'Designed and assembled a robot capable of autonomously following complex paths using IR sensors and logic gates. Involved troubleshooting electronics and motor calibration.',
    tags: ['Robotics', 'Electronics', 'Sensors', 'Hardware'],
    featured: true
  }
];

export const CONTACT_INFO = {
  phone: "0333-2820021",
  school: "The Lab School",
  location: "O Level 2 Student",
  email: "cyberdraft67@gmail.com"
};