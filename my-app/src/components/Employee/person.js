import React,{Component} from 'react';
import {Profile} from './profile';
class Person extends Component{

  // static getDerivedStateFromProps(props,state){
  //   console.log("Person getDerivedStateFromProps")
  //   return state;
  // }
  shouldComponentUpdate(nextProps,nextState){
    console.log("Person shouldComponentUpdate")

    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate');
    return {message: 'hello Indisa'}
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('componentDidUpdate'+ snapshot.message);

  }
  render(){
    return this.props.person.Person.map((person,index) =>{
      console.log('Profiledata');
        return <Profile
                      click={()=>this.props.Clicked(index)}
                      name={person.name}
                      cardtitle={person.cardtitle}
                      age={person.age}
                      delete={person.delete}
                      id={person.id}
                      key={person.id} 
                      changed={(event) => this.props.changed(event,person.id)}>
                </Profile>
      });
  }
}



export {Person};