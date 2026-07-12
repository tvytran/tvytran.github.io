import { BookOpen, FlaskConical, Users, Leaf, Gamepad2, KeyRound, ShieldCheck } from 'lucide-react'

export const projects = [
  {
    Icon: BookOpen,
    name: 'CURC 2026',
    description: 'Columbia University Research Conference website.',
    stack: ['Web Development'],
    href: 'https://www.columbiaconferencejgh.org/',
  },
  {
    Icon: FlaskConical,
    name: 'Molecufind',
    description: 'AI-powered molecule search engine using LLMs for chemistry research.',
    stack: ['Python', 'LLM Integration', 'Flask'],
    href: 'https://github.com/tvytran/Molecufind',
  },
  {
    Icon: Users,
    name: 'VSA Website',
    description: 'Full-stack site for 100+ students in the Vietnamese Student Association.',
    stack: ['Next.js', 'Supabase'],
    href: 'https://vsacolumbia.com',
  },
  {
    Icon: Leaf,
    name: 'Interactive Plant Learning',
    description: 'Placement quiz with instant feedback for plant identification.',
    stack: ['React'],
    href: 'https://ui-design-plants.vercel.app/',
  },
  {
    Icon: Gamepad2,
    name: 'Boing Boing Boba',
    description: 'Java OOP game with puzzle mechanics and boba-themed gameplay.',
    stack: ['Java'],
    href: 'https://github.com/tvytran/BobaRunGame',
  },
  {
    Icon: KeyRound,
    name: 'Text-Based Escape Room',
    description: 'Interactive text-based escape room game with OOP puzzle mechanics.',
    stack: ['Java'],
    href: 'https://github.com/tvytran/BobaEscapeGame',
  },
  {
    Icon: ShieldCheck,
    name: 'Privacy Method Finder',
    description: 'Decision tree tool to find the best privacy method to protect data.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://privacy-app-mu.vercel.app/',
  },
]

export const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Cogent People Inc.',
    period: 'June 2026 – August 2026',
    bullets: [
      'Developing AI-powered healthcare analytics features in Python/TypeScript across the full SDLC in agile.',
      'Implementing LLM and RAG-based pipelines in Python and SQL supporting federal healthcare data modernization.',
      'Researching and experimenting with AI frameworks including LangChain; contributing to debugging and performance improvements.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Crackd.ai (Humor Project)',
    period: 'December 2025 – Present',
    bullets: [
      'Built AI-powered image captioning with 5+ responsive UI components and real-time LLM caption generation.',
      'Automated content pipeline supporting 3+ weekly posts across 4+ social media channels with quality filtering.',
      'Refined LLM joke generation through 50+ prompt iterations to improve caption quality for Gen-Z audiences.',
    ],
  },
  {
    role: 'Systems Infrastructure Intern',
    company: 'Columbia University CS',
    period: 'May 2025 – Present',
    bullets: [
      'Built monitoring systems processing 15,000+ data points/hour across 25+ distributed research machines.',
      'Engineered Flask-based server health dashboard with LDAP authentication serving 50+ researchers real-time.',
      'Resolved 30+ Linux server issues across SSH, Docker, and network connectivity.',
    ],
  },
  {
    role: 'Multimedia Assistant',
    company: 'Columbia University School of Social Work',
    period: 'Sept 2024 – May 2025',
    bullets: [
      'Provided technical support to professors, troubleshooting classroom technology.',
      'Managed help desk operations, resolving incoming tech issues efficiently.',
      'Maintained and secured projectors and computers with proper closing procedures.',
    ],
  },
  {
    role: 'Student Leader',
    company: 'Columbia Summer Engineering Program',
    period: 'June 2024 – August 2024',
    bullets: [
      'Mentored 35+ students on 10+ data science projects using Python, pandas, and NumPy.',
      'Guided 40+ students through 50+ competitive programming challenges in C++ and Java.',
      'Taught intro to game development covering Unity, C#, and 3+ projects.',
    ],
  },
]

export const skills = [
  'Python', 'Java', 'JavaScript', 'TypeScript', 'C++', 'C#', 'C', 'SQL',
  'React', 'Next.js', 'Flask', 'Express', 'LangChain', 'Supabase', 'MongoDB',
  'Docker', 'Git', 'Unity', 'NumPy', 'Pandas', 'Figma', 'Linux',
]

export const socials = [
  { label: 'linkedin', href: 'https://www.linkedin.com/in/thuy-vy-tran-876390288/' },
  { label: 'github', href: 'https://github.com/tvytran' },
  { label: 'email', href: 'mailto:tvytran2@gmail.com' },
]
