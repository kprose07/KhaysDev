import React from "react";

// css
import "../css/skills.css";

function Skills() {
  const Fskils = [
    "React",
    "HTML",
    "CSS",
    "TypeScript",
    "JavaScript",
    "Angular",
    "Flask",
    "Figma",
    "UI/UX",
    "WebDesign",
  ];

  const Bskils = [
    "C++",
    "Kotlin",
    "Python",
    "NodeJS",
    "GitHub",
    "C",
    "Linux",
    "AWS",
    "FireBase",
    "SQL",
    "Unity",
    "Android Studio",
  ];

  return (
    <div>
      <div className="skills_cont">
        <div className="skills_sect">
          <p className="head_skills">Front End</p>
          <div className="skills_tags_cont">
            {Fskils.map((skill, index) => (
              <p key={index} className="skill_tag">
                {skill}
              </p>
            ))}
          </div>
        </div>

        <div className="skills_sect">
          <p className="head_skills">Back End</p>
          <div className="skills_tags_cont">
            {Bskils.map((skill, index) => (
              <p key={index} className="skill_tag">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
