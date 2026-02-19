import React from "react";

function Home() {
  return (
    <section className="wrapper px-5 md:px-10 lg:px-20 py-20 text-white text-2xl front-bold bg-linear-to-t from-blue-500 to-blue-700 overflow-hidden">
      <div className="w-full relative md:flex justify-center items-center gap-6">
        <div className="w-1/2 h-100 absolute inset-0 top-20 left-40 md:relative text-start leading-9">
          <h1 className="text-4xl font-medium">
            <span className="font-bold text-5xl text-yellow-500">Hello,</span> I
            am Frontend Developer
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
            <button className="border border-yellow-400 px-3 py-2 rounded shadow-2xl hover:bg-blue-700 hover:border-blue-600 active:scale-95 transition-all ease-linear duration-150">
              Contact Me
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img src="/images/bg_pic-removebg-preview.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
