const projects = [
  {
    name: 'CURC 2026',
    description: 'Columbia University Research Conference website.',
    stack: ['Web Development'],
    href: 'https://www.columbiaconferencejgh.org/',
  },
  {
    name: 'Molecufind',
    description: 'AI-powered molecule search engine using LLMs for chemistry research.',
    stack: ['Python', 'LLM Integration', 'Flask'],
    href: 'https://github.com/tvytran/Molecufind',
  },
  {
    name: 'VSA Website',
    description: 'Full-stack site for 100+ students in the Vietnamese Student Association.',
    stack: ['Next.js', 'Supabase'],
    href: 'https://vsacolumbia.com',
  },
  {
    name: 'Interactive Plant Learning',
    description: 'Placement quiz with instant feedback for plant identification.',
    stack: ['React'],
    href: 'https://ui-design-plants.vercel.app/',
  },
  {
    name: 'Boing Boing Boba',
    description: 'Java OOP game with puzzle mechanics and boba-themed gameplay.',
    stack: ['Java'],
    href: 'https://github.com/tvytran/BobaRunGame',
  },
  {
    name: 'Text-Based Escape Room',
    description: 'Interactive text-based escape room game with OOP puzzle mechanics.',
    stack: ['Java'],
    href: 'https://github.com/tvytran/BobaEscapeGame',
  },
  {
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
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-5 first:pt-0"
            >
              <div>
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-ink/60 text-sm mt-1">{project.description}</p>
                <p className="text-xs text-ink/40 mt-2">{project.stack.join(' · ')}</p>
              </div>
              <span className="text-accent text-sm whitespace-nowrap">View →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
