import { Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResumeSidebar = () => {
  const skills = [
    "HTML/CSS", "JavaScript", "TypeScript", "React", "Node.js", 
    "MongoDB", "Express", "Redux", "Git", "REST API",
    "Docker", "Swagger", "Authentication", "Responsive Design"
  ];

  const languages = [
    { name: "Українська", level: "Рідна" },
    { name: "English", level: "Intermediate" }
  ];

  return (
    <div className="bg-resume-sidebar p-6 text-resume-sidebar-foreground min-h-screen lg:min-h-screen print:min-h-screen">
      {/* Profile Photo */}
      <div className="mb-8 text-center">
        <div className="w-32 h-32 bg-resume-accent rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-4xl font-bold text-resume-text">OT</span>
        </div>
        <h1 className="text-2xl font-bold mb-2">Олег Татаринов</h1>
        <p className="text-lg opacity-90">Fullstack Developer</p>
      </div>

      {/* Contact Info */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Контакти
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 opacity-70" />
              <span>oleh.tatarynov@email.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 opacity-70" />
              <span>+380 XX XXX XX XX</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-3 opacity-70" />
              <span>Україна</span>
            </div>
            <div className="flex items-center">
              <Github className="w-4 h-4 mr-3 opacity-70" />
              <span>github.com/olehtatar</span>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-3 opacity-70" />
              <span>linkedin.com/in/olehtatar</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Технічні навички</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/20 text-resume-sidebar-foreground border-white/30 hover:bg-white/30"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Languages */}
      <Card className="mb-6 bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4">Мови</h2>
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm">{lang.name}</span>
                <Badge variant="outline" className="border-white/30 text-resume-sidebar-foreground">
                  {lang.level}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Certification */}
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Сертифікація
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 opacity-70" />
              <span>Жовтень 2025</span>
            </div>
            <p className="text-xs opacity-75">Унікальний ID: 39063</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeSidebar;