import { motion } from 'framer-motion'
import classes from './LandingPage.module.scss'

interface LandingPageButton {
    text: string
    onClick?: () => void
}

export const LandingPageButton = ({text, onClick}: LandingPageButton) => {


    return (
        <motion.div
            onClick={onClick}
            whileHover={{scale: 1.2}}
            transition={{type:'spring', duration:0.3, damping: 10, bounce:0.3, stiffness:200}}
            className={classes.makeBurgerWrap}
        >
            <div className={classes.makeBurger}>{text}</div>
        </motion.div>
    )
}
