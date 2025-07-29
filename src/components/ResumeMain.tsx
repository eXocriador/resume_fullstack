import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, GraduationCap, User, Code } from "lucide-react";

export const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "Developed a full-stack e-commerce application featuring robust user authentication, a dynamic product catalog, an intuitive shopping cart, and seamless Stripe payment integration.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/olehtatar/ecommerce-app",
    demo: "https://ecommerce-demo.vercel.app"
  },
  {
    name: "Task Management App",
    description:
      "Built a collaborative tool with real-time updates using Socket.io. Implemented team features and project tracking boards, utilizing the MERN stack for a comprehensive solution.",
    tech: ["React", "Redux", "Express.js", "Socket.io"],
    github: "https://github.com/olehtatar/task-manager",
    demo: "https://taskmanager-demo.netlify.app"
  },
  {
    name: "Personal Blog Platform",
    description:
      "Created a full-featured blogging platform with a Markdown editor for rich content creation. Engineered a GraphQL API and a PostgreSQL database for efficient data management.",
    tech: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL"],
    github: "https://github.com/olehtatar/blog-platform",
    demo: "https://blog-platform-demo.vercel.app"
  },
  {
    name: "Real-Time Chat Application",
    description:
      "Engineered a web-based chat application supporting private and group messaging. Utilized WebSockets for instant communication and Redis for efficient session handling.",
    tech: ["React", "Node.js", "WebSocket", "Redis"],
    github: "https://github.com/olehtatar/real-time-chat",
    demo: "https://chat-app-demo.netlify.app"
  }
];

const ResumeMain = () => {
  return (
    <div className="col-span-1 lg:col-span-2 p-8 lg:p-10 bg-background text-left">
      <section className="p-6 border rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <User className="w-6 h-6 mr-3" />
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          A results-oriented Full-Stack Developer and recent GoIT Academy
          graduate, passionate about building robust and user-friendly web
          applications with the MERN stack and TypeScript. I transform complex
          problems into clean, efficient code and excel in dynamic team
          environments, aiming to contribute to innovative projects.
        </p>
      </section>

      <section className="p-6 border rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <Code className="w-6 h-6 mr-3" />
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={index < projects.length - 1 ? "border-b pb-6" : ""}
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <GraduationCap className="w-6 h-6 mr-3" />
          Education
        </h2>
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-semibold">
              Fullstack Developer Certificate
            </h3>
            <div className="text-sm text-muted-foreground">10/07/2025</div>
          </div>
          <h4 className="text-lg font-medium text-primary mb-3">
            GoIT Academy (ID: 39063)
          </h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A comprehensive 10-month program (680+ hours) covering modern web
            technologies and best practices through hands-on projects, including
            3 team projects and 30+ technical assignments.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
            <li>
              <span className="font-semibold text-foreground">HTML+CSS:</span>{" "}
              Responsive Design, Flexbox, Forms.
            </li>
            <li>
              <span className="font-semibold text-foreground">JavaScript:</span>{" "}
              ES6+, DOM, Asynchrony (Promises, async/await), HTTP requests.
            </li>
            <li>
              <span className="font-semibold text-foreground">React:</span>{" "}
              Components, Hooks, State Management (Redux), Routing.
            </li>
            <li>
              <span className="font-semibold text-foreground">Node.js:</span>{" "}
              Express, REST API, MongoDB, Authentication (JWT), Docker.
            </li>
            <li>
              <span className="font-semibold text-foreground">TypeScript:</span>{" "}
              Typification basics with React.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeMain;
