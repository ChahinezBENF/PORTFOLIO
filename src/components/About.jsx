import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        {/* Small Introduction */}
        <div className="box introduction">
          <h3>Introduction</h3>
          <hr />
          <p>
            I am a passionate Software Engineer with a Master’s degree in Information Systems. I specialize in building efficient, scalable applications and leveraging technology to solve real-world problems.
          </p>
        </div>

        {/* Age and Address */}
        <div className="box personal-info">
          <h3>Personal Info</h3>
          <hr />
          <p><strong>Age:</strong> 29</p>
          <p><strong>Address:</strong> New York, USA</p>
        </div>

        {/* Language Proficiency */}
<div className="box language-proficiency">
  <h3>Language Proficiency</h3>
  <hr />
  <div className="languages">
    {/* French */}
 <div className="circle">
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="45" stroke="#f0f0f0" strokeWidth="10" fill="none" />
    <circle
      cx="50"
      cy="50"
      r="45"
      stroke="#FF914D"
      strokeWidth="10"
      fill="none"
      style={{
        strokeDasharray: 283, // Full circle perimeter
        strokeDashoffset: 283 - (283 * 90) / 100, // 90% proficiency
        transition: "stroke-dashoffset 1.5s ease-out",
      }}
    />
  </svg>
  <span>
    French
    <br />
    90%
  </span>
</div>

    {/* Arabic */}
    <div className="circle">
      <svg>
        <circle cx="50" cy="50" r="45"></circle>
        <circle
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDasharray: "283",
            strokeDashoffset: `${283 - (283 * 100) / 100}`, // 100% proficiency
          }}
        ></circle>
      </svg>
      <span>
        Arabic
        <br />
        100%
      </span>
    </div>
    {/* English */}
    <div className="circle">
      <svg>
        <circle cx="50" cy="50" r="45"></circle>
        <circle
          cx="50"
          cy="50"
          r="45"
          style={{
            strokeDasharray: "283",
            strokeDashoffset: `${283 - (283 * 80) / 100}`, // 80% proficiency
          }}
        ></circle>
      </svg>
      <span>
        English
        <br />
        80%
      </span>
    </div>
  </div>
</div>

       {/* Programming Language Proficiency */}
        <div className="box programming-skills">
          <h3>Programming Proficiency</h3>
          <hr />
          <div className="skills-container">
            <div className="skills">
              <div className="skill">
                <label>JavaScript</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill">
                <label>React</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="skill">
                <label>JAVA</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skill">
                <label>C++</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div className="skill">
                <label>SQL</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div className="skill">
                <label>MongoDb</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
