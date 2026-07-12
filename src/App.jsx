import { useState } from 'react'
import { Home, Sparkles, Briefcase, Mail, ArrowLeft, ArrowRight, RotateCw, Cloud } from 'lucide-react'
import HomeTab from './components/tabs/HomeTab'
import ProjectsTab from './components/tabs/ProjectsTab'
import ExperienceTab from './components/tabs/ExperienceTab'
import ContactTab from './components/tabs/ContactTab'

const tabs = [
  { id: 'home', label: 'home', Icon: Home, Panel: HomeTab },
  { id: 'projects', label: 'projects', Icon: Sparkles, Panel: ProjectsTab },
  { id: 'experience', label: 'experience', Icon: Briefcase, Panel: ExperienceTab },
  { id: 'contact', label: 'contact', Icon: Mail, Panel: ContactTab },
]

function ToolbarButton({ Icon, onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-8 h-8 rounded-full border-2 border-peri/50 text-peri flex items-center justify-center hover:bg-peri-pale transition-colors shrink-0"
    >
      <Icon size={14} strokeWidth={2.5} />
    </button>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const [history, setHistory] = useState(['home'])
  const [historyIndex, setHistoryIndex] = useState(0)

  const goTo = (id) => {
    if (id === active) return
    const newHistory = [...history.slice(0, historyIndex + 1), id]
    setHistory(newHistory)
    setHistoryIndex(newHistory.length - 1)
    setActive(id)
  }

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1)
      setActive(history[historyIndex - 1])
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1)
      setActive(history[historyIndex + 1])
    }
  }

  const ActivePanel = tabs.find((t) => t.id === active).Panel

  return (
    <div className="min-h-screen bg-page font-round flex flex-col items-center px-4 py-8 md:py-14">
      <div className="w-full max-w-3xl">
        {/* folder tabs */}
        <div className="flex gap-1.5 px-3 overflow-x-auto">
          {tabs.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-5 rounded-t-xl border-2 border-b-0 text-sm font-semibold transition-colors whitespace-nowrap ${
                active === id
                  ? 'bg-panel border-peri/50 text-peri-deep'
                  : 'bg-peri-pale/60 border-peri/30 text-peri/70 hover:text-peri-deep hover:bg-peri-pale'
              }`}
            >
              <Icon size={15} strokeWidth={2.5} />
              {label}
            </button>
          ))}
        </div>

        {/* window */}
        <div className="bg-panel border-2 border-peri/50 rounded-2xl rounded-tl-none overflow-hidden">
          {/* toolbar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b-2 border-peri/30">
            <ToolbarButton Icon={ArrowLeft} onClick={goBack} label="back" />
            <ToolbarButton Icon={ArrowRight} onClick={goForward} label="forward" />
            <ToolbarButton Icon={RotateCw} onClick={() => {}} label="refresh" />
            <ToolbarButton Icon={Home} onClick={() => goTo('home')} label="home" />
            <div className="flex-1 flex items-center gap-2 border-2 border-peri/40 rounded-full px-4 py-1.5 ml-1 min-w-0">
              <Cloud size={14} className="text-peri shrink-0" strokeWidth={2.5} />
              <span className="text-sm text-peri truncate ml-auto">tvytran.github.io/{active === 'home' ? '' : active}</span>
            </div>
          </div>

          {/* content */}
          <div className="p-6 md:p-10">
            <ActivePanel goTo={goTo} />
          </div>
        </div>

        <p className="text-center text-xs text-peri-deep/70 mt-6 font-medium">
          © 2026 thuy-vy tran · made with ♡
        </p>
      </div>
    </div>
  )
}
