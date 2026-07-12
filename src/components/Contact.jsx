const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thuy-vy-tran-876390288/' },
  { label: 'GitHub', href: 'https://github.com/tvytran' },
  { label: 'Email', href: 'mailto:tvytran2@gmail.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
          Get in touch
        </h2>

        <p className="text-ink/60 mb-8 max-w-xl">
          I'm currently looking for a summer 2026 internship in software development or
          systems administration. Feel free to reach out.
        </p>

        <div className="flex gap-6 flex-wrap mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="text-ink underline underline-offset-4 decoration-ink/30 hover:decoration-accent hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-ink/40 text-sm border-t border-ink/10 pt-6">
          © 2025 Thuy Vy Tran
        </p>
      </div>
    </section>
  )
}
