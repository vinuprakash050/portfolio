import { motion } from "framer-motion";

const projects = [
  {
    title: "Fusion Worlds",
    desc: "Real-time AI-powered incident management platform for city-scale ICCC operations. Web + Mobile. Kafka event mesh, WebSockets, Redux state.",
    tech: ["React.js", "Redux", "Node.js", "Kafka", "WebSockets"],
    achievements: "Developed entire web frontend + shared backend APIs. Implemented event-driven architecture and deployment pipelines.",
    image: "fusion-worlds",
    link: "#",
    github: "https://github.com/vinu/fusion-worlds"
  },
  {
    title: "Fusion 2.0",
    desc: "Enterprise operations monitoring platform. Adaptors, connectors, incident management, map visualizations.",
    tech: ["React.js", "Node.js", "SQL", "WebSockets", "Maps API"],
    achievements: "Built core modules - adaptors, schedulers, incident screens. Real-time alerts via WebSockets.",
    image: "fusion-2",
    link: "#",
    github: "https://github.com/vinu/fusion-2"
  },
  {
    title: "TC4 Smart Building",
    desc: "Centralized building management dashboard. AQI, parking, analytics, Azure AD + RBAC security.",
    tech: ["React.js", "Redux", "Recharts.js", "CryptoJS", "Azure AD"],
    achievements: "15+ reusable components, dynamic charts, Triple DES security, responsive layouts.",
    image: "tc4-building",
    link: "#",
    github: "https://github.com/vinu/tc4-dashboard"
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
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((tag, j) => (
                    <span key={j} className="px-4 py-2 bg-white/10 hover:bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
