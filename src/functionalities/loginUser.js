export default async function LoginUser(email, password, setUser, setIsLogined, setAlert) {
  try {
    
    const response = await fetch("http://localhost:5000/signin",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      credentials:'include',
      body: JSON.stringify({email, password})
    })
    if (!response.ok) {
      setAlert([{type : "error", message: "Invalid email or password"}]);
      return;
    }
    const data = await response.json();
    
    setUser(data.data.userId);
    localStorage.setItem("userId", JSON.stringify(data.data.userId));
    console.log(data);
    
    setAlert([{type : "success", message: "Login is Successful!"}]);
    setIsLogined(true);
  } catch (error) {
    console.log("error at login : ", error);
    
  }
};