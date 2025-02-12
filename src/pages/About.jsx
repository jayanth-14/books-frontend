import React, { useContext } from "react";
import ButtonPrimary from "../components/buttons/buttonPrimary";
import { Context } from "../data/states";
import { Link } from "react-router";

const Home = () => {
  const { isLogined } = useContext(Context);
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero bg-blue-50 py-32 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-blue-800 mb-6">
            Give Old Books a New Life
          </h1>
          <p className="text-2xl text-blue-600 mb-8">
            Join us in saving the environment by buying and selling pre-loved books.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/signin"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold border border-blue-600 hover:bg-blue-50 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            We are on a mission to reduce paper waste and promote sustainability by giving old books a second chance. Every book you buy or sell helps save trees and protect the environment.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="step text-center">
              <div className="text-6xl text-blue-600 mb-4">1</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Browse or List Books
              </h3>
              <p className="text-lg text-blue-600">
                Explore our collection of pre-loved books or list your own for sale.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step text-center">
              <div className="text-6xl text-blue-600 mb-4">2</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Buy or Sell
              </h3>
              <p className="text-lg text-blue-600">
                Purchase books at affordable prices or earn money by selling yours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step text-center">
              <div className="text-6xl text-blue-600 mb-4">3</div>
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                Save the Environment
              </h3>
              <p className="text-lg text-blue-600">
                Feel good knowing you're reducing waste and helping the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta bg-blue-800 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community today and start buying or selling old books to help save the environment.
          </p>
          <Link
            to="/signin"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>

  );
};

export default Home;
