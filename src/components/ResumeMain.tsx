import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, GraduationCap, User, Code } from "lucide-react";

const ResumeMain = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application featuring user authentication, product catalog, shopping cart, and Stripe payment integration.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      github: "https://github.com/olehtatar/ecommerce-app",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      name: "Task Management App",
      description:
        "A collaborative tool with real-time updates, team features, and project tracking, built with the MERN stack and Socket.io.",
      tech: ["React", "Redux", "Express.js", "Socket.io"],
      github: "https://github.com/olehtatar/task-manager",
      demo: "https://taskmanager-demo.netlify.app"
    },
    {
      name: "Personal Blog Platform",
      description:
        "A full-featured blogging platform with a Markdown editor, comments, and an admin dashboard for content management.",
      tech: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL"],
      github: "https://github.com/olehtatar/blog-platform",
      demo: "https://blog-platform-demo.vercel.app"
    },
    {
      name: "Real-Time Chat Application",
      description:
        "A web-based chat application supporting private and group messaging, built with WebSockets for instant communication.",
      tech: ["React", "Node.js", "WebSocket", "Redis"],
      github: "https://github.com/olehtatar/real-time-chat",
      demo: "https://chat-app-demo.netlify.app"
    }
  ];

  return (
    <div className="col-span-1 lg:col-span-2 p-8 lg:p-10 bg-background">
      <section className="p-6 border rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <User className="w-6 h-6 mr-3" />
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Passionate Fullstack Developer with expertise in the MERN stack and
          TypeScript. A recent graduate of the intensive GoIT Academy program, I
          am committed to writing clean, efficient code and creating exceptional
          user experiences. I am eager to contribute to innovative projects and
          grow within a dynamic tech team.
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
              <span className="font-semibold">HTML+CSS:</span> Responsive
              Design, Flexbox, Forms.
            </li>
            <li>
              <span className="font-semibold">JavaScript:</span> ES6+, DOM,
              Asynchrony (Promises, async/await), HTTP requests.
            </li>
            <li>
              <span className="font-semibold">React:</span> Components, Hooks,
              State Management (Redux), Routing.
            </li>
            <li>
              <span className="font-semibold">Node.js:</span> Express, REST API,
              MongoDB, Authentication (JWT), Docker.
            </li>
            <li>
              <span className="font-semibold">TypeScript:</span> Typification
              basics with React.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeMain;
