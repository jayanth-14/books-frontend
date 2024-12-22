export const addToCart = (bookData, cart, setCart) => {
  const existingBook = cart.find((item) => item.id === bookData.id);
  if (!existingBook) {
    setCart((oldCart) => [...oldCart, bookData]);
  }
}