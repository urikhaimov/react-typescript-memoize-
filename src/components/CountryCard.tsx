import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Country } from '../types/Country';

export interface Props {
  index: Number
  country: Country
  clickHandler(c: Country): void;
}

const CountryCard: React.FC<Props> = ({index, country, clickHandler }) => {
  const name = country.name.official;
  const flag = country.flags.svg;
  return (
    <div className="country">
      <h2>{name}- {index}</h2>
      <Popup trigger={<img src={flag} alt={name} />} position="right center">
        <div>
          <img src={flag} alt={name} onClick={clickHandler.bind(null,country)} />
        </div>
      </Popup>

    </div>
  );
};

export default CountryCard;
