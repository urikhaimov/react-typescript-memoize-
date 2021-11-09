import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Countries from '../components/Countries';
import request from './__mocks__/request';


afterEach(cleanup);
// The assertion for a promise must be returned.
it('works with async/await', async () => {
  expect.assertions(1);
  const country = await request();
  expect(country.length).toEqual(2)
});


test('render Countries', () => {

  const component = renderer.create(
    <Countries/>,

  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
}) 
