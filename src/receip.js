import React from 'react';

function Receip(props) { 
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.Calories}</p>
            <img src={props.image} alt=''/>
        </div>
    )
}
export default Receip;