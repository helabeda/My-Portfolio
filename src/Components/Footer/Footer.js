import React from 'react'
import './Footer.css'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import {IoHeart} from "react-icons/io5"

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer_logo'>HA</a>
      <ul className='permalinks'>
        <li><a  href='#home' >Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href="#knowledges">Experience</a></li>
        <li><a href='#works'>Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.linkedin.com/in/hela-abada-b0b560120/' target="_blank"  rel="noopener noreferrer" className='linkedin'><BsLinkedin/></a>
        <a href='https://github.com/helabeda' target="_blank"  rel="noopener noreferrer"  className='github'><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>Copyright &copy; All rights reserved | Made with <IoHeart className='footer_icon'/> by Hela Abeda </small>
      </div>
    </footer>
  )
}

export default Footer