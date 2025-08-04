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
import { projects } from "./ResumeMain"; // Import data from the main component

// --- FONT REGISTRATION ---
// Download fonts from Google Fonts (e.g., Inter) and place them in public/fonts
// This is crucial for consistent rendering
// Font.register({
//   family: "Inter",
//   fonts: [
//     { src: "/fonts/Inter-Regular.ttf" },
//     { src: "/fonts/Inter-SemiBold.ttf", fontWeight: 600 },
//     { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
//   ],
// });

// --- COLOR PALETTE (matching index.css) ---
const colors = {
  background: "#FFFFFF",
  foreground: "#111827",
  primary: "#F76B5B", // Ваш помаранчевий (hsl(10, 90%, 60%))
  secondary: "#f3f4f6", // gray-100
  secondaryForeground: "#374151",
  mutedForeground: "#6b7281",
  primaryForeground: "#FFFFFF", // Білий для кращого контрасту на помаранчевому
  card: "#FFFFFF",
  border: "#e5e7eb"
};

// --- STYLESHEET ---
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: colors.background,
    fontFamily: "Helvetica" // Fallback, use registered font like "Inter"
  },
  // --- LEFT COLUMN (SIDEBAR) ---
  sidebar: {
    width: "35%",
    padding: 24,
    backgroundColor: colors.secondary,
    color: colors.secondaryForeground
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
    backgroundColor: "rgba(59, 130, 246, 0.1)", // primary with opacity
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
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
    color: colors.foreground
  },
  jobTitle: {
    fontSize: 11,
    color: colors.mutedForeground
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
    color: colors.foreground
  },
  skillBadgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  skillBadge: {
    backgroundColor: "#e5e7eb", // gray-200
    color: colors.foreground,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 9,
    marginRight: 4,
    marginBottom: 4
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 4
  },

  // --- RIGHT COLUMN (MAIN CONTENT) ---
  mainContent: {
    width: "65%",
    padding: 28
  },
  mainSection: {
    marginBottom: 24
  },
  mainSectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center"
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
    alignItems: "center"
  },
  projectLink: {
    fontSize: 9,
    color: colors.mutedForeground,
    textDecoration: "none",
    paddingHorizontal: 4
  },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8
  },
  badge: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 8,
    marginRight: 6,
    marginBottom: 4
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
    flex: 1,
    fontSize: 10,
    lineHeight: 1.4,
    color: colors.mutedForeground
  },
  eduTextBold: {
    fontFamily: "Helvetica-Bold",
    color: colors.foreground
  },
  separator: {
    marginTop: 16,
    height: 1,
    backgroundColor: colors.border
  }
});

export const ResumePDF = () => (
  <Document
    author="Oleh Tatarynov"
    title="Oleh Tatarynov - Fullstack Developer Resume"
  >
    <Page size="A4" style={styles.page}>
      {/* LEFT SIDEBAR */}
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
          <Text style={styles.contactItem}>+380 12 345 67 89</Text>
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
            <Text style={styles.skillTitle}>Frontend</Text>
            <View style={styles.skillBadgeContainer}>
              {["TypeScript", "React", "Next.js", "Redux", "Tailwind CSS"].map(
                (skill) => (
                  <Text key={skill} style={styles.skillBadge}>
                    {skill}
                  </Text>
                )
              )}
            </View>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Backend</Text>
            <View style={styles.skillBadgeContainer}>
              {["Node.js", "Express.js", "GraphQL"].map((skill) => (
                <Text key={skill} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Databases</Text>
            <View style={styles.skillBadgeContainer}>
              {["PostgreSQL", "MongoDB", "Redis"].map((skill) => (
                <Text key={skill} style={styles.skillBadge}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>DevOps & Tools</Text>
            <View style={styles.skillBadgeContainer}>
              {["Docker", "Git", "GitHub", "Vite", "Postman", "Swagger"].map(
                (skill) => (
                  <Text key={skill} style={styles.skillBadge}>
                    {skill}
                  </Text>
                )
              )}
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Languages</Text>
          <View style={styles.languageItem}>
            <Text>Ukrainian</Text>
            <Text style={{ color: colors.mutedForeground }}>Native</Text>
          </View>
          <View style={styles.languageItem}>
            <Text>Russian</Text>
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

      {/* RIGHT CONTENT */}
      <View style={styles.mainContent}>
        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>Summary</Text>
          <Text style={styles.description}>
            Full-Stack Developer with a solid foundation in the MERN stack and
            TypeScript, recently graduated from GoIT Academy. I specialize in
            transforming complex requirements into clean, high-performance web
            applications. My focus is on writing scalable code and building
            intuitive user interfaces to solve real-world problems.
          </Text>
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>Projects</Text>
          {projects.map((project, index) => (
            <View key={index} style={styles.entry}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{project.name}</Text>
                <View style={styles.projectLinks}>
                  <Link src={project.github} style={styles.projectLink}>
                    Code
                  </Link>
                  <Text style={{ color: colors.mutedForeground }}>|</Text>
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
              {index < projects.length - 1 && <View style={styles.separator} />}
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
              <Text style={styles.entryDate}>2024 - 2025</Text>
            </View>
            <Text style={styles.entrySubtitle}>GoIT Academy</Text>
            <Text style={styles.description}>
              A comprehensive 10-month program (680+ hours) focused on modern
              web technologies and best practices.
            </Text>
            <View style={{ marginTop: 8 }}>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>Core Web:</Text> Responsive
                  Design, Flexbox, Grid, HTML5, CSS3.
                </Text>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>JavaScript:</Text> ES6+, DOM
                  API, Asynchrony, REST API.
                </Text>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>React:</Text> Component-based
                  architecture, Hooks, Redux, Routing.
                </Text>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.eduText}>
                  <Text style={styles.eduTextBold}>Node.js:</Text> Express,
                  MongoDB, JWT Authentication, WebSockets, Docker basics.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
