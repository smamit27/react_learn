import React ,{useState}from 'react';
import './App.css';
import {Profile} from './Employee/profile';

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
    hideProfile({
      show: true
    })
  };
//Onchanged event for two way binding

const nameChangeHandler = (event,id) => {
  debugger;
 
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
            {profileUser.Person.map((data,index) =>{
              return <Profile
                            click={deleteUser.bind(this,index)}
                            name={data.name}
                            cardtitle={data.cardtitle}
                            age={data.age}
                            delete={data.delete}
                            id={data.id}
                            key={data.id} 
                            changed={(event) => nameChangeHandler(event,data.id)}>
                      </Profile>
            })
          }
      </div>)
  }
    return (

      <div className="App">
        <button className="btn btn-danger" onClick={setUserProfile}>Set Profile</button>
          <div style={styleData}>
            {person}
          </div>
      </div>

    );
  }

export default App;
