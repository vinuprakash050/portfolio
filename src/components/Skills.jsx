import { motion } from "framer-motion";

import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaDatabase,
  FaPython,
  FaLinux,
} from "react-icons/fa";

import {
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiFastapi,
  SiApachekafka,
  SiSqlalchemy,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript (ES6+)", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: FaDatabase },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Context API", icon: FaReact },
      { name: "HTML5 / CSS3", icon: FaHtml5 },
      { name: "Recharts.js", icon: FaReact },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaGitAlt },
      { name: "SSE / Async-Await", icon: FaNodeJs },
      { name: "Pydantic", icon: FaPython },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLAlchemy 2.0", icon: SiSqlalchemy },
      { name: "AsyncPG", icon: SiPostgresql },
      { name: "Alembic", icon: FaDatabase },
      { name: "Query Optimization", icon: FaDatabase },
    ],
  },
  {
    title: "Real-Time & Messaging",
    skills: [
      { name: "Kafka", icon: SiApachekafka },
      { name: "Event Mesh", icon: SiApachekafka },
      { name: "WebSockets", icon: FaNodeJs },
      { name: "Pub/Sub Systems", icon: FaDatabase },
      { name: "Event-Driven Architecture", icon: FaDatabase },
    ],
  },
  {
    title: "Auth & Architecture",
    skills: [
      { name: "Azure AD", icon: FaDatabase },
      { name: "RBAC", icon: FaDatabase },
      { name: "SpiceDB", icon: FaDatabase },
      { name: "DDD / Repository Pattern", icon: FaGitAlt },
      { name: "Dependency Injection", icon: FaGitAlt },
      { name: "Multi-Tenant Systems", icon: FaDatabase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", icon: FaGitAlt },
      { name: "Linux", icon: FaLinux },
      { name: "Loguru", icon: FaPython },
      { name: "Chrome DevTools", icon: FaJs },
    ],
  },
];

export default function Skills({ enableAnimations }) {
  return (
    <motion.section
      id="skills"
      className="py-24 bg-gradient-to-b from-black via-gray-900/50 to-black"
      initial={enableAnimations ? { opacity: 0, y: 50 } : false}
      whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-black mb-16 text-center bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
        >
          Tech Stack
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="glass p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500"
              initial={enableAnimations ? { opacity: 0, y: 30 } : false}
              whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
              viewport={{ once: true }}
              transition={enableAnimations ? { duration: 0.5, delay: catIndex * 0.08 } : false}
            >
              <h3 className="text-xl font-black mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 border-b border-white/20">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-primary/10 border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-default group"
                    >
                      <Icon className="w-4 h-4 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-300 group-hover:text-white whitespace-nowrap">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
