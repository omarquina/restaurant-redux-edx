import { ADD_TABLE_ITEM } from "../constants/constants.js";

const addTableItem = (name, price, id) => {
  return {
    type: ADD_TABLE_ITEM,
    table_id: id,
    item: {
      name,
      price
    }
  };
};

export default addTableItem;
