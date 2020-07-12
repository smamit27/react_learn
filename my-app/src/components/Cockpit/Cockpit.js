import React,{useEffect, useRef} from 'react';
import Aux from '../../hoc/Aux'

function Cockpit(props) {
  const toggleButton = useRef(null);

  useEffect(()=>{
  //  setTimeout(()=>{
  //    alert("Hello India");
  //  },10);
  toggleButton.current.click();
   return () =>{
     console.log("cleanup cockpil 1")
   } 
  },[]);
  useEffect(()=>{
    console.log("cleanup cockpil 2");
    return () =>{
      console.log("cleanup cockpil return 2")
    }
    });
    return(
        <Aux>
        <h1 className="text-center">{props.title}</h1>
        <button ref={toggleButton} className="btn btn-danger" onClick={props.clickUser}>Set Profile</button>
        <button className="btn btn-primary" onClick={props.login}>Login</button>
      </Aux>
    )
}

export default React.memo(Cockpit);