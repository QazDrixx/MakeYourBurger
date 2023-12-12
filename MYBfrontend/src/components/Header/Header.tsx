import classes from './Header.module.scss'
import { NavLinks } from './NavLinks'
import { CallMeBack } from './CallMeBack'
import { AvatarDropDown } from './AvatarDropDown'

export const Header = () => {
    return (
        <div className={classes.headerWrap}>
            <NavLinks/>
            <div className={classes.headerLeft}>
                <CallMeBack/>
                <AvatarDropDown/>
            </div>
        </div>
    )
}

