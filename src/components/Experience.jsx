import { motion } from "framer-motion";

export default function Experience({ enableAnimations }) {

  const experiences = [
    {
      company: "L&T Technology Services Ltd.",
      role: "Full Stack Developer",
      duration: "Dec 2022 – Present • Hyderabad, Telangana",
      icon: "🏢",
      achievements: [
        "Developed enterprise-scale full-stack applications using React.js, FastAPI, Python, Node.js, PostgreSQL, SQLAlchemy, and REST APIs.",
        "Designed and developed 100+ RESTful APIs supporting incident workflows, authentication systems, and real-time monitoring.",
        "Built scalable async backend services using FastAPI, SQLAlchemy 2.0, AsyncPG, and PostgreSQL with multi-tenant architecture.",
        "Implemented SSE and WebSocket-based real-time communication systems for live operational dashboards.",
        "Developed Kafka and Event Mesh based pipelines integrating real-time sensor and camera data with LLM-powered operational workflows.",
        "Worked on AI-integrated incident processing systems generating contextual recommendations for ICCC operators.",
        "Designed backend architecture using Repository Pattern, Dependency Injection, DTO services, and Domain-Driven Design principles.",
        "Optimized backend performance through indexing, query optimization, connection pooling, caching, and async concurrency handling.",
        "Implemented concurrency-safe async workflows using asyncio.gather and non-blocking async processing.",
        "Built reusable React.js dashboard modules and modular frontend systems using Redux and Context API.",
        "Developed secure authentication and authorization workflows using Azure AD, RBAC, SpiceDB, and middleware systems.",
        "Independently owned and delivered multiple frontend and backend modules while collaborating directly with clients."
      ],
      tech: ["React.js", "FastAPI", "Python", "Node.js", "PostgreSQL", "SQLAlchemy", "Kafka", "SSE", "WebSockets", "Redux", "Azure AD", "RBAC", "SpiceDB"]
    }
  ];

  return (
    <motion.section
      id="experience"
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-black"
      initial={enableAnimations ? { opacity: 0, y: 50 } : false}
      whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
    >

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-black mb-16 text-center bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Professional Journey
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-10">

          {experiences.map((exp, i) => (

            <motion.div
              key={i}
              className="glass p-10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              initial={enableAnimations ? { opacity: 0, y: 40 } : false}
              whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
              transition={enableAnimations ? { duration: 0.6, delay: i * 0.2 } : false}
              whileHover={{ scale: 1.02 }}
            >

              {/* Header */}
              <div className="flex items-center gap-5 mb-6">

                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                  {exp.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.company}
                  </h3>

                  <p className="text-primary font-semibold">
                    {exp.role}
                  </p>

                  <p className="text-gray-400 text-sm">
                    {exp.duration}
                  </p>
                </div>

              </div>

              {/* Achievements */}
              <div className="space-y-3">

                {exp.achievements.map((achieve, j) => (

                  <div
                    key={j}
                    className="flex items-start gap-3"
                  >

                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>

                    <p className="text-gray-300 leading-relaxed">
                      {achieve}
                    </p>

                  </div>

                ))}

              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/10">

                {exp.tech.map((t, k) => (

                  <span
                    key={k}
                    className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary border border-primary/30"
                  >
                    {t}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* Education */}
        <motion.h2
          className="text-4xl md:text-5xl font-black mt-20 mb-10 text-center bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={enableAnimations ? { opacity: 0, y: 30 } : false}
          whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          className="glass p-10 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-primary/20 transition-all duration-500"
          initial={enableAnimations ? { opacity: 0, y: 40 } : false}
          whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
          viewport={{ once: true }}
          transition={enableAnimations ? { duration: 0.6 } : false}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-5 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              🎓
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Sona College of Technology</h3>
              <p className="text-primary font-semibold">Bachelor of Engineering (B.E.) – Computer Science and Engineering</p>
              <p className="text-gray-400 text-sm">2018 – 2022 &nbsp;|&nbsp; CGPA: 8.3</p>
            </div>
          </div>
        </motion.div>

      </div>

    </motion.section>
  );
}