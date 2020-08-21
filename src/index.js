import React from 'react';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Store from './store'
import ReactDOM from 'react-dom';
import './styles.css'
import {
    BrowserRouter as Router
} from "react-router-dom";
import Routes from "./routes";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <Provider store={Store().store}>
          <PersistGate loading={null} persistor={Store().persistor}>
              <Router>
                  <Routes />
              </Router>
          </PersistGate>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
