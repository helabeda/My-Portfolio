import React, {useState} from 'react'
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsFillAwardFill} from "react-icons/bs";
import { MdWork } from "react-icons/md";

import "./Nav.css"


const Nav = () => {
  const [activeNav, setAvtiveNav]=useState('#');
  
  return (
    <nav className='main_nav'>
      <a href='#home' onClick={() => setAvtiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setAvtiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#knowledges"  onClick={() => setAvtiveNav('#knowledges')} className={activeNav === '#knowledges' ? 'active' : ''}><BsFillAwardFill/></a>
      <a href='#works' onClick={() => setAvtiveNav('#works')} className={activeNav === '#works' ? 'active' : ''}><MdWork/></a>
      <a href="#contact"  onClick={() => setAvtiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav