const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Cogent People Inc.',
    period: 'June 2026 – August 2026',
    location: 'Hybrid',
    bullets: [
      'Developing AI-powered healthcare analytics features in Python/TypeScript across the full SDLC in agile.',
      'Implementing LLM and RAG-based pipelines in Python and SQL supporting federal healthcare data modernization.',
      'Researching and experimenting with AI frameworks including LangChain; contributing to debugging and performance improvements.',
    ],
    stack: ['Python', 'TypeScript', 'SQL', 'LLMs', 'RAG', 'Agile'],
  },
  {
    role: 'Frontend Developer',
    company: 'Crackd.ai (Humor Project)',
    period: 'December 2025 – Present',
    location: 'Remote',
    bullets: [
      'Built AI-powered image captioning with 5+ responsive UI components and real-time LLM caption generation.',
      'Automated content pipeline supporting 3+ weekly posts across 4+ social media channels with quality filtering.',
      'Refined LLM joke generation through 50+ prompt iterations to improve caption quality for Gen-Z audiences.',
    ],
    stack: ['React', 'TypeScript', 'LLM Integration', 'Next.js'],
  },
  {
    role: 'Systems Infrastructure Intern',
    company: 'Columbia University CS',
    period: 'May 2025 – Present',
    location: 'Manhattan, NY',
    bullets: [
      'Built monitoring systems processing 15,000+ data points/hour across 25+ distributed research machines.',
      'Engineered Flask-based server health dashboard with LDAP authentication serving 50+ researchers real-time.',
      'Resolved 30+ Linux server issues across SSH, Docker, and network connectivity.',
    ],
    stack: ['Python', 'GitLab', 'Linux', 'Docker'],
  },
  {
    role: 'Multimedia Assistant',
    company: 'Columbia University School of Social Work',
    period: 'Sept 2024 – May 2025',
    location: 'Manhattan, NY',
    bullets: [
      'Provided technical support to professors, troubleshooting classroom technology.',
      'Managed help desk operations, resolving incoming tech issues efficiently.',
      'Maintained and secured projectors and computers with proper closing procedures.',
    ],
    stack: [],
  },
  {
    role: 'Student Leader',
    company: 'Columbia Summer Engineering Program',
    period: 'June 2024 – August 2024',
    location: 'Manhattan, NY',
    bullets: [
      'Mentored 35+ students on 10+ data science projects using Python, pandas, and NumPy.',
      'Guided 40+ students through 50+ competitive programming challenges in C++ and Java.',
      'Taught intro to game development covering Unity, C#, and 3+ projects.',
    ],
    stack: ['Python', 'pandas', 'NumPy', 'C++', 'Unity', 'C#'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12">
          Experience
        </h2>

        <div className="divide-y divide-ink/10">
          {experiences.map((exp, i) => (
            <div key={i} className="py-8 first:pt-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-2">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <span className="text-sm text-ink/50">{exp.period}</span>
              </div>
              <p className="text-ink/70 font-medium mb-3">
                {exp.company} · {exp.location}
              </p>
              <ul className="space-y-1.5 mb-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-ink/70 text-sm leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-accent">–</span>
                    {b}
                  </li>
                ))}
              </ul>
              {exp.stack.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded border border-ink/15 text-ink/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
