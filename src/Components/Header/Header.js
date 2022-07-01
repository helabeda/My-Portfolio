import React from 'react'
import Typical from 'react-typical'
import { RiHeart3Line} from "react-icons/ri";
import {Link, scroller} from 'react-scroll'
import './Header.css'
import Cv from '../Cv/Cv';


const Header = () => {
  const scrollToTheNext = () =>{
    scroller.scrollTo("main_nav", {smooth : true, duration : 1000})
}

return (
<div className='home' id="home">
<header id="header">
  <div className='container'>
    <div className="title">
        <div><span className="typcn typcn-heart-outline icon heading"><RiHeart3Line/></span></div>
        <div className="smallsep heading"></div>
        <div className='profile-container'>
        <div className='profile-parent'>
        <div className='profile-details'>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello, I'M <span className='highlighted-text'>Hela</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 👩‍💻" , 
                    1000,
                    "MERN Stack Dev 🌐",
                    1000,
                    "Front End Dev 💻✨", 
                    1000,
                    "React Dev  ⚛️",
                    1000,
                  ]} 
                />
              </h1>
            </span>
          </div>
          <div>
           <Cv/>
          </div>
        </div>
      </div>
      </div>
        <Link  className="smoothscroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
        </Link> 
    </div>
    <Link className="smoothscroll" onClick={scrollToTheNext} >
        <div className="scroll-down" ></div>
    </Link> 
  </div>
</header>
</div>
)

               
}
export default Header