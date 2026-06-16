import { motion } from 'framer-motion'

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
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Experience<span className="text-purple-accent">.</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-purple-accent rounded-full -translate-x-1.5 mt-2 z-10 md:-translate-x-1.5" />

              <div
                className={`ml-10 md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <span className="text-sm font-mono text-purple-accent/70">{exp.period}</span>
                <h3 className="text-xl font-bold mt-1">{exp.role}</h3>
                <p className="text-gray-400 font-medium">{exp.company}</p>
                <p className="text-gray-600 text-xs font-mono mt-0.5">{exp.location}</p>
                <ul className={`mt-2 space-y-1 ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-gray-500 text-sm">{b}</li>
                  ))}
                </ul>
                {exp.stack.length > 0 && (
                  <div className={`flex gap-2 mt-3 flex-wrap ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 rounded bg-purple-accent/10 text-purple-accent/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
