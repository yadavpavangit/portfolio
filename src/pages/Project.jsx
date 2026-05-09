import projects from "../constance/someData.json";
function Projects() {
  return (
    <section className="sectionClass">
      <div className="containerClass">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-14">
          My Projects
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16 text-lg">
          A selection of my recent work showcasing my skills in frontend
          development and design.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          {projects.map((project, ind) => (
            <div key={ind} className="cardClass">
              <h3 className="titleClass">{project.title}</h3>
              <p className="text-gray-300 line-clamp-3">
                {project.description}
              </p>
              <a href={project.webUrl} target="_bank" className="buttonClass">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
