export default async function LoginUser(email, password, setUser, setIsLogined) {
  try {
    
    const response = await fetch("http://localhost:5000/signin",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({email, password})
    })
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setUser(data.data);
    setIsLogined(true);
  } catch (error) {
    console.log("error at login : ", error);
    
  }
};