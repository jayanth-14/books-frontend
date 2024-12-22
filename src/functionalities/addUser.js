
export default function addUser(name, email, password,usersList, setUsers) {
  const newUser = {
    name: name,
    email: email,
    password: password,
    id: usersList.length,
    profile_img: ""
  }
  setUsers((existingUsers) => {[...existingUsers, newUser]})
  console.log(usersList)
}