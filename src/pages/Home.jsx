import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 overflow-hidden">
        {/* Background Glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
        ></motion.div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT SIDE */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="md:w-1/2 text-center md:text-left space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="uppercase tracking-[0.3em] text-sm text-yellow-400 font-semibold"
            >
              Frontend Developer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Hi, I'm <span className="text-yellow-400">Pavan Yadav</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-300 max-w-xl"
            >
              I build modern, responsive and high-performance web applications
              using React and Tailwind CSS. Passionate about clean code and
              elegant user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start pt-4"
            >
              <button
                onClick={() => window.open("/PavanResume.pdf", "_blank")}
                className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-yellow-400/40 transition-all duration-300"
              >
                Resume
              </button>

              <button className="px-8 py-3 border border-yellow-400 text-yellow-400 rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
                <NavLink to="/contact">Contact Me</NavLink>
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center relative"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute w-80 h-80 bg-yellow-400/20 rounded-full blur-2xl"
            ></motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src="/images/gemini_bg.png"
                alt="Frontend Developer"
                className="relative w-full max-w-md drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <HomeAbout />
    </>
  );
}

function HomeAbout() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <section className="py-24 bg-linear-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="uppercase tracking-widest text-sm text-yellow-400 font-semibold"
          >
            About Me
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold"
          >
            Crafting Digital Experiences
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 max-w-3xl mx-auto text-lg"
          >
            I am a BCA graduate and passionate Frontend Developer with hands-on
            experience in React.js and modern JavaScript. I enjoy building
            scalable, responsive, and user-friendly applications.
          </motion.p>
        </motion.div>

        {/* SKILLS */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Responsive Design",
            "UI Optimization",
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                mass: 0.8,
                delay: index * 0.05,
              }}
              className="px-6 py-3 rounded-full bg-gray-700/60 border border-gray-600 hover:border-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 text-sm font-semibold cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="mt-16 text-center"
        >
          <NavLink to={"/contact"}>
            <button className="px-10 py-4 bg-yellow-400 text-black font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
              Let's Work Together
            </button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
