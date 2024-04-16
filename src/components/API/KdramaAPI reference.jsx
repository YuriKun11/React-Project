import React, { useState, useEffect } from 'react';
import axios from 'axios';

//I CREATED THIS JSX SO THAT I CAN REMEMBER THE ALGORITHM

function App() {
  const [showList, setShowList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShowList = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        console.log('API Response:', response.data); 
        setShowList(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching show list:', error);
        setError('An error occurred while fetching show list. Please try again later.');
        setLoading(false);
      }
    };

    fetchShowList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(showList)) {
    console.error('Show list is not an array:', showList);
    return <div>Show list is not available.</div>;
  }

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {showList.map(show => (
          <li key={show.id}>
            <strong>{show.name}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
