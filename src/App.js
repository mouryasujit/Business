import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home/Home.jsx";
import Services from "./Componenets/OurProducts/Services.jsx";
import About from "./Componenets/About/About.jsx";
import Contact from "./Componenets/Contact/Contact.jsx";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourProducts" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
