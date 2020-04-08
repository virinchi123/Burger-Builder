import React,{ Component } from 'react';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:false
    };

    SideDrawerClosedHandler = (props)=>{
        this.setState({showSideDrawer:false})
    }

    menuHandler=(props)=>{
        this.setState({ showSideDrawer: true })
    }

    render(){
    return(
        <div>
            
            <div>
                <Toolbar menu={this.menuHandler} backHandler={this.menuHandler}/>
                <SideDrawer open={this.state.showSideDrawer} clicked={this.SideDrawerClosedHandler}/>
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </div>
    );
    }
}

export default Layout;