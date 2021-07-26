import { useState, useEffect } from 'react';

const useHttp =  (url)=> {
  const [fetchedData, setFetchedData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const host = process.env.REACT_APP_API_HOST;
  const key = process.env.REACT_APP_API_KEY;

  useEffect(()=> {
    setIsLoading(true);
    fetch(url, {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": key,
      "x-rapidapi-host": host
    }
    })
    .then(response => {
      return response.json()
    })
    .then(data => {
      setIsLoading(false);
      setFetchedData(data);
    })
    .catch(err => {
      setIsLoading(false);
      console.error(err);
    });
  }, [url, host, key]);

  return [isLoading, fetchedData];
}

export default useHttp;