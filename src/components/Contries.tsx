import React, {useEffect} from 'react';
import useCountriesService from '../services/useCountriesService';
import Loader from './Loader';
import CountryCard from './CountryCard';
import { useLocalStorage } from 'usehooks-ts'

const Countries: React.FC<{}> = () => {
  const service = useCountriesService();
  const [countriesFromStorage, setCountriesFromStorage] = useLocalStorage('countries',[])
  // useEffect(()=>{
  
  // },[countriesFromStorage]) 
  
  const addCountryToStorage = (e: any) =>{
    console.log(e.target)
  }

  return (
    <>
      <div className="country-container ">
        {service.status === 'loading' && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        {service.status === 'loaded' &&
          service.payload.results.map((country, i) => (
            <CountryCard 
                  country={country}
                  clickHandler={addCountryToStorage} />
          ))}

      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default Countries;
