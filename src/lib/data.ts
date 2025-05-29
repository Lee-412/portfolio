interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  demoLink: string
  codeLink: string
}
export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering and cart functionality.",
    image: "https://via.placeholder.com/500x300",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop task management application with team collaboration features.",
    image: "https://via.placeholder.com/500x300",
    technologies: ["React", "TypeScript", "Firebase", "Material UI"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website for a photographer with image gallery.",
    image: "https://via.placeholder.com/500x300",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Financial Dashboard",
    description: "Interactive dashboard with data visualization for financial analytics.",
    image: "https://via.placeholder.com/500x300",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Social Media App",
    description: "A social networking platform with real-time messaging and notifications.",
    image: "https://via.placeholder.com/500x300",
    technologies: ["React", "Socket.io", "MongoDB", "Express"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location-based services.",
    image: "https://via.placeholder.com/500x300",
    technologies: ["React Native", "Redux", "Weather API", "Geolocation"],
    demoLink: "#",
    codeLink: "#",
  },
]

// Skills data by category
export const frontendSkills: string[] = [
  "HTML5 & CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Responsive Design",
  "UI/UX Principles",
]

export const backendSkills: string[] = [
  "Node.js",
  "Express",
  "RESTful APIs",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Authentication",
]

export const otherSkills: string[] = [
  "Git & GitHub",
  "Webpack",
  "Jest & Testing",
  "CI/CD",
  "Performance Optimization",
  "Agile Methodology",
  "Technical Writing",
  "Problem Solving",
]