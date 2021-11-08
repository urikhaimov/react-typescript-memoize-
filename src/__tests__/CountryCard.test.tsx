import React from 'react';
import renderer from 'react-test-renderer';
import CountryCard from '../components/CountryCard';
import { Country } from '../types/Country';

test('render App', () => {
    const addCountryToStorage = jest.fn()
    const country:Country = {
        name: {
            common: 'aaa',
            official: 'aaaa'
          },
          flags: {
            png: 'bbb',
            svg: 'svg'
          },
          idd: {
            root: '+5',
            suffixes: [0]
          }
         
    } 
    const component = renderer.create(
        <CountryCard
            key={`countryCard-${0}`}
            country={country}
            clickHandler={addCountryToStorage}
        />,

    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


});