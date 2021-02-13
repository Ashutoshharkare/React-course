import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person : [
      {name : "Prashant", age : 12}, {name : "Aishwarya", age : 20}
    ],
    showPersons : false,
  };

  switchButtonHandler = (newName) => {
    this.setState({person : [{name : newName, age : 21}, {name : "Aishwarya Harkare", age : 19}]} );
  };

  onChangeHandler = (event) => {
    this.setState({person : [{name : event.target.value, age : 21}, {name : "Aishwarya Harkare", age : 19}]} );
  }

  togglePersons = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons : !show,
    })
  }

  render() {
    const styleButton = {
      backgroundColor : 'white',
      padding : '8px',
      border : '1px solid blue',
      font : 'inherit',
      cursor : 'pointer',
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (<div>
      <Person name={this.state.person[0].name} age={this.state.person[0].age} click= {() => this.switchButtonHandler("Ashutosh!")} change = {this.onChangeHandler}> My hobbies : Cricket</Person>
      <p> {this.state.person[0].name}</p>
      <Person name={this.state.person[1].name} age={this.state.person[1].age} click= {() => this.switchButtonHandler("Ashutosh!")} change = {this.onChangeHandler}> My hobbies : Cricket</Person>
      <p> {this.state.person[1].name}</p> 
    </div>);
    }

    return (
      <div className="App">
        <h1> My first React app </h1>
        <button style={styleButton} onClick = {this.togglePersons}>Switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
