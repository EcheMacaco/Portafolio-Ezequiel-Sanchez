import React from "react";
import "./About.css";
import imagen from "../../Media/EcheMacaco.jpg";
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod
          nam beatae, repudiandae ipsa voluptatibus adipisci dolorem, laboriosam
          accusantium sapiente culpa voluptates? Repellat modi dolores quasi
          minus enim iure dicta soluta similique obcaecati facilis architecto
          incidunt, ex veniam excepturi consequatur, iste quae deserunt.
          Distinctio maiores rerum neque, facilis vel inventore nisi
          necessitatibus, aliquam atque tempora consequuntur veritatis aut
          dolores eaque, culpa explicabo architecto. Tenetur quia quasi quas
          inventore doloribus repellat?
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
