import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { useNavigate } from 'react-router';

function ProfileCompletionAlert ( ) {
  <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
  <div className="flex items-start gap-4">
      <FaArrowCircleRight className="text-green-600"/>

    <div className="flex-1">
      <strong className="block font-medium text-gray-900"> Changes saved </strong>

      <p className="mt-1 text-sm text-gray-700">Your product changes have been saved.</p>
    </div>

    <button className="text-gray-500 transition hover:text-gray-600">
      <span className="sr-only">Dismiss popup</span>

     <FaXmark />
    </button>
  </div>
</div>
}

function ProfileForm() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [phone,setPhone] = useState("");
  const [occupation,setOccupation] = useState("");
  const [address,setAddress] = useState("");
  const [city,setCity] = useState("");
  const [state,setState] = useState("");
  const [country,setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const profileData = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    occupation: occupation,
  };

  const locationDetails = {
    address: address,
    city: city,
    state: state,
    country: country,
    pin: pin
  }

  const navigate = useNavigate();

  const handleProfileSubmission = async (event) => {
    event.preventDefault();
    try {
      
      const response = await fetch('http://localhost:3000/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({profileData, locationDetails}),
      });
      const data = await response.json();
      if (data.status === "success") {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          navigate("/")''
        }, 3000);
      }

    } catch (error) {
      console.log(error);
    }
   
  }
  return (
    <section className="login m-auto w-96 border-2 rounded-md p-4 flex flex-col gap-2 mt-10">
      {isSuccess && <ProfileCompletionAlert/>}
      <FormNav />
      <form className='flex flex-col gap-2 divide-y-2' onSubmit={(event) => {event.preventDefault();LoginUser(email.toLowerCase(), password, users,setUser, setIsLogined)}}>
        <div>
        <h1 className="text-lg text-blueThree font-semiBold">Profile Completion</h1>
        <InputField title="First Name" onChange={setFirstName} type="text" />
        <InputField title="Last Name" onChange={setLastName} type="text" />
        <InputField title="Phone" onChange={setPhone} type="number" />
        <InputField title="Occupation" onChange={setOccupation} type="text" />
        </div>
        <div>
        <h1 className="text-lg text-blueThree font-semiBold">Location Details</h1>
        <InputField title="Address Line 1" onChange={setAddress} type="text" />
        <InputField title="City" onChange={setCity} type="text" />
        <InputField title="State" onChange={setState} type="text" />
        <InputField title="Country" onChange={setCountry} type="text" />
        <InputField title="pincode" onChange={setPin} type="text" />
        </div>
        <button type="submit" className='w-full'>
          <ButtonPrimary> Login</ButtonPrimary>
        </button>
      </form>
    </section>
  )
}

export default ProfileForm