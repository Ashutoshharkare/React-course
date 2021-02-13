import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {name : "Prashant", age : 12}, {name : "Aishwarya", age : 20}
    ]
  };

  switchButtonHandler = (newName) => {
    this.setState({person : [{name : newName, age : 21}, {name : "Aishwarya Harkare", age : 19}]} );
  };

  onChangeHandler = (event) => {
    this.setState({person : [{name : event.target.value, age : 21}, {name : "Aishwarya Harkare", age : 19}]} );
  }

  render() {
    return (
      <div className="App">
        <h1> My first React app </h1>
        <Person name="Ashutosh Harkare" age="21" click= {() => this.switchButtonHandler("Ashutosh!")} change = {this.onChangeHandler}> My hobbies : Cricket</Person>
        <button onClick = {this.switchButtonHandler.bind(this, "Prashant Agrawal")}>Switch</button>
        <p> {this.state.person[0].name}</p>
      </div>
    );
  }
}

export default App;
