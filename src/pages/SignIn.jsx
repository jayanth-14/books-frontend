import React, { useContext, useEffect, useState } from 'react'
import InputField from '../components/form/InputField'
import PasswordField from '../components/form/PasswordField'
import FormNav from '../components/form/FormNav'
import ButtonPrimary from '../components/buttons/buttonPrimary'
import addUser from '../functionalities/addUser'
import { Context } from '../data/states'
import {useNavigate} from 'react-router'


function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(false);
  const { alert, setAlert } = useContext(Context);

  const navigate = useNavigate();
  useEffect(() => {
    if (password === confirmPassword) {
      setIsPasswordsMatch(true);
      return;
    }
    setIsPasswordsMatch(false);
  }, [password, confirmPassword])

  const handleSignUp = (event) => {
    event.preventDefault();
    addUser(name, email, password, phone, address, setAlert, navigate);
  };
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2">
      <FormNav />
      <form onSubmit={(event) => { handleSignUp(event) }} className='flex flex-col gap-2'>
        <InputField title="Full Name" type="text" onChange={setName} />
        <InputField title="Email" type="email" onChange={setEmail} />
        <InputField title="Phone" type="number" onChange={setPhone} />
        <InputField title="Address" type="text" onChange={setAddress} />
        <PasswordField title="Password" onChange={setPassword} />
        <PasswordField title="Confirm Password" onChange={setConfirmPassword} />
        {
          !isPasswordsMatch && <p className='text-red-700'>Passwords do not match</p>
        }
        <button type="submit" className='w-full'>
          <ButtonPrimary> Signin</ButtonPrimary>
        </button>
      </form>
    </section>
  )
}

export default SignIn