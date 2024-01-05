import classes from './MainPage.module.scss'
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage'
import { MYBname } from '../../components/MYBname/MYBname'
import { Burger } from './Burger'
import { Summary } from './Summary/Summary'
import { Ingredients } from './Ingredients/Ingredients'

export const MainPage = () => {
    return (
        <AnimatedPage
            xInitial='-100%'
            xExit='-100%'
            >
                <div className={classes.mainPageWrap}>
                    <div className={classes.topPart}>
                        <div className={classes.MYBnameWrap}><MYBname/></div>
                        <div className={classes.burgerWrap}>
                            <Burger/>
                            <Summary/>
                        </div>
                    </div>
                    <Ingredients/>
                </div>
        </AnimatedPage>
    )
}