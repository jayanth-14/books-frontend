
const getCoordinates = async () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve([position.coords.latitude, position.coords.longitude]),
      (error) => reject(error)
    );
  });
};


export default async function addUser(name, email, password, phone, address, setAlert, navigate) {
  try {
    const coordinates = await getCoordinates();
    const newUser = {
      fullName: name,
      email: email,
      password: password,
      phone: phone,
      profile_img: "",
      coordinates:coordinates,
      address: address
    }
    const url = import.meta.env.VITE_BACKEND + "signup";
    const response = await fetch(url, {
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
    console.log("error at Registertion : ", error);

  }
}