import { Mail, Phone, MapPin, Github, Linkedin, Globe, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeSidebar = () => {
  const frontendSkills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Redux Toolkit", "React Router", "Tailwind CSS", "Responsive Design"
  ];

  const backendSkills = [
    "Node.js", "Express.js", "MongoDB", "REST API", 
    "Authentication", "JWT", "Docker", "Swagger"
  ];

  const tools = [
    "Git", "GitHub", "Vite", "Webpack", "Postman", "VS Code"
  ];

  return (
    <div className="bg-resume-sidebar p-6 text-resume-sidebar-foreground min-h-screen lg:min-h-screen print:min-h-screen">
      {/* Profile */}
      <div className="mb-8 text-center">
        <div className="w-32 h-32 bg-resume-accent rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-4xl font-bold text-resume-text">OT</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Oleh Tatarynov</h1>
        <p className="text-lg opacity-90">Fullstack Developer</p>
      </div>

      {/* Contact */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 opacity-70" />
              <span>oleh.tatarynov@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 opacity-70" />
              <span>+380 XX XXX XX XX</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 opacity-70" />
              <span>Kyiv, Ukraine</span>
            </div>
            <div className="flex items-center">
              <Github className="w-4 h-4 mr-3 opacity-70" />
              <span>github.com/olehtatar</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-3 opacity-70" />
              <span>linkedin.com/in/olehtatar</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-3 opacity-70" />
              <span>olehtatar.dev</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Frontend Skills */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            {frontendSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/20 text-resume-sidebar-foreground border-white/30 hover:bg-white/30 text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Backend Skills */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Backend</h2>
          <div className="flex flex-wrap gap-2">
            {backendSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/20 text-resume-sidebar-foreground border-white/30 hover:bg-white/30 text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tools */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Tools & Others</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/20 text-resume-sidebar-foreground border-white/30 hover:bg-white/30 text-xs"
              >
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Languages</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Ukrainian</span>
              <Badge variant="outline" className="border-white/30 text-resume-sidebar-foreground text-xs">
                Native
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">English</span>
              <Badge variant="outline" className="border-white/30 text-resume-sidebar-foreground text-xs">
                B2
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Education
          </h2>
          <div className="space-y-3 text-sm">
            <div>
              <div className="font-medium">Fullstack Developer</div>
              <div className="text-xs opacity-75">GoIT Academy</div>
              <div className="flex items-center text-xs opacity-75 mt-1">
                <Calendar className="w-3 h-3 mr-1" />
                <span>2025</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeSidebar;