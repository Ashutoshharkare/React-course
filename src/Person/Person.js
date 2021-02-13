import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const Div = styled.div`
    margin : 10px;
    width : 60%;
    border: 1px solid #000000;
    box-shadow: 0 2px 3px #cccccc;
    text-align: center;
    padding: 16px;
    @media(min-width : 500px)  {
        width : 450px;
    }`;

const person = (props) => {
    return (
    <Div>
        <p onClick={props.click}> "This is the {props.name}. The age of is {props.age} years old. "</p>
        <p>{props.children} </p>
        <input type="text" onChange={props.change} value = {props.name}/>
    </Div>
    );
}

export default person;