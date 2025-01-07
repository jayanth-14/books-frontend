export const addToCart = (bookData, cart, setCart) => {
    setCart((oldCart) => [...oldCart, bookData]);
}