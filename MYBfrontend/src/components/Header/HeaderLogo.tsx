import { LogoSVG } from '../svgComponents/LogoSVG'
import classes from './Header.module.scss'
import { useNavigate } from 'react-router-dom'


export const HeaderLogo = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.headerLogoWrap} onClick={() => navigate('/')}>
            <div className={classes.headerLogo}>
                <LogoSVG/>
            </div>
        </div>
    )
}


