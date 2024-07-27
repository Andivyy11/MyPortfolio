import SideBar from '../Sidebar/Sidebar'
import './Navbar.scss'
import { motion} from 'framer-motion'


export default function Navbar(){
    return (
        <div className='navbar'>
            <SideBar/>
            <div className='wrapper'>
                <motion.div className='logo' initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>CodeCrafter</motion.div>
                <div className='socials'>
                   <span><a href="https://www.linkedin.com/in/anuradhasingh12/">LinkedIn</a></span>
                   <span><a href="https://github.com/Andivyy11">GitHub</a></span>
                </div>
            </div>
        </div>
    )
}