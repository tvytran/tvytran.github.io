export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-ink/8">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-serif font-semibold text-ink hover:text-accent transition-colors">
          Thuy-Vy Tran
        </a>
        <nav className="flex gap-6 text-sm text-ink/60">
          {['Experience', 'Projects', 'Skills', 'Contact'].map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              className="hover:text-ink transition-colors"
            >
              {s}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
