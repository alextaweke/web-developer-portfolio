import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  completed: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ongoing: any[];
}

const Projects: React.FC<ProjectsProps> = ({ completed, ongoing }) => (
  <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-center dark:text-white">
        Completed Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {completed.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-16 mb-10 text-center dark:text-white">
        Ongoing Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ongoing.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
