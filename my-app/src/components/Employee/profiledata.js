import React from 'react';
import {Profile} from '../Employee/profile';
const ProfileData = (props) => props.person.Person.map((person,index) =>{
    return <Profile
                  click={props.Clicked.bind(this,index)}
                  name={person.name}
                  cardtitle={person.cardtitle}
                  age={person.age}
                  delete={person.delete}
                  id={person.id}
                  key={person.id} 
                  changed={(event) => props.Changed(event,person.id)}>
            </Profile>
  });

export default ProfileData;