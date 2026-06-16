import { motion } from 'framer-motion'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thuy-vy-tran-876390288/', icon: '↗' },
  { label: 'GitHub', href: 'https://github.com/tvytran', icon: '↗' },
  { label: 'Email', href: 'mailto:tvytran2@gmail.com', icon: '✉' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Get in touch<span className="text-purple-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-500 mb-10 text-lg"
        >
          I'm currently looking for a summer 2026 internship in software development or systems administration. Feel free to reach out!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-white/10 text-gray-300 hover:border-purple-accent/40 hover:text-purple-accent font-mono text-sm transition-all duration-300 flex items-center gap-2"
            >
              {link.label}
              <span className="text-xs">{link.icon}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/5 text-gray-600 text-sm font-mono"
        >
          © 2025 Thuy Vy Tran. Built with React + Tailwind.
        </motion.div>
      </div>
    </section>
  )
}
