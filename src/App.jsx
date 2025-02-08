import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import StatesProvider from "./data/states";
import Profile from "./pages/Profile";
import Book from "./pages/Book";
import Cart from "./components/profile/Cart";
import Search from "./components/search/Search";
import Explore from "./pages/Explore";
import AlertContainer from "./components/alerts/Alert";
import Addbook from "./components/form/Books/Addbook";
import WishList from "./pages/WishList";
import CheckoutPage from "./pages/Checkout";
import Order from "./pages/Order";
import Mylist from "./pages/MyList";
import DashBoard from "./pages/Dashboard";
import SellerDetails from "./components/seller/Cards/SellerDetails";
import Transactions from "./components/seller/transactions/Transactions";

function App() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const retryConnection = () => {
    setIsOffline(!navigator.onLine);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StatesProvider>
        <Header />
        <AlertContainer />

        {isOffline && (
          <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center py-3 z-50">
            <p>You are offline. Please check your network connection.</p>
            <button
              onClick={retryConnection}
              className="mt-2 bg-white text-red-500 px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
              Retry
            </button>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mybooks" element={<Mylist />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/addbook" element={<Addbook />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/dashboard" element={<DashBoard />}>
          <Route path="transactions" element={<Transactions />} />
            <Route path="details" element={<SellerDetails />} />
            <Route path="mybooks" element={<Mylist />} />
            <Route path="addbook" element={<Addbook />} />
          </Route>
        </Routes>

        <Footer />
      </StatesProvider>
    </div>
  );
}

export default App;
