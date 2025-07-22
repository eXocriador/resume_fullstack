import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Code, Users, Trophy } from "lucide-react";

const ResumeMain = () => {
  const courseStats = [
    { label: "Загальний час навчання", value: "684 години", icon: Clock },
    { label: "Практичних завдань", value: "36 завдань", icon: Code },
    { label: "Командних проектів", value: "3 проекти", icon: Users },
    { label: "Модулів вивчено", value: "6 технологій", icon: BookOpen }
  ];

  const modules = [
    {
      name: "HTML + CSS",
      duration: "120 годин",
      classes: "12 занять",
      assignments: "6 завдань",
      units: [
        "HTML Basics. Tags and Attributes",
        "CSS Basics Selectors Color. Text Decoration and Fonts", 
        "Block Model. Flexbox",
        "Decorative Elements",
        "Forms",
        "Responsive Design"
      ]
    },
    {
      name: "JavaScript",
      duration: "234 години",
      classes: "24 заняття",
      assignments: "12 завдань",
      units: [
        "Variables and types",
        "Branches. Cycles",
        "Arrays. Functions",
        "Objects",
        "Iterating array methods",
        "Prototypes and classes",
        "DOM and Events",
        "Patterns and Event Optimization",
        "Web storage. Bundler Vite",
        "Asynchrony and Date. Promises",
        "HTTP requests. Interaction with the backend",
        "Async/await. Pagination"
      ]
    },
    {
      name: "React",
      duration: "135 годин",
      classes: "16 занять",
      assignments: "8 завдань",
      units: [
        "Introducing React. Styling components",
        "Events and State of the component",
        "Forms",
        "HTTP-request. React hooks",
        "React router",
        "Redux. Redux Toolkit",
        "Asynchronous Redux",
        "Registration and User Login. Private and Public Routes"
      ]
    },
    {
      name: "Node.js",
      duration: "155 годин",
      classes: "14 занять",
      assignments: "7 завдань",
      units: [
        "Node.js Basics",
        "Express Basics. MongoDB",
        "Rest API. Code organization",
        "Data Validation. Pagination, Sorting And Filters",
        "Authentication",
        "Email Docker. Working with Images",
        "Authorization. Swagger And Openapi"
      ]
    },
    {
      name: "TypeScript",
      duration: "25 годин",
      classes: "3 заняття",
      assignments: "3 завдання",
      units: [
        "Base of TypeScript. Typification",
        "TypeScript and React"
      ]
    }
  ];

  const additionalModules = [
    { name: "Pre-course", duration: "6 годин" },
    { name: "Soft Skills", duration: "5 годин", classes: "2 заняття" },
    { name: "Career Skills", duration: "10 годин", classes: "1 заняття", assignments: "2 завдання" }
  ];

  return (
    <div className="flex-1 p-8 bg-background">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-resume-text mb-4">Fullstack Developer</h1>
        <p className="text-lg text-resume-muted leading-relaxed max-w-3xl">
          Випускник курсу Fullstack Developer в GoIT з повним циклом розробки веб-додатків. 
          Володію сучасними технологіями frontend та backend розробки, маю досвід роботи з командними проектами.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {courseStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-resume-accent border-0">
              <CardContent className="p-4 text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-resume-text">{stat.value}</div>
                <div className="text-sm text-resume-muted">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Course Modules */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-resume-text">
            <Trophy className="w-6 h-6 mr-3 text-primary" />
            Основні модулі курсу
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {modules.map((module, index) => (
            <div key={index} className="border border-border rounded-lg p-6 bg-resume-section">
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-resume-text">{module.name}</h3>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">{module.duration}</Badge>
                  <Badge variant="outline">{module.classes}</Badge>
                  <Badge variant="outline">{module.assignments}</Badge>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {module.units.map((unit, unitIndex) => (
                  <div key={unitIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm text-resume-muted">{unit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Additional Modules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-xl text-resume-text">
            <BookOpen className="w-5 h-5 mr-3 text-primary" />
            Додаткові модулі
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {additionalModules.map((module, index) => (
              <div key={index} className="p-4 bg-resume-accent rounded-lg">
                <h4 className="font-semibold text-resume-text mb-2">{module.name}</h4>
                <div className="space-y-1 text-sm text-resume-muted">
                  <div>{module.duration}</div>
                  {module.classes && <div>{module.classes}</div>}
                  {module.assignments && <div>{module.assignments}</div>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="text-sm text-resume-muted">
          Сертифікат GoIT • Унікальний ID: 39063 • Жовтень 2025
        </p>
        <p className="text-xs text-resume-muted mt-1">
          CEO of GoIT: Anton Chornyi • goit.global
        </p>
      </div>
    </div>
  );
};

export default ResumeMain;