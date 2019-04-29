import { combineReducers } from "redux";
import selectedTable from "./selectedTable";
import tableStatusData from "./tableStatusData";

let initialState = { id: null, value: "NULO" };

const reducers = combineReducers({
  tableStatusData,
  selectedTable
});
//console.log(reducers);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "test":
      console.log(`TEST: ${toString(state)}`);
      return action.item;
    case "test2":
      console.log("TEST 2");
      return { ...state, test2: "test2" };
    default:
      return state;
  }
};

const reducer1 = (state = 1, action) => {
  switch (action.type) {
    case "test2":
      console.log("TEST 2");
      return "test2";
    default:
      return state;
  }
};

export default reducer;
export { reducer1, reducers };
