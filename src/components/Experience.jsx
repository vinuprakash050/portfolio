import { motion } from "framer-motion";

export default function Experience({ enableAnimations }) {

  const experiences = [
    {
      company: "L&T Technology Services Ltd.",
      role: "Full Stack Developer",
      duration: "Dec 2022 - Present • Hyderabad",
      icon: "🏢",
      achievements: [
        "Developed scalable full-stack modules using React.js, Node.js, JavaScript, SQL, REST APIs",
        "Built responsive UI components integrated with backend services for end-to-end features",
        "Created API endpoints, CRUD operations, optimized database queries",
        "Performance optimization, secure data handling across devices",
        "Delivered production-ready features collaborating with teams"
      ],
      tech: ["React.js", "Node.js", "SQL", "REST APIs", "Redux"]
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

      </div>

    </motion.section>
  );
}