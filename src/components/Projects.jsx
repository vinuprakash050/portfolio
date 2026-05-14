import { motion } from "framer-motion";

const projects = [
  {
    title: "TodorganizerAI",
    subtitle: "AI-Powered Task Organizer",
    desc: "An intelligent todo and task management app that leverages AI to help users organize, prioritize, and stay on top of their tasks effortlessly.",
    tech: ["React.js", "AI/LLM", "Netlify"],
    achievements: [
      "Integrated AI to automatically categorize and prioritize tasks based on context.",
      "Built a clean, intuitive UI for seamless task creation and management.",
      "Deployed as a fast, serverless web app on Netlify."
    ],
    link: "https://todorganizerai.netlify.app/"
  },
  {
    title: "Genzifyy",
    subtitle: "Streetwear E-Commerce Store",
    desc: "A modern streetwear storefront for oversized tees, hoodies, and tank tops — built with fluid motion, glass surfaces, and a future-ready frontend architecture.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Netlify"],
    achievements: [
      "Designed a modular storefront with glassmorphism UI and smooth animations.",
      "Built product catalog pages for drops including oversized tees, hoodies, and tank tops.",
      "Crafted a brand identity with bold typography and a minimal, sharp aesthetic."
    ],
    link: "https://genzifyy.netlify.app/"
  },
  {
    title: "KadaiCraft",
    subtitle: "Multi-Tenant SaaS Website Builder",
    desc: "A SaaS platform that enables businesses to create and manage template-based websites for multiple customers from a single dashboard.",
    tech: ["React.js", "Node.js", "Tailwind CSS", "Netlify"],
    achievements: [
      "Built a multi-tenant architecture supporting independent website instances per customer.",
      "Developed a template system allowing rapid site generation from reusable layouts.",
      "Designed an admin dashboard for managing customer sites and configurations."
    ],
    link: "https://kadaicraft.netlify.app/"
  },
  {
    title: "Fusion Worlds.AI",
    subtitle: "AI-Powered Incident Management Platform",
    desc: "Enterprise-grade AI-powered incident management platform for ICCC operations with real-time event streaming and live operational dashboards.",
    tech: ["FastAPI", "Python", "React.js", "PostgreSQL", "SQLAlchemy", "Kafka", "SSE"],
    achievements: [
      "Built async backend services using FastAPI, SQLAlchemy 2.0, AsyncPG, and PostgreSQL.",
      "Implemented Kafka-based pub/sub workflows for real-time operational event streaming.",
      "Developed SSE-based APIs for live incident monitoring and operational dashboards.",
      "Built backend APIs supporting incident lifecycle management, task assignment, and operational workflows."
    ]
  },
  {
    title: "TC4 Smart Building",
    subtitle: "Smart Building Web Application",
    desc: "Centralized building management platform supporting real-time monitoring and analytics for 300–500 concurrent users.",
    tech: ["React.js", "Redux", "Node.js", "SQL", "REST APIs", "Azure AD", "Recharts.js"],
    achievements: [
      "Built reusable React.js dashboard modules and monitoring interfaces.",
      "Integrated REST APIs for parking systems, AQI monitoring, and facility analytics.",
      "Implemented Azure AD authentication and RBAC-based access control."
    ]
  },
  {
    title: "Fusion 2.0",
    subtitle: "Enterprise Operations & Monitoring Platform",
    desc: "Enterprise operations and monitoring platform with incident management, schedulers, adaptors, and workflow automation interfaces.",
    tech: ["React.js", "Node.js", "SQL", "REST APIs", "WebSockets"],
    achievements: [
      "Developed incident management systems, schedulers, adaptors, and workflow automation interfaces.",
      "Built real-time incident tracking systems using WebSockets and operational dashboards.",
      "Developed backend APIs for incident logging and workflow automation.",
      "Optimized SQL queries and backend APIs improving system responsiveness."
    ]
  }
];

export default function Projects({ enableAnimations }) {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-4 text-center bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent pb-6 relative"
          initial={enableAnimations ? { opacity: 0, scale: 0.9 } : false}
          whileInView={enableAnimations ? { opacity: 1, scale: 1 } : false}
          transition={enableAnimations ? { duration: 0.8 } : false}
        >
          Featured Projects
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-400/20 blur-xl rounded-2xl -mx-12 animate-pulse"></div>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="glass p-8 rounded-3xl backdrop-blur-xl shadow-2xl hover:shadow-primary/30 border border-white/10 hover:border-primary/40 group hover:-translate-y-6 transition-all duration-700 relative overflow-hidden perspective-[1000px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ rotateY: 8, rotateX: -4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-1 text-white group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-primary/70 text-sm font-semibold mb-4">{p.subtitle}</p>
                <p className="text-gray-300 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-6">
                  {p.achievements.map((a, k) => (
                    <li key={k} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/10 hover:bg-primary/20 text-primary text-xs font-semibold rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold rounded-xl border border-primary/30 hover:border-primary/60 transition-all duration-300 group/link"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
