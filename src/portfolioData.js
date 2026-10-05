export const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["certifications", "Certifications"],
    ["profiles", "Profiles"],
    ["contact", "Contact"]
];

export const heroRoles = [
    "Software Developer",
    "Full-Stack Developer",
    "Java Developer",
    "Backend Engineer"
];

export const primaryEmail = "officaladityasaxena@gmail.com";

export const stats = [
    { value: "3", label: "Featured projects" },
    { value: "4", label: "Certifications" },
    { value: "3", label: "Programming languages" }
];

export const skillGroups = [
    {
    title: "Programming Languages",
    icon: "💻",
    items: [
        "Java",
        "JavaScript",
        "Python"
    ]
},
    {
        title: "Frontend",
        items: ["HTML5", "CSS3", "Bootstrap", "React.js"]
    },
    {
        title: "Backend",
        items: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
        title: "Database",
        items: ["MySQL", "MongoDB"]
    },
    {
        title: "Developer tools",
        items: ["Git", "GitHub", "Visual Studio Code", "Postman"]
    },
    {
        title: "Core subjects",
        items: ["Data Structures", "Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"]
    }
];

export const projects = [
  {
    title: "Stock Portfolio Tracker",
    category: "Real-time finance platform",
    stack: [
        "MongoDB",
        "Express.js",
        "React 19",
        "Node.js",
        "Socket.IO",
        "Recharts"
    ],
    overview:
        "A full-stack portfolio app for following US and Indian equities with live quotes, historical charts, and clear performance tracking.",
    features: [
        "US and Indian market quotes with normalized ticker symbols",
        "Live prices and historical OHLC charts",
        "Holdings, transactions, watchlists, and price alerts",
        "Cost basis, portfolio value, profit and loss analytics"
    ],
    engineering:
        "Pooled Socket.IO subscriptions to avoid duplicate quote requests, normalized ticker formats, and added cache and fallback layers for market data outages.",
    github: "https://github.com/Aditya2saxena/Stock-Portfolio-Tracker",
    live: "https://stock-portfolio-tracker-bice.vercel.app/dashboard"
  },
  {
    title: "StayHeaven",
    category: "Full-stack property platform",

    stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Bootstrap"
    ],

    overview:
    "An Airbnb-inspired property platform for discovering stays and managing listings, built with a structured MVC backend.",


    features: [
        "Sign-in and authorization for listing workflows",
        "Create, update, browse, and remove property listings",
        "Guest reviews and ratings",
        "Responsive pages with reusable EJS layouts"
    ],
    engineering:
        "Organized routes, middleware, and data models around an MVC structure, with validation and linked listing and review data.",
    github: "https://github.com/Aditya2saxena/StayHeaven"
},
    {
        title: "Event-Sourced Task Management System",
        category: "Backend architecture",
        stack: ["Node.js", "Express.js", "MongoDB", "Event Sourcing"],
        overview:
            "An event-driven task management system built on the event sourcing pattern to handle task lifecycle operations while preserving complete event history and reconstructable application state.",
        features: [
            "Immutable event log for create, update, complete, and delete actions",
            "Replay-based state reconstruction from the event store",
            "Snapshotting support to improve recovery time and scalability"
        ],
        engineering:
            "Kept task changes in an immutable event log and used replay and snapshots to rebuild state and support recovery.",
        github: "https://github.com/Aditya2saxena/Event-Sourced-Task-Management_System",
        live: "https://event-sourced-task-management-system.onrender.com"
    }
];

export const certifications = [
    {
        title:"Leadership and Team Effectiveness",
        issuer:"NPTEL - IIT Roorkee",
        type:"Professional Development"
    },

    {
        title:"Full Stack Development Using Java",
        issuer:"KVCH & GLA University",
        type:"Software Development"
    },

    {
        title:"Flutter Development",
        issuer:"Cisco ThingQbator & NASSCOM Foundation",
        type:"Mobile Development"
    },

    {
        title:"Digital Marketing Fundamentals",
        issuer:"SMstudy",
        type:"Digital Skills"
    }
];

export const codingProfiles = [

    {
        name: "GitHub",
        value: "github.com/Aditya2saxena",
        href: "https://github.com/Aditya2saxena",
        description:
        "Source code repositories, development projects, and software implementations."
    },


    {
        name: "LeetCode",
        value: "leetcode.com/u/Aditya5saxena",
        href: "https://leetcode.com/u/Aditya5saxena/",
        description:
        "Algorithm practice, Data Structures, and competitive problem solving."
    },


    {
        name: "GeeksforGeeks",
        value: "geeksforgeeks.org/profile/adityasaxfr7d",
        href: "https://www.geeksforgeeks.org/profile/adityasaxfr7d/",
        description:
        "DSA concepts, problem solving, and technical learning."
    },


    {
        name: "CodeChef",
        value: "codechef.com/users/bliss_coral_90",
        href: "https://www.codechef.com/users/bliss_coral_90",
        description:
        "Competitive programming practice, algorithms, and problem solving."
    }

];;

export const contactLinks = [

    {
        label:"Email",
        value:primaryEmail,
        href:`mailto:${primaryEmail}`
    },


    {
        label:"LinkedIn",
        value:"aditya-saxena-00bba4296",
        href:"https://www.linkedin.com/in/aditya-saxena-00bba4296/"
    },


    {
        label:"GitHub",
        value:"Aditya2saxena",
        href:"https://github.com/Aditya2saxena"
    },


    {
        label:"Location",
        value:"India",
        href:null
    }

];;
