import React from 'react';
import './Button.css';

const Button = (props) =>(
<div className="Button" >
<button className="Button Success" onClick={props.purchasedCancel}>Cancel</button>
<button className="Button Danger" onClick={props.purchasedContinue}>Continue</button>
</div>
)
export default Button;