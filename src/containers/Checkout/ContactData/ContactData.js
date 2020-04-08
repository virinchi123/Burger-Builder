import React,{Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';
import axios from '../../../AxiosOrders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    state={
        orderForm:{
        name: {
            elementType: 'input',
            elementConfig: {
                type:'text',
                placeholder: 'Your Name'
            },
            value: ''
        },
        email: {
            elementType:'input',
            elementConfig:{
                type:'email',
                placeholder: 'Your Email'
            },
            value: ''
        },
        street: {
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder: 'Your Street'
            },
            value: ''
        },
        postalCode: {
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder: 'Your Postal Code'
            },
            value: ''
        },
        country: {
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder: 'Your Country'
            },
            value: ''
        },
        flat: {
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder: 'Your Flat Number'
            },
            value: ''
        },
        apartment: {
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder: 'Your Apartment'
            },
            value: ''
        },
        delivery: {
            elementType:'select',
            elementConfig:{
                options:[
                    {value:'fastest',displayValue:'fastest'},
                    { value: 'cheapest', displayValue: 'cheapest' }
                ]
            },
            value: ''
        }
    },
        loading:false
    }


    orderHandler =(event) =>{
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: this.state.orderForm.name.value,
                address: {
                    street: this.state.orderForm.street.value,
                    flat: this.state.orderForm.flat.value,
                    apartment: this.state.orderForm.apartment.value,
                    country: this.state.orderForm.country.value
                },
                email: this.state.orderForm.email.value
            },
            delivery: this.state.orderForm.delivery.value
        }
        axios.post('/orders.json', order).then(response => {
            console.log(response);
            this.setState({ loading: false }, this.purchaseHandler);
            return (response);
        }
        ).catch(error => {
            console.log(error);
            this.setState({ loading: false });
            return (error);
        })
    }

    inputChangedHandler = (event,inputIdentifier) => {  
        const formData={...this.state.orderForm}
        const updatedFormElement={...formData[inputIdentifier]}
        updatedFormElement.value=event.target.value;
        formData[inputIdentifier]=updatedFormElement;
        this.setState({orderForm: formData})
    }

    render = () =>{

        const formElementsArray = [];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id:key,
                config: this.state.orderForm[key]
            });
        }
        let form=<Spinner/>
        if(!this.state.loading){

        form= <form>
            {
                formElementsArray.map((el)=>{
                    return(
                    <Input key={el.id}
                    elementType = {el.config.elementType}
                    elementConfig={el.config.elementConfig}
                    value={el.config.value}
                    changed={(event)=>this.inputChangedHandler(event,el.id)}/>)
                })
            }
            <Button buttonType='Success' clicked={this.orderHandler}>Order</Button>
        </form>
        }
        return(
            <div className={classes.ContactData}>   
                <h4>Enter your contact details:</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;