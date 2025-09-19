import imageList from "./assets/images";

const projectDetails = [
  {
    id: 1,
    projectName: "CodeReviewerAI",
    overview:
      "CodeReviewerAI is a web-based platform where developers can submit code snippets or queries to receive AI-generated reviews in real-time. It analyzes code quality, suggests optimizations, and highlights potential issues inside an interactive editor.",
    platform: "Full-stack (React + Node.js)",
    features: [
      "Interactive code editor to submit code snippets/queries",
      "AI-powered real-time code review and suggestions",
      "Highlights potential bugs, errors, and code smells",
      "Provides optimization and best-practice recommendations",
      "Seamless frontend-backend integration with API calls",
      "Deployed with Netlify (frontend) and Render (backend)",
    ],
    technologies: [
      "React.js",
      "Axios",
      "Node.js",
      "Express.js",
      "Google Gemini API",
      "Vite",
      "Render (Backend Hosting)",
      "Netlify (Frontend Deployment)",
    ],
    links: {
      github: "https://github.com/JatinSaxena02/AI_POWERED_CODEREVIEWER",
      live: "https://codereviewerai.netlify.app/",
    },
    images: imageList.aiproject,
    boxShadow:
      "0px 0px 8px rgba(0, 123, 255, 0.4), 0px 0px 15px rgba(0, 123, 255, 0.6)",
    conclusion:
      "This project demonstrates the integration of AI with modern full-stack web technologies to create an intelligent code review tool. It simplifies debugging, improves code quality, and enhances developer productivity with real-time AI feedback.",
  },
  {
    id: 2,
    projectName: "PopX Authentication App",
    overview:
      "A full-stack authentication app with JWT security, allowing users to register, log in, and manage their profile via a React frontend and Node.js/Express backend.",
    platform: "Full-stack (React + Node.js)",
    features: [
      "Register with validation and secure password hashing (bcrypt)",
      "Login flow secured with JWT tokens",
      "Display profile and user details after login",
      "Secure logout functionality",
      "Mobile-first UI with Tailwind CSS",
      "Frontend deployed on Netlify (or Vercel)",
      "Backend deployed on Render",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "Axios",
      "React Router DOM",
      "Node.js",
      "Express.js",
      "JWT (jsonwebtoken)",
      "bcrypt.js",
    ],
    links: {
      live: "https://popxtask1.netlify.app/",
      github: "https://github.com/JatinSaxena02/popX_assignment",
    },
    images: imageList.popx,
    boxShadow:
      "0px 0px 8px rgba(0, 255, 255, 0.4), 0px 0px 15px rgba(0, 255, 255, 0.6)",
    conclusion:
      "This completed assignment showcases secure full-stack authentication using JWT, with a polished React UI and a robust Node.js backend. It demonstrates several essential aspects of modern web development—including validation, token handling, deployment, and responsive design.",
  },
  {
    id: 3,
    projectName: "Do Your Todos",
    overview:
      "A lightweight React-based task manager that helps users stay organized by adding, editing, deleting, and tracking tasks with instant updates in a clean, intuitive interface.",
    platform: "React",
    features: [
      "Quickly add new tasks to your list",
      "Edit and update existing tasks",
      "Mark tasks as complete or pending",
      "Remove completed or unwanted tasks",
      "UI updates instantly when tasks change",
      "Clean and user-friendly UI that works across devices",
    ],
    technologies: [
      "React Dom",
      "React Hooks",
      "Bootstrap",
      "React Icons",
      "React Redux",
      "CSS / Flexbox",
      "Netlify",
    ],
    links: {
      live: "https://doyourtodo.netlify.app/",
      github: "https://github.com/JatinSaxena02/Todo_App",
    },
    images: imageList.todoapp,
    boxShadow:
      "0px 0px 8px rgba(0, 45, 205, 0.4), 0px 0px 15px rgba(0, 45, 205, 0.6)",
    conclusion:
      "This project demonstrates how to build a simple yet effective productivity tool using React. It showcases local persistence, state management with hooks, and deployment to Netlify. The Todo App can serve as a foundation for more advanced applications with authentication, cloud sync, or collaborative features.",
  },
  {
    id: 4,
    projectName: "TodoApp",
    overview:
      "A simple and efficient task management app with features to add, complete, and delete tasks. It dynamically organizes tasks and tracks both total and completed items in real-time.",
    platform: "React",
    features: [
      "Add new tasks dynamically",
      "Mark tasks as complete or pending",
      "Delete unwanted tasks",
      "Track total and completed items in real-time",
      "Responsive and clean UI with Tailwind CSS",
    ],
    technologies: ["React.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/JatinSaxena02/Basic_Todo",
      live: "https://taskmind.netlify.app/",
    },
    images: imageList.basictodo,
    color: "text-green-500",
    boxShadow:
      "0px 0px 8px rgba(0, 255, 255, 0.4), 0px 0px 15px rgba(0, 255, 255, 0.6)",
    conclusion:
      "This project demonstrates the basics of React state management and UI rendering with Tailwind CSS. It provides a clean, responsive interface for managing daily tasks efficiently.",
  },
];

export default projectDetails;
