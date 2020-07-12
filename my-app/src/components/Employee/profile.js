import React,{Component,Fragment} from 'react';
import './profile.scss';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
class Profile extends Component{
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();

  }
  componentDidMount(){
    this.inputElementRef.current.focus();
  }
  render(){
  return(
    <Fragment>
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.props.cardtitle} :: {this.props.id}</h5>
                <input type="text" ref={this.inputElementRef} value={this.props.name} onChange={this.props.changed} /> 
                <p className="card-text">{this.props.name} {this.props.age}</p>
                <button className="btn btn-primary" onClick={this.props.click}>{this.props.delete}</button>                
              {this.props.isAuth ? <p>Authenticated</p>: <p>Login</p>}
              </div>
          </div>
          </Fragment>
        )
    }
}
Profile.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  id: PropTypes.string


}
export default withClass(Profile, 'col');
