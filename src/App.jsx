import { Route, Routes } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Login from './pages/login';
import SignIn from './pages/SignIn';

function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App 
