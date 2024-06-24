import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BreedList.css';

function BreedList({ onSelectBreed, selectedBreed }) {
    const [breeds, setBreeds] = useState([]);

    useEffect(() => {
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                setBreeds(Object.keys(response.data.message));
            })
            .catch(error => {
                console.error("ERR: Breed Listing failed", error);
            });
    }, []);

    return (
        <div>
            <ul>
                {breeds.map(breed => (
                    <li 
                        key={breed} 
                        onClick={() => onSelectBreed(breed)} 
                        className={breed === selectedBreed ? 'selected-breed' : ''}
                    >
                        {breed}
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default BreedList;
