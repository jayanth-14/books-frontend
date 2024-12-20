import { useState } from 'react'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function Agree(params) {

  return (
    <Header />
  )
}

function App() {
  console.log("app reload");
  
  return (
    <>
    <Header></Header>
    <Hero />
    </>
  )
}

export default App 
