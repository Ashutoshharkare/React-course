import React from 'react';


const person = (props) => {
    return (
    <div>
        <p onClick={props.click}> "This is the {props.name}. The age of is {props.age} years old. "</p>
        <p>{props.children} </p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>
    )
}

export default person;