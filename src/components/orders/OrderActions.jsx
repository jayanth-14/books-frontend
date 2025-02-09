import React, { useContext } from "react";
import {handleDelivered, handleCancelled} from '../../functionalities/orderActions';
import { Context } from "../../data/states";
function OrderActions({id}) {
  const { setAlert } = useContext(Context);

  return (
    <>
      <button
        className="px-4 py-2 bg-blue-300 rounded-md text-blue-900 font-semibold cursor-pointer"
        onClick={() => handleDelivered(id, setAlert)}
      >
        Delivered
      </button>
      <button
        className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md cursor-pointer"
        onClick={() => handleCancelled(id, setAlert)}
      >
        Cancel
      </button>
    </>
  );
}

export default OrderActions;
