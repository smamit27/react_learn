import React from 'react';
import './logo.css';
import burgerImage from '../../assets/images/logo.png';
const logo = (props) =>{
    return(
        <div>
            <img src={burgerImage} alt="Burger Logo" />
        </div>
    )
}
export default logo