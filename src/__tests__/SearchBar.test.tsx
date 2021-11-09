import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar';


test('render Sender Search Bar', () => {
  const filterCountries = jest.fn()
  const component = renderer.create(
    <SearchBar changeHandler={filterCountries} />,

  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});