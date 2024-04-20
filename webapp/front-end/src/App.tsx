import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Green</h1>
        <hr className="fullWidth" />
        {data ? (
          <p>Data from server: {data}</p>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
};

export default App;
