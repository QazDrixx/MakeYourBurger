import classes from './LandingPage.module.scss'
import { LandingPageButton } from './LandingPageButton'
import { useNavigate } from 'react-router-dom'
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage'
import { motion } from 'framer-motion'
import { MYBname } from '../../components/MYBname/MYBname'


export const LandingPage = () => {
    const navigate = useNavigate()
    
    return (
        <AnimatedPage
            xInitial='100%'
            xExit='-100'
        >
            <div className={classes.landingPageWrap}>
                <MYBname/>
                <motion.div 
                className={classes.imagesWrap}
                initial={{y: -200}}
                animate={{y: 0}}
                transition={{duration:0.5, type:'spring'}}
                >
                    <div className={classes.burger}></div>
                    <div className={classes.burgerBackground}></div>
                    <LandingPageButton onClick={() => navigate('/make')} text='MAKE BURGER'/>
                </motion.div>
            </div>
        </AnimatedPage>
    )
}

