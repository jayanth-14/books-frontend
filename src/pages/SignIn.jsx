import React, { useContext, useEffect, useState } from 'react';
import InputField from '../components/form/InputField';
import PasswordField from '../components/form/PasswordField';
import FormNav from '../components/form/FormNav';
import ButtonPrimary from '../components/buttons/buttonPrimary';
import addUser from '../functionalities/addUser';
import { Context } from '../data/states';
import { useNavigate } from 'react-router';

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(false);
  const { setAlert } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    setIsPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSignUp = (event) => {
    event.preventDefault();
    addUser(name, email, password, phone, address, setAlert, navigate);
  };

  return (
    <section className="mx-auto w-96 border border-gray-300 rounded-lg p-6 flex flex-col gap-4 mt-10 bg-white shadow-xl">
      <FormNav />
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <InputField title="Full Name" type="text" onChange={setName} />
        <InputField title="Email" type="email" onChange={setEmail} />
        <InputField title="Phone" type="number" onChange={setPhone} />
        <InputField title="Address" type="text" onChange={setAddress} />
        <PasswordField title="Password" onChange={setPassword} />
        <PasswordField title="Confirm Password" onChange={setConfirmPassword} />
        {!isPasswordsMatch && <p className="text-red-700 text-sm">Passwords do not match</p>}
        <ButtonPrimary className="w-full py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md transition transform hover:scale-105 hover:bg-blue-600">
          Sign In
        </ButtonPrimary>
      </form>
    </section>
  );
}

export default SignIn;