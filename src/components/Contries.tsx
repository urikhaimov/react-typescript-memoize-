import React, {useEffect} from 'react';
import useCountriesService from '../services/useCountriesService';
import Loader from './Loader';
import CountryCard from './CountryCard';
import { useLocalStorage } from 'usehooks-ts'
import { Country } from '../types/Country';
const Countries: React.FC<{}> = () => {
  const service = useCountriesService();
  var arr = new Array<Country>();
  const [countriesFromStorage, setCountriesFromStorage] = useLocalStorage('countries', arr)
  // useEffect(()=>{
  
  // },[countriesFromStorage]) 
  
  const addCountryToStorage = (country: Country) =>{
    setCountriesFromStorage( [...countriesFromStorage, country])
  //  console.log(countriesFromStorage)
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
                  key ={`countryCard-${i}`}
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
