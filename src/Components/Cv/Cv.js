import React from 'react'
import CV_WebDeveloper from '../../assets/CV_WebDeveloper.pdf'
import "./Cv.css"

const Cv = () => {
  return (
    <div className='cta'>
        <a href={CV_WebDeveloper} download="Hela Abeda.pdf" className='btn'>Get Resume</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv