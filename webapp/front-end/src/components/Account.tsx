import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Account: React.FC = () => {
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
    <div>
      <h1>Account</h1>
      {data ? (
        <p>Data from server: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Account;