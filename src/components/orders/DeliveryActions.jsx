import React, { useContext } from "react";
import { Link} from "react-router";
import { Context } from "../../data/states";

function DeliveryActions({ id }) {
  const { setAlert } = useContext(Context);

  return (
    <>
      <Link to={"/transaction/" + id}>
        <button
          className="px-4 py-2 bg-blue-300 rounded-md text-blue-900 font-semibold cursor-pointer"
        >
          View Details
        </button>
      </Link>
      <button
        className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md cursor-pointer"
        onClick={() => handleCancelled(id, setAlert, "Order cancelled by the Seller")}
      >
        Cancel
      </button>
    </>
  );
}

export default DeliveryActions;
