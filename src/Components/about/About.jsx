import React from "react";
import "./About.css";
import imagen from "../../Media/Ezequiel.jpeg";
import { motion } from "framer-motion";


//framer motion para animacion al scroll
const About = ({ on }) => {
  return (
    <div className="about-container" data-on={on}>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: false }}
        className="about-desc"
        data-on={on}
      >
        
        <p>
          <h1>Sobre mí</h1>
          <br/>
          En el año 2021 comencé a estudiar "Programación profesional desde cero" en un curso de 49.5 hs de Udemy con la idea de aprender algo nuevo. En poco tiempo mi interés por la programación fue creciendo. Me anoté en cursos de HTML, CSS, JS y Figma descubriendo que mi interés estaba en el Front-end. Hoy sigo adquiriendo conocimientos para perfeccionarme y seguir aprendiendo. 
        </p>
      </motion.div>
      <motion.div
        className="img-box"
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: false }}
      >
        <motion.img className="img" src={imagen} alt="imagen about" />
      </motion.div>
    </div>
  );
};

export default About;
