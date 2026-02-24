import project from "../constance/someData.json";

function About() {
  return (
    <section className="w-full bg-black text-white px-5 md:px-10 lg:px-15 py-20">
      <div className="max-w-full w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-4 border-yellow-500/30">
            <img
              src="/images/photo_2026-02-23_13-16-14.jpg"
              alt="Profile"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition duration-700"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute bottom-6 right-10 bg-yellow-500 text-black px-5 py-3 rounded-lg font-bold shadow-xl">
            Fresher
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>
          <div className="mb-6">
            <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest">
              Based in Ahmedabad City
            </span>

            <h1 className="text-5xl lg:text-6xl font-extrabold mt-4">
              About <span className="text-yellow-500">Me</span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Building responsive and interactive web applications where{" "}
              <span className="text-white font-semibold">clean code</span> meets{" "}
              <span className="text-white font-semibold">
                modern user experience
              </span>
              .
            </p>
          </div>

          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I am a BCA graduate and aspiring Frontend Developer with hands-on
              experience in React.js and modern JavaScript. During my
              internship, I built responsive UI components and real-world web
              applications using React and Tailwind CSS.
            </p>

            <p>
              I enjoy solving problems, improving performance, and continuously
              learning new technologies. Currently, I am strengthening my
              JavaScript fundamentals and building scalable frontend projects.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-[0.2em] font-bold text-primary">
              Technical Arsenal
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Python",
                "React JS",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="glass-card px-4 py-3 rounded-xl flex items-center justify-center gap-2 border border-transparent hover:border-primary/60 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <span className="text-sm font-bold">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-bold transition">
              Get in Touch
            </button>

            <button className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-lg font-bold transition">
              Resume
            </button>
          </div>
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <div className="w-full bg-red-500 flex gap-5">
          {project.map((item, ind) => (
            <div key={ind} className="flex flex-col gap-3">
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg"
              />
              <h2>{item.title}</h2>
              <button
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                open modal
              </button>
            </div>
          ))}
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </section>
  );
}

export default About;
