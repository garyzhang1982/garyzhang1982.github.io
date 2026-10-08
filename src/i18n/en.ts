import type { Dict } from './zh'

/** English copy — mirrors zh.ts exactly (type-checked against it) */
export const en: Dict = {
  meta: {
    htmlLang: 'en',
    switchTo: '切换到中文',
    navAria: 'Open page navigation',
  },

  nav: {
    title: 'On this page',
    fab: 'Menu',
    items: [
      { id: 'hero', label: 'Home' },
      { id: 'capabilities', label: 'Capabilities' },
      { id: 'agent', label: 'AI Agents' },
      { id: 'fde', label: 'FDE' },
      { id: 'enterprise', label: 'Enterprise AI' },
      { id: 'stack', label: 'Tech Stack' },
      { id: 'why', label: 'Why Me' },
      { id: 'process', label: 'How We Work' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  hero: {
    kicker: '20 years in enterprise software',
    headline: 'Turning complex ideas into reliable production systems',
    intro:
      'A full-stack engineer across architecture, development and operations. I do not just write code — I deliver systems that are maintainable, scalable and secure, and I put LLM capability to work inside real business processes.',
    ctaPrimary: "Let's talk",
    ctaSecondary: 'See what I do',
    scroll: 'Scroll',
  },

  capabilities: {
    eyebrow: 'CORE CAPABILITIES',
    title: 'Core Capabilities',
    subtitle: 'From first requirement to long-term operations',
    more: 'Show details',
    less: 'Collapse',
    items: [
      {
        icon: 'layers',
        title: 'Full-Cycle Delivery',
        summary:
          'Requirements analysis, architecture, development, testing, deployment and post-launch maintenance — I own the whole chain.',
        points: [
          'Requirement clarification and feasibility assessment with a realistic plan',
          'Architecture and technology selection balancing performance, cost and maintainability',
          'Implementation, testing, CI/CD and canary releases',
          'Post-launch monitoring, incident response and continuous iteration',
        ],
      },
      {
        icon: 'code',
        title: 'Full-Stack Engineering',
        summary:
          'Java, Python and PHP on the backend; Vue3 and React on the frontend; PostgreSQL and MySQL for data — every layer from API to UI.',
        points: [
          'Backend: Java (Spring Boot), Python (FastAPI / Django), PHP (Laravel)',
          'Frontend: Vue3 and React, including mobile and admin interfaces',
          'Data: PostgreSQL and MySQL — modelling, indexing and slow-query tuning',
          'Integration: REST, gRPC, message queues and third-party systems',
        ],
      },
      {
        icon: 'compass',
        title: 'Project & Technical Leadership',
        summary:
          'Agile or waterfall delivery management, with technical decisions owned end to end.',
        points: [
          'Agile / waterfall process management, scheduling and milestone control',
          'Solution reviews and key technical decisions that prevent rework and architecture debt',
          'Risk identification and contingency planning — surface problems early',
          'Cross-team coordination with business, design, QA and operations',
        ],
      },
      {
        icon: 'pulse',
        title: 'Operations & Reliability',
        summary: 'CI/CD, cloud deployment, monitoring and production troubleshooting — launch is only the beginning.',
        points: [
          'CI/CD pipelines with automated testing and release',
          'Cloud deployment: AWS / Azure / DigitalOcean / Alibaba Cloud / Tencent Cloud / Huawei Cloud',
          'Monitoring, logging, alerting and capacity planning',
          'Production incident diagnosis, response and performance tuning',
        ],
      },
    ],
  },

  agent: {
    eyebrow: 'AI AGENT DEVELOPMENT',
    title: 'AI Agent Development',
    subtitle: 'LLM capability turned into systems that can be evaluated, observed and shipped',
    intro:
      'Between “call a model once” and “an agent that completes a task on its own” lies a stretch of pure engineering. I cover that distance: architecture, retrieval, tool calling, evaluation and cost control — none of them optional.',
    items: [
      {
        icon: 'cpu',
        title: 'Agent Architecture',
        summary: 'Planning, memory and execution designed around the real task — not around a framework.',
        points: [
          'Single- and multi-agent orchestration (Planner / Executor / Critic roles)',
          'Task planning and decomposition, state machines and workflow orchestration',
          'Tool use and function calling, MCP integration',
          'Human-in-the-loop design and approval checkpoints',
        ],
      },
      {
        icon: 'database',
        title: 'RAG & Private Knowledge Bases',
        summary: 'Answers grounded in your real documents, with citations and access control.',
        points: [
          'Document parsing and chunking, including tables, PDFs and scans',
          'Hybrid vector + keyword retrieval with reranking for accuracy',
          'Vector store selection: pgvector / Milvus / Qdrant',
          'Multi-tenant permission isolation and answer provenance',
        ],
      },
      {
        icon: 'shield',
        title: 'Engineering & Quality',
        summary: "An agent's non-determinism has to be measured and managed, or it cannot ship.",
        points: [
          'Eval sets and regression testing — quality that is measurable and comparable',
          'Tracing and observability: inputs, outputs, latency and cost per step',
          'Prompt-injection defence, output guardrails and PII filtering',
          'Retries, graceful degradation and fallback paths',
        ],
      },
      {
        icon: 'workflow',
        title: 'Deployment Shapes',
        summary: 'No buzzwords — only whether it solves a real problem.',
        points: [
          'Enterprise knowledge assistants and intelligent Q&A',
          'Support and ticket automation with intent routing',
          'Data analysis and automated reporting agents',
          'Engineering productivity agents: code review, test generation, doc sync',
        ],
      },
    ],
    stackLabel: 'Typical stack',
    stack: [
      'LangGraph',
      'LangChain',
      'LlamaIndex',
      'MCP',
      'OpenAI / Claude / DeepSeek',
      'Qwen / local models',
      'pgvector',
      'Milvus',
      'RAGAS',
      'Langfuse',
      'Dify / n8n',
      'Python / TypeScript',
    ],
  },

  fde: {
    eyebrow: 'FORWARD DEPLOYED ENGINEER',
    title: 'Forward Deployed Engineer',
    subtitle: 'The half engineering team that sits inside your business',
    intro:
      'An FDE does not simply “take requirements remotely”. The job is to walk into the business, translate a fuzzy problem into a running system, and carry what the front line learns back into the product.',
    definition:
      'The Forward Deployed Engineer role originated at Palantir: engineers embedded directly with the customer, fluent enough in the business to speak its language and senior enough to write production code. They are the shortest path between product and customer.',
    phasesTitle: 'The four phases',
    phases: [
      {
        icon: 'compass',
        tag: 'Phase 01',
        title: 'Discover',
        desc: 'Embed with the business. Map processes, data, systems and stakeholders, and turn “we want to use AI” into a specific, testable problem with success metrics.',
      },
      {
        icon: 'spark',
        tag: 'Phase 02',
        title: 'Prototype',
        desc: 'Ship a working end-to-end prototype in 2–4 weeks, running on real data. The goal is fast disproof and fast convergence, not a nice-looking demo.',
      },
      {
        icon: 'server',
        tag: 'Phase 03',
        title: 'Deploy',
        desc: 'Add permissions, integrations, evaluation, monitoring and operations — hardening the prototype into a system that runs reliably for years.',
      },
      {
        icon: 'refresh',
        tag: 'Phase 04',
        title: 'Feed back',
        desc: 'Distil reusable modules and patterns, and route recurring field problems back into the product roadmap so the next deployment is faster.',
      },
    ],
    fitTitle: 'Why I fit this role',
    fit: [
      '20 years of enterprise delivery — I have seen the messy edge cases, not just the happy path',
      'Full-stack and architecture background: database to UI, without a translation layer',
      'AI agent engineering skills that put model capability inside real business processes',
      'Direct English communication with business owners, IT and end users — less information lost',
    ],
  },

  enterprise: {
    eyebrow: 'ENTERPRISE AI ADOPTION',
    title: 'Enterprise AI Adoption',
    subtitle: 'The hard part was never the model — it is the use case, the data and the organisation',
    intro:
      'Enterprises can buy a model; they cannot buy “it is actually being used”. My job is to move AI from a demo to a daily tool with metrics, a budget and real users.',
    items: [
      {
        icon: 'target',
        title: 'AI Readiness & Use-Case Mapping',
        summary: 'Decide what to do first — then talk about which model.',
        points: [
          'Assess the true state of data, systems and organisation, and name the gaps',
          'Prioritise use cases with a value × feasibility matrix',
          'Start with the one use case that produces measurable return, then expand on that trust',
        ],
      },
      {
        icon: 'route',
        title: 'From PoC to Production',
        summary: 'Most AI projects die in the gap between prototype and production.',
        points: [
          'Connect data sources with real governance and quality checks',
          'Integrate with existing systems: ERP / CRM / OA / in-house platforms',
          'Permissions, multi-tenancy, canary release and rollback',
        ],
      },
      {
        icon: 'lock',
        title: 'Security, Compliance & Data Sovereignty',
        summary: 'Keeping enterprise data in-house is a baseline, not an option.',
        points: [
          'Private or hybrid deployment, masking and data that never leaves your boundary',
          'Full audit logging and traceability of operations',
          'Models, prompts and knowledge bases managed as governed assets',
        ],
      },
      {
        icon: 'gauge',
        title: 'Cost & Performance Governance',
        summary: 'Every token accounted for, understood and driven down.',
        points: [
          'Model routing and tiered invocation — the right model for each job',
          'Caching, batching and concurrency scheduling',
          'Small-model distillation to bring unit cost down over time',
        ],
      },
      {
        icon: 'users',
        title: 'Enablement & Long-Term Operations',
        summary: 'Shipping a system is not adoption. Being used is adoption.',
        points: [
          'Training, SOPs and an internal CoE mechanism',
          'Knowledge base and best-practice capture',
          'Outcome dashboards and a sustainable iteration cadence',
        ],
      },
    ],
    metricsLabel: 'Outcomes I aim at',
    metrics: ['Higher productivity', 'Shorter handling time', 'Accuracy & adoption', 'Lower unit cost', 'Faster time to launch'],
  },

  stack: {
    eyebrow: 'TECH STACK',
    title: 'Tech Stack',
    subtitle: 'Grouped by capability, combined as the problem requires',
    groups: [
      {
        key: 'backend',
        label: 'Backend',
        items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Django', 'PHP', 'Laravel', 'Node.js', 'REST / gRPC', 'Message queues'],
      },
      {
        key: 'frontend',
        label: 'Frontend',
        items: ['Vue 3', 'React', 'TypeScript', 'Vite', 'Mobile-first UI', 'H5 / Mini programs'],
      },
      {
        key: 'data',
        label: 'Data',
        items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Elasticsearch', 'pgvector', 'Data modelling', 'SQL tuning'],
      },
      {
        key: 'ai',
        label: 'AI & Agent',
        items: ['LangGraph', 'LangChain', 'LlamaIndex', 'MCP', 'OpenAI / Claude / DeepSeek', 'RAG', 'Vector search', 'Prompt engineering', 'Eval & tracing'],
      },
      {
        key: 'devops',
        label: 'DevOps',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure', 'DigitalOcean', 'Alibaba Cloud', 'Tencent Cloud', 'Huawei Cloud', 'Nginx', 'Monitoring & alerting'],
      },
    ],
  },

  why: {
    eyebrow: 'WHY ME',
    title: 'Why Work With Me',
    subtitle: 'What 20 years actually buys you',
    items: [
      {
        icon: 'target',
        title: 'I have already hit most of these walls',
        desc: 'Two decades of performance bottlenecks, data consistency problems, legacy migrations and production incidents. What you are buying is judgement, not just hours.',
      },
      {
        icon: 'compass',
        title: 'Thinks like an architect, acts like an owner',
        desc: 'I am not satisfied with “implementing the ticket”. Requirements that deserve questioning get questioned, risks get flagged — your project’s outcome is my reputation.',
      },
      {
        icon: 'globe',
        title: 'Clear communication, visible progress',
        desc: 'Fluent English, with daily or weekly updates. If something goes wrong you hear it first — no hiding, no silence.',
      },
      {
        icon: 'check',
        title: 'On-time delivery is a track record, not a promise',
        desc: 'I treat delivery as reputation: give an honest assessment and a realistic plan, then deliver to that plan.',
      },
    ],
    quote: 'Twenty years in this field taught me one thing: keep the complexity, hand over the simplicity.',
  },

  process: {
    eyebrow: 'HOW WE WORK',
    title: 'How We Work',
    subtitle: 'From first conversation to running in production',
    steps: [
      {
        title: 'Alignment',
        desc: 'A deep pass over your goals, constraints and current state, followed by an honest technical assessment — including what I would not build.',
      },
      {
        title: 'Plan & Estimate',
        desc: 'Architecture proposal, milestone breakdown, quote and a risk list. No “we will see how it goes” in the plan.',
      },
      {
        title: 'Iterative Delivery',
        desc: 'Working increments every one or two weeks, so you can see progress continuously instead of waiting for the last day.',
      },
      {
        title: 'Launch & Operate',
        desc: 'Deployment, monitoring, documentation handover and training, with continued support for maintenance and improvement.',
      },
    ],
  },

  contact: {
    eyebrow: 'CONTACT',
    title: "Let's discuss your project",
    subtitle: 'You will get an honest assessment and a realistic plan',
    body: 'Whether you have a fully formed idea or just a vague direction, reach out directly. I will tell you whether it is worth building, roughly how long it takes, and where the traps are.',
    cta: 'Send me an email',
    labels: {
      email: 'Email',
      upwork: 'Upwork',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      wechat: 'WeChat',
    },
    wechatHint: 'Tap to copy',
    copied: 'Copied',
  },

  footer: {
    note: 'Full-Stack Engineering · AI Agents · Forward Deployed Engineer · Enterprise AI',
    builtWith: 'Built with React + Ant Design Mobile',
  },
}
