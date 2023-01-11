import React from "react";
import "./Projects.css";
import video1 from "../../Media/JuegoMastermind.mp4";
import video2 from "../../Media/Calculadora.mp4";
import video3 from "../../Media/AppTareas.mp4";
import video4 from "../../Media/JuegoMayorMenor.mp4";

const Projects = () => {
  return (
    <div className="project-container">
      <h2 className="h2-p">PROYECTOS</h2>
      <div className="project-box">
        <video
          className="project-image"
          controls
          src={video1}
          alt="Mastermind"
        />
        Juego Mastermind
      </div>
      <div className="project-box">
        <video className="project-image" controls src={video2} alt="imagen" />
        Calculadora
      </div>
      <div className="project-box">
        <video
          className="project-image"
          controls
          src={video3}
          alt="Mastermind"
        />
        AppTareas
      </div>
      <div className="project-box">
        <video
          className="project-image"
          controls
          src={video4}
          alt="Juego Mayor Menor"
        />
        Juego Mayor/Menor
      </div>
    </div>
  );
};

export default Projects;
