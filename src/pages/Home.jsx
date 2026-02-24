function Home() {
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* LEFT SIDE */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            
            <p className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold">
              Frontend Developer
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="text-yellow-400">Pavan Yadav</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl">
              I build modern, responsive and high-performance web applications 
              using React and Tailwind CSS. Passionate about clean code and 
              elegant user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-4">
              <button
                onClick={() => window.open("/PavanResume.pdf", "_blank")}
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
              >
                Download Resume
              </button>

              <button className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2 flex justify-center relative">
            <div className="absolute w-80 h-80 bg-yellow-400/20 rounded-full blur-2xl"></div>
            <img
              src="/images/gemini_bg.png"
              alt="Frontend Developer"
              className="relative w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <HomeAbout />
    </>
  );
}

function HomeAbout() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center space-y-6 mb-16">
          <p className="uppercase tracking-widest text-sm text-yellow-400 font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Crafting Digital Experiences
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto text-lg">
            I am a BCA graduate and passionate Frontend Developer with hands-on
            experience in React.js and modern JavaScript. I enjoy building
            scalable, responsive, and user-friendly applications.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Responsive Design",
            "UI Optimization",
          ].map((skill, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-gray-700/60 border border-gray-600 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 text-sm font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;
