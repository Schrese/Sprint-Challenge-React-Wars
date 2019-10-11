import React from 'react';

const PeopleProps = (props) => {
    return (
        <div key={props.id}>
            <h2>Character: {props.name}</h2>
            <h4>Weight: {props.weight}</h4>
        </div>
    )
}

export default PeopleProps;