import React from "react";

//css
import "../css/footer.css";
//images
import flogo from "../imgs/kd.png";
function footer() {
  return (
    <>
      <footer>
        <img src={flogo} alt="KhaysDev Logo" />
      </footer>
    </>
  );
}

export default footer;
