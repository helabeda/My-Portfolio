import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { SiBootstrap, SiExpress, SiJava, SiJavascript, SiMongodb, SiMysql, SiRedux, SiMaterialui, SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import './Knowledges.css'


const Knowledges = () => {
  return (
    <section id='knowledges'>
      <h5 className='skills'>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML5 <AiFillHtml5 className='experience_details-html'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS3 <DiCss3 className='experience_details-css'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React Js <DiReact className='experience_details-react'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Redux <SiRedux className='experience_details-redux'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Javascript <SiJavascript className='experience_details-javascript'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Bootstrap <SiBootstrap className='experience_details-bootstrap'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Material UI <SiMaterialui className='experience_details-material'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Tailwind <SiTailwindcss className='experience_details-material'/></h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Node JS <FaNode className='experience_details-node'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MongoDB <SiMongodb className='experience_details-mongo'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Express Js <SiExpress className='experience_details-express'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Java <SiJava className='experience_details-java'/></h4>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>MySQL <SiMysql className='experience_details-mysql'/></h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Knowledges