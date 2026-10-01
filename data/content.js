// This file is the source of truth. Run `npm run build` after editing.
// Null business facts are deliberately omitted from the generated website.
export const business = {
  name: 'Wisme Education', legalEntityName: null, ABN: null, ACN: null,
  email: 'Info@Wisme.com.au',
  phone: '0424 361 399',
  address: 'Unit 1233, 1 Steam Mill Lane, Haymarket NSW 2000',
  postalAddress: null,
  stateOrTerritory: null, hours: null, privacyContact: null, complaintsContact: null,
  domain: 'https://mmaofun.github.io/wisme', social: {}, team: [],
  // Enable only after the business, offering and legal review is complete.
  indexable: true, pricingApproved: false, legalReviewed: false,
  gstLabel: null, cancellationWindow: null, refundTimeframe: null,
};

export const categories = ['All programs', 'Artificial Intelligence', 'Data & Analytics', 'Automation', 'Digital Skills', 'Professional Skills'];
export const enquiryTypes = ['Individual Program', 'Corporate Training', 'Education Solutions', 'Digital Skills Academy', 'Partnership', 'General Enquiry'];

export const programs = [
  {
    slug: 'ai-fundamentals', name: 'AI Fundamentals for Professionals', category: 'Artificial Intelligence', icon: 'spark', featured: true,
    description: 'Understand what AI can do, where it falls short, and how it fits into everyday work.',
    overview: 'Build a clear foundation in artificial intelligence without getting lost in technical language. Explore common applications, recognise limitations and develop a considered approach to using AI in a professional setting.',
    audience: 'Professionals exploring AI and its relevance to their work.',
    outcomes: ['Explain the difference between AI, machine learning and generative AI.', 'Identify tasks where AI could support your work.', 'Recognise accuracy, privacy and bias considerations.', 'Ask better questions when evaluating an AI tool.'],
    modules: [['Understanding AI', 'Explore the concepts behind AI and the kinds of tasks different tools can support.'], ['AI in the workplace', 'Consider applications in communication, research, analysis and routine administration.'], ['Limits and responsible use', 'Examine unreliable outputs, sensitive information and the importance of human review.'], ['Choosing an opportunity', 'Use a simple framework to assess a practical use case for your role.']],
  },
  {
    slug: 'generative-ai-workplace', name: 'Generative AI for the Workplace', category: 'Artificial Intelligence', icon: 'pages', featured: true,
    description: 'Apply generative AI to research, writing and everyday professional workflows.',
    overview: 'Explore how generative AI can assist with the work you already do. Focus on giving useful instructions, checking outputs and deciding when human judgement needs to take the lead.',
    audience: 'Professionals looking to apply generative AI to everyday tasks.',
    outcomes: ['Structure a useful brief for an AI assistant.', 'Draft and refine workplace communications.', 'Use AI to organise information while checking sources.', 'Create a repeatable workflow with human review built in.'],
    modules: [['Working with generative AI', 'Understand common tool capabilities and their practical limitations.'], ['Writing and communication', 'Develop briefs and review drafts for accuracy, tone and audience.'], ['Research and synthesis', 'Organise information and verify claims against reliable sources.'], ['A repeatable workflow', 'Map a familiar task and establish sensible review checkpoints.']],
  },
  {
    slug: 'prompt-engineering', name: 'Prompt Engineering & AI Productivity', category: 'Artificial Intelligence', icon: 'message',
    description: 'Give AI clearer instructions and build useful, repeatable prompting habits.',
    overview: 'Develop a structured approach to prompting. Define the task, provide relevant context, set the output format and improve the result through deliberate iteration.',
    audience: 'Professionals who want a more consistent approach to AI-assisted tasks.',
    outcomes: ['Write prompts with clear context and constraints.', 'Use examples to communicate the required output.', 'Diagnose weak responses and refine the instructions.', 'Build a small library of reusable task prompts.'],
    modules: [['Prompt structure', 'Define the task, audience, context and desired format.'], ['Examples and iteration', 'Use relevant examples and targeted follow-up instructions.'], ['Evaluating outputs', 'Compare results against explicit quality and accuracy criteria.'], ['Reusable workflows', 'Organise prompts around real tasks while protecting confidential information.']],
  },
  {
    slug: 'ai-automation', name: 'AI Automation for Business', category: 'Automation', icon: 'workflow',
    description: 'Identify suitable workflows for automation and plan the checks they need.',
    overview: 'Understand how automation connects tasks, tools and information. Explore where AI can add value, where predictable rules work better and how to keep people in control of important decisions.',
    audience: 'Business professionals and team leads exploring workflow automation.',
    outcomes: ['Map the steps and hand-offs in a business process.', 'Distinguish rules-based automation from AI-assisted tasks.', 'Identify exceptions, risks and approval points.', 'Outline a small automation pilot with a measurable goal.'],
    modules: [['Mapping a workflow', 'Document inputs, decisions, outputs and the people involved.'], ['Choosing an opportunity', 'Assess repetition, effort, reliability and sensitivity of information.'], ['Connecting tools', 'Explore triggers, actions and data hand-offs at a practical level.'], ['Testing and oversight', 'Plan a small pilot with exception handling and human review.']],
  },
  {
    slug: 'data-analytics', name: 'Data Analytics Fundamentals', category: 'Data & Analytics', icon: 'chart', featured: true,
    description: 'Turn business questions into useful analysis and clearly communicated findings.',
    overview: 'Develop a practical way to work with data, from asking a focused question to explaining what the results mean. Give equal attention to data quality, analytical thinking and communication.',
    audience: 'Professionals building their confidence with business data.',
    outcomes: ['Frame an answerable business question.', 'Recognise common data quality issues.', 'Select appropriate summaries and visualisations.', 'Explain findings alongside their limitations.'],
    modules: [['Questions and data', 'Connect a business question with the information needed to answer it.'], ['Preparing information', 'Inspect missing values, inconsistent labels and common errors.'], ['Exploring patterns', 'Use summaries and comparisons to investigate a question.'], ['Communicating findings', 'Choose clear charts and explain what the evidence supports.']],
  },
  {
    slug: 'excel-business-analysis', name: 'Excel & Business Data Analysis', category: 'Data & Analytics', icon: 'grid',
    description: 'Organise, analyse and present business information with practical spreadsheet techniques.',
    overview: 'Build useful spreadsheet habits for everyday analysis. Work with structured tables, formulas and summaries that make information easier to maintain, check and share.',
    audience: 'Professionals who use spreadsheets to organise and analyse information.',
    outcomes: ['Structure a worksheet for reliable analysis.', 'Use formulas to answer practical business questions.', 'Summarise information with tables and charts.', 'Check workbooks for common errors.'],
    modules: [['Working with tables', 'Organise records, use consistent data types and manage filters.'], ['Useful formulas', 'Apply calculations, logical tests and lookups to familiar tasks.'], ['Summaries and visualisation', 'Explore PivotTables and charts for clear comparisons.'], ['Checking and sharing', 'Review formulas, document assumptions and prepare a readable workbook.']],
  },
  {
    slug: 'power-bi', name: 'Power BI for Business', category: 'Data & Analytics', icon: 'bars',
    description: 'Explore how to turn business data into clear, purposeful interactive reports.',
    overview: 'Understand the main stages of a Power BI report: connecting data, preparing a model, building visualisations and helping a reader interpret the results.',
    audience: 'Professionals exploring business intelligence and visual reporting.',
    outcomes: ['Describe the steps in a business reporting workflow.', 'Prepare data and understand basic model relationships.', 'Select charts that answer the intended question.', 'Review a report for clarity and appropriate access.'],
    modules: [['From question to report', 'Define the audience, decisions and measures a report should support.'], ['Data preparation', 'Explore connecting, cleaning and shaping information.'], ['Models and measures', 'Understand relationships and the purpose of calculated measures.'], ['Report design', 'Arrange visualisations with clear labels, useful filters and a logical reading order.']],
  },
  {
    slug: 'digital-productivity', name: 'Digital Productivity & Automation', category: 'Digital Skills', icon: 'workflow', featured: true,
    description: 'Create more organised digital workflows and reduce unnecessary manual steps.',
    overview: 'Take a practical look at how information moves through your working day. Explore better ways to organise tasks, collaborate and automate suitable routine steps.',
    audience: 'Professionals seeking more consistent digital working habits.',
    outcomes: ['Identify friction in a routine digital workflow.', 'Organise shared information with clearer conventions.', 'Choose appropriate collaboration and productivity tools.', 'Plan a simple automation with sensible safeguards.'],
    modules: [['Your working day', 'Map common tasks, repeated effort and information hand-offs.'], ['Organising information', 'Develop practical file, task and knowledge-management habits.'], ['Working together', 'Improve collaboration through clear ownership and shared conventions.'], ['Reducing repetition', 'Identify suitable automation opportunities and decide how to check the results.']],
  },
].map(p => ({ level: null, duration: null, delivery: null, price: null, certificate: null, ...p }));

export const learningSteps = [
  ['Understand', 'Build a clear foundation in the concepts, tools and decisions relevant to your work.'],
  ['Apply', 'Connect what you learn with realistic tasks and professional situations.'],
  ['Improve', 'Reflect on the results and refine an approach you can use again.'],
];

export const faqs = [
  { group: 'Getting started', q: 'Who are Wisme programs for?', a: 'The program areas are designed around working professionals and organisational teams. Each program page explains its intended audience so you can find a relevant starting point.' },
  { group: 'Getting started', q: 'How is training delivered?', a: 'Delivery arrangements depend on the program and your requirements. Ask about the available format, dates, duration and any tool requirements before making a booking.' },
  { group: 'Pricing and enrolment', q: 'Where can I find program pricing?', a: 'Individual program fees are available on request. Corporate training and education projects are quoted to suit the agreed scope. Confirm the total fee, inclusions and any applicable GST before proceeding.' },
  { group: 'Individual programs', q: 'Do I need previous experience?', a: 'It depends on the program. Describe your current experience in your enquiry so the suitability and prerequisites can be confirmed.' },
  { group: 'Individual programs', q: 'How long are the programs?', a: 'Duration will be confirmed with the program information. It can depend on the content, delivery format and intended depth of learning.' },
  { group: 'Individual programs', q: 'What is included in a program?', a: 'Ask for the program outline, learning materials, required software and any support arrangements. Inclusions should be confirmed before enrolment.' },
  { group: 'Individual programs', q: 'Are these nationally recognised qualifications?', a: 'The programs described on this website are professional development offerings. They are not presented as nationally recognised qualifications. Ask about any specific recognition or completion documentation before enrolling.' },
  { group: 'For organisations', q: 'Can training be customised for our team?', a: 'Corporate training can be scoped around your employees’ roles, existing capabilities and organisational requirements. Start by describing the team and the tasks you want the learning to support.' },
  { group: 'For organisations', q: 'Can we discuss onsite or online delivery?', a: 'Yes. Include your location, preferred format and team size when requesting a proposal. Availability and delivery arrangements are confirmed during scoping.' },
  { group: 'For organisations', q: 'How are organisational projects priced?', a: 'A quotation is based on the agreed objectives, scope, deliverables and delivery requirements. Any additional work should be agreed before it proceeds.' },
  { group: 'For organisations', q: 'What is the difference between training and education solutions?', a: 'Corporate training focuses on teaching your people. Education solutions focus on designing the curriculum, content, assessments or resources that support a learning program.' },
  { group: 'Pricing and enrolment', q: 'How do I book or pay for a program?', a: 'Start with a program enquiry. Confirm availability, the full fee, payment arrangements and the applicable terms before accepting a booking. This website does not provide online checkout.' },
  { group: 'Pricing and enrolment', q: 'What if I need to cancel or request a refund?', a: 'The arrangements for your booking should set out cancellation, rescheduling and change-of-mind conditions. Rights that apply under Australian Consumer Law are preserved. See the Refund & Cancellation Policy for an overview.' },
  { group: 'Academy', q: 'Is the Digital Skills Academy available yet?', a: 'The Academy is coming soon. It is being developed as an ongoing learning offering. Membership features, availability and pricing will be announced when confirmed.' },
];


export const corporateTopics = [
  ['AI literacy', 'A shared understanding of AI capabilities, limitations and responsible use.'],
  ['AI at work', 'Practical applications in writing, research and everyday professional tasks.'],
  ['AI for managers', 'Evaluating opportunities, supporting adoption and maintaining oversight.'],
  ['Data capability', 'Stronger habits for analysing information and communicating findings.'],
  ['Workflow automation', 'Identifying suitable processes and building in appropriate checks.'],
  ['Custom learning programs', 'A learning scope shaped around your roles, tools and objectives.'],
];

export const solutionServices = [
  ['Curriculum development', 'A coherent learning pathway with clear objectives and a considered sequence.'],
  ['Learning content', 'Presentations, workbooks and digital resources that make complex ideas understandable.'],
  ['Assessment development', 'Knowledge checks and activities aligned with the intended learning outcomes.'],
  ['Training program design', 'The structure, activities and resources that bring a learning program together.'],
  ['Content licensing', 'Discuss licensing arrangements for suitable learning materials where available.'],
  ['Custom education projects', 'A defined scope for learning needs that extend beyond a standard program.'],
];
