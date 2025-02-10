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
          <br />
          En el año 2021 comencé a estudiar "Programación profesional desde
          cero" en un curso de Udemy con la idea de aprender algo nuevo. En poco
          tiempo mi interés por la programación fue creciendo. Me anoté en
          cursos de HTML, CSS, JS, React, SQL, Python, AWS y Figma entre otras
          tecnologías. Recibí mi certificación de AWS Cloud Practitioner y me
          inscribí en un curso para prepararme en la certificación AWS Solutions
          Architect Associate. También me inscribí en un curso de UTN llamado
          "DevOps, integración y agilidad continua". Estoy disfrutando mi
          aprendizaje y busco mi primer trabajo en el área de IT.
        </p>
      </motion.div>
      <motion.div
        className="img-box"
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: false }}
      >
        <motion.img className="img" src={imagen} alt="imagen about" />
      </motion.div>
    </div>
  );
};

export default About;
