import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLocationDot } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9aamdpy", "template_ieq7nxq", form.current, {
        publicKey: "-n9QJon2JdAKDr1gg",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
            transition: Bounce,
          });
          e.target.reset();
        },
        () => {
          toast.error("Failed to send message!", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
            transition: Bounce,
          });
        },
      );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-black to-gray-900 pt-24 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl w-full mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE - INFO */}
        <div className="text-white space-y-6">
          <p className="uppercase tracking-widest text-yellow-400 text-sm font-semibold">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let’s Build Something Amazing Together 🚀
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            Have a project idea or opportunity? Feel free to reach out. I’m
            always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <FaLocationDot color="red" /> Ahmedabad, Gujarat
            </p>
            <p className="flex items-center gap-2">
              <MdMail color="white" /> yadavp07.07@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-10 shadow-2xl">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Subject */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full resize-none px-4 py-3 bg-gray-900 text-white rounded-xl border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-black font-bold rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
