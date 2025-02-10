import React from 'react';
import './Cover.css';
import coverVideo from '../../Media/coverVideo.mp4';
import { motion } from "framer-motion";

const Cover = () => {
  return (
    <div className='cover-container'>
<video className='video' src={coverVideo} autoPlay loop muted/>
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}}  viewport={{once:false}}>
  <div className='text'>
      <h1>
    Ezequiel Sanchez Pais
</h1>
<p> Desarrollador Web</p>
  </div>

</motion.div>

    </div>
  )
}

export default Cover