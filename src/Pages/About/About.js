import React from "react";
import "../About/About.css";
import krs_pic from "../../Assets/krs_pic.jpeg";
const About = () => {
  return (
    <div>
      <div className="about-page">
        <div className="about-page-container">
          <h2>About</h2>
          <div className="underline"></div>
          <div className="about-me-image">
            <img src={krs_pic} />

            <div className="right-content">
              <h3>
                My name is <span className="namediv">Sudhahar K R.</span>
              </h3>
              <p>
                I'm a Frontend Developer. I finished in Livewire Institute in
                Karur. To work in an environment which encourages me to succeed
                and grow professionally where I can utilize my skills and
                knowledge appropriately.
              </p>
              <div className="info1">
                <p>
                  <span>Email :</span> sudhaharkr1999@gmail.com
                </p>
                <p>
                  <span>Degree :</span> MBA
                </p>
              </div>
              <div className="info2">
                <p>
                  <span>Phone :</span> +91-9080305363
                </p>
                <p>
                  <span>City :</span> Karur
                </p>
              </div>
            </div>
          </div>
          <div className="about-page-education-container">
            <h3>Education:</h3>
            <h3 className="timeline-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-calendar"
                width="24"
                height="24"
                color="blue"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M11 15h1" />
                <path d="M12 15v3" />
              </svg>
               <span className="timeline-years">2020 - 2022</span>
            </h3>
            <h4 class="timeline-title">MBA</h4>
            <p class="timeline-text">
              I am Completed my Master of Business Administration with 7.70%.
            </p>
            <h3 className="timeline-date">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-calendar"
                width="24"
                height="24"
                color="blue"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M11 15h1" />
                <path d="M12 15v3" />
              </svg>
               <span className="timeline-years">2017 - 2020</span>
            </h3>
            <h4 class="timeline-title">B.Com</h4>
            <p class="timeline-text">
              I am Completed my Bachelor of Commerce with 63.5%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
