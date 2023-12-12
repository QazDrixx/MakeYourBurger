import classes from './LandingPage.module.scss'
import { LandingPageButton } from './LandingPageButton'
import { useNavigate } from 'react-router-dom'
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage'
import { motion } from 'framer-motion'

export const LandingPage = () => {

    const navigate = useNavigate()
    return (
        <AnimatedPage
            xInitial='100%'
            xExit='-100'
        >
            <div className={classes.landingPageWrap}>
                <div className={classes.text}>Make Your Burger</div> 
                <div 
                className={classes.imagesWrap}
                // initial={{y: "-100vh"}}
                // animate={{y: 0}}
                // transition={{duration:0.5, type:'spring'}}
                >
                    <div className={classes.burger}></div>
                    <div className={classes.burgerBackground}></div>
                    <LandingPageButton onClick={() => navigate('/make')} text='MAKE BURGER'/>
                </div>
            </div>
        </AnimatedPage>
    )
}

