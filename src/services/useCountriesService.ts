import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { Country } from '../types/Country';

export interface Countries {
  results: Country[];
}

const useCountriesService = () => {
  const [result, setResult] = useState<Service<Countries>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload:{
        results:response
      }  }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useCountriesService;
