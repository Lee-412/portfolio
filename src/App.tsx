import { Github, Mail, MapPin, Phone, ArrowRight, Code, ExternalLink } from 'lucide-react'
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Badge } from "./components/ui/badge"
import { backendSkills, frontendSkills, otherSkills, projects } from './lib/data'

const App = () => {



  return (
    <div className={`min-h-screen `}>
      {/* Header */}
      <header className="sticky top-0 z-10 w-full border-b border-gray-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="text-xl font-bold tracking-tight">
            Lee Duc
          </a>

          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Skills            </a>
            <a href="#projects" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Projects            </a>
            <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">

            {/* Contact Button */}
            <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <a href="#contact" className="gap-2 group">
                Contact in
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with gradient background */}
        <section
          className="relative overflow-hidden py-20 md:py-28"
          style={{
            background: "linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20230930/pngtree-web-development-concept-programming-and-coding-illustrated-in-3d-image_13511770.png")`,

            }}
          ></div>
          <div className="container relative px-4 md:px-6">
            <div id="about" className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
              <div className="md:w-2/5 flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl transition-transform hover:scale-105 duration-300">
                  <div className="absolute "></div>
                  <img
                    src="/portfolio/quansu.jpg"
                    alt="Lee Duc"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "";
                    }}
                  />
                </div>
              </div>
              <div className="md:w-3/5">
                <h1 className="text-5xl font-bold mb-4 tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  Lee Duc
                </h1>
                <h2 className="text-2xl text-gray-300 mb-6 font-light">Fullstack web Developer</h2>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl">
                  <p>                  Chào mọi người, Mình là Đức, sinh viên năm ba ngành Khoa học máy tính, trường Đại học Công nghệ (ĐHQGHN). Hiện tại, mình vẫn đang trong quá trình học tập và chuẩn bị làm khóa luận tốt nghiệp tại trường.
                  </p>
                  <p>                  Mình thích công nghệ, tìm hiểu những gì mới mẻ. Cũng nhờ ngành học mà mình có thể tiếp cận tới nhiều người, nhiều kiến thức và nhiều lĩnh vực hơn, mặc dù một số chỉ nằm ở mức độ xem và sử dụng ở mức độ tìm hiểu cơ bản.
                  </p>
                  <p>Hiện tại, mình đang theo mảng lập trình website, với Java cho backend. Trong quá trình học, mình cũng có 1 số project nhỏ, đủ để mình học tập và rèn luyện kiến thức.</p>
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <Badge variant="outline" className="px-3 py-1 text-sm border-gray-700 bg-gray-800/50 text-gray-200">
                    Java Spring Boot
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-gray-700 bg-gray-800/50 text-gray-200">
                    React
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-gray-700 bg-gray-800/50 text-gray-200">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-gray-700 bg-gray-800/50 text-gray-200">
                    RESTful APIs
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-gray-700 bg-gray-800/50 text-gray-200">
                    JWT, Session, Cookie
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm border-gray-700 bg-gray-800/50 text-gray-200">
                    Docker
                  </Badge>
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0"
                  >
                    <a href="#projects">View My Work</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-gray-700 text-white hover:bg-gray-800">
                    <a href="#contact">Contact Me</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20" style={{ background: "linear-gradient(to bottom, #0f172a, #020617)" }}>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Professional Skills
              </h2>
              <p className="text-gray-300">
                Trong quá trình học tập, mình có tiếp cận, nghiên cứu và sử dụng một số công nghê, ứng dụng nó trong việc lập trình website.            </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2 text-blue-400">
                  Frontend Development
                </h3>
                <ul className="space-y-2">
                  {frontendSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2 text-purple-400">
                  Backend Development
                </h3>
                <ul className="space-y-2">
                  {backendSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 border-b border-gray-800 pb-2 text-indigo-400">
                  Tools & Others
                </h3>
                <ul className="space-y-2">
                  {otherSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                      <span className="text-gray-300">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20" style={{ background: "linear-gradient(to bottom, #020617, #0f172a)" }}>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Featured Projects
              </h2>
              <p className="text-gray-300">
                Dưới đây là một số dự án gần đây mà mình đã thực hiện.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-gray-800 bg-gray-900/50 backdrop-blur-sm text-white"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={project.image || ""}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        color='black'
                        className="text-white border-white hover:bg-white/20 hover:text-white"
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="text-white border-white hover:bg-white/20 hover:text-white"
                      >
                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Code className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-gray-700 bg-gray-800/50 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20" style={{ background: "linear-gradient(to bottom, #0f172a, #000000)" }}>
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Get In Touch
              </h2>
              <p className="text-gray-300">
                Mình luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội để trở thành một phần trong tầm nhìn của bạn. Liên hệ với mình nhé.            </p>
            </div>

            <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
              <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm text-white">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Feel free to reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">Email</h3>
                      <a
                        href="mailto:leeduchht@gmail.com"
                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        leeduchht@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">Phone</h3>
                      <a
                        href="tel:0353475295"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        0353475295
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">Ha Noi</h3>
                      <span className="text-sm text-gray-400">Cau Giay</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-800 p-3 rounded-full">
                      <Github className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-200">GitHub</h3>
                      <a
                        href="https://github.com/Lee-412"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        github.com/Lee-412
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm text-white">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-200">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-200">
                        Subject
                      </label>
                      <input
                        id="subject"
                        className="w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-200">
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="w-full rounded-md border border-gray-700 bg-gray-800/50 p-3 text-sm min-h-[120px] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Your message"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 joover:to-purple-700 border-0"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black text-wjoite">
        <div className="container px-4 py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Lee Duc
              </h3>
              <p className="text-gray-400 mb-4">
                A passionate web developer focused on creating beautiful and functional websites.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Web Development</li>
                <li className="text-gray-400">UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
              <address className="not-italic text-gray-400 space-y-2">
                <p>Cau Giay - Ha Noi</p>
                <p>leeduchht@gmail.com</p>
                <p>0353475295</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()}Lee Duc. Fullstack Website Developer.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
