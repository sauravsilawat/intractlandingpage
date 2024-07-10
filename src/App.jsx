import './App.css'
import Header from './section/Header'
import Hero from './section/Hero'
import Bottom from './section/Bottom'
import StickyButton from './component/StickyButton'
import Seperator from './component/Seperator'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <div className='bg-[#080808]'>
        <Header />
        <Hero />
        <Bottom />
        <div className='sticky bottom-10 z-50-'>
          <StickyButton />
        </div>
        <Seperator />
        <Footer />
      </div>
    </>
  )
}

export default App
