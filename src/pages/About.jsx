import { NavLink } from "react-router-dom";
import project from "../constance/someData.json";

function About() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-24 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Crafting Digital Experiences
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE - IMAGE */}
          <div className="relative flex justify-center">
            <div className="relative w-[350px] h-[350px] rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl shadow-yellow-500/10">
              <img
                src="/images/about_img.png"
                alt="Profile"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold shadow-lg">
              Fresher
            </div>
          </div>

          {/* RIGHT SIDE - CONTENT */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">
              Hi, I'm <span className="text-yellow-400">Pavan Yadav</span>
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a BCA graduate and passionate Frontend Developer with
              hands-on experience in React.js and modern JavaScript. I enjoy
              building scalable, responsive, and user-friendly applications.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I love solving problems, optimizing performance, and continuously
              learning new technologies to grow as a professional developer.
            </p>

            {/* Skills */}
            <div>
              <h4 className="uppercase text-sm tracking-widest text-yellow-400 font-semibold mb-6">
                Technical Arsenal
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "React JS",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML5",
                  "CSS3",
                  "Python",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/60 backdrop-blur-md px-4 py-3 rounded-xl text-center border border-gray-700 hover:border-yellow-400 hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 pt-6">
              <NavLink
                to="/contact"
                className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get in Touch
              </NavLink>

              <button
                onClick={() => window.open("/PavanResume.pdf", "_blank")}
                className="px-8 py-3 border border-yellow-500 text-yellow-500 rounded-xl hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* ================= PROJECTS SECTION ================= */}

        <div className="mt-28">
          <h3 className="text-3xl font-bold text-center mb-14">
            Featured <span className="text-yellow-400">Projects</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {project.map((item, ind) => (
              <div
                key={ind}
                className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <video
                  src={item.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-52 object-cover"
                />

                <div className="p-6 space-y-4">
                  <h4 className="text-lg font-bold">{item.title}</h4>

                  <button
                    className="btn text-yellow-400 hover:underline"
                    onClick={() =>
                      document.getElementById(`my_modal_${ind}`).showModal()
                    }
                  >
                    See Details →
                  </button>
                </div>
                <dialog id={`my_modal_${ind}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="py-4">{item.description}</p>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn px-6 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-500/80 transition-all duration-300">
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
