import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import mailgo from "mailgo";
import { Committe, Speakers, About, Registration } from "./components/contents";

const App = () => {
  useEffect(() => {
    mailgo();
  });
  return (
    <div className="bg-gradient-to-r from-[#A8DEE0] to-red-200">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/committe" element={<Committe />} />
        </Routes>
        <Routes>
          <Route path="/speakers" element={<Speakers />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/register-details" element={<Registration />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
};

export default App;
