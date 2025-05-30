
import type { LucideIcon } from 'lucide-react';
import { Code, Database, Wind, Cpu, Palette, GitBranch, GraduationCap, Briefcase, BookOpen, Award, Star, TrendingUp, Bot, Users } from 'lucide-react'; // Added Users just in case, though Star is preferred for Enigma

export interface Skill {
  name: string;
  icon?: LucideIcon;
  level?: number; // Optional: for skill bars, 0-100
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java" },
      { name: "C" },
      { name: "Python" },
    ],
  },
  {
    name: "Frontend",
    icon: Palette,
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Bootstrap" },
    ],
  },
  {
    name: "Backend & Database",
    icon: Database,
    skills: [
      { name: "PHP" },
      { name: "SQL" },
    ],
  },
  {
    name: "Tools",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub" },
      { name: "Linux" },
      { name: "WordPress" },
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  techStack: string[];
  description: string;
  imageUrl?: string;
  imageHint?: string;
  githubLink?: string;
  liveDemoLink?: string;
}

export const projectsData: Project[] = [
  {
    id: "coding-platform",
    name: "Coding Platform",
    techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    description: "A full-stack coding platform similar to LeetCode, featuring problem solving, code submissions, and user profiles.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "code editor",
    githubLink: "https://github.com/sauravkumaryadav309/coding-platform",
  },
  {
    id: "judiciary-system",
    name: "Judiciary Management System",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    description: "A web application for managing judiciary cases, records, and schedules for legal professionals.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "legal system",
    githubLink: "https://github.com/sauravkumaryadav309/judiciary-management",
  },
  {
    id: "service-finder",
    name: "Service Finder",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: "A platform connecting users with local service providers, featuring search, booking, and reviews.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "map services",
    liveDemoLink: "#", // Add actual link if available
  },
  {
    id: "jarvis-assistant",
    name: "Jarvis Desktop Assistant",
    techStack: ["Python", "AI/ML Libraries"],
    description: "A voice-controlled desktop assistant inspired by Jarvis, capable of performing various tasks.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "ai assistant",
    githubLink: "https://github.com/sauravkumaryadav309/jarvis-assistant",
  },
  {
    id: "rc-car",
    name: "Arduino RC Bluetooth Car",
    techStack: ["Arduino", "C++", "Bluetooth"],
    description: "A remote-controlled car built using Arduino, controlled via a Bluetooth-enabled mobile application.",
    imageUrl: "https://placehold.co/600x400.png",
    imageHint: "rc car",
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  icon?: LucideIcon;
}

export const experienceData: Experience[] = [
  {
    id: "inspire-group-nepal",
    role: "Web Developer",
    company: "Inspire Group Nepal Pvt. Ltd.",
    period: "Feb 2024 – Oct 2024",
    description: [
      "Developed and maintained web applications using modern frontend and backend technologies.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions.",
      "Participated in code reviews and contributed to improving code quality and development processes.",
    ],
    icon: Code,
  },
  {
    id: "digital-shikhar",
    role: "Software Development Engineer (SDE Intern)",
    company: "Digital Shikhar Pvt. Ltd.",
    period: "May 2023 – July 2023",
    description: [
      "Contributed to the development of Uparkart, an e-commerce platform.",
      "Worked on frontend and backend features using React and Node.js.",
      "Collaborated with a team of developers in an Agile environment.",
    ],
    icon: Briefcase,
  },
];

export interface Publication {
  id: string;
  title: string;
  authors: string;
  conference: string; // Can be journal or conference name
  year: string;
  link: string;
  publisherIcon?: LucideIcon;
}

export const publicationsData: Publication[] = [
  {
    id: "pub1",
    title: "A Brief Comparison on Machine Learning Algorithms Based on Various Applications: A Comprehensive Survey.",
    authors: "Saurav K. Yadav, et al.",
    conference: "IEEE",
    year: "2021",
    link: "#", 
    publisherIcon: BookOpen,
  },
  {
    id: "pub2",
    title: "Chatbot Personalization: A Study of User-Centric Natural Language Processing in Python.",
    authors: "Saurav K. Yadav, et al.",
    conference: "Springer",
    year: "2024",
    link: "#", 
    publisherIcon: BookOpen,
  },
  {
    id: "pub3",
    title: "Resume shortlisting using NLP.",
    authors: "Saurav K. Yadav, et al.",
    conference: "IEEE",
    year: "2024",
    link: "#",
    publisherIcon: BookOpen,
  },
  {
    id: "pub4",
    title: "Binary's Code- A coding platform",
    authors: "Saurav K. Yadav, et al.",
    conference: "International Journal of Research Publication and Reviews",
    year: "2025",
    link: "https://ijrpr.com/uploads/V5ISSUE11/IJRPR35459.pdf",
    publisherIcon: BookOpen,
  },
];


export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  year?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "placement-coordinator",
    title: "Placement Coordinator | CSE",
    description: "Served as Placement Coordinator for the CSE department.",
    icon: Briefcase,
    year: "Nov 2022 - July 2024",
  },
  {
    id: "enigma-head-ops",
    title: "Head of Operations | ENIGMA Club",
    description: "Led the operational team for ENIGMA, the official coding club.",
    icon: Star, 
    year: "Jan 2023 - Dec 2023",
  },
  {
    id: "scholarship-bachelors",
    title: "Study in India Scholarship (Bachelors)",
    description: "Awarded a full scholarship to pursue Bachelor’s degree through the Study in India program.",
    icon: GraduationCap,
    // Year can be added if known, e.g., "2018-2022"
  },
  {
    id: "scholarship-masters",
    title: "Full Scholarship (Masters)",
    description: "Awarded a full scholarship to pursue Master’s degree.",
    icon: GraduationCap,
    // Year can be added if known, e.g., "2022-2024"
  },
];

export const heroSkillsSequence = [
  "React Developer",
  2000,
  "Next.js Enthusiast",
  2000,
  "Software Engineer",
  2000,
  "Full-Stack Developer",
  2000,
  "Open Source Contributor",
  2000,
  "Problem Solver",
  2000,
];

export const aboutMeData = {
  introduction: "Hi, I'm Saurav Kumar Yadav, a passionate Software Engineer and Web Developer with over 2 years of experience in crafting robust and scalable digital solutions. I specialize in frontend technologies like React and Next.js, but I'm comfortable across the full stack.",
  education: "I hold a Master's degree from IIT (ISM) Dhanbad, one of India's premier engineering institutes. My academic journey has been supported by full scholarships for both my Bachelor's and Master's programs, a testament to my dedication and performance.",
  passion: "My core passion lies in leveraging web technologies to build innovative products that solve real-world problems. I'm a firm believer in continuous learning and always eager to explore new tools and frameworks.",
  profileImageUrl: "https://placehold.co/400x400.png",
  profileImageHint: "profile portrait",
  resumeUrl: "#", // Replace with actual resume link
};
