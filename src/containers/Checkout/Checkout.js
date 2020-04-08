import React,{ Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Aux from '../../components/HOC/Auxilary/Auxilary'
import {Route} from 'react-router-dom'
import ContactData from './ContactData/ContactData';
class Checkout extends Component{
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        },
        loading:false
    };
    
    totalPrice = 0;

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredient = {};

        for (let param of query.entries()) {
            if(param[0]!=='price'){
                ingredient[param[0]] = +param[1];
           }
           else{
               this.totalPrice=+param[1]
               console.log(param[1])
           }
    }
        this.setState(
            {
                ingredients: ingredient
            }
        );

    }

    backer=()=>{
        this.props.history.goBack()
    }

    postOrder=()=>{

    this.props.history.push(this.props.match.path+'/contact-data')
    }
    
render(){
    let content = <Spinner />

    if (!this.state.loading) {
        content = <CheckoutSummary ingredients={this.state.ingredients} backHandler={this.backer} continueHandler={this.postOrder}/>
    }
        return(
            <Aux>
            {content}
        <Route path={this.props.match.path +'/contact-data'} render={()=><ContactData ingredients={this.state.ingredients} price={this.totalPrice}/>}/>
            </Aux>
        )

}
}
export default Checkout;