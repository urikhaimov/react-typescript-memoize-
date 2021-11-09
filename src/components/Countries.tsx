import React, { useEffect, useState } from 'react';
import useCountriesService from '../services/useCountriesService';
import Loader from './Loader';
import CountryCard from './CountryCard';
import { useLocalStorage } from 'usehooks-ts'
import { Country } from '../types/Country';
import _ from 'lodash';
import SearchBar from './SearchBar';

const Countries: React.FC<{}> = () => {
  const service = useCountriesService();
  const [countriesFromStorage, setCountriesFromStorage] = useLocalStorage('countries', new Array<Country>())
  const [countries, setCountries] = useState(new Array<Country>())
  const [allCountries, setAllCountries] = useState(new Array<Country>())

  useEffect(() => {
    if (service.status === 'loaded') {
      const updatedCountries = getUniqueListByName([...countriesFromStorage, ...service.payload.results])
      setCountries(updatedCountries);
      setAllCountries(updatedCountries)
    }
  }, [service, countriesFromStorage])

  const getUniqueListByName = (arr: Array<Country>) =>
    [...new Map(arr.map(item => [item.name.official, item])).values()]

  const isCountryExistsInStorage = (current: Object) =>
    countriesFromStorage.some(({ idd }) =>
      _.isEqual(idd, current))

  const addCountryToStorage = (country: Country) => {
    if (!isCountryExistsInStorage(country.idd)) {
      setCountriesFromStorage([country, ...countriesFromStorage])
    }

  }

  const filterCountries = (e: any) => {
    setCountries(allCountries.filter((c: Country) =>
      c.name.official.toLowerCase().includes(e.target.value.toLowerCase())
    ))
  }

  return (
    <>
      <div className="country-container ">
        <SearchBar
          changeHandler={filterCountries} />
        {service.status === 'loading' && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        {service.status === 'loaded' &&
          countries.map((country, i) => (
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
