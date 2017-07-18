import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../routes';
import './index.scss'

const App = <AppRouter />

ReactDOM.render(
    App,
    document.getElementById('root')
);