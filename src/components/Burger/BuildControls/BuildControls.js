import React,{ useContext } from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';
import BurgerContext from '../IngredientContext/BurgerContext';


const controls=[
    {label:'Salad',type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const BuildControls =(props) =>
{
    const contest = useContext(BurgerContext);
    let flag = false;
    if (contest.price === 0) {
        flag = true;

    }

    return(
        <div className={classes.BuildControls}>
            <p>Price: $<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((control,index)=>{
                return <BuildControl label={control.label}
                 key={index}
                 type={control.type}
                 more={()=>props.increase(control.type)}
                 less={()=>props.decrease(control.type)}
                 />
            })}
            <button disabled={flag} onClick= {props.checkoutHandler} className={classes.OrderButton}>Checkout</button>
        </div>
    )
}

export default BuildControls;