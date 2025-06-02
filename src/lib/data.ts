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
    title: 'Authstream',
    description:
      'Self-hosted Authentication & Authorization system acting as a third-party service, reverse proxied via NGINX. Implements real-time data sync using Debezium (CDC), Redis Stream, and async workers for low latency and data consistency.',
    technologies: [
      'React',
      'TypeScript',
      'Shadcn UI',
      'Tailwind CSS',
      'Java Spring Boot',
      'NGINX',
      'Docker',
      'Redis',
      'Debezium',
      'PostgreSQL',
    ],
    image: '/authstream.jpg', 
    demoLink: '#', 
    codeLink: 'https://github.com/Lee-412/Authstream',
  },
  {
    title: 'ShortenURL',
    description:
      'High-performance URL shortening system using a microservices architecture. Handles high traffic with Redis caching, Kafka message queue, and optimized PostgreSQL queries via indexing.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Mantine UI',
      'Express.js',
      'Docker',
      'Kafka',
      'Redis',
      'PostgreSQL',
      'Sequelize',
    ],
    image: '/shortenurl.jpg',
    demoLink: '#', 
    codeLink: 'https://github.com/LeHien2818/Shorten_URL', 
  },
  
  {
    title: 'Authstream',
    description:
      'Một dự án học tập ngôn ngữ ký hiệu cho người câm điếc.',
    technologies: [
      'React',
      'TypeScript',
      'Shadcn UI',
      'Tailwind CSS',
      'Java Spring Boot',
      'NGINX',
      'Docker',
      'Redis',
      'Debezium',
      'PostgreSQL',
    ],
    image: '/authstream.jpg', 
    demoLink: 'https://authstream-demo.example.com', 
    codeLink: 'https://github.com/Lee-412/TTNM_deaf_learning',
  },
  {
    title: 'ShortenURL',
    description:
      'High-performance URL shortening system using a microservices architecture. Handles high traffic with Redis caching, Kafka message queue, and optimized PostgreSQL queries via indexing.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Mantine UI',
      'Express.js',
      'Docker',
      'Kafka',
      'Redis',
      'PostgreSQL',
      'Sequelize',
    ],
    image: '/shortenurl.jpg',
    demoLink: 'https://shortenurl-demo.example.com', 
    codeLink: 'https://github.com/Lee-412/ShortenURL', 
  },
]

// Skills data by category
export const frontendSkills: string[] = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Query",
  "React Router",
  "Tailwind CSS",
  "Shadcn-ui",
  "Mantine UI",
  "Antd"
]

export const backendSkills: string[] = [
  "Java Spring Boot Framework",
  "Express.js",
  "RESTful APIs (Axios, fetch)",
  "PostgreSQL/MySQL",
  "MongoDB",
  "Authentication ",
  "Authorization",
  "JWT, Session, Cookie"
]

export const otherSkills: string[] = [
  "Git & GitHub",
  "Docker",
  "WebSocket",
  "Agile Methodology",
  "Problem Solving",
]