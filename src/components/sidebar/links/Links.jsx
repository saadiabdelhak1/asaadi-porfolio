import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    open:{
        transition:{
            staggerChildren: 0.2,
        },
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -5,

        }
    }
}


const itemVariants = {
    open:{
        y: 50,
        opacity: 1,
    },
    closed:{
        y: 0,
        opacity: 0,
    }
}

const items = [
    "Home",
    "Skills",
    "Projects",
    "Contact",
]

const Links = ({setOpen}) => {
  return (
    <motion.div className='links' variants={variants}>
        {items.map(item=>(
            <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}} onClick={() => setOpen((prev) => !prev)}>
                {item}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links