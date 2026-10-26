
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
      { name: "Angular" },
      { name: "Bootstrap" },
    ],
  },
  {
    name: "Backend & Database",
    icon: Database,
    skills: [
      { name: "Node Js" },
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
    id: "trajectory-prediction",
    name: "Trajectory Prediction of Autonomous Vehicle",
    techStack: ["Python", "Deep Learning", "PyTorch", "LSTM"],
    description: "A deep learning model that predicts the future trajectory of target vehicles in autonomous driving scenarios, enabling safer path planning and collision avoidance.",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "autonomous vehicle road",
    githubLink: "https://github.com/Saurav9895/Trajectory-Prediction-with-the-combination-of-grid-and-graph",
  },
  {
    id: "coding-platform",
    name: "Coding Platform",
    techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
    description: "A full-stack coding platform similar to LeetCode, featuring problem solving, code submissions, and user profiles.",
    imageUrl: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "code editor",
    liveDemoLink: "https://binary-code.vercel.app/",
  },
  {
    id: "judiciary-system",
    name: "Judiciary Management System",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    description: "A web application for managing judiciary cases, records, and schedules for legal professionals.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661342406765-43d30862060b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "legal system",
    githubLink: "https://github.com/Saurav9895/Judiaciary-Management-System",
  },
  {
    id: "service-finder",
    name: "Service Finder",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    description: "A platform connecting users with local service providers, featuring search, booking, and reviews.",
    imageUrl: "https://as-service.vercel.app/_next/image?url=%2Fimage.png&w=640&q=75",
    imageHint: "map services",
    liveDemoLink: "https://as-service.vercel.app/",
  },
  {
    id: "jarvis-assistant",
    name: "Jarvis Desktop Assistant",
    techStack: ["Python", "AI/ML Libraries"],
    description: "A voice-controlled desktop assistant inspired by Jarvis, capable of performing various tasks.",
    imageUrl: "https://images.unsplash.com/photo-1624948384140-e48e47087fad?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "ai assistant",
    githubLink: "https://github.com/Saurav9895/Jarvis-AI-Desktop-Personal-Voice-Assista",
  },
  {
    id: "rc-car",
    name: "Arduino RC Bluetooth Car",
    techStack: ["Arduino", "C++", "Bluetooth"],
    description: "A remote-controlled car built using Arduino, controlled via a Bluetooth-enabled mobile application.",
    imageUrl: "https://images.unsplash.com/photo-1727622738037-65923e2319d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "rc car",
    githubLink: "https://github.com/Saurav9895/aurdino",
  },
];

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  icon?: LucideIcon;
}

export const experienceData: Experience[] = [
  {
    id: "larsen-toubro",
    role: "Post Graduate Engineer Trainee",
    company: "Larsen & Toubro Limited",
    location: "Chennai, India",
    period: "Jul 2026 – Present",
    description: [
      "Developed and maintained application features based on approved business requirements and technical specifications.",
      "Developed and optimized SQL queries and stored procedures to support application functionality and data validation.",
      "Implemented application logic using C#, .NET, and Angular to deliver reliable and maintainable solutions.",
      "Integrated APIs and application components to ensure seamless data exchange and system functionality.",
    ],
    icon: TrendingUp,
  },
  {
    id: "smartly-build",
    role: "Frontend Developer",
    company: "Smartly Build",
    location: "New York, USA (Remote)",
    period: "Aug 2025 – Jun 2026",
    description: [
      "Developed dynamic and responsive user interfaces using Angular, ensuring smooth performance across devices.",
      "Integrated RESTful APIs to enable real-time data rendering and seamless functionality.",
      "Built reusable and modular components to enhance scalability and maintainability.",
      "Worked on key features like Kanban boards, opportunity pipelines, and workflow modules.",
      "Collaborated with backend teams for efficient data handling and integration.",
      "Identified and fixed bugs while optimizing overall application performance and user experience.",
    ],
    icon: Palette,
  },
  {
    id: "inspire-group-nepal",
    role: "Developer",
    company: "Inspire Group of Nepal Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Jan 2024 – Jul 2024",
    description: [
      "Developed and maintained CRM-based websites and updated website content and functionality according to client requirements.",
      "Developed a sales ledger management system to maintain daily customer purchase records, track sales transactions and payments, and manage customer transaction history.",
      "Developed a restaurant management system to support day-to-day restaurant operations and management workflows.",
    ],
    icon: Code,
  },
  {
    id: "digital-shikhar",
    role: "Web Developer",
    company: "Digital Shikhar Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Jan 2022 – Dec 2023",
    description: [
      "Developed and optimized dynamic websites tailored to client and business needs, enhancing user experience and functionality.",
      "Spearheaded the development of a fully functional website for Upakart Logistics, ensuring alignment with business objectives and client requirements.",
      "Assisted in the successful integration of products into the Upakart eCommerce platform, ensuring seamless functionality and user experience.",
      "Developed an e-commerce website for a toy shop, enabling customers to browse products through a user-friendly interface.",
    ],
    icon: Briefcase,
  },
];

export interface FreelanceProject {
  id: string;
  name: string;
  client: string;
  techStack: string[];
  description: string;
  icon?: LucideIcon;
}

export const freelanceData: FreelanceProject[] = [
  {
    id: "gifthopia",
    name: "Gifthopia",
    client: "Kalika Enterprises",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    description: "A full-stack e-commerce website built for a gift shop, featuring product listings, cart management, order tracking, and an admin dashboard.",
    icon: TrendingUp,
  },
  {
    id: "kalika-sales-ledger",
    name: "Sales Ledger System",
    client: "Kalika Enterprises",
    techStack: ["React", "Node.js", "MySQL", "Express"],
    description: "A comprehensive full-stack sales ledger application for tracking transactions, invoices, and financial records for Kalika Enterprises.",
    icon: Database,
  },
  {
    id: "zeta-restaurant",
    name: "Zeta Restaurant Management System",
    client: "Zeta Restaurant",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    description: "A complete restaurant management system handling table reservations, menu management, order processing, and staff coordination for seamless operations.",
    icon: Users,
  },
];

export interface Publication {
  id: string;
  title: string;
  conference: string; // Can be journal or conference name
  year: string;
  link: string;
  publisherIcon?: LucideIcon;
}

export const publicationsData: Publication[] = [
  {
    id: "pub1",
    title: "A Brief Comparison on Machine Learning Algorithms Based on Various Applications: A Comprehensive Survey.",
    conference: "IEEE",
    year: "2021",
    link: "https://ieeexplore.ieee.org/document/9683524",
    publisherIcon: BookOpen,
  },
  {
    id: "pub2",
    title: "Chatbot Personalization: A Study of User-Centric Natural Language Processing in Python.",
    conference: "Springer",
    year: "2024",
    link: "#", 
    publisherIcon: BookOpen,
  },
  {
    id: "pub3",
    title: "Resume shortlisting using NLP.",
    conference: "IEEE",
    year: "2024",
    link: "https://ieeexplore.ieee.org/document/10502580",
    publisherIcon: BookOpen,
  },
  {
    id: "pub4",
    title: "Binary's Code- A coding platform",
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
  },
  {
    id: "scholarship-masters",
    title: "Full Scholarship (Masters)",
    description: "Awarded a full scholarship to pursue Master’s degree.",
    icon: GraduationCap,
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
  profileImageUrl: "/profile.png",
  profileImageHint: "profile portrait",
  // resumeUrl: "#", // Removed as it's no longer used
};

projectsData.forEach(project => {
  if (project.imageUrl && project.imageUrl.includes("images.unsplash.com") && !project.imageUrl.startsWith("https://images.unsplash.com")) {
    const unsplashPart = project.imageUrl.substring(project.imageUrl.indexOf("https://images.unsplash.com"));
    project.imageUrl = unsplashPart;
  }
});

const codingPlatformProject = projectsData.find(p => p.id === "coding-platform");
if (codingPlatformProject && codingPlatformProject.imageUrl && codingPlatformProject.imageUrl.includes("images.unsplash.com")) {
    if(codingPlatformProject.imageUrl !== "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D") {
        codingPlatformProject.imageUrl = "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    }
}
