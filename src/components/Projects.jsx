import { BookOpen, FlaskConical, Users, Leaf, Gamepad2, KeyRound, ShieldCheck } from 'lucide-react'

const projects = [
  {
    Icon: BookOpen,
    name: 'CURC 2026',
    description: 'Columbia University Research Conference website.',
    stack: ['Web Development'],
    href: 'https://www.columbiaconferencejgh.org/',
  },
  {
    Icon: FlaskConical,
    name: 'Molecufind',
    description: 'AI-powered molecule search engine using LLMs for chemistry research.',
    stack: ['Python', 'LLM Integration', 'Flask'],
    href: 'https://github.com/tvytran/Molecufind',
  },
  {
    Icon: Users,
    name: 'VSA Website',
    description: 'Full-stack site for 100+ students in the Vietnamese Student Association.',
    stack: ['Next.js', 'Supabase'],
    href: 'https://vsacolumbia.com',
  },
  {
    Icon: Leaf,
    name: 'Interactive Plant Learning',
    description: 'Placement quiz with instant feedback for plant identification.',
    stack: ['React'],
    href: 'https://ui-design-plants.vercel.app/',
  },
  {
    Icon: Gamepad2,
    name: 'Boing Boing Boba',
    description: 'Java OOP game with puzzle mechanics and boba-themed gameplay.',
    stack: ['Java'],
    href: 'https://github.com/tvytran/BobaRunGame',
  },
  {
    Icon: KeyRound,
    name: 'Text-Based Escape Room',
    description: 'Interactive text-based escape room game with OOP puzzle mechanics.',
    stack: ['Java'],
    href: 'https://github.com/tvytran/BobaEscapeGame',
  },
  {
    Icon: ShieldCheck,
    name: 'Privacy Method Finder',
    description: 'Decision tree tool to find the best privacy method to protect data.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://privacy-app-mu.vercel.app/',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12">
          Projects
        </h2>

        <div className="divide-y divide-ink/10">
          {projects.map((project) => {
            const { Icon } = project
            return (
              <a
                key={project.name}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 py-5 first:pt-0"
              >
                <span className="mt-0.5 text-ink/30 group-hover:text-accent transition-colors shrink-0">
                  <Icon size={18} strokeWidth={1.5} />
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-ink/60 text-sm mt-1">{project.description}</p>
                  <p className="text-xs text-ink/40 mt-1">{project.stack.join(' · ')}</p>
                </div>
                <span className="text-accent text-sm whitespace-nowrap mt-0.5">→</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
