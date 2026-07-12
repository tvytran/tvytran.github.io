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
    role: 'Software Engineer AI Intern',
    company: 'Cogent People Inc.',
    period: 'June 2026 – August 2026',
    stack: ['Python', 'TypeScript', 'Bedrock', 'LangChain', 'LangGraph', 'Lambda', 'CI/CD', 'Docker', 'Kubernetes'],
    bullets: [
      'Architecting LangChain + AWS Bedrock agent pipeline for healthcare analytics chatbot serving federal CMS contract.',
      'Implementing RAG-based patient data retrieval via MCP and integrating 4+ external medical APIs (PubMed, NIH).',
      'Designing multi-tool agent with 3 action groups reducing manual query prompting via automated IAM and LangChain.',
      'Building structured multi-agent workflow in LangGraph with Supervisor, Knowledge, and Database agents routing queries across Amazon Redshift.',
      'Deploying AWS Lambda functions for authentication, QuickSight integration, and LLM invocation via CI/CD.',
    ],
  },
  {
    role: 'Software Development',
    company: 'Crackd.ai',
    period: 'December 2025 – May 2026',
    stack: ['React', 'TypeScript', 'LLM Integration', 'Next.js'],
    bullets: [
      'Built full-stack AI image caption app with 5+ React/TypeScript components and real-time LLM output.',
      'Integrated Supabase auth, database, and storage in Next.js app supporting user voting and caption management.',
      'Improved caption quality via 50+ LLM prompt iterations; added image preloading after user study feedback.',
    ],
  },
  {
    role: 'Systems Infrastructure Intern',
    company: 'Columbia University Computer Science',
    period: 'May 2025 – May 2026',
    stack: ['Kubernetes', 'Docker', 'GitLab CI/CD', 'Python', 'Bash', 'Ansible'],
    bullets: [
      'Designed and ran tests on monitoring systems processing 15,000+ data points/hour, validating server health.',
      'Resolved 200+ technical support tickets, diagnosing and fixing server, network, and account issues for researchers.',
      'Engineered Flask-based dashboard with LDAP authentication and DNS resolution diagnostics for 50+ researchers with technical documentation.',
    ],
  },
  {
    role: 'Teaching Assistant, Data Structures',
    company: 'Columbia University CS',
    period: 'January 2026 – December 2026',
    stack: ['Java', 'Algorithms', 'Office Hours'],
    bullets: [
      'Support 300+ students in understanding core data structures/algorithms through office hours and assignment grading.',
      'Collaborate with course staff to evaluate/validate student submissions, providing feedback on Java implementations/software design principles.',
    ],
  },
  {
    role: 'Multimedia Assistant',
    company: 'Columbia School of Social Work',
    period: 'September 2024 – May 2025',
    stack: ['Technical Support', 'Help Desk'],
    bullets: [
      'Provided technical support to professors, troubleshooting monitors, computers, and classroom technology setups.',
      'Maintained/secured tech equipment (projectors and computers) ensuring proper functionality and closing procedures.',
    ],
  },
  {
    role: 'Teaching Assistant',
    company: 'Columbia Summer Engineering Program',
    period: 'June 2024 – August 2024',
    stack: ['Python', 'pandas', 'NumPy', 'C++', 'Unity', 'C#'],
    bullets: [
      'Guided 40+ students through 50+ competitive programming challenges in C++/Java, and software design/OOP skills.',
      "Alongside fellow TA's taught intro to gaming course covering Unity/C#, and 3+ game development projects.",
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
