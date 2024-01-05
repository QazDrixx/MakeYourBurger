import classes from '../MainPage.module.scss'
import { Increment, Decrement } from '../../../components/svgComponents/CounterIcocs'
import { useState } from 'react'

interface IngredientProps {
    image: string
    ingredientName:string
}

export const Ingredient = ({image, ingredientName}:IngredientProps) => {
    const [counter, setCounter] = useState(0)

    const increment = () => {setCounter(counter+1)}
    const decrement = () => {counter > 0?setCounter(counter-1):setCounter(0)}

    return (
        <div className={classes.ingredientWrap}>
            <div className={classes.ingredient}>
                <div className={classes.ingredientImage} style={{backgroundImage:`url(${image})`}}></div>
                <div className={classes.ingredientName}>{ingredientName}</div>
                <div className={classes.counterWrap}>
                    <div className={classes.counterButton} onClick={decrement}><Decrement/></div>
                    <div className={classes.counterNumber}>{counter}</div>
                    <div className={classes.counterButton} onClick={increment}><Increment/></div>
                </div>
            </div>
        </div>
    )
}
