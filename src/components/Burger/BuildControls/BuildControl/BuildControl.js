import React,{ useContext } from 'react';
import classes from './BuildControl.module.css';
import BurgerContext from '../../IngredientContext/BurgerContext';

const BuildControl =(props)=> {

    const dis=useContext(BurgerContext);
    let diss=dis.ingredients;
    let flag=false;
    if(diss[props.type]===0)
    {
        flag=true;
    }

    return(
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.More} onClick={props.more}>More</button>
            <button className={classes.Less} onClick={props.less} disabled={flag}>Less</button>
        </div>
    );
};

export default BuildControl;