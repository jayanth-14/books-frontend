const getProfileDetails = async() => {
  try {
    const url = import.meta.env.VITE_BACKEND + "profile";
    const response = await fetch(url, {
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