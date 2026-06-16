import CustomCursor from './components/CustomCursor'
import MatrixBackground from './components/MatrixBackground'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen">
      <CustomCursor />
      <MatrixBackground />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
