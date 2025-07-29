import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Wrench,
  Languages
} from "lucide-react";
// import { ThemeSwitcher } from "./ThemeSwitcher"; // Імпортуємо перемикач тем

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ResumePDF } from "./ResumePDF"; // Імпортуємо наш PDF компонент

const ResumeSidebar = () => {
  const techSkills = {
    "Programming Languages": "TypeScript, JavaScript (ES6+)",
    Frontend: "React, Next.js, Redux Toolkit, HTML5, CSS3, Tailwind CSS",
    Backend: "Node.js, Express.js",
    Databases: "MongoDB, PostgreSQL, Redis",
    APIs: "REST API, GraphQL, WebSockets",
    "Tools & Platforms":
      "Git, GitHub, Docker, Vite, Postman, Swagger, Stripe API"
  };

  return (
    <div className="flex flex-col bg-secondary/50 text-secondary-foreground">
      <div className="p-8 lg:p-10 space-y-8 flex-1">
        {/* Profile */}
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">OT</span>
          </div>
          <h1 className="text-4xl font-extrabold mb-1">Oleh Tatarynov</h1>
          <p className="text-lg text-muted-foreground">Full-Stack Developer</p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center text-primary">
            <Mail className="w-5 h-5 mr-3" />
            Contact
          </h2>
          <div className="space-y-3 text-xs pt-2">
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
              href="https://github.com/exocriador"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4 mr-3 text-muted-foreground" />
              <span>github.com/exocriador</span>
            </a>
            <a
              href="https://linkedin.com/in/exocriador"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4 mr-3 text-muted-foreground" />
              <span>linkedin.com/in/exocriador</span>
            </a>
            <a
              href="https://exocriador.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4 mr-3 text-muted-foreground" />
              <span>exocriador.dev</span>
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
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {skills}
                </p>
              </div>
            ))}
          </div>
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

      {/* Theme Switcher */}
      {/* <ThemeSwitcher /> */}
      <div className="p-4 mt-auto">
        <PDFDownloadLink
          document={<ResumePDF />}
          fileName="Oleh_Tatarynov_Resume.pdf"
        >
          {({ loading }) => (
            <Button className="w-full" disabled={loading}>
              <Download className="mr-2 h-4 w-4" />
              {loading ? "Generating PDF..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ResumeSidebar;
