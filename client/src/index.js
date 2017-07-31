import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configure-store";

import fetchIt from "./service";
import App from "./App";
// import registerServiceWorker from './registerServiceWorker';
import "./index.css";

const store = configureStore();

const root = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App fetchIt={fetchIt} />
    </Provider>,
    root
);
// registerServiceWorker();
