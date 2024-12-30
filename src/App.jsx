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

function App() {

  return (
    <>
      <StatesProvider>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/book/:id" element={<Book />}></Route>
        </Routes>
        <Footer />
      </StatesProvider>
    </>
  )
}

export default App 
