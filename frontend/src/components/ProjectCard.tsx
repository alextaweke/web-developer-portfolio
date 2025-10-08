import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motionVariants";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  github,
  image,
}) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="flex gap-4 mt-3">
        <a href={link} className="text-yellow-600 hover:underline">
          Live Demo
        </a>
        <a href={github} className="text-yellow-600 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
