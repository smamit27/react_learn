import React from 'react'; 
import './Backdrop.css';
const BackDrop = (props) =>{
    return(
    props.show ? <div className="BackDrop" onClick={props.clicked}>{props.children}</div>: null
    )
}
export default BackDrop;
