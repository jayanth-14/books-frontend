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
    if (isLogined === true) {
      navigate("/");
    }
  }, [isLogined]);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captchaValue = "";
    for (let i = 0; i < 6; i++) {
      captchaValue += characters[Math.floor(Math.random() * characters.length)];
    }
    setCaptcha(captchaValue);
  };

  const renderCaptcha = () => {
    return (
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          fontFamily: "monospace",
          color: "#000",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "5px",
          display: "inline-block",
          transform: "rotate(-2deg)",
          letterSpacing: "5px", 
          textShadow: "2px 2px 2px rgba(0,0,0,0.2)",
        }}
      >
        {captcha.split("").map((char, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${Math.random() * 10 - 5}deg)`,
              display: "inline-block",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    );
  };

  const handleRefreshCaptcha = () => {
    generateCaptcha();
  };

  const submitLogin = (event) => {
    event.preventDefault();
    if (userCaptchaInput !== captcha) {
      alert("Invalid CAPTCHA. Please try again.");
      generateCaptcha();
      return;
    }
    LoginUser(email.toLowerCase(), password, setUser, setIsLogined, setAlert);
  };

  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2 mt-10">
      <FormNav />
      <form className="flex flex-col gap-2" onSubmit={submitLogin}>
        <InputField title="Email" onChange={setEmail} type="email" />
        <PasswordField title="Password" onChange={setPassword} />
        <div className="captcha-container">
          <label>CAPTCHA</label>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {renderCaptcha()}
            <button type="button" onClick={handleRefreshCaptcha} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",}} title="Refresh CAPTCHA">
              <RefreshCcw size={20} />
            </button>
          </div>
          <CaptchaField title="Enter CAPTCHA" onChange={setUserCaptchaInput} type="text"/>
        </div>
        <button type="submit" className="w-full">
          <ButtonPrimary>Login</ButtonPrimary>
        </button>
      </form>
    </section>
  );
}

export default Login;