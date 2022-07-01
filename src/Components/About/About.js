import React from 'react'
import {FaAward, FaUniversity} from "react-icons/fa";
import { GrCertificate} from "react-icons/gr";
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <h5 className='know'> Get To Know</h5>
      <h2> About Me</h2>
      <div className='container about_container'>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FaUniversity className='about_icon'/>
              <h5>Diploma</h5>
              <small>Electrical Engineering <br/> 2+ Years Working</small>
            </article>
            <article className='about_card'>
              <GrCertificate className='about_icon'/>
              <h5>Certificate</h5>
              <small>Full Stack JAVASCRIT Bootcamp <br/> 1+ Years Working</small>
            </article>
          </div>
          <p>
            Hello👋! My name is Hela Abeda, i'm a front-end developer with focus on the MERN stack, but still exporing other
            technologies and frameworks that catch my interest. I started my coding journey about a year ago, i have serious passion for front-end effects, animation, and creating intuitive dynamic user experiences.
            I describe myself as a passionate developer who loves coding, open source,  and the web platform. 
            A aside from developement, i like to create and contribute to open source projects, that helps me to learn a ton of new stuff, grow as a developer.<br/> 
            I'm also an electrical engineer.
          </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About