
export default async function addUser(name, email, password, phone, address, setAlert, navigate) {
  try {
    let latitude = 0, longitude = 0;
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
    })
    // console.log(coordinates);
    
    const newUser = {
      fullName: name,
      email: email,
      password: password,
      phone: phone,
      profile_img: "",
      coordinates: [latitude, longitude],
      address: address
      
    }
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newUser)
    })
    const data = await response.json();
    console.log(data);
    
    if (!response.ok) {
      setAlert([{type: "error", message: data.error}]);
      return;
    }
    setAlert([{type: "success", message: "User added successfully, Redirecting to login page"}]);
    setTimeout(() => {
      navigate("/login");
    }, 1500);
    console.log(data);
  } catch (error) {
    console.log("error at login : ", error);

  }
}