import { Route, Routes } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import StatesProvider from './data/states';
import Profile from './pages/Profile';
import Book from './pages/Book';
import Cart from './components/profile/Cart';
import Search from './components/search/Search';
import Explore from './pages/Explore';
import AlertContainer from './components/alerts/Alert';
function App() {

  return (
    <>
    <div className='min-h-screen flex flex-col'>
      <StatesProvider>
        <Header></Header>
        <AlertContainer></AlertContainer>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/book/:id" element={<Book />}></Route>
        </Routes>
        <Footer />
      </StatesProvider>
    </div>
    </>
  )
}

export default App 
