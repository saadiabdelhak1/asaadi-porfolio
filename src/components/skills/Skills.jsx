import React from 'react';
import './Skills.scss';
import { delay, motion} from 'framer-motion';

const Skills = () => {
    

  return (
    <div className='animation'>
        
        <img src="/stars.png" alt="" id='stars'/>
        <img src="/sun.png" alt="" id='sun' />
            <motion.div className="title">
                <h1>Skills</h1>
            </motion.div>
        <motion.div className="container" >
            
            <div className="skills">

                <motion.div className="skill_box" style={{scale:0.5}} initial={{x:300, y:-100}} animate={{x:'-700%', transition:{duration:45, repeat:Infinity,repeat:"mirror"}}}>
                    Vite
                </motion.div> 
                <motion.div className="skill_box" style={{scale:0.6}}  initial={{x:300, y:-300}} animate={{x:'-700%', transition:{duration:10, repeat:Infinity,repeat:"mirror"}}}>
                                            
                    HTML & CSS  
                </motion.div>
                <motion.div className="skill_box" style={{scale:0.7}} initial={{x:400, y:-200}} animate={{x:'-700%', transition:{duration:15, repeat:Infinity,repeat:"mirror"}}}>
                    JavaScript
                </motion.div>
                <motion.div className="skill_box" style={{scale:0.8}} initial={{x:600, y:-100}} animate={{x:'-700%', transition:{duration:25, repeat:Infinity,repeat:"mirror"}}}>
                    React/Redux
                </motion.div>
                <motion.div className="skill_box" style={{scale:0.9}} initial={{x:500}} animate={{x:'-700%', transition:{duration:20, repeat:Infinity,repeat:"mirror"}}}>
                    Python
                </motion.div>
                <motion.div className="skill_box" style={{scale:0.7}} initial={{x:700, y:250}} animate={{x:'-700%', transition:{duration:30, repeat:Infinity,repeat:"mirror"}}}>
                    Django
                </motion.div>
                <motion.div className="skill_box" stytle={{scale:0.8}} initial={{x:1000, y:100}} animate={{x:'-700%', transition:{duration:30, repeat:Infinity,repeat:"mirror"}}}>
                    MySql
                </motion.div>
                <motion.div className="skill_box" style={{scale:0.5}} initial={{x:900, y:-300}} animate={{x:'-700%', transition:{duration:20, repeat:Infinity,repeat:"mirror"}}}>
                    Git
                </motion.div>
                
            </div> 
        </motion.div>
        <img src="/mountains.png" alt="" className='mountain'/>
        
    </div>
  )
}

export default Skills