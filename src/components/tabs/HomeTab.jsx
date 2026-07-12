import { Link, Code2, Mail, ExternalLink } from 'lucide-react'
import profile from '../../assets/profile.png'

const currently = [
  'studying cs + econ @ columbia',
  'building healthcare AI things',
  'making websites for friends',
  'drinking too much boba',
]

const iconFor = { linkedin: Link, github: Code2, email: Mail }

export default function HomeTab({ goTo }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      {/* photo */}
      <div className="flex justify-center md:block shrink-0">
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full border-4 border-peri-soft overflow-hidden bg-peri-pale">
          <img src={profile} alt="Thuy-Vy Tran" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* about */}
      <div className="flex-1 min-w-0">
        <h1 className="text-peri-deep font-bold text-2xl mb-3">about me</h1>
        <p className="text-peri-text leading-relaxed mb-3">
          hi, i'm vy! i'm a cs + econ student at columbia who likes building
          friendly, useful software — from healthcare AI pipelines to little
          websites for the clubs i love.
        </p>
        <p className="text-sm text-peri font-semibold mb-5">
          she/her · columbia '27 · nyc
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="mailto:tvytran2@gmail.com"
            className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-peri/50 text-peri-deep text-sm font-semibold hover:bg-peri-pale transition-colors"
          >
            <ExternalLink size={14} strokeWidth={2.5} />
            email me
          </a>
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
            { label: 'email', href: 'mailto:tvytran2@gmail.com' },
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
