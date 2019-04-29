import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//import Reducers from "./components/Reducers";
//import { createStore } from "redux";
//import { Provider } from "react-redux";
import "./styles.css";

//import { reducers } from "./reducers/reducers";

//var store = createStore(reducers);
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
/*<Provider store={store}>*/
/*</Provider>*/
