import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const apiKey = '728bc76c3d962c9ad4288623c3e0dcc9';
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            api_key: apiKey,
            language: 'en-US',
            sort_by: 'popularity.desc', // Sort by popularity
            with_original_language: 'ko', // Korean language
          },
        });
  
        if (response.status === 200) {
          setMovieList(response.data.results);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching movie list:', error);
        setError('An error occurred while fetching movie list. Please try again later.');
        setLoading(false);
      }
    };
  
    fetchMovieList();
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(movieList) || movieList.length === 0) {
    console.error('No Korean movies found.');
    return <div>No Korean movies found.</div>;
  }

  return (
    <div className='response'>
      <p><b>Korean Movie List</b></p>
      <div className="justify-list">
        <div className="command-list-justify">
          <div className="row1">
            <p>&ensp; &ensp; &ensp;<b>Title</b></p>
          </div>
          <div className="row2">
            <p><b>Ratings</b></p>
          </div>
        </div>
      </div>
      <ul className='justify-list'>
        {movieList.map(movie => (
          <li key={movie.id}>
            <div className='command-list-left'>
              <div className='row1'>
                <strong>{movie.title}</strong>
              </div>
              <div className='row2'>
                <p>{movie.vote_average}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
