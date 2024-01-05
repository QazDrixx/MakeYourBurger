import classes from './Footere.module.scss'
import { Visa, MasterCard, GooglePay, ApplePay, PayPal, Bitcoin, Etherium} from '../svgComponents/PaymentLogos'

export const Footer = () => {
    return (
        <div className={classes.footerWrap}>
            <div className={classes.footerLeft}>
                <div>2023. Make Your Burger</div>
                <a href='#' className={classes.pp}>Privacy Policy</a>
                <div>|</div>
                <a href='#' className={classes.pp}>Terms & Conditions</a>
            </div>
            <div className={classes.footerRight}>
                <Visa/>
                <MasterCard/>
                <GooglePay/>
                <ApplePay/>
                <PayPal/>
                <Bitcoin/>
                <Etherium/>
            </div>
        </div>
    )
}
