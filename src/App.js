import React, { useState } from 'react';
import BreedList from './components/BreedListing';
import BreedDetails from './components/BreedInfo';
import './App.css';

function App() {
    const [selectedBreed, setSelectedBreed] = useState(null);

    return (
        <div>
            <header className="app-header">
                Dog Picker
            </header>
            <div className="container">
                <div className="sidebar">
                    <h2>List of Breeds</h2>
                    <BreedList onSelectBreed={setSelectedBreed} selectedBreed={selectedBreed} />
                </div>
                <div className="main-content">
                    <h2>Selected Breed</h2>
                    <BreedDetails breed={selectedBreed} />
                </div>
            </div>
        </div>
    );
}

export default App;
