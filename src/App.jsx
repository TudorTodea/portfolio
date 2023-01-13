import './App.css'
import Appbar from './Components/Navbar/Appbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {


  return (
    <div className="App">
     <Appbar/>
     <Hero/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App
