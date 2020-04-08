import React, { Component } from 'react'
import Order from './Order/Order';
import axios from '../../AxiosOrders';
import withErrorHandler from '../HOC/ErrorHandler/ErrorHandler'

class Orders extends Component{

    state={
        orders:[],
        loading:true
    };

    componentDidMount = () => {
        axios.get('/orders.json').then(res=>{
            const fetchedOrders=[];
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                id:key
            })
            }
            this.setState({
                loading:false,
                orders:fetchedOrders
            })
            return(
                res
            )
        }).catch((err)=>{
            this.setState({loading:false});
            console.log(err);
        });
    }
render(){
    return(
        <div>
            {
                this.state.orders.map((order)=>{
                    return(
                        <Order key={order.key}
                            ingredients={order.ingredients}
                            price={+order.price}/>
                    )
                })
            }
        </div>
    );
}
}

export default withErrorHandler(Orders,axios);