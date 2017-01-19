import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import store from "./store";
import Page from "./pages";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Page />
  </Provider>,
app);
