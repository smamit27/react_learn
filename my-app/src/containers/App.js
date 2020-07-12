import React, { Component } from "react";
import "./App.css";
import Person from "../components/Employee/person";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import ComponentC from "../components/ComponentC";
import {UserProvider} from '../components/usercontext';

class App extends Component {

constructor(props){
  super(props);
  console.log('constructor');
}
state = {
  Person: [
    {
      id: "001",
      name: "Amit",
      cardtitle: "First",
      age: 20,
      delete: "Delete User",
    },
    {
      id: "002",
      name: "sweta",
      cardtitle: "Second",
      age: 30,
      delete: "Delete User",
    },
  ],
  show: false,
  showCockpit: true,
  amit: 'sweta',
  app :'App',
  counter: 0,
  authenticated: false
};
static getDerivedStateFromProps(props,state){
  console.log(`Appjs derived getDerivedStateFromProps ${props}`);
  return state;
}
componentDidMount() {
  console.log('App componentDidMount');

}
 //Onchanged event for two way binding
 nameChangeHandler = (event, id) => {
  const profileIndex = this.state.Person.findIndex((p) => {
    return p.id === id;
  });
  const personData = { ...this.state.Person[profileIndex] };
  personData.name = event.target.value;
  let perUser = [...this.state.Person];
  perUser[profileIndex] = personData;
  this.setState((prevState,props) => {
    return{ 
        Person: perUser,
        counter: prevState.counter + 1 }
  });
};
//Toggle button when user click on set profile
toggleProfile = () => {
  let toggleData = this.state.show;
  this.setState({ show: !toggleData });
};

//Delete user when user click on delete user
deleteUser = (personIndex) => {
    let perUser = [...this.state.Person];
    perUser.splice(personIndex, 1);
    this.setState({ Person: perUser });
  };
//When the user click on login button 
loginHandler = () =>{
  this.setState({authenticated: true})
}

  render() {
    let person = null;
    if (this.state) {
      person = (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <Person
            person={this.state}
            Clicked={this.deleteUser}
            changed={this.nameChangeHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }
    return (
      <Aux>
        <UserProvider value="amit">
          <ComponentC />
        </UserProvider>
        
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
       {this.state.showCockpit ?
        <Cockpit title={this.state.amit} 
                 clickUser={this.toggleProfile}
                 login={this.loginHandler}>
        </Cockpit>: null}
        {this.state.show ? 
         <div style={{marginTop: '1%'}}>
            {person}
         </div>: null}
      </Aux>
    );
  }
}

export default withClass(App, 'App');
