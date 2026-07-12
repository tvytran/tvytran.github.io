import { experiences, skills } from '../../data'

export default function ExperienceTab() {
  return (
    <div>
      <h1 className="text-peri-deep font-bold text-2xl mb-6">experience</h1>

      <div className="space-y-5">
        {experiences.map(({ role, company, period, stack, bullets }) => (
          <div key={role + company} className="border-2 border-peri/40 rounded-xl overflow-hidden">
            <div className="bg-peri-pale px-4 md:px-5 py-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <span className="font-bold text-peri-deep text-sm">
                {company} · {role}
              </span>
              <span className="text-xs text-peri font-semibold">{period}</span>
            </div>
            <div className="px-4 md:px-5 py-3.5">
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="text-sm text-peri-text leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-peri">✿</span>
                    {b}
                  </li>
                ))}
              </ul>
              {stack?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border-2 border-peri/30 text-peri"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-peri-deep font-bold text-lg mt-8 mb-3">skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((s) => (
          <span
            key={s}
            className="text-xs font-semibold px-3 py-1.5 rounded-full border-2 border-peri/40 text-peri-text"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
