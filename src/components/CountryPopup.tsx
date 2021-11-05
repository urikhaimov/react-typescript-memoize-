import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export interface Props {
  name: string;
  flag: string;
}

const CountryPopup: React.FC<Props> = ({name, flag }) => {
  return (
    <Popup  position="right center">
    <div><img src={flag} alt={ name} /></div>
  </Popup>
  );
};

export default CountryPopup;
