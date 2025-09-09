
import './App.css'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import Aside from './components/Aside/Aside'
import Nav from './components/Nav/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});
  return (
    <div className='layout'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      <Nav />
      <Footer />
      <Aside />
    </div>
  )
}

export default App
