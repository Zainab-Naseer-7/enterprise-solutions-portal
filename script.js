/**
 * SYNERGEX ENTERPRISE SOLUTIONS PORTAL
 * Reactive Application Engine, Canvas Interactive Ecosystem, BI Visualizer & LocalStorage CRUD
 * Strictly Zero-Folder Architecture (Single Root)
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. GLOBAL DATA STORE & MOCK ENTERPRISE REPOSITORIES
     ========================================================================== */
  const DATA = {
    solutions: [
      {
        id: 'sol-cloud',
        title: 'Hyperscale Cloud & Mesh Architecture',
        category: 'cloud',
        categoryName: 'Cloud & Infrastructure',
        industry: ['finance', 'healthcare', 'retail', 'telecom'],
        size: ['enterprise', 'fortune500'],
        type: 'cloud',
        goal: 'modernization',
        roi: '99.999% SLA • -38% Cloud Spend',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
        desc: 'Sovereign multi-cloud migration, distributed Kubernetes service mesh, and immutable infrastructure-as-code engineered for zero downtime.',
        benefits: ['Multi-Cloud Resiliency', 'FinOps Cost Governance', 'Zero-Downtime Migration', 'Auto-Healing Nodes'],
        fullDetails: {
          problem: 'Organizations face vendor lock-in, ballooning cloud bills, and brittle monolithic infrastructure unable to withstand regional outages.',
          architecture: 'Distributed multi-cloud control plane leveraging Envoy service mesh, Terraform sovereign modules, and automated eBPF observability.',
          impact: '68% reduction in mean time to recover (MTTR) and guaranteed 99.999% uptime with cross-continental active-active failover.'
        }
      },
      {
        id: 'sol-ai',
        title: 'Enterprise AI & Autonomous Workflows',
        category: 'ai',
        categoryName: 'AI & Automation',
        industry: ['finance', 'healthcare', 'manufacturing', 'retail'],
        size: ['mid', 'enterprise', 'fortune500'],
        type: 'ai',
        goal: 'velocity',
        roi: '+64% Process Velocity • Sovereign Privacy',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M15 9h.01"/><path d="M8 15h8"/></svg>',
        desc: 'Production-ready generative AI agents, retrieval-augmented generation (RAG) pipelines, and private sovereign LLM deployments with deterministic governance.',
        benefits: ['Private LLM Enclaves', 'Deterministic RAG', 'Agentic Task Pipelines', 'Strict Auditing'],
        fullDetails: {
          problem: 'Enterprise IP leakage risks and hallucinations prevent critical business units from capturing the competitive advantages of modern GenAI.',
          architecture: 'Self-hosted air-gapped LLM inference cluster with Milvus vector database, LangChain enterprise orchestration, and role-based token masking.',
          impact: 'Eliminated external cloud token exposure, cut manual document synthesis times by 82%, and achieved full regulatory compliance.'
        }
      },
      {
        id: 'sol-sec',
        title: 'Zero-Trust Cybersecurity Mesh',
        category: 'security',
        categoryName: 'Cybersecurity & Zero-Trust',
        industry: ['finance', 'government', 'healthcare', 'telecom'],
        size: ['enterprise', 'fortune500'],
        type: 'security',
        goal: 'risk',
        roi: '100% Micro-Segmentation • FedRAMP High',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        desc: 'Continuous cryptographic identity verification, micro-segmented application perimeters, and automated threat hunting backed by AI behavioral analytics.',
        benefits: ['Continuous Verification', 'Micro-Segmentation', 'Threat Hunting Engine', 'SOC-2 & FedRAMP Ready'],
        fullDetails: {
          problem: 'Perimeter-only defense models fail against credential theft and sophisticated lateral movement inside corporate networks.',
          architecture: 'SPIFFE/SPIRE cryptographic workload identity, WireGuard kernel-level encrypted overlays, and real-time SIEM/SOAR automation.',
          impact: 'Reduced blast radius of compromised credentials to zero and passed federal compliance audits with zero findings.'
        }
      },
      {
        id: 'sol-data',
        title: 'Data Intelligence & Unified Fabric',
        category: 'data',
        categoryName: 'Data & Analytics',
        industry: ['finance', 'retail', 'manufacturing', 'telecom'],
        size: ['mid', 'enterprise', 'fortune500'],
        type: 'data',
        goal: 'cost',
        roi: '<50ms Query Latency • 100TB+ Daily Ingestion',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
        desc: 'Modern lakehouse architectures, real-time Apache Kafka streaming pipelines, and executive BI telemetry delivering instant actionable intelligence.',
        benefits: ['Real-Time Stream Processing', 'Lakehouse Governance', 'Sub-Second BI Queries', 'Predictive Modeling'],
        fullDetails: {
          problem: 'Siloed database replicas and delayed batch processing leave executives making multi-million dollar decisions on stale 48-hour-old data.',
          architecture: 'Distributed Apache Iceberg tables queried via ClickHouse & Trino, with real-time CDC (Change Data Capture) over Kafka pipelines.',
          impact: 'Accelerated quarterly reporting cycles by 90% and unlocked live predictive forecasting across global distribution networks.'
        }
      },
      {
        id: 'sol-eng',
        title: 'Mission-Critical Software Engineering',
        category: 'engineering',
        categoryName: 'Software Engineering',
        industry: ['finance', 'healthcare', 'retail', 'manufacturing'],
        size: ['mid', 'enterprise', 'fortune500'],
        type: 'engineering',
        goal: 'velocity',
        roi: '99.999% Reliability • High-Throughput APIs',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
        desc: 'Custom enterprise platforms, ultra-low latency transaction backends, and fault-tolerant distributed systems built in Rust, Go, and TypeScript.',
        benefits: ['Distributed Resilience', 'Sub-Millisecond SLAs', 'Continuous Integration', 'Domain-Driven Design'],
        fullDetails: {
          problem: 'Legacy monolithic software stacks suffering from technical debt, brittle release cycles, and inability to handle exponential traffic surges.',
          architecture: 'Event-driven microservices architecture using gRPC, Rust high-concurrency micro-kernels, and automated canary deployment gates.',
          impact: 'Eliminated transaction latency spikes during peak holiday volumes and accelerated feature release cadence from monthly to daily.'
        }
      },
      {
        id: 'sol-it',
        title: 'Distributed IT Infrastructure & Edge Mesh',
        category: 'infrastructure',
        categoryName: 'Core Infrastructure',
        industry: ['manufacturing', 'retail', 'telecom', 'government'],
        size: ['enterprise', 'fortune500'],
        type: 'cloud',
        goal: 'modernization',
        roi: '48 Edge Regions • <8ms Latency',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
        desc: 'Hybrid-cloud compute nodes, automated edge provisioning, zero-touch network orchestration, and comprehensive hardware lifecycle governance.',
        benefits: ['Bare-Metal Performance', 'Edge Autonomous Sync', 'SD-WAN Optimization', 'Zero-Touch Provisioning'],
        fullDetails: {
          problem: 'High WAN network costs and severe latency at physical plant sites, retail branches, and edge nodes causing operational drag.',
          architecture: 'Kubernetes edge clusters managed centrally via ArgoCD with localized sqlite replication and offline-first autonomous failover.',
          impact: 'Operational continuity ensured even during complete satellite link interruptions across 1,200 retail storefronts.'
        }
      },
      {
        id: 'sol-opt',
        title: 'Intelligent Business Process Optimization',
        category: 'optimization',
        categoryName: 'Process Optimization',
        industry: ['finance', 'healthcare', 'retail', 'manufacturing'],
        size: ['mid', 'enterprise'],
        type: 'optimization',
        goal: 'cost',
        roi: '+34% Operational Margin • $1.2M Saved',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',
        desc: 'End-to-end robotic process automation (RPA), intelligent document ingestion, and algorithmic workflow optimization reducing cycle times.',
        benefits: ['RPA Automated Workflows', 'Zero Human Error', 'Compliance Traceability', 'Adaptive Load Balancing'],
        fullDetails: {
          problem: 'Disjointed manual operations across ERP, CRM, and logistics software consuming thousands of manual human-hours weekly.',
          architecture: 'BPMN-compliant workflow automation engine paired with optical character recognition (OCR) and event-driven webhooks.',
          impact: 'Reduced invoice processing time from 4 days to 45 seconds while eliminating manual data-entry errors.'
        }
      },
      {
        id: 'sol-trans',
        title: 'Digital Transformation Core Engine',
        category: 'transformation',
        categoryName: 'Digital Transformation',
        industry: ['finance', 'healthcare', 'government', 'manufacturing'],
        size: ['enterprise', 'fortune500'],
        type: 'engineering',
        goal: 'modernization',
        roi: '10x Faster Time-to-Market',
        icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        desc: 'Holistic legacy modernization, mainframe re-platforming, and organizational DevOps culture transformation engineered for generational scalability.',
        benefits: ['Legacy Modernization', 'Mainframe Decoupling', 'DevSecOps Pipelines', 'Executive Telemetry'],
        fullDetails: {
          problem: 'Decades-old COBOL mainframe backends hampering customer-facing innovation and incurring catastrophic maintenance fees.',
          architecture: 'Strangler-fig migration pattern breaking legacy monoliths into lightweight micro-services without disrupting live production traffic.',
          impact: 'Migrated 15 million active account balances with zero minutes of unscheduled customer downtime.'
        }
      }
    ],

    industries: [
      {
        id: 'ind-fin',
        name: 'Banking & Financial Services',
        icon: '💳',
        desc: 'Ultra-low latency trading engines, core banking modernization, and PCI-DSS Level 1 certified sovereign cloud enclaves.',
        challenges: 'Legacy mainframe technical debt, high-frequency regulatory auditing, and sub-millisecond fraud mitigation.',
        solution: 'Real-time Apache Flink streaming fraud detection, automated AML compliance reporting, and zero-trust micro-segmented ledger fabric.',
        compliance: ['PCI-DSS Level 1', 'SOC-2 Type II', 'FINRA 4511']
      },
      {
        id: 'ind-health',
        name: 'Healthcare & Life Sciences',
        icon: '🧬',
        desc: 'HIPAA-compliant patient data lakehouses, federated AI diagnostic pipelines, and secure genomic sequencing storage.',
        challenges: 'Severe PHI data sensitivity, fragmented EHR records, and slow clinical trial data aggregation.',
        solution: 'Cryptographically encrypted FHIR-compliant API gateways and air-gapped model training for multi-institutional trials.',
        compliance: ['HIPAA', 'HITECH', 'FDA 21 CFR Part 11']
      },
      {
        id: 'ind-retail',
        name: 'Retail & Global Commerce',
        icon: '🛍️',
        desc: 'High-concurrency omnichannel order management, sub-second personalized recommendations, and automated warehouse logistics.',
        challenges: 'Black Friday traffic surges of 100x baseline, inventory discrepancies across global stores, and cart abandonment.',
        solution: 'Auto-scaling serverless edge caches, dynamic pricing engines, and unified real-time inventory ledger over distributed Kafka nodes.',
        compliance: ['PCI-DSS', 'GDPR', 'SOC-2']
      },
      {
        id: 'ind-mfg',
        name: 'Manufacturing & Robotics',
        icon: '🏭',
        desc: 'Industrial IoT predictive maintenance, digital twins, computer vision defect inspection, and supply-chain telemetry.',
        challenges: 'Unplanned assembly line shutdowns costing $300k/hr, harsh physical factory network environments, and legacy SCADA protocols.',
        solution: 'Edge compute nodes running localized PyTorch inference on video streams with automated Modbus/OPC-UA protocol translation.',
        compliance: ['ISO 9001', 'IEC 62443', 'NIST SP 800-82']
      },
      {
        id: 'ind-edu',
        name: 'Higher Education & Research',
        icon: '🎓',
        desc: 'Scalable campus LMS infrastructure, high-performance computing (HPC) research clusters, and student data privacy.',
        challenges: 'Massive registration traffic spikes, uneven HPC compute resource contention, and decentralized IT administration.',
        solution: 'Dynamic multi-tenant cloud burst architecture and federated single sign-on (SSO) integration across 60,000 active students.',
        compliance: ['FERPA', 'COPPA', 'SOC-2']
      },
      {
        id: 'ind-gov',
        name: 'Government & Public Sector',
        icon: '🏛️',
        desc: 'FedRAMP High authorized sovereign cloud infrastructure, public digital identity portals, and citizen service automation.',
        challenges: 'Rigid procurement frameworks, strict sovereignty mandates, and legacy paper-based administrative bottlenecks.',
        solution: 'Zero-trust cryptographic security architecture with automated continuous authority to operate (cATO) compliance pipelines.',
        compliance: ['FedRAMP High', 'DoD IL5', 'NIST 800-53']
      },
      {
        id: 'ind-logistics',
        name: 'Logistics & Supply Chain',
        icon: '🚢',
        desc: 'Autonomous intermodal freight tracking, dynamic route optimization, and cross-border customs clearing automation.',
        challenges: 'Port congestion, volatile fuel costs, and fragmented third-party freight broker APIs.',
        solution: 'Real-time telemetry IoT mesh tracking shipping containers globally with predictive automated customs documentation.',
        compliance: ['C-TPAT', 'ISO 28000', 'AEO']
      },
      {
        id: 'ind-telecom',
        name: 'Telecommunications & 5G',
        icon: '📡',
        desc: 'Virtual network functions (VNF), Open-RAN edge orchestration, and carrier-grade billing engines handling billions of daily CDRs.',
        challenges: 'Exponential bandwidth demand, high edge infrastructure capital expenditure, and real-time packet billing.',
        solution: 'Cloud-native 5G core orchestration via Kubernetes with automated eBPF network packet routing and real-time micro-billing.',
        compliance: ['3GPP Release 17', 'ETSI NFV', 'NEBS Level 3']
      },
      {
        id: 'ind-energy',
        name: 'Energy & CleanTech',
        icon: '⚡',
        desc: 'Smart grid load balancing, renewable energy asset telemetry, and SCADA cybersecurity monitoring across distributed substations.',
        challenges: 'Intermittent renewable solar/wind generation, cyber physical grid attacks, and carbon offset reporting.',
        solution: 'AI-driven predictive demand forecasting coupled with zero-trust hardware security modules at electrical substations.',
        compliance: ['NERC CIP', 'ISO 50001', 'GHG Protocol']
      },
      {
        id: 'ind-re',
        name: 'Commercial Real Estate',
        icon: '🏢',
        desc: 'Smart building IoT automation, automated lease contract abstraction, and tenant portal digital experiences.',
        challenges: 'Energy waste in commercial towers, siloed HVAC building management systems, and manual lease audit processes.',
        solution: 'Unified IoT building telemetry platform integrating BACnet protocols with automated HVAC energy efficiency optimization.',
        compliance: ['LEED v4.1', 'WELL v2', 'BOMA 360']
      },
      {
        id: 'ind-travel',
        name: 'Aviation & Global Travel',
        icon: '✈️',
        desc: 'High-availability reservation systems, crew scheduling optimization algorithms, and passenger digital identity gateways.',
        challenges: 'Weather disruptions causing cascading flight cancelations, legacy GDS integration, and passenger baggage tracing.',
        solution: 'Distributed cloud reservation mesh with automated crew reassignment optimization and biometric boarding pass processing.',
        compliance: ['IATA NDC', 'TSA PreCheck', 'FAA Part 121']
      },
      {
        id: 'ind-services',
        name: 'Professional & Legal Services',
        icon: '⚖️',
        desc: 'Secure client document enclaves, automated legal contract review, and confidential practice management systems.',
        challenges: 'Strict attorney-client privilege mandates, massive unindexed discovery archives, and billable hour tracking leaks.',
        solution: 'Air-gapped generative AI contract analysis with cryptographic watermarking and granular role-based document access controls.',
        compliance: ['ABA Formal Op 477R', 'SOC-2', 'ISO 27701']
      }
    ],

    services: [
      {
        id: 'srv-consulting',
        title: 'Executive Architecture Consulting',
        timeline: '2 - 4 Weeks',
        desc: 'Direct advisory with Principal Enterprise Architects to audit existing technology landscapes, identify vulnerabilities, and craft ROI-backed transformation blueprints.',
        deliverables: ['Full Technical Architecture Audit', 'Target State Blueprints', 'Cloud Cost Model & FinOps Plan', 'Executive Roadmap Presentation']
      },
      {
        id: 'srv-dev',
        title: 'Custom Enterprise Software Engineering',
        timeline: '8 - 24 Weeks',
        desc: 'Full-lifecycle software engineering delivering resilient distributed microservices, low-latency transaction engines, and modern client web applications.',
        deliverables: ['Production Rust/Go/TS Codebase', 'Complete Test Harness (95%+ Coverage)', 'Infrastructure-as-Code Modules', 'Full Documentation & Handover']
      },
      {
        id: 'srv-cloud',
        title: 'Zero-Downtime Cloud Migration',
        timeline: '6 - 16 Weeks',
        desc: 'Systematic migration of on-premise data centers or legacy virtual machines to AWS, Azure, GCP, or sovereign private Kubernetes meshes without business disruption.',
        deliverables: ['Migration Runbooks', 'Continuous Database Replication', 'Zero-Downtime Production Cutover', 'Post-Cutover 24/7 Monitoring']
      },
      {
        id: 'srv-security',
        title: 'Zero-Trust Cybersecurity Hardening',
        timeline: '4 - 12 Weeks',
        desc: 'Comprehensive red-teaming, identity federation, cryptographic micro-segmentation, and compliance remediation to satisfy SOC-2 Type II and FedRAMP standards.',
        deliverables: ['Threat Vector Assessment', 'SPIRE/SPIFFE Cryptographic Mesh', 'Automated SIEM/SOAR Rules', 'Audit-Ready Attestation Package']
      },
      {
        id: 'srv-data',
        title: 'Enterprise Data Lakehouse & BI Fabric',
        timeline: '6 - 14 Weeks',
        desc: 'Modernize fragmented data silos into a unified Apache Iceberg or ClickHouse lakehouse with streaming Kafka ingestion and executive dashboards.',
        deliverables: ['Real-Time Ingestion Pipelines', 'Centralized Data Catalog & Schema Registry', 'Automated Data Quality Guards', 'Executive BI Telemetry Dashboards']
      },
      {
        id: 'srv-ai',
        title: 'Private Sovereign AI Integration',
        timeline: '4 - 10 Weeks',
        desc: 'Deploy private self-hosted generative AI models with deterministic retrieval-augmented generation (RAG) and strict role-based data guardrails.',
        deliverables: ['Air-Gapped LLM Cluster Setup', 'Custom Fine-Tuned Enclaves', 'Semantic Vector Search Index', 'Audit Logging & Safety Filters']
      },
      {
        id: 'srv-it',
        title: '24/7 Managed Enterprise Operations',
        timeline: 'Ongoing SLA Agreement',
        desc: 'Dedicated Tier-3 Site Reliability Engineering (SRE) pods monitoring systems around the clock with a financially backed 15-minute response SLA.',
        deliverables: ['24/7/365 Dedicated SRE Hotline', 'Automated Runbook Incident Triage', 'Monthly Capacity & Cost Audits', 'Guaranteed 99.995% Platform SLA']
      },
      {
        id: 'srv-integration',
        title: 'Complex Enterprise System Integration',
        timeline: '4 - 12 Weeks',
        desc: 'Seamlessly bridge modern cloud services with SAP, Salesforce, Oracle, legacy mainframes, and proprietary enterprise software through resilient event buses.',
        deliverables: ['High-Throughput API Gateways', 'Idempotent Event-Driven Webhooks', 'Automated Reconciliation Jobs', 'Contract-First OpenAPI Schemas']
      },
      {
        id: 'srv-support',
        title: 'Enterprise Technical Support Desk',
        timeline: 'Continuous',
        desc: 'Direct escalation channels to certified solution architects for troubleshooting, architectural reviews, patch testing, and performance profiling.',
        deliverables: ['Named Solutions Architect Lead', 'Dedicated Slack/Teams Priority Channel', 'Quarterly Health Reviews', 'Priority Hotfix Patches']
      },
      {
        id: 'srv-transformation',
        title: 'Complete Digital Transformation Program',
        timeline: '6 - 18 Months',
        desc: 'Strategic organizational modernization addressing culture, DevSecOps pipelines, automated testing, and legacy decoupling for long-term agility.',
        deliverables: ['Multi-Phase Organizational Roadmap', 'Embedded Engineering Coaches', 'Unified Cloud Governance Framework', 'Executive Steering Committee Reviews']
      }
    ],

    techStack: {
      cloud: [
        { name: 'Kubernetes & Helm', readiness: 'Production Tier 1', spec: 'Multi-cluster service orchestration with automated blue-green rolling cutovers.', pills: ['v1.30', 'CNCF Certified', 'Auto-Scaler'] },
        { name: 'Terraform & OpenTofu', readiness: 'Immutable IaC', spec: 'Declarative cloud infrastructure provisioning across AWS, GCP, and Azure.', pills: ['IaC', 'Multi-Region', 'State Lock'] },
        { name: 'Cilium & eBPF', readiness: 'Kernel Mesh', spec: 'High-throughput Linux kernel packet routing, load balancing, and network security.', pills: ['eBPF', 'Zero-Proxy', 'Observability'] },
        { name: 'Envoy Gateway', readiness: 'Edge Layer', spec: 'High-performance cloud-native application proxy and dynamic API routing.', pills: ['HTTP/3', 'gRPC', 'Rate-Limiting'] }
      ],
      ai: [
        { name: 'PyTorch & vLLM', readiness: 'Inference Mesh', spec: 'High-throughput private model serving with PagedAttention optimization.', pills: ['Air-Gapped', 'CUDA Accelerated', 'Quantized'] },
        { name: 'Milvus & Qdrant', readiness: 'Vector Lake', spec: 'Distributed vector database indexing hundreds of millions of embeddings.', pills: ['HNSW Index', 'Sub-5ms Query', 'Hybrid Search'] },
        { name: 'LangChain & LlamaIndex', readiness: 'Agent Framework', spec: 'Deterministic enterprise RAG orchestration and structured output pipelines.', pills: ['Tool Calling', 'Guardrails', 'Deterministic'] },
        { name: 'Ollama & TensorRT-LLM', readiness: 'Edge Inference', spec: 'Optimized sovereign local LLM execution on workstation and on-premise hardware.', pills: ['Private', 'Zero Telemetry', 'FP8 Support'] }
      ],
      data: [
        { name: 'Apache Kafka & Redpanda', readiness: 'Event Streaming', spec: 'Distributed event log handling millions of concurrent financial transactions.', pills: ['Strict Ordering', 'Replicated', 'Low Latency'] },
        { name: 'ClickHouse', readiness: 'Real-Time OLAP', spec: 'Columnar database engine powering sub-second executive analytics across trillions of rows.', pills: ['Columnar', 'Vectorized', 'Sub-Second'] },
        { name: 'Apache Iceberg', readiness: 'Open Lakehouse', spec: 'High-performance open table format for massive petabyte-scale data lakes.', pills: ['ACID Transactions', 'Time Travel', 'Schema Evolution'] },
        { name: 'dbt Core & Trino', readiness: 'Data Modeling', spec: 'Distributed SQL query engine and modular analytics engineering pipelines.', pills: ['Modular SQL', 'Federated Queries', 'Tested'] }
      ],
      security: [
        { name: 'SPIFFE / SPIRE', readiness: 'Workload Identity', spec: 'Universal cryptographic identity standard for zero-trust microservice federation.', pills: ['X.509 SVID', 'Short-Lived', 'Mutual TLS'] },
        { name: 'WireGuard & Nebula', readiness: 'Encrypted Overlay', spec: 'Kernel-level cryptographic VPN overlay connecting global edge data centers.', pills: ['Noise Protocol', 'Peer-to-Peer', 'Blazing Fast'] },
        { name: 'HashiCorp Vault', readiness: 'Secrets Engine', spec: 'Dynamic cryptographic secret rotation, key management, and PKI certificate authority.', pills: ['FIPS 140-2', 'Auto-Rotate', 'Audit Logged'] },
        { name: 'Trivy & Cosign', readiness: 'Supply Chain Sec', spec: 'Cryptographic container image signing and automated vulnerability scanning in CI/CD.', pills: ['SBOM', 'SLSA Level 3', 'Zero-Vulnerabilities'] }
      ],
      automation: [
        { name: 'ArgoCD & Flux', readiness: 'GitOps Engine', spec: 'Automated continuous reconciliation of Kubernetes clusters from Git repositories.', pills: ['GitOps', 'Drift Detection', 'Canary Rollout'] },
        { name: 'GitHub Actions Enterprise', readiness: 'CI/CD Pipelines', spec: 'Self-hosted ephemeral runner runners executing hardened security pipelines.', pills: ['Isolated Runners', 'Matrix Builds', 'Fast Cache'] },
        { name: 'Ansible Automation', readiness: 'Config Governance', spec: 'Agentless infrastructure automation ensuring consistent OS-level compliance states.', pills: ['Idempotent', 'Playbooks', 'CIS Benchmark'] },
        { name: 'Prometheus & Grafana', readiness: 'Observability', spec: 'Enterprise metric ingestion and alert manager with distributed tracing support.', pills: ['Mimir Backing', 'Custom Dashboards', 'Alertmanager'] }
      ],
      infrastructure: [
        { name: 'Linux Kernel & Alpine', readiness: 'Hardened OS', spec: 'Minimalist container runtimes with hardened security flags and stripped attack surfaces.', pills: ['Read-Only Root', 'Minimal CVE', 'eBPF'] },
        { name: 'Ceph Distributed Storage', readiness: 'Object & Block', spec: 'Resilient petabyte-scale distributed software-defined storage cluster.', pills: ['Self-Healing', 'Erasure Coded', 'S3 API'] },
        { name: 'BGP & Anycast DNS', readiness: 'Global Network', spec: 'Autonomous multi-homed BGP routing directing traffic to the closest geographical node.', pills: ['DDoS Mitigation', 'Sub-Millisecond', 'Geo-Routed'] },
        { name: 'OpenTelemetry', readiness: 'Distributed Trace', spec: 'Standardized telemetry collection for application metrics, logs, and distributed traces.', pills: ['Vendor Agnostic', 'Context Propagation', 'W3C Trace'] }
      ],
      software: [
        { name: 'Rust (tokio & axum)', readiness: 'High Performance', spec: 'Memory-safe, high-concurrency micro-backends handling millions of requests/sec.', pills: ['Zero GC Pauses', 'Memory Safe', 'Async I/O'] },
        { name: 'Go (Golang)', readiness: 'Microservices', spec: 'Lightweight, rapid compilation distributed services powering enterprise APIs.', pills: ['Goroutines', 'Standard Library', 'Cloud Native'] },
        { name: 'TypeScript & React', readiness: 'Modern Web UI', spec: 'Strictly typed, accessible, and high-performance design systems for client dashboards.', pills: ['Type Safe', 'Reusable UI', 'Accessible'] },
        { name: 'PostgreSQL & pgvector', readiness: 'Relational Core', spec: 'Enterprise relational store enhanced with vector similarity search and replication.', pills: ['ACID Compliant', 'JSONB Support', 'Streaming Replica'] }
      ],
      integration: [
        { name: 'gRPC & Protocol Buffers', readiness: 'Binary RPC', spec: 'Ultra-efficient, strictly typed binary remote procedure calls across microservices.', pills: ['Multiplexed', 'Zero Overhead', 'HTTP/2'] },
        { name: 'GraphQL Gateway', readiness: 'Unified Schema', spec: 'Federated GraphQL supergraph aggregating disparate microservice backends into one API.', pills: ['Apollo Federation', 'Typed Schema', 'Zero Overfetch'] },
        { name: 'Apache Camel & Kafka Connect', readiness: 'Enterprise Bus', spec: 'Enterprise integration patterns connecting mainframes, ERPs, and cloud queues.', pills: ['100+ Connectors', 'EIP Standard', 'Fault Tolerant'] },
        { name: 'Webhook Mesh & EventBridge', readiness: 'Async Event Hub', spec: 'Reliable webhook delivery with automated exponential backoff retry algorithms.', pills: ['Idempotency Keys', 'Dead-Letter Queue', 'HMAC Signatures'] }
      ]
    },

    caseStudies: [
      {
        id: 'cs-aura',
        client: 'Aura Financial Services',
        industry: 'Banking & Capital Markets',
        title: 'Global Core Banking Decoupling & Real-Time Fraud Mesh',
        challenge: 'Aura Financial processed $14B annually on a legacy monolithic database that suffered latency spikes of up to 4.2 seconds during peak market openings, risking non-compliance with strict FINRA settlement windows.',
        solution: 'SYNERGEX architected an event-driven strangler-fig migration. We deployed an active-active distributed Kafka stream alongside Rust micro-kernels and in-memory ClickHouse caching with zero customer-facing downtime.',
        results: [
          'Reduced core transaction latency from 4,200ms to 18ms (99.5% reduction)',
          'Achieved 100% uninterrupted uptime across 4 global market trading holidays',
          'Eliminated $4.8M in annual legacy mainframe licensing fees'
        ],
        tech: ['Rust', 'Kafka', 'ClickHouse', 'Kubernetes', 'SPIFFE/SPIRE'],
        stat: '99.5% Latency Drop'
      },
      {
        id: 'cs-novamed',
        client: 'NovaMed Biotech Alliance',
        industry: 'Healthcare & Life Sciences',
        title: 'HIPAA-Compliant Federated AI Diagnostics & Genomic Lakehouse',
        challenge: 'NovaMed required a secure system to train predictive oncology diagnostic models across 18 independent hospital networks without transferring patient protected health information (PHI) off-site.',
        solution: 'Engineered a sovereign federated learning network utilizing private air-gapped GPU clusters. Only encrypted gradient weights were aggregated at the central coordinator, backed by cryptographic audit logs.',
        results: [
          'Accelerated clinical trial genomic biomarker indexing by 14x',
          'Passed complete multi-jurisdictional HIPAA & GDPR audits with zero infractions',
          'Trained models on 2.4M patient records while guaranteeing zero raw data exfiltration'
        ],
        tech: ['PyTorch', 'Milvus', 'vLLM', 'WireGuard', 'Docker'],
        stat: '14x Speedup'
      },
      {
        id: 'cs-vanguard',
        client: 'Vanguard Global Logix',
        industry: 'Supply Chain & Freight',
        title: 'Autonomous Multi-Modal Freight Routing & Edge IoT Mesh',
        challenge: 'Managing 65,000 intermodal shipping containers across 48 international ports, Vanguard experienced costly customs clearance delays and inefficient fuel consumption during regional port congestions.',
        solution: 'Implemented edge compute IoT nodes reporting satellite telemetry into an Apache Iceberg lakehouse. Automated heuristic routing algorithms dynamically rerouted freight to secondary terminals in real time.',
        results: [
          'Saved $32M in fuel and port demurrage penalties over a 12-month period',
          'Cut average container transit dwell time from 5.4 days to 1.8 days',
          'Automated 92% of international customs clearing documentation'
        ],
        tech: ['Apache Iceberg', 'ClickHouse', 'Kafka', 'Go', 'Terraform'],
        stat: '$32M Saved'
      },
      {
        id: 'cs-nexus',
        client: 'Nexus Robotics & Manufacturing',
        industry: 'Industrial Automation',
        title: 'Predictive Assembly Maintenance & Computer Vision Defect Detection',
        challenge: 'A catastrophic robotic arm gearbox failure on the primary automotive assembly line resulted in 14 hours of unplanned stoppage, costing over $4.2M in unfulfilled deliveries and labor waste.',
        solution: 'Deployed high-speed edge computer vision cameras running localized PyTorch models coupled with vibration acoustic sensors, streaming inference telemetry to a central Grafana observability plane.',
        results: [
          'Detected 99.8% of micro-fracture defects before catastrophic failure occurred',
          'Zero minutes of unplanned production stoppage in the subsequent 18 months',
          'Increased overall equipment effectiveness (OEE) score from 74% to 91%'
        ],
        tech: ['PyTorch', 'eBPF', 'Prometheus', 'Grafana', 'Kubernetes'],
        stat: 'Zero Unplanned Downtime'
      },
      {
        id: 'cs-omnis',
        client: 'Omnis Retail Consortia',
        industry: 'Global Retail & Commerce',
        title: 'Hyperscale Omnichannel Order Mesh & Edge Sub-Second Cache',
        challenge: 'During Black Friday flash sales, Omnis faced severe database deadlocks, leading to checkout cart abandonment rates of 42% and millions in lost revenue.',
        solution: 'Replaced the legacy relational checkout queue with an idempotent event-driven architecture using Redis enterprise cluster caching and Envoy edge rate-limiting.',
        results: [
          'Handled 145,000 checkouts per minute with sub-100ms response times',
          'Zero cart deadlock errors recorded across all global regional storefronts',
          '+$28.4M incremental revenue captured during holiday peak surge'
        ],
        tech: ['Go', 'Redis', 'Envoy', 'AWS', 'OpenTofu'],
        stat: '145k Checkouts/min'
      },
      {
        id: 'cs-helios',
        client: 'Helios Energy Network',
        industry: 'Clean Energy & Smart Grid',
        title: 'Zero-Trust Smart Grid Protection & NERC CIP Compliance',
        challenge: 'Helios operated 420 renewable solar and wind substations connected over commercial telecommunications lines, exposing critical power infrastructure to potential nation-state cyber incursions.',
        solution: 'Architected a zero-trust network overlay with mutual TLS (mTLS), hardware security keys (HSM), and air-gapped automated failover controllers across all substations.',
        results: [
          'Achieved 100% compliance with NERC CIP cyber security standards',
          'Neutralized over 14,000 automated external vulnerability probes daily',
          'Automated real-time power dispatch balancing grid load within 4 milliseconds'
        ],
        tech: ['SPIFFE/SPIRE', 'WireGuard', 'Rust', 'Linux Kernel', 'Vault'],
        stat: '100% NERC CIP Certified'
      }
    ],

    insights: [
      {
        id: 'ins-1',
        category: 'ai',
        categoryName: 'AI Governance',
        title: 'Architecting Private Sovereign LLMs for Fortune 500 Enterprises',
        date: 'Sept 2026',
        readTime: '8 min read',
        summary: 'How leading enterprises prevent intellectual property leakage while deploying high-throughput autonomous agents in air-gapped enclaves.',
        content: 'Enterprise AI deployment has reached an inflection point. While public consumer API endpoints offer rapid prototyping, they present unacceptable IP leakage and regulatory liabilities for organizations governed by SEC, HIPAA, or FedRAMP frameworks. In this whitepaper, we dissect the architecture of sovereign model inference: isolating GPU clusters within private VPCs, utilizing tokenization guardrails, and enforcing verifiable role-based access control.'
      },
      {
        id: 'ins-2',
        category: 'cloud',
        categoryName: 'Cloud Architecture',
        title: 'Zero-Downtime Multi-Cloud Migration: The Strangler-Fig Pattern at Scale',
        date: 'Aug 2026',
        readTime: '11 min read',
        summary: 'A tactical blueprint for decoupling monolithic mainframes into distributed Kubernetes service meshes without a single millisecond of downtime.',
        content: 'Decoupling multi-million line legacy monoliths is one of the most perilous endeavors in enterprise technology. The traditional "big bang" cutover carries catastrophic failure probabilities. We explore the implementation of the Strangler-Fig pattern: deploying an Envoy reverse proxy that progressively diverts traffic from the legacy monolith to new microservices while maintaining bidirectional database synchronization.'
      },
      {
        id: 'ins-3',
        category: 'security',
        categoryName: 'Cybersecurity',
        title: 'Beyond the Perimeter: Implementing SPIFFE/SPIRE Cryptographic Workload Identities',
        date: 'July 2026',
        readTime: '9 min read',
        summary: 'Why traditional IP whitelisting has failed and how short-lived X.509 SVIDs deliver true zero-trust micro-segmentation across hybrid clouds.',
        content: 'In modern distributed enterprise architectures, IP addresses are ephemeral and easily spoofed. Zero-Trust requires that every service request be cryptographically proven regardless of network topology. SPIFFE (Secure Production Identity Framework for Everyone) and its reference implementation SPIRE provide short-lived, automatically rotated cryptographic certificates that tie directly to kernel process attributes.'
      },
      {
        id: 'ins-4',
        category: 'strategy',
        categoryName: 'Strategy',
        title: 'The Enterprise FinOps Imperative: Cutting 35%+ of Cloud Waste via Algorithmic Governance',
        date: 'June 2026',
        readTime: '7 min read',
        summary: 'Actionable frameworks to eliminate unattached storage volumes, right-size compute allocations, and enforce automated tag-based shutdown policies.',
        content: 'Cloud bills represent one of the fastest growing operational expenditures in large organizations. However, industry audits indicate that up to 38% of cloud spend is entirely wasted on idle instances, over-provisioned IOPS, and abandoned snapshots. We present an algorithmic FinOps blueprint that continuously monitors resource utilization and dynamically executes right-sizing policies.'
      },
      {
        id: 'ins-5',
        category: 'cloud',
        categoryName: 'Cloud Architecture',
        title: 'Next-Gen eBPF Networking: Replacing Costly Proxies with Kernel-Level Observability',
        date: 'May 2026',
        readTime: '10 min read',
        summary: 'How extended Berkeley Packet Filter (eBPF) technology revolutionizes Kubernetes pod communication, routing packets directly within the Linux kernel.',
        content: 'Traditional service meshes introduce significant CPU and latency overhead by forcing every network packet through a user-space sidecar proxy. eBPF fundamentally shifts this paradigm by executing sandboxed programs directly within the Linux kernel. This delivers up to 40% higher network throughput and ultra-granular visibility without modifying application code.'
      },
      {
        id: 'ins-6',
        category: 'security',
        categoryName: 'Cybersecurity',
        title: 'Preparing Enterprise Cryptography for the Post-Quantum Era',
        date: 'April 2026',
        readTime: '12 min read',
        summary: 'Assessing NIST post-quantum encryption standards (ML-KEM and ML-DSA) and migrating critical banking and defense backbones.',
        content: 'While fault-tolerant quantum computers capable of breaking RSA-2048 are still years away, adversaries are currently capturing encrypted enterprise traffic under "harvest now, decrypt later" strategies. Forward-looking security architects must begin introducing hybrid post-quantum key exchange mechanisms into their TLS termination layers today.'
      }
    ],

    team: [
      {
        id: 'tm-1',
        name: 'Dr. Jennifer Vance',
        initials: 'JV',
        role: 'Chief Technology Officer & Managing Principal',
        dept: 'Architecture',
        location: 'New York / Zurich',
        expertise: ['Distributed Systems', 'Cloud Modernization', 'Fintech Architecture'],
        availability: 'Available for Executive Briefings'
      },
      {
        id: 'tm-2',
        name: 'Marcus Ray',
        initials: 'MR',
        role: 'Principal Cloud & SRE Architect',
        dept: 'Cloud',
        location: 'San Francisco, CA',
        expertise: ['Kubernetes Service Mesh', 'Multi-Cloud', 'eBPF Kernel Routing'],
        availability: 'Active Now • Leading Pod 1'
      },
      {
        id: 'tm-3',
        name: 'Samantha Miller',
        initials: 'SM',
        role: 'Head of Cybersecurity & Zero-Trust',
        dept: 'Security',
        location: 'Washington, D.C.',
        expertise: ['FedRAMP High', 'SPIFFE/SPIRE', 'Cryptographic Identities'],
        availability: 'Available for Security Review'
      },
      {
        id: 'tm-4',
        name: 'Alex Chen',
        initials: 'AC',
        role: 'Principal AI & Autonomous Systems Lead',
        dept: 'AI',
        location: 'Seattle, WA',
        expertise: ['Private Sovereign LLMs', 'Deterministic RAG', 'High-Throughput GPUs'],
        availability: 'Active Now • Pod 2 Lead'
      },
      {
        id: 'tm-5',
        name: 'Elena Rostova',
        initials: 'ER',
        role: 'Chief Data Architect',
        dept: 'Data',
        location: 'London, UK',
        expertise: ['Apache Iceberg', 'ClickHouse OLAP', 'Real-Time Kafka Streaming'],
        availability: 'Available for Consultation'
      },
      {
        id: 'tm-6',
        name: 'David Okafor',
        initials: 'DO',
        role: 'Director of Enterprise Program Delivery',
        dept: 'Architecture',
        location: 'Toronto, Canada',
        expertise: ['Agile Transformation', 'SLA Governance', 'Fortune 100 Engagements'],
        availability: 'Available for Review'
      }
    ],

    documents: [
      {
        id: 'doc-soc2',
        title: 'SOC-2 Type II Enterprise Attestation Report (2026)',
        type: 'compliance',
        typeName: 'Security Compliance',
        date: 'August 2026',
        size: '2.4 MB',
        summary: 'Certified third-party audit confirming zero exceptions across Security, Availability, and Confidentiality trust principles.'
      },
      {
        id: 'doc-arch',
        title: 'SYNERGEX Zero-Trust Cloud Architecture Whitepaper',
        type: 'architecture',
        typeName: 'Technical Blueprint',
        date: 'September 2026',
        size: '5.1 MB',
        summary: 'Detailed topological blueprints of our sovereign multi-cloud mesh with SPIFFE/SPIRE cryptographic identities.'
      },
      {
        id: 'doc-sla',
        title: 'Enterprise Master Services Agreement & SLA Guarantee',
        type: 'contracts',
        typeName: 'Legal & SLA Governance',
        date: 'July 2026',
        size: '1.2 MB',
        summary: 'Comprehensive legal terms, 99.995% uptime guarantees, financially backed remedies, and 15-minute response commitments.'
      },
      {
        id: 'doc-finops',
        title: 'Executive FinOps & Cost Optimization Framework',
        type: 'architecture',
        typeName: 'Financial Governance',
        date: 'June 2026',
        size: '3.8 MB',
        summary: 'Tactical governance guide for continuous Kubernetes node right-sizing, reserved instance utilization, and tag enforcement.'
      },
      {
        id: 'doc-hipaa',
        title: 'HIPAA & HITECH Healthcare Compliance Attestation',
        type: 'compliance',
        typeName: 'Healthcare Security',
        date: 'May 2026',
        size: '1.9 MB',
        summary: 'Official compliance attestation covering cryptographic encryption of patient health data at rest and in transit.'
      },
      {
        id: 'doc-audit',
        title: 'Quarterly Infrastructure Telemetry & Latency Audit Q3',
        type: 'architecture',
        typeName: 'Operations Telemetry',
        date: 'September 2026',
        size: '4.4 MB',
        summary: 'Live empirical metrics across 48 global availability zones demonstrating sub-8ms edge round-trip latency.'
      }
    ],

    chatContacts: [
      { id: 'cc-1', name: 'Marcus Ray', role: 'Principal Cloud Architect', avatar: 'MR', status: 'online', snippet: 'Your EU-Central mesh failover test passed with 100% zero packet loss.' },
      { id: 'cc-2', name: 'Samantha Miller', role: 'Head of Cybersecurity', avatar: 'SM', status: 'online', snippet: 'The updated FedRAMP continuous compliance report is ready for your sign-off.' },
      { id: 'cc-3', name: 'Dr. Jennifer Vance', role: 'Managing Principal CTO', avatar: 'JV', status: 'away', snippet: 'Looking forward to our roadmap briefing scheduled for Thursday morning.' }
    ]
  };

  /* ==========================================================================
     2. LOCAL STORAGE PERSISTENCE STATE MANAGER
     ========================================================================== */
  const STORAGE_KEYS = {
    theme: 'synergex_theme_preference',
    user: 'synergex_user_profile',
    bookmarks: 'synergex_saved_bookmarks',
    projects: 'synergex_projects_list',
    tickets: 'synergex_support_tickets',
    appointments: 'synergex_scheduled_appointments',
    notifications: 'synergex_notifications_list',
    chatHistory: 'synergex_client_chat_history'
  };

  // Safe localStorage helper functions with error boundaries
  function getStored(key, defaultValue) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn('LocalStorage Read Error:', e);
      return defaultValue;
    }
  }

  function setStored(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage Write Error:', e);
    }
  }

  // Initial State Hydration
  const state = {
    theme: getStored(STORAGE_KEYS.theme, 'dark'),
    user: getStored(STORAGE_KEYS.user, {
      fullName: 'Jennifer Vance',
      orgName: 'Nexus Global Technologies Inc.',
      role: 'Vice President of Engineering',
      email: 'j.vance@nexusglobal.com',
      region: 'us-east',
      tier: 'Enterprise Platinum (15m SLA)',
      twoFactor: true
    }),
    bookmarks: getStored(STORAGE_KEYS.bookmarks, ['sol-cloud', 'sol-sec']),
    projects: getStored(STORAGE_KEYS.projects, [
      {
        id: 'PRJ-1081',
        name: 'Zero-Trust Mesh Rollout Phase 2',
        client: 'Aura Financial Services',
        status: 'In Progress',
        progress: 68,
        lead: 'Marcus Ray',
        deadline: '2026-11-15',
        priority: 'Critical'
      },
      {
        id: 'PRJ-1082',
        name: 'Genomic AI Lakehouse Pipeline',
        client: 'NovaMed Biotech Alliance',
        status: 'In Progress',
        progress: 84,
        lead: 'Alex Chen',
        deadline: '2026-10-30',
        priority: 'High'
      },
      {
        id: 'PRJ-1083',
        name: 'Autonomous Freight IoT Ingestion',
        client: 'Vanguard Global Logix',
        status: 'Review',
        progress: 95,
        lead: 'Elena Rostova',
        deadline: '2026-10-10',
        priority: 'High'
      },
      {
        id: 'PRJ-1084',
        name: 'Edge Vision Defect Detection Pods',
        client: 'Nexus Robotics Corp',
        status: 'Completed',
        progress: 100,
        lead: 'Marcus Ray',
        deadline: '2026-08-25',
        priority: 'Medium'
      },
      {
        id: 'PRJ-1085',
        name: 'Mainframe Decoupling & Kafka Migration',
        client: 'Omnis Retail Consortia',
        status: 'Planning',
        progress: 25,
        lead: 'Dr. Jennifer Vance',
        deadline: '2027-01-20',
        priority: 'Critical'
      }
    ]),
    tickets: getStored(STORAGE_KEYS.tickets, [
      {
        id: 'TCK-9401',
        subject: 'Latency elevation in EU-Central mesh ingress point',
        category: 'Cloud Infrastructure',
        priority: 'Critical',
        desc: 'During 14:00 UTC spike, latency across Frankfurt availability zone rose from 12ms to 48ms.',
        status: 'In Progress',
        date: 'Today, 14:22'
      },
      {
        id: 'TCK-9402',
        subject: 'Scheduled certificate rotation for SPIRE agent federation',
        category: 'Security / Firewall',
        priority: 'High',
        desc: 'Routine 90-day X.509 SVID intermediate authority re-key scheduled for maintenance window.',
        status: 'Open',
        date: 'Today, 11:05'
      },
      {
        id: 'TCK-9403',
        subject: 'Milvus vector index optimization for medical corpus',
        category: 'AI Pipeline',
        priority: 'Medium',
        desc: 'Requesting memory allocation boost to support 50M new biological token embeddings.',
        status: 'Open',
        date: 'Yesterday'
      },
      {
        id: 'TCK-9399',
        subject: 'Disaster recovery failover simulation test verification',
        category: 'Cloud Infrastructure',
        priority: 'High',
        desc: 'Simulated cross-continental cutover executed successfully in 1.4 seconds with zero loss.',
        status: 'Resolved',
        date: '3 days ago'
      },
      {
        id: 'TCK-9398',
        subject: 'FinOps tag policy enforcement on test staging cluster',
        category: 'Billing & Governance',
        priority: 'Medium',
        desc: 'Automated script successfully tagged 48 unassigned volumes and decommissioned 12 idle pods.',
        status: 'Resolved',
        date: '5 days ago'
      },
      {
        id: 'TCK-9395',
        subject: 'Firewall ruleset audit for PCI-DSS compliance verification',
        category: 'Security / Firewall',
        priority: 'Critical',
        desc: 'Complete penetration test report signed off by lead compliance officer.',
        status: 'Resolved',
        date: '1 week ago'
      }
    ]),
    appointments: getStored(STORAGE_KEYS.appointments, [
      {
        id: 'APT-501',
        service: 'Hyperscale Cloud Infrastructure',
        industry: 'Banking & Financial Services',
        date: '2026-10-18',
        time: '11:30 AM - 12:30 PM EST',
        format: 'Video Conference',
        name: 'Jennifer Vance',
        email: 'j.vance@nexusglobal.com',
        company: 'Nexus Global Technologies',
        notes: 'Review multi-region active-active disaster recovery blueprints.'
      }
    ]),
    notifications: getStored(STORAGE_KEYS.notifications, [
      {
        id: 'notif-1',
        title: 'Core Engine v4.8 Active',
        desc: 'Multi-Cloud Neural Fabric with FedRAMP High compliance successfully deployed across all 48 zones.',
        time: '10 min ago',
        unread: true,
        type: 'system'
      },
      {
        id: 'notif-2',
        title: 'Project Milestone Reached',
        desc: 'Zero-Trust Mesh Rollout Phase 2 is now 68% complete and verified by the SRE team.',
        time: '1 hour ago',
        unread: true,
        type: 'project'
      },
      {
        id: 'notif-3',
        title: 'Support Response Received',
        desc: 'Principal Architect Marcus Ray updated Ticket #TCK-9401 with packet trace analysis.',
        time: '2 hours ago',
        unread: false,
        type: 'support'
      },
      {
        id: 'notif-4',
        title: 'Scheduled Executive Briefing',
        desc: 'Upcoming session on Cloud Infrastructure scheduled for Oct 18, 11:30 AM EST.',
        time: 'Yesterday',
        unread: false,
        type: 'calendar'
      }
    ]),
    chatHistory: getStored(STORAGE_KEYS.chatHistory, [
      {
        sender: 'specialist',
        name: 'Marcus Ray',
        text: 'Good morning Jennifer. The telemetry audit across your Frankfurt and Zurich nodes completed overnight with zero packet drops.',
        time: '09:15 AM'
      },
      {
        sender: 'user',
        name: 'You',
        text: 'Excellent. What does our projected cloud cost optimization look like after yesterday’s auto-scaler policy update?',
        time: '09:22 AM'
      },
      {
        sender: 'specialist',
        name: 'Marcus Ray',
        text: 'We are currently tracking at a 26.4% reduction in monthly compute spend, saving roughly $148,200/mo while keeping P99 latency firmly under 15ms.',
        time: '09:24 AM'
      }
    ])
  };

  /* ==========================================================================
     3. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message, icon = '✓') {
    const stack = document.getElementById('toastStack');
    if (!stack) return;

    const toast = document.createElement('div');
    toast.className = 'toast-card';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-text">${escapeHTML(message)}</span>
    `;

    stack.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 4000);
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* ==========================================================================
     4. THEME CONTROLLER & DEMO AUTH
     ========================================================================== */
  function initTheme() {
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('data-theme', state.theme);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', state.theme);
        setStored(STORAGE_KEYS.theme, state.theme);
        showToast(`Theme switched to ${state.theme === 'dark' ? 'Executive Emerald Dark' : 'Platinum Ivory Light'} Mode`);
        // Redraw canvas charts with updated theme colors
        drawAllBICharts();
      });
    }
  }

  function initUserAuth() {
    const userBtn = document.getElementById('userAuthBtn');
    const authModal = document.getElementById('authModalBackdrop');
    const closeAuthBtn = document.getElementById('closeAuthModalBtn');
    const rolePills = document.querySelectorAll('.role-pill');
    const demoLoginForm = document.getElementById('demoLoginForm');

    function syncUserUI() {
      const avatarText = document.getElementById('userAvatarText');
      const roleBadge = document.getElementById('userRoleBadge');
      const portalWelcome = document.getElementById('portalWelcomeText');
      const portalUserOrg = document.getElementById('portalUserOrgName');

      const initials = state.user.fullName.split(' ').map(n => n[0]).join('').toUpperCase();
      if (avatarText) avatarText.textContent = initials || 'EX';
      if (roleBadge) roleBadge.textContent = state.user.role.split(' ')[0] || 'Enterprise';
      if (portalWelcome) portalWelcome.textContent = `${state.user.fullName}'s Command Center`;
      if (portalUserOrg) portalUserOrg.textContent = state.user.orgName;
    }

    syncUserUI();

    if (userBtn && authModal) {
      userBtn.addEventListener('click', () => authModal.classList.remove('hidden'));
    }

    if (closeAuthBtn && authModal) {
      closeAuthBtn.addEventListener('click', () => authModal.classList.add('hidden'));
      authModal.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.classList.add('hidden');
      });
    }

    rolePills.forEach(pill => {
      pill.addEventListener('click', () => {
        rolePills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        const role = pill.getAttribute('data-role');
        const name = pill.getAttribute('data-name');
        const org = pill.getAttribute('data-org');

        state.user.fullName = name;
        state.user.role = role;
        state.user.orgName = org;
        setStored(STORAGE_KEYS.user, state.user);

        const emailInput = document.getElementById('demoAuthEmail');
        if (emailInput) {
          emailInput.value = `${name.toLowerCase().replace(/[^a-z]/g, '.')}@${org.toLowerCase().replace(/[^a-z]/g, '')}.com`;
        }
      });
    });

    if (demoLoginForm) {
      demoLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        syncUserUI();
        if (authModal) authModal.classList.add('hidden');
        showToast(`Authenticated as ${state.user.fullName} (${state.user.role})`);
      });
    }
  }

  /* ==========================================================================
     5. HERO ECOSYSTEM INTERACTIVE CANVAS
     ========================================================================== */
  function initHeroCanvas() {
    const canvas = document.getElementById('heroEcosystemCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = canvas.parentElement.clientWidth || 560);
    let height = (canvas.height = 480);

    window.addEventListener('resize', () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.clientWidth || 560;
        height = canvas.height = 480;
        initNodes();
      }
    });

    // Enterprise Ecosystem Network Nodes
    const moduleTitles = [
      'Zero-Trust Mesh',
      'Sovereign AI Enclave',
      'Kafka Stream Fabric',
      'Lakehouse ClickHouse',
      'Global Edge CDN',
      'Kubernetes Core Pods',
      'FinOps Automated Governance',
      'Hardware HSM Vault'
    ];

    let nodes = [];
    let pulseWave = 0;
    let pulseActive = false;
    let mouse = { x: -1000, y: -1000, radius: 120 };

    function initNodes() {
      nodes = [];
      const nodeCount = 18;
      for (let i = 0; i < nodeCount; i++) {
        const isCoreModule = i < moduleTitles.length;
        nodes.push({
          x: Math.random() * (width - 120) + 60,
          y: Math.random() * (height - 100) + 50,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: isCoreModule ? 6 : 3,
          isCore: isCoreModule,
          title: isCoreModule ? moduleTitles[i] : null,
          color: isCoreModule ? '#10b981' : '#cbd5e1',
          pulse: Math.random() * Math.PI * 2
        });
      }
    }

    initNodes();

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    canvas.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    // Interactive Trigger Controls
    const pulseBtn = document.getElementById('canvasPulseBtn');
    const resetBtn = document.getElementById('canvasResetBtn');

    if (pulseBtn) {
      pulseBtn.addEventListener('click', () => {
        pulseWave = 0;
        pulseActive = true;
        showToast('Global Telemetry Pulse broadcast to 48 regions');
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        initNodes();
        showToast('Network visualizer recalibrated to baseline');
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const lineBaseColor = isDark ? 'rgba(16, 185, 129,' : 'rgba(5, 150, 105,';
      const textColor = isDark ? '#f8fafc' : '#09231b';

      // Draw connecting edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * (isDark ? 0.35 : 0.22);
            ctx.strokeStyle = `${lineBaseColor} ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();

            // Draw traveling data packets along edges
            if (dist < 100 && Math.sin(Date.now() * 0.003 + i) > 0.8) {
              const t = (Date.now() * 0.001) % 1;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * t;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * t;
              ctx.fillStyle = '#34d399';
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw Pulse Wave if triggered
      if (pulseActive) {
        pulseWave += 6;
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, pulseWave, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${Math.max(0, 1 - pulseWave / (width * 0.8))})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        if (pulseWave > width * 0.8) pulseActive = false;
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Natural drift
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas boundaries
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Mouse hover interaction
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < mouse.radius) {
          const force = (1 - mDist / mouse.radius) * 2;
          node.x += (mdx / mDist) * force;
          node.y += (mdy / mDist) * force;
        }

        // Draw node glow
        node.pulse += 0.03;
        const pRadius = node.radius + Math.sin(node.pulse) * 1.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, pRadius + (node.isCore ? 4 : 2), 0, Math.PI * 2);
        ctx.fillStyle = node.isCore ? 'rgba(16, 185, 129, 0.25)' : 'rgba(203, 213, 225, 0.15)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Node label
        if (node.isCore && node.title) {
          ctx.font = '600 10px Plus Jakarta Sans, sans-serif';
          ctx.fillStyle = textColor;
          ctx.fillText(node.title, node.x + 10, node.y + 3);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  /* ==========================================================================
     6. LIVE ANIMATED NUMBER STATISTICS
     ========================================================================== */
  function initCounters() {
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          const numbers = document.querySelectorAll('.stat-number');
          numbers.forEach(el => {
            const target = parseFloat(el.getAttribute('data-target')) || 0;
            const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
            const duration = 1800;
            const startTime = performance.now();

            function updateCounter(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Easing: easeOutExpo
              const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
              const currentVal = target * eased;

              el.textContent = decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal).toLocaleString();

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
              }
            }

            requestAnimationFrame(updateCounter);
          });
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }

  /* ==========================================================================
     7. SOLUTIONS MARKETPLACE & FACETED FILTERING
     ========================================================================== */
  function initSolutionsMarketplace() {
    const grid = document.getElementById('solutionsGrid');
    const searchInput = document.getElementById('solutionSearchInput');
    const clearBtn = document.getElementById('clearSolutionSearch');
    const sortSelect = document.getElementById('solutionSortSelect');
    const filterIndustry = document.getElementById('filterIndustry');
    const filterSize = document.getElementById('filterSize');
    const filterType = document.getElementById('filterType');
    const filterGoal = document.getElementById('filterGoal');
    const resetBtn = document.getElementById('resetFiltersBtn');
    const emptyResetBtn = document.getElementById('emptyStateResetBtn');
    const countEl = document.getElementById('visibleSolutionsCount');
    const emptyState = document.getElementById('noSolutionsState');
    const activeTagsContainer = document.getElementById('activeFilterTags');

    if (!grid) return;

    function renderSolutions() {
      const query = (searchInput.value || '').toLowerCase().trim();
      const ind = filterIndustry.value;
      const size = filterSize.value;
      const type = filterType.value;
      const goal = filterGoal.value;
      const sortBy = sortSelect.value;

      // Update clear button visibility
      if (clearBtn) {
        if (query) clearBtn.classList.add('active');
        else clearBtn.classList.remove('active');
      }

      // Filter
      let filtered = DATA.solutions.filter(item => {
        // Search Match
        const matchesQuery = !query ||
          item.title.toLowerCase().includes(query) ||
          item.desc.toLowerCase().includes(query) ||
          item.categoryName.toLowerCase().includes(query) ||
          item.benefits.some(b => b.toLowerCase().includes(query));

        // Industry Match
        const matchesIndustry = ind === 'all' || item.industry.includes(ind);

        // Size Match
        const matchesSize = size === 'all' || item.size.includes(size);

        // Type Match
        const matchesType = type === 'all' || item.type === type;

        // Goal Match
        const matchesGoal = goal === 'all' || item.goal === goal;

        return matchesQuery && matchesIndustry && matchesSize && matchesType && matchesGoal;
      });

      // Sort
      if (sortBy === 'popular') {
        filtered.sort((a, b) => b.benefits.length - a.benefits.length);
      } else if (sortBy === 'newest') {
        filtered.reverse();
      } else if (sortBy === 'scale') {
        filtered.sort((a, b) => (b.size.includes('fortune500') ? 1 : -1));
      } else if (sortBy === 'efficiency') {
        filtered.sort((a, b) => (b.roi.includes('%') ? 1 : -1));
      }

      // Render Active Tag Pills
      if (activeTagsContainer) {
        activeTagsContainer.innerHTML = '';
        if (ind !== 'all') addTagPill('Industry: ' + ind, () => { filterIndustry.value = 'all'; renderSolutions(); });
        if (size !== 'all') addTagPill('Size: ' + size, () => { filterSize.value = 'all'; renderSolutions(); });
        if (type !== 'all') addTagPill('Type: ' + type, () => { filterType.value = 'all'; renderSolutions(); });
        if (goal !== 'all') addTagPill('Goal: ' + goal, () => { filterGoal.value = 'all'; renderSolutions(); });
        if (query) addTagPill('Query: "' + query + '"', () => { searchInput.value = ''; renderSolutions(); });
      }

      function addTagPill(label, onRemove) {
        const pill = document.createElement('span');
        pill.className = 'filter-tag-pill';
        pill.innerHTML = `<span>${label}</span> <button aria-label="Remove filter">&times;</button>`;
        pill.querySelector('button').addEventListener('click', onRemove);
        activeTagsContainer.appendChild(pill);
      }

      // Count
      if (countEl) countEl.textContent = filtered.length;

      // Empty State
      if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
      } else {
        if (emptyState) emptyState.classList.add('hidden');
      }

      // Render Cards
      grid.innerHTML = filtered.map(item => {
        const isSaved = state.bookmarks.includes(item.id);
        return `
          <article class="solution-card" data-id="${item.id}">
            <div class="solution-card-top">
              <div class="solution-icon-box">${item.icon}</div>
              <button class="save-bookmark-btn ${isSaved ? 'saved' : ''}" data-sol-id="${item.id}" title="${isSaved ? 'Remove from Saved' : 'Save Solution'}">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>

            <span class="solution-category-badge">${escapeHTML(item.categoryName)}</span>
            <h3 class="solution-card-title">${escapeHTML(item.title)}</h3>
            <p class="solution-card-desc">${escapeHTML(item.desc)}</p>

            <div class="solution-benefits-list">
              ${item.benefits.map(b => `<span class="benefit-tag">${escapeHTML(b)}</span>`).join('')}
            </div>

            <div class="solution-card-footer">
              <span class="solution-metric-tag">${escapeHTML(item.roi)}</span>
              <button class="btn btn-secondary btn-sm open-solution-modal-btn" data-sol-id="${item.id}">
                <span>Explore Solution</span> &rarr;
              </button>
            </div>
          </article>
        `;
      }).join('');

      // Attach Card Handlers
      grid.querySelectorAll('.save-bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-sol-id');
          toggleBookmark(id);
        });
      });

      grid.querySelectorAll('.open-solution-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const id = btn.getAttribute('data-sol-id');
          openSolutionModal(id);
        });
      });
    }

    // Event Listeners
    searchInput.addEventListener('input', renderSolutions);
    if (clearBtn) clearBtn.addEventListener('click', () => { searchInput.value = ''; renderSolutions(); });
    sortSelect.addEventListener('change', renderSolutions);
    filterIndustry.addEventListener('change', renderSolutions);
    filterSize.addEventListener('change', renderSolutions);
    filterType.addEventListener('change', renderSolutions);
    filterGoal.addEventListener('change', renderSolutions);

    const resetAll = () => {
      searchInput.value = '';
      filterIndustry.value = 'all';
      filterSize.value = 'all';
      filterType.value = 'all';
      filterGoal.value = 'all';
      sortSelect.value = 'recommended';
      renderSolutions();
      showToast('Filters reset to default view');
    };

    if (resetBtn) resetBtn.addEventListener('click', resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

    // Initial render
    renderSolutions();
  }

  function toggleBookmark(id) {
    const idx = state.bookmarks.indexOf(id);
    if (idx >= 0) {
      state.bookmarks.splice(idx, 1);
      showToast('Item removed from saved briefs');
    } else {
      state.bookmarks.push(id);
      showToast('Solution saved to executive brief');
    }
    setStored(STORAGE_KEYS.bookmarks, state.bookmarks);
    updateBookmarkBadge();

    // Re-render solutions and drawer if open
    const grid = document.getElementById('solutionsGrid');
    if (grid) {
      grid.querySelectorAll(`.save-bookmark-btn[data-sol-id="${id}"]`).forEach(b => {
        const isSaved = state.bookmarks.includes(id);
        b.classList.toggle('saved', isSaved);
        const svg = b.querySelector('svg');
        if (svg) svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
      });
    }
    renderSavedDrawerItems();
  }

  function updateBookmarkBadge() {
    const badge = document.getElementById('savedCountBadge');
    if (badge) badge.textContent = state.bookmarks.length;
  }

  /* ==========================================================================
     8. SOLUTION DETAIL MODAL
     ========================================================================== */
  function openSolutionModal(id) {
    const item = DATA.solutions.find(s => s.id === id);
    if (!item) return;

    const modal = document.getElementById('solutionModalBackdrop');
    const catEl = document.getElementById('solModalCategory');
    const metricEl = document.getElementById('solModalMetric');
    const contentEl = document.getElementById('solModalContent');
    const saveBtn = document.getElementById('solModalSaveBtn');
    const reqBtn = document.getElementById('solModalRequestBtn');

    if (catEl) catEl.textContent = item.categoryName;
    if (metricEl) metricEl.textContent = item.roi;

    if (contentEl) {
      contentEl.innerHTML = `
        <div class="modal-sol-header">
          <h2 style="font-size: 1.8rem; margin-bottom: 12px;">${escapeHTML(item.title)}</h2>
          <p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 24px;">${escapeHTML(item.desc)}</p>
        </div>

        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--plat-border); border-radius: var(--border-radius-md); padding: 24px; margin-bottom: 24px;">
          <h4 style="color: var(--color-warning); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 8px;">The Enterprise Problem</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${escapeHTML(item.fullDetails.problem)}</p>
        </div>

        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--plat-border); border-radius: var(--border-radius-md); padding: 24px; margin-bottom: 24px;">
          <h4 style="color: var(--emerald-primary); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 8px;">Architectural Solution</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${escapeHTML(item.fullDetails.architecture)}</p>
        </div>

        <div style="background: var(--emerald-subtle); border: 1px solid var(--emerald-border); border-radius: var(--border-radius-md); padding: 20px;">
          <h4 style="color: var(--emerald-hover); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 6px;">Measured Business ROI</h4>
          <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${escapeHTML(item.fullDetails.impact)}</p>
        </div>
      `;
    }

    if (saveBtn) {
      saveBtn.onclick = () => {
        toggleBookmark(item.id);
        const isSaved = state.bookmarks.includes(item.id);
        saveBtn.querySelector('span').textContent = isSaved ? 'Saved in Brief' : 'Save to My Brief';
      };
      const isSaved = state.bookmarks.includes(item.id);
      saveBtn.querySelector('span').textContent = isSaved ? 'Saved in Brief' : 'Save to My Brief';
    }

    if (reqBtn) {
      reqBtn.onclick = () => {
        modal.classList.add('hidden');
        // Pre-fill consultation form
        const serviceSelect = document.getElementById('consultService');
        if (serviceSelect) {
          serviceSelect.value = serviceSelect.options[1].value; // default match
          window.location.hash = '#consultation';
          showToast(`Selected "${item.title}" for consultation`);
        }
      };
    }

    if (modal) modal.classList.remove('hidden');
  }

  function initSolutionModal() {
    const modal = document.getElementById('solutionModalBackdrop');
    const closeBtn = document.getElementById('closeSolutionModalBtn');
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    }
  }

  /* ==========================================================================
     9. INDUSTRIES & CASE STUDY MATRIX
     ========================================================================== */
  function initIndustriesGrid() {
    const grid = document.getElementById('industriesGrid');
    if (!grid) return;

    grid.innerHTML = DATA.industries.map(ind => `
      <div class="industry-card" data-ind-id="${ind.id}">
        <div class="industry-card-icon">${ind.icon}</div>
        <h3 class="industry-card-title">${escapeHTML(ind.name)}</h3>
        <p class="industry-card-desc">${escapeHTML(ind.desc)}</p>
        <div class="industry-card-action">
          <span>View Industry Blueprint</span> &rarr;
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.industry-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-ind-id');
        openIndustryModal(id);
      });
    });
  }

  function openIndustryModal(id) {
    const ind = DATA.industries.find(i => i.id === id);
    if (!ind) return;

    const modal = document.getElementById('caseStudyModalBackdrop');
    const clientEl = document.getElementById('caseModalClient');
    const contentEl = document.getElementById('caseModalContent');
    const consultBtn = document.getElementById('caseModalConsultBtn');

    if (clientEl) clientEl.textContent = `${ind.name} Blueprint`;
    if (contentEl) {
      contentEl.innerHTML = `
        <h2 style="font-size: 1.8rem; margin-bottom: 16px;">${ind.icon} ${escapeHTML(ind.name)} Architecture</h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 24px;">${escapeHTML(ind.desc)}</p>

        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--plat-border); border-radius: var(--border-radius-md); padding: 20px; margin-bottom: 20px;">
          <h4 style="font-size: 0.85rem; color: var(--color-warning); text-transform: uppercase; margin-bottom: 6px;">Key Industry Challenge</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">${escapeHTML(ind.challenges)}</p>
        </div>

        <div style="background: var(--bg-surface-elevated); border: 1px solid var(--plat-border); border-radius: var(--border-radius-md); padding: 20px; margin-bottom: 20px;">
          <h4 style="font-size: 0.85rem; color: var(--emerald-primary); text-transform: uppercase; margin-bottom: 6px;">Engineered Technical Solution</h4>
          <p style="font-size: 0.95rem; color: var(--text-secondary);">${escapeHTML(ind.solution)}</p>
        </div>

        <div style="margin-top: 24px;">
          <h4 style="font-size: 0.82rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 10px;">Mandatory Regulatory Standards</h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            ${ind.compliance.map(c => `<span class="c-badge" style="font-size: 0.8rem; padding: 4px 10px;">${escapeHTML(c)}</span>`).join('')}
          </div>
        </div>
      `;
    }

    if (consultBtn) {
      consultBtn.onclick = () => {
        if (modal) modal.classList.add('hidden');
        window.location.hash = '#consultation';
      };
    }

    if (modal) modal.classList.remove('hidden');
  }

  /* ==========================================================================
     10. ENTERPRISE SERVICES
     ========================================================================== */
  function initServicesGrid() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = DATA.services.map(srv => `
      <div class="service-card">
        <div class="service-header">
          <h3 class="service-title">${escapeHTML(srv.title)}</h3>
          <span class="service-timeline-badge">${escapeHTML(srv.timeline)}</span>
        </div>
        <p class="service-desc">${escapeHTML(srv.desc)}</p>
        <ul class="service-deliverables">
          ${srv.deliverables.map(d => `<li>${escapeHTML(d)}</li>`).join('')}
        </ul>
        <button class="btn btn-secondary btn-sm request-service-btn" data-title="${escapeHTML(srv.title)}">
          Request Service Engagement &rarr;
        </button>
      </div>
    `).join('');

    grid.querySelectorAll('.request-service-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const consultSelect = document.getElementById('consultService');
        if (consultSelect) {
          consultSelect.value = title;
        }
        window.location.hash = '#consultation';
        showToast(`Selected "${title}" for consultation`);
      });
    });
  }

  /* ==========================================================================
     11. DYNAMIC TECHNOLOGY STACK EXPLORER
     ========================================================================== */
  function initTechStack() {
    const tabsNav = document.getElementById('techTabsNav');
    const showcaseGrid = document.getElementById('techShowcaseGrid');
    if (!tabsNav || !showcaseGrid) return;

    function renderCategory(cat) {
      const list = DATA.techStack[cat] || [];
      showcaseGrid.innerHTML = list.map(item => `
        <div class="tech-capability-card">
          <div class="tech-card-top">
            <h4 class="tech-name">${escapeHTML(item.name)}</h4>
            <span class="tech-readiness">${escapeHTML(item.readiness)}</span>
          </div>
          <p class="tech-spec">${escapeHTML(item.spec)}</p>
          <div class="tech-badge-pills">
            ${item.pills.map(p => `<span class="tech-pill">${escapeHTML(p)}</span>`).join('')}
          </div>
        </div>
      `).join('');
    }

    tabsNav.querySelectorAll('.tech-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsNav.querySelectorAll('.tech-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        renderCategory(cat);
      });
    });

    // Default to cloud
    renderCategory('cloud');
  }

  /* ==========================================================================
     12. EXECUTIVE BI ANALYTICS DASHBOARD (5 CANVAS CHARTS)
     ========================================================================== */
  function drawAllBICharts() {
    drawPerformanceChart('7d');
    drawAdoptionChart();
    drawProgressChart();
    drawVolumeChart();
    drawCostChart();
  }

  // Chart 1: Operational Performance Throughput
  function drawPerformanceChart(range = '7d') {
    const canvas = document.getElementById('perfChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.parentElement.clientWidth || 700);
    const height = (canvas.height = 260);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const gridColor = isDark ? 'rgba(226, 232, 240, 0.08)' : 'rgba(0, 0, 0, 0.06)';
    const textColor = isDark ? '#94a3b8' : '#64748b';

    // Mock time series data
    let points = [32, 45, 41, 64, 58, 82, 79, 94, 88, 110, 105, 128];
    if (range === '30d') points = [28, 38, 48, 42, 60, 75, 90, 85, 115, 120, 135, 142];
    if (range === '90d') points = [20, 30, 42, 55, 68, 79, 95, 110, 125, 140, 155, 172];
    if (range === '1y') points = [15, 25, 35, 50, 70, 85, 105, 125, 145, 168, 190, 220];

    const padding = { top: 30, right: 30, bottom: 40, left: 50 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    ctx.clearRect(0, 0, width, height);

    // Gridlines & Y-Axis Labels
    const yTicks = 4;
    ctx.font = '11px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'right';

    for (let i = 0; i <= yTicks; i++) {
      const y = padding.top + (chartH / yTicks) * i;
      const val = Math.round(250 - (250 / yTicks) * i);

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();

      ctx.fillText(val + 'M', padding.left - 10, y + 4);
    }

    // Coordinates
    const coords = points.map((val, idx) => {
      const x = padding.left + (chartW / (points.length - 1)) * idx;
      const y = padding.top + chartH - (val / 250) * chartH;
      return { x, y, val };
    });

    // Spline Fill Gradient
    const grad = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
    grad.addColorStop(0, isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(5, 150, 105, 0.35)');
    grad.addColorStop(1, isDark ? 'rgba(16, 185, 129, 0.0)' : 'rgba(5, 150, 105, 0.0)');

    ctx.beginPath();
    ctx.moveTo(coords[0].x, padding.top + chartH);
    ctx.lineTo(coords[0].x, coords[0].y);

    for (let i = 0; i < coords.length - 1; i++) {
      const xc = (coords[i].x + coords[i + 1].x) / 2;
      const yc = (coords[i].y + coords[i + 1].y) / 2;
      ctx.quadraticCurveTo(coords[i].x, coords[i].y, xc, yc);
    }
    ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
    ctx.lineTo(coords[coords.length - 1].x, padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Spline Line
    ctx.beginPath();
    ctx.moveTo(coords[0].x, coords[0].y);
    for (let i = 0; i < coords.length - 1; i++) {
      const xc = (coords[i].x + coords[i + 1].x) / 2;
      const yc = (coords[i].y + coords[i + 1].y) / 2;
      ctx.quadraticCurveTo(coords[i].x, coords[i].y, xc, yc);
    }
    ctx.lineTo(coords[coords.length - 1].x, coords[coords.length - 1].y);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Draw Interactive Tooltip Points
    coords.forEach((pt) => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  // Chart 2: Technology Adoption Donut Chart
  function drawAdoptionChart() {
    const canvas = document.getElementById('adoptionChartCanvas');
    const legendEl = document.getElementById('adoptionLegend');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.parentElement.clientWidth || 320);
    const height = (canvas.height = 260);

    const segments = [
      { name: 'Cloud Infrastructure', pct: 38, color: '#10b981' },
      { name: 'AI & Automation', pct: 28, color: '#06b6d4' },
      { name: 'Zero-Trust Sec', pct: 20, color: '#f59e0b' },
      { name: 'Data Fabric', pct: 14, color: '#94a3b8' }
    ];

    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(centerX, centerY) - 20;
    const innerRadius = radius * 0.65;

    let startAngle = -Math.PI / 2;

    segments.forEach(seg => {
      const sliceAngle = (seg.pct / 100) * (Math.PI * 2);
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.arc(centerX, centerY, innerRadius, startAngle + sliceAngle, startAngle, true);
      ctx.closePath();
      ctx.fillStyle = seg.color;
      ctx.fill();
      startAngle += sliceAngle;
    });

    // Center Text
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    ctx.fillStyle = isDark ? '#ffffff' : '#09231b';
    ctx.font = '800 24px Space Grotesk, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('100%', centerX, centerY + 2);

    ctx.font = '600 11px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = isDark ? '#94a3b8' : '#64748b';
    ctx.fillText('Adopted', centerX, centerY + 18);

    // Legend
    if (legendEl) {
      legendEl.innerHTML = segments.map(seg => `
        <span class="legend-item">
          <span class="legend-dot" style="background:${seg.color}"></span>
          ${seg.name} (${seg.pct}%)
        </span>
      `).join('');
    }
  }

  // Chart 3: Delivery Milestones Horizontal Bar Chart
  function drawProgressChart() {
    const canvas = document.getElementById('progressChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.parentElement.clientWidth || 320);
    const height = (canvas.height = 220);

    const items = [
      { name: 'Zero-Trust Auth', progress: 92 },
      { name: 'Kafka Lakehouse', progress: 78 },
      { name: 'FedRAMP Audit', progress: 85 },
      { name: 'Cloud Migration', progress: 64 }
    ];

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#f8fafc' : '#09231b';
    const barBg = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';

    const rowH = 44;
    items.forEach((item, idx) => {
      const y = 14 + idx * rowH;

      ctx.font = '600 12px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'left';
      ctx.fillText(item.name, 10, y + 12);

      ctx.textAlign = 'right';
      ctx.fillStyle = '#10b981';
      ctx.fillText(`${item.progress}%`, width - 10, y + 12);

      // Bar Background
      ctx.fillStyle = barBg;
      ctx.beginPath();
      ctx.roundRect(10, y + 20, width - 20, 8, 4);
      ctx.fill();

      // Bar Fill
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.roundRect(10, y + 20, (width - 20) * (item.progress / 100), 8, 4);
      ctx.fill();
    });
  }

  // Chart 4: Monthly Enterprise Load Bar Chart
  function drawVolumeChart() {
    const canvas = document.getElementById('volumeChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.parentElement.clientWidth || 320);
    const height = (canvas.height = 220);

    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    const volumes = [48, 62, 58, 85, 94, 118];

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#94a3b8' : '#64748b';

    const barW = 26;
    const spacing = (width - 40) / months.length;
    const maxVal = 140;

    months.forEach((m, idx) => {
      const x = 20 + idx * spacing + (spacing - barW) / 2;
      const h = (volumes[idx] / maxVal) * (height - 60);
      const y = height - 30 - h;

      // Draw Bar
      const grad = ctx.createLinearGradient(0, y, 0, height - 30);
      grad.addColorStop(0, '#10b981');
      grad.addColorStop(1, '#059669');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(x, y, barW, h, [4, 4, 0, 0]);
      ctx.fill();

      // Label
      ctx.font = '11px Plus Jakarta Sans, sans-serif';
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.fillText(m, x + barW / 2, height - 12);
    });
  }

  // Chart 5: Cost Optimization vs Spend
  function drawCostChart() {
    const canvas = document.getElementById('costChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = (canvas.width = canvas.parentElement.clientWidth || 320);
    const height = (canvas.height = 220);

    ctx.clearRect(0, 0, width, height);

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#94a3b8' : '#64748b';

    // Projected vs Actual Curve
    const projected = [120, 135, 148, 165, 185, 210];
    const actual = [120, 118, 110, 105, 98, 92];

    const chartW = width - 40;
    const chartH = height - 50;

    // Projected Line (Dashed)
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    projected.forEach((val, idx) => {
      const x = 20 + (chartW / 5) * idx;
      const y = height - 25 - (val / 220) * chartH;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Actual Realized Line (Solid Emerald)
    ctx.setLineDash([]);
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    actual.forEach((val, idx) => {
      const x = 20 + (chartW / 5) * idx;
      const y = height - 25 - (val / 220) * chartH;
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Legend at bottom
    ctx.font = '10px Plus Jakarta Sans, sans-serif';
    ctx.fillStyle = '#ef4444';
    ctx.fillText('--- Pre-FinOps Projected', 20, 20);

    ctx.fillStyle = '#10b981';
    ctx.fillText('— Realized Optimized Spend', 160, 20);
  }

  function initBIExport() {
    const exportBtn = document.getElementById('exportBiReportBtn');
    if (!exportBtn) return;

    exportBtn.addEventListener('click', () => {
      const report = {
        title: 'SYNERGEX Enterprise Executive Telemetry & Cost Audit',
        generatedAt: new Date().toISOString(),
        organization: state.user.orgName,
        metrics: {
          activeDeployments: 24,
          operationalEfficiencyGain: '+34.8%',
          platformHealthSLA: '99.994%',
          monthlyFinopsSavings: '$148,200',
          incidentMeanTimeToResolution: '14.2 min'
        },
        clusterCompliance: {
          soc2TypeII: 'Active',
          fedRampHigh: 'Certified',
          zeroTrustIdentityMesh: '100% Enforced'
        }
      };

      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `SYNERGEX-Executive-BI-Report-${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showToast('Executive BI report generated and downloaded successfully!');
    });
  }

  /* ==========================================================================
     13. PROJECT MANAGEMENT TABLE & CRUD
     ========================================================================== */
  function initProjectManagement() {
    const tbody = document.getElementById('projectsTableBody');
    const searchInput = document.getElementById('projectSearchInput');
    const statusFilter = document.getElementById('projectStatusFilter');
    const priorityFilter = document.getElementById('projectPriorityFilter');
    const openModalBtn = document.getElementById('openNewProjectModalBtn');
    const modal = document.getElementById('newProjectModalBackdrop');
    const closeModalBtn = document.getElementById('closeNewProjectModalBtn');
    const cancelModalBtn = document.getElementById('cancelNewProjBtn');
    const form = document.getElementById('newProjectForm');

    if (!tbody) return;

    function renderProjects() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const st = statusFilter ? statusFilter.value : 'all';
      const pr = priorityFilter ? priorityFilter.value : 'all';

      const filtered = state.projects.filter(p => {
        const matchesQuery = !query ||
          p.name.toLowerCase().includes(query) ||
          p.client.toLowerCase().includes(query) ||
          p.lead.toLowerCase().includes(query);
        const matchesStatus = st === 'all' || p.status === st;
        const matchesPriority = pr === 'all' || p.priority === pr;
        return matchesQuery && matchesStatus && matchesPriority;
      });

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:32px; color:var(--text-muted);">No matching enterprise projects located.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(p => {
        const statusClass = p.status.toLowerCase().replace(' ', '-');
        const prioClass = p.priority.toLowerCase();
        return `
          <tr>
            <td class="project-name-cell">
              <div>${escapeHTML(p.name)}</div>
              <span style="font-size:0.75rem; font-family:var(--font-mono); color:var(--text-muted);">${p.id}</span>
            </td>
            <td>${escapeHTML(p.client)}</td>
            <td>
              <button class="status-badge ${statusClass} toggle-proj-status-btn" data-proj-id="${p.id}" title="Click to cycle status">
                ${escapeHTML(p.status)}
              </button>
            </td>
            <td>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${p.progress}%"></div>
              </div>
              <span style="font-size:0.78rem; font-weight:700;">${p.progress}%</span>
            </td>
            <td>${escapeHTML(p.lead)}</td>
            <td>${escapeHTML(p.deadline)}</td>
            <td><span class="priority-pill ${prioClass}">${escapeHTML(p.priority)}</span></td>
            <td class="text-right">
              <button class="btn btn-ghost btn-sm delete-proj-btn" data-proj-id="${p.id}" title="Delete project">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                </svg>
              </button>
            </td>
          </tr>
        `;
      }).join('');

      // Status cycler
      tbody.querySelectorAll('.toggle-proj-status-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-proj-id');
          const proj = state.projects.find(p => p.id === id);
          if (proj) {
            const flow = ['Planning', 'In Progress', 'Review', 'Completed'];
            const nextIdx = (flow.indexOf(proj.status) + 1) % flow.length;
            proj.status = flow[nextIdx];
            if (proj.status === 'Completed') proj.progress = 100;
            setStored(STORAGE_KEYS.projects, state.projects);
            renderProjects();
            showToast(`Project ${proj.id} status updated to ${proj.status}`);
          }
        });
      });

      // Delete
      tbody.querySelectorAll('.delete-proj-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-proj-id');
          state.projects = state.projects.filter(p => p.id !== id);
          setStored(STORAGE_KEYS.projects, state.projects);
          renderProjects();
          showToast('Project archived');
        });
      });
    }

    if (searchInput) searchInput.addEventListener('input', renderProjects);
    if (statusFilter) statusFilter.addEventListener('change', renderProjects);
    if (priorityFilter) priorityFilter.addEventListener('change', renderProjects);

    // Modal
    if (openModalBtn && modal) openModalBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    if (closeModalBtn && modal) closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
    if (cancelModalBtn && modal) cancelModalBtn.addEventListener('click', () => modal.classList.add('hidden'));

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newProj = {
          id: `PRJ-${Math.floor(1000 + Math.random() * 9000)}`,
          name: document.getElementById('newProjName').value.trim(),
          client: document.getElementById('newProjClient').value.trim(),
          lead: document.getElementById('newProjLead').value.trim() || 'Marcus Ray',
          priority: document.getElementById('newProjPriority').value,
          deadline: document.getElementById('newProjDeadline').value,
          status: document.getElementById('newProjStatus').value,
          progress: 10
        };

        state.projects.unshift(newProj);
        setStored(STORAGE_KEYS.projects, state.projects);
        form.reset();
        if (modal) modal.classList.add('hidden');
        renderProjects();
        showToast(`Project ${newProj.id} initialized successfully!`);
      });
    }

    renderProjects();
  }

  /* ==========================================================================
     14. ENTERPRISE SUPPORT TICKET CENTER
     ========================================================================== */
  function initSupportCenter() {
    const grid = document.getElementById('ticketsGrid');
    const searchInput = document.getElementById('ticketSearchInput');
    const statusFilter = document.getElementById('ticketStatusFilter');
    const openModalBtn = document.getElementById('openNewTicketModalBtn');
    const modal = document.getElementById('newTicketModalBackdrop');
    const closeModalBtn = document.getElementById('closeNewTicketModalBtn');
    const cancelModalBtn = document.getElementById('cancelNewTicketBtn');
    const form = document.getElementById('newTicketForm');

    const totalEl = document.getElementById('totalTicketsCount');
    const openEl = document.getElementById('openTicketsCount');
    const resEl = document.getElementById('resolvedTicketsCount');

    if (!grid) return;

    function renderTickets() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const st = statusFilter ? statusFilter.value : 'all';

      const filtered = state.tickets.filter(t => {
        const matchesQuery = !query ||
          t.subject.toLowerCase().includes(query) ||
          t.id.toLowerCase().includes(query) ||
          t.category.toLowerCase().includes(query);
        const matchesStatus = st === 'all' || t.status === st;
        return matchesQuery && matchesStatus;
      });

      // Update Header Stats
      if (totalEl) totalEl.textContent = state.tickets.length;
      if (openEl) openEl.textContent = state.tickets.filter(t => t.status !== 'Resolved').length;
      if (resEl) resEl.textContent = state.tickets.filter(t => t.status === 'Resolved').length;

      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted); background:var(--bg-surface); border-radius:var(--border-radius-md);">No matching support tickets in queue.</div>`;
        return;
      }

      grid.innerHTML = filtered.map(t => {
        const statusClass = t.status.toLowerCase().replace(' ', '-');
        const prioClass = t.priority.toLowerCase();
        return `
          <div class="ticket-card" data-ticket-id="${t.id}">
            <div class="ticket-top-row">
              <span class="ticket-id">${t.id}</span>
              <span class="priority-pill ${prioClass}">${escapeHTML(t.priority)}</span>
            </div>
            <h4 class="ticket-subject">${escapeHTML(t.subject)}</h4>
            <p class="ticket-desc-snippet">${escapeHTML(t.desc)}</p>
            <div class="ticket-bottom-bar">
              <span class="ticket-date">${escapeHTML(t.date)}</span>
              <button class="status-badge ${statusClass} toggle-ticket-status-btn" data-ticket-id="${t.id}">
                ${escapeHTML(t.status)}
              </button>
            </div>
          </div>
        `;
      }).join('');

      grid.querySelectorAll('.toggle-ticket-status-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-ticket-id');
          const t = state.tickets.find(item => item.id === id);
          if (t) {
            const flow = ['Open', 'In Progress', 'Resolved'];
            const next = (flow.indexOf(t.status) + 1) % flow.length;
            t.status = flow[next];
            setStored(STORAGE_KEYS.tickets, state.tickets);
            renderTickets();
            showToast(`Ticket ${t.id} marked as ${t.status}`);
          }
        });
      });
    }

    if (searchInput) searchInput.addEventListener('input', renderTickets);
    if (statusFilter) statusFilter.addEventListener('change', renderTickets);

    if (openModalBtn && modal) openModalBtn.addEventListener('click', () => modal.classList.remove('hidden'));
    if (closeModalBtn && modal) closeModalBtn.addEventListener('click', () => modal.classList.add('hidden'));
    if (cancelModalBtn && modal) cancelModalBtn.addEventListener('click', () => modal.classList.add('hidden'));

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTicket = {
          id: `TCK-${Math.floor(1000 + Math.random() * 9000)}`,
          subject: document.getElementById('newTicketSubject').value.trim(),
          category: document.getElementById('newTicketCategory').value,
          priority: document.getElementById('newTicketPriority').value,
          desc: document.getElementById('newTicketDesc').value.trim(),
          status: 'Open',
          date: 'Just now'
        };

        state.tickets.unshift(newTicket);
        setStored(STORAGE_KEYS.tickets, state.tickets);
        form.reset();
        if (modal) modal.classList.add('hidden');
        renderTickets();
        showToast(`Support Ticket ${newTicket.id} logged. L3 Engineer assigned.`);
      });
    }

    renderTickets();
  }

  /* ==========================================================================
     15. CONSULTATION BOOKING ENGINE
     ========================================================================== */
  function initConsultationBooking() {
    const form = document.getElementById('consultationBookingForm');
    const chips = document.querySelectorAll('#meetingFormatChips .chip-btn');
    let selectedFormat = 'Video Conference';

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        selectedFormat = chip.getAttribute('data-format');
      });
    });

    // Set default date to tomorrow
    const dateInput = document.getElementById('consultDate');
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = tomorrow.toISOString().split('T')[0];
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const service = document.getElementById('consultService').value;
        const industry = document.getElementById('consultIndustry').value;
        const date = document.getElementById('consultDate').value;
        const time = document.getElementById('consultTime').value;
        const name = document.getElementById('consultName').value.trim();
        const email = document.getElementById('consultEmail').value.trim();
        const company = document.getElementById('consultCompany').value.trim();
        const notes = document.getElementById('consultNotes').value.trim();

        if (!service || !industry || !date || !time || !name || !email || !company) {
          showToast('Please complete all required fields (*)', '⚠️');
          return;
        }

        const appt = {
          id: `APT-${Math.floor(100 + Math.random() * 900)}`,
          service,
          industry,
          date,
          time,
          format: selectedFormat,
          name,
          email,
          company,
          notes
        };

        state.appointments.unshift(appt);
        setStored(STORAGE_KEYS.appointments, state.appointments);

        // Add to Notifications
        state.notifications.unshift({
          id: `notif-${Date.now()}`,
          title: `Consultation Confirmed: ${service}`,
          desc: `Scheduled for ${date} at ${time} via ${selectedFormat}.`,
          time: 'Just now',
          unread: true,
          type: 'calendar'
        });
        setStored(STORAGE_KEYS.notifications, state.notifications);
        renderNotifications();

        showToast(`Consultation confirmed for ${name} on ${date}!`);
        form.reset();

        // Refresh portal appointments if viewing
        renderPortalAppointments();
      });
    }
  }

  /* ==========================================================================
     16. CASE STUDIES & INSIGHTS
     ========================================================================== */
  function initCaseStudies() {
    const grid = document.getElementById('caseStudiesGrid');
    if (!grid) return;

    grid.innerHTML = DATA.caseStudies.map(cs => `
      <div class="case-study-card">
        <div class="case-metric-banner">
          <span class="case-hero-stat">${escapeHTML(cs.stat)}</span>
          <span class="case-hero-metric-label">${escapeHTML(cs.industry)}</span>
        </div>
        <div class="case-body">
          <span class="case-client-tag">${escapeHTML(cs.client)}</span>
          <h3 class="case-title">${escapeHTML(cs.title)}</h3>
          <p class="case-desc">${escapeHTML(cs.challenge)}</p>
          <div class="case-tech-tags">
            ${cs.tech.map(t => `<span class="case-tag">${escapeHTML(t)}</span>`).join('')}
          </div>
          <button class="btn btn-secondary btn-sm view-case-btn" data-cs-id="${cs.id}">
            Read Full Case Study &rarr;
          </button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.view-case-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-cs-id');
        openCaseStudyModal(id);
      });
    });
  }

  function openCaseStudyModal(id) {
    const cs = DATA.caseStudies.find(item => item.id === id);
    if (!cs) return;

    const modal = document.getElementById('caseStudyModalBackdrop');
    const clientEl = document.getElementById('caseModalClient');
    const contentEl = document.getElementById('caseModalContent');
    const printBtn = document.getElementById('caseModalPrintBtn');
    const consultBtn = document.getElementById('caseModalConsultBtn');

    if (clientEl) clientEl.textContent = `${cs.client} Case Study`;
    if (contentEl) {
      contentEl.innerHTML = `
        <h2 style="font-size: 1.8rem; margin-bottom: 12px;">${escapeHTML(cs.title)}</h2>
        <span style="display:inline-block; font-size:0.85rem; color:var(--emerald-primary); font-weight:700; margin-bottom:20px;">
          ${escapeHTML(cs.client)} • ${escapeHTML(cs.industry)}
        </span>

        <div style="background:var(--bg-surface-elevated); border:1px solid var(--plat-border); border-radius:var(--border-radius-md); padding:24px; margin-bottom:20px;">
          <h4 style="color:var(--color-warning); font-size:0.85rem; text-transform:uppercase; margin-bottom:8px;">The Mission-Critical Challenge</h4>
          <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6;">${escapeHTML(cs.challenge)}</p>
        </div>

        <div style="background:var(--bg-surface-elevated); border:1px solid var(--plat-border); border-radius:var(--border-radius-md); padding:24px; margin-bottom:20px;">
          <h4 style="color:var(--emerald-primary); font-size:0.85rem; text-transform:uppercase; margin-bottom:8px;">Engineered Architecture & Strategy</h4>
          <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6;">${escapeHTML(cs.solution)}</p>
        </div>

        <div style="background:var(--emerald-subtle); border:1px solid var(--emerald-border); border-radius:var(--border-radius-md); padding:24px;">
          <h4 style="color:var(--emerald-hover); font-size:0.85rem; text-transform:uppercase; margin-bottom:12px;">Verified Business Results</h4>
          <ul style="list-style:none;">
            ${cs.results.map(r => `<li style="font-size:0.92rem; margin-bottom:8px; display:flex; gap:8px;"><span style="color:var(--emerald-primary); font-weight:700;">✓</span> ${escapeHTML(r)}</li>`).join('')}
          </ul>
        </div>
      `;
    }

    if (printBtn) {
      printBtn.onclick = () => {
        window.print();
      };
    }

    if (consultBtn) {
      consultBtn.onclick = () => {
        if (modal) modal.classList.add('hidden');
        window.location.hash = '#consultation';
      };
    }

    if (modal) modal.classList.remove('hidden');
  }

  function initInsights() {
    const grid = document.getElementById('insightsGrid');
    const pills = document.querySelectorAll('#insightsFilterPills .pill-btn');
    if (!grid) return;

    function renderInsights(category = 'all') {
      const filtered = category === 'all' ? DATA.insights : DATA.insights.filter(i => i.category === category);
      grid.innerHTML = filtered.map(ins => `
        <div class="insight-card" data-ins-id="${ins.id}">
          <div class="insight-meta">
            <span class="insight-category">${escapeHTML(ins.categoryName)}</span>
            <span>${escapeHTML(ins.readTime)}</span>
          </div>
          <h3 class="insight-title">${escapeHTML(ins.title)}</h3>
          <p class="insight-summary">${escapeHTML(ins.summary)}</p>
          <div class="insight-footer">
            <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHTML(ins.date)}</span>
            <span class="read-link">Read Whitepaper &rarr;</span>
          </div>
        </div>
      `).join('');

      grid.querySelectorAll('.insight-card').forEach(card => {
        card.addEventListener('click', () => {
          const id = card.getAttribute('data-ins-id');
          openInsightModal(id);
        });
      });
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderInsights(pill.getAttribute('data-cat'));
      });
    });

    renderInsights('all');
  }

  function openInsightModal(id) {
    const ins = DATA.insights.find(item => item.id === id);
    if (!ins) return;

    const modal = document.getElementById('caseStudyModalBackdrop');
    const clientEl = document.getElementById('caseModalClient');
    const contentEl = document.getElementById('caseModalContent');

    if (clientEl) clientEl.textContent = `${ins.categoryName} Research Whitepaper`;
    if (contentEl) {
      contentEl.innerHTML = `
        <span style="font-size:0.8rem; color:var(--emerald-primary); font-weight:700; text-transform:uppercase;">${escapeHTML(ins.categoryName)} • Published ${escapeHTML(ins.date)}</span>
        <h2 style="font-size: 1.8rem; margin: 12px 0 20px 0;">${escapeHTML(ins.title)}</h2>
        <div style="font-size: 1rem; color: var(--text-secondary); line-height: 1.8; background: var(--bg-surface-elevated); padding: 28px; border-radius: var(--border-radius-md); border: 1px solid var(--plat-border);">
          <p style="margin-bottom: 16px;"><strong>Executive Abstract:</strong> ${escapeHTML(ins.summary)}</p>
          <hr style="border:none; border-top:1px solid var(--plat-border); margin:20px 0;">
          <p style="white-space: pre-line;">${escapeHTML(ins.content)}</p>
        </div>
      `;
    }

    if (modal) modal.classList.remove('hidden');
  }

  /* ==========================================================================
     17. TEAM DIRECTORY
     ========================================================================== */
  function initTeamDirectory() {
    const grid = document.getElementById('teamGrid');
    const searchInput = document.getElementById('teamSearchInput');
    const deptFilter = document.getElementById('teamDeptFilter');
    if (!grid) return;

    function renderTeam() {
      const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
      const dept = deptFilter ? deptFilter.value : 'all';

      const filtered = DATA.team.filter(m => {
        const matchesQuery = !query ||
          m.name.toLowerCase().includes(query) ||
          m.role.toLowerCase().includes(query) ||
          m.expertise.some(e => e.toLowerCase().includes(query));
        const matchesDept = dept === 'all' || m.dept === dept;
        return matchesQuery && matchesDept;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:40px; color:var(--text-muted);">No matching advisors found.</div>`;
        return;
      }

      grid.innerHTML = filtered.map(m => `
        <div class="team-card">
          <div class="team-avatar-wrap">${m.initials}</div>
          <h3 class="team-name">${escapeHTML(m.name)}</h3>
          <span class="team-role">${escapeHTML(m.role)}</span>
          <p class="team-location">${escapeHTML(m.location)}</p>
          <div class="team-skills">
            ${m.expertise.map(e => `<span class="team-skill-pill">${escapeHTML(e)}</span>`).join('')}
          </div>
          <button class="btn btn-secondary btn-sm btn-block connect-team-btn" data-name="${escapeHTML(m.name)}">
            Connect with Specialist &rarr;
          </button>
        </div>
      `).join('');

      grid.querySelectorAll('.connect-team-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const name = btn.getAttribute('data-name');
          window.location.hash = '#communication';
          showToast(`Direct channel connected with ${name}`);
        });
      });
    }

    if (searchInput) searchInput.addEventListener('input', renderTeam);
    if (deptFilter) deptFilter.addEventListener('change', renderTeam);

    renderTeam();
  }

  /* ==========================================================================
     18. CLIENT COMMUNICATION CENTER (CHAT SIMULATION)
     ========================================================================== */
  function initChatCenter() {
    const contactsList = document.getElementById('chatContactsList');
    const messagesContainer = document.getElementById('chatMessagesContainer');
    const form = document.getElementById('chatInputForm');
    const input = document.getElementById('chatMessageInput');
    const clearBtn = document.getElementById('clearChatHistoryBtn');
    const callBtn = document.getElementById('callSpecialistBtn');

    if (!messagesContainer) return;

    // Render contacts
    if (contactsList) {
      contactsList.innerHTML = DATA.chatContacts.map((c, idx) => `
        <div class="chat-contact-item ${idx === 0 ? 'active' : ''}" data-contact-id="${c.id}">
          <div class="avatar-circle">
            ${c.avatar}
            <span class="status-indicator ${c.status}"></span>
          </div>
          <div class="contact-meta">
            <h5>${escapeHTML(c.name)}</h5>
            <p>${escapeHTML(c.snippet)}</p>
          </div>
        </div>
      `).join('');

      contactsList.querySelectorAll('.chat-contact-item').forEach(item => {
        item.addEventListener('click', () => {
          contactsList.querySelectorAll('.chat-contact-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          const name = item.querySelector('h5').textContent;
          document.getElementById('activeChatName').textContent = name;
          showToast(`Switched channel to ${name}`);
        });
      });
    }

    function renderMessages() {
      messagesContainer.innerHTML = state.chatHistory.map(msg => `
        <div class="message-bubble-row ${msg.sender === 'user' ? 'outgoing' : 'incoming'}">
          <div class="message-bubble">
            <p>${escapeHTML(msg.text)}</p>
            <span class="message-time">${escapeHTML(msg.time)}</span>
          </div>
        </div>
      `).join('');
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    renderMessages();

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;

        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        state.chatHistory.push({
          sender: 'user',
          name: 'You',
          text,
          time: timeStr
        });

        input.value = '';
        renderMessages();
        setStored(STORAGE_KEYS.chatHistory, state.chatHistory);

        // Simulated Automated Architect Response
        setTimeout(() => {
          const autoResponses = [
            'Understood. I am running a trace simulation on that cluster configuration now.',
            'That architectural direction aligns well with our zero-trust baseline. I will prepare an updated spec.',
            'Our SRE monitoring node has registered this telemetry. Failover tests confirm full redundancy.',
            'Let me verify this with our security lead to ensure compliance with our FedRAMP requirements.'
          ];
          const replyText = autoResponses[Math.floor(Math.random() * autoResponses.length)];

          state.chatHistory.push({
            sender: 'specialist',
            name: 'Marcus Ray',
            text: replyText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });

          renderMessages();
          setStored(STORAGE_KEYS.chatHistory, state.chatHistory);
        }, 1200);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.chatHistory = [];
        setStored(STORAGE_KEYS.chatHistory, state.chatHistory);
        renderMessages();
        showToast('Chat history cleared');
      });
    }

    if (callBtn) {
      callBtn.addEventListener('click', () => {
        showToast('Connecting encrypted WebRTC audio session with Principal Architect...', '📞');
      });
    }
  }

  /* ==========================================================================
     19. DOCUMENT CENTER / COMPLIANCE VAULT
     ========================================================================== */
  function initDocuments() {
    const grid = document.getElementById('documentsGrid');
    const pills = document.querySelectorAll('#docFilterPills .pill-btn');
    if (!grid) return;

    function renderDocs(type = 'all') {
      const filtered = type === 'all' ? DATA.documents : DATA.documents.filter(d => d.type === type);
      grid.innerHTML = filtered.map(doc => `
        <div class="document-card">
          <div class="doc-card-top">
            <div class="doc-type-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <span class="c-badge">${escapeHTML(doc.typeName)}</span>
          </div>
          <h4 class="doc-title">${escapeHTML(doc.title)}</h4>
          <p class="doc-meta-info">${escapeHTML(doc.summary)}</p>
          <div class="doc-actions-row">
            <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHTML(doc.date)} • ${escapeHTML(doc.size)}</span>
            <button class="btn btn-secondary btn-sm download-doc-btn" data-title="${escapeHTML(doc.title)}">
              Download Brief
            </button>
          </div>
        </div>
      `).join('');

      grid.querySelectorAll('.download-doc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const title = btn.getAttribute('data-title');
          const dummyContent = `SYNERGEX ENTERPRISE ARCHITECTURE BRIEF\nDOCUMENT: ${title}\nORGANIZATION: ${state.user.orgName}\nSTATUS: VERIFIED SECURE\n\nThis executive briefing certifies that the architectural specifications and cryptographic compliance controls meet or exceed SOC-2 Type II, ISO 27001, and FedRAMP standards.`;
          const blob = new Blob([dummyContent], { type: 'text/plain' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.txt`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          showToast(`Downloaded: ${title}`);
        });
      });
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderDocs(pill.getAttribute('data-type'));
      });
    });

    renderDocs('all');
  }

  /* ==========================================================================
     20. GLOBAL SPOTLIGHT SEARCH MODAL (Ctrl + K)
     ========================================================================== */
  function initSpotlightSearch() {
    const triggerBtn = document.getElementById('searchTriggerBtn');
    const modal = document.getElementById('searchModalBackdrop');
    const input = document.getElementById('globalSpotlightInput');
    const results = document.getElementById('globalSpotlightResults');

    if (!modal) return;

    function openSearch() {
      modal.classList.remove('hidden');
      if (input) {
        input.value = '';
        input.focus();
        renderSpotlightResults('');
      }
    }

    function closeSearch() {
      modal.classList.add('hidden');
    }

    if (triggerBtn) triggerBtn.addEventListener('click', openSearch);

    // Keyboard Shortcut Ctrl + K / Cmd + K / ESC
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (modal.classList.contains('hidden')) openSearch();
        else closeSearch();
      } else if (e.key === 'Escape') {
        closeSearch();
        // Close all other open modals/drawers
        document.querySelectorAll('.modal-backdrop, .drawer-backdrop').forEach(m => m.classList.add('hidden'));
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSearch();
    });

    if (input) {
      input.addEventListener('input', () => {
        renderSpotlightResults(input.value.trim());
      });
    }

    function renderSpotlightResults(q) {
      if (!results) return;

      if (!q) {
        results.innerHTML = `
          <div class="search-category-group">
            <span class="group-title">QUICK JUMP SUGGESTIONS</span>
            <div class="spotlight-item" data-target="#solutions">
              <span class="item-icon">⚡</span>
              <div class="item-body">
                <strong>Enterprise Solutions Catalog</strong>
                <span>Explore hyperscale cloud, AI, and cybersecurity</span>
              </div>
              <span class="item-type-badge">Section</span>
            </div>
            <div class="spotlight-item" data-target="#analytics">
              <span class="item-icon">📊</span>
              <div class="item-body">
                <strong>BI Analytics Dashboard</strong>
                <span>Inspect telemetry, system health, and cloud spend</span>
              </div>
              <span class="item-type-badge">Dashboard</span>
            </div>
            <div class="spotlight-item" data-target="#consultation">
              <span class="item-icon">📅</span>
              <div class="item-body">
                <strong>Schedule an Enterprise Briefing</strong>
                <span>Book a strategic session with a Principal Architect</span>
              </div>
              <span class="item-type-badge">Action</span>
            </div>
          </div>
        `;
        attachSpotlightClickHandlers();
        return;
      }

      const qLower = q.toLowerCase();
      let matches = [];

      // Search Solutions
      DATA.solutions.forEach(s => {
        if (s.title.toLowerCase().includes(qLower) || s.desc.toLowerCase().includes(qLower)) {
          matches.push({ title: s.title, subtitle: s.categoryName, type: 'Solution', target: '#solutions', id: s.id });
        }
      });

      // Search Industries
      DATA.industries.forEach(i => {
        if (i.name.toLowerCase().includes(qLower) || i.desc.toLowerCase().includes(qLower)) {
          matches.push({ title: i.name, subtitle: 'Industry Vertical', type: 'Industry', target: '#industries' });
        }
      });

      // Search Services
      DATA.services.forEach(srv => {
        if (srv.title.toLowerCase().includes(qLower) || srv.desc.toLowerCase().includes(qLower)) {
          matches.push({ title: srv.title, subtitle: srv.timeline, type: 'Service', target: '#services' });
        }
      });

      // Search Case Studies
      DATA.caseStudies.forEach(cs => {
        if (cs.client.toLowerCase().includes(qLower) || cs.title.toLowerCase().includes(qLower)) {
          matches.push({ title: cs.client, subtitle: cs.title, type: 'Case Study', target: '#case-studies' });
        }
      });

      if (matches.length === 0) {
        results.innerHTML = `
          <div style="padding: 24px; text-align: center; color: var(--text-muted);">
            No direct matches for "${escapeHTML(q)}". Try "Cloud", "Security", "AI", or "SLA".
          </div>
        `;
        return;
      }

      results.innerHTML = `
        <div class="search-category-group">
          <span class="group-title">FOUND ${matches.length} MATCHES</span>
          ${matches.slice(0, 8).map(m => `
            <div class="spotlight-item" data-target="${m.target}">
              <span class="item-icon">🔍</span>
              <div class="item-body">
                <strong>${escapeHTML(m.title)}</strong>
                <span>${escapeHTML(m.subtitle)}</span>
              </div>
              <span class="item-type-badge">${m.type}</span>
            </div>
          `).join('')}
        </div>
      `;

      attachSpotlightClickHandlers();
    }

    function attachSpotlightClickHandlers() {
      results.querySelectorAll('.spotlight-item').forEach(item => {
        item.addEventListener('click', () => {
          const target = item.getAttribute('data-target');
          if (target) {
            closeSearch();
            window.location.hash = target;
          }
        });
      });
    }
  }

  /* ==========================================================================
     21. SAVED ITEMS / BOOKMARKS DRAWER
     ========================================================================== */
  function initSavedDrawer() {
    const btn = document.getElementById('savedItemsBtn');
    const drawer = document.getElementById('savedDrawerBackdrop');
    const closeBtn = document.getElementById('closeSavedDrawerBtn');
    const clearBtn = document.getElementById('clearAllSavedBtn');
    const exportBtn = document.getElementById('exportSavedBriefBtn');

    if (!drawer) return;

    if (btn) {
      btn.addEventListener('click', () => {
        renderSavedDrawerItems();
        drawer.classList.remove('hidden');
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) drawer.classList.add('hidden');
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.bookmarks = [];
        setStored(STORAGE_KEYS.bookmarks, state.bookmarks);
        updateBookmarkBadge();
        renderSavedDrawerItems();
        showToast('All saved bookmarks cleared');
      });
    }

    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        const items = state.bookmarks.map(id => DATA.solutions.find(s => s.id === id)).filter(Boolean);
        const exportText = `SYNERGEX ENTERPRISE CUSTOM BRIEF\nPrepared for: ${state.user.orgName}\nSaved Items: ${items.length}\n\n` +
          items.map(item => `• ${item.title} (${item.categoryName})\n  ROI: ${item.roi}\n  Scope: ${item.desc}\n`).join('\n');

        const blob = new Blob([exportText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `SYNERGEX-Enterprise-Brief-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('Custom enterprise brief exported successfully!');
      });
    }

    updateBookmarkBadge();
  }

  function renderSavedDrawerItems() {
    const container = document.getElementById('savedDrawerItemsList');
    if (!container) return;

    const items = state.bookmarks.map(id => DATA.solutions.find(s => s.id === id)).filter(Boolean);

    if (items.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
          <p style="margin-bottom: 8px;">No solutions or briefs saved yet.</p>
          <span style="font-size: 0.8rem;">Click the bookmark icon on any solution card to assemble your custom enterprise proposal.</span>
        </div>
      `;
      return;
    }

    container.innerHTML = items.map(item => `
      <div style="background:var(--bg-surface-elevated); border:1px solid var(--plat-border); border-radius:var(--border-radius-md); padding:16px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
        <div>
          <span style="font-size:0.7rem; font-weight:700; color:var(--emerald-primary); text-transform:uppercase;">${escapeHTML(item.categoryName)}</span>
          <h4 style="font-size:0.95rem; margin:2px 0 4px 0;">${escapeHTML(item.title)}</h4>
          <span style="font-size:0.75rem; color:var(--text-muted);">${escapeHTML(item.roi)}</span>
        </div>
        <button class="btn btn-ghost btn-sm remove-bookmark-item-btn" data-sol-id="${item.id}" title="Remove">
          &times;
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.remove-bookmark-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-sol-id');
        toggleBookmark(id);
      });
    });
  }

  /* ==========================================================================
     22. NOTIFICATIONS DRAWER
     ========================================================================== */
  function initNotifications() {
    const btn = document.getElementById('notificationsBtn');
    const drawer = document.getElementById('notifDrawerBackdrop');
    const closeBtn = document.getElementById('closeNotifDrawerBtn');
    const markReadBtn = document.getElementById('markAllNotifsReadBtn');
    const clearBtn = document.getElementById('clearAllNotifsBtn');
    const dot = document.getElementById('notifDot');

    if (!drawer) return;

    if (btn) {
      btn.addEventListener('click', () => {
        renderNotifications();
        drawer.classList.remove('hidden');
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', () => drawer.classList.add('hidden'));
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) drawer.classList.add('hidden');
    });

    if (markReadBtn) {
      markReadBtn.addEventListener('click', () => {
        state.notifications.forEach(n => n.unread = false);
        setStored(STORAGE_KEYS.notifications, state.notifications);
        renderNotifications();
        showToast('All notifications marked as read');
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.notifications = [];
        setStored(STORAGE_KEYS.notifications, state.notifications);
        renderNotifications();
        showToast('Notifications cleared');
      });
    }

    renderNotifications();
  }

  function renderNotifications() {
    const list = document.getElementById('notifDrawerList');
    const dot = document.getElementById('notifDot');

    const unreadCount = state.notifications.filter(n => n.unread).length;
    if (dot) dot.style.display = unreadCount > 0 ? 'block' : 'none';

    if (!list) return;

    if (state.notifications.length === 0) {
      list.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);">No new enterprise alerts.</div>`;
      return;
    }

    list.innerHTML = state.notifications.map(n => `
      <div class="notif-item ${n.unread ? 'unread' : ''}">
        <div class="notif-item-body">
          <h5 class="notif-item-title">${escapeHTML(n.title)}</h5>
          <p class="notif-item-desc">${escapeHTML(n.desc)}</p>
          <span class="notif-item-time">${escapeHTML(n.time)}</span>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     23. CLIENT PORTAL VIEW CONTROLLER
     ========================================================================== */
  function initClientPortalView() {
    const navLink = document.getElementById('navPortalLink');
    const portalSection = document.getElementById('portalView');
    const closeBtn = document.getElementById('closePortalViewBtn');
    const tabs = document.querySelectorAll('.portal-tab');
    const profileForm = document.getElementById('portalProfileForm');

    function showPortal() {
      if (portalSection) {
        portalSection.classList.remove('hidden');
        portalSection.scrollIntoView({ behavior: 'smooth' });
        renderPortalAppointments();
      }
    }

    function hidePortal() {
      if (portalSection) portalSection.classList.add('hidden');
      window.location.hash = '#hero';
    }

    if (navLink) {
      navLink.addEventListener('click', (e) => {
        e.preventDefault();
        showPortal();
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', hidePortal);

    // Sub-tab switching
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const ptab = tab.getAttribute('data-ptab');
        document.querySelectorAll('.portal-content-pane').forEach(pane => pane.classList.add('hidden'));

        if (ptab === 'overview') {
          const el = document.getElementById('portalPaneOverview');
          if (el) el.classList.remove('hidden');
        } else if (ptab === 'consultations') {
          const el = document.getElementById('portalPaneConsultations');
          if (el) el.classList.remove('hidden');
          renderPortalAppointments();
        } else if (ptab === 'settings') {
          const el = document.getElementById('portalPaneSettings');
          if (el) el.classList.remove('hidden');
        } else if (ptab === 'projects') {
          window.location.hash = '#projects';
        } else if (ptab === 'support') {
          window.location.hash = '#support-center';
        } else if (ptab === 'documents') {
          window.location.hash = '#documents';
        }
      });
    });

    if (profileForm) {
      profileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        state.user.fullName = document.getElementById('profFullName').value.trim();
        state.user.orgName = document.getElementById('profOrgName').value.trim();
        state.user.role = document.getElementById('profTitle').value.trim();
        state.user.email = document.getElementById('profEmail').value.trim();
        state.user.region = document.getElementById('profRegion').value;
        state.user.twoFactor = document.getElementById('prof2faToggle').checked;

        setStored(STORAGE_KEYS.user, state.user);

        const statusMsg = document.getElementById('profileSaveMsg');
        if (statusMsg) {
          statusMsg.textContent = '✓ Changes saved to enterprise profile';
          setTimeout(() => statusMsg.textContent = '', 3000);
        }

        showToast('Organization settings updated successfully');
      });
    }
  }

  function renderPortalAppointments() {
    const list = document.getElementById('portalAppointmentsList');
    if (!list) return;

    if (state.appointments.length === 0) {
      list.innerHTML = `<p style="color:var(--text-muted); padding:20px 0;">No consultations currently scheduled.</p>`;
      return;
    }

    list.innerHTML = state.appointments.map(a => `
      <div class="appointment-item-card">
        <div>
          <span style="font-size:0.75rem; color:var(--emerald-primary); font-weight:700;">${escapeHTML(a.format)}</span>
          <h4 style="font-size:1.1rem; margin:4px 0;">${escapeHTML(a.service)}</h4>
          <p style="font-size:0.85rem; color:var(--text-secondary);">${escapeHTML(a.date)} at ${escapeHTML(a.time)}</p>
        </div>
        <div>
          <span class="status-badge in-progress">Confirmed</span>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     24. MOBILE NAVIGATION & FOOTER YEAR
     ========================================================================== */
  function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const drawer = document.getElementById('mobileDrawer');
    const links = document.querySelectorAll('.mobile-link');

    if (!menuBtn || !drawer) return;

    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  }

  function initMisc() {
    // Current year
    const yr = document.getElementById('currentYear');
    if (yr) yr.textContent = new Date().getFullYear();

    // Banner close
    const bannerClose = document.getElementById('bannerCloseBtn');
    const banner = document.getElementById('enterpriseBanner');
    if (bannerClose && banner) {
      bannerClose.addEventListener('click', () => {
        banner.style.display = 'none';
      });
    }
  }

  /* ==========================================================================
     25. DOM READY BOOTSTRAPPER
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initUserAuth();
    initHeroCanvas();
    initCounters();
    initSolutionsMarketplace();
    initSolutionModal();
    initIndustriesGrid();
    initServicesGrid();
    initTechStack();
    drawAllBICharts();
    initBIExport();
    initProjectManagement();
    initSupportCenter();
    initConsultationBooking();
    initCaseStudies();
    initInsights();
    initTeamDirectory();
    initChatCenter();
    initDocuments();
    initSpotlightSearch();
    initSavedDrawer();
    initNotifications();
    initClientPortalView();
    initMobileMenu();
    initMisc();

    console.log('%c SYNERGEX Enterprise Solutions Portal Initialized Successfully.', 'color: #10b981; font-weight: bold; font-size: 14px;');
  });

})();
