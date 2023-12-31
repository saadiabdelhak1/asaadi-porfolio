import React, { useRef } from 'react';
import{ motion, useScroll, useSpring, useTransform } from "framer-motion";
import './Projects.scss';

const projects = [
  {
    id:1,
    title:"TECHshop e-commerce website",
    img:"/project-TECHshop-min.png",
    descr:"Electro-Store is a prototype of a mini E-commerce web app, designed for buying and selling electronic products online. It has great potential to be a better version of the conventional stores and boost online sales, reduce overpricing ofproducts and provide more verified information, and make shopping for electronics easier.",
    git:"https://github.com/techis-fantastic-4/e-commerce",
    website:"https://fantastic4-commerce.herokuapp.com",
    
  },
  {
    id:2,
    title:"Twitter clone Project",
    img:"/project-twitter-min.png",
    descr:"With this project, a platform where one can express thoughts anonymously, and showcase 100+ pictures and much more on a single website. This anonymity adds to 5+ special features. Without an account, one can share thoughts and memories with the world at anytime.Learned 5 CRUD methods from this project and the same used in the project, Technologies like Html, CSS, Bootstrap,Javascript / JQuery, Django, Cloudinary (To host uploaded 100+ images on CDN), and Heroku.",
    git:"https://github.com/saadiabdelhak1/twitter",
    website:"https://twitter-abdelhak.herokuapp.com/",

  },
  {
    id:3,
    title:"Netflix Project",
    img:"/project-netflix-min.png",
    descr:"This informative movie review website, one can compare 100+ movie reviews on recent, or old movies and even get a sneak peek at the trailers. This extension helps one save time by 75% by loading all the current and running movies in a single click.",
    git:"github",
    website:"https://netflix-abdelhak.herokuapp.com/",

  },
  
]

const Item = ({project}) =>{

  const ref = useRef();

  const {scrollYProgress} = useScroll({target:ref,});

  const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

  return (
    <section id='Projects'>
      <div className="container">
          <div className="wrapper">
          <div className="image_container" ref={ref}>
            <motion.div className="p" initial={{opacity:0}}
                                      whileHover={{opacity:0.9}}
                                      whileTap={{opacity:0.9}}
                                      transition={{duration:0.6}}>
              <p>{project.descr}</p>
              <div className="buttons">
                <button href={project.git} >github</button>
                <button href={project.website} >Web Site</button>
            </div>
            </motion.div>
            <img src={project.img} alt="" />
          </div>
          <motion.div className="text_container" style={{y}}>
            <h2>{project.title}</h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


const Projects = () => {
 
  const ref= useRef()

  const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
      <div className="Projects" ref={ref}>
          <div className="progress">
            <h1>Projects </h1>
            <motion.div className="progressBar" style={{scaleX}}></motion.div>
          </div>  
          {projects.map(project=>(
            <Item project={project} key={project.id} />
          ))}
          
       </div>
  )
}

export default Projects