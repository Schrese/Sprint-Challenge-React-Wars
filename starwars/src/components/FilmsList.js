import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PeopleProps from './PeopleProps.js';

const FilmsList = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people`) 
        .then(response => {
            console.log(response.data);
            setFilms(response.data);
        })
        .catch(error => {
            console.log('What did you do now?', error);
        });
    }, []);
    return (
        console.log('shi')
    )
}

export default FilmsList;