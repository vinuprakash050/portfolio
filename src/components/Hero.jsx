import { motion } from "framer-motion";

export default function Hero({ enableAnimations }) {
  return (
    <motion.section 
      id="hero" 
      className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/20 to-black relative overflow-hidden"
      initial={enableAnimations ? { opacity: 0 } : false}
      whileInView={enableAnimations ? { opacity: 1 } : false}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 animate-shimmer"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/30 to-blue-400/30 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow opacity-40"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-b from-blue-400/30 to-primary/30 rounded-full blur-2xl animate-pulse opacity-70"></div>
      </div>
      <div className="text-center z-20 relative max-w-4xl mx-auto px-6">
        <motion.h1
          initial={enableAnimations ? { opacity: 0, y: -50 } : false}
          animate={enableAnimations ? { opacity: 1, y: 0 } : false}
          transition={enableAnimations ? { duration: 0.8, ease: "easeOut" } : false}
          className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent font-normal">
            Vinuprakash Sivanantham
          </span>
        </motion.h1>

        <motion.h2
          initial={enableAnimations ? { opacity: 0, y: 30 } : false}
          animate={enableAnimations ? { opacity: 1, y: 0 } : false}
          transition={enableAnimations ? { delay: 0.6, duration: 0.6 } : false}
          className="text-xl mt-4 text-gray-300 font-semibold tracking-wide"
        >
          Full Stack Engineer | FastAPI · React · PostgreSQL · Kafka
        </motion.h2>

        <p className="mt-6 max-w-xl mx-auto text-gray-400 leading-relaxed">
          Full Stack Engineer with 3.5+ years of experience building enterprise-scale web applications, real-time monitoring systems, and AI-integrated operational platforms.
        </p>
        
        <motion.a
          href="#projects"
          className="mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-primary/25 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          initial={enableAnimations ? { opacity: 0, y: 30 } : false}
          animate={enableAnimations ? { opacity: 1, y: 0 } : false}
          transition={enableAnimations ? { delay: 0.8, duration: 0.6 } : false}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          View My Projects →
        </motion.a>
      </div>
    </motion.section>
  );
}
