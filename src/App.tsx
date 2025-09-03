
import './App.css'
import 'lenis/dist/lenis.css'
import Lenis from 'lenis'
import Aside from './components/Aside/Aside'
import Bento from './components/Bento/Bento'
import HeroHeader from './components/HeroHeader/HeroHeader'
import Nav from './components/Nav/Nav'
import Recent from './components/Recent/Recent'
import Marquee from './components/Marquee/Marquee'
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
      <HeroHeader />
      <Bento />
      <Marquee />
      <Recent />
      <Footer />
      <Aside />
      <Nav />
    </div>
  )
}

export default App
