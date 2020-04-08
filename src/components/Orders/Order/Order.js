import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
    const ingredients=[];
    for(let ingredient in props.ingredients)
    {
        ingredients.push({
            name:ingredient,
            amount: props.ingredients[ingredient]

        })
    }

    const ingredientOutput = ingredients.map((ig)=>{
        return <p>{ig.name}:{ig.amount}</p>
    })
return(
    <div className={classes.Order}>
        <p>Ingredients: {ingredientOutput}</p>
        <p>Total Price: $<strong>{props.price.toFixed(2)}</strong></p>
    </div>
)
}

export default Order;