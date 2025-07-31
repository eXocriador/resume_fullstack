import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link
} from "@react-pdf/renderer";
import { projects } from "./ResumeMain"; // Дані беремо з одного джерела

const colors = {
  background: "#FFFFFF",
  foreground: "#1d2033",
  primary: "#F76B15",
  secondary: "#f1f2f6",
  mutedForeground: "#696e79",
  initialsCircleBg: "rgba(247, 107, 21, 0.1)",
  border: "#E5E7EB"
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: colors.background,
    fontFamily: "Helvetica"
  },

  // --- Sidebar ---
  sidebar: { width: "38%", padding: 24, backgroundColor: colors.secondary },
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
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
    color: colors.foreground
  },
  jobTitle: { fontSize: 11, color: colors.mutedForeground },
  section: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 10
  },
  contactItem: { marginBottom: 6, fontSize: 9, color: colors.mutedForeground },
  link: { color: colors.mutedForeground, textDecoration: "none" },
  skillSection: { display: "flex", flexDirection: "column", gap: 6 },
  skillItem: { flexDirection: "row", alignItems: "flex-start" },
  skillCategory: {
    width: "35%",
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.foreground
  },
  skillText: {
    width: "65%",
    fontSize: 9,
    color: colors.mutedForeground,
    lineHeight: 1.3
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 4,
    color: colors.foreground
  },

  // --- Main Content ---
  mainContent: {
    width: "62%",
    padding: "28px 28px 20px 28px",
    display: "flex",
    flexDirection: "column"
  },
  mainSection: { marginBottom: 18 },
  mainSectionTitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 12
  },
  projectsContainer: { display: "flex", flexDirection: "column", gap: 12 },
  entry: {},
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 2
  },
  entryTitle: {
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    color: colors.foreground
  },
  entrySubtitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 4
  },
  entryDate: { fontSize: 9, color: colors.mutedForeground },
  description: { fontSize: 9, color: colors.mutedForeground, lineHeight: 1.4 },
  projectLinks: { flexDirection: "row", alignItems: "center", gap: 4 },
  badgeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 4,
    marginBottom: 6,
    gap: 4
  },
  badge: {
    backgroundColor: colors.background,
    color: colors.foreground,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 4,
    fontSize: 8,
    borderWidth: 1,
    borderColor: colors.border
  },
  eduListItem: { flexDirection: "row", marginBottom: 4 },
  bullet: { width: 10, fontSize: 10, lineHeight: 1.4 },
  eduText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.4,
    color: colors.mutedForeground
  },
  eduTextBold: { fontFamily: "Helvetica-Bold", color: colors.foreground }
});

const techSkillsData = [
  { category: "Languages", skills: "TypeScript, JavaScript (ES6+)" },
  {
    category: "Frontend",
    skills: "React, Next.js, Redux, HTML5, CSS3, Tailwind CSS"
  },
  { category: "Backend", skills: "Node.js, Express.js" },
  { category: "Databases", skills: "MongoDB, PostgreSQL, Redis" },
  { category: "APIs", skills: "REST, GraphQL, WebSockets" },
  {
    category: "Tools",
    skills: "Git, GitHub, Docker, Vite, Postman, Stripe API"
  }
];

export const ResumePDF = () => (
  <Document
    author="Oleh Tatarynov"
    title="Oleh Tatarynov - Fullstack Developer Resume"
  >
    <Page size="A4" style={styles.page}>
      {/* SIDEBAR */}
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
          <View style={styles.skillSection}>
            {techSkillsData.map(({ category, skills }) => (
              <View key={category} style={styles.skillItem}>
                <Text style={styles.skillCategory}>{category}</Text>
                <Text style={styles.skillText}>{skills}</Text>
              </View>
            ))}
          </View>
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

      {/* MAIN CONTENT */}
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
          <View style={styles.projectsContainer}>
            {projects.map((project) => (
              <View key={project.name} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{project.name}</Text>
                  <View style={styles.projectLinks}>
                    <Link src={project.github} style={styles.link}>
                      <Text>Code</Text>
                    </Link>
                    <Text
                      style={{ color: colors.mutedForeground, fontSize: 9 }}
                    >
                      {" "}
                      |{" "}
                    </Text>
                    <Link src={project.demo} style={styles.link}>
                      <Text>Demo</Text>
                    </Link>
                  </View>
                </View>
                <View style={styles.badgeContainer}>
                  {project.tech.map((tech) => (
                    <Text key={tech} style={styles.badge}>
                      {tech}
                    </Text>
                  ))}
                </View>
                <Text style={styles.description}>{project.description}</Text>
              </View>
            ))}
          </View>
          <View style={{ marginTop: 12, alignItems: "flex-end" }}>
            <Link
              src="https://github.com/exocriador"
              style={[
                styles.link,
                { fontSize: 9, color: colors.mutedForeground }
              ]}
            >
              <Text>View More Projects ›</Text>
            </Link>
          </View>
        </View>
        <View style={[styles.mainSection, { marginBottom: 0 }]}>
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
