import React from 'react';
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';
const controls =[
    {label: 'Salad',type:'salad'},
    {label: 'Meat',type:'meat'},
    {label: 'Cheese',type:'cheese'},
    {label: 'Bacon',type:'bacon'},

];
console.log(controls);
const BuildControls = (props) =>{
   return (
<div className="BuildControls">
   <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
    {controls.map((ctrl) =>{
       return( <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                addIngredient={()=> props.addIngred(ctrl.type)}
                removeIngredient={()=> props.removeIngred(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />)
    })}
    <button className="OrderButton" onClick={props.ordered} disabled={!props.purchasable}>ORDER NOW</button>
</div>
)
}

      
export default BuildControls;
