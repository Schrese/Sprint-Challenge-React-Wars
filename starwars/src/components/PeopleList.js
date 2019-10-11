import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import PeopleProps from './PeopleProps.js';
import FilmsList from './FilmsList';

const PeopleList = () => {
    const [characters, setCharacters] = useState([]);
    // const [films, setFilms] = useState([])

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`) 
        .then(response => {
            // console.log(response.data.results);
            setCharacters(response.data.results);
            // setFilms(response.data.results.films)
        })
        .catch(error => {
            console.log('What did you do now?', error);
        });
    }, []);

    return (
        <div className='container'>
            <div className = 'charz'> 
                {characters.map(item => {
                    return (
                    <PeopleProps key={item.id} name={item.name} weight = {item.mass} height = {item.height} hair={item.hair_color} />
                    )
                })
            }
            </div>
           
        
        
        </div> 
    )
}

export default PeopleList;