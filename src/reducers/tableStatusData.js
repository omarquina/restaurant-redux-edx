import { TOGGLE_TABLE, SELECT_TABLE } from "../constants/constants.js";

var initialTableData = [];

for (let i = 0; i < 16; i++) {
  initialTableData.push([]);
}

const tableStatusData = (state = initialTableData, action) => {
  switch (action.type) {
    case TOGGLE_TABLE:
      var stateCopy = state.slice();
      stateCopy[action.id] = !stateCopy[action.id];
      return stateCopy;
    case SELECT_TABLE:
      console.log("TableStatusData: SELECT_TABLE: " + state);
    default:
      return state;
  }
};

export default tableStatusData;
