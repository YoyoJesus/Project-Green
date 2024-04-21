import React, { useState, useEffect } from 'react';
import { fetchVariable } from '../utils/api';

const FetchVariable = () => {
  const [variable, setVariable] = useState('');

  useEffect(() => {
    fetchVariable().then((data) => {
      setVariable(data);
    }).catch((error) => {
      console.error('Error fetching variable:', error);
    });

    const intervalId = setInterval(() => {
      fetchVariable().then((data) => {
        setVariable(data);
      }).catch((error) => {
        console.error('Error fetching variable:', error);
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return <h1>Variable Value: {variable}</h1>;
};

export default FetchVariable;
