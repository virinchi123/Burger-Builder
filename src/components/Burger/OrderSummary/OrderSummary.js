import React from 'react';
import BurgerContext from '../IngredientContext/BurgerContext';
import classes from '.././BuildControls/BuildControls.module.css';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey)=>
    {
        return(
            <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
            </li>);
    });


    return(
        <div>
            <h3>Your Order:</h3>
            <p>Burger has following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <BurgerContext.Consumer>{(context)=>{
            return(
            <h2>Total bill: ${context.price}</h2>)}}</BurgerContext.Consumer>
            <Button className={classes.OrderButton} buttonType='Danger' clicked = {props.backHandler}>Back</Button>
            <Button className={classes.OrderButton} buttonType='Success' clicked={props.dbHandler}>Continue</Button>
        </div>
    );
}

export default OrderSummary;