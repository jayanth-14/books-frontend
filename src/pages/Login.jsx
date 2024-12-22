import React, { useContext, useEffect } from 'react'
import InputField from '../components/form/InputField'
import PasswordField from '../components/form/PasswordField'
import FormNav from '../components/form/FormNav'
import ButtonPrimary from '../components/buttons/buttonPrimary'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Context } from '../data/states'
import LoginUser from '../functionalities/loginUser'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormSubmited, setIsFormSubmitted] = useState(false);
  const {users, setUser, islogined, setIsLogined} = useContext(Context);

  const navigate = useNavigate();
  const checkIsLogined = () => {
    if(islogined) {
      navigate("/");
    }
  }
  useEffect(() => {
      checkIsLogined();
  }, [islogined])
  
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2 mt-10">
      <FormNav />
      <form className='flex flex-col gap-2' onSubmit={(event) => {event.preventDefault();LoginUser(email.toLowerCase(), password, users,setUser, setIsLogined)}}>
        <InputField title="Email" onChange={setEmail} type="email" />
        <PasswordField title="Password" onChange={setPassword} />
        <button type="submit" className='w-full'>
          <ButtonPrimary> Login</ButtonPrimary>
        </button>
      </form>
    </section>
  )
}

export default Login