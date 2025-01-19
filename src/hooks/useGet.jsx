export default async function useGet(url) {
  try {
    const response = await fetch(`http://localhost:5000/books`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      credentials: 'include'
    });
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log(`Error at fetching data from ${url}:`, error);
    throw new Error(`Error at fetching data from ${url}:`, error);
    
  }
}
