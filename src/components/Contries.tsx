import React from 'react';
import useCountriesService from '../services/useCountriesService';
import Loader from './Loader';
import Country from './Country';

const Countries: React.FC<{}> = () => {
  const service = useCountriesService();

  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
        {service.status === 'loaded' &&
          service.payload.results.map((country, i) => (
            <Country key={`country-${i}`} name={country.name.official} flag={country.flags.svg} />
          ))}

      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default Countries;
