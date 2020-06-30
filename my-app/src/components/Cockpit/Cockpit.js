import React from 'react';

function Cockpit(props) {
    return(
        <div>
        <h1 className="text-center">Portal App</h1>
        <button className="btn btn-danger" onClick={props.clickUser}>Set Profile</button>
      </div>
    )
}

export default Cockpit;