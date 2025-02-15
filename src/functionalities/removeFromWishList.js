export default async function removeFromWishList(bookId, setAlert) {
  const requestObject = {
    bookId
  }
  const url = import.meta.env.VITE_BACKEND + "wishlist";
  const response = await fetch(url, {
    method: 'DELETE',
    credentials: 'include',
    body: JSON.stringify(requestObject),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  })

  const status = await response.json();
  console.log(status);
  
  if (status.status === 'success') {
    setAlert([{type: 'success', message: "book removed from wishlist!"}]);
    return
  }
  setAlert([{type: 'error', message: "book is not removed from wishlist!"}])
}
