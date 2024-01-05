import { motion } from "framer-motion"
import { ReactNode} from "react"
import { useContext } from "react"
import { AppContext } from "../../utils/AppContextProvider"


interface AnimatedPageProps{
    xInitial: string,
    xExit: string,
    children:ReactNode
}

export const AnimatedPage = ({xInitial, xExit, children}:AnimatedPageProps) => {
    const {isFirstRender} = useContext(AppContext)
    console.log(isFirstRender);
    

    return (
        <motion.div
            initial={isFirstRender?false:{x: xInitial}}
            animate={{x: '0'}}
            exit={{x: xExit}}
            onAnimationStart={() => document.body.style.overflow = 'hidden'}
            onAnimationComplete={() => {document.body.style.overflow = 'auto'}}
            transition={{duration:'0.3', type:'spring'}}
            style={{display:'flex', height:'100%'}}
        >
            {children}
        </motion.div>
    )
}
