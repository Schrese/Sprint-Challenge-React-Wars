import React from 'react';
import {Toast, ToastBody, ToastHeader} from 'reactstrap';

const PeopleProps = (props) => {
    return (
        <div className='p-3 my-2 rounded '>
        <Toast>
        <div key={props.id}>
            <ToastHeader>
                <h2>{props.name}</h2>
            </ToastHeader>
            <ToastBody>
                <h4>Weight: {props.weight}</h4>
                <h4>Height: {props.height}</h4>
                <h4>Hair Color: {props.hair}</h4>
                {/* <h4>Films: {props.films}</h4> */}
            </ToastBody>
        </div>
        </Toast>
        </div>
    )
}

export default PeopleProps;