const groups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'C', 'SQL'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'Next.js', 'Flask', 'Express', 'LangChain', 'Supabase', 'MongoDB', 'Docker', 'Git', 'Unity'],
  },
  {
    label: 'Other',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Bootstrap', 'LaTeX', 'Figma', 'Linux', 'NetBeans'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12">
          Skills
        </h2>

        <div className="space-y-6">
          {groups.map((group) => (
            <div key={group.label} className="flex flex-col sm:flex-row gap-2 sm:gap-8">
              <span className="text-sm text-ink/50 sm:w-40 shrink-0">{group.label}</span>
              <p className="text-ink/80">{group.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
