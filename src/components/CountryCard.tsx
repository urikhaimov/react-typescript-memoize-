import React from 'react';
import Popup from 'reactjs-popup';
// import  'reactjs-popup/dist/index.css';
import { Country } from '../types/Country';
// import defaultFlagIcon from '../resources/images/default.svg'
export interface Props {
  country: Country
  clickHandler(c: Country): void;
}

const CountryCard: React.FC<Props> = ({country, clickHandler }) => {
  const name = country.name.official;
  const flag = country.flags.svg ;
return (
    <div className="country">
      <h2>{name}</h2>
      <Popup trigger={<img src={flag} alt={name} />} position="right center">
        <div>
          <img src={flag} alt={name} onClick={clickHandler.bind(null,country)} />
        </div>
      </Popup>

    </div>
  );
};

export default CountryCard;
