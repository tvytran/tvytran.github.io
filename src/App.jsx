import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-paper min-h-screen text-ink">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
