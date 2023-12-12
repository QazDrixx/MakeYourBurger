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
                <div className={classes.base}><Visa/></div>
                <div className={classes.mastercardBase}><MasterCard/></div>
                <div className={classes.googlePayBase}><GooglePay/></div>
                <div className={classes.base}><ApplePay/></div>
                <div className={classes.payPalBase}><PayPal/></div>
                <div className={classes.base}><Bitcoin/></div>
                <div className={classes.etheriumBase}><Etherium/></div>

                
            </div>
        </div>
    )
}
