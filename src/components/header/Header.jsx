import Navbar from "./Navbar"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../data/states"
import UserButtons from "./UserButtons"
import ProfileAvatar from "./ProfileAvatar"
import useGet from "../../hooks/useGet"
import { Link } from "react-router"

function Logo() {
  return (
    <div className="">
      <p className="text-3xl text-blueThree font-bold cursor-pointer">ReBook</p>
    </div>
  )
}


function Header() {
  const { isLogined, setIsLogined, setUser } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false)
  const url = import.meta.env.VITE_BACKEND + "islogined";
  useEffect(() => {
    const checkIfLogined = async () => {
      const data = await useGet(url);
      if (data.isLogined) {
        setIsLogined(true);
        setUser(data.user);
        
      }

    }
    checkIfLogined();
  }, [])
  return (
    <header className="bg-white sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>
          <div className="md:flex md:items-center md:gap-12 flex gap-2 items-center">

            {isLogined ?
              <>
                <Navbar />
                <ProfileAvatar />
              </>
              :
              <UserButtons />
            }

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            {/* {mobileMenu} */}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header