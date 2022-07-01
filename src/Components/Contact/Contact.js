import React, {useRef, useState} from 'react'
import './Contact.css'
import { BsWhatsapp }from 'react-icons/bs'
import {SiGmail }from 'react-icons/si'
import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0d5xp8h','template_6cydgkk', form.current,'AMwwHMq9fKnntHE9Q')
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
        form.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset()
  };

  return (
    <section id='contact' className='section_contact'>
    <div className="bgimg-3 w3-display-container" id="contact"></div>
    <h5 className='contactMe'>Have a question or wantt to work together?</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <SiGmail className='contact_option-icon email_icon'/>
          <h4>Email</h4>
          <h5>abadahela@gmail.com</h5>
          <a href="mailto:abadahela@gmail.com" target="_blank" rel="noopener noreferrer" className='icon-send'>Send a Message</a>
        </article>
        <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon whatsApp_icon'/>
          <h4>WhatsApp</h4>
          <h5>+21621593065</h5>
          <a href='https://api.whatsapp.com/send?phone=+21621593065' rel="noopener noreferrer" target="_blank" className='icon-send'>Send a Message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name='message' rows="10" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        <span>{done && "Thanks for Contacting me"}</span>
      </form>
    </div>
    </section>
  )
}

export default Contact
