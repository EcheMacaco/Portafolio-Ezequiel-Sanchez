import React, {useState, useEffect} from "react";
import "./App.css";
import Cover from "./Components/cover/Cover";
import Navbar from "./Components/navbar/Navbar";
import About from "./Components/about/About";
import Slider from "./Components/slider/Slider";
import Projects from "./Components/projects/Projects";
import Contact from "./Components/contact/Contact";





function App() {
  const [scroll, setScroll] = useState(0)

  //evaluar si hay scroll
  const handleScroll =()=> {
    const position = window.pageYOffset;
    setScroll(position);
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  }, [scroll]

  )
  return (
<div className="App">
  <Navbar isScrolling={scroll} />
 <Cover/>
 <About/>
 <Slider/>
 <Projects/>
 <Contact/>
</div>
  );
}

export default App;
