import '../App.css';
import React, { useState } from 'react';

function AddPerson({ onAddPerson }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState('');
    const [currentInput, setCurrentInput] = useState('name'); // Track the current input field

    const handleAddPerson = () => {
        onAddPerson({ name, age, address, birthday });
        // Reset inputs and state after submission
        setName('');
        setAge('');
        setAddress('');
        setBirthday('');
        setCurrentInput('name');
    };

    const handleKeyPress = (event, inputType) => {
        if (event.key === 'Enter' && event.target.value.trim() !== '') {
            switch (inputType) {
                case 'name':
                    setCurrentInput('age');
                    break;
                case 'age':
                    setCurrentInput('address');
                    break;
                case 'address':
                    setCurrentInput('birthday');
                    break;
                case 'birthday':
                    handleAddPerson();
                    break;
                default:
                    break;
            }
        }
    };

    return (
        <>
            <div className="user-content">
                <p>{currentInput === 'name' ? 'Name' : currentInput === 'age' ? 'Age' : currentInput === 'address' ? 'Address' : 'Birthday'}: </p>
                <input className='input'
                    autoFocus
                    type="text"
                    value={currentInput === 'name' ? name : currentInput === 'age' ? age : currentInput === 'address' ? address : birthday}
                    onChange={(e) => {
                        switch (currentInput) {
                            case 'name':
                                setName(e.target.value);
                                break;
                            case 'age':
                                setAge(e.target.value);
                                break;
                            case 'address':
                                setAddress(e.target.value);
                                break;
                            case 'birthday':
                                setBirthday(e.target.value);
                                break;
                            default:
                                break;
                        }
                    }}
                    onKeyPress={(e) => handleKeyPress(e, currentInput)}
                />
            </div>
        </>
    );
}

export default AddPerson;
