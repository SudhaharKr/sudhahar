import React from "react";
import "../Home/Home.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="home-page">
        <div className="home-page-container">
          <span>I'm a</span>
          <h1>Frontend Developer.</h1>

          <h3>
            My name is <span className="namediv">Sudhahar K R.</span>
          </h3>
          <p>
            I'm a Frontend Developer. I finished in Livewire Institute in Karur.
            To work in an environment which encourages me to succeed and grow
            professionally where I can utilize my skills and knowledge
            appropriately.
          </p>
        </div>
        <About />
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
};

export default Home;