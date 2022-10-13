import React from "react";
import "./Navbar.css";

const Navbar = ({ isScrolling }) => {
  //subir al tope al hacer click en navbar
  const toTheTop = ()=>{
    window.scroll ({ top:0, left: 0, behavior: "smooth"});
  }
  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar-logo" onClick={toTheTop}>Ezequiel</div>
    </nav>
  );
};

export default Navbar;
