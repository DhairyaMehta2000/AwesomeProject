import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 const ACCESS_KEY="RakABEvoyCb77tRwK5umtqWorXcNdxjekHX0BcSa098";
  const fetchData = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`, // Replace with your Unsplash API key
          },
        });
        setData(response.data.slice(0, 10));
      } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return children({ data, isLoading, fetchData });
};

export default DataFetcher;
