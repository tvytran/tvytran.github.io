import { useState } from 'react'
import { Link, Code2, Mail, Copy, Check } from 'lucide-react'
import profile from '../../assets/profile.png'

const EMAIL = 'tvytran2@gmail.com'

const currently = [
  'studying cs + econ @ columbia',
  'building healthcare AI things',
  'making websites for friends',
  'drinking too much heytea',
]

const loves = ['minecraft ⛏', 'makeup ♡', 'nails 💅', 'matcha 🍵']

const iconFor = { linkedin: Link, github: Code2, email: Mail }

export default function HomeTab({ goTo }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      {/* photo */}
      <div className="flex justify-center md:block shrink-0">
        <div className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-peri-soft overflow-hidden bg-peri-pale">
          <img src={profile} alt="Thuy-Vy Tran" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* about */}
      <div className="flex-1 min-w-0">
        <h1 className="text-peri-deep font-bold text-2xl mb-3">about me</h1>
        <p className="text-peri-text leading-relaxed mb-3">
          hi, i'm thuy-vy! i'm a cs + econ student at columbia who likes building
          friendly, useful software — from healthcare AI pipelines to little
          websites for the clubs i love.
        </p>
        <p className="text-peri-text leading-relaxed mb-4">
          outside of code, you'll usually find me mining away in minecraft,
          doing my makeup, getting my nails done, or perfecting my
          (still questionable) homemade matcha — a very recent obsession.
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-sm font-bold text-peri-deep">things i love:</span>
          {loves.map((item) => (
            <span
              key={item}
              className="text-xs font-semibold px-3 py-1 rounded-full border-2 border-peri/40 text-peri-text"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-sm text-peri font-semibold mb-5">
          she/her · columbia '27 · nyc
        </p>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-peri/50 text-peri-deep text-sm font-semibold hover:bg-peri-pale transition-colors"
          >
            {copied ? <Check size={14} strokeWidth={2.5} /> : <Copy size={14} strokeWidth={2.5} />}
            {copied ? 'copied!' : 'copy my email'}
          </button>
          <button
            onClick={() => goTo('projects')}
            className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-peri/50 text-peri-deep text-sm font-semibold hover:bg-peri-pale transition-colors"
          >
            see my work
          </button>
        </div>
      </div>

      {/* sidebar */}
      <div className="w-full md:w-52 shrink-0">
        <div className="border-2 border-peri/50 rounded-xl overflow-hidden">
          <div className="bg-peri text-white text-sm font-bold px-4 py-2.5">
            (˶ᵔ ᵕ ᵔ˶) currently
          </div>
          {currently.map((item) => (
            <div
              key={item}
              className="px-4 py-2.5 text-sm text-peri-text border-t-2 border-peri/20 font-medium"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-4">
          {[
            { label: 'linkedin', href: 'https://www.linkedin.com/in/thuy-vy-tran-876390288/' },
            { label: 'github', href: 'https://github.com/tvytran' },
            { label: 'email', href: `mailto:${EMAIL}` },
          ].map(({ label, href }) => {
            const Icon = iconFor[label]
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-peri hover:text-peri-deep transition-colors"
              >
                <Icon size={18} strokeWidth={2.2} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
