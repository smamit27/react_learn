import React from 'react';
function Profile (props) {
  return(
    <div className="col">
      <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{props.cardtitle} :: {props.id}</h5>
                      <input type="text" value={props.name} onChange={props.changed} /> 
                      <p className="card-text">{props.name} {props.age}</p>
                      <button className="btn btn-primary" onClick={props.click}>{props.delete}</button>

                    </div>
      </div>
      </div>
    )
}
export {Profile}
