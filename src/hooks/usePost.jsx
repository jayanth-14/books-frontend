export default async function useGet(url, requestObject) {
  try {
    const response = await fetch(`http://localhost:5000/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: requestObject,
      credentials: 'include'
    });
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log(`Error at fetching data with method: POST from url: ${url}:`, error);
    throw new Error(`Error at fetchingdata with method: POST from url: ${url}:`, error);
  }
}
