import { createContext, useContext, useState } from "react";

export const Context = createContext(null);


function StatesProvider(params) {
  const [isLogined, setIsLogined] = useState(false);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [books, setBooks] = useState();
  const [alert, setAlert] = useState([]);
  const [checkoutBook, setCheckoutBook] = useState({});

  return (
    <Context.Provider value={{ isLogined, setIsLogined, user, setUser, books, setBooks, cart, setCart, alert, setAlert, checkoutBook, setCheckoutBook }}>
      {params.children}
    </Context.Provider>
  )
}

export default StatesProvider;