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
          <div className="skills-bar">
          <div className="progress-bar">
            <span className="span-bar">HTML</span>
            <Tooltip
            className="tooltip-progress-html"
              position="top-end"
              opened
              label="90%"
              // offset={{ mainAxis: 5, crossAxis: 0 }}
            >
              <Progress value={90} />
            </Tooltip>
          </div>
          <div className="progress-bar">
          <span className="span-bar">CSS</span>
          <Tooltip
          
              position="top-end"
              opened
              label="85%"
              // offset={{ mainAxis: 5, crossAxis: 0 }}
            >
              <Progress value={85} />
            </Tooltip>
            </div>
          <div className="progress-bar">
          <span className="span-bar">Javascript</span>
          <Tooltip
              position="top-end"
              opened
              label="60%"
              // offset={{ mainAxis: 5, crossAxis: 0 }}
            >
              <Progress value={60} />
            </Tooltip>
            </div>
          <div className="progress-bar">
          <span className="span-bar">React JS</span>
          <Tooltip
              position="top-end"
              opened
              label="70%"
              // offset={{ mainAxis: 5, crossAxis: 0 }}
            >
              <Progress value={70} />
            </Tooltip>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;
