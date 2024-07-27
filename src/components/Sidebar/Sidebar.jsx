import './Sidebar.scss'
import React from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'
import {motion} from 'framer-motion'

export default function SideBar(){

   const [ open , setOpen] = React.useState(false)
   var links=["Home Page","About Me","Skills","Works","Contact"]

   const variants={
    open:{ clipPath:"circle(1000px at 0px 0px)",
           transition:{
            duration:2,
            type:"spring"}
        },
    closed : { clipPath:"circle(30px at 50px 50px)",
               width:"80px",
               height:"80px",
               transition:{}     
        },  
   }
   const linkVar={
        open: (index)=>(
            { opacity: 1,
              x:0,
              y:0,
              transition:{ delay: index*0.14} 
            }
        ),
        closed:
            { opacity: 0,
              x:-100, 
              y:-100,
            }
   }

   return (
    <div className='sidebar'>
        <motion.div className='bg' variants={variants} animate={open ? "open" : "closed"}>
            <motion.div>
                { links.map((link,index) => <motion.a href={`#${link}`}  key={index}  variants={linkVar} custom={index} animate={ open? "open":"closed"} whileHover={{scale:1.2}}>{link}</motion.a>)}
            </motion.div>
        </motion.div>
        <ToggleButton setOpen={setOpen} open={open}/>
    </div>
   )
}