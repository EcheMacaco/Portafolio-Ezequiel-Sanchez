import React from "react";
import imagenes from "../../Media/exports/imagenes";
import "../slider/Slider.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useState } from "react";

//slider usando "framer-motion"

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slider = ({on}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, imagenes.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div className="slider-container" data-on={on}>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            Aprendizaje
          </motion.h1>
          <motion.img
            className="imagen"
            key={page}
            src={imagenes[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 50 },
              opacity: { duration: 0.8 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
          <div className="btns">
            <div className="btn" onClick={() => paginate(1)}>
              {"-"}
            </div>
            <div className="btn" onClick={() => paginate(-1)}>
              {"+"}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Slider;
