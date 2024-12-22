import React from 'react'
import InputField from '../components/form/InputField'
import PasswordField from '../components/form/PasswordField'
import FormNav from '../components/form/FormNav'
import ButtonPrimary from '../components/buttons/buttonPrimary'

function SignIn() {
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2">
    <FormNav />
    <InputField title="Full Name"/>
    <InputField title="Email"/>
    <PasswordField title="Password"/>
    <PasswordField title="Confirm Password"/>
    <ButtonPrimary text="SignIn" />
  </section>
  )
}

export default SignIn