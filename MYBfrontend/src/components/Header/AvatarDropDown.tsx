import classes from './Header.module.scss'
import { DefaultAvatarSVG } from '../svgComponents/DefaultAvatarSVG'
import { HeaderElement } from './HeaderElementInterface'


export const AvatarDropDown = ({isVisible}:HeaderElement) => {
    return (
        <>
            <div className={`${classes.avatarDropDownWrap} ${!isVisible?classes.hidden:''}`}>
                <div className={classes.avatarDropDown}>
                    <div className={classes.avatarFrame}>
                        {<DefaultAvatarSVG/>}
                    </div>
                </div>
                <div className={classes.dropDownWrap}>
                    <div className={classes.dropDownContent}>
                        <div className={classes.username}>Lorem Ipsum</div>
                        <div className={classes.divider}></div>
                        <div className={classes.dropDownLinks}>
                            <div className={classes.dropDownLink}>Profile</div>
                            <div className={classes.dropDownLink}>Settings</div>
                            <div className={classes.dropDownLink}>Log out</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
