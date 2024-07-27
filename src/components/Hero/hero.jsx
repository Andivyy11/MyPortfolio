import './hero.scss'
import {motion} from 'framer-motion'
export default function Hero()
{
    return <div className='hero'>
        <motion.img src='./images/profile.png' alt="avatar" initial={{x:-500}} animate={{x:100}} transition={{ duration:1.5 , type:"spring"}}></motion.img>
        <motion.div className='bio' initial={{opacity:0 , scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:1.5, type:"spring"}}>
            <h2>Anuradha Singh</h2>
            <h1>Software Developer</h1>
            <a href="#Works">See my works</a>
            <a href="#Contact">Contact me</a>
        </motion.div>
        <motion.div className='floatingText' initial={{x:700}} animate={{x:-200}} transition={{duration:5,repeat:Infinity, repeatType:'reverse'}}>
            <motion.span >Developer Designer</motion.span>
        </motion.div>
    </div>
}