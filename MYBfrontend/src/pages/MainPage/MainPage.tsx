import classes from './MainPage.module.scss'
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage'

export const MainPage = () => {
    return (
        <AnimatedPage
            xInitial='-100%'
            xExit='-100%'
            >
                <div className={classes.mainPageWrap}>
                    main
                </div>
        </AnimatedPage>
    )
}

