import React from "react";
import "./index.css";
import Navbar from "./components/layout/Navbar";
import { Routes, Route } from "react-router-dom";
import Wildlife from "./pages/Wildlife";
import Program from "./pages/Program";
import JoinTeam from "./pages/JoinTeam";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
     <Routes>
      <Route path="/wildlife" element={<Wildlife />} />
      <Route path="/program" element={<Program />} />
      <Route path="/join-us" element={<JoinTeam />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
     </Routes>
    </>
  );
};

export default App;
