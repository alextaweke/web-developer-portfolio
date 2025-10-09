// src/components/Skills.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface SkillCategory {
  name: string;
  skills: string[];
  icon?: string;
  color?: string;
}

export interface SkillsProps {
  categories?: SkillCategory[];
  variant?: "default" | "minimal" | "cards" | "progress";
  className?: string;
  showIcons?: boolean;
  showLevel?: boolean;
}

const SkillItem: React.FC<{
  skill: string;
  level?: number;
  color?: string;
  variant: SkillsProps["variant"];
}> = ({ skill, level, color = "yellow", variant }) => {
  const colorClasses = {
    yellow: "from-yellow-400 to-orange-400",
    blue: "from-blue-400 to-cyan-400",
    green: "from-green-400 to-emerald-400",
    purple: "from-purple-400 to-pink-400",
    red: "from-red-400 to-pink-400",
  };

  if (variant === "progress" && level) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-600"
      >
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            {skill}
          </span>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-2.5 rounded-full bg-gradient-to-r ${
              colorClasses[color as keyof typeof colorClasses]
            } shadow-sm`}
          />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-5 py-3 rounded-xl font-semibold transition-all duration-300 
        cursor-default text-center flex items-center justify-center
        hover:shadow-xl transform-gpu min-h-[50px] border border-transparent
        ${
          variant === "minimal"
            ? "bg-white/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 backdrop-blur-sm"
            : variant === "cards"
            ? "bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-600"
            : `bg-gradient-to-r ${
                colorClasses[color as keyof typeof colorClasses]
              } text-white shadow-lg hover:shadow-xl hover:brightness-110`
        }
      `}
    >
      {skill}
    </motion.span>
  );
};

// Default categories (fallback)
const defaultCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "Go"],
    icon: "💻",
    color: "blue",
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Next.js", "Express", "NestJS", "Django"],
    icon: "⚛️",
    color: "purple",
  },
  {
    name: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Git", "Docker"],
    icon: "🗄️",
    color: "green",
  },
  {
    name: "Platforms & Services",
    skills: ["AWS", "CI/CD", "Kubernetes", "Firebase", "Vercel", "Netlify"],
    icon: "🛠️",
    color: "yellow",
  },
];

// Realistic skill levels for progress variant
const skillLevels: { [key: string]: number } = {
  // Programming Languages
  JavaScript: 90,
  TypeScript: 85,
  Python: 80,
  Java: 75,
  "C++": 70,
  Go: 65,
  // Frontend
  React: 88,
  "Next.js": 82,
  HTML5: 90,
  CSS3: 85,
  "Tailwind CSS": 80,
  Bootstrap: 75,
  // Backend
  "Node.js": 85,
  Express: 80,
  NestJS: 78,
  Django: 75,
  "REST APIs": 85,
  GraphQL: 70,
  // Databases
  PostgreSQL: 85,
  MongoDB: 80,
  MySQL: 78,
  Redis: 75,
  SQLite: 70,
  Firebase: 75,
  // Tools & Platforms
  Git: 90,
  Docker: 82,
  AWS: 78,
  "CI/CD": 80,
  Kubernetes: 72,
  Vercel: 85,
  // Other Skills
  "Agile/Scrum": 80,
  "Problem Solving": 85,
  "Team Leadership": 75,
  "Code Review": 80,
  "System Design": 70,
  Testing: 75,
};

const Skills: React.FC<SkillsProps> = ({
  categories = defaultCategories,
  variant = "default",
  className = "",
  showIcons = true,
  showLevel = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const categoryIcons: { [key: string]: string } = {
    "Programming Languages": "💻",
    "Frontend Technologies": "🎨",
    "Backend Technologies": "⚙️",
    Databases: "🗄️",
    "Tools & Platforms": "🛠️",
    "Other Skills": "🚀",
    "Frameworks & Libraries": "⚛️",
    "Platforms & Services": "🛠️",
    "Databases & Tools": "🗄️",
  };

  const categoryColors: { [key: string]: string } = {
    "Programming Languages": "blue",
    "Frontend Technologies": "purple",
    "Backend Technologies": "green",
    Databases: "yellow",
    "Tools & Platforms": "red",
    "Other Skills": "purple",
    "Frameworks & Libraries": "purple",
    "Platforms & Services": "yellow",
    "Databases & Tools": "green",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  // Use provided categories or fallback to defaults
  const categoriesToRender =
    categories && categories.length > 0 ? categories : defaultCategories;

  return (
    <section
      id="skills"
      className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden ${className}`}
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life, from concept to
            deployment
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-10"
        >
          {categoriesToRender.map((category, categoryIndex) => (
            <motion.div
              key={category.name || `category-${categoryIndex}`}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  {showIcons && (
                    <div className="relative">
                      <div className="absolute -inset-3 bg-blue-400/20 rounded-full blur-lg group-hover:bg-purple-400/20 transition-all duration-500"></div>
                      <span className="relative text-3xl mr-4">
                        {category.icon || categoryIcons[category.name] || "🚀"}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {category.name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div
                  className={`
                  grid gap-4
                  ${
                    variant === "progress"
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
                  }
                `}
                >
                  {category.skills.map((skill) => (
                    <SkillItem
                      key={skill}
                      skill={skill}
                      level={
                        showLevel
                          ? skillLevels[skill] ||
                            Math.floor(Math.random() * 30) + 65
                          : undefined
                      }
                      color={
                        category.color ||
                        categoryColors[category.name] ||
                        "yellow"
                      }
                      variant={variant}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span>Let's Connect</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
