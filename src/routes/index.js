import React from 'react';
import { Route, Redirect } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import reducers from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import promiseMiddleware from '../utils/middlewares/promiseMiddleware'

const history = createBrowserHistory()

const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    composeWithDevTools(
        //这里放中间件
        applyMiddleware(routerMiddleware(history), promiseMiddleware)
    )
)

import Login from '../views/login';
import Register from '../views/register'
import Admin from '../views/admin'

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path='/login' component={Login} ></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/admin' component={Admin} ></Route>
                <Redirect from="/" to="/login" />
            </div>
        </ConnectedRouter>
    </Provider>
)

export default App