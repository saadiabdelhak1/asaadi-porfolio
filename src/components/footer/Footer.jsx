import React from 'react';
import './Footer.scss';
import { motion } from 'framer-motion';


const Footer = ()=>{
  return (
    <div className="footer-container">
      <div className='footer'>
          <a href="https://www.linkedin.com/in/abdelhak-saadi-06a21b1bb/"><img src="/linkedin.png" alt="" /></a>
          <a href="https://github.com/saadiabdelhak1"><img src="/github.png" alt="" /></a>
      </div>
      <motion.div className="slidingTextContainer" initial={{x:250}} animate={{x:'-300%', transition:{duration:15, repeat:Infinity, }}}>
            Saadi.dev
      </motion.div>
    </div>
  )
}

export default Footer