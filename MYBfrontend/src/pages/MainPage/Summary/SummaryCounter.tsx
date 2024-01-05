import classes from '../MainPage.module.scss'
import { ReactNode } from 'react'
import { useState } from 'react'

interface SummaryCounterProps {
    image?: ReactNode
    counterUnits: string
}

export const SummaryCounter = ({image, counterUnits}: SummaryCounterProps) => {
    const [counter, setCounter] = useState(0)
    return (
        <div className={classes.summaryCounter}>
            {image}
            {counter} {counterUnits}
        </div>
    )
}
