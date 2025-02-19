import React, { useState, useEffect, useContext } from 'react';
import InputField from '../components/form/InputField';
import PasswordField from '../components/form/PasswordField';
import FormNav from '../components/form/FormNav';
import CaptchaField from '../components/form/CaptchaField';
import ButtonPrimary from '../components/buttons/buttonPrimary';
import { useNavigate } from 'react-router';
import { Context } from '../data/states';
import LoginUser from '../functionalities/loginUser';
import { RefreshCcw } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [userCaptchaInput, setUserCaptchaInput] = useState("");
  const { setUser, isLogined, setIsLogined, setAlert } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogined) {
      navigate("/");
    }
  }, [isLogined, navigate]);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaValue = Array.from({ length: 6 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
    setCaptcha(captchaValue);
  };

  const renderCaptcha = () => (
    <div aria-selected="false" className="text-2xl font-bold font-mono text-gray-800 bg-gray-100 p-3 rounded-md inline-block tracking-widest shadow-md">
      {captcha.split("").map((char, index) => (
        <span key={index}  className="inline-block select-none transform rotate-[${Math.random() * 10 - 5}deg]">
          {char}
        </span>
      ))}
    </div>
  );

  const handleRefreshCaptcha = () => {
    generateCaptcha();
  };

  const submitLogin = (event) => {
    event.preventDefault();
    if (userCaptchaInput !== captcha) {
      setAlert({ type: "error", message: "Invalid CAPTCHA. Please try again." });
      generateCaptcha();
      return;
    }
    LoginUser(email.toLowerCase(), password, setUser, setIsLogined, setAlert);
  };

  return (
    <section className="login mx-auto w-96 border border-gray-300 rounded-lg p-6 flex flex-col gap-4 mt-10 bg-white shadow-xl">
      <FormNav />
      <form className="flex flex-col gap-4" onSubmit={submitLogin}>
        <InputField title="Email" onChange={setEmail} type="email" />
        <PasswordField title="Password" onChange={setPassword} />
        <div className="flex flex-col gap-2">
          <label className="font-semibold text-gray-700">CAPTCHA</label>
          <div className="flex items-center gap-3">
            {renderCaptcha()}
            <button type="button" onClick={handleRefreshCaptcha} className="p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition" title="Refresh CAPTCHA">
              <RefreshCcw size={20} />
            </button>
          </div>
          <CaptchaField title="Enter CAPTCHA" onChange={setUserCaptchaInput} type="text"/>
        </div>
        <ButtonPrimary className="w-full py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg shadow-md transition transform hover:scale-105 hover:bg-blue-600">
          Login
        </ButtonPrimary>
      </form>
    </section>
  );
}

export default Login;
