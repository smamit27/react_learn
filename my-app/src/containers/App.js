import React, { Component } from "react";
import "./App.css";
import {Person} from "../components/Employee/person";
import {Cockpit} from "../components/Cockpit/Cockpit";

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
};
static getDerivedStateFromProps(props,state){
  console.log(`Appjs derived getDerivedStateFromProps ${props}`);
  return state;
}
componentDidMount() {
  console.log('componentDidMount');

}

  render() {
    console.log("app.js render");
    this.toggleProfile = () => {
      let toggleData = this.state.show;
      this.setState({ show: !toggleData });
    };

    //Onchanged event for two way binding
    this.nameChangeHandler = (event, id) => {
      const profileIndex = this.state.Person.findIndex((p) => {
        return p.id === id;
      });
      const personData = { ...this.state.Person[profileIndex] };
      personData.name = event.target.value;
      let perUser = [...this.state.Person];
      perUser[profileIndex] = personData;
      this.setState({ Person: perUser });
    };
    //Delete user when user click on delete user
    this.deleteUser = (personIndex) => {
      let perUser = [...this.state.Person];
      perUser.splice(personIndex, 1);
      this.setState({ Person: perUser });
    };
    let person = null;
    if (this.state) {
      person = (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <Person
            person={this.state}
            Clicked={this.deleteUser}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <div className="App">
        <Cockpit clickUser={this.toggleProfile}></Cockpit>
        {this.state.show ? <div style={{marginTop: '1%'}}>{person}</div>: null}
      </div>
    );
  }
}

export default App;
