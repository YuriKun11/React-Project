import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KDramaranks() {
  const [dramaList, setDramaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchKoreanDramas = async () => {
      try {
        const apiKey = '728bc76c3d962c9ad4288623c3e0dcc9';
        const response = await axios.get('https://api.themoviedb.org/3/discover/tv', {
          params: {
            api_key: apiKey,
            language: 'en-US',
            sort_by: 'popularity.desc', // Sort by popularity
            with_original_language: 'ko', // Korean language
            with_genres: '18', // Genre ID for dramas
          },
        });

        console.log('API Response:', response.data); // Log the API response

        if (response.status === 200) {
          setDramaList(response.data.results);
          setLoading(false);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching Korean dramas:', error);
        setError('An error occurred while fetching Korean dramas. Please try again later.');
        setLoading(false);
      }
    };

    

    fetchKoreanDramas();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(dramaList) || dramaList.length === 0) {
    console.error('No Korean dramas found.');
    return <div>No Korean dramas found.</div>;
  }

  return (
    <div className='response'>
      <p><b>Korean Drama List</b></p>
      <div className="justify-list">
        <div className="command-list-justify">
          <div className="row1">
            <p>&ensp; &ensp; &ensp;<b>Title</b></p>
          </div>
          <div className="row2">
            <p><b>Ratings:</b></p>
          </div>
        </div>
      </div>
      <ul className='justify-list'>
        {dramaList.map(drama => (
          <li key={drama.id}>
            <div className='command-list-left'>
              <div className='row1'>
                <strong>{drama.name}</strong>
              </div>
              <div className='row2'>
                <p>{drama.vote_average}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KDramaranks;
