export default function LoginUser(email, password, usersList, setUser, setIslogined) {
  usersList.forEach(user => {
    if (user.email === email && user.password === password) {
    setUser(user);
    setIslogined(true)
    console.log(user);
    }
  });
};