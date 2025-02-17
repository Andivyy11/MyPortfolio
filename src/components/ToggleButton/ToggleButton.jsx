import {motion} from 'framer-motion'

export default function ToggleButton(props){
    return <div>
        <button onClick={()=>{props.setOpen(prev => !prev)}}>
            <svg width="25" height="25" viewBox='0 0 25 25'>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{ closed : { d: "M 2 2.5 L 20 2.5"} , open : { d:"M 3 16.5 L 17 2.5"}}} animate={props.open ? "open" : "closed"}></motion.path>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{ closed : { opacity:1} , open : {opacity:0, transition:{ duration:0} }}} animate={props.open ? "open" : "closed"}></motion.path>
                <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{ closed : { d: "M 2 16.346 L 20 16.346"} , open : { d:"M 3 2.5 L 17 16.346"}}} animate={props.open ? "open" : "closed"}></motion.path>
            </svg>
        </button>
    </div>
}