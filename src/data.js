import { BookOpen, FlaskConical, Users, Leaf, Gamepad2, KeyRound, ShieldCheck, Laugh } from 'lucide-react'

export const projects = [
  {
    Icon: Laugh,
    name: 'The Humor Project',
    description: 'AI caption-voting research platform studying campus humor with student-submitted photos.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'LLM Integration'],
    href: 'https://crkai.vercel.app/',
  },
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
    description: 'Molecular similarity search by physicochemical properties, with 2D structure rendering and ADMET visualizations.',
    stack: ['Python', 'Flask', 'RDKit', 'scikit-learn'],
    href: 'https://github.com/tvytran/Molecufiind',
  },
  {
    Icon: Users,
    name: 'VSA Website',
    description: 'Full-stack site for 100+ students in the Vietnamese Student Association.',
    stack: ['Next.js', 'Supabase'],
    href: 'https://anhchiem-git-main-tvytrans-projects.vercel.app/',
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
    role: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'September 2026 – November 2026',
    location: 'Manhattan, NY',
    stack: ['Python', 'AWS Lambda', 'DynamoDB', 'CloudWatch', 'SageMaker JumpStart'],
    bullets: [
      'Built a telemetry dashboard in Amazon QuickSight tracking customer model selection and deployment across 700+ SageMaker JumpStart models, analyzing 500K+ usage events per month.',
      'Developed 6 KPIs and a 4-stage customer journey visualization mapping user behavior from model discovery to deployment, surfacing drop-off points to inform roadmap decisions.',
      'Fixed 5 existing telemetry methods to improve metric accuracy and built the dashboard as a scalable foundation for adoption across teams beyond our own.',
    ],
  },
  {
    role: 'Software Engineer AI Intern',
    company: 'Cogent People Inc.',
    period: 'June 2026 – August 2026',
    location: 'Columbia, MD',
    stack: ['Python', 'TypeScript', 'Bedrock', 'Strands', 'RAG', 'MCP', 'Lambda', 'CI/CD', 'Docker', 'Redshift'],
    bullets: [
      'Collaborated with engineering team to architect AWS Strands + Bedrock multi-agent pipeline for healthcare analytics chatbot serving CMS contract.',
      'Built embeddable Angular 20 chat widget rendering 5 streamed SSE event types across 3 swappable transports.',
      'Implemented text-to-SQL retrieval via MCP server exposing 2 database tools, alongside a RAG-based Knowledge Agent for unstructured document queries on Amazon Redshift enrollment.',
      'Designed multi-agent using MCP gateway tools, reducing manual query prompting by 20% via Python orchestration.',
      'Built structured multi-agent workflow in Strands with Supervisor, SQL, and Analysis specialists routing queries across Amazon Redshift.',
      'Deployed AWS Lambda, ECS/Fargate/ECR, and S3/CloudFront for Entra authentication, and CI/CD.',
    ],
  },
  {
    role: 'Software Development',
    company: 'Crackd.ai',
    period: 'December 2025 – May 2026',
    location: 'Remote',
    stack: ['React', 'TypeScript', 'LLM Integration', 'Next.js'],
    bullets: [
      'Built full-stack AI image caption app with 5+ React/TypeScript components and real-time LLM output.',
      'Integrated Supabase auth, database, and storage in Next.js app supporting user voting and caption management.',
      'Improved caption quality via 50+ LLM prompt iterations; added image preloading after user study feedback.',
    ],
  },
  {
    role: 'GPU HPC Intern',
    company: 'Columbia University Computer Science',
    period: 'May 2025 – May 2026',
    location: 'Manhattan, NY',
    stack: ['Kubernetes', 'Docker', 'GitLab CI/CD', 'Python', 'Bash', 'Ansible'],
    bullets: [
      'Built end-to-end downtime reduction platform monitoring 15,000+ data points/hour to validate server health.',
      'Delivered premier research GPU server support, building a Flask-based dashboard with LDAP authentication and DNS resolution diagnostics for 50+ researchers, docs included.',
      'Resolved 200+ tech support tickets, diagnosing and fixing server, network, and account issues, minimizing downtime.',
    ],
  },
  {
    role: 'Teaching Assistant, Data Structures',
    company: 'Columbia University CS',
    period: 'January 2026 – December 2026',
    location: 'Manhattan, NY',
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
    location: 'Manhattan, NY',
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
    location: 'Manhattan, NY',
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
