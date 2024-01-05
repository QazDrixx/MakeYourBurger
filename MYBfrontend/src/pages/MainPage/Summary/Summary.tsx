import classes from '../MainPage.module.scss'
import { SummaryCounter } from './SummaryCounter'
import { SummaryClock, SummaryWeight, SummaryCalories } from '../../../components/svgComponents/SummaryIcons'

export const Summary = () => {
    return (
        <div className={classes.summaryWrap}>
            <div className={classes.summaryHeader}>Summary</div>
            <div className={classes.divider}></div>
            <div className={classes.priceWrap}>
                <div className={classes.price}>$0.00</div>
                <div className={classes.checkout}>Checkout</div>
            </div>

            <div className={classes.giftText}>
                Build a <span className={classes.giftPrice}>$10</span> Burger and Get a Gift
            </div>

            <div className={classes.summaryCounterWrap}>
                <SummaryCounter counterUnits='min' image={<SummaryClock/>}/>
                <SummaryCounter counterUnits='g' image={<SummaryWeight/>}/>
                <SummaryCounter counterUnits='kcal' image={<SummaryCalories/>}/>
            </div>
        </div>
    )
}
