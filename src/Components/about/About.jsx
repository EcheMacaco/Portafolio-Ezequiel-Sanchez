import React from 'react'
import "./About.css"
import imagen from "../../Media/EcheMacaco.jpg"
import { motion } from "framer-motion";

//framer motion para animacion al scroll
const About = () => {
  return (
    <div className='about-container'>
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3}}  viewport={{once:false}}  className='about-desc'>
    
    <p>
      
      La vida es un aprendizaje constante.. 
      En cada paso que doy en mis proyectos observo mis errores para entenderlos y mejorar. Disfruto también de mis logros pero aún más del camino que hago para obtenerlos. Dando lo mejor de uno mismo aportamos significativamente en nuestro trabajo, en nuestro entorno y sin duda nos estamos nutriendo de experiencia.
      
      
    </p>
</motion.div>
<motion.div initial={{opacity:0, rotate:-20}} whileInView={{opacity:1, rotate:0}} transition={{duration:2}}  viewport={{once:false}} >
   <motion.img className="img" src={imagen} alt="imagen about" />
    </motion.div>
</div>
       
  )
}




export default About