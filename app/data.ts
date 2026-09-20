export const siteConfig = {
  name: "Nikita Patidar",
  role: "Full Stack Developer",
  location: "Indore, Madhya Pradesh, India",
  email: "patidarnikita008@gmail.com",
  contactForm: {
    recipientEmail: "patidarnikita008@gmail.com",
    endpoint: "https://formsubmit.co/ajax/patidarnikita008@gmail.com",
  },
  phone: "+91 70240 53902",
  github: "https://github.com/nikitapatidar1",
  linkedin: "https://www.linkedin.com/in/nikita-patidar-590052254",
  resumeUrl: "/Nikita-Patidar-Resume-Final-2026.pdf",
};

export const navigation = [
  ["Home", "home"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Education", "education"],
  ["Contact", "contact"],
] as const;

export const capabilities = [
  ["01", "Full Stack Development", "End-to-end products shaped around real users and maintainable systems."],
  ["02", "REST API Architecture", "Secure, predictable endpoints with clean validation and access control."],
  ["03", "Responsive UI Development", "Fast, accessible interfaces that stay considered on every screen."],
  ["04", "Database Optimization", "Purposeful schemas, indexing and caching for dependable performance."],
  ["05", "Authentication & Security", "JWT flows, role-based permissions and careful input handling."],
  ["06", "AI / ML Integration", "Practical intelligent features woven into useful product experiences."],
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Eyvy Solution",
    period: "Jun 2025 \u2014 Present",
    place: "Indore, Madhya Pradesh",
    summary: "Building production-ready experiences across the MERN stack.",
    points: [
      "Architect and maintain full-stack web applications using MongoDB, Express.js, React.js and Node.js.",
      "Engineer secure REST APIs with JWT authentication, input validation and role-based access control.",
      "Develop responsive, mobile-first interfaces using React and Tailwind CSS.",
      "Collaborate through Git workflows, code reviews and sprint-based development.",
      "Troubleshoot full-stack bottlenecks and validate APIs using Postman and Insomnia.",
    ],
  },
  {
    role: "Backend Developer Intern",
    company: "Wyreflow Technology",
    period: "Jun 2024 \u2014 Jun 2025",
    place: "Bhopal, Madhya Pradesh",
    summary: "Improved API performance, security and reliability for connected web products.",
    points: [
      "Reduced API response latency by 40% using MongoDB query optimization, compound indexing and caching.",
      "Improved server security with JWT authentication, password hashing and input sanitization.",
      "Developed reliable REST endpoints for efficient data processing and storage.",
      "Integrated backend APIs with frontend applications and debugged asynchronous request workflows.",
    ],
  },
];

export const skills = {
  Frontend: ["React.js", "Redux", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.IO", "Python", "FastAPI", "Django"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Query Optimization", "Indexing", "Caching"],
  "Tools & Services": ["Git", "GitHub", "Postman", "Insomnia", "VS Code", "Jest", "AWS S3", "Stripe API"],
  "Core Strengths": ["Full Stack Architecture", "API Security", "Responsive Design", "Debugging", "Database Performance", "Agile Collaboration"],
};

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  image?: string;
  visual?: "analytics" | "vision";
  liveUrl?: string;
  adminUrl?: string;
  github?: string;
  role: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Zayrro \u2014 Travel & Flight Booking Platform",
    category: "Featured Full Stack Live Project",
    image: "/zayrro.png",
    liveUrl: "https://uat.zayrro.com/",
    adminUrl: "https://admin.uat.zayrro.com/",
    description: "A comprehensive travel booking platform that brings flights, hotels, visas, attractions and cabs into one connected experience, with live travel data and secure, mobile-friendly booking flows.",
    features: ["Multi-service booking flows", "Live schedules, fares and seat maps", "Benzy Flight API integration", "JWT and OTP authentication", "Stripe payments and AWS S3 storage", "Admin and role management"],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Stripe", "AWS S3", "Jest"],
    role: "Full-stack engineering across responsive booking journeys, secure API integration, payments, document storage and administration workflows.",
  },
  {
    number: "02",
    title: "Vinstar \u2014 Identity Verification Platform",
    category: "Identity Security & Verification",
    image: "/vinstar.png",
    liveUrl: "https://vinstar.in/",
    description: "A secure identity verification platform that helps businesses onboard genuine users through document submission, guided verification and real-time request tracking.",
    features: ["Identity document submission", "Guided onboarding workflows", "Selfie and identity validation", "Live verification status tracking", "Request management", "Secure information handling"],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Authentication"],
    role: "Full-stack implementation focused on clear verification states, secure user journeys and responsive business workflows.",
  },
  {
    number: "03",
    title: "Zayrro AI Travel Assistant",
    category: "AI Conversational Platform",
    image: "/zayrro-ai.png",
    liveUrl: "https://chatbot.eyvy.in/",
    description: "An intelligent conversational assistant that helps travelers understand and complete flight, hotel and visa booking processes through immediate, context-aware guidance.",
    features: ["AI-powered travel guidance", "Flight, hotel and visa support", "Context-aware responses", "Conversation history", "Explore and trip navigation", "Responsive chat experience"],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "AI Integration"],
    role: "Frontend and integration work for the conversational experience, travel context handling and responsive navigation patterns.",
  },
  {
    number: "04",
    title: "WhatsApp Chat Analyzer",
    category: "Python Data Analytics Project",
    visual: "analytics",
    github: "https://github.com/nikitapatidar1/Whatsap-analyzer-project-using-ML",
    description: "A Python and Streamlit application that turns exported WhatsApp chats into useful visual insights for an entire conversation or an individual participant.",
    features: ["Chat file processing", "Message and media statistics", "Participant activity analysis", "Word clouds and emoji insights", "Conversation timelines", "Weekly activity heatmaps"],
    tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn", "WordCloud", "URLExtract"],
    role: "Designed the analytics flow, preprocessing logic and data visualizations for clear, participant-level insights.",
  },
  {
    number: "05",
    title: "Real-Time Face Detection",
    category: "Computer Vision & Deep Learning Project",
    visual: "vision",
    github: "https://github.com/nikitapatidar1/Face-Detection",
    description: "A lightweight computer vision application that processes live webcam video, detects multiple human faces and marks each detection with a live bounding box.",
    features: ["Real-time webcam processing", "OpenCV face detection", "Haar Cascade integration", "Multiple-face detection", "Live bounding boxes", "Lightweight Python implementation"],
    tech: ["Python", "OpenCV", "Computer Vision", "Haar Cascade", "Real-Time Video"],
    role: "Implemented the capture loop, classifier integration and real-time detection visualization.",
  },
];

export const education = [
  { degree: "Master of Computer Applications", specialization: "Artificial Intelligence & Machine Learning", school: "LNCT University, Bhopal", period: "Oct 2023 \u2014 May 2025", result: "First Class Distinction", focus: "Web Architecture, Distributed Systems and Artificial Intelligence" },
  { degree: "Bachelor of Computer Applications", specialization: "Computer Applications", school: "DAVV University, Indore", period: "Aug 2019 \u2014 Jul 2022", result: "First Division", focus: "Data Structures, Database Systems and Object-Oriented Programming" },
];

export const certifications = [
  { title: "Python Certification", issuer: "Infosys Springboard", topics: "Core Python, Data Structures and Object-Oriented Design" },
  { title: "Python with Data Structures and Algorithms", issuer: "Tech Sim Plus", topics: "Algorithmic Problem Solving, Trees, Graphs and Recursion" },
];

