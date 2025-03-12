import React, { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router";
import InputField from "../components/form/InputField";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import PasswordField from "../components/form/PasswordField";
import updateUser from "../functionalities/updateUser";
import { Context } from "../data/states";
import { FaArrowCircleRight } from "react-icons/fa";

function ProfileCompletionAlert() {
  <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
    <div className="flex items-start gap-4">
      <FaArrowCircleRight className="text-green-600" />

      <div className="flex-1">
        <strong className="block font-medium text-gray-900">
          {" "}
          Changes saved{" "}
        </strong>

        <p className="mt-1 text-sm text-gray-700">
          Your product changes have been saved.
        </p>
      </div>

      <button className="text-gray-500 transition hover:text-gray-600">
        <span className="sr-only">Dismiss popup</span>

        <FaXmark />
      </button>
    </div>
  </div>;
}

function ProfileForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);
  const navigate = useNavigate();
  

  const handleProfileSubmission = async (event) => {
    event.preventDefault();
    try{
      const data = await updateUser(fullName, phone, password, address);
      if (data.status === "success") {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2 mt-10">
      {isSuccess && <ProfileCompletionAlert />}
      <form
        className="flex flex-col gap-2 divide-y-2"
        onSubmit={handleProfileSubmission}>
        <div>
          <h1 className="text-lg text-blueThree font-bold">
            Profile Updation
          </h1>
          <InputField required="false" title="New Full Name" onChange={setFullName} type="text" />
          <InputField required="false" title="New Phone" onChange={setPhone} type="number" />
          <PasswordField required="false" title="New Password" onChange={setPassword}/>
          <InputField required="false"
            title="Address Line 1"
            onChange={setAddress}
            type="text"
          />
        </div>

        <button type="submit" className="w-full">
          <ButtonPrimary>Update Profile</ButtonPrimary>
        </button>
      </form>
    </section>
  );
}

export default ProfileForm;
