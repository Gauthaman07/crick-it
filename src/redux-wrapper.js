import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

export const wrapRootElement = ({ element }) => {
    return <Provider store={store}>{element}</Provider>;
};
