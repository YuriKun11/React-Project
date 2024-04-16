import React, { useState, useEffect } from 'react';
import axios from 'axios';

function KdramaRandom() {
  const [dramaList, setDramaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRandomKoreanDramas = async () => {
      try {
        const apiKey = '728bc76c3d962c9ad4288623c3e0dcc9';
        const randomSortOptions = ['popularity.desc', 'vote_average.desc', 'first_air_date.desc'];
        const randomSort = randomSortOptions[Math.floor(Math.random() * randomSortOptions.length)];
        let allDramas = [];

        for (let page = 1; page <= 5; page++) {
          const response = await axios.get('https://api.themoviedb.org/3/discover/tv', {
            params: {
              api_key: apiKey,
              language: 'en-US',
              sort_by: randomSort,
              with_original_language: 'ko',
              with_genres: '18', 
              page: page,
            },
          });

          if (response.status !== 200) {
            throw new Error('Failed to fetch data');
          }
          const uniqueDramas = response.data.results.filter(drama => !allDramas.some(existingDrama => existingDrama.id === drama.id));
          allDramas = [...allDramas, ...uniqueDramas];
        }
        console.log('API Response:', allDramas);
        setDramaList(allDramas);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Korean dramas:', error);
        setError('An error occurred while fetching Korean dramas. Please try again later.');
        setLoading(false);
      }
    };

    fetchRandomKoreanDramas();
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

export default KdramaRandom;
