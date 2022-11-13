/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {Provider} from 'react-redux';
import {store} from '../src/app/store';

import renderer, {act} from 'react-test-renderer';

it('renders correctly', () => {
  return act(() => {
    renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
