import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
    </>
  );
}

export default App;
