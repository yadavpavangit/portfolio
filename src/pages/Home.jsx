function Home() {
  return (
    <>
      <section className="px-5 md:px-10 lg:px-20 pt-20 bg-gradient-to-t from-gray-700 to-gray-900 text-white">
        <div className="w-full relative md:flex justify-center items-center gap-6">
          <div className="w-1/2 h-100 absolute inset-0 top-20 left-40 md:relative text-start leading-9">
            <h1 className="text-4xl font-medium">
              <span className="font-bold text-5xl text-yellow-500">Hello,</span>{" "}
              I am Frontend Developer
            </h1>
            <span className="text-[18px] font-medium tracking-wide text-white">
              Pavan Yadav
            </span>
            <div className="flex gap-5 items-center my-3">
              <button
                onClick={() => window.open("/PavanResume.pdf", "_blank")}
                className="px-3 py-2 bg-blue-700 hover:bg-blue-600 active:scale-97 transition-all ease-in duration-150 rounded-xl shadow-2xl"
              >
                Resume
              </button>
              <button className="border border-yellow-400 px-3 py-2 rounded shadow-2xl hover:bg-yellow-500 hover:border-yellow-600 active:scale-95 transition-all ease-linear duration-150">
                Contact Me
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img src="/images/bg_pic-removebg-preview.png" alt="" />
          </div>
        </div>
      </section>
      <HomeAbout />
    </>
  );
}

function HomeAbout() {
  return (
    <section className="grow flex flex-col justify-center py-16 lg:py-24 bg-gray-600 text-white">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-yellow-500">
                Based in Ahmedabad City
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter">
              About <span className="text-yellow-500">Me</span>
            </h1>

            <p className="text-xl lg:text-2xl font-medium text-slate-300 max-w-2xl leading-relaxed">
              Building responsive and interactive web applications where{" "}
              <span className="text-white">clean code</span> meets{" "}
              <span className="text-white">modern user experience</span>.
            </p>
          </div>

          <div className="space-y-7 text-slate-400 max-w-4xl text-lg leading-relaxed">
            <p>
              I am a BCA graduate and aspiring Frontend Developer with hands-on
              experience in React.js and modern JavaScript. During my
              internship, I worked on building responsive UI components and
              real-world web applications using React and Tailwind CSS.
            </p>
            <p>
              I enjoy solving problems, improving performance, and continuously
              learning new technologies. Currently, I am focused on
              strengthening my JavaScript fundamentals and building scalable
              frontend projects to grow as a professional developer.
            </p>
          </div>

          {/* Core Expertise */}
          <div className="mt-2">
            <h3 className="text-sm my-5 uppercase tracking-[0.2em] font-bold text-yellow-500">
              Core Expertise
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "UI/UX Strategy",
                "Design Systems",
                "Web Development",
                "User Research",
                "Brand Identity",
              ].map((skill, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg border border-slate-700 hover:border-yellow-500/50 transition-colors text-[#f8f3f3] text-sm font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl text-base font-extrabold transition-all shadow-lg shadow-primary/10">
              Get in Touch
            </button>

            <button className="border border-slate-700 hover:border-primary text-yellow-500 hover:text-primary px-8 py-4 rounded-xl text-base font-extrabold transition-all">
              Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
