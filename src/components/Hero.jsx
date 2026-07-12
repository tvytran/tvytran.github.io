export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-3xl mx-auto">
      <p className="font-sans text-sm uppercase tracking-widest text-accent mb-4">
        CS + Econ · Columbia University · Class of 2027
      </p>

      <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight mb-3">
        Thuy-Vy Tran
      </h1>

      <h2 className="font-serif text-2xl md:text-3xl text-ink/70 mb-8">
        Software Engineer.
      </h2>

      <div className="flex gap-4 flex-wrap mb-10">
        <a
          href="#projects"
          className="px-6 py-2.5 bg-ink text-paper font-medium rounded-md hover:bg-ink/85 transition-colors"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="px-6 py-2.5 border border-ink/20 font-medium rounded-md hover:border-accent hover:text-accent transition-colors"
        >
          Get in touch
        </a>
      </div>

      <p className="text-sm text-ink/50">
        Available for summer 2026 internships.
      </p>
    </section>
  )
}
