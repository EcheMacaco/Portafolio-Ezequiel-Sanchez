import React from 'react'
import "./About.css"
import imagen from "../../Media/EcheMacaco.jpg"

const About = () => {
  return (
    <div className='about-container'>
<div className='about-desc'>
    <h3>Acerca de</h3>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At dolorum doloribus adipisci perspiciatis, dolorem tempore accusamus voluptate laborum, libero molestias a facilis fugiat quasi earum, ad asperiores debitis eum minus.</p>
</div>
        <img className="img" src={imagen} alt="imagen about" />
    </div>
  )
}

export default About