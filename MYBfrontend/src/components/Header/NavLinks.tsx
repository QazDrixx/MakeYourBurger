import classes from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import { HeaderElement } from './HeaderElementInterface'

export const NavLinks = ({isVisible}:HeaderElement) => {

    return (
        <>
        <div className={`${classes.headerNav} ${!isVisible?classes.hidden:''}`}>
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
