import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';

const NavigationItem = (props) =>
{
    return(
        <div className={classes.NavigationItem}>
            <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink></div>
    );
}

export default NavigationItem;