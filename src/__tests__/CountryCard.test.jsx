import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import CountryCard from '../components/CountryCard';


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

afterEach(cleanup);

test('render Country Card', () => {

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

it('Country Card after click', () => {
  const { queryAllByRole, getAllByRole } = render(
    <CountryCard key={`countryCard-${0}`}
      country={country}
      clickHandler={addCountryToStorage} />,
  );
  let img = queryAllByRole('img')
  expect(img[0]).toBeTruthy();
  expect(img.length).toEqual(1);
  fireEvent.click(getAllByRole('img')[0]);
  img = queryAllByRole('img');
  expect(img.length).toEqual(2);
});