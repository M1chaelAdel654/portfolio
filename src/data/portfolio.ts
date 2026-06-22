import { PortfolioData } from "@/types/portfolio";

const placeholderImages = [
  "/images/project-placeholder.svg",
  "/images/project-placeholder.svg",
  "/images/project-placeholder.svg"
];

export const portfolioData: PortfolioData = {
  fullName: "Michael Adel Saleb",
  title: {
    en: "Software Engineer & Flutter Developer",
    ar: "مهندس برمجيات ومطور Flutter"
  },
  summary: {
    en: "Flutter Developer with strong academic performance (GPA 3.73, ranked 4th) and hands-on production experience delivering Android applications with Clean Architecture, BLoC, Firebase, and payment integrations.",
    ar: "مطور Flutter بخلفية أكاديمية قوية (معدل 3.73 وترتيب الرابع) وخبرة عملية في تطوير تطبيقات أندرويد إنتاجية باستخدام Clean Architecture و BLoC و Firebase وتكامل أنظمة الدفع."
  },
  contacts: [
    {
      label: { en: "Phone", ar: "الهاتف" },
      value: "+20 1500 363 467",
      href: "tel:+201500363467"
    },
    {
      label: { en: "Email", ar: "البريد الإلكتروني" },
      value: "Michaeladel654@gmail.com",
      href: "mailto:Michaeladel654@gmail.com"
    },
    {
      label: { en: "LinkedIn", ar: "لينكدإن" },
      value: "LinkedIn profile (add URL)",
      href: "#"
    },
    {
      label: { en: "GitHub", ar: "جيت هب" },
      value: "GitHub profile (add URL)",
      href: "#"
    }
  ],
  skills: [
    {
      title: { en: "Mobile Development", ar: "تطوير تطبيقات الموبايل" },
      items: ["Flutter", "Dart", "Responsive UI Development", "UI/UX"]
    },
    {
      title: { en: "Architecture & Quality", ar: "الهندسة وجودة الكود" },
      items: [
        "Clean Architecture",
        "MVVM",
        "BLoC",
        "Cubit",
        "SOLID Principles",
        "Clean Code",
        "Design Patterns"
      ]
    },
    {
      title: { en: "Backend & Integrations", ar: "الخلفية والتكاملات" },
      items: [
        "RESTful APIs",
        "Firebase",
        "Authentication",
        "Payment Gateway Integration (Paymob)"
      ]
    },
    {
      title: { en: "Collaboration", ar: "التعاون والعمل" },
      items: [
        "Git",
        "GitHub",
        "Agile Methodologies",
        "Communication",
        "Teaching and Instruction",
        "Problem Solving"
      ]
    }
  ],
  experience: [
    {
      role: { en: "Flutter Developer (Freelance)", ar: "مطور Flutter (عمل حر)" },
      company: "Homy Egypt",
      period: "10/2023 - Present",
      points: [
        {
          en: "Developed and maintained 18+ Flutter applications across education, business management, accounting, and services.",
          ar: "طورت وحافظت على أكثر من 18 تطبيق Flutter في مجالات التعليم وإدارة الأعمال والمحاسبة والخدمات."
        },
        {
          en: "Delivered scalable apps using Clean Architecture, BLoC/Cubit, REST APIs, Firebase, and authentication systems.",
          ar: "نفذت تطبيقات قابلة للتوسع باستخدام Clean Architecture و BLoC/Cubit و REST APIs و Firebase وأنظمة المصادقة."
        },
        {
          en: "Integrated digital payments with Paymob and improved app reliability through better error handling.",
          ar: "دمجت أنظمة الدفع الرقمي عبر Paymob وحسنت موثوقية التطبيقات عبر معالجة الأخطاء بشكل أفضل."
        }
      ]
    },
    {
      role: { en: "Flutter Content Creator", ar: "صانع محتوى Flutter" },
      company: "YouTube",
      period: "04/2024 - Present",
      points: [
        {
          en: "Published 42+ Flutter videos with 22K+ views, sharing practical app development patterns.",
          ar: "نشرت أكثر من 42 فيديو Flutter بإجمالي مشاهدات يتجاوز 22 ألف، مع مشاركة أنماط تطوير عملية."
        },
        {
          en: "Built educational content focused on app building, architecture, and productivity tips.",
          ar: "قدمت محتوى تعليميًا يركز على بناء التطبيقات والهندسة البرمجية ونصائح الإنتاجية."
        }
      ]
    }
  ],
  projects: [
    {
      name: "Elebdaa",
      category: {
        en: "Mathematics Educational Platform (Android)",
        ar: "منصة تعليمية للرياضيات (أندرويد)"
      },
      description: {
        en: "Educational platform for middle and high school students with authentication, profile, documents, videos, and contact support.",
        ar: "منصة تعليمية لطلاب الإعدادي والثانوي تشمل تسجيل الدخول، الملف الشخصي، المحتوى الوثائقي، الفيديوهات، والتواصل."
      },
      challenge: {
        en: "Built a student-friendly education flow that combines multiple content formats with smooth navigation.",
        ar: "تم بناء تجربة تعليمية تجمع بين أنواع محتوى متعددة مع تنقل سلس للطلاب."
      },
      impact: {
        en: "Shipped as a complete Android learning product ready for students on Google Play.",
        ar: "تم إطلاقها كمنتج تعليمي متكامل على Google Play."
      },
      technologies: ["Flutter", "BLoC", "REST APIs", "Authentication", "Responsive UI"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { playStore: "#", github: "#", liveDemo: "#" }
    },
    {
      name: "Attendance Zone",
      category: {
        en: "Students Attendance App (Mobile & Desktop)",
        ar: "تطبيق حضور الطلاب (موبايل وسطح مكتب)"
      },
      description: {
        en: "Attendance system with a mobile app for students and desktop app for faculty to improve attendance tracking.",
        ar: "نظام حضور يشمل تطبيق موبايل للطلاب وتطبيق سطح مكتب لأعضاء هيئة التدريس لتحسين تتبع الحضور."
      },
      challenge: {
        en: "Designed a cross-platform attendance flow that keeps academic records accurate and easy to use.",
        ar: "تم تصميم تدفق حضور متعدد المنصات لضمان دقة السجلات الأكاديمية وسهولة الاستخدام."
      },
      impact: {
        en: "Improved attendance recording quality and operational convenience for academic teams.",
        ar: "حسّن جودة تسجيل الحضور ورفع كفاءة العمل للفرق الأكاديمية."
      },
      technologies: ["Flutter", "State Management", "Desktop + Mobile Workflow"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { video: "#", github: "#", liveDemo: "#" }
    },
    {
      name: "MedMisr Direct",
      category: { en: "Medical Services App (Android)", ar: "تطبيق خدمات طبية (أندرويد)" },
      description: {
        en: "Integrated Paymob gateway with end-to-end checkout and validation across multiple transaction types.",
        ar: "تم دمج بوابة Paymob مع تدفق دفع كامل يشمل checkout والتحقق عبر عدة أنواع معاملات."
      },
      challenge: {
        en: "Handled payment edge cases, transaction failures, and API responses for secure processing.",
        ar: "تمت معالجة الحالات الطرفية وأخطاء المعاملات واستجابات APIs لضمان دفع آمن."
      },
      impact: {
        en: "Enabled reliable digital payments for medical services with stronger transaction resilience.",
        ar: "أتاح دفعًا رقميًا موثوقًا للخدمات الطبية مع مرونة أعلى في المعاملات."
      },
      technologies: ["Flutter", "Paymob", "REST APIs", "Error Handling", "Secure Flows"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { playStore: "#", github: "#", liveDemo: "#" }
    },
    {
      name: "El Malak Church",
      category: {
        en: "Church Management System (Android)",
        ar: "نظام إدارة كنيسة (أندرويد)"
      },
      description: {
        en: "Church data management system with detailed report export per section in Excel format.",
        ar: "نظام لإدارة بيانات الكنيسة مع استخراج تقارير تفصيلية لكل قسم بصيغة Excel."
      },
      challenge: {
        en: "Structured large organizational data in a way that supports both day-to-day usage and reporting.",
        ar: "تم تنظيم بيانات كبيرة بشكل يدعم الاستخدام اليومي وإعداد التقارير."
      },
      impact: {
        en: "Improved operational visibility and reporting quality for church administration.",
        ar: "حسّن وضوح العمليات وجودة التقارير لإدارة الكنيسة."
      },
      technologies: ["Flutter", "Data Management", "Excel Reporting"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { video: "#", github: "#", liveDemo: "#" }
    },
    {
      name: "Dafter",
      category: {
        en: "Accounting Office Management App (Android)",
        ar: "تطبيق إدارة مكتب محاسبة (أندرويد)"
      },
      description: {
        en: "Accounting office app for client/document workflows, tax tracking, and financial value management.",
        ar: "تطبيق لمكتب محاسبة لإدارة العملاء والوثائق، تتبع الضرائب، وإدارة القيم المالية."
      },
      challenge: {
        en: "Balanced secure document handling with fast search and daily accounting operations.",
        ar: "تم تحقيق توازن بين أمان الوثائق وسرعة البحث وكفاءة العمليات اليومية."
      },
      impact: {
        en: "Reduced manual overhead in financial and document processing for accounting teams.",
        ar: "قلل الجهد اليدوي في معالجة المهام المالية والوثائق لفريق المحاسبة."
      },
      technologies: ["Flutter", "Data Search", "Document Management", "Financial Tracking"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { github: "#", liveDemo: "#" }
    },
    {
      name: "Easy Bio",
      category: {
        en: "Biology Educational Platform (Android)",
        ar: "منصة تعليم أحياء (أندرويد)"
      },
      description: {
        en: "Educational app with authentication and four main sections: profile, contact, website visit, and purchased videos.",
        ar: "تطبيق تعليمي يشمل نظام دخول وأربعة أقسام رئيسية: الملف الشخصي، تواصل معنا، زيارة الموقع، والفيديوهات المشتراة."
      },
      challenge: {
        en: "Implemented BLoC-based state handling to keep navigation and content flow stable.",
        ar: "تم تنفيذ إدارة حالة باستخدام BLoC لضمان استقرار التنقل وتدفق المحتوى."
      },
      impact: {
        en: "Delivered a responsive educational experience optimized for content accessibility.",
        ar: "قدّم تجربة تعليمية متجاوبة محسنة لوصول المحتوى."
      },
      technologies: ["Flutter", "BLoC", "REST APIs", "Authentication", "Responsive Design"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { playStore: "#", github: "#", liveDemo: "#" }
    },
    {
      name: "Mikrotik Manager",
      category: {
        en: "Network Monitoring & MikroTik Management",
        ar: "مراقبة الشبكات وإدارة MikroTik"
      },
      description: {
        en: "Real-time network monitoring app with ping checks, outage alerts, and rogue DHCP detection.",
        ar: "تطبيق مراقبة شبكات لحظي يتضمن فحوص ping وتنبيهات الانقطاع واكتشاف DHCP غير المصرح."
      },
      challenge: {
        en: "Built proactive monitoring behavior for quick issue detection in network operations.",
        ar: "تم بناء سلوك مراقبة استباقي لاكتشاف مشاكل الشبكة بسرعة."
      },
      impact: {
        en: "Helped administrators identify and resolve network issues before broader service disruption.",
        ar: "ساعد مسؤولي الشبكات على اكتشاف وحل المشكلات قبل تأثيرها على الخدمة."
      },
      technologies: ["Flutter", "Networking", "Monitoring", "Alerting"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { video: "#", github: "#", liveDemo: "#" }
    },
    {
      name: "My Network",
      category: {
        en: "Network Manager App (Android)",
        ar: "تطبيق إدارة الشبكة (أندرويد)"
      },
      description: {
        en: "MikroTik network monitoring app with device health checks and outage notifications.",
        ar: "تطبيق لإدارة ومراقبة شبكات MikroTik مع فحص حالة الأجهزة وتنبيهات الانقطاع."
      },
      challenge: {
        en: "Maintained near real-time status visibility while keeping the app efficient.",
        ar: "تم الحفاظ على رؤية لحظية للحالة مع كفاءة تشغيل عالية."
      },
      impact: {
        en: "Improved issue response time with continuous device health tracking.",
        ar: "حسّن سرعة الاستجابة للمشكلات عبر تتبع مستمر لصحة الأجهزة."
      },
      technologies: ["Flutter", "Monitoring", "Notifications", "Android"],
      screenshots: placeholderImages,
      hasDetailedScreenshots: false,
      links: { playStore: "#", github: "#", liveDemo: "#" }
    }
  ],
  certifications: [
    {
      title: {
        en: "Project screenshots and certification details will be added later",
        ar: "سيتم إضافة تفاصيل الشهادات ولقطات المشاريع لاحقًا"
      },
      issuer: "Placeholder",
      date: "TBD",
      note: {
        en: "Add your official certificates here (course name, issuer, date, verification link).",
        ar: "أضف الشهادات الرسمية هنا (اسم الدورة، الجهة، التاريخ، ورابط التحقق)."
      }
    }
  ],
  education: [
    {
      degree: { en: "Bachelor of Computer Science", ar: "بكالوريوس علوم الحاسب" },
      institution: "Nahda University, Egypt",
      period: "2020 - 2024",
      details: {
        en: "Graduation: February 2024, GPA: 3.73, Ranked 4th among classmates.",
        ar: "تاريخ التخرج: فبراير 2024، المعدل: 3.73، الترتيب: الرابع على الدفعة."
      }
    }
  ]
};
