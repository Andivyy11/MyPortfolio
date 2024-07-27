import { useRef } from 'react'
import './Parallax.scss'

import { motion , useScroll , useTransform} from 'framer-motion'

export default function Parallax({type})
{
    const ref = useRef();
   
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    }) 

    const yText = useTransform(scrollYProgress , [0,1] , ["0%", "500%"]);
    const yPlanets = useTransform(scrollYProgress , [0,1] , ["0%", "100%"]);
    const xStars = useTransform(scrollYProgress , [0,1] , ["0%", "100%"]);


    return <motion.div className='parallax' ref={ref} style={{ backgroundImage : type !== "Services" ? "linear-gradient(180deg ,rgb(47, 47, 47) , rgb(38, 14, 58))" : "linear-gradient(180deg ,rgb(38, 14, 58), rgb(47, 47, 47))"}}>
        <motion.h1 style={{y: yText}}>{type === "Skills" ?  "My Skills" : "My Projects"}</motion.h1>
        <motion.div className='stars' style={{x:xStars}}></motion.div>
        <motion.div className={type === "Skills" ? "sun" : "planets"} style={{y:yPlanets}}></motion.div>
        <motion.div className='mountains'></motion.div>
    </motion.div>
}
