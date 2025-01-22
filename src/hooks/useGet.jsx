export default async function useGet(url) {
  try {
    const response = await fetch(url, {
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
  }
}
