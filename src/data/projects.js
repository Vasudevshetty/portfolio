// Projects Data
export const projects = [
  {
    id: 1,
    title: "DeployIO",
    subtitle: "AI-Powered DevOps Deployment Platform",
    description:
      "Comprehensive CI/CD automation platform with AI-driven stack analysis and scalable backend infrastructure for seamless deployment workflows.",
    longDescription: `
      DeployIO is an AI-powered DevOps platform that revolutionizes deployment workflows through intelligent 
      automation and stack analysis. The platform provides comprehensive CI/CD pipelines, automated testing, 
      and scalable infrastructure management, making deployments faster, safer, and more reliable.
    `,
    image: "/projects/deployio-preview.jpg",
    category: "DevOps & AI",
    status: "Live",
    featured: true,

    // Technical Details
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "Terraform",
      "AI/ML APIs",
    ],
    features: [
      "AI-driven stack analysis and optimization recommendations",
      "Automated CI/CD pipeline generation",
      "Multi-cloud deployment support (AWS, Azure, GCP)",
      "Real-time deployment monitoring and rollback",
      "Infrastructure as Code (IaC) with Terraform",
      "Containerized application deployment",
      "Security scanning and compliance checks",
      "Team collaboration and deployment approvals",
      "Performance metrics and analytics dashboard",
    ],

    // Links and Demo
    links: {
      live: "https://deployio.tech/",
      github: "https://github.com/vasudevshetty/deployio",
      demo: "https://deployio.tech/demo",
    },

    // Metrics and Impact
    metrics: {
      deployments: "1000+",
      uptime: "99.9%",
      timeReduction: "70% faster deployments",
      users: "50+ teams",
    },

    // Development Timeline
    timeline: {
      started: "2024-01",
      completed: "2024-06",
      duration: "6 months",
    },

    // Challenges and Solutions
    challenges: [
      {
        challenge: "Multi-cloud Compatibility",
        solution:
          "Implemented abstract deployment layers with cloud-specific adapters",
      },
      {
        challenge: "AI Integration",
        solution:
          "Built custom ML models for stack analysis and deployment optimization",
      },
      {
        challenge: "Scalability",
        solution:
          "Used Kubernetes for auto-scaling and load balancing across multiple regions",
      },
    ],
  },

  {
    id: 2,
    title: "Voxalize",
    subtitle: "Voice-to-SQL Assistant",
    description:
      "Revolutionary voice-powered SQL query assistant that combines ChatGPT capabilities with database interaction, built using FastAPI, LangChain, and PostgreSQL.",
    longDescription: `
      Voxalize transforms database interaction by allowing users to query databases using natural language voice commands.
      The platform leverages advanced AI to convert speech to SQL queries, making database operations accessible to
      non-technical users while maintaining powerful capabilities for developers.
    `,
    image: "/projects/voxalize-preview.jpg",
    category: "AI & Voice Tech",
    status: "Live",
    featured: true,

    technologies: [
      "FastAPI",
      "Python",
      "LangChain",
      "PostgreSQL",
      "OpenAI GPT",
      "Speech Recognition",
      "React.js",
      "WebRTC",
      "Docker",
    ],
    features: [
      "Natural language voice commands for SQL queries",
      "Real-time speech-to-text conversion",
      "Intelligent query optimization and validation",
      "Multi-database support (PostgreSQL, MySQL, SQLite)",
      "Query history and favorites",
      "Visual query results with charts and graphs",
      "Voice feedback for query results",
      "Secure database connection management",
      "Multi-language support for voice commands",
    ],

    // Links and Demo
    links: {
      live: "https://voxalize.fauxigent.com/",
      github: "https://github.com/vasudevshetty/voxalize",
      demo: "https://voxalize.fauxigent.com/demo",
    },

    // Metrics and Impact
    metrics: {
      queries: "5000+ processed",
      accuracy: "95% voice recognition",
      responseTime: "< 1s average",
      languages: "3 supported",
    },

    // Development Timeline
    timeline: {
      started: "2024-02",
      completed: "2024-04",
      duration: "3 months",
    },

    // Challenges and Solutions
    challenges: [
      {
        challenge: "Voice Recognition Accuracy",
        solution:
          "Implemented advanced NLP preprocessing and context-aware recognition",
      },
      {
        challenge: "SQL Query Security",
        solution:
          "Built query sanitization and permission-based database access",
      },
      {
        challenge: "Real-time Processing",
        solution:
          "Optimized FastAPI with async processing and efficient database connections",
      },
    ],
  },

  {
    id: 3,
    title: "StudySyncs",
    subtitle: "Personalized AI Learning Platform",
    description:
      "Advanced AI-powered learning platform featuring RAG, ChatBot, Transcript Q&A, and PDF Q&A using LangChain and Groq for personalized education.",
    longDescription: `
      StudySyncs revolutionizes online learning through AI-powered personalization. The platform combines Retrieval-Augmented 
      Generation (RAG) with advanced chatbot capabilities to provide intelligent tutoring, document analysis, and interactive 
      learning experiences tailored to each user's needs.
    `,
    image: "/projects/studysyncs-preview.jpg",
    category: "AI & Education",
    status: "Live",
    featured: true,

    technologies: [
      "React.js",
      "Python",
      "LangChain",
      "Groq",
      "RAG",
      "FastAPI",
      "OpenAI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Tailwind CSS",
    ],
    features: [
      "AI-powered personalized learning paths",
      "RAG-based intelligent document Q&A",
      "Interactive chatbot for learning assistance",
      "Transcript analysis and Q&A generation",
      "PDF document processing and insights",
      "Progress tracking and analytics",
      "Multi-modal content support",
      "Adaptive learning recommendations",
      "Real-time collaboration features",
    ],

    // Links and Demo
    links: {
      live: "https://studysyncs.xyz/",
      github: "https://github.com/vasudevshetty/studysyncs",
      demo: "https://studysyncs.xyz/demo",
    },

    // Metrics and Impact
    metrics: {
      users: "200+ students",
      accuracy: "92% AI response accuracy",
      engagement: "85% completion rate",
      satisfaction: "4.7/5 rating",
    },

    // Development Timeline
    timeline: {
      started: "2024-03",
      completed: "2024-05",
      duration: "3 months",
    },

    // Challenges and Solutions
    challenges: [
      {
        challenge: "RAG Implementation",
        solution:
          "Built custom vector database with optimized embedding models",
      },
      {
        challenge: "Document Processing",
        solution:
          "Implemented multi-format parsers with LangChain document loaders",
      },
      {
        challenge: "Real-time AI Responses",
        solution: "Used Groq for fast inference and Redis for response caching",
      },
    ],
  },

  {
    id: 4,
    title: "AnandBrothers",
    subtitle: "Fashion E-Commerce with AI Suggestions",
    description:
      "Modern fashion e-commerce platform featuring AI-powered product recommendations, fashion analysis, and intelligent chatbot for enhanced shopping experience.",
    longDescription: `
      AnandBrothers is a cutting-edge fashion e-commerce platform that combines traditional online shopping with 
      advanced AI capabilities. The platform features intelligent product recommendations, fashion trend analysis, 
      and an AI chatbot that helps customers find the perfect outfit based on their preferences and style.
    `,
    image: "/projects/anandbrothers-preview.jpg",
    category: "E-Commerce & AI",
    status: "Live",
    featured: true,

    technologies: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "AI APIs",
      "Fashion AI",
      "Recommendation Engine",
      "Chatbot",
      "Stripe",
      "Cloudinary",
    ],
    features: [
      "AI-powered product recommendations",
      "Fashion trend analysis and suggestions",
      "Intelligent chatbot for style assistance",
      "Advanced product search and filtering",
      "User profile with style preferences",
      "Wishlist and shopping cart functionality",
      "Secure payment processing",
      "Order tracking and management",
      "Responsive design for all devices",
    ],

    // Links and Demo
    links: {
      live: "https://anandbrothersmysuru.in/",
      github: "https://github.com/vasudevshetty/anandbrothers",
      demo: "https://anandbrothersmysuru.in/demo",
    },

    // Metrics and Impact
    metrics: {
      products: "500+ fashion items",
      accuracy: "88% recommendation accuracy",
      conversion: "25% increase in sales",
      users: "300+ customers",
    },

    // Development Timeline
    timeline: {
      started: "2024-01",
      completed: "2024-03",
      duration: "3 months",
    },

    // Challenges and Solutions
    challenges: [
      {
        challenge: "AI Fashion Analysis",
        solution:
          "Integrated computer vision APIs for style and color analysis",
      },
      {
        challenge: "Recommendation Algorithm",
        solution:
          "Built hybrid recommendation system using collaborative and content-based filtering",
      },
      {
        challenge: "Real-time Chat Support",
        solution:
          "Implemented AI chatbot with natural language processing for customer queries",
      },
    ],
  },

  {
    id: 5,
    title: "SmartHRPro",
    subtitle: "Auditor SaaS Platform",
    description:
      "Comprehensive HR management SaaS platform with payroll automation, client management tools, and advanced auditing features built with MongoDB and Node.js.",
    longDescription: `
      SmartHRPro is a comprehensive HR management solution designed specifically for auditors and HR professionals.
      The platform automates payroll processing, manages client relationships, and provides advanced auditing tools
      to streamline HR operations and ensure compliance.
    `,
    image: "/projects/smarthrpro-preview.jpg",
    category: "SaaS & Business",
    status: "Live",
    featured: true,

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Charts.js",
      "PDF Generation",
      "Email Automation",
      "Stripe",
      "AWS",
    ],
    features: [
      "Automated payroll processing and calculations",
      "Client management and communication tools",
      "Advanced auditing and compliance features",
      "Document management and storage",
      "Financial reporting and analytics",
      "Role-based access control",
      "Email automation and notifications",
      "Tax calculation and reporting",
      "Multi-tenant SaaS architecture",
    ],

    // Links and Demo
    links: {
      live: "https://smarthrpro.in/",
      github: "https://github.com/vasudevshetty/smarthrpro",
      demo: "https://smarthrpro.in/demo",
    },

    // Metrics and Impact
    metrics: {
      clients: "50+ businesses",
      automation: "80% payroll process automation",
      timeSaved: "15 hours/week per client",
      accuracy: "99.5% calculation accuracy",
    },

    // Development Timeline
    timeline: {
      started: "2023-08",
      completed: "2024-01",
      duration: "6 months",
    },

    // Challenges and Solutions
    challenges: [
      {
        challenge: "Complex Payroll Calculations",
        solution:
          "Built flexible rule engine for different tax structures and salary components",
      },
      {
        challenge: "Multi-tenant Architecture",
        solution:
          "Implemented database sharding and tenant isolation for scalability",
      },
      {
        challenge: "Compliance Management",
        solution:
          "Integrated automated compliance checks and regulatory reporting features",
      },
    ],
  },
];

// Project Categories
export const projectCategories = [
  { id: "all", name: "All Projects", count: projects.length },
  {
    id: "devops",
    name: "DevOps & AI",
    count: projects.filter((p) => p.category === "DevOps & AI").length,
  },
  {
    id: "ai",
    name: "AI & Voice Tech",
    count: projects.filter((p) => p.category === "AI & Voice Tech").length,
  },
  {
    id: "education",
    name: "AI & Education",
    count: projects.filter((p) => p.category === "AI & Education").length,
  },
  {
    id: "ecommerce",
    name: "E-Commerce & AI",
    count: projects.filter((p) => p.category === "E-Commerce & AI").length,
  },
  {
    id: "saas",
    name: "SaaS & Business",
    count: projects.filter((p) => p.category === "SaaS & Business").length,
  },
];

// Featured Projects (for hero section)
export const featuredProjects = projects.filter((project) => project.featured);

export default { projects, projectCategories, featuredProjects };
