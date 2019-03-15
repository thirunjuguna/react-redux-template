import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { BrowserRouter, Route } from 'react-router-dom';
import reducer from './reducers/index';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import history from './utils/history';
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares)),
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION(),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();