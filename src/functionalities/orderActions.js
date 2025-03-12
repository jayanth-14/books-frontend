import usePost from "../hooks/usePost";

const handleDelivered = async (orderId, setAlert) => {
    const url = import.meta.env.VITE_BACKEND + "delivered";
    const response = await usePost(url, {
      transactionId: orderId,
    });
    setAlert([response]);
  };
  const handleCancelled = async (orderId, setAlert, message) => {
    const url = import.meta.env.VITE_BACKEND + "cancelled";
    const response = await usePost(url, {
      transactionId: orderId,
      message
    });
    console.log("cancel response : ", response);
    
    setAlert([response]);
  };

  export {handleCancelled, handleDelivered};