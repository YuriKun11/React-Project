import React, { useState } from 'react';
import '../App.css';

function AddLocation({ onAddLocation }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [currentInput, setCurrentInput] = useState('latitude'); // Track the current input field

    const handleAddLocation = () => {
        if (latitude.trim() !== '' && longitude.trim() !== '') {
            onAddLocation({ latitude, longitude });
            // Reset inputs and state after submission
            setLatitude('');
            setLongitude('');
            setCurrentInput('latitude');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            switch (currentInput) {
                case 'latitude':
                    setCurrentInput('longitude');
                    break;
                case 'longitude':
                    handleAddLocation();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <>
            <div className="user-content">
                <p>{currentInput === 'latitude' ? 'Latitude' : 'Longitude'}: </p>
                <input
                    className='input'
                    autoFocus
                    type="text"
                    value={currentInput === 'latitude' ? latitude : longitude}
                    onChange={(e) => {
                        if (currentInput === 'latitude') {
                            setLatitude(e.target.value);
                        } else {
                            setLongitude(e.target.value);
                        }
                    }}
                    onKeyPress={handleKeyPress}
                />
            </div>
        </>
    );
}

export default AddLocation;
