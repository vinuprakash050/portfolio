import { motion } from "framer-motion";

// React Icons (safe icons that always exist)
import { 
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaDatabase
} from "react-icons/fa";

import { 
  SiRedux,
  SiExpress,
  SiAxios
} from "react-icons/si";


// FRONTEND
const frontendSkills = [
  { name: "React.js", icon: FaReact, level: 95 },
  { name: "Redux", icon: SiRedux, level: 85 },
  { name: "JavaScript", icon: FaJs, level: 90 },
  { name: "HTML/CSS", icon: FaHtml5, level: 90 },
  { name: "Context API", icon: FaReact, level: 80 },
];

// BACKEND
const backendSkills = [
  { name: "Node.js", icon: FaNodeJs, level: 85 },
  { name: "Express.js", icon: SiExpress, level: 80 },
  { name: "SQL", icon: FaDatabase, level: 80 },
  { name: "REST APIs", icon: FaGitAlt, level: 90 },
];

// TOOLS
const otherSkills = [
  { name: "WebSockets", icon: FaGitAlt, level: 75 },
  { name: "Kafka", icon: FaDatabase, level: 70 }, // fallback icon
  { name: "Recharts.js", icon: FaReact, level: 80 },
  { name: "Git/GitHub", icon: FaGitAlt, level: 95 },
  { name: "Axios", icon: SiAxios, level: 90 },
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[
            { title: "Frontend", skills: frontendSkills },
            { title: "Backend", skills: backendSkills },
            { title: "Tools & More", skills: otherSkills }
          ].map((category, catIndex) => (

            <motion.div
              key={catIndex}
              className="glass p-8 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500"
            >

              <h3 className="text-2xl font-black mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent pb-2 border-b border-white/20">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill, i) => {

                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-400 cursor-pointer"
                    >

                      <div className="w-12 h-12 p-3 rounded-2xl bg-gradient-to-r from-white/20 group-hover:from-primary/30 backdrop-blur-sm border border-white/20 flex-shrink-0">
                        <Icon className="w-6 h-6 mx-auto text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                      </div>

                      <div className="flex-1 min-w-0">

                        <h4 className="font-semibold text-white group-hover:text-primary truncate">
                          {skill.name}
                        </h4>

                        <div className="w-full bg-white/10 rounded-full h-2 mt-1 overflow-hidden">

                          <motion.div 
                            className="h-2 bg-gradient-to-r from-primary to-blue-400 rounded-full shadow-lg"
                            style={{ scaleX: skill.level / 100 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          />

                        </div>

                      </div>

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