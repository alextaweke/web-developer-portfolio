import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

const About: React.FC = () => (
  <section
    id="about"
    className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden"
  >
    {/* Enhanced background with gradient overlay */}
    <div className="absolute inset-0 bg-[url('/images/bg-tech.jpg')] bg-cover bg-center opacity-5" />
    <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-blue-50/80 dark:from-gray-900/90 dark:to-gray-800/90" />

    {/* Floating elements */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-400/10 rounded-full blur-lg animate-pulse delay-500"></div>

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Enhanced Image Container */}
          <motion.div
            variants={fadeInUp}
            className="relative group flex-shrink-0"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <motion.img
              src="images/alex.png"
              alt="Alemayehu Taweke - Full Stack Developer"
              className="relative w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-lg font-semibold text-sm">
              🚀 Full Stack Dev
            </div>
          </motion.div>

          {/* Enhanced Text Content */}
          <motion.div variants={fadeInUp} className="flex-1 space-y-6">
            {/* Introduction */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Professional Background
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My name is{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  Alemayehu Taweke
                </strong>
                , a passionate full-stack web developer with a strong foundation
                in computer science and modern web technologies.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Education & Achievements
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Graduated from{" "}
                <strong className="text-green-600 dark:text-green-400">
                  Ambo University
                </strong>{" "}
                with a <strong>BSc in Computer Science</strong>, achieving
                outstanding academic results:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-3 rounded-lg">
                  <span className="text-lg">🎓</span>
                  <span>
                    <strong>CGPA:</strong> 3.86/4.0
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-3 rounded-lg">
                  <span className="text-lg">🏆</span>
                  <span>
                    <strong>Exit Exam:</strong> 75/100
                  </span>
                </div>
              </div>
            </div>

            {/* Skills & Technologies */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                Technical Expertise
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Completed advanced courses in{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  Web Development
                </strong>{" "}
                and{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  Artificial Intelligence
                </strong>{" "}
                from <strong>Ethio Coders</strong>.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "TypeScript",
                  "NestJS",
                  "Django",
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal Qualities */}
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Strengths & Approach
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a dedicated team player with excellent{" "}
                <strong className="text-yellow-600 dark:text-yellow-400">
                  problem-solving skills
                </strong>{" "}
                and a strong focus on writing{" "}
                <strong>clean, scalable, and efficient code</strong>. I thrive
                in collaborative environments and continuously seek
                opportunities to learn and grow in software development.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
