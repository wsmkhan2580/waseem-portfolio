// src/data/portfolioData.js
// ─── Easy to update: just edit these arrays ───

export const personalInfo = {
  name: "Waseem",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "MERN Stack Developer", "React Developer", "Future Software Engineer"],
  tagline: "Building scalable, modern web applications that solve real problems.",
  about: `I'm a Full Stack Developer and BCA student passionate about building impactful web applications from the ground up. I specialize in the MERN stack — crafting seamless user interfaces with React and robust server-side logic with Node.js, Express, and MongoDB.

  Currently interning as a Full Stack Developer at Prodesk IT, where I build production-grade web apps, while simultaneously running Meta Ads campaigns at Rahgir Travel. I love bridging technical depth with business understanding.`,
  email: "choudharywaseem154@gmail.com",
  phone: "+91 7055356617",
  location: "Hapur, Uttar Pradesh, India",
  social: {
    github: "https://github.com/wsmkhan2580",
    linkedin: "https://www.linkedin.com/in/waseem-ahmad-371084288?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "mailto:choudharywaseem154@gmail.com",
    leetcode: "https://leetcode.com/waseem",
    twitter: "https://x.com/Mr_Waseem_999?t=xLE1pIFKmiueTZ23JXpzdw&s=09"
  },
  resumeUrl: "#"
}

export const skills = {
  frontend: [
    { name: "HTML5", level: 92, icon: "html5" },
    { name: "CSS3", level: 90, icon: "css3" },
    { name: "JavaScript (ES6+)", level: 85, icon: "js" },
    { name: "React.js", level: 82, icon: "react" },
    { name: "Tailwind CSS", level: 88, icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", level: 78, icon: "node" },
    { name: "Express.js", level: 75, icon: "express" },
    { name: "REST APIs", level: 80, icon: "api" },
    { name: "JWT Auth", level: 72, icon: "auth" },
  ],
  database: [
    { name: "MongoDB", level: 76, icon: "mongo" },
    { name: "MySQL", level: 68, icon: "mysql" },
    { name: "Firebase", level: 70, icon: "firebase" },
  ],
  tools: [
    { name: "Git & GitHub", level: 85, icon: "git" },
    { name: "VS Code", level: 92, icon: "vscode" },
    { name: "Postman", level: 78, icon: "postman" },
    { name: "Figma", level: 65, icon: "figma" },
    { name: "Vercel / Netlify", level: 80, icon: "vercel" },
  ]
}

// ─── Projects: Replace with your real projects ───
export const projects = [
  {
id: 1,
title: "ShopZone Pro — E-Commerce Platform",
description: "A modern, fully responsive E-Commerce Web Application built with React.js, Tailwind CSS, React Router, Context API, and LocalStorage. Features product browsing, search, cart management, authentication, checkout workflow, and persistent user sessions with a clean, scalable architecture.",
category: "Frontend",
image: null,
gradient: "from-orange-500/20 to-pink-600/20",
tech: [
"React.js",
"React Router DOM",
"Tailwind CSS",
"JavaScript (ES6+)",
"Context API",
"LocalStorage"
],
github: "https://github.com/wsmkhan2580/Shopzone-pro.git",
live: "https://shopzone-pro-5q7c.vercel.app/",
featured: true
  },
  {
id: 2,
title: "CoverCraft AI — AI Cover Letter Generator",
description: "A production-level AI SaaS application that generates ATS-optimized, personalized cover letters in seconds using Google Gemini AI. Features smart PDF resume parsing, instant AI-powered content generation, PDF export, dark/light mode, and secure full-stack architecture.",
category: "Full Stack",
image: "https://image.thum.io/get/https://covercraft-ai-l21l.vercel.app",
gradient: "from-violet-500/20 to-fuchsia-600/20",
tech: [
"React.js",
"Vite",
"Node.js",
"Express.js",
"Google Gemini AI",
"Tailwind CSS",
"Axios",
"Multer"
],
github: "https://github.com/wsmkhan2580/covercraft-ai.git",
live: "https://covercraft-ai-l21l.vercel.app",
featured: true
  },
  {
    id: 3,
    title: "FlowFi — Fintech Dashboard",
    description: "5-page comprehensive fintech platform with Dashboard, Transactions, Budget, Savings Goals, and Reports. Dark navy & emerald aesthetic with canvas charts and localStorage.",
    category: "Frontend",
    image: null,
    gradient: "from-emerald-500/20 to-cyan-600/20",
    tech: ["JavaScript", "Canvas API", "CSS3", "localStorage"],
    github: "https://github.com/waseem/flowfi",
    live: "#",
    featured: true
  },
  {
    id: 4,
    title: "NexaFlow — Digital Agency",
    description: "3-level progressive digital agency website with glassmorphism design, scroll animations, mobile hamburger menu, and Tailwind CSS. Showcases modern agency branding.",
    category: "Frontend",
    image: null,
    gradient: "from-blue-500/20 to-violet-600/20",
    tech: ["React", "Tailwind CSS", "JavaScript", "CSS3"],
    github: "https://github.com/waseem/nexaflow",
    live: "#",
    featured: false
  },
  {
    id: 5,
    title: "Libris — Library Management",
    description: "Browser-based Library Management System with role-based access control, regex validation, modular multi-file architecture, and localStorage persistence.",
    category: "Frontend",
    image: null,
    gradient: "from-orange-500/20 to-red-600/20",
    tech: ["JavaScript", "localStorage", "HTML5", "CSS3"],
    github: "https://github.com/waseem/libris",
    live: "#",
    featured: false
  },
  {
    id: 6,
    title: "Restaurant Website Suite",
    description: "Multiple luxury restaurant websites (Down Town Cafe, Yellow Hills, TFC Food, What's The Kitch) with premium editorial aesthetics and smooth animations.",
    category: "Frontend",
    image: null,
    gradient: "from-yellow-500/20 to-orange-600/20",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/waseem",
    live: "#",
    featured: false
  }
]

export const experience = [
  {
    type: "work",
    role: "Full Stack Developer Intern",
    company: "Prodesk IT",
    period: "2024 — Present",
    description: "Building production-grade web applications using HTML, CSS, JavaScript, and modern frameworks. Contributing to client projects and selected as Operational Executive.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Full Stack"]
  },
  {
    type: "work",
    role: "Travel Sales Executive",
    company: "Rahgir Travel",
    period: "2024 — Present",
    description: "Running Meta Ads campaigns, managing leads, and handling digital marketing strategy. Built the full-stack website for the company including backend with Node.js.",
    tags: ["Meta Ads", "Digital Marketing", "Node.js", "Lead Management"]
  },
  {
    type: "education",
    role: "Bachelor of Computer Applications (BCA)",
    company: "JMS Group of Institutions, Hapur",
    period: "2022 — Present (3rd Year)",
    description: "Studying Computer Applications with a focus on software development, data structures, databases, and web technologies. Building real projects alongside academics.",
    tags: ["BCA", "Computer Science", "Web Development", "Database"]
  }
]

export const certifications = [
  {
    title: "Full Stack Web Development",
    organization: "Udemy",
    date: "2024",
    credentialUrl: "#",
    color: "cyan"
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    organization: "freeCodeCamp",
    date: "2024",
    credentialUrl: "#",
    color: "blue"
  },
  {
    title: "Responsive Web Design",
    organization: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
    color: "purple"
  },
  {
    title: "React — The Complete Guide",
    organization: "Udemy",
    date: "2024",
    credentialUrl: "#",
    color: "emerald"
  }
]
