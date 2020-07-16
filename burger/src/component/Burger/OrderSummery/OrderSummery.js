import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';
import './OrderSummery.css'

const OrderSummery = (props) =>{
    const ingredient = Object.keys(props.ingredient).map((igKey)=>{
    return <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredient[igKey]}</span></li>
    })
    return(
        <Aux>
            <h3>Order Summery</h3>
            <p>A delicious burger with following ingredient:</p>
            <ul>
                {ingredient}
            </ul>
    <p>Total Price: {props.price.toFixed(2)}</p>
            <p>Contniue to Checkout ?</p>
            
            <Button purchasedCancel={props.cancel}  purchasedContinue={props.continue}></Button>
        </Aux>
    )
}
export default OrderSummery;