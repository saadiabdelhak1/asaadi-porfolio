
import './Home.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial:{
        y: -500,
        opacity: 0,
    },
    animate: {
        y:0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Home = () => {
  return (
    <div className='home' >
        <motion.div className="wrapper">
        <div className="imageContainer">
                <motion.img src="/home3.png" alt=""/>
        </div>
            <motion.div 
                className="textContainer" 
                Variants={textVariants} 
                initial="initial" 
                animate="animate">
                <motion.h2 initial={{opacity:0, y:200}} 
                           whileInView={{opacity:1, y:0}} 
                           transition={{duration:1}}>
                    Abdelhak Saadi
                </motion.h2>
                <motion.h1 initial={{opacity:0, y:200}} 
                           whileInView={{opacity:1,x:0, y:0}} 
                           transition={{duration:0.8}}>
                    Full Stack Web Developer
                </motion.h1>
                <motion.div className="buttons" initial={{opacity:0, y:200}} 
                                                whileInView={{opacity:1, y:0}} 
                                                transition={{duration:0.6}}>
                    <motion.button Variants={textVariants} whileHover={{scale:1.05}}>Download Resume</motion.button>
                    <a href="#Contact"><motion.button Variants={textVariants} whileHover={{scale:1.05}}>Contact Me</motion.button></a>
                </motion.div>
                <motion.img src="/scroll.png" alt=""  animate={{y:20, opacity:0, transition:{duration:1.5, repeat:Infinity,}}}/>
            </motion.div>
        </motion.div>
        <motion.div className="slidingTextContainer" initial={{x:0}} animate={{x:'-250%', transition:{duration:10, repeat:Infinity, repeatType:"mirror",}}}>
            I PLAN DESIGN BUILD
        </motion.div>
        
    </div>
  )
}

export default Home