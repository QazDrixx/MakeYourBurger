import classes from '../MainPage.module.scss'
import { Ingredient } from './Ingredient'


interface IngredientsTemporary {
    ingredientImageURL: string
    ingredientName: string
}

const ingredients:IngredientsTemporary[] = [
    {
        ingredientImageURL: '/cutlet.png',
        ingredientName: 'Cutlet'
    },
    {
        ingredientImageURL:'/mayo.png',
        ingredientName:'Mayo'
    },
    {
        ingredientImageURL: '/cutlet.png',
        ingredientName: 'Cutlet'
    },
    {
        ingredientImageURL:'/mayo.png',
        ingredientName:'Mayo'
    },
]


export const Ingredients = () => {
    const ingredientsList = ingredients.map((ingredient) => {
        const {ingredientImageURL, ingredientName} = ingredient
        return <Ingredient key={ingredientName} image={ingredientImageURL} ingredientName={ingredientName}/>
    })
    return (
        <div className={classes.ingredientsWrap}>
            {ingredientsList}
        </div>
    )
}
