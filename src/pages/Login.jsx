import React from 'react'
import InputField from '../components/form/InputField'
import PasswordField from '../components/form/PasswordField'
import FormNav from '../components/form/FormNav'
import ButtonPrimary from '../components/buttons/buttonPrimary'

function Login() {
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2">
      <FormNav />
      <InputField title="Email"/>
      <PasswordField title="Password"/>
      <ButtonPrimary text="Login" />
    </section>
  )
}

export default Login