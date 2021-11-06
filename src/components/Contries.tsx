import React, { useEffect } from 'react';
import useCountriesService from '../services/useCountriesService';
import Loader from './Loader';
import CountryCard from './CountryCard';
import { useLocalStorage } from 'usehooks-ts'
import { Country } from '../types/Country';
import _ from 'lodash';

const Countries: React.FC<{}> = () => {
  const service = useCountriesService();
  const [countriesFromStorage, setCountriesFromStorage] = useLocalStorage('countries', new Array<Country>())
  // useEffect(()=>{

  // },[countriesFromStorage]) 


  const isCountryExistsInStorage = (country: Country) =>
    countriesFromStorage.some(({ idd }) =>
      _.isEqual(idd, country.idd))




  const addCountryToStorage = (country: Country) => {
    if (!isCountryExistsInStorage(country)) {
      setCountriesFromStorage([country, ...countriesFromStorage])
    }

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
              key={`countryCard-${i}`}
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
