import React ,{useState}from 'react';
import './App.css';
import  ProfileData  from '../components/Employee/profiledata';
import Cockpit from '../components/Cockpit/Cockpit';

function App() {
  //useState
  const [profileUser,setUser] = useState(
    {Person: [{
    id: '001',
    name: 'Amit',
    cardtitle: 'First',
    age: 20,
    delete: 'Delete User'
  },{
    id: '002',
    name: 'sweta',
    cardtitle: 'Second',
    age: 30,
    delete: 'Delete User'

  }]});
  const[showProfile,hideProfile] = useState({show: false});
  
  //Style Local
  const styleData={
    marginTop: '1%'
  };
  //SetState
  const setUserProfile = () =>{
    //let doesTitle = true;
    hideProfile({
      show: true
    })
  };
//Onchanged event for two way binding

const nameChangeHandler = (event,id) => {
 
const profileIndex = profileUser.Person.findIndex(p =>{
  return p.id === id;
});
const personData = {
  ...profileUser.Person[profileIndex]
}
personData.name = event.target.value;

let perUser = [...profileUser.Person]
perUser[profileIndex] = personData;
setUser({Person: perUser});


}
//Delete user when user click on delete user
  const deleteUser = (personIndex) =>{
    let perUser = [...profileUser.Person]
    perUser.splice(personIndex,1);
    setUser({Person: perUser});
    console.log();
  }
  //Setting data out of the return ()
  //using map for list the data like ngFor in Angular
  let person = null;
  if(showProfile.show){
    person = (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <ProfileData 
          person={profileUser}
          Clicked={deleteUser}
          Changed={(event) => nameChangeHandler(event,person.id)}></ProfileData>
      </div>)
  }
    return (
      <div className="App">
        <Cockpit clickUser={setUserProfile}></Cockpit>
          <div style={styleData}>
            {person}
          </div>
      </div>

    );
  }

export default App;
