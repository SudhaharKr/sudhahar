import React from "react";
import "../Skills/Skills.css";
import { Progress } from "@mantine/core";
import { Tooltip } from "@mantine/core";
const Skills = () => {
  return (
    <div>
      <div className="skills-page">
        <div className="skills-page-container">
          <h2>Skills</h2>
          <div className="container">
            <div className="skill-box">
              <span className="title">HTML</span>
              <div className="skill-bar">
                <span className="skill-per html">
                  <span className="tooltip">90%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">CSS</span>
              <div className="skill-bar">
                <span className="skill-per css">
                  <span className="tooltip">85%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">Javascript</span>
              <div className="skill-bar">
                <span className="skill-per javascript">
                  <span className="tooltip">60%</span>
                </span>
              </div>
            </div>

            <div className="skill-box">
              <span className="title">React JS</span>
              <div className="skill-bar">
                <span className="skill-per react">
                  <span className="tooltip">75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
