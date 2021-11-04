import React from 'react';
//import useCountryByUrlService from '../services/useCountryByUrlService';
import Loader from './Loader';

export interface Props {
  name: Object;
  flag: Object;
}

const Country: React.FC<Props> = ({ name, flag }) => {
 // const service = useCountryByUrlService(url);

  return (
    <div className="Country-modal-container">
      <div className="Country-modal-background" />

        <div className="Country">
          <h2>{name}</h2>

        </div>
    
    
    </div>
  );
};

export default Country;
