import classes from './Header.module.scss'
import { LogoSVG } from '../svgComponents/LogoSVG'
import { NavLink } from 'react-router-dom'


export const NavLinks = () => {

    return (
        <>
        <div className={classes.headerLogoWrap}>
            <div className={classes.headerLogo}>
                <LogoSVG/>
            </div>
        </div>

        <div className={classes.headerNav}>
            <NavLink
                to='/'
                className={({isActive})=> (`${classes.navLinkLayout} ${isActive?classes.selected:classes.unselected}`)}
            >
                <div className={classes.placeholder}></div>
                <div>Discover</div>
                <div className={classes.divider}></div>
            </NavLink>

            <NavLink
                to={'/make'}
                className={({isActive}) => (`${classes.navLinkLayout} ${isActive?classes.selected:classes.unselected}`)}
            >
                <div className={classes.placeholder}></div>
                <div>Make Your Burger</div>
                <div className={classes.divider}></div>
            </NavLink>
        </div>
        </>
    )
}
