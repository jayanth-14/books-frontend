const getProfileDetails = async() => {
  // Make a GET request to the server to get user profile details
  try {
    
    const response = await fetch("http://localhost:5000/profile", {
      method: "Get",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log("error at login : ", error);
  }
}

export default getProfileDetails;