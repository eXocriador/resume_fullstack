import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font
} from "@react-pdf/renderer";
import { projects } from "./ResumeMain"; // Імпортуємо дані з основного компонента

// Реєструємо шрифти, якщо потрібно (Helvetica є стандартним)
// Font.register({ family: 'Helvetica', src: 'path/to/helvetica.ttf' });

const colors = {
  background: "#FFFFFF",
  foreground: "#262A41", // hsl(220 20% 15%)
  card: "#FFFFFF",
  primary: "#EF6015", // hsl(10 90% 60%) - Трохи насиченіший для кращого друку
  primaryForeground: "#FEF6F3",
  secondary: "#F2F3F7", // hsl(220 14% 95%)
  mutedForeground: "#707584", // hsl(220 10% 45%)
  initialsCircleBg: "rgba(239, 96, 21, 0.1)"
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: colors.background,
    fontFamily: "Helvetica"
  },
  // --- Ліва колонка (Сайдбар) ---
  sidebar: {
    width: "38%",
    padding: 24,
    backgroundColor: colors.secondary,
    color: colors.foreground
  },
  profileContainer: {
    textAlign: "center",
    marginBottom: 24,
    alignItems: "center"
  },
  initialsCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.initialsCircleBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12
  },
  initialsText: {
    color: colors.primary,
    fontSize: 32,
    fontFamily: "Helvetica-Bold"
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
    color: colors.foreground
  },
  jobTitle: {
    fontSize: 12,
    color: colors.mutedForeground
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 12
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    fontSize: 9,
    color: colors.mutedForeground
  },
  link: {
    color: colors.mutedForeground,
    textDecoration: "none"
  },
  skillCategory: {
    marginBottom: 12
  },
  skillTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    color: colors.foreground
  },
  skillBadgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4
  },
  skillBadge: {
    backgroundColor: "#E4E5E9",
    color: colors.foreground,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 9
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 4,
    color: colors.foreground
  },

  // --- Права колонка (Основний контент) ---
  mainContent: {
    width: "62%",
    padding: 28
  },
  mainSection: {
    marginBottom: 24
  },
  mainSectionTitle: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 16
  },
  entry: {
    marginBottom: 16
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4
  },
  entryTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.foreground
  },
  entrySubtitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 6
  },
  entryDate: {
    fontSize: 9,
    color: colors.mutedForeground
  },
  description: {
    fontSize: 10,
    color: colors.mutedForeground,
    lineHeight: 1.5
  },
  projectLinks: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  projectLink: {
    fontSize: 9,
    color: colors.mutedForeground,
    textDecoration: "none"
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    gap: 6
  },
  badge: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 8
  },
  eduListItem: {
    flexDirection: "row",
    marginBottom: 5
  },
  bullet: {
    width: 10,
    fontSize: 10,
    lineHeight: 1.4
  },
  eduText: {
    fontSize: 10,
    lineHeight: 1.4,
    color: colors.mutedForeground
  },
  eduTextBold: {
    fontFamily: "Helvetica-Bold",
    color: colors.foreground
  }
});

export const ResumePDF = () => (
  <Document
    author="Oleh Tatarynov"
    title="Oleh Tatarynov - Fullstack Developer Resume"
  >
    <Page size="A4" style={styles.page}>
      {/* ЛІВИЙ САЙДБАР */}
      <View style={styles.sidebar}>
        <View style={styles.profileContainer}>
          <View style={styles.initialsCircle}>
            <Text style={styles.initialsText}>OT</Text>
          </View>
          <Text style={styles.name}>Oleh Tatarynov</Text>
          <Text style={styles.jobTitle}>Full-Stack Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Link src="mailto:oleh.tatarynov@gmail.com" style={styles.link}>
            <Text style={styles.contactItem}>oleh.tatarynov@gmail.com</Text>
          </Link>
          <Text style={styles.contactItem}>+380 XX XXX XX XX</Text>
          <Text style={styles.contactItem}>Kyiv, Ukraine</Text>
          <Link src="https://github.com/exocriador" style={styles.link}>
            <Text style={styles.contactItem}>github.com/exocriador</Text>
          </Link>
          <Link src="https://linkedin.com/in/exocriador" style={styles.link}>
            <Text style={styles.contactItem}>linkedin.com/in/exocriador</Text>
          </Link>
          <Link src="https://exocriador.dev" style={styles.link}>
            <Text style={styles.contactItem}>exocriador.dev</Text>
          </Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Programming Languages</Text>
            <View style={styles.skillBadgeContainer}>
              <Text style={styles.skillBadge}>TypeScript</Text>
              <Text style={styles.skillBadge}>JavaScript (ES6+)</Text>
            </View>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Frontend</Text>
            <View style={styles.skillBadgeContainer}>
              {[
                "React",
                "Next.js",
                "Redux Toolkit",
                "HTML5",
                "CSS3",
                "Tailwind CSS"
              ].map((skill) => (
                <Text key={skill} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          {/* ... Add other skills similarly */}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languageItem}>
            <Text>Ukrainian</Text>
            <Text style={{ color: colors.mutedForeground }}>Native</Text>
          </View>
          <View style={styles.languageItem}>
            <Text>English</Text>
            <Text style={{ color: colors.mutedForeground }}>
              Upper-Intermediate
            </Text>
          </View>
        </View>
      </View>

      {/* ПРАВА КОЛОНКА */}
      <View style={styles.mainContent}>
        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>About Me</Text>
          <Text style={styles.description}>
            A results-oriented Full-Stack Developer and recent GoIT Academy
            graduate, passionate about building robust and user-friendly web
            applications with the MERN stack and TypeScript. I transform complex
            problems into clean, efficient code and excel in dynamic team
            environments, aiming to contribute to innovative projects.
          </Text>
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>Projects</Text>
          {projects.map((project, index) => (
            <View
              key={index}
              style={[
                styles.entry,
                {
                  borderBottom: index < projects.length - 1 ? 1 : 0,
                  borderBottomColor: colors.secondary,
                  paddingBottom: index < projects.length - 1 ? 16 : 0
                }
              ]}
            >
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{project.name}</Text>
                <View style={styles.projectLinks}>
                  <Link src={project.github} style={styles.projectLink}>
                    Code
                  </Link>
                  <Text style={{ color: colors.mutedForeground }}> | </Text>
                  <Link src={project.demo} style={styles.projectLink}>
                    Demo
                  </Link>
                </View>
              </View>
              <Text style={styles.description}>{project.description}</Text>
              <View style={styles.badgeContainer}>
                {project.tech.map((tech) => (
                  <Text key={tech} style={styles.badge}>
                    {tech}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>Education</Text>
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>
                Fullstack Developer Certificate
              </Text>
              <Text style={styles.entryDate}>10/07/2025</Text>
            </View>
            <Text style={styles.entrySubtitle}>GoIT Academy (ID: 39063)</Text>
            <Text style={styles.description}>
              A comprehensive 10-month program (680+ hours) covering modern web
              technologies and best practices through hands-on projects.
            </Text>
            <View style={{ marginTop: 8 }}>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>HTML+CSS:</Text> Responsive
                  Design, Flexbox, Forms.
                </Text>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>JavaScript:</Text> ES6+, DOM,
                  Asynchrony, HTTP requests.
                </Text>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>React:</Text> Components,
                  Hooks, State Management (Redux), Routing.
                </Text>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>Node.js:</Text> Express, REST
                  API, MongoDB, Authentication (JWT), Docker.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
