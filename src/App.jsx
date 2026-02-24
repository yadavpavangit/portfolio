import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        className="fixed bottom-20 right-10 z-99 w-6 h-6 rounded-full p-6 bg-yellow-400 text-yellow-300 text-xs font-bold flex items-center justify-center cursor-pointer animate-bounce"
      >
        <button>
          <FaArrowUp color="black" size={28} />
        </button>
      </div>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
