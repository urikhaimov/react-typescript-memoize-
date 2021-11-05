import React from 'react';

export interface Props {
  name: string;
  flag: string;
}

const Country: React.FC<Props> = ({ name, flag }) => {
  return (
      <div className="country">
        <h2>{name}</h2>
        <img src={flag}  />
      </div>
  );
};

export default Country;
