import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AnimeRank() {

    const [animeList, setAnimeList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAnimeList = async () => {
            try {
                const response = await axios.get('https://api.jikan.moe/v4/top/anime');
                console.log('API Response:', response.data); 
                setAnimeList(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching anime list:', error);
                setError('An error occurred while fetching anime list. Please try again later.');
                setLoading(false);
            }
        };

        fetchAnimeList();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!Array.isArray(animeList)) {
        console.error('Anime list is not an array:', animeList);
        return <div>Anime list is not available.</div>;
    }

    return (
        <div className='response'>
            <p><b>Anime (Rankings)</b></p>

           
            <ul className='justify-list'>
                {animeList.map(anime => (
                    <li key={anime.mal_id}>
                        <div className='command-list-left'>
                        <div className='row1'>
                            <strong>{anime.title}</strong>
                        </div>
                        <div className='row2'>
                            Rank: {anime.rank}
                        </div>
                    </div>
                         
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AnimeRank;
