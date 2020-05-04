import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './Redux/store'

import App from './App'
import createRoutes from './Routes'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App>{createRoutes()}</App>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
