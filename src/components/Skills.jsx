import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 3 },
  { name: 'Java', level: 3 },
  { name: 'JavaScript', level: 3 },
  { name: 'React', level: 3 },
  { name: 'Next.js', level: 3 },
  { name: 'C++', level: 2 },
  { name: 'C#', level: 2 },
  { name: 'C', level: 2 },
  { name: 'HTML/CSS', level: 3 },
  { name: 'TypeScript', level: 3 },
  { name: 'SQL', level: 2 },
  { name: 'LangChain', level: 2 },
  { name: 'Flask', level: 2 },
  { name: 'Express', level: 2 },
  { name: 'Supabase', level: 2 },
  { name: 'MongoDB', level: 1 },
  { name: 'Git', level: 3 },
  { name: 'Docker', level: 1 },
  { name: 'Linux', level: 2 },
  { name: 'Unity', level: 2 },
  { name: 'NumPy', level: 2 },
  { name: 'Pandas', level: 2 },
  { name: 'Matplotlib', level: 2 },
  { name: 'Bootstrap', level: 2 },
  { name: 'LaTeX', level: 1 },
  { name: 'Figma', level: 2 },
  { name: 'NetBeans', level: 1 },
]

const sizeMap = {
  3: 'text-base px-5 py-2.5',
  2: 'text-sm px-4 py-2',
  1: 'text-xs px-3 py-1.5',
}

const opacityMap = {
  3: 'border-purple-accent/40 text-white hover:bg-purple-accent/20',
  2: 'border-white/10 text-gray-300 hover:border-purple-accent/30',
  1: 'border-white/5 text-gray-500 hover:border-white/15',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Skills<span className="text-purple-accent">.</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className={`rounded-full border font-mono transition-all duration-300 ${sizeMap[skill.level]} ${opacityMap[skill.level]}`}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
