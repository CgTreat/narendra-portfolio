import './App.css'
import SmoothScroll from './components/SmoothScroll'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import Hero from './components/Hero'
import ProfileSection from './components/ProfileSection'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <SmoothScroll />
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <ProfileSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App