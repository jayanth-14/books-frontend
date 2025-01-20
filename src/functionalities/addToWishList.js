export default async function addToWishList(bookId, setAlert) {
  const requestObject = {
    bookId
  }
  const response = await fetch("http://localhost:5000/wishlist", {
    method: 'POST',
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
    setAlert([{type: 'success', message: "book added to wishlist!"}]);
    return
  }
  setAlert([{type: 'error', message: "book is not added to wishlist!"}])
}
