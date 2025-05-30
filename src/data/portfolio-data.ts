
import type { LucideIcon } from 'lucide-react';
import { Code, Database, Wind, Cpu, Palette, GitBranch, GraduationCap, Briefcase, BookOpen, Award, Star, TrendingUp, Bot } from 'lucide-react';

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
  conference: string;
  year: string;
  link: string;
  icon?: LucideIcon; // e.g., for IEEE, Springer
  publisherIcon?: LucideIcon;
}

export const publicationsData: Publication[] = [
  {
    id: "pub1",
    title: "A Novel Approach to Secure Data Transmission in IoT Networks",
    authors: "Saurav K. Yadav, et al.",
    conference: "IEEE International Conference on Communications (ICC)",
    year: "2024",
    link: "#", // Add actual link
    publisherIcon: BookOpen, // Generic icon for IEEE
  },
  {
    id: "pub2",
    title: "Machine Learning for Predictive Maintenance in Industrial Systems",
    authors: "Saurav K. Yadav, et al.",
    conference: "Springer Journal of Intelligent Manufacturing",
    year: "2023",
    link: "#", // Add actual link
    publisherIcon: BookOpen, // Generic icon for Springer
  },
  // Add more publications
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
    id: "scholarship-masters",
    title: "Full Scholarship (Masters)",
    description: "Awarded a full scholarship for Master's degree at IIT Dhanbad.",
    icon: GraduationCap,
    year: "2022-2024",
  },
  {
    id: "scholarship-bachelors",
    title: "Full Scholarship (Bachelors)",
    description: "Received a full scholarship for Bachelor's degree.",
    icon: GraduationCap,
    year: "2018-2022",
  },
  {
    id: "enigma-lead",
    title: "ENIGMA Club Lead",
    description: "Led the competitive programming wing of ENIGMA, the coding club of IIT (ISM) Dhanbad.",
    icon: Star,
    year: "2021-2022",
  },
  {
    id: "enigma-coordinator",
    title: "ENIGMA Club Coordinator",
    description: "Coordinated events and activities for ENIGMA club.",
    icon: TrendingUp,
    year: "2020-2021",
  },
   {
    id: "hackathon-winner",
    title: "Hackathon Winner",
    description: "Secured 1st place in university-level hackathon.",
    icon: Award,
    year: "2021",
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

