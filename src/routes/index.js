import React from 'react';
import { Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import reducers from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import promiseMiddleware from '../utils/middlewares/promiseMiddleware'

const history = createBrowserHistory()

const middleware = routerMiddleware(history)

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    composeWithDevTools(
        //这里放中间件
        applyMiddleware(middleware, promiseMiddleware)
    )
)

import Login from '../views/login';
import Register from '../views/register'


const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/register' component={Register}></Route>
                <Route path='/login' component={Login} ></Route>
            </div>
        </ConnectedRouter>
    </Provider>
)

export default App