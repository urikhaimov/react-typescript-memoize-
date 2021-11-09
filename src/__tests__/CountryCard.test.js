import React from 'react';
import renderer from 'react-test-renderer';
import {cleanup, fireEvent} from '@testing-library/react';
import CountryCard from '../components/CountryCard';



afterEach(cleanup);

test('render Country Card', () => {
  const addCountryToStorage = jest.fn()
  const country = {
    name: {
      common: 'WonderLand',
      official: 'WonderLand'
    },
    flags: {
      png: 'png',
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
  expect(tree.children[0].children[0]).toEqual('WonderLand');
  expect(tree.children[1].props.src).toEqual('svg');
 
});