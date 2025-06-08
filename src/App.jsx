import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from './components/Footer';

// Styling
import './App.css';



const Portfolio = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
