import classes from './Header.module.scss'
import { PhoneSVG } from '../svgComponents/PhoneSVG'

export const CallMeBack = () => {
    return (
        <>
        <div className={classes.callMeBackWrap}>
            <div className={classes.callMeBack}>
                <div className={classes.phoneFill}><PhoneSVG/></div>
                <div>Call Me Back</div>
            </div>
        </div>
        <div className={classes.number}>8 800 437-87-22</div>
        </>
    )
}
