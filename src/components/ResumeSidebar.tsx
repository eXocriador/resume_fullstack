import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  MessageSquare,
  Wrench,
  Languages
} from "lucide-react";

const ResumeSidebar = () => {
  const techSkills = {
    Frontend:
      "React, TypeScript, JavaScript (ES6+), HTML5 & CSS3, Tailwind CSS, Redux Toolkit",
    Backend: "Node.js, Express.js, MongoDB, REST API, JWT",
    Tools: "Git, GitHub, Docker, Vite, Postman, Swagger"
  };

  const softSkills =
    "Team Collaboration, Agile Methodologies, Problem-Solving, Effective Communication, Adaptability";

  return (
    <div className="bg-secondary/50 p-8 lg:p-10 text-secondary-foreground space-y-8">
      {/* Profile */}
      <div className="text-center">
        <div className="w-32 h-32 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-4xl font-bold text-primary">OT</span>
        </div>
        <h1 className="text-3xl font-bold mb-1">Oleh Tatarynov</h1>
        <p className="text-lg text-muted-foreground">Fullstack Developer</p>
      </div>

      {/* Contact */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center text-primary">
          <Mail className="w-5 h-5 mr-3" />
          Contact
        </h2>
        <div className="space-y-3 text-sm pt-2">
          <a
            href="mailto:oleh.tatarynov@gmail.com"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>oleh.tatarynov@gmail.com</span>
          </a>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>+380 XX XXX XX XX</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>Kyiv, Ukraine</span>
          </div>
          <a
            href="https://github.com/olehtatar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>github.com/olehtatar</span>
          </a>
          <a
            href="https://linkedin.com/in/olehtatar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>linkedin.com/in/olehtatar</span>
          </a>
          <a
            href="https://olehtatar.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4 mr-3 text-muted-foreground" />
            <span>olehtatar.dev</span>
          </a>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center text-primary">
          <Wrench className="w-5 h-5 mr-3" />
          Technical Skills
        </h2>
        <div className="space-y-4 pt-2">
          {Object.entries(techSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-md font-semibold mb-1">{category}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skills}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center text-primary">
          <MessageSquare className="w-5 h-5 mr-3" />
          Soft Skills
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed pt-2">
          {softSkills}
        </p>
      </div>

      {/* Languages */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center text-primary">
          <Languages className="w-5 h-5 mr-3" />
          Languages
        </h2>
        <div className="space-y-2 pt-2">
          <div className="flex justify-between items-center text-sm">
            <span>Ukrainian</span>
            <span className="text-muted-foreground">Native</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>English</span>
            <span className="text-muted-foreground">
              Upper-Intermediate (B2)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSidebar;
