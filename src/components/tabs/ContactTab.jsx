import { Link, Code2, Mail } from 'lucide-react'
import { socials } from '../../data'

const iconFor = { linkedin: Link, github: Code2, email: Mail }

export default function ContactTab() {
  return (
    <div className="max-w-md mx-auto text-center py-6">
      <h1 className="text-peri-deep font-bold text-2xl mb-3">say hi (˶ᵔ ᗜ ᵔ˶)</h1>
      <p className="text-peri-text mb-2">
        feel free to reach out — always happy to connect!
      </p>
      <p className="text-peri-deep font-bold text-sm mb-8">tvytran2@gmail.com</p>

      <div className="border-2 border-peri/50 rounded-xl overflow-hidden text-left">
        {socials.map(({ label, href }, i) => {
          const Icon = iconFor[label]
          return (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={`flex items-center gap-3 px-5 py-3.5 text-sm font-bold text-peri-deep hover:bg-peri-pale transition-colors ${
                i > 0 ? 'border-t-2 border-peri/20' : ''
              }`}
            >
              <Icon size={16} strokeWidth={2.4} className="text-peri" />
              {label}
              <span className="ml-auto text-peri/60">↗</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
