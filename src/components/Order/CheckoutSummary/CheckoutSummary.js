import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css'


const CheckoutSummary =(props)=>{

    return(
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes good!</h1>
            <div>
            <Burger list={props.ingredients}/>
            </div>
            <Button buttonType='Danger' clicked={props.backHandler}>Cancel</Button>
        <Button buttonType='Success' clicked={props.continueHandler}>Continue</Button>
       </div>
    )
}

export default CheckoutSummary;