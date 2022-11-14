import React from "react";
import "./Projects.css";
import imagen from "../../Media/images.jpg";


const Projects = () => {
  return (
    <div className="project-container">
      <h2 className="h2-p">PROYECTOS</h2> 
      <div className="project-box">
        <img className="project-image" src={imagen} alt="imagen" />
        proyecto 1
      </div>
      <div className="project-box">
      <img className="project-image" src={imagen} alt="imagen" />
      proyecto 2
      </div>
      <div className="project-box">
      <img className="project-image" src={imagen} alt="imagen" />
      proyecto 3
      </div>
      <div className="project-box">
      <img className="project-image" src={imagen} alt="imagen" />
      proyecto 4
      </div>
      <div className="project-box">
      <img className="project-image" src={imagen} alt="imagen" />
      proyecto 5
      </div>
      
    </div>
  );
};

export default Projects;
