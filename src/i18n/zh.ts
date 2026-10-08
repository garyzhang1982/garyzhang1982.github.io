/**
 * 中文文案（同时是英文文案的类型来源：en.ts 必须与这里结构完全一致，
 * 少写或写错字段 TypeScript 会直接报错）
 */
export const zh = {
  meta: {
    htmlLang: 'zh-CN',
    switchTo: 'Switch to English',
    navAria: '打开页面导航',
  },

  nav: {
    title: '页面导航',
    fab: '目录',
    items: [
      { id: 'hero', label: '首页' },
      { id: 'capabilities', label: '核心能力' },
      { id: 'agent', label: 'AI Agent 开发' },
      { id: 'fde', label: 'FDE 前沿部署' },
      { id: 'enterprise', label: '企业 AI 落地' },
      { id: 'stack', label: '技术栈' },
      { id: 'why', label: '为什么选我' },
      { id: 'process', label: '协作方式' },
      { id: 'contact', label: '联系我' },
    ],
  },

  hero: {
    kicker: '20 年企业级软件交付',
    headline: '把复杂的想法，变成可靠的生产系统',
    intro:
      '横跨架构、开发与运维的全栈工程师。我不只是写代码——我交付可维护、可扩展、可安全的系统，并在 AI 时代把大模型能力真正落进业务流程。',
    ctaPrimary: '聊聊你的项目',
    ctaSecondary: '查看核心能力',
    scroll: '向下浏览',
  },

  capabilities: {
    eyebrow: 'CORE CAPABILITIES',
    title: '核心能力',
    subtitle: '从一行需求到长期运维',
    more: '展开细节',
    less: '收起',
    items: [
      {
        icon: 'layers',
        title: '全周期交付',
        summary: '需求分析、架构设计、开发、测试、部署、上线后维护——整条链路我负责到底。',
        points: [
          '需求澄清与可行性评估，给出真实可执行的方案',
          '架构设计与技术选型，兼顾性能、成本与团队维护能力',
          '编码、测试、CI/CD 与灰度发布',
          '上线后监控、故障排查与持续迭代',
        ],
      },
      {
        icon: 'code',
        title: '全栈开发',
        summary: '后端 Java / Python / PHP，前端 Vue3 / React，数据层 PostgreSQL / MySQL，覆盖从接口到界面的每一层。',
        points: [
          '后端：Java (Spring Boot)、Python (FastAPI / Django)、PHP (Laravel)',
          '前端：Vue3、React，含移动端与后台管理界面',
          '数据：PostgreSQL、MySQL，建模、索引优化与慢查询治理',
          '集成：REST、gRPC、消息队列与第三方系统对接',
        ],
      },
      {
        icon: 'compass',
        title: '项目与技术领导',
        summary: '用敏捷或瀑布管理进度，在关键节点做技术决策并对结果负责。',
        points: [
          '敏捷 / 瀑布流程管理，排期、里程碑与交付节奏把控',
          '技术方案评审与关键决策，避免返工和架构债',
          '风险识别与预案，让问题早暴露、早处理',
          '跨团队协调：业务方、设计、测试与运维',
        ],
      },
      {
        icon: 'pulse',
        title: '运维与稳定性',
        summary: 'CI/CD、云部署、监控告警、生产故障排查——系统上线只是开始。',
        points: [
          'CI/CD 流水线搭建，自动化测试与发布',
          '云平台部署：AWS / Azure / DigitalOcean / 阿里云 / 腾讯云 / 华为云',
          '监控、日志、告警体系与容量规划',
          '生产问题定位、应急处理与性能调优',
        ],
      },
    ],
  },

  agent: {
    eyebrow: 'AI AGENT DEVELOPMENT',
    title: 'AI Agent 开发',
    subtitle: '把大模型能力做成可评测、可观测、可上线的生产系统',
    intro:
      '从「调用一次模型」到「能自主完成任务的智能体」，中间隔着一段工程化的距离。我负责把这段距离走完：架构、检索、工具调用、评测与成本控制，一个都不能少。',
    items: [
      {
        icon: 'cpu',
        title: '智能体架构设计',
        summary: '围绕真实任务设计规划、记忆与执行结构，而不是堆砌框架。',
        points: [
          '单智能体与多智能体编排（Planner / Executor / Critic 分工）',
          '任务规划与拆解，状态机与工作流编排',
          '工具调用与 Function Calling，MCP 协议接入',
          '人机协同（Human-in-the-loop）与审批节点设计',
        ],
      },
      {
        icon: 'database',
        title: 'RAG 与私有知识库',
        summary: '让模型基于企业真实资料回答，且能溯源、能鉴权。',
        points: [
          '文档解析与切分策略，覆盖表格、PDF 与扫描件',
          '向量检索 + 关键词混合召回，重排提升准确率',
          '向量库选型：pgvector / Milvus / Qdrant',
          '多租户权限隔离与答案引用溯源',
        ],
      },
      {
        icon: 'shield',
        title: '工程化与质量保障',
        summary: 'Agent 的不确定性必须被度量和管理，否则无法上线。',
        points: [
          '评测集构建与回归测试，效果可量化、可对比',
          'Tracing 与可观测性：每一步的输入输出、耗时与成本',
          '提示注入防护、输出护栏与敏感信息过滤',
          '失败重试、降级策略与兜底路径',
        ],
      },
      {
        icon: 'workflow',
        title: '落地形态与场景',
        summary: '不讲概念，只看能不能解决真实问题。',
        points: [
          '企业知识助手与智能问答',
          '客服 / 工单自动化与意图分流',
          '数据分析与自动报表 Agent',
          '研发提效 Agent：代码审查、测试生成、文档同步',
        ],
      },
    ],
    stackLabel: '常用技术栈',
    stack: [
      'LangGraph',
      'LangChain',
      'LlamaIndex',
      'MCP',
      'OpenAI / Claude / DeepSeek',
      'Qwen / 本地模型',
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
    title: '前沿部署工程师',
    subtitle: '站在客户业务现场的那半个工程团队',
    intro:
      'FDE 的核心不是「远程接需求」，而是走进业务现场：把模糊的业务问题翻译成可运行的系统，再把一线的真实反馈带回产品。',
    definition:
      'Forward Deployed Engineer 这一角色起源于 Palantir——工程师被直接部署到客户现场，既要读得懂业务语言，也要写得出生产代码。他们是产品与客户之间最短的那条路径。',
    phasesTitle: 'FDE 的四个阶段',
    phases: [
      {
        icon: 'compass',
        tag: 'Phase 01',
        title: 'Discover · 业务诊断',
        desc: '进入客户业务现场，梳理流程、数据、系统与干系人。把「我们想用 AI」变成明确、可验证的问题和成功指标。',
      },
      {
        icon: 'spark',
        tag: 'Phase 02',
        title: 'Prototype · 快速原型',
        desc: '2–4 周交付可运行的端到端原型，用真实数据跑通闭环。目标是快速证伪、快速收敛，而不是做一个好看的演示。',
      },
      {
        icon: 'server',
        tag: 'Phase 03',
        title: 'Deploy · 生产落地',
        desc: '补齐权限、集成、评测、监控与运维，把原型硬化成能长期稳定运行的生产系统。',
      },
      {
        icon: 'refresh',
        tag: 'Phase 04',
        title: 'Feed back · 反哺产品',
        desc: '沉淀可复用的模块与模式，把一线共性问题回流到产品路线图，让下一个场景交付得更快。',
      },
    ],
    fitTitle: '为什么我适合做 FDE',
    fit: [
      '20 年企业级交付经验，见过足够多的「真实环境」和边界情况',
      '全栈 + 架构背景，从数据库到界面可独立打通，不依赖翻译层',
      '具备 AI Agent 工程化能力，能把模型能力真正嵌进业务流程',
      '可用英语与业务方、IT 与一线用户直接沟通，减少信息损耗',
    ],
  },

  enterprise: {
    eyebrow: 'ENTERPRISE AI ADOPTION',
    title: '企业 AI 落地',
    subtitle: '难点从来不是模型，而是场景、数据与组织',
    intro:
      '企业买得到模型，却买不到「用起来」。我的工作是把 AI 从一个演示，变成有指标、有预算、有人真正在用的日常工具。',
    items: [
      {
        icon: 'target',
        title: 'AI 就绪度与场景盘点',
        summary: '先想清楚做什么，再讨论用什么模型。',
        points: [
          '评估数据、系统与组织的真实水位，明确差距在哪',
          '用「价值 × 可行性」矩阵排定场景优先级',
          '先做一个能产生可量化收益的场景，拿到信任再扩展',
        ],
      },
      {
        icon: 'route',
        title: '从 PoC 到生产的完整路径',
        summary: '多数 AI 项目死在前原型与生产之间的那段路上。',
        points: [
          '打通数据源，做好治理与质量校验',
          '与既有系统集成：ERP / CRM / OA / 自研平台',
          '权限、多租户、灰度发布与回滚机制',
        ],
      },
      {
        icon: 'lock',
        title: '安全、合规与数据主权',
        summary: '企业数据不出域，是底线而不是选项。',
        points: [
          '私有化 / 混合部署，敏感数据脱敏与不出域',
          '完整审计日志与操作留痕',
          '模型、提示词与知识库作为资产统一管控',
        ],
      },
      {
        icon: 'gauge',
        title: '成本与性能治理',
        summary: '让每一分 token 花得看得见、算得清、降得下。',
        points: [
          '模型路由与分级调用：好钢用在刀刃上',
          '缓存、批处理与并发调度',
          '小模型蒸馏替换，单位业务成本持续下降',
        ],
      },
      {
        icon: 'users',
        title: '组织赋能与长期运营',
        summary: '系统上线不等于被使用，被使用才叫落地。',
        points: [
          '培训、SOP 与内部 CoE 机制建设',
          '知识库与最佳实践沉淀',
          '效果看板与持续迭代节奏',
        ],
      },
    ],
    metricsLabel: '我关注的交付指标',
    metrics: ['人效提升', '处理时长下降', '准确率与采纳率', '单位成本下降', '上线周期缩短'],
  },

  stack: {
    eyebrow: 'TECH STACK',
    title: '技术栈',
    subtitle: '按能力域划分，按需组合',
    groups: [
      {
        key: 'backend',
        label: '后端',
        items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Django', 'PHP', 'Laravel', 'Node.js', 'REST / gRPC', '消息队列'],
      },
      {
        key: 'frontend',
        label: '前端',
        items: ['Vue 3', 'React', 'TypeScript', 'Vite', '移动端适配', 'H5 / 小程序'],
      },
      {
        key: 'data',
        label: '数据',
        items: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Elasticsearch', 'pgvector', '数据建模', 'SQL 调优'],
      },
      {
        key: 'ai',
        label: 'AI & Agent',
        items: ['LangGraph', 'LangChain', 'LlamaIndex', 'MCP', 'OpenAI / Claude / DeepSeek', 'RAG', '向量检索', 'Prompt 工程', '评测与 Tracing'],
      },
      {
        key: 'devops',
        label: 'DevOps',
        items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Azure', 'DigitalOcean', '阿里云', '腾讯云', '华为云', 'Nginx', '监控告警'],
      },
    ],
  },

  why: {
    eyebrow: 'WHY ME',
    title: '为什么选择我',
    subtitle: '20 年经验到底意味着什么',
    items: [
      {
        icon: 'target',
        title: '踩过的坑比多数人走过的路多',
        desc: '20 年里见过并解决过绝大多数典型问题：性能瓶颈、数据一致性、遗留系统改造、生产事故。你买到的是判断力，而不只是工时。',
      },
      {
        icon: 'compass',
        title: '像架构师一样思考，像负责人一样行动',
        desc: '不满足于「实现需求」。该质疑的需求会质疑，该预警的风险会预警——你项目的成败，就是我的口碑。',
      },
      {
        icon: 'globe',
        title: '沟通透明，进度可控',
        desc: '英语沟通无障碍，按日或按周同步进展。出问题第一时间说明，不藏、不拖。',
      },
      {
        icon: 'check',
        title: '按时交付不是承诺，是记录',
        desc: '把交付当成信誉：先给出诚实评估与可执行计划，再按计划交付。',
      },
    ],
    quote: '20 年技术生涯只教会我一件事：把复杂留给自己，把简单交给客户。',
  },

  process: {
    eyebrow: 'HOW WE WORK',
    title: '协作方式',
    subtitle: '从第一次沟通到上线运维',
    steps: [
      {
        title: '需求对齐',
        desc: '深入了解业务目标、约束与现状，给出诚实的技术评估——包括不推荐做的部分。',
      },
      {
        title: '方案与计划',
        desc: '输出架构方案、里程碑拆解、报价与风险清单。计划里没有「到时候再看」。',
      },
      {
        title: '迭代交付',
        desc: '按周或双周交付可运行的成果，你随时能看到进展，而不是等到最后一天。',
      },
      {
        title: '上线与运维',
        desc: '部署、监控、文档移交与培训，并持续支持上线后的维护与优化。',
      },
    ],
  },

  contact: {
    eyebrow: 'CONTACT',
    title: '聊聊你的项目',
    subtitle: '我会给你一个诚实的评估和一份现实的计划',
    body: '不管你已经有一个成型的想法，还是只有一个模糊的方向，都可以直接联系我。我会告诉你：这件事值不值得做、大概要多久、可能会踩哪些坑。',
    cta: '发送邮件给我',
    labels: {
      email: '邮箱',
      upwork: 'Upwork',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      wechat: '微信',
    },
    wechatHint: '长按或点击复制',
    copied: '已复制',
  },

  footer: {
    note: '全栈开发 · AI Agent 开发 · 前沿部署工程师 · 企业 AI 落地',
    builtWith: '基于 React + Ant Design Mobile 构建',
  },
}

export type Dict = typeof zh
