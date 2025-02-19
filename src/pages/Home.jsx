import React, { useContext } from "react";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import { Context } from "../data/states";
import { Link } from "react-router";

const Home = () => {
  const { isLogined } = useContext(Context);
  return (
    <div className="h-screen px-10 md:px-32 flex flex-col md:flex-row items-center gap-10 justify-center md:justify-between bg-cover bg-center bg-gray-100">
      <img src="./public/relaxed_reading.svg" alt="Reading" className="w-full md:w-[450px] lg:w-[500px] h-auto drop-shadow-lg" />
      <div className="flex flex-col text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Welcome to 
          <span className="text-6xl md:text-8xl font-black uppercase block text-blue-600">Rebook</span>
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-700 leading-relaxed">
          Find, Explore, and Read—Books You Need at
          <span className="text-2xl text-gray-900 block font-semibold">Lightning Speed</span>
          <span className="text-2xl text-gray-900 font-semibold block">At Your Price</span>
          <span className="text-2xl text-gray-900 font-semibold"> Near You</span>
        </p>
        {!isLogined ? (
          <Link to="/login">
            <ButtonPrimary className="mt-8 py-3 px-6 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-700">
              Get Started
            </ButtonPrimary>
          </Link>
        ) : (
          <Link to="/explore">
            <ButtonPrimary className="mt-8 py-3 px-6 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-green-700">
              Explore Books Near You!
            </ButtonPrimary>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
