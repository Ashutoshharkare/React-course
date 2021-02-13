import React from 'react';
import './Person.css';
import Radium, {StyleRoot} from 'radium';



const person = (props) => {
    const style = {
        '@media(min-width : 500px)' : {
            width : '450px',
        }
    };

    return (
    <div className="Person" style= {style}>
        <p onClick={props.click}> "This is the {props.name}. The age of is {props.age} years old. "</p>
        <p>{props.children} </p>
        <input type="text" onChange={props.change} value = {props.name}/>
    </div>
    );
}

export default Radium(person);