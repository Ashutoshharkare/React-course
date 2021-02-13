import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';
import Radium from 'radium';

class App extends Component {
  state = {
    person : [
      {name : "Prashant", age : 21  , id : 2}, 
      {name : "Aishwarya", age : 20 , id : 4}, 
      {name : "Ashutosh", age : 21  , id : 6},
    ],
    showPersons : false,
  };

  switchButtonHandler = (newName) => {
    this.setState({person : [{name : newName, age : 21}, {name : "Aishwarya Harkare", age : 19}]} );
  };

  onChangeHandler = (event, id) => {
    const personIndex = this.state.person.findIndex( p =>{ return p.id === id} );
    console.log(personIndex);
    const personNew = {...this.state.person[personIndex]};

    personNew.name = event.target.value;

    const personsNewArray = [...this.state.person];
    personsNewArray[personIndex] = personNew;

    this.setState({person :  personsNewArray} );
  }

  togglePersons = () => {
    const show = this.state.showPersons;
    this.setState({
      showPersons : !show,
    })
  }

  deletePersonsHandler = (index) => {
    let personsArray = this.state.person;
    personsArray.splice(index, 1);
    this.setState({
      person : personsArray,
    })
  }

  render() {
    const styleButton = {
      backgroundColor : 'green',
      color : 'white',
      padding : '8px',
      border : '1px solid blue',
      font : 'inherit',
      cursor : 'pointer',
      ':hover' : {
        backgroundColor : 'lightgreen',
        color : 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.person.map((personi, index) => {
          return <Person name = {personi.name} age = {personi.age} key= {personi.id} 
          click={this.deletePersonsHandler.bind(this, index)}
          change = {(event) => this.onChangeHandler(event, personi.id)}/>})}
        </div>
      );

      styleButton.backgroundColor = 'red';
      styleButton[':hover'] = {
          backgroundColor : 'salmon',
          color : 'black'
      }
    }

    let classes = [];
    if(this.state.person.length <= 2)
    {
      classes.push('red');
    }
    if(this.state.person.length <= 1)
    {
      classes.push('bold');
    }

    return (
      <div className="App">
        <p className = {classes.join(' ')}> My first React app </p>
        <button style={styleButton} onClick = {this.togglePersons}>Switch</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
