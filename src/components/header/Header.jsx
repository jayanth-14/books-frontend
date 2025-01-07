import { FaFacebook, FaInstagram, FaShoppingCart, FaTwitter, FaYoutube } from "react-icons/fa"
import Navbar from "./Navbar"
import { useContext } from "react"
import { Context } from "../../data/states"
import UserButtons from "./UserButtons"
import { Link } from "react-router"

function Logo() {
  return (
    <div className="">
      <p className="text-3xl text-blueThree font-bold cursor-pointer">ReBook</p>
    </div>
  )
}

function ShoppingCart() {
  return (
    <Link to={"/cart"}>
    <div className="group px-12 py-2 border-2 hover:border-blueTwo cursor-pointer">
      <FaShoppingCart className="text-2xl group-hover:text-blueTwo" />
    </div>
    </Link>
  )
}

function SocialImages() {
  return (
    <div className="flex flex-row gap-2">
      <FaFacebook className="cursor-pointer text-xl hover:text-blueThree"/>
      <FaInstagram className="cursor-pointer text-xl hover:text-blueThree"/>
      <FaTwitter className="cursor-pointer text-xl hover:text-blueThree"/>
      <FaYoutube className="cursor-pointer text-xl hover:text-blueThree"/>
    </div>
  )
}


function Header() {
  const {isLogined} = useContext(Context)
  return (
    <header className='flex flex-col w-full  h-32 sticky z-50 shadow-lg top-0 right-0 left-0 bg-white '>
      <div className="main container flex flex-row w-full px-5 py-2 items-center justify-between bg-white ">
        <SocialImages />
        <Logo />
        {(isLogined) ? <ShoppingCart /> : <UserButtons />}
      </div>
      <Navbar />
    </header>
  )
}

export default Header