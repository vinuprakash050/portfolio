import { motion } from "framer-motion";

export default function About({ enableAnimations }) {

  const highlights = [
    { title: "3.5+ Years", subtitle: "Experience" },
    { title: "Enterprise", subtitle: "Applications" },
    { title: "Full Stack", subtitle: "Engineering" }
  ];

  const strengths = [
    "Scalable React.js & FastAPI Applications",
    "100+ RESTful APIs & Database Optimization",
    "Real-Time Systems using SSE & WebSockets",
    "Kafka & Event-Driven Architecture",
    "AI-Integrated Operational Platforms",
    "Secure Auth with Azure AD, RBAC & SpiceDB"
  ];

  return (
    <motion.section 
      id="about" 
      className="py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-black"
      initial={enableAnimations ? { opacity: 0, y: 50 } : false}
      whileInView={enableAnimations ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true }}
    >

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-black mb-10 text-center bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Intro */}
        <motion.p 
          className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        >
          Full Stack Engineer with 3.5+ years of experience building enterprise-scale web applications,
          real-time monitoring systems, and AI-integrated operational platforms using React.js, FastAPI,
          Python, Node.js, PostgreSQL, and event-driven architectures. Skilled in scalable frontend systems,
          async backend services, SSE-based communication, Kafka-driven workflows, and distributed systems.
        </motion.p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

          {highlights.map((item, i) => (

            <motion.div
              key={i}
              className="glass p-6 rounded-2xl text-center border border-white/10 hover:border-primary/40 transition"
            >

              <h3 className="text-2xl font-bold text-primary">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.subtitle}
              </p>

            </motion.div>

          ))}

        </div>


      </div>

    </motion.section>
  );
}