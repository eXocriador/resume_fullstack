import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link
} from "@react-pdf/renderer";

// Визначаємо кольори з вашого дизайну для точності
const colors = {
  primary: "#F76B15", // --primary: hsl(10 90% 60%)
  primaryForeground: "#fcf6f4", // --primary-foreground: hsl(10 40% 98%)
  secondaryBg: "#f1f2f6", // --secondary: hsl(220 14% 95%)
  foreground: "#1d2033", // --foreground: hsl(220 20% 15%)
  mutedForeground: "#696e79", // --muted-foreground: hsl(220 10% 45%)
  border: "#E5E7EB",
  link: "#3B82F6",
  initialsCircleBg: "rgba(247, 107, 21, 0.1)" // Прозорий primary
};

// Створюємо стилі, що максимально імітують ваш дизайн
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    fontFamily: "Helvetica"
  },
  // --- Ліва колонка (Сайдбар) ---
  sidebar: {
    width: "35%",
    padding: 24,
    backgroundColor: colors.secondaryBg,
    color: colors.foreground
  },
  profileContainer: {
    textAlign: "center",
    marginBottom: 24,
    alignItems: "center"
  },
  initialsCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.initialsCircleBg,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  initialsText: {
    color: colors.primary,
    fontSize: 24,
    fontFamily: "Helvetica-Bold"
  },
  name: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
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
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 0.5
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
    marginBottom: 10
  },
  skillTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    marginBottom: 3
  },
  skillText: {
    fontSize: 9,
    color: colors.mutedForeground,
    lineHeight: 1.4
  },
  languageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 10,
    marginBottom: 4
  },

  // --- Права колонка (Основний контент) ---
  mainContent: {
    width: "65%",
    padding: 30
  },
  mainSection: {
    marginBottom: 24
  },
  mainSectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: colors.primary,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1
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
    fontFamily: "Helvetica-Bold"
  },
  entrySubtitle: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4
  },
  entryDate: {
    fontSize: 9,
    color: colors.mutedForeground
  },
  description: {
    fontSize: 10,
    color: colors.foreground,
    lineHeight: 1.5
  },
  projectLinks: {
    flexDirection: "row",
    alignItems: "center"
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
    gap: 5
  },
  badge: {
    backgroundColor: colors.primary,
    color: colors.primaryForeground,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    fontSize: 8,
    fontFamily: "Helvetica-Bold"
  },
  eduListItem: {
    flexDirection: "row",
    marginBottom: 4
  },
  eduListBullet: {
    width: 10,
    fontSize: 10,
    lineHeight: 1.5
  },
  eduListTextContainer: {
    flex: 1,
    flexDirection: "row"
  },
  eduListTextBold: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.foreground
  },
  eduListText: {
    fontSize: 10,
    color: colors.mutedForeground
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
            <Text style={styles.skillTitle}>Programming Languages:</Text>
            <Text style={styles.skillText}>TypeScript, JavaScript (ES6+)</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Frontend:</Text>
            <Text style={styles.skillText}>
              React, Next.js, Redux Toolkit, HTML5, CSS3, Tailwind CSS
            </Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Backend:</Text>
            <Text style={styles.skillText}>Node.js, Express.js</Text>
          </View>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Databases:</Text>
            <Text style={styles.skillText}>MongoDB, PostgreSQL, Redis</Text>
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
              Upper-Intermediate (B2)
            </Text>
          </View>
        </View>
      </View>

      {/* ПРАВА КОЛОНКА */}
      <View style={styles.mainContent}>
        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>About Me</Text>
          <Text style={styles.description}>
            Passionate Fullstack Developer with expertise in the MERN stack and
            TypeScript. A recent graduate of the intensive GoIT Academy program,
            I am committed to writing clean, efficient code and creating
            exceptional user experiences. I am eager to contribute to innovative
            projects and grow within a dynamic tech team.
          </Text>
        </View>

        <View style={styles.mainSection}>
          <Text style={styles.mainSectionTitle}>Projects</Text>
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>E-Commerce Platform</Text>
              <View style={styles.projectLinks}>
                <Link src="https://github.com" style={styles.projectLink}>
                  Code
                </Link>
                <Text
                  style={{
                    fontSize: 9,
                    color: colors.mutedForeground,
                    marginHorizontal: 4
                  }}
                >
                  {" "}
                  |{" "}
                </Text>
                <Link src="https://example.com" style={styles.projectLink}>
                  Demo
                </Link>
              </View>
            </View>
            <Text style={styles.description}>
              Full-stack e-commerce application featuring user authentication,
              product catalog, shopping cart, and Stripe payment integration.
            </Text>
            <View style={styles.badgeContainer}>
              {["React", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                <Text key={tech} style={styles.badge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>E-Commerce Platform</Text>
              <View style={styles.projectLinks}>
                <Link src="https://github.com" style={styles.projectLink}>
                  Code
                </Link>
                <Text
                  style={{
                    fontSize: 9,
                    color: colors.mutedForeground,
                    marginHorizontal: 4
                  }}
                >
                  {" "}
                  |{" "}
                </Text>
                <Link src="https://example.com" style={styles.projectLink}>
                  Demo
                </Link>
              </View>
            </View>
            <Text style={styles.description}>
              Full-stack e-commerce application featuring user authentication,
              product catalog, shopping cart, and Stripe payment integration.
            </Text>
            <View style={styles.badgeContainer}>
              {["React", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                <Text key={tech} style={styles.badge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>E-Commerce Platform</Text>
              <View style={styles.projectLinks}>
                <Link src="https://github.com" style={styles.projectLink}>
                  Code
                </Link>
                <Text
                  style={{
                    fontSize: 9,
                    color: colors.mutedForeground,
                    marginHorizontal: 4
                  }}
                >
                  {" "}
                  |{" "}
                </Text>
                <Link src="https://example.com" style={styles.projectLink}>
                  Demo
                </Link>
              </View>
            </View>
            <Text style={styles.description}>
              Full-stack e-commerce application featuring user authentication,
              product catalog, shopping cart, and Stripe payment integration.
            </Text>
            <View style={styles.badgeContainer}>
              {["React", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                <Text key={tech} style={styles.badge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>E-Commerce Platform</Text>
              <View style={styles.projectLinks}>
                <Link src="https://github.com" style={styles.projectLink}>
                  Code
                </Link>
                <Text
                  style={{
                    fontSize: 9,
                    color: colors.mutedForeground,
                    marginHorizontal: 4
                  }}
                >
                  {" "}
                  |{" "}
                </Text>
                <Link src="https://example.com" style={styles.projectLink}>
                  Demo
                </Link>
              </View>
            </View>
            <Text style={styles.description}>
              Full-stack e-commerce application featuring user authentication,
              product catalog, shopping cart, and Stripe payment integration.
            </Text>
            <View style={styles.badgeContainer}>
              {["React", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                <Text key={tech} style={styles.badge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
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
                <Text style={styles.eduListBullet}>• </Text>
                <View style={styles.eduListTextContainer}>
                  <Text style={styles.eduListTextBold}>HTML+CSS:</Text>
                  <Text style={styles.eduListText}>
                    {" "}
                    Responsive Design, Flexbox, Forms.
                  </Text>
                </View>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.eduListBullet}>• </Text>
                <View style={styles.eduListTextContainer}>
                  <Text style={styles.eduListTextBold}>JavaScript:</Text>
                  <Text style={styles.eduListText}>
                    {" "}
                    ES6+, DOM, Asynchrony, HTTP requests.
                  </Text>
                </View>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.eduListBullet}>• </Text>
                <View style={styles.eduListTextContainer}>
                  <Text style={styles.eduListTextBold}>React:</Text>
                  <Text style={styles.eduListText}>
                    {" "}
                    Components, Hooks, State Management (Redux), Routing.
                  </Text>
                </View>
              </View>
              <View style={styles.eduListItem}>
                <Text style={styles.eduListBullet}>• </Text>
                <View style={styles.eduListTextContainer}>
                  <Text style={styles.eduListTextBold}>Node.js:</Text>
                  <Text style={styles.eduListText}>
                    {" "}
                    Express, REST API, MongoDB, Authentication (JWT), Docker.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
