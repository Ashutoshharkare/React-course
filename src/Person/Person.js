import React from 'react';
import classes from './Person.css';
//import styled from 'styled-components';


const person = (props) => {
    return (
    <div className = {classes.Person}>
        <p onClick={props.click}> "This is the {props.name}. The age of is {props.age} years old. "</p>
        <p>{props.children} </p>
        <input type="text" onChange={props.change} value = {props.name}/>
    </div>
    );
}

export default person;