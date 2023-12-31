import React, {useRef} from 'react';
import './Contact.scss';
import {motion, animate} from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {

 
  const ref = useRef();

  const refreshPage = ()=> {
    window.location.reload();
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tium0rd', 'template_bu3lv4g', ref.current, 'm_rDNRcNTOjHhi2Ss')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>
        <motion.div className="text_container" >
            <h1>Let's Work Together</h1>
            <div className="item">
                <h2>Email</h2>
                <p>hardyhar06@gmail.com</p>
            </div>
            <div className="item">
                <h2>Address</h2>
                <p>Chicago, IL</p>
            </div>
            <div className="item">
                <h2>Phone Number</h2>
                <p>+1 773-750-6480</p>
            </div>

        </motion.div>
        <motion.div className="form_container" initial={{opacity:0, y:-300}} 
                                               whileInView={{opacity:1, y:0}} 
                                               transition={{duration:0.8}}>
            <form action="" ref={ref} onSubmit={sendEmail} >
                <input type="text" required placeholder='Name' name="name"  />
                <input type="email" required placeholder='Email' name="email" />
                <textarea  rows={8} placeholder='message' name="message"></textarea>
                <button >Submit</button>
            </form>

        </motion.div>

    </div>
  )
}

export default Contact