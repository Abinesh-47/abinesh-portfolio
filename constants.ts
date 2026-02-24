
import { Certification, Project, SkillCategory, TimelineItem } from './types';

export const SKILLS: SkillCategory[] = [
  {
    title: "Hard Skills",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 90 },
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 85 },
      { name: "Machine Learning", level: 90 },
      { name: "Generative AI", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "R Programming", level: 75 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90 },
      { name: "Teamwork", level: 95 },
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Time Management", level: 85 }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    title: "Microsoft Power BI (PL-300)",
    issuer: "Microsoft",
    date: "2024",
    link: "#",
    category: "Data Science"
  },
  {
    id: '2',
    title: "Tableau Desktop Specialist",
    issuer: "Tableau",
    date: "2023",
    link: "#",
    category: "Data Science"
  },
  {
    id: '3',
    title: "Machine Learning using Python",
    issuer: "Coursera",
    date: "2024",
    link: "#",
    category: "AI & ML"
  },
  {
    id: '4',
    title: "Advanced Generative AI",
    issuer: "Google Cloud",
    date: "2024",
    link: "#",
    category: "AI & ML"
  },
  {
    id: '5',
    title: "MongoDB Data Modeling",
    issuer: "MongoDB",
    date: "2023",
    link: "#",
    category: "Database"
  },
  {
    id: '6',
    title: "Oracle Java Foundations",
    issuer: "Oracle",
    date: "2023",
    link: "#",
    category: "Programming"
  },
  {
    id: '7',
    title: "HackerRank Certified Software Engineer",
    issuer: "HackerRank",
    date: "2024",
    link: "#",
    category: "Programming"
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    id: 'e1',
    title: "B.Tech – Artificial Intelligence & Data Science",
    subtitle: "K. Ramakrishnan College of Technology",
    date: "2023 – 2027",
    description: "Specializing in Intelligent Systems and Data Analytics.",
    type: 'education',
    score: "CGPA: 7.27"
  },
  {
    id: 'e2',
    title: "HSC (12th Standard)",
    subtitle: "Seventh Day Adventist Matriculation Higher Secondary School",
    date: "2022 – 2023",
    description: "Computer Science Stream.",
    type: 'education',
    score: "72%"
  },
  {
    id: 'e3',
    title: "SSLC (10th Standard)",
    subtitle: "Seventh Day Adventist Matriculation Higher Secondary School",
    date: "2020 – 2021",
    description: "Foundational Education.",
    type: 'education',
    score: "Pass"
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    id: 'ex1',
    title: "Web Development Intern",
    subtitle: "ITINFOSTAR",
    date: "June – July 2025",
    description: "Gained hands-on experience in modern web technologies and deployment workflows.",
    type: 'experience'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "Mental Health Care System (AI-Based)",
    description: "AI-driven user support system with intelligent response mechanism. UI designed in Figma.",
    tech: ["Python", "NLP", "Figma"],
    image: "https://picsum.photos/seed/mentalhealth/600/400",
    github: "#",
    modelType: "Transformer-based NLP",
    dataset: "Custom Mental Health Dataset",
    accuracy: "89% F1-Score"
  },
  {
    id: 'p2',
    title: "Crop Yield Prediction using ML",
    description: "Built ML predictive model analyzing soil & environmental data to improve agricultural yield forecasting.",
    tech: ["Scikit-Learn", "Python", "Pandas"],
    image: "https://picsum.photos/seed/crop/600/400",
    github: "#",
    modelType: "Random Forest Regressor",
    dataset: "FAO Agricultural Dataset",
    accuracy: "94.2% Accuracy"
  },
  {
    id: 'p3',
    title: "Hospital Management System",
    description: "Web-based management system with appointment booking & dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://picsum.photos/seed/hospital/600/400",
    github: "#",
    modelType: "Full Stack MERN",
    dataset: "Simulated Patient Records",
    accuracy: "99.9% Uptime"
  },
  {
    id: 'p4',
    title: "Auction Management System",
    description: "Java Swing-based application with admin & bidder panels.",
    tech: ["Java", "Swing", "MySQL"],
    image: "https://picsum.photos/seed/auction/600/400",
    github: "#",
    modelType: "MVC Architecture",
    dataset: "Relational Database",
    accuracy: "Real-time Sync"
  },
  {
    id: 'p5',
    title: "Survey Data Analysis using R",
    description: "Data visualization, charts & histograms for comprehensive survey analysis.",
    tech: ["R", "ggplot2", "Tidyverse"],
    image: "https://picsum.photos/seed/survey/600/400",
    github: "#",
    modelType: "Statistical Analysis",
    dataset: "Social Media Survey",
    accuracy: "95% Confidence Interval"
  }
];
