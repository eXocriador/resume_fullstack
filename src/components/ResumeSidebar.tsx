import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Wrench,
  Languages,
  Download
} from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "@/components/ui/button";
import { ResumePDF } from "./ResumePDF";
import { Badge } from "@/components/ui/badge";

const techSkills = [
  {
    category: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "GraphQL"]
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub", "Vite", "Postman", "Swagger"]
  }
];

const ContactLink = ({ href, icon: Icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center text-sm transition-colors hover:text-primary"
  >
    <Icon className="mr-3 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
    <span>{text}</span>
  </a>
);

const ResumeSidebar = () => {
  return (
    <div className="flex flex-col bg-secondary/30 text-secondary-foreground dark:bg-secondary/20">
      <div className="flex-1 space-y-8 p-8 lg:p-10">
        {/* Profile */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary/5 to-primary/20 p-1 ring-2 ring-primary/20">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
              <span className="text-4xl font-bold text-primary">OT</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Oleh Tatarynov</h1>
          <p className="text-base text-muted-foreground">
            Full-Stack Developer
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Contact
          </h2>
          <div className="space-y-3 pt-2 text-left">
            <ContactLink
              href="mailto:exocriador@gmail.com"
              icon={Mail}
              text="exocriador@gmail.com"
            />
            <div className="group flex items-center text-sm">
              <Phone className="mr-3 h-4 w-4 text-muted-foreground" />
              <span>+380509122316</span>
            </div>
            <div className="group flex items-center text-sm">
              <MapPin className="mr-3 h-4 w-4 text-muted-foreground" />
              <span>Kherson, Ukraine</span>
            </div>
            <ContactLink
              href="https://github.com/exocriador"
              icon={Github}
              text="github.com/exocriador"
            />
            <ContactLink
              href="https://linkedin.com/in/exocriador"
              icon={Linkedin}
              text="linkedin.com/in/exocriador"
            />
            <ContactLink
              href="https://exocriador.dev"
              icon={Globe}
              text="exocriador.dev"
            />
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-4 text-left">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Technical Skills
          </h2>
          <div className="space-y-4 pt-2">
            {techSkills.map(({ category, skills }) => (
              <div key={category}>
                <h3 className="mb-2 text-sm font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="space-y-4 text-left">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-primary">
            Languages
          </h2>
          <div className="space-y-2 pt-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Ukrainian</span>
              <span className="text-muted-foreground">Native</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Russian</span>
              <span className="text-muted-foreground">Native</span>
            </div>
            <div className="flex items-center justify-between">
              <span>English</span>
              <span className="text-muted-foreground">Upper-Intermediate</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 mt-auto border-t border-border">
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
