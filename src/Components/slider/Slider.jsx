import React from "react";
import imagenes from "../../Media/exports/imagenes";
import "../slider/Slider.css";
import { motion } from "framer-motion";

//slider usando "framer-motion" 

const Slider = () => {
  return (
    <motion.div className="slider-container">
      <div className="slider-cont">
         <motion.div className="slider" drag="x" dragConstraints={{right:200, left:-200}} dr>
        {imagenes.map((imagen) => (
          <motion.div className="imagen">
            <img src={imagen} alt="imagen" />
          </motion.div>
        ))}
      </motion.div>
      </div>
     
    </motion.div>
  );
};

export default Slider;
