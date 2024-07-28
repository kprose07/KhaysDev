import React from "react";

// CSS
import "../css/home.css";
import "../css/variables.css";

//images
import soBG from "../imgs/sectionbg.png";

function home() {
  return (
    <>
      <div className="home_contain">
        <div className="section_one">
          <p id="so_text">Introducing...</p>
        </div>
        <div className="section_two">
          <div className="stco">
            <p className="so_HeadText">Khaylah Rose</p>
            <p className="so_SubText">Fullstack Developer</p>
            <p className="so_Detail">
              Greetings! I'm Khaylah Rose, an aspiring computer engineer
              currently in my junior year, Class of 2025. With a passion for
              both front-end and back-end development, I strive to create
              seamless and impactful user experiences. My goal is to leverage my
              skills in computer engineering to drive positive change within our
              community. Let's build the future together!
            </p>
            <button id="resume">Resume</button>
          </div>
          <div className="stct">
            <div className="profImage"></div>
          </div>
        </div>
        <div className="section_three">
          <p className="Head">About</p>
          <div className="cards"></div>
        </div>
        <div className="section_four">
          <p className="Head">Skills</p>
        </div>
        <div className="section_five">
          <p id="proj" className="Head">
            Projects
          </p>
        </div>
      </div>
    </>
  );
}

export default home;
