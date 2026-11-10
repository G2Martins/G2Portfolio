// Single source of truth for site copy. Imported by the Angular app AND by
// scripts/seo.ts (Node type-stripping) — keep this file import-free.

export type Lang = 'pt' | 'en';
export type L = Record<Lang, string>;
export type LL = Record<Lang, string[]>;

export const SITE_URL = 'https://g2portfolio.grovicdata.com';
export const CV_PATH = '/cv/gustavo-martins-gripaldi-cv.pdf';
export const CV_PATH_EN = '/cv/gustavo-martins-gripaldi-cv-en.pdf';
export const cvPath = (lang: Lang) => (lang === 'pt' ? CV_PATH : CV_PATH_EN);
export const OG_IMAGE = '/og/gustavo-martins-gripaldi.png';
export const PHOTO = '/img/gustavo-martins-gripaldi'; // -480.webp / -960.webp (16:9) + .jpg (square, 600px)

export const homePath = (lang: Lang) => (lang === 'pt' ? '/' : '/en/');
export const projectPath = (lang: Lang, slug: string) =>
  lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`;

export const PERSON = {
  name: 'Gustavo Martins Gripaldi',
  givenName: 'Gustavo',
  familyName: 'Martins Gripaldi',
  alternateName: ['Gustavo Gripaldi', 'Gustavo Martins', 'G2Martins'],
  email: 'gustavogripaldi@outlook.com',
  phone: '+55 61 99500-8118',
  whatsapp: 'https://wa.me/5561995008118',
  linkedin: 'https://www.linkedin.com/in/g2martins/',
  github: 'https://github.com/G2Martins',
  city: 'Brasília',
  region: 'DF',
  country: 'BR',
  jobTitle: { pt: 'Engenheiro de Dados & Desenvolvedor Full Stack', en: 'Data Engineer & Full Stack Developer' } as L,
};

export const GROVIC = {
  name: 'Grovic Data',
  url: 'https://grovicdata.com',
  tagline: { pt: 'Inteligência Operacional Corporativa', en: 'Corporate Operational Intelligence' } as L,
  about: {
    pt: 'Empresa brasileira de inteligência operacional: produtos de dados, IA e automação para nichos como saúde, serviços, restaurantes e imobiliárias, com conformidade à LGPD. Cofundei a Grovic Data a partir do ProntuSMART, criado para atender uma cliente real, e hoje desenvolvo os produtos e a infraestrutura da empresa.',
    en: 'Brazilian operational-intelligence company: data, AI and automation products for niches such as healthcare, services, restaurants and real estate, LGPD-compliant. I co-founded Grovic Data out of ProntuSMART, built for a real client, and today I build the company’s products and infrastructure.',
  } as L,
};

export const G2BOOST = {
  version: '0.9.3',
  date: '2026-10-28',
  releases: 'https://github.com/G2Martins/G2-Boost/releases',
  latest: 'https://github.com/G2Martins/G2-Boost/releases/latest',
  assets: [
    { id: 'setup', file: 'G2-Boost_0.9.3_x64-setup.exe', size: '6,8 MB', label: { pt: 'Instalador (.exe)', en: 'Installer (.exe)' } as L },
    { id: 'msi-pt', file: 'G2-Boost_0.9.3_x64_pt-BR.msi', size: '8,8 MB', label: { pt: 'MSI · Português', en: 'MSI · Portuguese' } as L },
    { id: 'msi-en', file: 'G2-Boost_0.9.3_x64_en-US.msi', size: '8,8 MB', label: { pt: 'MSI · Inglês', en: 'MSI · English' } as L },
    { id: 'zip', file: 'G2-Boost_0.9.3_x64-portable.zip', size: '6,7 MB', label: { pt: 'Portátil (.zip)', en: 'Portable (.zip)' } as L },
  ],
  sums: 'SHA256SUMS.txt',
};
export const g2boostAsset = (file: string) => `https://github.com/G2Martins/G2-Boost/releases/download/v${G2BOOST.version}/${file}`;

export const SEO = {
  home: {
    title: {
      pt: 'Gustavo Martins Gripaldi | Engenheiro de Dados e Full Stack',
      en: 'Gustavo Martins Gripaldi | Data Engineer & Full Stack Developer',
    } as L,
    description: {
      pt: 'Gustavo Martins Gripaldi, engenheiro de dados e dev full stack em Brasília: Snowflake, Fabric, Power BI, Python e Angular. Cofundador da Grovic Data.',
      en: 'Gustavo Martins Gripaldi, data engineer and full stack developer in Brasília, Brazil: Snowflake, Fabric, Power BI, Python, Angular. Co-founder of Grovic Data.',
    } as L,
  },
};

export const UI = {
  nav: {
    release: { pt: 'G2 Boost', en: 'G2 Boost' },
    grovic: { pt: 'Grovic Data', en: 'Grovic Data' },
    projects: { pt: 'Projetos', en: 'Projects' },
    experience: { pt: 'Experiência', en: 'Experience' },
    contact: { pt: 'Contato', en: 'Contact' },
    cv: { pt: 'Baixar CV', en: 'Download CV' },
    menu: { pt: 'Abrir menu', en: 'Open menu' },
    close: { pt: 'Fechar menu', en: 'Close menu' },
    theme: { pt: 'Alternar tema claro/escuro', en: 'Toggle light/dark theme' },
    lang: { pt: 'Read in English', en: 'Ler em português' },
    skip: { pt: 'Pular para o conteúdo', en: 'Skip to content' },
  },
  hero: {
    eyebrow: { pt: 'Engenharia de Dados & Full Stack · Brasília, DF', en: 'Data Engineering & Full Stack · Brasília, Brazil' },
    lead: {
      pt: 'Engenheiro de dados e desenvolvedor full stack. Construo lakehouses no Microsoft Fabric, pipelines ETL que caem de 4 horas para 1, dashboards em Power BI e os produtos que rodam em cima disso. Cofundador da Grovic Data.',
      en: 'Data engineer and full stack developer. I build Microsoft Fabric lakehouses, ETL pipelines cut from 4 hours to 1, Power BI dashboards and the products that run on top of them. Co-founder of Grovic Data.',
    },
    ctaProjects: { pt: 'Ver projetos', en: 'See projects' },
    ctaContact: { pt: 'Falar comigo', en: 'Get in touch' },
    now: { pt: 'Agora', en: 'Now' },
    chartTitle: { pt: 'Carga ETL · SAP ECC → Lakehouse', en: 'ETL load · SAP ECC → Lakehouse' },
    before: { pt: 'antes', en: 'before' },
    after: { pt: 'depois', en: 'after' },
    chartNote: { pt: '−75% no tempo de processamento', en: '−75% processing time' },
  },
  stats: [
    { value: { pt: '3+', en: '3+' }, label: { pt: 'anos com dados', en: 'years in data' } },
    { value: { pt: 'R$ 1 mi', en: 'R$ 1M' }, label: { pt: 'economizados na PGFN', en: 'saved at PGFN (BRL)' } },
    { value: { pt: '4h → 1h', en: '4h → 1h' }, label: { pt: 'cargas ETL otimizadas', en: 'ETL loads optimized' } },
    { value: { pt: '20+', en: '20+' }, label: { pt: 'projetos publicados', en: 'shipped projects' } },
  ],
  now: [
    { org: 'Brasal Participações', role: { pt: 'Assistente de Engenharia de Dados', en: 'Data Engineering Assistant' }, meta: 'Snowflake · SQL · PySpark · Power BI' },
    { org: 'Grovic Data', role: { pt: 'Cofundador', en: 'Co-founder' }, meta: 'Valerium · ProntuSMART' },
    { org: 'G2 Boost', role: { pt: 'Release v0.9.3', en: 'Release v0.9.3' }, meta: 'Windows · Rust + React' },
  ],
  release: {
    eyebrow: { pt: '01 · Lançamento', en: '01 · Release' },
    title: { pt: 'G2 Boost: desempenho para jogos no Windows, sem truque.', en: 'G2 Boost: Windows gaming performance, no tricks.' },
    lead: {
      pt: 'App desktop que junta num só lugar o que normalmente exige várias ferramentas: diagnóstico de hardware, limpeza, debloat, rede, jogos e ajustes de desempenho. Tudo com prévia, backup e um clique para desfazer.',
      en: 'A desktop app that brings together what usually takes several tools: hardware diagnostics, cleanup, debloat, networking, games and performance tweaks. All with preview, backup and one-click undo.',
    },
    download: { pt: 'Baixar para Windows', en: 'Download for Windows' },
    other: { pt: 'Outros formatos', en: 'Other formats' },
    checksums: { pt: 'Checksums SHA-256', en: 'SHA-256 checksums' },
    notes: { pt: 'Notas da versão', en: 'Release notes' },
    details: { pt: 'Ver detalhes do projeto', en: 'Project details' },
    req: { pt: 'Windows 10/11 · x64 · PT-BR e EN', en: 'Windows 10/11 · x64 · PT-BR & EN' },
    released: { pt: 'Publicado em 28 out 2026', en: 'Released Oct 28, 2026' },
  },
  grovic: {
    eyebrow: { pt: '02 · Grovic Data', en: '02 · Grovic Data' },
    title: { pt: 'Produtos que cofundei e mantenho em produção.', en: 'Products I co-founded and run in production.' },
    visit: { pt: 'Visitar grovicdata.com', en: 'Visit grovicdata.com' },
    live: { pt: 'No ar', en: 'Live' },
  },
  projects: {
    eyebrow: { pt: '03 · Projetos', en: '03 · Projects' },
    title: { pt: 'Dados, IA, web e hardware: do notebook ao deploy.', en: 'Data, AI, web and hardware: from notebook to deploy.' },
    all: { pt: 'Todos', en: 'All' },
    open: { pt: 'Ver projeto', en: 'View project' },
    site: { pt: 'Site', en: 'Website' },
    code: { pt: 'Código', en: 'Code' },
  },
  experience: {
    eyebrow: { pt: '04 · Experiência', en: '04 · Experience' },
    title: { pt: 'Impacto medido em horas, reais e chamados.', en: 'Impact measured in hours, money and tickets.' },
  },
  about: {
    eyebrow: { pt: '05 · Sobre & competências', en: '05 · About & skills' },
    title: { pt: 'Entre o dado bruto e o produto final.', en: 'Between raw data and the finished product.' },
    body: {
      pt: [
        'Sou Gustavo Martins Gripaldi, engenheiro de dados e desenvolvedor full stack em Brasília. Estudo Engenharia da Computação no IESB e atuo como Assistente de Engenharia de Dados na Brasal, onde arquiteto lakehouses no Microsoft Fabric sob a arquitetura Medallion e automatizo cargas de ERP SAP.',
        'Antes dos dados, construí software: na PGFN entreguei uma plataforma de repositório digital em 8 meses, gerando R$ 1 milhão de economia. Hoje junto os dois mundos: pipelines, modelagem dimensional e Power BI de um lado; Angular, Python, Java e apps desktop do outro.',
      ],
      en: [
        'I’m Gustavo Martins Gripaldi, a data engineer and full stack developer based in Brasília, Brazil. I study Computer Engineering at IESB and work as a Data Engineering Assistant at Brasal, where I architect Microsoft Fabric lakehouses following the Medallion architecture and automate SAP ERP loads.',
        'Before data, I built software: at PGFN (Brazil’s National Treasury Attorney’s Office) I shipped a digital repository platform in 8 months, saving R$ 1 million. Today I combine both worlds: pipelines, dimensional modeling and Power BI on one side; Angular, Python, Java and desktop apps on the other.',
      ],
    },
    languages: { pt: 'Idiomas', en: 'Languages' },
  },
  awards: { pt: 'Reconhecimentos', en: 'Recognition' },
  media: {
    title: { pt: 'Publicações e na mídia', en: 'Writing & media' },
    open: { pt: 'Abrir', en: 'Open' },
  },
  education: {
    eyebrow: { pt: '06 · Formação', en: '06 · Education' },
    title: { pt: 'Formação & certificações', en: 'Education & certifications' },
    verify: { pt: 'Verificar', en: 'Verify' },
  },
  contact: {
    eyebrow: { pt: '07 · Contato', en: '07 · Contact' },
    title: { pt: 'Vamos conversar.', en: 'Let’s talk.' },
    lead: {
      pt: 'Aberto a oportunidades em engenharia de dados, BI e desenvolvimento full stack, presencial em Brasília ou remoto.',
      en: 'Open to data engineering, BI and full stack roles, on-site in Brasília or remote.',
    },
    copy: { pt: 'Copiar e-mail', en: 'Copy e-mail' },
    copied: { pt: 'E-mail copiado', en: 'E-mail copied' },
    open: { pt: 'Aberto a vagas', en: 'Open to work' },
    wa: {
      pt: 'Olá, Gustavo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
      en: 'Hi Gustavo! I saw your portfolio and would like to talk about an opportunity.',
    },
  },
  footer: {
    rights: { pt: 'Todos os direitos reservados.', en: 'All rights reserved.' },
  },
  project: {
    back: { pt: 'Todos os projetos', en: 'All projects' },
    home: { pt: 'Início', en: 'Home' },
    year: { pt: 'Ano', en: 'Year' },
    role: { pt: 'Papel', en: 'Role' },
    category: { pt: 'Área', en: 'Area' },
    stack: { pt: 'Stack', en: 'Stack' },
    highlights: { pt: 'Destaques', en: 'Highlights' },
    about: { pt: 'Sobre o projeto', en: 'About the project' },
    by: { pt: 'Projeto de', en: 'A project by' },
    prev: { pt: 'Anterior', en: 'Previous' },
    next: { pt: 'Próximo', en: 'Next' },
    private: { pt: 'Código-fonte privado', en: 'Private source code' },
    video: { pt: 'Vídeo demo', en: 'Demo video' },
  },
};

export const EXPERIENCE = [
  {
    org: 'Grovic Data',
    logo: '/img/logos/grovic.webp',
    url: 'https://grovicdata.com',
    role: { pt: 'Cofundador & Engenheiro de Software', en: 'Co-founder & Software Engineer' },
    period: { pt: '2026 – Atual', en: '2026 – Present' },
    place: { pt: 'Remoto', en: 'Remote' },
    bullets: {
      pt: [
        'Cofundei a Grovic Data, empresa de inteligência operacional (dados, IA e automação) com conformidade à LGPD.',
        'Construí o ProntuSMART, prontuário eletrônico em produção para a Clínica Escola de Fisioterapia da UCB.',
        'Desenvolvo o Valerium, plataforma white-label multi-tenant de gestão empresarial (finanças, CRM, agendamento, contratos e IA).',
      ],
      en: [
        'Co-founded Grovic Data, an operational-intelligence company (data, AI and automation), LGPD-compliant.',
        'Built ProntuSMART, an electronic health record in production for UCB’s physiotherapy teaching clinic.',
        'Building Valerium, a multi-tenant white-label business management platform (finance, CRM, scheduling, contracts and AI).',
      ],
    },
    stack: ['Next.js', 'Angular', 'FastAPI', 'Supabase', 'MongoDB'],
  },
  {
    org: 'Brasal Participações',
    logo: '/img/logos/brasal.webp',
    role: { pt: 'Assistente de Engenharia de Dados', en: 'Data Engineering Assistant' },
    period: { pt: 'Set 2025 – Atual', en: 'Sep 2025 – Present' },
    place: { pt: 'Brasília, DF', en: 'Brasília, Brazil' },
    bullets: {
      pt: [
        'Otimizei pipelines no Pentaho Data Integration e rotinas em Python sobre APIs do ERP SAP ECC, reduzindo cargas pesadas de 4 horas para 1 hora.',
        'Arquitetei lakehouses no Microsoft Fabric e Azure Synapse (Medallion + Star Schema), integrando SQL Server, Oracle, MySQL e APIs no OneLake.',
        'Automatizei a ingestão dos relatórios da plataforma SULTS no Power BI: 100% da exportação manual eliminada e +40% de agilidade na decisão.',
        'Estruturei painéis de performance comercial com DAX avançado: recebimentos futuros, carteira líquida e comissões em tempo real.',
        'Reduzi em 50% os chamados atrasados e a reabertura de ordens de serviço com governança de demandas via Jira e Agidesk; defini diretrizes de governança de dados (LGPD, DataOps, Data Quality, Data Owners).',
      ],
      en: [
        'Optimized Pentaho Data Integration pipelines and Python routines over SAP ECC ERP APIs, cutting heavy loads from 4 hours to 1 hour.',
        'Architected Microsoft Fabric and Azure Synapse lakehouses (Medallion + Star Schema), integrating SQL Server, Oracle, MySQL and APIs into OneLake.',
        'Automated SULTS report ingestion into Power BI: 100% of weekly manual exports eliminated, +40% decision agility.',
        'Built sales-performance dashboards with advanced DAX: future receivables, net portfolio and commission rules in real time.',
        'Cut overdue tickets and work-order reopen rate by 50% through demand governance in Jira and Agidesk; set data-governance guidelines (LGPD, DataOps, Data Quality, Data Owners).',
      ],
    },
    stack: ['Snowflake', 'SQL', 'PySpark', 'Microsoft Fabric', 'Pentaho', 'Azure Synapse', 'Power BI', 'DAX', 'SAP ECC'],
    awards: [
      {
        img: '/img/awards/brasal-agente-top-2026',
        title: { pt: 'Agente Top · Semana do Parceiro 2026', en: 'Top Agent · Partner Week 2026' },
        detail: {
          pt: 'Destaque da categoria: mais de 100 chamados atendidos, 100% de satisfação dos clientes e todos os prazos cumpridos.',
          en: 'Category winner: 100+ tickets resolved, 100% customer satisfaction and every deadline met.',
        },
      },
      {
        img: '/img/awards/brasal-destaque-performance-marco',
        title: { pt: 'Destaque do Mês em Performance (março de 2026)', en: 'Employee of the Month, Performance (March 2026)' },
        detail: {
          pt: 'Entregas de dados, documentação de governança, treinamento de D&A, People Analytics no Fabric e migração do ambiente de dados para a nuvem.',
          en: 'Data deliveries, data-governance documentation, D&A training, People Analytics on Fabric and the move of the data platform to the cloud.',
        },
      },
      {
        img: '/img/awards/brasal-destaque-clima-novembro',
        title: { pt: 'Destaque do Mês em Clima (novembro de 2025)', en: 'Employee of the Month, Team Climate (November 2025)' },
        detail: {
          pt: 'Reconhecido pelo espírito colaborativo, pela comunicação entre as áreas e pelo apoio ao time.',
          en: 'Recognized for collaboration, cross-team communication and supporting the team.',
        },
      },
    ],
  },
  {
    org: 'Brasal Refrigerantes',
    logo: '/img/logos/brasal.webp',
    role: { pt: 'Estagiário em Ciência de Dados', en: 'Data Science Intern' },
    period: { pt: 'Abr 2025 – Set 2025', en: 'Apr 2025 – Sep 2025' },
    place: { pt: 'Brasília, DF', en: 'Brasília, Brazil' },
    bullets: {
      pt: [
        'Automatizei em Python a migração do legado Rhevolution para a plataforma LG (Projeto Gente 360°): +136 mil linhas de exames e 20 mil atestados.',
        'Implementei fluxo Microsoft Forms → Lists com Power Automate para a Avaliação Psicossocial (NR-1), com regras de negócio e alertas por pontuação.',
        'Criei o painel “BI Ações” no Power BI, reduzindo em mais de 70% o tempo de levantamento de informações.',
        'Sistematizei o monitoramento de despesas operacionais no modelo “BI Custo Fixo”.',
      ],
      en: [
        'Automated in Python the migration from the legacy Rhevolution system to the LG platform (Gente 360° project): 136k+ exam rows and 20k medical certificates.',
        'Built a Microsoft Forms → Lists flow with Power Automate for the psychosocial assessment (NR-1 compliance), with business rules and score-based alerts.',
        'Created the “BI Ações” Power BI dashboard, cutting information-gathering time by over 70%.',
        'Systematized operating-expense monitoring in the “BI Custo Fixo” data model.',
      ],
    },
    stack: ['Python', 'Power BI', 'Power Automate', 'SQL', 'DAX'],
  },
  {
    org: 'Procuradoria-Geral da Fazenda Nacional (PGFN)',
    logo: '/img/logos/pgfn.webp',
    role: { pt: 'Estagiário de TI (Desenvolvimento Full Stack)', en: 'IT Intern (Full Stack Development)' },
    period: { pt: 'Jan 2024 – Abr 2025', en: 'Jan 2024 – Apr 2025' },
    place: { pt: 'Brasília, DF', en: 'Brasília, Brazil' },
    bullets: {
      pt: [
        'Customizei e implantei do zero a plataforma de repositório digital DSpace: entregue em 8 meses (consultorias estimavam 1,5 ano), economia direta de R$ 1 milhão.',
        'Arquitetei backend em Java, Spring Boot, Maven e Tomcat com PostgreSQL e indexação Apache Solr, extraindo metadados de PDFs automaticamente.',
        'Desenvolvi a interface em Angular, TypeScript e Tailwind CSS com busca por taxonomia e filtros parametrizados.',
        'Reduzi em 85% o tempo de transferência manual de pareceres jurídicos para planilhas; conteinerizei com Docker e fiz deploy em Linux.',
      ],
      en: [
        'Customized and deployed the DSpace digital repository platform from scratch: delivered in 8 months (consultancies estimated 1.5 years), saving R$ 1 million.',
        'Architected the backend in Java, Spring Boot, Maven and Tomcat with PostgreSQL and Apache Solr indexing, auto-extracting PDF metadata.',
        'Built the Angular, TypeScript and Tailwind CSS interface with taxonomy search and parameterized metadata filters.',
        'Cut manual transfer of legal opinions into spreadsheets by 85%; containerized with Docker and deployed on Linux.',
      ],
    },
    stack: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Apache Solr', 'Docker'],
  },
  {
    org: 'Formatech Reformas',
    logo: '',
    role: { pt: 'Estagiário de Marketing', en: 'Marketing Intern' },
    period: { pt: 'Jan 2021 – Dez 2022', en: 'Jan 2021 – Dec 2022' },
    place: { pt: 'João Pessoa, PB', en: 'João Pessoa, Brazil' },
    bullets: {
      pt: ['Gestão de redes sociais e produção gráfica/audiovisual (Canva, Photoshop, Premiere Pro); apoio ao CEO em faturamento e atendimento.'],
      en: ['Social media management and graphic/video production (Canva, Photoshop, Premiere Pro); supported the CEO with invoicing and customer service.'],
    },
    stack: [],
  },
];

export const SKILLS = [
  { label: { pt: 'Engenharia de Dados & BI', en: 'Data Engineering & BI' }, items: ['Snowflake', 'Microsoft Fabric', 'PySpark', 'Pentaho (PDI)', 'Azure Data Lake', 'Azure Synapse', 'OneLake', 'ETL / ELT', 'Star Schema', 'Medallion', 'Lakehouse', 'Data Warehouse', 'Data Quality', 'DataOps'] },
  { label: { pt: 'Visualização', en: 'Visualization' }, items: ['Power BI', 'DAX avançado', 'Dashboards', 'Storytelling de dados'] },
  { label: { pt: 'Linguagens & Backend', en: 'Languages & Backend' }, items: ['Python', 'Pandas', 'FastAPI', 'SQL', 'Java', 'Spring Boot', 'C / C++', 'APIs REST'] },
  { label: { pt: 'Bancos de dados', en: 'Databases' }, items: ['PostgreSQL', 'SQL Server', 'Oracle', 'MySQL', 'MongoDB', 'Apache Solr', 'Supabase'] },
  { label: { pt: 'Full Stack', en: 'Full Stack' }, items: ['Angular', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
  { label: { pt: 'DevOps & Ferramentas', en: 'DevOps & Tools' }, items: ['Git', 'GitLab', 'Docker', 'Linux', 'Terraform', 'AWS', 'Power Automate', 'Jira', 'SAP ECC'] },
];

export const LANGUAGES = [
  { name: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
  { name: { pt: 'Inglês', en: 'English' }, level: { pt: 'Intermediário (profissional)', en: 'Intermediate (professional working)' } },
  { name: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'Básico', en: 'Basic' } },
];

export const EDUCATION = {
  degree: { pt: 'Bacharelado em Engenharia da Computação', en: 'B.Sc. in Computer Engineering' },
  school: 'Instituto de Educação Superior de Brasília (IESB)',
  logo: '/img/logos/iesb.webp',
  url: 'https://www.iesb.br',
  period: { pt: 'Mar 2023 – Dez 2026 (em andamento)', en: 'Mar 2023 – Dec 2026 (in progress)' },
  note: { pt: 'Monitor de Algoritmos e Programação de Computadores (APC I).', en: 'Teaching assistant for Algorithms and Computer Programming (APC I).' },
};

/** Writing and third-party mentions (links only, no embeds: LinkedIn widgets are heavy). */
export const MEDIA = [
  {
    kind: { pt: 'Artigo', en: 'Article' } as L,
    title: { pt: 'Motivos para escolher o Microsoft Fabric como sua ferramenta de ETL em 2026', en: 'Why choose Microsoft Fabric as your ETL tool in 2026 (in Portuguese)' } as L,
    source: 'LinkedIn',
    date: { pt: 'jan 2026', en: 'Jan 2026' } as L,
    url: 'https://www.linkedin.com/pulse/motivos-para-escolher-o-microsoft-fabric-como-sua-de-gustavo-l8ckf/',
  },
  {
    kind: { pt: 'Na mídia', en: 'In the media' } as L,
    title: { pt: 'Keyrus e Brasal iniciam projeto de dados e IA no Snowflake (SnowDay Brasília)', en: 'Keyrus and Brasal kick off a data and AI project on Snowflake (SnowDay Brasília)' } as L,
    source: 'Keyrus Brasil · LinkedIn',
    date: { pt: 'out 2026', en: 'Oct 2026' } as L,
    url: 'https://www.linkedin.com/posts/keyrusbrasil-brasal-snowflake-ugcPost-7519040018246701056-Wqxd/',
  },
];

export const CERTS = [
  { name: 'AI Skills Fest 2026', issuer: 'Microsoft', year: '2026', url: 'https://www.credly.com/badges/8001e6ec-67ca-427e-bb84-cf1097341025/linked_in_profile' },
  { name: 'SAP Analytics Cloud: Data Connections & Performance', issuer: 'SAP', year: '2026', url: 'https://badger.learning.sap.com/verify/xytih-luvup-nipyd-negoc-fofic' },
  { name: 'Ask Questions to Make Data-Driven Decisions', issuer: 'Google', year: '2026', url: 'https://www.coursera.org/account/accomplishments/verify/4MUK6I6H8OF6' },
  { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google', year: '2026', url: 'https://www.coursera.org/account/accomplishments/verify/UW3IAVYE62WR' },
  { name: 'Formação Python Fundamentals', issuer: 'DIO', year: '2026', url: 'https://www.dio.me/certificate/1HLDDOYX/share' },
  { name: 'Dynamics 365 CRM & Power Platform', issuer: 'Smart Consulting', year: '2025', url: 'https://www.linkedin.com/in/g2martins/details/certifications/' },
  { name: 'Formação Angular Developer', issuer: 'DIO', year: '2024', url: 'https://www.dio.me/certificate/W9DVXIFM/share' },
  { name: 'Santander Bootcamp: Fullstack Java + Angular', issuer: 'DIO', year: '2024', url: 'https://www.dio.me/certificate/ZLR6VNRL/share' },
  { name: 'PostgreSQL: Conceitos e Melhores Práticas', issuer: 'DIO', year: '2024', url: 'https://www.dio.me/certificate/5B1FE78F/share' },
];
