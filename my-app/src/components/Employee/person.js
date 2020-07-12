import React,{PureComponent} from 'react';
import Profile from './profile';
class Person extends PureComponent{

  // static getDerivedStateFromProps(props,state){
  //   console.log("Person getDerivedStateFromProps")
  //   return state;
  // }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("Person shouldComponentUpdate")
  //   if(nextProps.person.Person !== this.props.person.Person){
  //     return true
  //   }
  //   else{
  //     return false;
  //   }
  // }
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Person getSnapshotBeforeUpdate');
    return {message: 'hello Indisa'}
  }
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Person componentDidUpdate'+ snapshot.message);

  }
  componentWillUnmount(){
    console.log('Person componentWillUnmount');

  }
  render(){
    return this.props.person.Person.map((person,index) =>{
      console.log('Person array ');
        return <Profile
                      click={()=>this.props.Clicked(index)}
                      name={person.name}
                      cardtitle={person.cardtitle}
                      age={person.age}
                      delete={person.delete}
                      id={person.id}
                      key={person.id}
                      isAuth = {this.props.isAuthenticated} 
                      changed={(event) => this.props.changed(event,person.id)}>
                </Profile>
      });
  }
}



export default Person;