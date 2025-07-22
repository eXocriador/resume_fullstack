import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, ExternalLink, Github, Code, Users, Briefcase, GraduationCap } from "lucide-react";

const ResumeMain = () => {
  const projects = [
    {
      name: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
      tech: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/olehtatar/ecommerce-app",
      demo: "https://ecommerce-demo.vercel.app",
      highlights: ["Responsive design", "JWT authentication", "Real-time inventory", "Payment processing"]
    },
    {
      name: "Task Management App",
      description: "Collaborative task management tool with real-time updates, team collaboration features, and project tracking.",
      tech: ["React", "Redux Toolkit", "Express.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com/olehtatar/task-manager",
      demo: "https://taskmanager-demo.netlify.app",
      highlights: ["Real-time collaboration", "Team management", "Project analytics", "Drag & drop interface"]
    },
    {
      name: "Weather Dashboard",
      description: "Interactive weather application with geolocation, 7-day forecast, and personalized weather alerts.",
      tech: ["React", "TypeScript", "Weather API", "Chart.js", "PWA"],
      github: "https://github.com/olehtatar/weather-app",
      demo: "https://weather-dashboard-demo.netlify.app",
      highlights: ["PWA capabilities", "Geolocation", "Interactive charts", "Offline functionality"]
    }
  ];

  const experience = [
    {
      title: "Junior Fullstack Developer",
      company: "Tech Solutions Ltd.",
      location: "Kyiv, Ukraine",
      period: "2025 - Present",
      type: "Full-time",
      description: "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built responsive web applications serving 10,000+ users",
        "Improved application performance by 40% through code optimization",
        "Implemented automated testing reducing bugs by 60%",
        "Mentored 2 junior developers in modern web development practices"
      ]
    }
  ];

  return (
    <div className="flex-1 p-8 bg-background">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-resume-text mb-2">Fullstack Developer</h1>
        <p className="text-lg text-resume-muted leading-relaxed max-w-4xl">
          Passionate Fullstack Developer with expertise in React, Node.js, and TypeScript. 
          Recently completed intensive Fullstack Development program at GoIT Academy. 
          Committed to writing clean, efficient code and creating exceptional user experiences. 
          Eager to contribute to innovative projects and grow within a dynamic tech team.
        </p>
      </div>

      {/* Experience */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-resume-text">
            <Briefcase className="w-6 h-6 mr-3 text-primary" />
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experience.map((job, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-resume-section">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-resume-text">{job.title}</h3>
                  <p className="text-lg text-primary font-medium">{job.company}</p>
                  <div className="flex items-center text-sm text-resume-muted mt-1">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="mr-4">{job.location}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{job.period}</span>
                  </div>
                </div>
                <Badge variant="outline" className="mt-2 lg:mt-0">
                  {job.type}
                </Badge>
              </div>
              <p className="text-resume-muted mb-4">{job.description}</p>
              <div className="space-y-2">
                {job.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-resume-muted">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-resume-text">
            <Code className="w-6 h-6 mr-3 text-primary" />
            Featured Projects
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-resume-section">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <h3 className="text-xl font-semibold text-resume-text mb-2">{project.name}</h3>
                <div className="flex gap-2">
                  <a 
                    href={project.github} 
                    className="flex items-center text-sm text-primary hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center text-sm text-primary hover:underline"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
              <p className="text-resume-muted mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-resume-muted">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education & Certifications */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-resume-text">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            Education & Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border border-border rounded-lg p-6 bg-resume-section">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-resume-text">Fullstack Developer Certificate</h3>
                <p className="text-lg text-primary font-medium">GoIT Academy</p>
                <div className="flex items-center text-sm text-resume-muted mt-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2025</span>
                  <span className="ml-4 text-xs">ID: 39063</span>
                </div>
              </div>
              <Badge variant="outline">
                680+ Hours
              </Badge>
            </div>
            <p className="text-resume-muted mb-4">
              Comprehensive full-stack development program covering modern web technologies, 
              best practices, and real-world project development.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                "React & Redux", "Node.js & Express", "MongoDB & Databases",
                "TypeScript", "Authentication & Security", "REST API Development",
                "Version Control (Git)", "Agile Methodologies", "Team Collaboration"
              ].map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-resume-muted">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center pt-6 border-t border-border">
        <p className="text-sm text-resume-muted">
          Available for fullstack developer positions • Open to relocation • Ready to start immediately
        </p>
      </div>
    </div>
  );
};

export default ResumeMain;