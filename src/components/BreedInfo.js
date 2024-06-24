import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BreedDetails.css';

function BreedDetails({ breed }) {
    const [subBreeds, setSubBreeds] = useState([]);

    useEffect(() => {
        if (breed) {
            axios.get(`https://dog.ceo/api/breed/${breed}/list`)
                .then(response => {
                    setSubBreeds(response.data.message);
                })
                .catch(error => {
                    console.error("ERR: Sub-Breed Listing failed", error);
                });
        }
    }, [breed]);

    if (!breed) {
        return <div>Select a breed to see details.</div>;
    }

    return (
        <div className="breed-details">
            <h3>{breed}</h3>
            <div className="sub-breeds">
                <p>Sub-breeds:</p>
                {subBreeds.length > 0 ? (
                    <ul>
                        {subBreeds.map(subBreed => (
                            <li key={subBreed}>{subBreed}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No sub-breeds</p>
                )}
            </div>
        </div>
    );
}

export default BreedDetails;
