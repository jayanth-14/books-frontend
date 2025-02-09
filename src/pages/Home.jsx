import React, { useContext } from "react";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import { Context } from "../data/states";
import { Link } from "react-router";

const Home = () => {
  const { isLogined } = useContext(Context);
  return (
    <div
      className="h-screen px-32 flex flex-row items-center justify-between text-white bg-cover bg-center"
      style={{ backgroundImage: "url('./public/hero.png')" }}
    >
      <div className="flex flex-col ">
        <h1 className="text-4xl font-bold">
          Welcome to{" "}
          <span className="text-8xl font-bold uppercase block">Rebook</span>
        </h1>
        <p className="text-lg mt-2">
          Find, Explore, and Read—Books You Need at{" "}
          <span className="text-2xl block font-semibold">Lightning Speed</span>
          <span className="text-2xl font-semibold block">
            At Your Price
          </span>{" "}
          <span className="text-2xl font-semibold"> Near You</span>
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
