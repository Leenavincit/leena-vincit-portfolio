import {
  SiPython, SiPhp, SiJavascript, SiMysql, SiHtml5, SiCss,
  SiGit, SiGithub, SiXampp,
} from "react-icons/si";
import { TbSql, TbBrandVscode } from "react-icons/tb";
import { FaChartBar, FaFileExcel, FaTachometerAlt, FaBriefcase, FaChartLine } from "react-icons/fa";
import type { IconType } from "react-icons";

const SiCss3 = SiCss;
const SiTableau = FaChartLine;
const SiVisualstudiocode = TbBrandVscode;
const PiMicrosoftExcelLogoFill = FaFileExcel;
const PiChartBar = FaChartBar;
const PiGauge = FaTachometerAlt;
const PiBriefcase = FaBriefcase;

export type SkillGroup = { title: string; items: { name: string; icon: IconType; level: number }[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    items: [
      { name: "Python", icon: SiPython, level: 88 },
      { name: "PHP", icon: SiPhp, level: 80 },
      { name: "JavaScript", icon: SiJavascript, level: 78 },
      { name: "SQL", icon: TbSql, level: 85 },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, level: 90 },
      { name: "CSS3", icon: SiCss3, level: 85 },
    ],
  },
  {
    title: "Database",
    items: [{ name: "MySQL", icon: SiMysql, level: 82 }],
  },
  {
    title: "Data Analytics",
    items: [
      { name: "Tableau", icon: SiTableau, level: 85 },
      { name: "Microsoft Excel", icon: PiMicrosoftExcelLogoFill, level: 80 },
      { name: "SQL", icon: TbSql, level: 85 },
      { name: "Data Visualization", icon: PiChartBar, level: 82 },
      { name: "Dashboard Development", icon: PiGauge, level: 80 },
      { name: "Business Intelligence", icon: PiBriefcase, level: 78 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, level: 82 },
      { name: "GitHub", icon: SiGithub, level: 85 },
      { name: "Visual Studio Code", icon: SiVisualstudiocode, level: 88 },
      { name: "XAMPP", icon: SiXampp, level: 78 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  category: "Web" | "Data";
  gradient: string;
};

export const projects: Project[] = [
  {
    title: "College Placement Management System",
    description:
      "Full-stack web application to automate campus recruitment. Includes Admin, Student and Company modules with secure authentication, job postings, application tracking, resume uploads, interview scheduling and placement management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Leenavincit/College-Placement-Management",
    category: "Web",
    gradient: "from-amber-400/30 via-orange-500/20 to-purple-500/30",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Interactive Tableau dashboard analyzing sales performance, profit trends, regional analysis, category insights and business KPIs through rich interactive visualizations.",
    tech: ["Tableau", "SQL", "Microsoft Excel"],
    github: "https://github.com/Leenavincit/Sales-Performance-Dashboard",
    category: "Data",
    gradient: "from-purple-500/30 via-fuchsia-500/20 to-amber-400/30",
  },
];

export const experience = [
  {
    role: "Python Programming Intern",
    company: "CodTech IT Solutions Pvt. Ltd.",
    period: "June 2025 – July 2025",
    points: [
      "Developed Python programs across varied problem domains",
      "Applied Object-Oriented Programming concepts in practice",
      "Worked on practical, hands-on coding assignments",
      "Improved debugging and analytical problem-solving skills",
    ],
  },
];

export const education = [
  { degree: "M.Sc. Computer Science", school: "St. Joseph's University", period: "2024 – 2026" },
  { degree: "B.Sc. Computer Science", school: "Apollo Arts and Science College", period: "2020 – 2023" },
];

export type Certification = {
  title: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  description: string;
  badges: string[];
  buttonLabel: string;
  category?: string;
  publication?: string;
  institution?: string;
  certificateUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: "Python Programming Certificate",
    issuer: "Besant Technologies, Chennai",
    issueDate: "21 December 2023",
    credentialId: "BDZ-85103",
    description:
      "Successfully completed comprehensive Python Programming training covering Python fundamentals, Object-Oriented Programming (OOP), problem solving, and practical programming concepts.",
    badges: ["Verified", "Besant Technologies"],
    buttonLabel: "View Certificate",
  },
  {
    title: "SQL Training Certificate",
    issuer: "Besant Technologies, Chennai",
    issueDate: "21 December 2023",
    credentialId: "BDZ-85103",
    description:
      "Successfully completed SQL Training covering relational databases, SQL queries, joins, subqueries, normalization, and database optimization.",
    badges: ["Verified", "Besant Technologies"],
    buttonLabel: "View Certificate",
  },
  {
    title: "Python Programming Internship Certificate",
    issuer: "CodTech IT Solutions Pvt. Ltd.",
    description:
      "Completed a Python Programming Internship focusing on Python development, Object-Oriented Programming, debugging, and practical software development assignments.",
    badges: ["Internship", "Completion", "CodTech"],
    buttonLabel: "View Certificate",
  },
  {
    title: "Artificial Intelligence and Machine Learning in Computer Science",
    issuer: "Beyond Line Publisher",
    category: "Book Chapter Publication",
    institution: "St. Joseph's College (Arts & Science), Chennai",
    publication:
      "Emerging Innovations and Applications in Computer Science, Statistics and Data Science",
    description:
      "Published a research book chapter on Artificial Intelligence and Machine Learning in Computer Science as part of an academic publication.",
    badges: ["Publication", "Published Author", "Beyond Line Publisher"],
    buttonLabel: "View Publication",
  },
];

export const achievements = [
  "Published a Book Chapter titled \"Artificial Intelligence and Machine Learning in Computer Science.\"",
  "Successfully developed a College Placement Management System.",
  "Developed an interactive Sales Performance Dashboard using Tableau.",
];

export const openRoles = [
  "Software Developer",
  "Python Developer",
  "PHP Developer",
  "Data Analyst",
  "Business Analyst",
  "Entry-Level Software Engineer",
];

export const contact = {
  email: "leenavincits@gmail.com",
  github: "https://github.com/Leenavincit",
  linkedin: "https://www.linkedin.com/in/leenavincit",
};

export const stats = [
  { label: "Projects Completed", value: 2, suffix: "+" },
  { label: "Internship", value: 1, suffix: "" },
  { label: "Certifications", value: 4, suffix: "+" },
  { label: "GitHub Projects", value: 2, suffix: "+" },
];
