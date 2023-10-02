import './App.css'
import About from './components/About'
import Certificats from './components/Certificats'
import HeroSection from './components/HeroSection'
import SkillsEducation from './components/SkillsEducation/SkillsEducation'
import Social from './components/Social'

function App() {
  
  return (
    <>
      <Social />
      <HeroSection />
      <About />
      <SkillsEducation />
      <Certificats />
    </>
  )
}

export default App
