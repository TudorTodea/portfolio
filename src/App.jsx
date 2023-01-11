import './App.css'
import Appbar from './Components/Navbar/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
function App() {


  return (
    <div className="App">
     <Appbar/>
     <Hero/>
     <Skills/>
    </div>
  )
}

export default App
