// Project catalogue — shared by the Angular app and scripts/seo.ts. Keep import-free
// (type-only imports are erased by Node's type stripping).
import type { L, LL } from './content.ts';

export type Category = 'data' | 'web' | 'systems' | 'cloud';

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: Category;
  group: 'release' | 'grovic' | 'main';
  summary: L;
  description: LL;
  highlights: LL;
  stack: string[];
  role: L;
  links: { site?: string; repo?: string; download?: string; video?: string; more?: { label: string; url: string }[] };
  images: string[];
}

export const CATEGORIES: Record<Category, L> = {
  data: { pt: 'Dados & IA', en: 'Data & AI' },
  web: { pt: 'Full Stack', en: 'Full Stack' },
  systems: { pt: 'Sistemas, IoT & Desktop', en: 'Systems, IoT & Desktop' },
  cloud: { pt: 'Cloud & Infra', en: 'Cloud & Infra' },
};

const solo: L = { pt: 'Autor (design, backend e frontend)', en: 'Author (design, backend and frontend)' };
const team: L = { pt: 'Desenvolvedor em equipe acadêmica', en: 'Developer in an academic team' };
const study: L = { pt: 'Projeto de estudo', en: 'Study project' };

export const PROJECTS: Project[] = [
  {
    slug: 'g2-boost',
    title: 'G2 Boost',
    year: '2026',
    category: 'systems',
    group: 'release',
    summary: {
      pt: 'Otimizador de desempenho para jogos no Windows: diagnóstico, debloat, rede e 62 ajustes reversíveis num só app.',
      en: 'Windows gaming performance optimizer: diagnostics, debloat, networking and 62 reversible tweaks in one app.',
    },
    description: {
      pt: [
        'O G2 Boost junta num só aplicativo o que normalmente exige várias ferramentas: diagnóstico do hardware, limpeza do Windows, debloat, analisador de disco, rede, jogos e ajustes de desempenho. Tudo com prévia, backup e um clique para desfazer, sem telemetria e sem driver de kernel.',
        'É um app desktop nativo em Rust (Tauri 2) com interface em React 19, distribuído com instaladores em português e inglês e checagem de atualização pelo GitHub. Também expõe um servidor MCP com 60 ferramentas, para que assistentes como Claude Desktop e Claude Code operem o app.',
      ],
      en: [
        'G2 Boost brings together what usually takes several tools: hardware diagnostics, Windows cleanup, debloat, disk analyzer, networking, games and performance tweaks. Everything has a preview, a backup and one-click undo, with no telemetry and no kernel driver.',
        'It is a native desktop app in Rust (Tauri 2) with a React 19 interface, shipped with Portuguese and English installers and update checks through GitHub. It also exposes an MCP server with 60 tools so assistants such as Claude Desktop and Claude Code can drive the app.',
      ],
    },
    highlights: {
      pt: [
        '62 ajustes de desempenho reversíveis, perfis e desfazer em um clique',
        'Overlay in-game (FPS e 1% low) sem injeção e biblioteca com “Preparar e jogar”',
        'Check-up do PC com ~20 medições, árvore de sensores e exportação CSV',
        'Debloat em 3 níveis, limpeza com treemap de disco e instalador de apps via winget',
        'Ferramentas de rede: bufferbloat, MTR e DNS; ajustes de GPU NVIDIA e AMD',
        'Assistente de IA “Luli” e servidor MCP com 60 ferramentas',
      ],
      en: [
        '62 reversible performance tweaks, profiles and one-click undo',
        'Injection-free in-game overlay (FPS and 1% low) and a “Prepare & play” game library',
        'PC check-up with ~20 measurements, sensor tree and CSV export',
        '3-level debloat, cleanup with disk treemap and winget app installer',
        'Network tools: bufferbloat, MTR and DNS; NVIDIA and AMD GPU settings',
        '“Luli” AI assistant and an MCP server with 60 tools',
      ],
    },
    stack: ['Rust', 'Tauri 2', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'MCP'],
    role: { pt: 'Criador (produto, Rust, UI e releases)', en: 'Creator (product, Rust, UI and releases)' },
    links: { download: 'https://github.com/G2Martins/G2-Boost/releases/latest', repo: 'https://github.com/G2Martins/G2-Boost' },
    images: ['g2-boost', 'g2-boost-2', 'g2-boost-3', 'g2-boost-4'],
  },
  {
    slug: 'valerium',
    title: 'Valerium',
    year: '2026',
    category: 'web',
    group: 'grovic',
    summary: {
      pt: 'Plataforma white-label multi-tenant de gestão empresarial: finanças, CRM, agendamento, contratos e IA.',
      en: 'Multi-tenant white-label business management platform: finance, CRM, scheduling, contracts and AI.',
    },
    description: {
      pt: [
        'Produto carro-chefe da Grovic Data. O Valerium centraliza a operação de pequenas e médias empresas (finanças, CRM, agendamento, contratos e conectores) com uma camada de IA por cima, e é entregue como white-label para nichos como serviços de limpeza, saúde, restaurantes e imobiliárias.',
        'Arquitetura em monorepo (Bun + Turborepo) com Next.js, API em Hono + tRPC, Drizzle sobre Supabase e jobs assíncronos com Trigger.dev, em deploy próprio com ambientes de produção e beta.',
      ],
      en: [
        'Grovic Data’s flagship product. Valerium centralizes small and mid-size business operations (finance, CRM, scheduling, contracts and connectors) with an AI layer on top, delivered white-label for niches like cleaning services, healthcare, restaurants and real estate.',
        'Monorepo architecture (Bun + Turborepo) with Next.js, a Hono + tRPC API, Drizzle over Supabase and background jobs on Trigger.dev, self-deployed with production and beta environments.',
      ],
    },
    highlights: {
      pt: ['Multi-tenant com marca própria por cliente (white-label)', 'Módulos de finanças, CRM, agendamento e contratos', 'Assistente de IA integrado aos dados do negócio', 'Landing de marketing bilíngue com design system próprio'],
      en: ['Multi-tenant with per-client branding (white-label)', 'Finance, CRM, scheduling and contracts modules', 'AI assistant wired to business data', 'Bilingual marketing landing with its own design system'],
    },
    stack: ['Next.js', 'TypeScript', 'Hono', 'tRPC', 'Drizzle', 'Supabase', 'Trigger.dev', 'Turborepo'],
    role: { pt: 'Cofundador (engenharia full stack)', en: 'Co-founder (full stack engineering)' },
    links: { site: 'https://valerium.grovicdata.com', more: [{ label: 'grovicdata.com/valerium', url: 'https://grovicdata.com/valerium.html' }] },
    images: ['valerium'],
  },
  {
    slug: 'prontusmart',
    title: 'ProntuSMART',
    year: '2026',
    category: 'web',
    group: 'grovic',
    summary: {
      pt: 'Prontuário eletrônico em produção para a Clínica Escola de Fisioterapia da UCB, com metas SMART e RBAC.',
      en: 'Electronic health record in production for UCB’s physiotherapy teaching clinic, with SMART goals and RBAC.',
    },
    description: {
      pt: [
        'Primeiro produto da Grovic Data: nasceu para atender uma cliente real, a Clínica Escola de Fisioterapia da Universidade Católica de Brasília. Gerencia o fluxo clínico de pacientes com metas SMART, acompanhamento de evolução e dashboards analíticos.',
        'Controle de acesso por perfil (administrador, docente e estagiário), autenticação JWT e backend FastAPI sobre MongoDB, com frontend Angular + Tailwind CSS.',
      ],
      en: [
        'Grovic Data’s first product, born to serve a real client: the physiotherapy teaching clinic at the Catholic University of Brasília (UCB). It manages the clinical patient flow with SMART goals, progress tracking and analytics dashboards.',
        'Role-based access (admin, professor, intern), JWT authentication and a FastAPI backend on MongoDB, with an Angular + Tailwind CSS frontend.',
      ],
    },
    highlights: {
      pt: ['Em produção para clínica escola real', 'RBAC: administrador, docente e estagiário', 'Metas SMART e rastreamento de evolução do paciente', 'Dashboards de progresso por meta'],
      en: ['In production for a real teaching clinic', 'RBAC: admin, professor and intern', 'SMART goals and patient progress tracking', 'Per-goal progress dashboards'],
    },
    stack: ['Angular', 'Tailwind CSS', 'FastAPI', 'Python', 'MongoDB', 'JWT'],
    role: { pt: 'Cofundador (full stack)', en: 'Co-founder (full stack)' },
    links: { site: 'https://prontusmart.grovicdata.com', repo: 'https://github.com/G2Martins/ProntuSmart', more: [{ label: 'grovicdata.com/prontusmart', url: 'https://grovicdata.com/prontusmart.html' }] },
    images: ['prontusmart'],
  },
  {
    slug: 'grovic-data',
    title: 'grovicdata.com',
    year: '2026',
    category: 'web',
    group: 'grovic',
    summary: {
      pt: 'Site institucional bilíngue da Grovic Data: rápido, sem build, com páginas de produto e i18n PT/EN.',
      en: 'Grovic Data’s bilingual corporate site: fast, build-free, with product pages and PT/EN i18n.',
    },
    description: {
      pt: [
        'Site institucional da Grovic Data, empresa de inteligência operacional corporativa. Apresenta a empresa, a história e os produtos (Valerium e ProntuSMART) em português e inglês.',
        'Escrito em HTML, CSS e JavaScript puros, sem etapa de build, com deploy contínuo via Git na Hostinger.',
      ],
      en: [
        'Corporate website of Grovic Data, a corporate operational-intelligence company. It presents the company, its story and its products (Valerium and ProntuSMART) in Portuguese and English.',
        'Written in plain HTML, CSS and JavaScript with no build step, continuously deployed via Git on Hostinger.',
      ],
    },
    highlights: {
      pt: ['i18n PT/EN com rotas próprias', 'Zero dependências de build', 'Páginas dedicadas por produto', 'Deploy contínuo via Git'],
      en: ['PT/EN i18n with dedicated routes', 'Zero build dependencies', 'Dedicated product pages', 'Continuous deploy via Git'],
    },
    stack: ['HTML', 'CSS', 'JavaScript', 'Hostinger'],
    role: { pt: 'Cofundador (design e desenvolvimento)', en: 'Co-founder (design and development)' },
    links: { site: 'https://grovicdata.com' },
    images: ['grovic-data'],
  },
  {
    slug: 'routify',
    title: 'Routify',
    year: '2026',
    category: 'data',
    group: 'main',
    summary: {
      pt: 'TCC: otimização preditiva de rotas logísticas em Brasília com XGBoost, TomTom e app React Native.',
      en: 'Capstone: predictive logistics routing in Brasília with XGBoost, TomTom and a React Native app.',
    },
    description: {
      pt: [
        'Trabalho de conclusão de curso em Engenharia da Computação no IESB. O Routify otimiza rotas logísticas em tempo real para smart cities, combinando dados de tráfego da TomTom e do OpenStreetMap com modelos de machine learning para prever congestionamentos.',
        'Backend em FastAPI com modelos XGBoost, app mobile em React Native (Expo), persistência no Supabase e uma assistente de IA, a LIA.',
      ],
      en: [
        'Capstone project for my Computer Engineering degree at IESB. Routify optimizes logistics routes in real time for smart cities, combining TomTom and OpenStreetMap traffic data with machine learning models that predict congestion.',
        'FastAPI backend with XGBoost models, a React Native (Expo) mobile app, Supabase persistence and an AI assistant called LIA.',
      ],
    },
    highlights: {
      pt: ['Previsão de tráfego com XGBoost', 'Integração TomTom + OpenStreetMap', 'App mobile React Native / Expo', 'Assistente de IA (LIA) para o operador'],
      en: ['Traffic forecasting with XGBoost', 'TomTom + OpenStreetMap integration', 'React Native / Expo mobile app', 'AI assistant (LIA) for operators'],
    },
    stack: ['Python', 'FastAPI', 'XGBoost', 'React Native', 'Expo', 'Supabase', 'TomTom API'],
    role: team,
    links: { site: 'https://routify.grovicdata.com', repo: 'https://github.com/G2Martins/Routify' },
    images: ['routify'],
  },
  {
    slug: 'safedoc-df',
    title: 'SafeDoc-DF',
    year: '2026',
    category: 'data',
    group: 'main',
    summary: {
      pt: 'Detecção e anonimização de dados pessoais em pedidos de acesso à informação (LAI/LGPD) para o desafio Participa DF.',
      en: 'Detection and anonymization of personal data in public-information requests (LAI/LGPD) for the Participa DF challenge.',
    },
    description: {
      pt: [
        'Plataforma full stack criada para o desafio cívico Participa DF. Identifica automaticamente dados pessoais (CPF, RG, telefone e e-mail) em pedidos de acesso à informação, classifica o risco e anonimiza o conteúdo, apoiando a conformidade com a LAI e a LGPD.',
        'API REST em FastAPI, frontend Angular e avaliação do detector por precisão, recall e F1-score.',
      ],
      en: [
        'Full stack platform built for the Participa DF civic challenge. It automatically identifies personal data (CPF, RG, phone and e-mail) in public-information requests, classifies risk and anonymizes content, supporting compliance with Brazil’s LAI and LGPD.',
        'FastAPI REST API, Angular frontend and detector evaluation by precision, recall and F1-score.',
      ],
    },
    highlights: {
      pt: ['Detecção de PII brasileira (CPF, RG, telefone, e-mail)', 'Classificação de risco e anonimização', 'Métricas de precisão, recall e F1', 'API REST documentada'],
      en: ['Brazilian PII detection (CPF, RG, phone, e-mail)', 'Risk classification and anonymization', 'Precision, recall and F1 metrics', 'Documented REST API'],
    },
    stack: ['Python', 'FastAPI', 'Angular', 'Tailwind CSS', 'LGPD'],
    role: solo,
    links: { repo: 'https://github.com/G2Martins/SafeDoc-DF' },
    images: ['safedoc-df'],
  },
  {
    slug: 'itransfermusic',
    title: 'ITransferMusic',
    year: '2026',
    category: 'web',
    group: 'main',
    summary: {
      pt: 'Transfere, gera e sincroniza playlists entre Spotify e YouTube Music com matching automático.',
      en: 'Transfers, generates and syncs playlists between Spotify and YouTube Music with automatic matching.',
    },
    description: {
      pt: [
        'Plataforma web para transferir playlists entre serviços de streaming, gerar novas por mood ou gênero e mantê-las sincronizadas periodicamente entre vários provedores.',
        'Login OAuth2 com cada serviço, backend FastAPI + MongoDB e frontend Angular com i18n (Transloco) e Tailwind CSS.',
      ],
      en: [
        'Web platform to transfer playlists between streaming services, generate new ones by mood or genre and keep them periodically synced across providers.',
        'OAuth2 login with each service, a FastAPI + MongoDB backend and an Angular frontend with i18n (Transloco) and Tailwind CSS.',
      ],
    },
    highlights: {
      pt: ['Matching automático de faixas entre provedores', 'Geração de playlists por mood e gênero', 'Sincronização periódica multi-provedor', 'OAuth2 com Spotify e YouTube Music'],
      en: ['Automatic track matching across providers', 'Mood- and genre-based playlist generation', 'Periodic multi-provider sync', 'OAuth2 with Spotify and YouTube Music'],
    },
    stack: ['Angular', 'FastAPI', 'MongoDB', 'OAuth2', 'Transloco', 'Tailwind CSS'],
    role: solo,
    links: { repo: 'https://github.com/G2Martins/ITransferMusic' },
    images: ['itransfermusic'],
  },
  {
    slug: 'h-drop',
    title: 'H-Drop',
    year: '2026',
    category: 'systems',
    group: 'main',
    summary: {
      pt: 'Barco autônomo (ASV) para logística humanitária em áreas alagadas, com Mission Control em tempo real.',
      en: 'Autonomous surface vessel (ASV) for humanitarian logistics in flooded areas, with real-time Mission Control.',
    },
    description: {
      pt: [
        'Veículo de superfície autônomo do tipo catamarã para levar suprimentos a áreas alagadas. O Mission Control mostra telemetria GPS em tempo real e permite definir waypoints direto no mapa.',
        'Firmware em ESP32 com modem 4G LTE, comunicação via MQTT, backend FastAPI e painel Angular com Leaflet.',
      ],
      en: [
        'Catamaran-type autonomous surface vehicle that delivers supplies to flooded areas. Mission Control shows real-time GPS telemetry and lets operators set waypoints right on the map.',
        'ESP32 firmware with a 4G LTE modem, MQTT messaging, a FastAPI backend and an Angular dashboard with Leaflet.',
      ],
    },
    highlights: {
      pt: ['Telemetria GPS em tempo real', 'Waypoints definidos no mapa (Leaflet)', 'MQTT sobre 4G LTE', 'Hardware ESP32 embarcado'],
      en: ['Real-time GPS telemetry', 'Map-based waypoints (Leaflet)', 'MQTT over 4G LTE', 'On-board ESP32 hardware'],
    },
    stack: ['ESP32', 'MQTT', 'FastAPI', 'Angular', 'Leaflet', '4G LTE'],
    role: team,
    links: { repo: 'https://github.com/G2Martins/H-Drop' },
    images: ['h-drop', 'h-drop-2'],
  },
  {
    slug: 'g2cord',
    title: 'G2Cord',
    year: '2026',
    category: 'systems',
    group: 'main',
    summary: {
      pt: 'App próprio de comunicação estilo Discord: voz, vídeo, tela 1080p60, chat, cargos e fóruns, na web e no desktop.',
      en: 'Self-built Discord-style communication app: voice, video, 1080p60 screen share, chat, roles and forums, on web and desktop.',
    },
    description: {
      pt: [
        'Aplicativo de comunicação self-hosted inspirado no Discord, construído do zero (não é client mod): servidores e canais com voz, vídeo e transmissão de tela em 1080p60, chat com markdown, emojis próprios, soundboard, cargos e permissões por canal, categorias, fóruns e webhooks.',
        'Backend em Go com SQLite, mídia em tempo real via LiveKit (SFU WebRTC) supervisionado pelo servidor, cliente web em React 19 + Vite + Tailwind e app desktop em Electron, com testes E2E de voz e tela.',
      ],
      en: [
        'Self-hosted, Discord-inspired communication app built from scratch (not a client mod): servers and channels with voice, video and 1080p60 screen sharing, markdown chat, custom emojis, soundboard, per-channel roles and permissions, categories, forums and webhooks.',
        'Go backend on SQLite, real-time media through LiveKit (WebRTC SFU) supervised by the server, a React 19 + Vite + Tailwind web client and an Electron desktop app, with E2E tests for voice and screen sharing.',
      ],
    },
    highlights: {
      pt: ['Voz, vídeo e tela 1080p60 via WebRTC (LiveKit)', 'Permissões por cargo e por canal', 'Fóruns, soundboard e webhooks', 'Cliente web + desktop sincronizados'],
      en: ['Voice, video and 1080p60 screen share via WebRTC (LiveKit)', 'Per-role and per-channel permissions', 'Forums, soundboard and webhooks', 'Synced web + desktop clients'],
    },
    stack: ['Go', 'SQLite', 'LiveKit', 'WebRTC', 'React 19', 'Electron', 'Tailwind CSS'],
    role: solo,
    links: {},
    images: ['g2cord'],
  },
  {
    slug: 'dash-tempo-real',
    title: 'Dashboard de Tráfego em Tempo Real',
    year: '2025',
    category: 'data',
    group: 'main',
    summary: {
      pt: 'Captura pacotes de rede com Scapy e mostra protocolos e tráfego ao vivo num dashboard Angular.',
      en: 'Captures network packets with Scapy and shows protocols and traffic live in an Angular dashboard.',
    },
    description: {
      pt: ['Dashboard de análise de tráfego de rede em tempo real: captura pacotes com Scapy, agrega por protocolo e origem e exibe tudo em visualizações dinâmicas. Backend FastAPI + frontend Angular com Tailwind CSS.'],
      en: ['Real-time network traffic analysis dashboard: captures packets with Scapy, aggregates by protocol and source and renders it all in dynamic charts. FastAPI backend + Angular frontend with Tailwind CSS.'],
    },
    highlights: {
      pt: ['Captura de pacotes com Scapy', 'Agregação por protocolo em tempo real', 'Visualização dinâmica no navegador'],
      en: ['Packet capture with Scapy', 'Real-time per-protocol aggregation', 'Dynamic in-browser visualization'],
    },
    stack: ['Python', 'Scapy', 'FastAPI', 'Angular', 'Tailwind CSS'],
    role: team,
    links: { repo: 'https://github.com/AlphaCompLabs/Dash_TempoReal' },
    images: ['dash-tempo-real'],
  },
  {
    slug: 'eleicoes-sp-2024-ia',
    title: 'Previsão Eleições SP 2024',
    year: '2024',
    category: 'data',
    group: 'main',
    summary: {
      pt: 'Regressão logística multinomial que prevê intenção de voto por idade, renda, escolaridade, região e gênero.',
      en: 'Multinomial logistic regression predicting vote intention by age, income, education, region and gender.',
    },
    description: {
      pt: ['Modelo de previsão eleitoral para São Paulo 2024 com regressão logística multinomial (scikit-learn). Inclui pré-processamento, one-hot encoding e visualização das features com Pandas, NumPy, Matplotlib e Seaborn.'],
      en: ['Electoral forecasting model for São Paulo 2024 using multinomial logistic regression (scikit-learn). Includes preprocessing, one-hot encoding and feature visualization with Pandas, NumPy, Matplotlib and Seaborn.'],
    },
    highlights: {
      pt: ['Regressão logística multinomial', 'Pipeline de pré-processamento e one-hot encoding', 'Análise visual das variáveis'],
      en: ['Multinomial logistic regression', 'Preprocessing pipeline and one-hot encoding', 'Visual feature analysis'],
    },
    stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Seaborn'],
    role: study,
    links: { repo: 'https://github.com/G2Martins/EleicoesSP-2024-IA' },
    images: ['eleicoes-sp-2024-ia'],
  },
  {
    slug: 'predictwin-lol-ia',
    title: 'PredictWin LoL IA',
    year: '2024',
    category: 'data',
    group: 'main',
    summary: {
      pt: 'Modelo de regressão logística que prevê o vencedor de partidas de League of Legends a partir das estatísticas.',
      en: 'Logistic regression model that predicts the winner of League of Legends matches from in-game statistics.',
    },
    description: {
      pt: ['Projeto da disciplina de Inteligência Artificial: regressão logística múltipla para prever o resultado de partidas de League of Legends, com pré-processamento, seleção e visualização de features em Python.'],
      en: ['Artificial Intelligence course project: multiple logistic regression to predict League of Legends match outcomes, with preprocessing, feature selection and visualization in Python.'],
    },
    highlights: {
      pt: ['Regressão logística múltipla', 'Engenharia e seleção de features', 'Avaliação e visualização do modelo'],
      en: ['Multiple logistic regression', 'Feature engineering and selection', 'Model evaluation and visualization'],
    },
    stack: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib'],
    role: study,
    links: { repo: 'https://github.com/G2Martins/PredictWin-LOL-IA' },
    images: ['predictwin-lol-ia'],
  },
  {
    slug: 'calendario-web',
    title: 'Calendário Web',
    year: '2025',
    category: 'web',
    group: 'main',
    summary: {
      pt: 'Gestão de eventos com autenticação, eventos multi-dia e convites, feito em Java 17 + Spring Boot e Angular.',
      en: 'Event management with authentication, multi-day events and invites, built with Java 17 + Spring Boot and Angular.',
    },
    description: {
      pt: ['Desenvolvido como desafio técnico para vaga de estágio: sistema de calendário com autenticação de usuários, eventos multi-dia e gerenciamento de convites. Backend Java 17 + Spring Boot com MongoDB e frontend Angular + Tailwind CSS.'],
      en: ['Built as a technical challenge for an internship role: a calendar system with user authentication, multi-day events and invite management. Java 17 + Spring Boot backend on MongoDB and an Angular + Tailwind CSS frontend.'],
    },
    highlights: {
      pt: ['Autenticação de usuários', 'Eventos multi-dia e convites', 'API REST em Spring Boot'],
      en: ['User authentication', 'Multi-day events and invites', 'Spring Boot REST API'],
    },
    stack: ['Java 17', 'Spring Boot', 'MongoDB', 'Angular', 'Tailwind CSS'],
    role: solo,
    links: { repo: 'https://github.com/G2Martins/CalendarioWeb', video: 'https://youtu.be/ls9PW4uSBew' },
    images: ['calendario-web'],
  },
  {
    slug: 'rr-nexus',
    title: 'RR-Nexus',
    year: '2025',
    category: 'cloud',
    group: 'main',
    summary: {
      pt: 'Aplicação distribuída em 3 camadas com Round Robin DNS e sessão centralizada para alta disponibilidade.',
      en: '3-tier distributed application with Round Robin DNS and centralized sessions for high availability.',
    },
    description: {
      pt: ['Aplicação distribuída de três camadas que usa Round Robin DNS para balancear carga entre servidores. O destaque é o gerenciamento centralizado de sessões: o login persiste independentemente de qual servidor atende a requisição.'],
      en: ['Three-tier distributed application using Round Robin DNS to balance load across servers. The highlight is centralized session management: login persists regardless of which server handles the request.'],
    },
    highlights: {
      pt: ['Balanceamento via Round Robin DNS', 'Sessões centralizadas entre servidores', 'Arquitetura em 3 camadas'],
      en: ['Round Robin DNS load balancing', 'Sessions centralized across servers', '3-tier architecture'],
    },
    stack: ['Node.js', 'DNS', 'Load Balancing', 'Sessions'],
    role: team,
    links: { repo: 'https://github.com/AlphaCompLabs/Projeto-RR-Nexus/tree/dev' },
    images: ['rr-nexus'],
  },
  {
    slug: 'aws-terraform',
    title: 'AWS + Terraform',
    year: '2024',
    category: 'cloud',
    group: 'main',
    summary: {
      pt: 'Infraestrutura como código na AWS: VPC, subnet, security group e EC2 com Nginx provisionados por Terraform.',
      en: 'Infrastructure as code on AWS: VPC, subnet, security group and EC2 with Nginx provisioned by Terraform.',
    },
    description: {
      pt: ['Infraestrutura AWS automatizada com Terraform: criação de VPC, subnet, security group e instância EC2 com regras de segurança reforçadas e instalação automática do Nginx.'],
      en: ['Automated AWS infrastructure with Terraform: VPC, subnet, security group and an EC2 instance with hardened security rules and automatic Nginx installation.'],
    },
    highlights: {
      pt: ['VPC, subnet e security group via IaC', 'EC2 com Nginx provisionado automaticamente', 'Regras de segurança restritivas'],
      en: ['VPC, subnet and security group via IaC', 'EC2 with auto-provisioned Nginx', 'Restrictive security rules'],
    },
    stack: ['Terraform', 'AWS', 'EC2', 'VPC', 'Nginx'],
    role: study,
    links: { repo: 'https://github.com/G2Martins/AWS-Desafio-Terraform' },
    images: ['aws-terraform'],
  },
  {
    slug: 'projeto-integrador',
    title: 'Cãonecta: Projeto Integrador',
    year: '2024',
    category: 'systems',
    group: 'main',
    summary: {
      pt: 'Porta inteligente para cachorro com Arduino: horários de travamento configurados num painel web.',
      en: 'Arduino smart dog door: lock schedules configured from a web dashboard.',
    },
    description: {
      pt: ['Projeto integrador da faculdade que une hardware e software: uma porta para pets controlada por Arduino, com horários de travamento e destravamento definidos num painel web e integração em Python.'],
      en: ['University integrative project combining hardware and software: an Arduino-controlled pet door whose lock and unlock schedules are set from a web dashboard, with a Python integration layer.'],
    },
    highlights: {
      pt: ['Controle de trava com Arduino', 'Agendamento pelo painel web', 'Integração Python ↔ microcontrolador'],
      en: ['Arduino lock control', 'Scheduling from the web dashboard', 'Python ↔ microcontroller integration'],
    },
    stack: ['Arduino', 'C++', 'Python', 'HTML', 'CSS'],
    role: team,
    links: { repo: 'https://github.com/G2Martins/Projeto-Integrador' },
    images: ['projeto-integrador'],
  },
  {
    slug: 'g2store',
    title: 'G2Store',
    year: '2024',
    category: 'web',
    group: 'main',
    summary: {
      pt: 'E-commerce de jogos em Angular com catálogo, página de produto e carrinho responsivos.',
      en: 'Angular games e-commerce with responsive catalog, product page and cart.',
    },
    description: {
      pt: ['Loja virtual de jogos inspirada em grandes stores, desenvolvida em Angular: catálogo, destaques, página de produto e carrinho com layout responsivo.'],
      en: ['Games web store inspired by major storefronts, built in Angular: catalog, highlights, product page and cart with a responsive layout.'],
    },
    highlights: {
      pt: ['Catálogo e página de produto', 'Carrinho de compras', 'Layout responsivo'],
      en: ['Catalog and product page', 'Shopping cart', 'Responsive layout'],
    },
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    role: study,
    links: { site: 'https://g2martins.github.io/G2Store/', repo: 'https://github.com/G2Martins/G2Store' },
    images: ['g2store'],
  },
  {
    slug: 'starplex',
    title: 'Starplex',
    year: '2026',
    category: 'web',
    group: 'main',
    summary: {
      pt: 'Rede de cinemas fictícia com filmes em cartaz reais (TMDB), mapa de assentos, bomboniere e checkout simulado.',
      en: 'Fictional cinema chain with real now-playing films (TMDB), seat map, snack bar and simulated checkout.',
    },
    description: {
      pt: [
        'Reconstruí do zero meu antigo site de cinema (Angular 14) como um MVP de venda de ingressos. A programação vem da API do TMDB no build: filmes em cartaz e próximas estreias no Brasil, com sinopse, elenco, trailer e classificação indicativa.',
        'O fluxo completo roda sem backend: sessões dos próximos 7 dias por cinema, mapa de assentos com PCD, namoradeira e VIP, inteira e meia, combos da bomboniere, pagamento Pix simulado e ingressos salvos em "Meus ingressos".',
      ],
      en: [
        'I rebuilt my old cinema website (Angular 14) from scratch as a ticketing MVP. Showtimes come from the TMDB API at build time: films now playing and coming soon in Brazil, with synopsis, cast, trailer and age rating.',
        'The whole flow runs without a backend: 7 days of sessions per cinema, a seat map with accessible, couple and VIP seats, full and half-price tickets, snack combos, a simulated Pix payment and tickets saved under "My tickets".',
      ],
    },
    highlights: {
      pt: [
        'Uma página pré-renderizada (SSG) por filme, com dados do TMDB',
        'Mapa de assentos navegável por teclado, com PCD, namoradeira e VIP',
        'Bomboniere e checkout simulado, sem coletar nenhum dado',
        'Hidratação incremental; Lighthouse 100 em acessibilidade e SEO',
      ],
      en: [
        'One prerendered (SSG) page per film, with TMDB data',
        'Keyboard-navigable seat map with accessible, couple and VIP seats',
        'Snack bar and simulated checkout that collects no data',
        'Incremental hydration; Lighthouse 100 for accessibility and SEO',
      ],
    },
    stack: ['Angular 21', 'TypeScript', 'Tailwind CSS', 'TMDB API', 'SSG'],
    role: solo,
    links: { site: 'https://g2martins.github.io/Starplex/', repo: 'https://github.com/G2Martins/Starplex' },
    images: ['starplex', 'starplex-2', 'starplex-3', 'starplex-4'],
  },
  {
    slug: 'g2buzzfeed',
    title: 'G2BuzzFeed',
    year: '2024',
    category: 'web',
    group: 'main',
    summary: {
      pt: 'Quiz interativo estilo BuzzFeed em Angular, com resultado calculado pelas respostas.',
      en: 'BuzzFeed-style interactive quiz in Angular, with a result computed from the answers.',
    },
    description: {
      pt: ['Quiz interativo no estilo BuzzFeed construído em Angular: perguntas encadeadas e resultado calculado a partir das escolhas do usuário.'],
      en: ['BuzzFeed-style interactive quiz built in Angular: chained questions and a result computed from the user’s choices.'],
    },
    highlights: {
      pt: ['Fluxo de perguntas com estado', 'Cálculo de resultado', 'Deploy no GitHub Pages'],
      en: ['Stateful question flow', 'Result computation', 'Deployed on GitHub Pages'],
    },
    stack: ['Angular', 'TypeScript', 'Tailwind CSS'],
    role: study,
    links: { site: 'https://g2martins.github.io/G2BuzzFeed/', repo: 'https://github.com/G2Martins/G2BuzzFeed' },
    images: ['g2buzzfeed'],
  },
  {
    slug: 'g2hubblog',
    title: 'G2HubBlog',
    year: '2024',
    category: 'web',
    group: 'main',
    summary: {
      pt: 'Blog em Angular com layout inspirado no Dribbble, rotas por post e componentes reutilizáveis.',
      en: 'Angular blog with a Dribbble-inspired layout, per-post routes and reusable components.',
    },
    description: {
      pt: ['Blog construído em Angular a partir de um layout do Dribbble: home com destaques, rotas por post e componentes reutilizáveis.'],
      en: ['Blog built in Angular from a Dribbble layout: highlights on the home page, per-post routes and reusable components.'],
    },
    highlights: {
      pt: ['Roteamento por post', 'Componentização', 'Deploy no GitHub Pages'],
      en: ['Per-post routing', 'Component-driven UI', 'Deployed on GitHub Pages'],
    },
    stack: ['Angular', 'TypeScript', 'CSS'],
    role: study,
    links: { site: 'https://g2martins.github.io/G2HubBlog/', repo: 'https://github.com/G2Martins/G2HubBlog' },
    images: ['g2hubblog'],
  },
  {
    slug: 'formacoes-dio',
    title: 'Formações DIO',
    year: '2023–2026',
    category: 'cloud',
    group: 'main',
    summary: {
      pt: 'Desafios das formações DIO: Spring Security + JWT, Power BI, Python, Java, Linux e IaC.',
      en: 'DIO bootcamp challenges: Spring Security + JWT, Power BI, Python, Java, Linux and IaC.',
    },
    description: {
      pt: ['Repositórios dos bootcamps e formações da DIO (Digital Innovation One), incluindo o Santander Bootcamp Fullstack Java + Angular: APIs Spring Boot com segurança JWT, dashboards em Power BI, pacotes Python, padrões de projeto em Java e scripts de provisionamento Linux.'],
      en: ['Repositories from DIO (Digital Innovation One) bootcamps, including the Santander Fullstack Java + Angular Bootcamp: Spring Boot APIs with JWT security, Power BI dashboards, Python packages, Java design patterns and Linux provisioning scripts.'],
    },
    highlights: {
      pt: ['Spring Boot + Spring Security JWT', 'Dashboards Power BI', 'Python, Java e Linux/IaC'],
      en: ['Spring Boot + Spring Security JWT', 'Power BI dashboards', 'Python, Java and Linux/IaC'],
    },
    stack: ['Java', 'Spring Boot', 'Power BI', 'Python', 'Linux'],
    role: study,
    links: {
      repo: 'https://github.com/G2Martins?tab=repositories&q=dio',
      more: [
        { label: 'Spring Security JWT', url: 'https://github.com/G2Martins/Dio-Spring-Security-JWT' },
        { label: 'Power BI', url: 'https://github.com/G2Martins/DIO_Projects_PowerBI' },
        { label: 'Python', url: 'https://github.com/G2Martins/Dio_Projects_Python' },
        { label: 'Java Developer', url: 'https://github.com/G2Martins/DIO_Projects_JavaDeveloper' },
        { label: 'Santander Dev Week 2023', url: 'https://github.com/G2Martins/santander-dev-week-2023' },
        { label: 'Linux IaC', url: 'https://github.com/G2Martins/DIO_Projects_Linux_iac' },
      ],
    },
    images: [],
  },
];
