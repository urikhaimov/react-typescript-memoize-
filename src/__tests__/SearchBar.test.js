import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
const filterCountries = jest.fn();
afterEach(cleanup);
test('render Search Bar', () => {
 
  const component = renderer.create(
    <SearchBar changeHandler={filterCountries} />,

  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});

it('Search Bar after click', () => {
  const { queryByLabelText, getByLabelText } = render(
    <SearchBar changeHandler={filterCountries} />,
  );
  const input = queryByLabelText('Search');
  expect(input).toBeTruthy();
  fireEvent.change(getByLabelText('Search'), {target: {value: 'wonder'}})
  expect(input.value).toEqual('wonder');
});