import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "social-media-app-flutter",
    title: "TradeShala",
    description:
      "Integrated a stock prediction model combining news sentiment and technical indicators, improving prediction accuracy by 22% over baseline.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/rishvant/Trade-Shala",
    url: "trade-shala.vercel.app",
    tags: ["NodeJS", "Typescript", "SocketIO", "ReactJS"],
  },
  {
    id: "e-commerce-app-mern",
    title: "UTalk",
    description:
      "Developed real-time video streaming with low latency (typically < 100ms). Selective Forwarding Unit (SFU) architecture using MediaSoup: efficient bandwidth management, scalable to hundreds of participants, reduced server load by 20% compared to MCU architecture.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ayushvyasonwork/VTalks",
    url: "",
    tags: ["MediaSoup", "WebRTC", "NodeJS", "Html","Javascript"],
  },
  {
    id: "video-calling-app-flutter",
    title: "Mausam",
    description:
      "Built a responsive weather app using the MERN stack integrated with the Mausam API to display real-time weather updates. Implemented search functionality, geolocation-based weather data, and unit conversion. Used React with Redux for state management, Node.js + Express for API routing, and MongoDB for storing user preferences. Deployed on Vercel and Render for full-stack accessibility.",
    icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ayushvyasonwork/Mausam",
    url: "mausam-beige.vercel.app/",
    tags: ["ReactJS", "WeatherAPI", "JavaScript", "NodeJS", "ExpressJS"],
  },
  {
    id: "social-media-api-nodejs",
    title: "Baazaar",
    description:
      "Developed a modern and responsive eCommerce frontend using React and Redux for seamless state management. Implemented dynamic product listing, cart functionality, and user-friendly UI/UX for browsing and purchasing items. Integrated features like filtering, sorting, and responsive design for smooth performance across all devices.",
    icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ayushvyasonwork/baazaar",
    url: "baazaar-rho.vercel.app",
    tags: ["Redux", "ReactJS", "Html", "Javascript"],  
  },
  // {
  //   id: "grocery-list-maker-app-flutter",
  //   title: "",
  //   description:
  //     "A grocery list maker mobile application developed using Flutter, BloC, Hive DB, and PDF.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/grocery-list-maker-flutter",
  //   url: "https://github.com/nixrajput/grocery-list-maker-flutter/releases/latest",
  //   tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  // },
  // {
  //   id: "e-commerce-api-nodejs",
  //   title: "E-commerce API",
  //   description:
  //     "A RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
  //   icon: "/skills/nodejs.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/ecommerce-api-nodejs",
  //   tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  // },
  // {
  //   id: "flutter-carousel-widget-package",
  //   title: "Flutter Carousel Widget Package",
  //   description:
  //     "A customizable carousel widget for Flutter, offering features such as infinite scrolling, auto-scrolling, custom child widgets, pre-built indicators, expandable child widgets, auto-sized child support, and enlarged center page.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/flutter-carousel-widget-package",
  //   tags: ["Flutter", "Dart", "Carousel"],
  // },
  // {
  //   id: "get-time-ago-package",
  //   title: "GetTimeAgo Package",
  //   description:
  //     "A Dart package that converts and formats DateTime objects into human-readable 'time ago' strings, such as '20 seconds ago', 'a minute ago', or '7 hours ago'.",
  //   icon: "/skills/dart.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/gettimeago",
  //   tags: ["Dart", "DateTime", "Formatting"],
  // },
  // {
  //   id: "portfolio-website",
  //   title: "Portfolio Website",
  //   description:
  //     "This repository contains the source code for a portfolio website built using Next.js and Sass.",
  //   icon: "/skills/nextjs.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/portfolio-website",
  //   url: "https://nixrajput.dev",
  //   tags: ["Next.js", "Sass", "Web Development"],
  // },
  // {
  //   id: "bus-reservation-system-management",
  //   title: "Bus Reservation System Management",
  //   description:
  //     "This repository contains the Bus Reservation System Management project developed using Object Oriented Programming (OOP) and File Handling concepts in C++.",
  //   icon: "/skills/cpp.png",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/nixrajput/bus-reservation-system",
  //   tags: ["C++", "OOP", "File Handling"],
  // },
];
export default projects;
