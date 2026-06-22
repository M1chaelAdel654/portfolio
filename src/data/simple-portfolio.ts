export interface ProjectLinks {
  github?: string;
  playstore?: string;
  appstore?: string;
  video?: string;
  live?: string;
}

export interface SimpleProject {
  name: string;
  description: string;
  images: string[];
  links?: ProjectLinks;
  technologies?: string[];
}

export interface SimplePortfolioData {
  name: string;
  role: string;
  intro: string;
  subtitle: string;
  about: string;
  skills: string[];
  heroLead: string;
  heroHighlight: string;
  email: string;
  phone: string;
  location: string;
  youtubeStats: string;
  youtubeLabel: string;
  githubProfile: string;
  linkedinProfile: string;
  youtubeChannel: string;
  avatar: string;
  cvPath: string;
  projects: SimpleProject[];
}

export const simplePortfolioData: SimplePortfolioData = {
  name: "Michael Adel Saleb",
  role: "Software Engineer | Flutter Developer | YouTuber",
  heroLead: "Hi, my name is",
  heroHighlight: "and I am a Passionate Flutter Developer",
  intro:
    "I build production-ready Flutter apps with clean architecture, smooth UX, and strong focus on real business impact.",
  subtitle:
    "Flutter content creator with 42+ videos and 22K+ views, sharing practical development workflows and clean architecture best practices.",
  about:
    "I am a software engineer and Flutter developer focused on building reliable, scalable mobile apps for real-world use cases in education, fintech, management, and network operations.",
  skills: [
    "Flutter",
    "Dart",
    "Clean Architecture",
    "BLoC / Cubit",
    "REST APIs",
    "Firebase",
    "Payment Integration (Paymob)",
    "Responsive UI",
    "Git / GitHub"
  ],
  email: "Michaeladel654@gmail.com",
  phone: "+20 1500 363 467",
  location: "Egypt",
  youtubeStats: "42+ Videos | 22K+ Views",
  youtubeLabel: "YouTube Creator",
  githubProfile: "https://github.com/M1chaelAdel654",
  linkedinProfile: "https://www.linkedin.com/in/m1chael-adel/",
  youtubeChannel: "https://www.youtube.com/@m1chael-adel?si=XRJzDKjbQhaDfL-6",
  avatar: "/images/michael.jpeg",
  cvPath: "https://drive.google.com/file/d/1lL1cTrwK8Ntc5OA5o6ovUwIqte5z5gZg/view",
  projects: [
    {
      name: "Elebdaa - Mathematics Educational Platform (Android)",
      description:
        "Developed an educational platform for middle and high school students with account registration/login, profile section, document content, video lessons, and Contact Us support flow.",
      images: ["/images/projects/ibda3.webp"],
      technologies: [
        "Flutter",
        "Dart",
        "REST APIs",
        "BLoC",
        "Firebase Authentication",
        "Responsive UI",
        "Clean Architecture"
      ],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.mickode.elebdaa"
      }
    },
    {
      name: "Attendance Zone - Students Attendance App (Mobile & Desktop)",
      description:
        "Developed a complete attendance management system with a student mobile app and a faculty desktop app, improving attendance accuracy and workflow convenience in academic environments.",
      images: ["/images/project-placeholder.svg"],
      technologies: ["Flutter", "Cross-Platform Workflow", "State Management"],
      links: {video:"https://www.linkedin.com/posts/m1chael-adel_project-overview-developed-a-comprehensive-ugcPost-7199075262108446720-1X3J/?utm_source=share&utm_medium=member_desktop"}
    },
    {
      name: "MedMisr Direct (Android)",
      description:
        "Integrated Paymob payment gateway with end-to-end checkout, transaction handling, response validation, and robust edge-case/error processing across 3+ transaction types.",
      images: ["/images/projects/midmisr.webp"],
      technologies: ["Flutter", "Paymob", "REST APIs", "Error Handling"],
      links: {
	  playstore: "https://play.google.com/store/apps/details?id=com.medmisr.direct"
	  }
    },
    {
      name: "El Malak Church - Church Management System (Android)",
      description:
        "Built a comprehensive church management system to organize church data and generate detailed section-based reports in Excel format.",
      images: ["/images/project-placeholder.svg"],
      technologies: ["Flutter", "Data Management", "Excel Reporting"],
      links: {video:"https://www.linkedin.com/posts/m1chael-adel_i-am-happy-to-share-that-finally-finished-ugcPost-7165120038247632896-NpTh/?utm_source=share&utm_medium=member_desktop"}
    },
    {
      name: "Dafter - Accounting Office Application (Android)",
      description:
        "Developed an accounting office app for accountants and assistants to manage clients, secure documents, tax status, search workflows, and financial values efficiently.",
      images: ["/images/project-placeholder.svg"],
      technologies: ["Flutter", "Document Management", "Search", "Financial Tracking"],
      links: {}
    },
    {
      name: "Easy Bio - Biology Educational Platform (Android)",
      description:
        "Developed an educational app with authentication and core sections (Profile, Contact Us, Visit Website, Purchased Videos), using BLoC for effective state management and smooth UX.",
      images: ["/images/projects/easybio.webp"],
      technologies: ["Flutter", "BLoC", "REST APIs", "Responsive Design"],
      links: {}
    },
    {
      name: "Elmnasa - Integrated Lessons Platform (Android)",
      description:
        "An integrated educational platform for all stages (primary, middle, and secondary), designed to provide comprehensive learning content for students and support parents in following up academic progress effectively.",
      images: ["/images/projects/almnasa.webp"],
      technologies: ["Flutter", "Education Platform", "Content Delivery", "Responsive UI"],
      links: {
        playstore: "https://play.google.com/store/apps/details?id=com.mickode.elmnasa"
      }
    },
    {
      name: "Mikrotik Manager - Network Monitoring App",
      description:
        "Built a real-time MikroTik monitoring and management app with automated ping checks, outage notifications, and rogue DHCP detection for proactive network maintenance.",
      images: ["/images/projects/mikrotik.png"],
      technologies: ["Flutter", "Network Monitoring", "Alerts", "MikroTik"],
      links: { video: "https://drive.google.com/file/d/1_PYJpHRcjwd4zz7QVEZEdPHMxSFTdLJh/view" }
    },
    {
      name: "My Network - Network Manager App (Android)",
      description:
        "Developed a Flutter-based network manager with real-time device health tracking, outage alerts, and fast issue visibility for administrators.",
      images: ["/images/projects/1.webp"],
      technologies: ["Flutter", "Android", "Monitoring", "Notifications"],
      links: {playstore:"https://play.google.com/store/apps/details?id=com.michael.untitled7"}
    }
  ]
};
