import React from 'react';
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) =>
{
    return(
        <ul className={classes.NavigationItems}>
            <li><NavigationItem link = '/' exact>Burger Builder</NavigationItem></li>
            <li><NavigationItem link = '/orders'>Orders</NavigationItem></li>
        </ul>
    );
}

export default NavigationItems;