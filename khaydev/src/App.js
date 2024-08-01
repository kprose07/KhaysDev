import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./css/variables.css";

function App() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const halfPageHeight = document.documentElement.scrollHeight / 2;

      if (scrollPosition >= halfPageHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar />

      {showFooter && <Footer />}
    </>
  );
}

export default App;
