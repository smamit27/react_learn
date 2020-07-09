import React,{useEffect} from 'react';

function Cockpit(props) {
  useEffect(()=>{
   setTimeout(()=>{
     alert("Hello India");
   },1000); 
  },[props.clickUser])
    return(
        <div>
        <h1 className="text-center">Portal App</h1>
        <button className="btn btn-danger" onClick={props.clickUser}>Set Profile</button>
      </div>
    )
}

export  {Cockpit};