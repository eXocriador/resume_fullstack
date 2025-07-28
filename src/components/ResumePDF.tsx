import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Link
} from "@react-pdf/renderer";

// РЕЄСТРАЦІЯ ШРИФТІВ (ЯКЩО ПОТРІБНО)
// Font.register({
//   family: 'Roboto',
//   fonts: [
//     { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 'normal' },
//     { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
//   ],
// });

// СТВОРЕННЯ СТИЛІВ
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    // fontFamily: 'Roboto', // Використання зареєстрованого шрифту
    fontSize: 10,
    lineHeight: 1.5
  },
  sidebar: {
    width: "35%",
    padding: 20,
    backgroundColor: "#f8f9fa",
    color: "#343a40"
  },
  mainContent: {
    width: "65%",
    padding: 20
  },
  header: {
    textAlign: "center",
    marginBottom: 20
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4
  },
  title: {
    fontSize: 14,
    color: "#6c757d"
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#ff6347", // Primary color
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#dee2e6",
    paddingBottom: 4
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4
  },
  contactText: {
    marginLeft: 5
  },
  skillCategory: {
    marginBottom: 8
  },
  skillTitle: {
    fontWeight: "bold",
    fontSize: 11
  },
  skillText: {
    color: "#495057"
  },
  project: {
    marginBottom: 15
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  projectName: {
    fontSize: 12,
    fontWeight: "bold"
  },
  projectLinks: {
    flexDirection: "row"
  },
  link: {
    marginLeft: 8,
    color: "#007bff",
    textDecoration: "none"
  },
  projectTech: {
    fontSize: 9,
    fontStyle: "italic",
    color: "#6c757d",
    marginVertical: 4
  }
});

// КОМПОНЕНТ PDF-ДОКУМЕНТА
export const ResumePDF = () => (
  <Document
    author="Oleh Tatarynov"
    title="Oleh Tatarynov - Fullstack Developer Resume"
  >
    <Page size="A4" style={styles.page}>
      {/* ЛІВИЙ САЙДБАР */}
      <View style={styles.sidebar}>
        <View style={styles.header}>
          <Text style={styles.name}>Oleh Tatarynov</Text>
          <Text style={styles.title}>Full-Stack Developer</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <Link
            style={styles.contactItem}
            src="mailto:oleh.tatarynov@gmail.com"
          >
            <Text>oleh.tatarynov@gmail.com</Text>
          </Link>
          <Text style={styles.contactItem}>+380 XX XXX XX XX</Text>
          <Text style={styles.contactItem}>Kyiv, Ukraine</Text>
          <Link style={styles.contactItem} src="https://github.com/exocriador">
            <Text>github.com/exocriador</Text>
          </Link>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Technical Skills</Text>
          <View style={styles.skillCategory}>
            <Text style={styles.skillTitle}>Frontend:</Text>
            <Text style={styles.skillText}>
              React, Next.js, Redux, HTML5, CSS3, Tailwind CSS
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
          <Text style={styles.skillText}>Ukrainian (Native)</Text>
          <Text style={styles.skillText}>English (Upper-Intermediate)</Text>
        </View>
      </View>

      {/* ПРАВА КОЛОНКА (ОСНОВНИЙ КОНТЕНТ) */}
      <View style={styles.mainContent}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>
            Results-oriented Full-Stack Developer and recent GoIT Academy
            graduate with hands-on experience in the MERN stack and TypeScript.
            Proven ability to build and deploy scalable web applications,
            demonstrated through multiple full-cycle projects.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projects</Text>

          <View style={styles.project}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectName}>E-Commerce Platform</Text>
              <View style={styles.projectLinks}>
                <Link style={styles.link} src="https://github.com/exocriador">
                  Code
                </Link>
                <Link style={styles.link} src="https://exocriador.dev">
                  Demo
                </Link>
              </View>
            </View>
            <Text style={styles.projectTech}>
              React, TypeScript, Node.js, MongoDB, Stripe API
            </Text>
            <Text>
              Engineered a full-stack e-commerce application featuring JWT-based
              user authentication, a dynamic product catalog, and seamless
              payment processing with Stripe.
            </Text>
          </View>

          <View style={styles.project}>
            <View style={styles.projectHeader}>
              <Text style={styles.projectName}>Task Management App</Text>
            </View>
            <Text style={styles.projectTech}>
              React, Redux, Express.js, Socket.io, MongoDB
            </Text>
            <Text>
              Developed a collaborative task management tool using the MERN
              stack, enabling real-time project updates and team interactions
              through Socket.io.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.projectName}>
            Full-Stack Developer Certificate
          </Text>
          <Text style={styles.projectTech}>
            GoIT Academy (10-month program)
          </Text>
          <Text>
            Completed a comprehensive program focused on modern web
            technologies, including HTML, CSS, JavaScript, React, Node.js, and
            databases.
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);
