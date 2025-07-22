import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  GraduationCap,
  User,
  Code,
  Zap,
  Users,
  BrainCircuit,
  MessageCircle
} from "lucide-react";

const CompetencyItem = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div>
    <div className="flex items-center mb-1">
      {icon}
      <h4 className="font-semibold ml-2">{title}</h4>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed ml-7">
      {description}
    </p>
  </div>
);

const ResumeMain = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "Engineered a full-stack e-commerce application featuring JWT-based user authentication, a dynamic product catalog, shopping cart functionality, and seamless payment processing with Stripe integration.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/olehtatar/ecommerce-app",
      demo: "https://ecommerce-demo.vercel.app"
    },
    {
      name: "Task Management App",
      description:
        "Developed a collaborative task management tool using the MERN stack, enabling real-time project updates and team interactions through Socket.io for instant communication.",
      tech: ["React", "Redux", "Express.js", "Socket.io", "MongoDB"],
      github: "https://github.com/olehtatar/task-manager",
      demo: "https://taskmanager-demo.netlify.app"
    },
    {
      name: "Personal Blog Platform",
      description:
        "Built a full-featured blogging platform with Next.js, featuring a Markdown editor for content creation, a comment system for user engagement, and a GraphQL API for efficient data management.",
      tech: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL"],
      github: "https://github.com/olehtatar/blog-platform",
      demo: "https://blog-platform-demo.vercel.app"
    }
  ];

  const competencies = [
    {
      icon: <BrainCircuit className="w-5 h-5 text-primary" />,
      title: "Problem-Solving",
      description:
        "Deconstructed complex user requirements into clean, scalable, and maintainable code solutions across multiple projects."
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      title: "Team Collaboration",
      description:
        "Thrived in agile environments, utilizing Git for version control and participating in code reviews to ensure high-quality standards."
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-primary" />,
      title: "Effective Communication",
      description:
        "Articulated technical concepts and project progress clearly to both technical and non-technical stakeholders."
    },
    {
      icon: <Zap className="w-5 h-5 text-primary" />,
      title: "Adaptability",
      description:
        "Quickly learned and applied new technologies, including GraphQL and WebSockets, to meet project-specific needs."
    }
  ];

  return (
    <div className="col-span-1 lg:col-span-2 p-8 lg:p-10 bg-background">
      {/* Summary Section */}
      <section className="p-6 border rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <User className="w-6 h-6 mr-3" />
          Summary
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Results-oriented Full-Stack Developer and recent GoIT Academy graduate
          with hands-on experience in the MERN stack and TypeScript. Proven
          ability to build and deploy scalable web applications, demonstrated
          through multiple full-cycle projects. Eager to apply strong
          problem-solving skills and a passion for clean, efficient code to
          contribute to a dynamic tech team.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-6 border rounded-lg mb-8">
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
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors hover:bg-accent rounded-md p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors hover:bg-accent rounded-md p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Demo
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tech.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="outline"
                    className="font-normal border-primary/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="p-6 border rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <Zap className="w-6 h-6 mr-3" />
          Core Competencies
        </h2>
        <div className="space-y-4">
          {competencies.map((skill, index) => (
            <CompetencyItem
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="p-6 border rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
          <GraduationCap className="w-6 h-6 mr-3" />
          Education
        </h2>
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h3 className="text-xl font-semibold">
              Full-Stack Developer Certificate
            </h3>
            <div className="text-sm text-muted-foreground">July 2025</div>
          </div>
          <h4 className="text-lg font-medium text-primary mb-3">
            GoIT Academy
          </h4>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Completed a comprehensive 10-month program (680+ hours) focused on
            modern web technologies, developing 3 team projects and over 30
            technical assignments.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
            <li>
              <span className="font-semibold">Core Technologies:</span> HTML,
              CSS, Responsive Design, JavaScript (ES6+), DOM.
            </li>
            <li>
              <span className="font-semibold">Frontend:</span> React
              (Components, Hooks, State Management with Redux), TypeScript
              basics.
            </li>
            <li>
              <span className="font-semibold">Backend:</span> Node.js, Express,
              REST API development, MongoDB, JWT Authentication.
            </li>
            <li>
              <span className="font-semibold">Developer Tools:</span> Git,
              Docker, Agile Methodologies.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ResumeMain;
