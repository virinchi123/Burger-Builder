import React from 'react';
import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css'
import Backdrop from '../../Backdrop/Backdrop';

const SideDrawer = (props) =>
{
    let attachedClasses= [classes.SideDrawer,classes.Close].join(' ')
    if(props.open)
    {
        attachedClasses = [classes.SideDrawer, classes.Open].join(' ')
    }
    return(
        <div>
            <Backdrop show={props.open} backHandler={props.clicked}/>
            <div className={attachedClasses}>
                <Logo height='11%'/>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    );
}

export default SideDrawer;