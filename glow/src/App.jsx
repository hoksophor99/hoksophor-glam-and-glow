import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../src/components/Layout_pages/Navbar'
import Home from '../src/components/Main_pages/Home'
import Product from './components/Main_pages/Product'
import About from './components/Main_pages/About'
import Shop from './components/Main_pages/Shop'
import Blog from './components/Main_pages/Blog'
import Footer from './components/Layout_pages/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <section id="home"><Home/></section>
    <section id="product"><Product/></section>
    <section id="about"><About/></section>
    <section id="shop"><Shop/></section>
    <section id="blog"><Blog/></section>
    <section id="footer"><Footer/></section>
    </>
  )
}

export default App
