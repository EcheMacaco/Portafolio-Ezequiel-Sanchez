import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./Components/cover/Cover";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import Slider from "./Components/slider/Slider";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";
import { motion } from "framer-motion";

function App() {
  const [scroll, setScroll] = useState(0);

  //switch con framer motion
  const [on, setOn] = useState(false);
  const toggleSwitch = () => setOn(!on);
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

  //evaluar si hay scroll
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scroll]);
  return (
    <div className="App">
      <Navbar isScrolling={scroll} />
      <Cover />
      <div className="switch-container" data-on={on}>
        <div className="switch" data-on={on} onClick={toggleSwitch}>
          
      <motion.div className="handle" layout transition={spring} />
      
    </div>
      </div>
      
      <About on={on} />
      <Slider on={on}/>
      <Projects on={on}/>
      <Contact on={on} />
    </div>
  );
}

export default App;
