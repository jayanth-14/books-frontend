import { Route, Routes } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App 
