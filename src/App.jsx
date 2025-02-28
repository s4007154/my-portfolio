import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-600">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
