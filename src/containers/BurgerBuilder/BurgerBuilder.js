import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import BurgerContext from '../../components/Burger/IngredientContext/BurgerContext';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../AxiosOrders'
import ErrorHandler from  '../../components/HOC/ErrorHandler/ErrorHandler';
import Aux from '../../components/HOC/Auxilary/Auxilary'

class BurgerBuilder extends Component{

    state = {
        ingredients:null,

        prices: {
            salad: 0.5,
            bacon: 0.4,
            cheese: 1.3,
            meat: 0.7
        },
        purchasing: false,
        totalPrice:0,
        loading:false,
        error: false
    }

    componentDidMount =() =>{
        axios.get("https://burger-builder-83d3a.firebaseio.com/Ingredients.json").then(response =>{
            this.setState({ingredients: response.data});
        }).catch(error =>{
            this.setState({error:true})
        })
    }
    
    increase = (type) => {
        const pState={...this.state.ingredients};
        let num=pState[type];
        num=num+1;
        let disPrice= this.state.totalPrice;
        let disCost= this.state.prices[type];
        disPrice=disPrice*100;
        disCost=disCost*100;
        disPrice= disPrice + disCost;
        disPrice=Math.round(disPrice);
        disPrice=disPrice/100;
        pState[type]=num;
        this.setState({ingredients: pState, totalPrice: disPrice});
    }

    decrease = (type) => {
        let pState = {...this.state.ingredients};
        let num = pState[type];
        if(num!==0)
        {
            num = num - 1;
            pState[type] = num;
            let disPrice = this.state.totalPrice;
            let disCost = this.state.prices[type];
            disPrice = disPrice * 100;
            disCost = disCost * 100;
            disPrice = disPrice - disCost;
            disPrice = Math.round(disPrice);
            disPrice = disPrice / 100;
            this.setState({ ingredients: pState, totalPrice: disPrice });
        }
    }

    purchaseHandler = () =>
    {
        if(this.state.purchasing)
        {
            this.setState({ purchasing: false });
        }
        else{
        this.setState({purchasing:true});
        }
    }

    postOrder=()=>{
        let queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]))
        }

        queryParams.push(encodeURIComponent('price')+"="+encodeURIComponent(this.state.totalPrice));
        const queryString=queryParams.join('&');

        this.props.history.push(
            {
                pathname:'/checkout',
                search: queryString
            })
        
    }

    render()
    {
        let order=null;
        let burger =  this.state.error ? <p>Ingredients can't be loaded!</p>: <Spinner/>
        
        if(this.state.ingredients){
        burger=(<Aux>
                <Burger list={this.state.ingredients} />
                    <BuildControls
                        increase={this.increase}
                        decrease={this.decrease}
                        price={this.state.totalPrice}
                        checkoutHandler={this.purchaseHandler}
                />
                </Aux>);

        order = (<OrderSummary
            dbHandler={this.postOrder}
            backHandler={this.purchaseHandler}
            ingredients={this.state.ingredients}
            props={this.state.purchasing}></OrderSummary>);
        }
        if (this.state.loading) {
            order = <Spinner/>
        }
        return(
            <div>
                <BurgerContext.Provider value={
                    {ingredients: this.state.ingredients,
                    price: this.state.totalPrice}
                }>
                    <Modal show={this.state.purchasing} backHandler={this.purchaseHandler}>
                        {order}
                    </Modal>
                    {burger}
                </BurgerContext.Provider>
            </div>
        );
    }
}
export default ErrorHandler(BurgerBuilder,axios);