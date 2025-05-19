import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  
  {
    designation: "Frontend Developer",
    company: "WhatBytes",
    startDate: "Jan 2025",
    endDate: "March 2025",
    isCurrentJob: false,
    location: "Remote",
    description: [
  "Built and optimized frontend for two projects using Next.js, TypeScript, and JavaScript, improving UI performance.",
  "Integrated backend APIs and implemented price calculation entirely on the frontend, reducing computation time by 60%.",
  "Engineered part of project to handle complex data structures (objects & arrays), streamlining data processing by 50%."
],

  },
  {
    designation: "Open Source Full Stack Developer",
    company: "GirlScript Summer of Code",
    startDate: "Oct 2024",
    endDate: "Nov 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
  "Developed and contributed to multiple open-source MERN stack projects, improving scalability and maintainability.",
  "Integrated real-time data with optimized APIs, reducing latency by 40% and enhancing response times.",
  "Designed and implemented a fully responsive UI, ensuring seamless cross-device compatibility.",
  "Refactored and optimized application logic, improving performance and code efficiency by 50%."
],
  },
  {
    designation: "Data Validation Intern",
    company: "Demlo.ai",
    startDate: "Nov 2023",
    endDate: "Jan 2024",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Worked on data validation for Demlo.ai using LaTeX ", "advanced mathematical techniques to ensure accuracy "," consistency across datasets.",
    ],
  },
];
export default experiences;