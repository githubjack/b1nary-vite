
import './App.css'
import Aside from './components/Aside/Aside'
import Bento from './components/Bento/Bento'
import HeroHeader from './components/HeroHeader/HeroHeader'
import Nav from './components/Nav/Nav'
function App() {

  return (
    <div className='layout'>
      <HeroHeader />
      <Bento />
      <Aside />
      <Nav />
    </div>
  )
}

export default App
