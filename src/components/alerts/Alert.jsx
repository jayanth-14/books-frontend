import React, { useContext, useState } from 'react'
import { Context } from '../../data/states';
import { useEffect } from 'react';

function Alert({ alert, index }) {
  const { setAlert } = useContext(Context);
  let alertColor = alert.type === 'success' ? 'green' : 'red';

  const handleDismiss = () => {
    setAlert((alerts) => alerts.filter((alertItem, i) => i !== index));
  };

  // Automatically dismiss or close the alert after 1.5 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleDismiss();
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`px-6 py-4 mx-auto my-4 rounded-lg shadow-lg flex items-center justify-between max-w-lg border-l-4 border-${alertColor}-500 bg-white`}
    >
      {alert && (
        <>
          <div className="flex items-center">
            {/* Icon */}
            <svg
              viewBox="0 0 24 24"
              className={`text-${alertColor}-500 w-6 h-6 mr-3`}
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            {/* Message */}
            <span className={`text-${alertColor}-800 font-medium`}>
              {alert.message}
            </span>
          </div>

          {/* Close Button */}
          <button
            className={`text-${alertColor}-600 hover:text-${alertColor}-800 focus:outline-none`}
            onClick={handleDismiss}
            aria-label="Dismiss alert"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}


const AlertContainer = () => {
  const { alert} = useContext(Context);

  
  return (
    <div className="alertContainer flex justify-center items-end fixed top-10 right-0 z-50">
      {alert && alert.map((alertItem, index) => {
        return <Alert alert={alertItem} key={index} index={index} />
      })}
    </div>
  )
}



export default AlertContainer;