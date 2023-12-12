import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"
import { Footer } from "../../components/Footer/Footer"
import classes from './Layout.module.scss'
import { AnimatePresence } from "framer-motion"



export const Layout = () => {
    
    return (
        <div className={classes.App}>
                <header className={classes.header}><Header/></header>
        
                <AnimatePresence >
                    <main className={classes.main}>
                        <Outlet/>
                    </main>
                </AnimatePresence>
        
                <footer className={classes.footer}><Footer/></footer>
        </div>
    )
}