import React, { useState, useEffect } from 'react';
import axios from 'axios';

//I CREATED THIS JSX SO THAT I CAN USE THE ALGORITHM

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const response = await axios.get('https://api.jikan.moe/v4/seasons/now');
        console.log('API Response:', response.data); // Log the API response
        setAnimeList(response.data.data); // Update to access the `data` property
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

  // Check if animeList is an array before mapping over it
  if (!Array.isArray(animeList)) {
    console.error('Anime list is not an array:', animeList);
    return <div>Anime list is not available.</div>;
  }

  // Render component content only when animeList has been populated
  return (
    <div>
      <h1>Anime List</h1>
      <ul>
        {animeList.map(anime => (
          <li key={anime.mal_id}>
            <strong>{anime.title}</strong> - Episodes: {anime.episodes}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
