import React,{Component} from 'react';
import './profile.scss';

class Profile extends Component{

  render(){
  return(
        <div className="col">
          <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{this.props.cardtitle} :: {this.props.id}</h5>
                          <input type="text" value={this.props.name} onChange={this.props.changed} /> 
                          <p className="card-text">{this.props.name} {this.props.age}</p>
                          <button className="btn btn-primary" onClick={this.props.click}>{this.props.delete}</button>

                        </div>
          </div>
          </div>
        )
    }
}
export {Profile}
