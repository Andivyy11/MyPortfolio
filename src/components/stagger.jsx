import { motion } from 'framer-motion'

export default function Stagger()
{
    return (
        <motion.div initial={{opacity:0}} animate={{ opacity:1}} transition={{ delay:1, staggerChildren:0.5}}>
            <motion.span key="1">item 1</motion.span>
            <motion.span key="2">item 1</motion.span>
            <motion.span key="3">item 1</motion.span>
            <motion.span key="4">item 1</motion.span>
        </motion.div>
    )
}