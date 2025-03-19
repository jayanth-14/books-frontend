const updateUser = async (phone, password, address, changeLocation) => {
  const getCoordinates = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          resolve([position.coords.latitude, position.coords.longitude]),
        (error) => reject(error)
      );
    });
  };

  let coordinates = undefined ;
  if (changeLocation === true) {
    coordinates = await getCoordinates();
  }
  const profileData = {
    phone: phone,
    password: password,
    coordinates: coordinates,
    address: address,
  };
  try {
    const url = import.meta.env.VITE_BACKEND + "update";
    const response = await fetch(url, {
      method: "PUT",
      credentials:'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log("error at Updating user : ", error);
  }
};

export default updateUser;