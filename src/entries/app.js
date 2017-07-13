import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../routes';

const App = <AppRouter />

console.log('in');

ReactDOM.render(
    App,
    document.getElementById('root')
);