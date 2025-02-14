import React, { useContext } from "react";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import { Context } from "../data/states";
import { Link } from "react-router";

const Home = () => {
  const { isLogined } = useContext(Context);
  return (
    <div
    className="h-screen px-32 flex flex-row items-center gap-10 justify-between bg-cover bg-center"
    >
    <img src="./public/relaxed_reading.svg" alt=""  className="w-fit h-[500px]"/>
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold text-[#0a0a0a]">
          Welcome to{" "}
          <span className="text-9xl font-bold uppercase block text-[#2563eb]">Rebook</span>
        </h1>
        <p className="text-lg mt-2 text-[#1e1e1f]">
          Find, Explore, and Read—Books You Need at{" "}
          <span className="text-2xl text-[#0a0a0a] block font-semibold">Lightning Speed</span>
          <span className="text-2xl text-[#0a0a0a] font-semibold block">
            At Your Price
          </span>{" "}
          <span className="text-2xl text-[#0a0a0a] font-semibold"> Near You</span>
        </p>
        {!isLogined ? (
          <Link to={"/login"}>
          <ButtonPrimary className="mt-8 py-2 text-xl hover:bg-white hover:text-blue-600">
            Get Started
          </ButtonPrimary>
          </Link>
        ) : (
          <Link to={"/explore"}>
            <ButtonPrimary className="mt-8 py-2 text-xl hover:bg-white hover:text-blue-600">
              Explore Books Near You !
            </ButtonPrimary>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Home;
