import React from "react";

function Projects() {
  // 🔹 Common Classes
  const sectionClass =
    "min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black px-4 sm:px-6 lg:px-20 py-20 overflow-x-hidden";

  const containerClass = "max-w-7xl mx-auto";

  const cardClass =
    "bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  const titleClass = "text-3xl sm:text-4xl font-bold text-white mb-4";

  const buttonClass =
    "inline-block mt-4 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg font-semibold transition duration-300";

  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-14">
          My Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card */}
          <div className={cardClass}>
            <h3 className={titleClass}>Portfolio Website</h3>
            <p className="text-gray-300">
              A modern responsive portfolio built using React and Tailwind CSS.
            </p>
            <a href="#" className={buttonClass}>
              View Project
            </a>
          </div>

          <div className={cardClass}>
            <h3 className={titleClass}>E-Commerce UI</h3>
            <p className="text-gray-300">
              Frontend design for an e-commerce platform with cart and product
              filtering.
            </p>
            <a href="#" className={buttonClass}>
              View Project
            </a>
          </div>

          <div className={cardClass}>
            <h3 className={titleClass}>Dashboard Panel</h3>
            <p className="text-gray-300">
              Admin dashboard UI with charts, analytics and authentication.
            </p>
            <a href="#" className={buttonClass}>
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
