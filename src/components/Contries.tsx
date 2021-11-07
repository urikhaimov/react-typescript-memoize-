import React, { useEffect,useState } from 'react';
import useCountriesService from '../services/useCountriesService';
import Loader from './Loader';
import CountryCard from './CountryCard';
import { useLocalStorage } from 'usehooks-ts'
import { Country } from '../types/Country';
import _ from 'lodash';

const Countries: React.FC<{}> = () => {
  const service = useCountriesService();
  const [countriesFromStorage, setCountriesFromStorage] = useLocalStorage('countries', new Array<Country>())
  const [countries, setCountries] = useState(new Array<Country>())


  useEffect (() =>{
    if(service.status === 'loaded') {
      setCountries(getUniqueListBy([...countriesFromStorage,...service.payload.results]))
    }
  },[service, countriesFromStorage])


  
  const getUniqueListBy = (arr: Array<Country>) =>
      [...new Map(arr.map(item => [item.name.official, item])).values()]
  
  const isCountryExistsInStorage = (current: Object) =>
    countriesFromStorage.some(({ idd }) =>
      _.isEqual(idd, current))




  const addCountryToStorage = (country: Country) => {
   if (!isCountryExistsInStorage(country.idd)) {
    setCountriesFromStorage([country, ...countriesFromStorage])
   }
    
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
          countries.map((country, i) => (
            <CountryCard
              key={`countryCard-${i}`}
              index = {i}
              country={country}
              clickHandler={addCountryToStorage} />
          ))}

      </div>
      {service.status === 'error' && (
        <div>Error!</div>
      )}
    </>
  );
};

export default Countries;
