import React, { useState } from 'react'
import './Work.css'
import dataCard from './dataCard'

const Work = () => {
  const [elementsCard, setElementsCard]= useState(2);
  
  const loadMore = () => {
    setElementsCard(elementsCard + elementsCard);
  
  }

  const slice1 = dataCard.cardData.slice(0, elementsCard)
  return (
    <section id='works'>
    <h5 className='work'>Here are some of my latest work.</h5>
    <h2>Works</h2>
    
    {slice1.map((item, index) => {
      return(
        <div className='container work_container'>
        <article className='work_items' key={index}>
        <div className= {`blog-card ${item.class}`}>
          <div className="meta">
            <div className="photo">
              <img src={item.img} alt={item.alt}/>
            </div>
            <ul className="details">
            <li className="tags">
              <ul>
                <li>{item.html} </li>
                <li>{item.css} </li>
                <li>{item.react} </li>
                <li>{item.redux} </li>
                <li>{item.javascript} </li>
                <li>{item.api}</li>
                <li>{item.dom} </li>
                <li>{item.bootstrap} </li>
                <li>{item.node} </li>
                <li>{item.express} </li>
                <li>{item.mongo}</li>
              </ul>
            </li>
            </ul>
          </div>
          <div className="description">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <p className="read-more">
              <a href={item.link} target='_blank'  rel="noopener noreferrer" >Show me</a>
            </p>
          </div>
        </div>
        </article>
        </div>
      )
    })}
    <div className='works_button'>
      <button className='btn btn-primary' onClick={() => loadMore()}>Load More</button>
    </div>
   
    </section>
  
  )
}

export default Work