import React from 'react';
import './Cover.css';
import coverVideo from '../../Media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className='cover-container'>
<video className='video' src={coverVideo} autoPlay loop muted/>
<h1>
    Ezequiel Sanchez Pais
</h1>
<p> Desarrollador Web Front-End Junior</p>

    </div>
  )
}

export default Cover