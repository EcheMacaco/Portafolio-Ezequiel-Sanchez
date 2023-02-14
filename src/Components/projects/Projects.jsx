import React from "react";
import "./Projects.css";
import video1 from "../../Media/JuegoMasterMind.mp4";
import video2 from "../../Media/Calculadora.mp4";
import video3 from "../../Media/AppTareas.mp4";
import video4 from "../../Media/JuegoMayorMenor.mp4";
import video5 from "../../Media/Clima.mp4";
import { motion } from "framer-motion";

const Projects = ({ on }) => {
  return (
    <div className="project-container" data-on={on}>
      <motion.div

        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      className="proyectos" data-on={on}
      >
        <h1 >PROYECTOS</h1>
        </motion.div>
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
      <div className="project-box">
        <video
          className="project-image"
          controls
          src={video5}
          alt="App Clima"
        />
        App Clima
      </div>
      
    </div>
  );
};

export default Projects;
