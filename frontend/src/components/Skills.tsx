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
  skills?: SkillCategory[]; // Add skills prop
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
      <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-gray-800 dark:text-gray-200">
            {skill}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {level}%
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <div
            className={`h-2 rounded-full bg-gradient-to-r ${
              colorClasses[color as keyof typeof colorClasses]
            }`}
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-4 py-3 rounded-lg font-medium transition-all duration-300 
        cursor-default text-center flex items-center justify-center
        hover:shadow-lg transform-gpu min-h-[44px]
        ${
          variant === "minimal"
            ? "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600"
            : variant === "cards"
            ? "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-gray-200 shadow-sm"
            : `bg-gradient-to-r ${
                colorClasses[color as keyof typeof colorClasses]
              } text-white shadow-md`
        }
      `}
    >
      {skill}
    </motion.span>
  );
};

// Default categories to prevent the error
const defaultCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java"],
    icon: "💻",
    color: "blue",
  },
  {
    name: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Next.js", "Express", "NestJS"],
    icon: "⚛️",
    color: "purple",
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
    icon: "🗄️",
    color: "green",
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes"],
    icon: "🛠️",
    color: "yellow",
  },
];

const Skills: React.FC<SkillsProps> = ({
  categories = defaultCategories,
  skills, // Add skills prop
  variant = "default",
  className = "",
  showIcons = true,
  showLevel = false,
}) => {
  const ref = useRef(null);
  // Fixed: Remove threshold or use new API
  const isInView = useInView(ref, { once: true });

  const categoryIcons = {
    "Programming Languages": "💻",
    "Frameworks & Libraries": "⚛️",
    Databases: "🗄️",
    "Tools & Platforms": "🛠️",
    Visualization: "📊",
  };

  const categoryColors = {
    "Programming Languages": "blue",
    "Frameworks & Libraries": "purple",
    Databases: "green",
    "Tools & Platforms": "yellow",
    Visualization: "red",
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Use skills prop if provided, otherwise use categories
  const categoriesToRender = skills || categories || defaultCategories;

  return (
    <section
      id="skills"
      className={`py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden ${className}`}
      ref={ref}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-400/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive overview of my technical expertise across different
            domains
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto space-y-8"
        >
          {categoriesToRender.map((category, categoryIndex) => (
            <motion.div
              key={category.name || `category-${categoryIndex}`}
              variants={itemVariants}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-6">
                {showIcons && (
                  <span className="text-2xl mr-3">
                    {category.icon ||
                      categoryIcons[
                        category.name as keyof typeof categoryIcons
                      ] ||
                      "🚀"}
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {category.name}
                </h3>
              </div>

              <div
                className={`
                grid gap-3
                ${
                  variant === "progress"
                    ? "grid-cols-1 md:grid-cols-2"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }
              `}
              >
                {(category.skills || []).map((skill) => (
                  <SkillItem
                    key={skill}
                    skill={skill}
                    level={
                      showLevel
                        ? Math.floor(Math.random() * 40) + 60
                        : undefined
                    }
                    color={
                      category.color ||
                      categoryColors[
                        category.name as keyof typeof categoryColors
                      ] ||
                      "yellow"
                    }
                    variant={variant}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
