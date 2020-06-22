import React from 'react';
import './App.css';
import {Profile} from './profile';

function App() {

    return (
      <div className="App">
        <header className="App-header">  
            Learn React1
            <button onClick={hello}>Hello World</button>
            <Profile name='hello'></Profile>
        </header>
      </div>
    );
  }
  function hello(){
    alert("1");
  }
  
export default App;
