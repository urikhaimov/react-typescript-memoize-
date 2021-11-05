import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export interface Props {
  name: string;
  flag: string;
}

const Country: React.FC<Props> = ({ name, flag }) => {

  return (
    <div className="country">
      <h2>{name}</h2>
      <Popup trigger={<img src={flag} alt={name} />} position="right center">
        <div><img src={flag} alt={name} /></div>
      </Popup>

    </div>
  );
};

export default Country;
