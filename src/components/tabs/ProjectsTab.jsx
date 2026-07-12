import { ExternalLink } from 'lucide-react'
import { projects } from '../../data'

export default function ProjectsTab() {
  return (
    <div>
      <h1 className="text-peri-deep font-bold text-2xl mb-2">projects</h1>
      <p className="text-peri-text text-sm mb-6">things i've built — click one to visit ( ˶ˆᗜˆ˵ )</p>

      <div className="border-2 border-peri/50 rounded-xl overflow-hidden">
        {projects.map(({ Icon, name, description, stack, href }, i) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center gap-4 px-4 md:px-5 py-3.5 hover:bg-peri-pale transition-colors ${
              i > 0 ? 'border-t-2 border-peri/20' : ''
            }`}
          >
            <span className="text-peri shrink-0">
              <Icon size={18} strokeWidth={2.2} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-bold text-peri-deep text-sm">{name}</span>
              <span className="block text-sm text-peri-text mt-0.5">{description}</span>
              <span className="block text-xs text-peri/70 font-semibold mt-1">
                {stack.join(' · ')}
              </span>
            </span>
            <ExternalLink
              size={15}
              strokeWidth={2.5}
              className="text-peri/50 group-hover:text-peri-deep transition-colors shrink-0"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
