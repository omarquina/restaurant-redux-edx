import React, { Component } from "react";
import { createStore } from "redux";
import reducer, { reducers } from "../../reducers/reducer";
import selectTable from "../../actions/selectTable";
import incrementMoneyEarned from "../../actions/incrementMoneyEarned.js";
import toggleTable from "../../actions/toggleTable";

class Reducers extends Component {
  constructor(props) {
    super(props);
    console.log("Construcor Component");
  }

  componentDidMount() {
    console.log("montado Reducers");
    /*var store = createStore(reducer);
    store.subscribe(() => {
      console.log("STORE: ");
      console.log(store.getState());
    });
    store.dispatch({ type: "test", item: { id: 1, value: "test1" } });
    store.dispatch({ type: "test2", objeto: { test2: true } });
    */
    console.log("STORE 2");
    var store = createStore(reducers);
    store.subscribe(() => {
      console.log("STORE: ");
      console.log(store.getState());
    });
    store.dispatch(selectTable(0));
    store.dispatch(selectTable(1));
    store.dispatch(toggleTable(1));
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Prueba de Reducers</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Reducers;
