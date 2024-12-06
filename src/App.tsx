
import Header from './components/Header';
import Hero from './components/Hero';
import Modelos from './components/Modelos';
import './index.css'


function App() {

  return (
    <>
      <Header />
      <Hero />
      <Modelos />
      <img src="./whatsapp.png" className='fixed cursor-pointer z-50 w-20 bottom-10 right-5'/>
    </>
  )
}

export default App;