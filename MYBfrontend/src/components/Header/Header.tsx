import classes from './Header.module.scss'
import { NavLinks } from './NavLinks'
import { CallMeBack } from './CallMeBack'
import { AvatarDropDown } from './AvatarDropDown'
import { HeaderTrigger } from './HeaderTrigger'
import { HeaderLogo } from './HeaderLogo'
import { useEffect, useState } from 'react'

export const Header = () => {
    // document.body.style.overflow = 'hidden'
    const [isOpen, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(!isOpen)
    }
    useEffect(() => {document.body.style.overflow = isOpen?'hidden':'auto'})

    return (
        <div className={`${classes.headerWrap} ${isOpen?classes.headerOpen:classes.headerClose}`}>
            <HeaderLogo/>
            <CallMeBack/>
            <div className={`${classes.headerTrigger} ${isOpen?classes.triggerClose:''}`} onClick={handleOpen}><HeaderTrigger/></div>
            <NavLinks isVisible={isOpen}/>
            <div className={`${classes.number} ${!isOpen?classes.hidden:''}`}>8 800 437-87-22</div>
            <AvatarDropDown isVisible={isOpen}/>
        </div>
    )
}

