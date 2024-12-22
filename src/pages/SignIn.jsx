import React, { useContext, useEffect, useState } from 'react'
import InputField from '../components/form/InputField'
import PasswordField from '../components/form/PasswordField'
import FormNav from '../components/form/FormNav'
import ButtonPrimary from '../components/buttons/buttonPrimary'
import addUser from '../functionalities/addUser'
import {Context} from '../data/states'


function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(false);
  const {setUsers, users} = useContext(Context);

  useEffect(() => {
    if (password === confirmPassword) {
      setIsPasswordsMatch(true);
      return;
    }
    setIsPasswordsMatch(false);
  }, [password, confirmPassword])
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2">
      <FormNav />
      <form onSubmit={(event) => {event.preventDefault(); addUser(name, email, password, users, setUsers);}}>
        <InputField title="Full Name" type="text" onChange={setName} />
        <InputField title="Email" type="email" onChange={setEmail} />
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