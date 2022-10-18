import React from 'react'
import "./About.css"
import imagen from "../../Media/EcheMacaco.jpg"
import { motion } from "framer-motion";

//framer motion para animacion al scroll
const About = () => {
  return (
    <div className='about-container'>
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:3}}  viewport={{once:false}}  className='about-desc'>
    <h3>Acerca de</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum doloribus adipisci perspiciatis, dolorem tempore accusamus voluptate laborum, libero molestias a facilis fugiat quasi earum, ad asperiores debitis eum minus.</p>
</motion.div>
<motion.div initial={{opacity:0, rotate:-20}} whileInView={{opacity:1, rotate:0}} transition={{duration:2}}  viewport={{once:false}} >
   <motion.img className="img" src={imagen} alt="imagen about" />
    </motion.div>
</div>
       
  )
}




export default About