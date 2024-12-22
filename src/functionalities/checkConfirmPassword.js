export const checkPassword = (password, checkPassword, setIsSame) => {
  if (password === checkPassword) {
    setIsSame(true);
    return;
  }
  setIsSame(false);
}