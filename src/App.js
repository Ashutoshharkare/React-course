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
    const styleButton = {
      backgroundColor : 'white',
      padding : '8px',
      border : '1px solid blue',
      font : 'inherit',
      cursor : 'pointer',
    };
    return (
      <div className="App">
        <h1> My first React app </h1>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click= {() => this.switchButtonHandler("Ashutosh!")} change = {this.onChangeHandler}> My hobbies : Cricket</Person>
        <button style={styleButton} onClick = {this.switchButtonHandler.bind(this, "Prashant Agrawal")}>Switch</button>
        <p> {this.state.person[0].name}</p>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} click= {() => this.switchButtonHandler("Ashutosh!")} change = {this.onChangeHandler}> My hobbies : Cricket</Person>
        <button style={styleButton} onClick = {this.switchButtonHandler.bind(this, "Prashant Agrawal")}>Switch</button>
        <p> {this.state.person[1].name}</p>
      </div>
    );
  }
}

export default App;
