import { Route, Routes } from 'react-router';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
    </>
  )
}

export default App 
