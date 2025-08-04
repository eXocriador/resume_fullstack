import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, GraduationCap, User, Code } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce app with user authentication, dynamic product catalog, and Stripe integration. Optimized the checkout process, which could potentially increase conversion rates by 15%.",
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/exocriador",
    demo: "https://exocriador.dev"
  },
  {
    name: "Task Management App",
    description:
      "A MERN-stack collaborative tool with real-time updates via Socket.io. Implemented team-based project boards, improving task tracking efficiency for small teams.",
    tech: ["React", "Redux", "Express.js", "Socket.io"],
    github: "https://github.com/exocriador",
    demo: "https://exocriador.dev"
  },
  {
    name: "Personal Blog Platform",
    description:
      "Developed a blog with a Markdown editor, leveraging a GraphQL API and PostgreSQL for efficient data management. Achieved a 30% faster content delivery compared to a traditional REST API.",
    tech: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL"],
    github: "https://github.com/exocriador",
    demo: "https://exocriador.dev"
  }
];

const ResumeMain = () => {
  return (
    <div className="col-span-1 p-8 text-left lg:col-span-2 lg:p-10">
      <section className="mb-8">
        <h2 className="mb-4 flex items-center text-2xl font-bold text-primary">
          <User className="mr-3 h-6 w-6" />
          Summary
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Full-Stack Developer with a solid foundation in the MERN stack and
          TypeScript, recently graduated from GoIT Academy. I specialize in
          transforming complex requirements into clean, high-performance web
          applications. My focus is on writing scalable code and building
          intuitive user interfaces to solve real-world problems.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-6 flex items-center text-2xl font-bold text-primary">
          <Code className="mr-3 h-6 w-6" />
          Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <div className="mt-1 flex gap-4 sm:mt-0">
                  <a
                    href={project.github}
                    className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" /> Demo
                  </a>
                </div>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              {index < projects.length - 1 && <Separator className="mt-6" />}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 flex items-center text-2xl font-bold text-primary">
          <GraduationCap className="mr-3 h-6 w-6" />
          Education
        </h2>
        <div>
          <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-xl font-semibold">
              Fullstack Developer Certificate
            </h3>
            <div className="text-sm text-muted-foreground">2024 - 2025</div>
          </div>
          <h4 className="mb-3 text-lg font-medium text-primary">
            GoIT Academy
          </h4>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            A comprehensive 10-month program (680+ hours) focused on modern web
            technologies and best practices through hands-on learning, including
            3 team projects and over 30 technical assignments.
          </p>
          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">Core Web:</span>{" "}
              Responsive Design, Flexbox, Grid, HTML5, CSS3.
            </li>
            <li>
              <span className="font-semibold text-foreground">JavaScript:</span>{" "}
              ES6+, DOM API, Asynchrony (Promises, async/await), REST API.
            </li>
            <li>
              <span className="font-semibold text-foreground">React:</span>{" "}
              Component-based architecture, Hooks, State Management (Redux),
              Routing.
            </li>
            <li>
              <span className="font-semibold text-foreground">Node.js:</span>{" "}
              Express, MongoDB, JWT Authentication, WebSockets, Docker basics.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeMain;
