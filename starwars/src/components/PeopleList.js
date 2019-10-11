import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import PeopleProps from './PeopleProps.js';

const PeopleList = () => {
    const [characters, setCharacters] = useState([1]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`) 
        .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch(error => {
            console.log('What did you do now?', error);
        });
    }, []);

    return (
        <div>
            <div className = 'charz'> 
                {characters.map(item => {
                    return (
                    <PeopleProps key={item.id} name={item.name} weight = {item.mass} height = {item.height}/>
                    )
                })
            }
            </div>
           
        
        
        </div> 
    )
}

export default PeopleList;