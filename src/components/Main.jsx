import React, { useState, useEffect } from 'react';
import './App.css';
import './Nav.css';
import AnimeRank from './generated/AnimeRanks';
import AnimeList from './generated/AnimeList';
import KDramaranks from './generated/KdramaRanks.jsx';
import ProjectStructure from './ProjectStructure';
import ColorChanger from './generated/ColorChanger.jsx';
import LatestKdrama from './generated/KdramaAPI.jsx';
import KdramaRandom from './generated/KdramaRandom.jsx';
import cat from './images/cat1.png';
import Help from './generated/Help.jsx';
import AddPerson from './generated/AddPerson.jsx';
import AddLocation from './generated/AddLocation.jsx';
import About from './generated/About.jsx';
import Version from './generated/Version.jsx';
import Links from './generated/Links.jsx';
import Api from './generated/Api.jsx';

const log = "Terminal"
const Logo = <span style={{ color: '#007ACC' }}>{log}</span>;

function LinksInfo() {return <Links/>}
function Helpme() {return <Help/>}
function HanimeRanks() {return <AnimeRank/>}
function Hanime() {return <AnimeList/>}
function Tree(){return <ProjectStructure/>}
function Color(){return <ColorChanger/>}
function KdramaList(){return <LatestKdrama/>}
function KDramaPopular(){return <KDramaranks />}
function RandomKDrama(){return <KdramaRandom/>}
function AboutInfo() {return <About/>}
function VersionInfo() {return <Version/>}
function ApiInfo(){return <Api/>}

function Hello(props) {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState('');
    const [showAddPersonForm, setShowAddPersonForm] = useState(false);
    const [showAddLocationForm, setShowAddLocationForm] = useState(false);
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            if (inputValue.toLowerCase() === 'about') {
                setOutputValue(<AboutInfo />);
            } else if (inputValue.toLowerCase() === 'version') {
                setOutputValue(<VersionInfo />);
            } else if (inputValue.toLowerCase() === 'clear') {
                setOutputValue('');
            } else if (inputValue.toLowerCase() === 'help') {
                setOutputValue(<Helpme />);
            } else if (inputValue.toLowerCase() === 'social') {
                setOutputValue(<LinksInfo />);
            } else if (inputValue.toLowerCase() === 'anime-rank') {
                setOutputValue(<HanimeRanks />);
            } else if (inputValue.toLowerCase() === 'anime-list') {
                setOutputValue(<Hanime />);
            } else if (inputValue.toLowerCase() === 'tree') {
                setOutputValue(<Tree />);
            } else if (inputValue.toLowerCase() === 'color') {
                setOutputValue(<Color />);
            }else if (inputValue.toLowerCase() === 'kdrama-list') {
                setOutputValue(<KdramaList />);
            }else if (inputValue.toLowerCase() === 'kdrama-rank') {
                setOutputValue(<KDramaPopular />);
            }else if (inputValue.toLowerCase() === 'kdrama-random') {
                setOutputValue(<RandomKDrama />);
            }else if (inputValue.toLowerCase() === 'api') {
                setOutputValue(<ApiInfo />);
            }else if (inputValue.toLowerCase() === 'add-person') {
                setShowAddPersonForm(true);
                
            }else if (inputValue.toLowerCase() === 'weather') {
                fetchWeather();
                
            
            }else if (inputValue.toLowerCase() === 'weather-location') {
                setShowAddLocationForm(true);
               
            }else {
                setOutputValue('The command entered is not recognized, try typing "help"');
               
            }
            setInputValue('');
        }
    };

    const handleAddPerson = (personData) => {
        setOutputValue(
            <div className='response'>
                <p>Name: {personData.name}</p>
                <p>Age: {personData.age}</p>
                <p>Address: {personData.address}</p>
                <p>Birthday: {personData.birthday}</p>
            </div>
        );
        setShowAddPersonForm(false);
    };

    const handleAddLocation = (locationData) => {
        const { latitude, longitude } = locationData;
        
        const apiKey = '034d947d826c24ed71fa3e9ca6db2156';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.weather && data.weather.length > 0) {
                    const weatherDescription = data.weather[0].description;
                    const temperatureKelvin = data.main.temp;
                    const temperatureCelsius = temperatureKelvin - 273.15;
                    const city = data.name;
                    const country = data.sys.country;
                    setOutputValue(`Weather for today in ${city}, ${country}: ${weatherDescription}, Temperature: ${temperatureCelsius.toFixed(2)}°C`);
                } else {
                    setOutputValue('Weather data is not available.');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setOutputValue('Failed to fetch weather data. Please try again later.');
            });
    
        setShowAddLocationForm(false);
    };
    
    

    const fetchWeather = () => {
        const latitude = '16.526929775073768';
        const longitude = '120.32981280839735'; 
        const apiKey = '034d947d826c24ed71fa3e9ca6db2156'; 

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log('Weather data:', data);
                if (data.weather && data.weather.length > 0) {
                    const weatherDescription = data.weather[0].description;
                    const temperatureKelvin = data.main.temp;
                    const temperatureCelsius = temperatureKelvin - 273.15;
                    const city = data.name;
                    const country = data.sys.country;
                    setOutputValue(`Weather for today in ${city}, ${country}: ${weatherDescription}, Temperature: ${temperatureCelsius.toFixed(2)}°C`);
                } else {
                    setOutputValue('Weather data is not available.');
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setOutputValue('Failed to fetch weather data. Please try again later.');
            });
    };
    
    return (
        <>
            <div className="logo-container">
            <div className="logo">
            <h1>{Logo} Playground</h1> <img width={120} src={cat} alt="cat" />
            </div>
            <div>
            </div>
            </div>

            <div className="command-prompt">
                <div className="header"><p>Togechi-san Terminal [Version 1.0]<br /> (c) Yuri command prompt. All rights reserved.</p></div>
                <div className='helper'>
                    <h3>Welcome</h3>
                    <p>Commands: </p>
                    <div className='command-list'>
                        <div className='row1'>
                            <p>&ensp; <b>about</b></p>
                            <p>&ensp; <b>version</b></p>
                            <p>&ensp; <b>help</b></p>
                            <p>&ensp; <b>clear</b></p>
                            <p>&ensp; <b>social</b></p>
                           
                        </div>
                        <div className='row2'>
                            <p>Display website Information</p>
                            <p>Versions and Change Logs</p>
                            <p>For more information on a specific command</p>
                            <p>Clears the prompt</p>
                            <p>Visit some links</p>
                           
                        </div>
                    </div>
                </div>
                <div className="user-content">
                    <p>C:\Users\Guest&gt;</p>
                    <input
                        className='input'
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleEnter}
                        autoFocus={true}
                    />
                </div>
                {showAddPersonForm && <AddPerson onAddPerson={handleAddPerson} />}
                {showAddLocationForm && <AddLocation onAddLocation={handleAddLocation} />}

              
                {outputValue && <div className="output">{outputValue}</div>}
            </div>
            
        </>
    );
}

export default Hello;
