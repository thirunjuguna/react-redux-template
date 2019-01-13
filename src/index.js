import React from 'react';
import {render} from 'react-dom';
import{ Router,browserHistory} from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './assets/app.css'

import * as serviceWorker from './serviceWorker';

const store = configureStore();

render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
