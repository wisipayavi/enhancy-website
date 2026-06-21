/* ============================================================
   Enhency — Page content data
   Every interior page is described here and rendered by render.js.
   Schema:
     hero      { headline, text, primary{t,href}, secondary{t,href}, visual }
     intro     { title, text }
     overview  { title, text, cards:[{t,d}] }
     sections  [ { title, text, caps:[{t,d}] } ]
     benefits  { title, cards:[{t,d}] }
     developer { title, text, tags:[...] }
     security  { title, text, cards:[{t,d}] }
     useCases  { title, cards:[{t,d}] }
     cta       { headline, text, primary{t,href}, secondary{t,href} }
   ============================================================ */

const SALES = { t: "Talk to Sales", href: "contact.html" };
const DEMO = { t: "Book a Demo", href: "contact.html" };
const DOCS = { t: "Explore Documentation", href: "docs.html" };
const CONTACT = { t: "Contact Sales", href: "contact.html" };

const PAGES = {};

/* ---------------- PRODUCTS ---------------- */

PAGES["upi-stack"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "UPI Stack" }],
  hero: {
    headline: "Scalable UPI Infrastructure for Modern Payment Ecosystems",
    text: "Enable secure and real-time UPI payment experiences through enterprise-grade acquiring, issuing, and TPAP infrastructure designed for banks, fintechs, payment aggregators, and digital financial platforms.",
    primary: SALES, secondary: DOCS, visual: "network",
  },
  intro: { title: "Unified Infrastructure for UPI Operations", text: "Enhency provides API-first UPI infrastructure designed to support transaction processing, merchant acquiring, issuing workflows, TPAP ecosystems, onboarding operations, reconciliation systems, and operational management through scalable and secure architecture." },
  overview: {
    title: "Purpose-Built for Real-Time Payment Operations",
    text: "Manage end-to-end UPI transaction workflows across acquiring, issuing, and TPAP ecosystems with infrastructure designed for scalability, operational reliability, transaction visibility, and ecosystem interoperability.",
    cards: [
      { t: "Real-Time Transaction Processing", d: "Support high-volume UPI transaction processing with low-latency infrastructure and operational stability." },
      { t: "API-Driven Architecture", d: "Accelerate integrations through scalable APIs, SDKs, S2S communication layers, and modular infrastructure components." },
      { t: "Operational Visibility", d: "Monitor transaction workflows, reconciliation systems, and lifecycle activities through centralized infrastructure." },
      { t: "Secure Financial Operations", d: "Enable secure transaction flows, operational controls, authentication workflows, and infrastructure-level monitoring." },
    ],
  },
  sections: [
    { title: "Acquiring UPI Stack", text: "Enterprise-grade merchant acquiring infrastructure designed to support merchant onboarding, UPI payment acceptance, transaction routing, reconciliation workflows, and operational management at scale.", caps: [
      { t: "Merchant Onboarding Infrastructure", d: "Streamline merchant onboarding with centralized operational management systems." },
      { t: "QR Payment Acceptance", d: "Support interoperable UPI QR payment acceptance across merchant ecosystems." },
      { t: "Transaction Routing", d: "Enable efficient routing and orchestration of payment requests across acquiring systems." },
      { t: "Reconciliation & Settlement", d: "Simplify reconciliation, settlement workflows, and reporting systems." },
    ]},
    { title: "Issuing UPI Stack", text: "Secure issuer-side UPI infrastructure supporting transaction authorization, account validation, transaction lifecycle handling, and real-time payment processing workflows.", caps: [
      { t: "Transaction Authorization", d: "Manage issuer-side transaction authorization and payment validation workflows." },
      { t: "Account Validation", d: "Support secure account verification and transaction validation processes." },
      { t: "Real-Time Processing", d: "Enable real-time transaction handling with scalable infrastructure." },
      { t: "Lifecycle Management", d: "Track and manage end-to-end UPI transaction states and workflows." },
    ]},
    { title: "UPI TPAP Stack with SDK/S2S", text: "Launch scalable TPAP ecosystems through SDK-enabled integrations, S2S communication infrastructure, onboarding workflows, and transaction orchestration systems.", caps: [
      { t: "SDK Integrations", d: "Accelerate application integration through SDK-driven implementation workflows." },
      { t: "Server-to-Server Infrastructure", d: "Support secure and scalable S2S communication for transaction processing." },
      { t: "User Onboarding", d: "Enable streamlined onboarding for digital payment applications." },
      { t: "UPI Intent & Collect Flows", d: "Support collect requests, intent-based flows, and merchant transactions." },
    ]},
  ],
  benefits: { title: "Designed for Scalable UPI Operations", cards: [
    { t: "Faster Go-to-Market", d: "Accelerate deployment timelines through API-first infrastructure and modular payment systems." },
    { t: "Scalable Infrastructure", d: "Support growing transaction volumes and merchant ecosystems with enterprise-grade architecture." },
    { t: "Unified Payment Operations", d: "Manage acquiring, issuing, onboarding, routing, and operational workflows centrally." },
    { t: "Operational Reliability", d: "Support continuous payment operations through resilient infrastructure and monitoring." },
  ]},
  developer: { title: "Developer-First UPI Infrastructure", text: "Simplify UPI integrations through APIs, SDKs, onboarding documentation, sandbox environments, and developer-focused implementation systems.", tags: ["APIs", "SDKs", "S2S Integrations", "Webhooks", "Sandbox Access", "Integration Guides", "Technical Documentation"] },
  security: { title: "Secure & Reliable UPI Infrastructure", text: "Enhency infrastructure supports secure transaction processing, operational governance, payment visibility, and scalable financial operations.", cards: [
    { t: "Transaction Security", d: "Secure transaction workflows and payment operations through infrastructure-level protection." },
    { t: "Infrastructure Monitoring", d: "Monitor operational events, transaction workflows, and infrastructure performance in real time." },
    { t: "Scalable Architecture", d: "Support enterprise transaction volumes and operational growth with resilient systems." },
    { t: "Operational Governance", d: "Enable structured operational workflows and centralized transaction management." },
  ]},
  useCases: { title: "Built for UPI Ecosystems", cards: [
    { t: "Banks", d: "Modernize issuer and acquiring payment infrastructure through scalable UPI systems." },
    { t: "Fintech Companies", d: "Launch digital payment experiences through API-driven UPI infrastructure." },
    { t: "TPAPs", d: "Enable scalable TPAP operations with SDK integrations and transaction orchestration." },
    { t: "Payment Aggregators", d: "Support merchant onboarding, payment acceptance, routing, and reconciliation at scale." },
  ]},
  cta: { headline: "Build Scalable UPI Experiences with Enhency", text: "Launch secure acquiring, issuing, and TPAP payment ecosystems through enterprise-grade UPI infrastructure designed for modern financial operations.", primary: DEMO, secondary: CONTACT },
};

PAGES["acquiring-upi-stack"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "UPI Stack", href: "upi-stack.html" }, { t: "Acquiring" }],
  hero: { headline: "Enterprise UPI Acquiring Infrastructure for Scalable Merchant Payments", text: "Enable secure and scalable merchant payment acceptance through enterprise-grade UPI acquiring infrastructure designed for banks, payment aggregators, fintechs, and merchant ecosystems.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Merchant Acquiring Operations", text: "Enhency Acquiring UPI Stack simplifies merchant payment operations through centralized transaction orchestration, merchant onboarding, routing systems, reconciliation workflows, operational visibility, and scalable payment infrastructure." },
  overview: { title: "Built for High-Volume UPI Acquiring", text: "Support real-time merchant payment processing through infrastructure designed for operational reliability, transaction visibility, scalable payment acceptance, and ecosystem interoperability.", cards: [
    { t: "Merchant Payment Acceptance", d: "Enable interoperable UPI payment acceptance across merchant ecosystems and digital touchpoints." },
    { t: "Real-Time Transaction Processing", d: "Process high-volume merchant transactions with low-latency infrastructure." },
    { t: "Routing & Orchestration", d: "Manage transaction routing, retries, and payment lifecycle operations centrally." },
    { t: "Operational Visibility", d: "Track transaction states, payment activities, and merchant workflows through dashboards." },
  ]},
  sections: [
    { title: "Merchant Onboarding Infrastructure", text: "Simplify merchant onboarding workflows through centralized onboarding systems, operational controls, merchant configuration management, and lifecycle handling.", caps: [
      { t: "Merchant Registration", d: "Manage merchant onboarding and operational activation workflows centrally." },
      { t: "Configuration Management", d: "Configure payment acceptance settings and transaction capabilities across merchants." },
      { t: "QR Enablement", d: "Enable interoperable UPI QR acceptance for merchant payment collection." },
      { t: "Verification Workflows", d: "Support merchant validation and operational review through structured systems." },
    ]},
    { title: "Real-Time Payment Processing", text: "Support scalable merchant payment processing through secure and resilient transaction infrastructure.", caps: [
      { t: "Lifecycle Management", d: "Manage payment states, acknowledgements, and operational workflows." },
      { t: "Payment Routing", d: "Enable transaction routing across acquiring infrastructure and integrations." },
      { t: "Smart Retry Handling", d: "Support retry workflows and operational recovery for payment continuity." },
      { t: "High Availability", d: "Maintain scalable payment operations through resilient infrastructure." },
    ]},
    { title: "Reconciliation & Settlement", text: "Simplify operational visibility and financial workflows through centralized reconciliation and settlement management systems.", caps: [
      { t: "Transaction Reconciliation", d: "Track and reconcile transaction records across operational systems." },
      { t: "Settlement Visibility", d: "Manage settlement workflows, transaction mapping, and financial reporting." },
      { t: "Merchant Reporting", d: "Enable merchant-level operational reporting and transaction visibility." },
      { t: "Exception Handling", d: "Identify mismatches and anomalies through centralized monitoring." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Merchant Ecosystems", cards: [
    { t: "Faster Merchant Enablement", d: "Accelerate merchant onboarding and payment acceptance workflows." },
    { t: "Scalable Payment Operations", d: "Support growing merchant ecosystems and high transaction volumes." },
    { t: "Centralized Acquiring Management", d: "Manage payments, reconciliation, and monitoring through unified systems." },
    { t: "Reliable Transaction Infrastructure", d: "Maintain secure and stable merchant payment operations." },
  ]},
  developer: { title: "Developer-Friendly Acquiring Infrastructure", text: "Accelerate implementation through APIs, onboarding support, documentation, webhooks, and scalable integration systems.", tags: ["APIs", "Webhooks", "SDK Support", "Sandbox Access", "Integration Guides", "Technical Documentation"] },
  security: { title: "Secure Merchant Payment Infrastructure", text: "Enhency supports secure transaction processing, operational controls, merchant payment integrity, and scalable financial operations.", cards: [
    { t: "Secure Transaction Processing", d: "Protect payment workflows and merchant operations through security systems." },
    { t: "Operational Risk Monitoring", d: "Monitor transaction activities, anomalies, and infrastructure events in real time." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted merchant payment operations through resilient acquiring infrastructure." },
    { t: "Operational Governance", d: "Enable centralized operational controls and transaction management." },
  ]},
  useCases: { title: "Built for Merchant Payment Ecosystems", cards: [
    { t: "Banks", d: "Enable scalable merchant acquiring operations and UPI payment acceptance." },
    { t: "Payment Aggregators", d: "Simplify onboarding, payment routing, reconciliation, and settlement." },
    { t: "Fintech Platforms", d: "Launch digital merchant payment experiences through API-driven systems." },
    { t: "Enterprises", d: "Support large-scale merchant operations and digital payment collection." },
  ]},
  cta: { headline: "Scale Merchant Payment Operations with Enhency", text: "Launch secure and scalable UPI acquiring infrastructure with centralized payment processing, onboarding, routing, reconciliation, and operational visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["issuing-upi-stack"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "UPI Stack", href: "upi-stack.html" }, { t: "Issuing" }],
  hero: { headline: "Secure UPI Issuing Infrastructure for Real-Time Payment Operations", text: "Enable scalable issuer-side UPI operations through enterprise-grade infrastructure designed for transaction authorization, account validation, payment processing, and operational reliability.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for UPI Issuing Ecosystems", text: "Enhency Issuing UPI Stack enables banks and financial institutions to manage secure issuer-side transaction workflows through scalable infrastructure supporting authorization, validation, routing, operational visibility, and transaction lifecycle management." },
  overview: { title: "Purpose-Built for Issuer-Side Payment Processing", text: "Support real-time UPI transaction processing through resilient infrastructure designed for secure payment authorization, transaction validation, operational governance, and scalable financial operations.", cards: [
    { t: "Real-Time Authorization", d: "Enable secure and low-latency issuer-side authorization workflows for UPI payments." },
    { t: "Account Validation", d: "Support account verification and transaction validation across payment ecosystems." },
    { t: "Lifecycle Management", d: "Manage end-to-end transaction states, acknowledgements, and response handling." },
    { t: "Operational Visibility", d: "Monitor issuer-side transaction flows and infrastructure performance centrally." },
  ]},
  sections: [
    { title: "Issuer Transaction Authorization", text: "Manage secure issuer-side transaction authorization workflows with centralized operational controls and scalable infrastructure systems.", caps: [
      { t: "Payment Authorization", d: "Support issuer-side authorization for UPI transaction requests and workflows." },
      { t: "Response Management", d: "Handle issuer response flows, acknowledgements, and operational messaging." },
      { t: "Transaction Validation", d: "Validate transaction requests through operational and account-level verification." },
      { t: "Operational Controls", d: "Manage issuer-side operational workflows and transaction handling." },
    ]},
    { title: "Account Validation & Verification", text: "Support reliable payment processing through account validation and verification infrastructure designed for issuer ecosystems.", caps: [
      { t: "Account Verification", d: "Validate account details and transaction-related account workflows." },
      { t: "User Validation", d: "Support customer-level validation across transaction journeys." },
      { t: "Integrity Checks", d: "Monitor transaction request consistency and operational validation." },
      { t: "Verification Workflows", d: "Enable structured validation and account handling systems." },
    ]},
    { title: "Real-Time UPI Processing", text: "Enable secure and scalable issuer-side payment processing with resilient infrastructure designed for high transaction volumes.", caps: [
      { t: "Real-Time Handling", d: "Process UPI transactions with low-latency infrastructure and continuity." },
      { t: "State Management", d: "Track transaction states and operational activities across the lifecycle." },
      { t: "Retry & Timeout", d: "Manage retry workflows, timeouts, and operational recovery." },
      { t: "High Availability", d: "Maintain continuous transaction operations through resilient infrastructure." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Issuing Operations", cards: [
    { t: "Reliable Payment Infrastructure", d: "Support uninterrupted issuer-side payment processing through resilient systems." },
    { t: "Faster Payment Operations", d: "Enable real-time authorization and transaction handling workflows." },
    { t: "Centralized Issuer Management", d: "Manage validations, monitoring, and operational workflows centrally." },
    { t: "Scalable Financial Ecosystems", d: "Support enterprise transaction growth and large-scale operations." },
  ]},
  developer: { title: "Developer-Friendly Issuer Infrastructure", text: "Accelerate issuer integrations through APIs, onboarding support, integration workflows, and technical documentation systems.", tags: ["APIs", "Webhooks", "Integration Guides", "Technical Documentation", "Sandbox Access"] },
  security: { title: "Enterprise-Grade Issuer Infrastructure", text: "Enhency supports secure issuer-side transaction processing, operational reliability, infrastructure governance, and scalable payment operations.", cards: [
    { t: "Secure Authorization", d: "Protect transaction authorization workflows and issuer-side payment activities." },
    { t: "Operational Monitoring", d: "Monitor transaction systems, activities, and infrastructure events in real time." },
    { t: "Infrastructure Reliability", d: "Support continuous payment operations through resilient architecture." },
    { t: "Transaction Integrity", d: "Enable reliable transaction handling and operational payment continuity." },
  ]},
  useCases: { title: "Built for Modern Issuer Ecosystems", cards: [
    { t: "Banks", d: "Modernize issuer-side UPI operations through scalable payment processing infrastructure." },
    { t: "Financial Institutions", d: "Support secure digital payment operations with centralized issuer systems." },
    { t: "Fintech Platforms", d: "Enable embedded payment workflows and issuer-side operational capabilities." },
    { t: "Digital Banking Platforms", d: "Deliver scalable UPI issuing experiences through API-first infrastructure." },
  ]},
  cta: { headline: "Modernize UPI Issuing Operations with Enhency", text: "Launch secure and scalable issuer-side payment infrastructure with transaction authorization, validation, monitoring, and operational management.", primary: DEMO, secondary: CONTACT },
};

PAGES["tpap-stack"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "UPI Stack", href: "upi-stack.html" }, { t: "TPAP (SDK/S2S)" }],
  hero: { headline: "Scalable TPAP Infrastructure for Modern UPI Applications", text: "Launch secure and scalable TPAP ecosystems through enterprise-grade UPI infrastructure with SDK integrations, S2S communication, onboarding systems, and transaction orchestration capabilities.", primary: SALES, secondary: DOCS, visual: "code" },
  intro: { title: "Purpose-Built Infrastructure for TPAP Ecosystems", text: "Enhency TPAP Stack enables fintechs, banks, and digital platforms to build scalable UPI applications through API-first infrastructure supporting onboarding workflows, transaction processing, SDK integrations, user lifecycle management, and operational visibility." },
  overview: { title: "Complete Infrastructure for UPI TPAP Operations", text: "Manage end-to-end TPAP payment journeys through infrastructure designed for secure transaction handling, onboarding systems, application integrations, operational monitoring, and ecosystem scalability.", cards: [
    { t: "SDK-Based Integrations", d: "Accelerate mobile and application integrations through production-ready SDK infrastructure." },
    { t: "Server-to-Server Communication", d: "Enable secure and scalable S2S transaction processing and operational workflows." },
    { t: "User Lifecycle Management", d: "Support onboarding, account linking, validation, and user management workflows." },
    { t: "Real-Time Payment Operations", d: "Process UPI transactions with scalable infrastructure and operational reliability." },
  ]},
  sections: [
    { title: "SDK Integration Infrastructure", text: "Simplify application integration and payment implementation through SDK-driven infrastructure designed for scalable UPI experiences.", caps: [
      { t: "Mobile SDK Support", d: "Enable seamless UPI payment experiences across Android and mobile ecosystems." },
      { t: "Integration Workflows", d: "Accelerate implementation through structured SDK onboarding." },
      { t: "UPI Payment Journeys", d: "Support collect requests, intent flows, and merchant payments." },
      { t: "Secure Experience", d: "Enable secure customer transaction journeys through integrated infrastructure." },
    ]},
    { title: "Secure Server-to-Server Infrastructure", text: "Support scalable TPAP transaction workflows through resilient S2S communication infrastructure and operational orchestration systems.", caps: [
      { t: "Communication Layer", d: "Manage secure transaction communication across payment workflows." },
      { t: "API-Driven Operations", d: "Enable centralized operational workflows through scalable API infrastructure." },
      { t: "Transaction Orchestration", d: "Handle payment lifecycle, routing, and acknowledgements centrally." },
      { t: "Scalable Management", d: "Support enterprise transaction volumes through resilient architecture." },
    ]},
    { title: "Digital User Onboarding", text: "Enable streamlined onboarding and user activation workflows for scalable digital payment ecosystems.", caps: [
      { t: "User Registration", d: "Manage user onboarding workflows and application activation." },
      { t: "Account Linking", d: "Support secure bank account linking and user validation." },
      { t: "Operational Verification", d: "Enable onboarding validation and operational review." },
      { t: "Lifecycle Management", d: "Track onboarding states, user activities, and workflows." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Digital Payment Applications", cards: [
    { t: "Faster UPI Launches", d: "Accelerate TPAP deployment through SDK-driven integrations and API-first infrastructure." },
    { t: "Unified Payment Infrastructure", d: "Manage onboarding, payments, operations, and workflows centrally." },
    { t: "Scalable App Ecosystems", d: "Support growing user bases and transaction volumes." },
    { t: "Reliable Payment Operations", d: "Maintain secure and continuous transaction processing." },
  ]},
  developer: { title: "Developer-First TPAP Infrastructure", text: "Accelerate implementation through SDKs, APIs, technical documentation, onboarding support, and scalable integration workflows.", tags: ["Mobile SDKs", "APIs", "S2S Integrations", "Webhooks", "Sandbox Access", "Technical Documentation", "Integration Guides"] },
  security: { title: "Secure Infrastructure for Digital Payment Ecosystems", text: "Enhency supports secure onboarding, payment processing, transaction visibility, and scalable operational management across TPAP ecosystems.", cards: [
    { t: "Secure User Journeys", d: "Protect onboarding and transaction workflows through security systems." },
    { t: "Transaction Monitoring", d: "Monitor payment activities, workflows, and operational events in real time." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted TPAP operations through resilient architecture." },
    { t: "Operational Governance", d: "Enable centralized operational controls and structured payment management." },
  ]},
  useCases: { title: "Built for Modern TPAP Ecosystems", cards: [
    { t: "Fintech Companies", d: "Launch scalable UPI applications and digital payment ecosystems through API-first infrastructure." },
    { t: "Banks", d: "Enable partner-driven TPAP operations and scalable payment experiences." },
    { t: "Digital Platforms", d: "Integrate embedded payment workflows and UPI capabilities into digital ecosystems." },
    { t: "Enterprise Applications", d: "Support large-scale payment experiences with centralized onboarding and transaction management." },
  ]},
  cta: { headline: "Launch Scalable UPI Applications with Enhency", text: "Build secure TPAP ecosystems with SDK integrations, onboarding infrastructure, transaction orchestration, and scalable payment processing systems.", primary: DEMO, secondary: CONTACT },
};

PAGES["imps-stack"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "IMPS Stack" }],
  hero: { headline: "Real-Time IMPS Infrastructure for Secure Money Movement", text: "Enable secure and scalable IMPS transaction processing through enterprise-grade infrastructure designed for issuer operations, beneficiary processing, account validation, and real-time financial workflows.", primary: SALES, secondary: DOCS, visual: "network" },
  intro: { title: "Modern Infrastructure for IMPS Operations", text: "Enhency IMPS Stack enables banks and financial institutions to manage secure real-time money movement through scalable infrastructure supporting issuer workflows, beneficiary operations, account validation, transaction orchestration, and operational monitoring." },
  overview: { title: "Purpose-Built for Real-Time Financial Transactions", text: "Support high-volume IMPS transaction operations through resilient infrastructure designed for low-latency payment processing, operational reliability, transaction visibility, and scalable financial ecosystems.", cards: [
    { t: "Real-Time Transaction Processing", d: "Enable secure and low-latency IMPS transaction handling across financial ecosystems." },
    { t: "Issuer & Beneficiary Infrastructure", d: "Support end-to-end transaction workflows across issuer and beneficiary operations." },
    { t: "Account Validation Systems", d: "Improve transaction reliability through beneficiary account verification." },
    { t: "Operational Visibility", d: "Monitor transaction workflows, events, and infrastructure activities centrally." },
  ]},
  sections: [
    { title: "Issuer Infrastructure", text: "Manage issuer-side IMPS transaction workflows through secure and scalable infrastructure supporting authorization, transaction handling, operational controls, and real-time payment operations.", caps: [
      { t: "Transaction Authorization", d: "Enable issuer-side authorization workflows for IMPS transaction requests." },
      { t: "Payment Validation", d: "Support transaction validation and operational verification systems." },
      { t: "Real-Time Processing", d: "Process IMPS transactions with low-latency infrastructure." },
      { t: "Lifecycle Management", d: "Track issuer transaction states, acknowledgements, and workflows." },
    ]},
    { title: "Beneficiary Infrastructure", text: "Support beneficiary-side transaction workflows through infrastructure designed for transaction processing, validation handling, operational visibility, and payment continuity.", caps: [
      { t: "Transaction Handling", d: "Manage inbound transaction workflows and beneficiary-side operations." },
      { t: "Transaction Verification", d: "Support transaction-level validation and operational verification." },
      { t: "Real-Time Notifications", d: "Enable operational transaction updates and workflow visibility." },
      { t: "Operational Monitoring", d: "Monitor beneficiary transaction activities in real time." },
    ]},
    { title: "BANL — Beneficiary Account Lookup", text: "Enable account validation and beneficiary verification workflows to improve transaction reliability, reduce operational failures, and enhance payment accuracy.", caps: [
      { t: "Account Validation", d: "Verify beneficiary account details before transaction processing." },
      { t: "Account Lookup Infrastructure", d: "Support real-time beneficiary account verification workflows." },
      { t: "Accuracy Enhancement", d: "Reduce transaction failures through account validation systems." },
      { t: "Verification Workflows", d: "Enable structured beneficiary verification and validation." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Financial Operations", cards: [
    { t: "Faster Money Movement", d: "Enable real-time IMPS payment processing and operational continuity." },
    { t: "Reliable Payment Infrastructure", d: "Support uninterrupted financial operations through resilient systems." },
    { t: "Improved Transaction Accuracy", d: "Reduce operational failures through account validation and verification." },
    { t: "Centralized Payment Operations", d: "Manage issuer, beneficiary, and transaction workflows through unified systems." },
  ]},
  developer: { title: "Developer-Friendly IMPS Infrastructure", text: "Accelerate integrations through APIs, onboarding workflows, technical documentation, and scalable operational systems.", tags: ["APIs", "Integration Guides", "Technical Documentation", "Sandbox Access", "Webhooks"] },
  security: { title: "Secure Infrastructure for Real-Time Transactions", text: "Enhency supports secure transaction processing, operational governance, infrastructure reliability, and scalable IMPS payment operations.", cards: [
    { t: "Secure Transaction Workflows", d: "Protect payment operations through infrastructure-focused systems." },
    { t: "Operational Monitoring", d: "Monitor transaction activities and operational events in real time." },
    { t: "Infrastructure Reliability", d: "Support high-volume transaction operations with resilient architecture." },
    { t: "Transaction Integrity", d: "Enable reliable transaction processing and operational continuity." },
  ]},
  useCases: { title: "Built for Modern Banking Ecosystems", cards: [
    { t: "Banks", d: "Modernize IMPS transaction operations through scalable issuer and beneficiary infrastructure." },
    { t: "Financial Institutions", d: "Support secure money movement and transaction validation workflows." },
    { t: "Fintech Platforms", d: "Enable embedded financial operations through API-driven IMPS infrastructure." },
    { t: "Enterprise Payment Systems", d: "Support large-scale transaction operations with centralized infrastructure." },
  ]},
  cta: { headline: "Enable Secure Real-Time Money Movement with Enhency", text: "Launch scalable IMPS transaction infrastructure with issuer processing, beneficiary workflows, account validation, and centralized operational systems.", primary: DEMO, secondary: CONTACT },
};

PAGES["nach"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "NACH" }],
  hero: { headline: "Enterprise NACH Infrastructure for Automated Financial Workflows", text: "Simplify mandate management, file processing, clearing operations, settlement workflows, and transaction lifecycle handling through scalable and secure NACH infrastructure designed for banks, financial institutions, and enterprises.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for NACH Operations", text: "Enhency NACH Infrastructure enables organizations to manage automated debit and credit workflows through centralized systems supporting mandate processing, file validation, clearing operations, settlement management, reconciliation workflows, and operational monitoring." },
  overview: { title: "Purpose-Built for Automated Financial Processing", text: "Support large-scale automated transaction workflows through resilient infrastructure designed for operational reliability, secure file handling, centralized transaction processing, and scalable financial operations.", cards: [
    { t: "Mandate Management", d: "Manage digital mandate workflows, validations, and lifecycle management centrally." },
    { t: "Centralized File Processing", d: "Handle inbound and outbound file workflows through secure processing infrastructure." },
    { t: "Clearing & Settlement", d: "Support automated clearing and settlement with operational visibility." },
    { t: "Operational Monitoring", d: "Track file activities, transaction workflows, and mandate states centrally." },
  ]},
  sections: [
    { title: "Mandate Processing Infrastructure", text: "Simplify mandate registration, validation, lifecycle management, and operational handling through centralized mandate processing systems.", caps: [
      { t: "Mandate Registration", d: "Support digital mandate onboarding and operational setup workflows." },
      { t: "Mandate Validation", d: "Validate mandate information through operational verification systems." },
      { t: "Lifecycle Management", d: "Track mandate creation, modification, cancellation, and state handling." },
      { t: "Workflow Management", d: "Enable structured mandate operations through centralized infrastructure." },
    ]},
    { title: "File Processing & Validation", text: "Enable secure and scalable file handling workflows through automated validation and operational processing infrastructure.", caps: [
      { t: "File Upload Management", d: "Manage inbound and outbound transaction file workflows securely." },
      { t: "Schema Validation", d: "Validate transaction records, file structures, and message formats." },
      { t: "Duplicate Detection", d: "Identify duplicate transaction records and inconsistencies." },
      { t: "Replay Protection", d: "Prevent duplicate processing and ensure transaction integrity." },
    ]},
    { title: "Clearing & Settlement", text: "Support centralized clearing operations, settlement workflows, reconciliation systems, and transaction management processes through scalable infrastructure.", caps: [
      { t: "Clearing Engine", d: "Manage transaction clearing workflows and operational processing." },
      { t: "Settlement Management", d: "Track settlement operations, transaction mapping, and financial workflows." },
      { t: "Net Position Calculation", d: "Support operational financial calculations and transaction balancing." },
      { t: "Reconciliation Workflows", d: "Enable transaction reconciliation and operational verification." },
    ]},
    { title: "Returns & Reversals", text: "Handle transaction returns, reversals, operational exceptions, and response workflows through centralized operational infrastructure.", caps: [
      { t: "Return Processing", d: "Manage transaction return workflows and exception handling." },
      { t: "Reversal Management", d: "Support reversal processing and operational transaction recovery." },
      { t: "Response Handling", d: "Track operational responses, acknowledgements, and updates." },
      { t: "Exception Monitoring", d: "Identify and manage operational mismatches and anomalies." },
    ]},
  ],
  benefits: { title: "Designed for High-Volume Financial Operations", cards: [
    { t: "Automated Financial Processing", d: "Simplify recurring debit and credit transaction workflows centrally." },
    { t: "Operational Efficiency", d: "Reduce manual overhead through automated file handling and management." },
    { t: "Reliable Processing", d: "Support continuous transaction workflows with resilient architecture." },
    { t: "Centralized Visibility", d: "Monitor mandate operations, file activities, and settlement workflows." },
  ]},
  developer: { title: "Developer-Friendly NACH Infrastructure", text: "Accelerate integrations through APIs, operational workflows, technical documentation, and scalable file processing systems.", tags: ["APIs", "File Integration Workflows", "Technical Documentation", "Sandbox Access", "Integration Guides"] },
  security: { title: "Secure Infrastructure for Automated Financial Operations", text: "Enhency supports secure file handling, operational governance, transaction integrity, and scalable automated financial workflows.", cards: [
    { t: "Secure File Processing", d: "Protect operational file workflows through infrastructure-focused controls." },
    { t: "Operational Risk Monitoring", d: "Monitor operational activities, anomalies, and infrastructure events." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted automated transaction operations." },
    { t: "Transaction Integrity", d: "Enable accurate transaction processing through validation infrastructure." },
  ]},
  useCases: { title: "Built for Automated Financial Ecosystems", cards: [
    { t: "Banks", d: "Manage automated debit and credit transaction workflows centrally." },
    { t: "Financial Institutions", d: "Simplify mandate management, settlement, and reconciliation operations." },
    { t: "Lending Platforms", d: "Enable recurring collection workflows and transaction automation." },
    { t: "Enterprises", d: "Support automated financial operations with scalable file processing." },
  ]},
  cta: { headline: "Simplify Automated Financial Operations with Enhency", text: "Launch secure and scalable NACH infrastructure with mandate processing, file validation, settlement workflows, reconciliation, and centralized operational visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["verification-suite"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "Verification Suite" }],
  hero: { headline: "Digital Verification Infrastructure for Secure Customer Onboarding", text: "Simplify identity verification and onboarding workflows through secure and scalable verification infrastructure supporting eKYC, CKYC, and Video KYC operations for banks, fintechs, and digital financial platforms.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Digital Identity Verification", text: "Enhency Verification Suite enables organizations to streamline customer onboarding and identity validation through API-first infrastructure supporting digital verification workflows, operational compliance, onboarding management, and secure customer lifecycle handling." },
  overview: { title: "Unified Verification Infrastructure", text: "Support scalable onboarding and identity verification workflows through resilient infrastructure designed for operational efficiency, secure validation processes, and centralized verification management.", cards: [
    { t: "Digital Onboarding", d: "Enable secure customer onboarding and verification workflows across financial ecosystems." },
    { t: "API-Driven Verification", d: "Accelerate integration through scalable APIs and modular onboarding infrastructure." },
    { t: "Verification Management", d: "Track verification activities, onboarding states, and workflows centrally." },
    { t: "Secure Identity Workflows", d: "Support protected customer verification journeys through operational controls." },
  ]},
  sections: [
    { title: "eKYC Infrastructure", text: "Enable secure digital onboarding through API-driven identity verification workflows designed for scalable customer onboarding experiences.", caps: [
      { t: "Digital Identity Verification", d: "Support customer identity validation through secure onboarding infrastructure." },
      { t: "API-Based Workflows", d: "Enable real-time verification handling through scalable API systems." },
      { t: "Onboarding Operations", d: "Manage onboarding journeys and customer lifecycle activities." },
      { t: "Operational Monitoring", d: "Track onboarding progress and verification activities centrally." },
    ]},
    { title: "CKYC Infrastructure", text: "Simplify centralized KYC verification workflows through infrastructure designed for operational efficiency and scalable customer onboarding.", caps: [
      { t: "Centralized KYC Verification", d: "Access and validate customer KYC information through secure infrastructure." },
      { t: "Record Validation", d: "Support onboarding workflows through centralized verification systems." },
      { t: "Workflow Management", d: "Manage verification requests and customer lifecycle activities." },
      { t: "Scalable Operations", d: "Support high-volume verification workflows through resilient systems." },
    ]},
    { title: "Video KYC Infrastructure", text: "Enable secure remote onboarding experiences through scalable Video KYC infrastructure and operational verification systems.", caps: [
      { t: "Remote Verification", d: "Support customer onboarding through secure video verification workflows." },
      { t: "Verification Operations", d: "Manage operational workflows for digital verification journeys." },
      { t: "Identity Validation", d: "Enable structured identity review and onboarding management." },
      { t: "Monitoring & Tracking", d: "Track onboarding states and verification activities in real time." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Customer Onboarding", cards: [
    { t: "Faster Onboarding", d: "Accelerate onboarding journeys through API-driven verification infrastructure." },
    { t: "Centralized Operations", d: "Manage eKYC, CKYC, and Video KYC workflows through unified systems." },
    { t: "Operational Efficiency", d: "Reduce manual onboarding complexity through automated workflows." },
    { t: "Secure Experiences", d: "Support secure and scalable onboarding journeys across ecosystems." },
  ]},
  developer: { title: "Developer-Friendly Verification Infrastructure", text: "Accelerate onboarding integrations through APIs, onboarding workflows, technical documentation, and scalable verification systems.", tags: ["APIs", "Verification APIs", "Integration Guides", "Technical Documentation", "Sandbox Access"] },
  security: { title: "Secure Infrastructure for Digital Verification", text: "Enhency supports secure identity verification, onboarding operations, customer data handling, and scalable operational management.", cards: [
    { t: "Secure Verification Workflows", d: "Protect onboarding and verification journeys through operational systems." },
    { t: "Operational Monitoring", d: "Monitor onboarding activities and workflows in real time." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted verification operations through resilient infrastructure." },
    { t: "Operational Governance", d: "Enable centralized onboarding controls and verification management." },
  ]},
  useCases: { title: "Built for Modern Digital Onboarding", cards: [
    { t: "Banks", d: "Simplify customer onboarding and verification workflows centrally." },
    { t: "Fintech Platforms", d: "Launch digital onboarding experiences with API-driven verification." },
    { t: "Lending Platforms", d: "Enable secure customer verification and onboarding for lending workflows." },
    { t: "Enterprises", d: "Support large-scale onboarding and identity verification operations." },
  ]},
  cta: { headline: "Simplify Digital Onboarding with Enhency", text: "Launch secure and scalable verification workflows with eKYC, CKYC, Video KYC, onboarding management, and centralized operational infrastructure.", primary: DEMO, secondary: CONTACT },
};

PAGES["enhency-shield"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "Enhency Shield" }],
  hero: { headline: "Intelligent Fraud Prevention & Risk Monitoring Infrastructure", text: "Strengthen transaction security and operational protection through scalable fraud prevention, risk monitoring, and intelligent threat management infrastructure designed for modern financial ecosystems.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Fraud & Risk Management", text: "Enhency Shield enables banks, fintechs, TPAPs, payment aggregators, and enterprises to monitor transaction risks, detect suspicious activities, strengthen operational controls, and improve payment security through centralized fraud prevention infrastructure." },
  overview: { title: "Unified Infrastructure for Risk Intelligence", text: "Support secure financial operations through infrastructure designed for transaction monitoring, operational risk detection, fraud intelligence, behavioral analysis, and centralized operational visibility.", cards: [
    { t: "Real-Time Risk Monitoring", d: "Monitor transaction activities and events in real time to identify suspicious patterns." },
    { t: "Fraud Intelligence", d: "Support centralized fraud analysis and operational threat management workflows." },
    { t: "Operational Risk Controls", d: "Enable structured operational governance and payment security management." },
    { t: "Scalable Monitoring", d: "Support high-volume transaction ecosystems with resilient monitoring infrastructure." },
  ]},
  sections: [
    { title: "EFRM Infrastructure", text: "Enterprise Fraud & Risk Management infrastructure designed to strengthen transaction monitoring, operational risk detection, and fraud prevention workflows across financial ecosystems.", caps: [
      { t: "Transaction Risk Monitoring", d: "Monitor transaction activities to identify operational risks and suspicious behaviors." },
      { t: "Anomaly Detection", d: "Detect unusual transaction activities and operational deviations centrally." },
      { t: "Risk Analysis", d: "Support operational intelligence workflows for transaction monitoring." },
      { t: "Centralized Visibility", d: "Track transaction patterns and events through unified monitoring infrastructure." },
    ]},
    { title: "I4C Infrastructure", text: "Intelligent fraud intelligence infrastructure designed to support operational protection, transaction analysis, and scalable risk management workflows.", caps: [
      { t: "Fraud Intelligence Workflows", d: "Support fraud monitoring and threat analysis through centralized systems." },
      { t: "Activity Analysis", d: "Analyze payment activities and transaction events across ecosystems." },
      { t: "Threat Visibility", d: "Monitor ecosystem-level operational risks and suspicious activities." },
      { t: "Investigation Support", d: "Enable structured operational analysis and fraud management workflows." },
    ]},
    { title: "Real-Time Fraud & Risk Monitoring", text: "Monitor transaction workflows, payment activities, onboarding operations, and ecosystem events through centralized real-time monitoring infrastructure.", caps: [
      { t: "Transaction Monitoring", d: "Track transaction workflows and operational activities continuously." },
      { t: "Behavioral Pattern Analysis", d: "Identify operational patterns and anomalies through intelligent systems." },
      { t: "Operational Alerts", d: "Enable real-time alerts and notifications for suspicious activities." },
      { t: "Dashboard Visibility", d: "Monitor fraud operations and ecosystem risk activities centrally." },
    ]},
  ],
  benefits: { title: "Designed for Secure Financial Ecosystems", cards: [
    { t: "Improved Transaction Security", d: "Strengthen transaction integrity and operational protection across workflows." },
    { t: "Real-Time Risk Visibility", d: "Monitor operational risks and transaction activities continuously." },
    { t: "Centralized Fraud Operations", d: "Manage fraud monitoring and operational risk workflows through unified systems." },
    { t: "Scalable Security", d: "Support high-volume payment ecosystems with resilient prevention architecture." },
  ]},
  developer: { title: "Developer-Friendly Fraud Infrastructure", text: "Accelerate fraud monitoring integrations through APIs, operational workflows, technical documentation, and scalable risk infrastructure systems.", tags: ["APIs", "Risk Monitoring Integrations", "Operational Workflow Support", "Technical Documentation", "Sandbox Access", "Alert Systems"] },
  security: { title: "Enterprise-Grade Security Infrastructure", text: "Enhency Shield supports secure financial operations, centralized fraud visibility, operational governance, and scalable ecosystem protection.", cards: [
    { t: "Secure Monitoring", d: "Protect transaction ecosystems through resilient fraud monitoring systems." },
    { t: "Operational Intelligence", d: "Support centralized analysis and ecosystem-level risk visibility." },
    { t: "Infrastructure Reliability", d: "Maintain uninterrupted monitoring operations through scalable architecture." },
    { t: "Operational Governance", d: "Enable structured fraud operations and security management systems." },
  ]},
  useCases: { title: "Built for Modern Financial Security Operations", cards: [
    { t: "Banks", d: "Strengthen transaction monitoring and operational fraud prevention workflows." },
    { t: "Fintech Platforms", d: "Enable secure payment ecosystems with centralized fraud intelligence." },
    { t: "Payment Aggregators", d: "Monitor merchant payment operations and transaction risk activities at scale." },
    { t: "Enterprises", d: "Protect digital financial operations through scalable fraud monitoring." },
  ]},
  cta: { headline: "Strengthen Financial Security with Enhency Shield", text: "Launch scalable fraud prevention and risk monitoring infrastructure with real-time transaction visibility, operational intelligence, and centralized fraud management.", primary: DEMO, secondary: CONTACT },
};

PAGES["enhency-ai"] = {
  crumb: [{ t: "Products", href: "#" }, { t: "Enhency AI" }],
  hero: { headline: "Enterprise AI for Customer Engagement & Workflow Automation", text: "Deploy AI Chatbots, Voice Bots, AI Agents, and Omnichannel Assistants across your business in weeks, not months — powered by enterprise-grade AI infrastructure for customer engagement, voice automation, intelligent support, and workflow automation.", primary: DEMO, secondary: SALES, visual: "dashboard" },
  intro: { title: "Enterprise AI Infrastructure for Customer & Operational Intelligence", text: "Enhency AI enables banks, fintechs, government bodies, insurers, and enterprises to transform customer interactions and automate business operations through AI chatbots, voice bots, autonomous agents, omnichannel assistants, and intelligent workflow automation." },
  overview: { title: "One AI Platform for Engagement & Automation", text: "Build intelligent customer experiences and automate operations through enterprise-grade AI infrastructure spanning chat, voice, agents, omnichannel, and risk intelligence.", cards: [
    { t: "AI Chatbots", d: "Instant 24×7 support across website, mobile app, WhatsApp and customer portals." },
    { t: "AI Voice & IVR", d: "Human-like AI voice experiences that replace traditional IVR menus." },
    { t: "AI Agents", d: "Autonomous assistants that understand, decide, and act on tasks." },
    { t: "Omnichannel AI", d: "One consistent AI experience across every customer touchpoint." },
  ]},
  sections: [
    { title: "AI Chatbots", text: "Deliver instant support across Website, Mobile App, WhatsApp, and Customer Portals with knowledge-grounded conversational AI.", caps: [
      { t: "24×7 Customer Support", d: "Always-on automated support across every digital channel." },
      { t: "Lead Qualification", d: "Capture, qualify and route leads to your sales teams automatically." },
      { t: "FAQ Automation", d: "Resolve common queries instantly with knowledge-base answers." },
      { t: "Multilingual Conversations", d: "Engage customers in their preferred language at scale." },
    ]},
    { title: "AI Voice & IVR", text: "Replace traditional IVR with human-like AI voice experiences for natural, efficient customer conversations.", caps: [
      { t: "AI Voice Bots", d: "Natural voice conversations that understand intent and respond." },
      { t: "Smart Call Routing", d: "Route calls to the right place instantly based on context." },
      { t: "Customer Verification", d: "Authenticate callers securely before sensitive actions." },
      { t: "Collections & Reminders", d: "Automate payment reminders, confirmations and scheduling." },
    ]},
    { title: "AI Agents", text: "Autonomous AI assistants that understand, decide, and act — executing workflows and automating operational tasks end to end.", caps: [
      { t: "Workflow Execution", d: "Run multi-step business workflows autonomously and reliably." },
      { t: "Task Automation", d: "Offload repetitive operational work to AI agents." },
      { t: "Knowledge Retrieval", d: "Surface the right information from your systems on demand." },
      { t: "System Integrations", d: "Connect agents securely to your core platforms and tools." },
    ]},
    { title: "Omnichannel AI", text: "One AI experience across every customer touchpoint — web, mobile, WhatsApp, voice, contact center, and email.", caps: [
      { t: "Web, App & WhatsApp", d: "Engage customers on website, mobile apps and WhatsApp." },
      { t: "Voice & Contact Center", d: "Extend AI into voice channels and contact-center flows." },
      { t: "Email & Support", d: "Automate email responses and support conversations." },
      { t: "Unified Experience", d: "Consistent AI engagement across every channel and journey." },
    ]},
    { title: "AI Automation", text: "Reduce manual effort and improve operational efficiency by automating support, tickets, and business processes.", caps: [
      { t: "Ticket Automation", d: "Auto-classify, route and resolve support tickets." },
      { t: "Customer Support Automation", d: "Deflect repetitive queries and speed up resolutions." },
      { t: "Workflow Management", d: "Orchestrate multi-step business processes end to end." },
      { t: "Process Automation", d: "Reduce manual effort across back-office operations." },
    ]},
    { title: "AI Risk Intelligence", text: "Strengthen safety and compliance with AI-driven monitoring, anomaly detection, and intelligent operational visibility.", caps: [
      { t: "Fraud Signal Detection", d: "Spot anomalous behaviour and risk patterns in real time." },
      { t: "Conversation Monitoring", d: "Monitor AI interactions for compliance and safety." },
      { t: "Intelligent Alerts", d: "Trigger alerts on suspicious activity across channels." },
      { t: "Operational Visibility", d: "Centralized visibility into AI risk and performance." },
    ]},
  ],
  benefits: { title: "Why Enhency AI", cards: [
    { t: "Faster Deployment", d: "Launch chatbots, voice bots and agents in weeks, not months." },
    { t: "Lower Operational Cost", d: "Automate repetitive work and reduce support workload." },
    { t: "Better Customer Experience", d: "Instant, multilingual, 24×7 engagement across channels." },
    { t: "Enterprise Security", d: "Enterprise-grade security and operational governance." },
  ]},
  developer: { title: "Developer-Friendly AI Infrastructure", text: "Accelerate AI integrations through APIs, chat & voice SDKs, knowledge-base connectors, technical documentation, and scalable infrastructure.", tags: ["APIs", "Chat SDKs", "Voice APIs", "Webhooks", "Knowledge Base", "Sandbox Access"] },
  security: { title: "Enterprise-Grade AI Security & Governance", text: "Enhency AI supports secure customer interactions, data governance, conversation monitoring, and scalable operational controls.", cards: [
    { t: "Secure Interactions", d: "Protect customer conversations through enterprise-grade controls." },
    { t: "Data Governance", d: "Support compliant handling of customer and conversation data." },
    { t: "Conversation Monitoring", d: "Monitor AI interactions for safety, quality and compliance." },
    { t: "Operational Reliability", d: "Maintain resilient AI operations through scalable infrastructure." },
  ]},
  useCases: { title: "Industries We Serve", cards: [
    { t: "Banking & Fintech", d: "Automate support, onboarding and collections with AI." },
    { t: "Government", d: "Scale citizen engagement through multilingual AI assistants." },
    { t: "Insurance", d: "Streamline claims, queries and policy support with AI agents." },
    { t: "Enterprises & Merchant Networks", d: "Automate operations and customer engagement at scale." },
  ]},
  cta: { headline: "Ready to Scale with AI?", text: "Build intelligent customer experiences with Enhency AI — chatbots, voice bots, autonomous agents, omnichannel assistants, and workflow automation.", primary: DEMO, secondary: CONTACT },
};

/* ---------------- SOLUTIONS ---------------- */

PAGES["merchant-suite"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Merchant Suite" }],
  hero: { headline: "Unified Merchant Infrastructure for Modern Payment Operations", text: "Simplify merchant onboarding, payment processing, operational management, reconciliation workflows, and settlement operations through scalable infrastructure designed for banks, payment aggregators, fintechs, and enterprise ecosystems.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Purpose-Built Infrastructure for Merchant Ecosystems", text: "Enhency Merchant Suite enables organizations to manage end-to-end merchant operations through centralized infrastructure supporting merchant onboarding, payment acceptance, transaction visibility, reconciliation systems, settlement workflows, and operational management." },
  overview: { title: "Centralized Infrastructure for Merchant Operations", text: "Support scalable merchant ecosystems through infrastructure designed for operational efficiency, transaction reliability, payment visibility, and unified merchant management workflows.", cards: [
    { t: "Merchant Lifecycle Management", d: "Manage onboarding, payment workflows, and merchant lifecycle operations centrally." },
    { t: "Real-Time Payment Operations", d: "Enable secure and scalable merchant payment processing across ecosystems." },
    { t: "Centralized Reconciliation", d: "Track and reconcile transaction workflows and merchant payments centrally." },
    { t: "Settlement Management", d: "Support settlement visibility and financial workflow management at scale." },
  ]},
  sections: [
    { title: "Merchant Onboarding Infrastructure", text: "Simplify merchant onboarding workflows through centralized systems designed for operational efficiency, merchant activation, and scalable onboarding management.", caps: [
      { t: "Merchant Registration", d: "Manage merchant onboarding and operational setup workflows." },
      { t: "Verification Workflows", d: "Support merchant validation and onboarding review operations." },
      { t: "Configuration Management", d: "Configure merchant payment capabilities and transaction workflows." },
      { t: "Lifecycle Visibility", d: "Track onboarding states and merchant operational activities." },
    ]},
    { title: "Merchant Payment Infrastructure", text: "Enable secure and scalable merchant payment operations through infrastructure designed for transaction processing, payment acceptance, and operational continuity.", caps: [
      { t: "Payment Acceptance", d: "Support digital payment collection workflows across merchant ecosystems." },
      { t: "Real-Time Processing", d: "Process merchant payment activities through scalable infrastructure." },
      { t: "Workflow Management", d: "Manage payment routing, states, and operational handling." },
      { t: "Payment Visibility", d: "Monitor payment activities and merchant transaction operations in real time." },
    ]},
    { title: "Reconciliation & Settlement", text: "Simplify transaction reconciliation, operational verification, settlement operations, and financial workflows through centralized infrastructure systems.", caps: [
      { t: "Transaction Reconciliation", d: "Track and reconcile payment records across merchant transaction workflows." },
      { t: "Settlement Management", d: "Track settlement operations and financial transaction workflows centrally." },
      { t: "Exception Management", d: "Identify mismatches and operational anomalies centrally." },
      { t: "Reporting & Visibility", d: "Enable transaction-level reporting and operational visibility." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Merchant Ecosystems", cards: [
    { t: "Faster Merchant Enablement", d: "Accelerate merchant onboarding and operational activation workflows." },
    { t: "Unified Merchant Operations", d: "Manage onboarding, payments, reconciliation, and settlement centrally." },
    { t: "Scalable Infrastructure", d: "Support growing merchant ecosystems and transaction volumes." },
    { t: "Operational Efficiency", d: "Reduce operational complexity through centralized management systems." },
  ]},
  developer: { title: "Developer-Friendly Merchant Infrastructure", text: "Accelerate merchant ecosystem integrations through APIs, onboarding workflows, technical documentation, and scalable operational systems.", tags: ["APIs", "Merchant Integration Workflows", "Technical Documentation", "Sandbox Access", "Webhooks"] },
  security: { title: "Secure Infrastructure for Merchant Operations", text: "Enhency supports secure merchant payment operations, transaction visibility, operational governance, and scalable merchant ecosystem management.", cards: [
    { t: "Secure Payment Processing", d: "Protect merchant transaction workflows through security systems." },
    { t: "Operational Monitoring", d: "Monitor merchant activities, payment events, and workflows in real time." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted merchant payment operations." },
    { t: "Operational Governance", d: "Enable centralized operational controls and merchant management." },
  ]},
  useCases: { title: "Built for Modern Merchant Ecosystems", cards: [
    { t: "Banks", d: "Support merchant acquiring and operational payment workflows centrally." },
    { t: "Payment Aggregators", d: "Simplify onboarding, payment operations, reconciliation, and settlement." },
    { t: "Fintech Platforms", d: "Launch scalable merchant payment ecosystems through API-first infrastructure." },
    { t: "Enterprises", d: "Manage large-scale merchant operations through unified systems." },
  ]},
  cta: { headline: "Scale Merchant Operations with Enhency", text: "Launch secure and scalable merchant infrastructure with onboarding, payment operations, reconciliation, settlement, and centralized operational visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["communication"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Communication" }],
  hero: { headline: "Unified Communication Infrastructure for Modern Financial Engagement", text: "Enable scalable customer communication workflows across SMS, WhatsApp, Email, and campaign management systems through centralized communication infrastructure designed for financial ecosystems.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Centralized Communication Infrastructure", text: "Enhency Communication Infrastructure enables banks, fintechs, TPAPs, merchants, and enterprises to manage customer engagement, transaction communication, operational alerts, onboarding notifications, and campaign workflows through scalable multi-channel communication systems." },
  overview: { title: "Built for Scalable Customer Communication", text: "Support customer engagement and operational messaging workflows through centralized communication infrastructure designed for delivery reliability, operational visibility, and multi-channel communication management.", cards: [
    { t: "Multi-Channel Communication", d: "Manage workflows across SMS, WhatsApp, Email, and campaign systems centrally." },
    { t: "Transactional Messaging", d: "Enable secure operational notifications and transaction communication in real time." },
    { t: "Campaign Management", d: "Launch customer engagement campaigns through centralized workflow systems." },
    { t: "Operational Visibility", d: "Track communication, delivery, and campaign operations centrally." },
  ]},
  sections: [
    { title: "SMS Communication Infrastructure", text: "Enable scalable SMS communication workflows for transaction alerts, onboarding notifications, operational messaging, and customer engagement activities.", caps: [
      { t: "Transaction Notifications", d: "Send payment alerts and operational notifications in real time." },
      { t: "OTP & Verification", d: "Support customer verification and authentication through SMS." },
      { t: "Operational Messaging", d: "Manage onboarding updates and operational communication." },
      { t: "Delivery Visibility", d: "Track communication delivery workflows centrally." },
    ]},
    { title: "WhatsApp Communication Infrastructure", text: "Enable customer engagement and operational communication workflows through scalable WhatsApp messaging infrastructure.", caps: [
      { t: "Communication Workflows", d: "Support customer interactions through WhatsApp-based systems." },
      { t: "Transaction Updates", d: "Send payment notifications and operational alerts in real time." },
      { t: "Engagement Management", d: "Enable conversational customer engagement experiences." },
      { t: "Monitoring", d: "Track message activities and communication workflows centrally." },
    ]},
    { title: "Email & Campaign Manager", text: "Manage secure email communication and launch scalable communication campaigns through centralized workflow management and customer engagement systems.", caps: [
      { t: "Transactional Email", d: "Send transaction updates, alerts, and onboarding communication." },
      { t: "Campaign Management", d: "Create and manage campaigns across multiple engagement channels." },
      { t: "Audience Segmentation", d: "Support structured communication workflows and customer targeting." },
      { t: "Performance Visibility", d: "Track campaign activities and engagement workflows centrally." },
    ]},
  ],
  benefits: { title: "Designed for Modern Customer Engagement", cards: [
    { t: "Unified Communication", d: "Manage SMS, WhatsApp, Email, and campaigns through centralized infrastructure." },
    { t: "Faster Communication", d: "Enable real-time operational notifications and messaging workflows." },
    { t: "Scalable Infrastructure", d: "Support high-volume communication operations through resilient systems." },
    { t: "Centralized Visibility", d: "Monitor communication activities and campaigns through unified systems." },
  ]},
  developer: { title: "Developer-Friendly Communication Infrastructure", text: "Accelerate communication integrations through APIs, workflow systems, technical documentation, and scalable messaging infrastructure.", tags: ["APIs", "Webhooks", "Integration Guides", "Technical Documentation", "Sandbox Access"] },
  security: { title: "Secure Infrastructure for Customer Communication", text: "Enhency supports secure communication workflows, operational messaging, delivery reliability, and scalable customer engagement systems.", cards: [
    { t: "Secure Messaging", d: "Protect communication operations through infrastructure-focused systems." },
    { t: "Operational Monitoring", d: "Monitor communication activities and workflows in real time." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted communication operations." },
    { t: "Operational Governance", d: "Enable structured communication management and workflow visibility." },
  ]},
  useCases: { title: "Built for Modern Financial Communication", cards: [
    { t: "Banks", d: "Manage onboarding communication, transaction alerts, and operational messaging." },
    { t: "Fintech Platforms", d: "Enable customer engagement and automation through API-first messaging." },
    { t: "Payment Aggregators", d: "Support merchant communication and payment notification workflows at scale." },
    { t: "Enterprises", d: "Manage large-scale customer engagement and communication operations." },
  ]},
  cta: { headline: "Simplify Customer Communication with Enhency", text: "Launch scalable communication workflows with SMS, WhatsApp, Email, campaign management, and centralized operational visibility infrastructure.", primary: DEMO, secondary: CONTACT },
};

PAGES["soundbox-qr"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Soundbox & QR" }],
  hero: { headline: "Smart Merchant Collection Infrastructure with Soundbox & QR Solutions", text: "Enable seamless merchant payment acceptance through interoperable QR infrastructure, real-time soundbox notifications, and scalable collection systems designed for modern merchant ecosystems.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Merchant Payment Collections", text: "Enhency Soundbox & QR Solutions enable banks, payment aggregators, fintechs, and enterprises to simplify merchant payment acceptance through centralized QR infrastructure, real-time transaction notifications, operational visibility, and scalable merchant collection systems." },
  overview: { title: "Unified Infrastructure for Merchant Acceptance", text: "Support scalable merchant payment operations through infrastructure designed for interoperable QR acceptance, transaction visibility, real-time payment notifications, and centralized merchant collection management.", cards: [
    { t: "QR Payment Acceptance", d: "Enable seamless UPI QR payment collection across merchant ecosystems." },
    { t: "Real-Time Soundbox Notifications", d: "Provide instant payment confirmations through intelligent soundbox infrastructure." },
    { t: "Centralized Operations", d: "Manage merchant collection workflows and QR activities through unified systems." },
    { t: "Scalable Collection", d: "Support high-volume merchant ecosystems through resilient systems." },
  ]},
  sections: [
    { title: "QR Acceptance Infrastructure", text: "Enable interoperable QR-based payment acceptance through scalable infrastructure designed for modern merchant payment operations.", caps: [
      { t: "UPI QR Collections", d: "Support merchant payment collection across UPI-enabled ecosystems." },
      { t: "Interoperable Acceptance", d: "Enable seamless payment experiences across merchant environments." },
      { t: "Payment Visibility", d: "Track payment activities and merchant transactions in real time." },
      { t: "Collection Management", d: "Manage merchant QR operations through centralized systems." },
    ]},
    { title: "Dynamic & Static QR", text: "Generate transaction-specific QR workflows and enable simple, scalable merchant payment collection through interoperable static and dynamic QR systems.", caps: [
      { t: "Transaction-Based QR", d: "Create payment-specific QR workflows for merchant operations." },
      { t: "Static QR Deployment", d: "Support merchant QR activation and operational payment setup." },
      { t: "Real-Time Mapping", d: "Link transactions dynamically to collection workflows." },
      { t: "Collection Visibility", d: "Monitor QR payment activities and transaction events centrally." },
    ]},
    { title: "Real-Time Soundbox Notifications", text: "Deliver instant transaction confirmations and operational payment alerts through intelligent soundbox systems.", caps: [
      { t: "Instant Notifications", d: "Provide real-time audio payment confirmations for merchant transactions." },
      { t: "Event Visibility", d: "Track merchant payment events and operational activities in real time." },
      { t: "Payment Assurance", d: "Improve merchant payment confidence through instant acknowledgment." },
      { t: "Scalable Notifications", d: "Support large-scale merchant ecosystems through centralized systems." },
    ]},
  ],
  benefits: { title: "Designed for Modern Merchant Ecosystems", cards: [
    { t: "Faster Acceptance", d: "Enable quick and seamless merchant payment collection workflows." },
    { t: "Real-Time Visibility", d: "Provide merchants with instant payment confirmation and awareness." },
    { t: "Scalable Collection", d: "Support growing merchant ecosystems through resilient QR & soundbox systems." },
    { t: "Centralized Operations", d: "Manage collections, QR workflows, and visibility through unified systems." },
  ]},
  developer: { title: "Developer-Friendly Merchant Collection Infrastructure", text: "Accelerate merchant payment integrations through APIs, QR workflows, operational systems, and scalable infrastructure support.", tags: ["APIs", "QR Integration Workflows", "Technical Documentation", "Sandbox Access", "Webhooks"] },
  security: { title: "Secure Infrastructure for Merchant Collections", text: "Enhency supports secure payment acceptance, operational transaction visibility, merchant collection workflows, and scalable financial operations.", cards: [
    { t: "Secure Payment Acceptance", d: "Protect merchant collection workflows through payment systems." },
    { t: "Operational Monitoring", d: "Monitor merchant payment activities and events continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted merchant collection operations." },
    { t: "Operational Governance", d: "Enable structured merchant payment operations and management." },
  ]},
  useCases: { title: "Built for Modern Merchant Collection Ecosystems", cards: [
    { t: "Banks", d: "Enable merchant QR collections and payment notification workflows." },
    { t: "Payment Aggregators", d: "Simplify merchant collection operations and acceptance at scale." },
    { t: "Fintech Platforms", d: "Launch digital merchant payment experiences through API-driven QR." },
    { t: "Enterprises", d: "Support large-scale merchant ecosystems and collection workflows." },
  ]},
  cta: { headline: "Modernize Merchant Collections with Enhency", text: "Launch scalable QR and soundbox infrastructure with real-time payment notifications, merchant collection workflows, and centralized operational visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["pos"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "POS" }],
  hero: { headline: "Modern POS Infrastructure for Scalable Merchant Payment Operations", text: "Enable secure and seamless in-store payment acceptance through enterprise-grade POS infrastructure designed for merchant operations, transaction processing, device management, and real-time payment workflows.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Unified Infrastructure for POS Payment Ecosystems", text: "Enhency POS Infrastructure enables banks, payment aggregators, fintechs, and enterprises to manage merchant payment acceptance through centralized device infrastructure, transaction processing systems, operational visibility, and scalable payment operations." },
  overview: { title: "Built for Modern Merchant Acceptance", text: "Support secure and scalable merchant payment operations through infrastructure designed for POS transaction handling, device lifecycle management, payment visibility, and operational continuity.", cards: [
    { t: "Merchant Payment Acceptance", d: "Enable secure in-store payment acceptance across merchant ecosystems." },
    { t: "Centralized Device Infrastructure", d: "Manage POS devices and payment workflows through unified systems." },
    { t: "Real-Time Processing", d: "Support low-latency transaction operations through scalable systems." },
    { t: "Operational Visibility", d: "Monitor merchant transactions and device activities centrally." },
  ]},
  sections: [
    { title: "POS Infrastructure", text: "Enable scalable merchant payment operations through centralized POS infrastructure designed for transaction reliability, operational visibility, and payment continuity.", caps: [
      { t: "Centralized Operations", d: "Manage merchant payment acceptance workflows through unified systems." },
      { t: "Device Connectivity", d: "Support connected payment operations across POS-enabled ecosystems." },
      { t: "Workflow Management", d: "Handle merchant payment flows and operational transaction activities." },
      { t: "Infrastructure Monitoring", d: "Track POS infrastructure health and operational continuity." },
    ]},
    { title: "POS Device Management", text: "Manage device operations, lifecycle activities, operational monitoring, and infrastructure visibility through centralized device management systems.", caps: [
      { t: "Lifecycle Management", d: "Track device onboarding, activation, and lifecycle activities." },
      { t: "Device Monitoring", d: "Monitor device health and payment connectivity workflows." },
      { t: "Configuration Management", d: "Manage payment settings across merchant device ecosystems." },
      { t: "Device Visibility", d: "Enable real-time monitoring of POS infrastructure and devices." },
    ]},
    { title: "Real-Time Transaction Processing", text: "Support secure and scalable transaction workflows through resilient payment processing infrastructure designed for merchant operations.", caps: [
      { t: "Secure Transaction Handling", d: "Process merchant payment transactions through secure infrastructure." },
      { t: "Lifecycle Management", d: "Track transaction states and payment activities centrally." },
      { t: "Retry & Timeout", d: "Support operational recovery and payment continuity systems." },
      { t: "High Availability", d: "Maintain uninterrupted transaction operations through resilient infrastructure." },
    ]},
  ],
  benefits: { title: "Designed for Scalable Merchant Payment Operations", cards: [
    { t: "Faster Enablement", d: "Enable rapid deployment of POS payment infrastructure across merchants." },
    { t: "Unified Operations", d: "Manage acceptance, device operations, and transactions centrally." },
    { t: "Scalable Infrastructure", d: "Support growing merchant ecosystems and transaction volumes." },
    { t: "Reliable Experiences", d: "Deliver secure and uninterrupted merchant payment operations." },
  ]},
  developer: { title: "Developer-Friendly POS Infrastructure", text: "Accelerate POS integrations through APIs, operational systems, technical documentation, and scalable payment infrastructure.", tags: ["APIs", "POS Integration Workflows", "Technical Documentation", "Sandbox Access", "Webhooks"] },
  security: { title: "Secure Infrastructure for Merchant Acceptance", text: "Enhency supports secure merchant transactions, operational visibility, device governance, and scalable payment acceptance systems.", cards: [
    { t: "Secure Payment Processing", d: "Protect merchant transaction workflows through security systems." },
    { t: "Operational Monitoring", d: "Monitor transactions, device operations, and workflows continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted merchant acceptance operations." },
    { t: "Operational Governance", d: "Enable structured payment operations and device management." },
  ]},
  useCases: { title: "Built for Modern Merchant Ecosystems", cards: [
    { t: "Banks", d: "Enable scalable merchant acceptance and POS payment operations centrally." },
    { t: "Payment Aggregators", d: "Simplify onboarding, device operations, and payment workflows at scale." },
    { t: "Fintech Platforms", d: "Launch merchant payment experiences through API-driven POS infrastructure." },
    { t: "Enterprises", d: "Support large-scale retail payment operations and acceptance workflows." },
  ]},
  cta: { headline: "Scale Merchant Acceptance with Enhency POS Infrastructure", text: "Launch secure and scalable POS payment infrastructure with merchant acceptance, device management, transaction processing, and centralized visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["digital-banking"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Digital Banking" }],
  hero: { headline: "Digital Banking Infrastructure for Modern Financial Experiences", text: "Build secure, scalable, and modern digital banking experiences through enterprise-grade website development, hosting infrastructure, security systems, and banking software solutions designed for financial institutions and fintech ecosystems.", primary: SALES, secondary: { t: "Explore Solutions", href: "index.html#solutions" }, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Digital Banking Platforms", text: "Enhency enables banks, fintechs, and financial institutions to launch digital banking experiences through secure website infrastructure, hosting systems, SSL security, domain management, and scalable banking software solutions." },
  overview: { title: "Unified Infrastructure for Digital Banking Experiences", text: "Support modern financial ecosystems through centralized infrastructure designed for secure banking websites, digital customer experiences, operational continuity, and scalable banking technology solutions.", cards: [
    { t: "Banking Website Infrastructure", d: "Launch modern and responsive banking platforms designed for scalability." },
    { t: "Secure Hosting & Security", d: "Support secure banking operations through resilient hosting and SSL protection." },
    { t: "Centralized Platform Management", d: "Manage websites, software, domains, and workflows through unified infrastructure." },
    { t: "Scalable Technology Solutions", d: "Support growing digital banking ecosystems through enterprise-grade architecture." },
  ]},
  sections: [
    { title: "Banking Website Design", text: "Create modern and scalable banking experiences through professionally designed digital platforms tailored for financial institutions and fintech ecosystems.", caps: [
      { t: "Responsive Platforms", d: "Enable seamless banking experiences across web and digital touchpoints." },
      { t: "Experience Optimization", d: "Design intuitive user journeys and modern banking interactions." },
      { t: "Service Integration", d: "Support banking workflows, onboarding, and payment services." },
      { t: "Enterprise UI Infrastructure", d: "Build structured and scalable digital banking environments." },
    ]},
    { title: "SSL, Hosting & Domain", text: "Strengthen digital banking security and reliability through SSL-enabled infrastructure, scalable hosting environments, and centralized domain management.", caps: [
      { t: "Secure Communication", d: "Protect customer interactions through encrypted communication systems." },
      { t: "Scalable Hosting", d: "Support high-traffic banking operations through resilient hosting." },
      { t: "High Availability", d: "Maintain uninterrupted digital banking experiences." },
      { t: "Domain Management", d: "Enable structured digital identity setup and operational domain management." },
    ]},
    { title: "Banking Software Solutions", text: "Launch scalable digital banking ecosystems through modern software solutions designed for operational efficiency, customer engagement, and financial workflow management.", caps: [
      { t: "Banking Workflow Systems", d: "Support digital banking operations through centralized software infrastructure." },
      { t: "Customer Interaction Platforms", d: "Enable customer-facing banking experiences across digital channels." },
      { t: "Operational Management", d: "Manage financial workflows and onboarding systems centrally." },
      { t: "Scalable Architecture", d: "Support growing financial ecosystems through enterprise-grade systems." },
    ]},
  ],
  benefits: { title: "Designed for Modern Financial Institutions", cards: [
    { t: "Faster Launches", d: "Accelerate deployment of banking websites and technology platforms." },
    { t: "Unified Digital Infrastructure", d: "Manage websites, hosting, security, domains, and software centrally." },
    { t: "Scalable Technology", d: "Support growing financial ecosystems through resilient architecture." },
    { t: "Secure Experiences", d: "Deliver secure and reliable digital banking interactions." },
  ]},
  developer: { title: "Developer-Friendly Digital Banking Infrastructure", text: "Accelerate banking platform implementation through APIs, technical workflows, scalable infrastructure systems, and operational support.", tags: ["APIs", "Integration Workflows", "Technical Documentation", "Hosting Support", "Platform Management Tools"] },
  security: { title: "Secure Infrastructure for Digital Banking Platforms", text: "Enhency supports secure banking operations, infrastructure reliability, customer trust, and scalable digital financial ecosystems.", cards: [
    { t: "Secure Banking Infrastructure", d: "Protect customer interactions and digital workflows through resilient systems." },
    { t: "Operational Monitoring", d: "Monitor digital banking operations and infrastructure continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted banking experiences through scalable hosting." },
    { t: "Operational Governance", d: "Enable structured digital banking operations and management." },
  ]},
  useCases: { title: "Built for Modern Banking Ecosystems", cards: [
    { t: "Banks", d: "Launch modern digital banking platforms with secure, scalable technology." },
    { t: "Fintech Platforms", d: "Enable customer-facing financial experiences through API-driven infrastructure." },
    { t: "Financial Institutions", d: "Modernize digital operations through centralized technology solutions." },
    { t: "Enterprises", d: "Support large-scale digital financial ecosystems through resilient infrastructure." },
  ]},
  cta: { headline: "Build Modern Digital Banking Experiences with Enhency", text: "Launch secure and scalable banking websites, hosting, SSL systems, domain management, and financial software solutions through enterprise-grade infrastructure.", primary: DEMO, secondary: CONTACT },
};

PAGES["enhency-mobile"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Enhency Mobile" }],
  hero: { headline: "Modern Mobile Banking Infrastructure for Digital Financial Experiences", text: "Enable secure and scalable mobile banking experiences through enterprise-grade infrastructure designed for digital banking operations, payment workflows, customer engagement, and real-time financial interactions.", primary: SALES, secondary: { t: "Explore Solutions", href: "index.html#solutions" }, visual: "dashboard" },
  intro: { title: "Next-Generation Mobile Banking Infrastructure", text: "Enhency Mobile enables banks, fintechs, and financial institutions to launch modern mobile banking ecosystems through scalable infrastructure supporting digital transactions, customer onboarding, account management, operational visibility, and secure financial interactions." },
  overview: { title: "Built for Modern Digital Banking Ecosystems", text: "Support customer-centric mobile banking experiences through centralized infrastructure designed for operational scalability, seamless financial interactions, payment workflows, and secure transaction management.", cards: [
    { t: "Mobile Banking Infrastructure", d: "Launch scalable mobile banking experiences through centralized systems." },
    { t: "Real-Time Operations", d: "Support secure and low-latency transaction workflows across mobile." },
    { t: "Unified Experience", d: "Enable seamless customer journeys through modern banking interactions." },
    { t: "Secure Architecture", d: "Protect customer activities through enterprise-grade security infrastructure." },
  ]},
  sections: [
    { title: "Mobile Banking Platform", text: "Enable modern banking experiences through scalable mobile infrastructure designed for customer engagement, digital transactions, and operational banking workflows.", caps: [
      { t: "Digital Banking Operations", d: "Support banking activities and financial workflows across mobile." },
      { t: "Account Management", d: "Enable customer access to financial operations and account activities." },
      { t: "Real-Time Payments", d: "Support secure payment workflows through mobile banking systems." },
      { t: "Scalable Architecture", d: "Support growing user ecosystems through resilient infrastructure." },
    ]},
    { title: "Experience & Transaction Features", text: "Deliver seamless customer journeys and secure, scalable financial transaction workflows through centralized mobile banking infrastructure.", caps: [
      { t: "Seamless Journeys", d: "Enable frictionless banking experiences across mobile workflows." },
      { t: "Fund Transfers", d: "Enable secure real-time money movement and transaction handling." },
      { t: "Lifecycle Visibility", d: "Track transaction states and payment activities in real time." },
      { t: "Operational Notifications", d: "Provide customers with real-time transaction alerts and updates." },
    ]},
    { title: "Security & Authentication", text: "Protect mobile banking operations through secure authentication systems and infrastructure-focused operational controls.", caps: [
      { t: "Secure Authentication", d: "Support protected customer login and banking access workflows." },
      { t: "Security Controls", d: "Enable secure transaction handling and customer verification." },
      { t: "Session Management", d: "Manage secure user sessions and operational interactions." },
      { t: "Infrastructure Protection", d: "Support secure digital banking through resilient security architecture." },
    ]},
  ],
  benefits: { title: "Designed for Modern Banking Experiences", cards: [
    { t: "Faster Deployment", d: "Accelerate launch timelines for mobile banking ecosystems." },
    { t: "Unified Operations", d: "Manage interactions, transactions, and workflows centrally." },
    { t: "Scalable Infrastructure", d: "Support growing user ecosystems and transaction volumes." },
    { t: "Secure Experiences", d: "Enable trusted and protected banking journeys across mobile." },
  ]},
  developer: { title: "Developer-Friendly Mobile Banking Infrastructure", text: "Accelerate mobile banking implementation through APIs, operational systems, technical documentation, and scalable digital infrastructure.", tags: ["APIs", "Mobile Banking Integrations", "Technical Documentation", "Sandbox Access", "Webhooks"] },
  security: { title: "Enterprise-Grade Infrastructure for Mobile Banking", text: "Enhency supports secure mobile banking operations, operational reliability, customer engagement, and scalable financial ecosystems.", cards: [
    { t: "Secure Financial Operations", d: "Protect customer transactions through resilient infrastructure systems." },
    { t: "Operational Monitoring", d: "Monitor banking workflows and customer operations continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted digital banking through scalable architecture." },
    { t: "Operational Governance", d: "Enable structured mobile banking operations and management." },
  ]},
  useCases: { title: "Built for Modern Financial Institutions", cards: [
    { t: "Banks", d: "Launch scalable mobile banking experiences through centralized infrastructure." },
    { t: "Fintech Platforms", d: "Enable customer-facing financial applications and banking journeys." },
    { t: "Financial Institutions", d: "Modernize digital financial operations through mobile-first systems." },
    { t: "Enterprises", d: "Support large-scale customer financial interactions through resilient infrastructure." },
  ]},
  cta: { headline: "Launch Modern Mobile Banking Experiences with Enhency", text: "Build secure and scalable mobile banking ecosystems with real-time transactions, customer engagement, authentication, and centralized operational infrastructure.", primary: DEMO, secondary: CONTACT },
};

PAGES["payment-gateway-orchestration"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Gateway Orchestration" }],
  hero: { headline: "Intelligent Payment Gateway Orchestration for Scalable Transaction Operations", text: "Optimize payment performance through centralized gateway orchestration infrastructure designed for intelligent routing, smart retries, failover handling, transaction visibility, and payment success rate optimization.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Payment Orchestration", text: "Enhency Payment Gateway Orchestration enables banks, payment aggregators, fintechs, and enterprises to manage payment operations through centralized infrastructure supporting gateway routing, transaction orchestration, operational continuity, and scalable payment processing workflows." },
  overview: { title: "Unified Infrastructure for Payment Routing & Optimization", text: "Support high-volume payment ecosystems through intelligent orchestration infrastructure designed for transaction reliability, routing efficiency, payment continuity, and operational visibility.", cards: [
    { t: "Intelligent Gateway Routing", d: "Optimize payment workflows through centralized gateway selection and orchestration." },
    { t: "Smart Retry Infrastructure", d: "Improve payment continuity through automated retry and recovery systems." },
    { t: "Real-Time Visibility", d: "Track transaction states, routing, and payment operations centrally." },
    { t: "High Availability", d: "Maintain uninterrupted payment operations through resilient failover systems." },
  ]},
  sections: [
    { title: "Multi-Gateway Routing", text: "Distribute transaction traffic intelligently across multiple payment gateways through centralized orchestration infrastructure.", caps: [
      { t: "Gateway Selection", d: "Route transactions dynamically based on operational conditions." },
      { t: "Load Distribution", d: "Balance payment traffic across gateway ecosystems for scalability." },
      { t: "Routing Visibility", d: "Track routing decisions and transaction activities centrally." },
      { t: "Scalable Infrastructure", d: "Support high-volume payment ecosystems through resilient routing." },
    ]},
    { title: "Smart Retry & Failover", text: "Improve payment continuity and maintain uninterrupted operations through automated retry handling and resilient failover systems.", caps: [
      { t: "Automated Retry", d: "Trigger intelligent retry operations for interrupted transactions." },
      { t: "Failover Handling", d: "Redirect payment workflows during disruptions and gateway interruptions." },
      { t: "Recovery Systems", d: "Support transaction continuity through operational retry infrastructure." },
      { t: "Reduced Failures", d: "Improve operational payment reliability through centralized handling." },
    ]},
    { title: "Success Rate Optimization", text: "Improve transaction completion and operational payment efficiency through intelligent orchestration infrastructure.", caps: [
      { t: "Performance Monitoring", d: "Track payment activities and completion workflows continuously." },
      { t: "Routing Optimization", d: "Support operational payment optimization through dynamic routing." },
      { t: "Payment Insights", d: "Monitor payment behaviors and workflow activities centrally." },
      { t: "Payment Continuity", d: "Enable reliable transaction handling and processing operations." },
    ]},
  ],
  benefits: { title: "Designed for High-Performance Payment Ecosystems", cards: [
    { t: "Improved Reliability", d: "Support uninterrupted payment workflows through intelligent orchestration." },
    { t: "Optimized Operations", d: "Improve payment routing and operational transaction management." },
    { t: "Scalable Infrastructure", d: "Support high-volume transaction ecosystems through resilient architecture." },
    { t: "Centralized Visibility", d: "Manage routing, retries, failover, and workflows through unified systems." },
  ]},
  developer: { title: "Developer-Friendly Payment Orchestration Infrastructure", text: "Accelerate payment orchestration integrations through APIs, workflow systems, technical documentation, and scalable transaction infrastructure.", tags: ["APIs", "Routing Workflow Support", "Webhooks", "Technical Documentation", "Sandbox Access", "Integration Guides"] },
  security: { title: "Secure Infrastructure for Payment Orchestration", text: "Enhency supports secure transaction routing, operational continuity, payment visibility, and scalable orchestration systems.", cards: [
    { t: "Secure Transaction Workflows", d: "Protect payment routing and orchestration through operational systems." },
    { t: "Operational Monitoring", d: "Monitor transactions, routing, and gateway operations continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted payment operations through resilient orchestration." },
    { t: "Operational Governance", d: "Enable structured payment routing and orchestration management." },
  ]},
  useCases: { title: "Built for Modern Payment Ecosystems", cards: [
    { t: "Payment Aggregators", d: "Optimize payment routing and gateway performance centrally." },
    { t: "Fintech Platforms", d: "Enable scalable payment operations with intelligent routing and continuity." },
    { t: "Enterprises", d: "Support high-volume digital payment ecosystems through resilient orchestration." },
    { t: "Banks", d: "Manage gateway operations and payment routing through centralized infrastructure." },
  ]},
  cta: { headline: "Optimize Payment Performance with Enhency", text: "Launch scalable payment orchestration infrastructure with intelligent routing, smart retries, failover management, and centralized transaction visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["payment-link"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Payment Link" }],
  hero: { headline: "Simplified Payment Collection Infrastructure with Payment Links", text: "Enable secure and seamless payment collection experiences through scalable payment link infrastructure designed for merchants, businesses, fintechs, and enterprise payment operations.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Digital Payment Collections", text: "Enhency Payment Link Infrastructure enables organizations to simplify customer payment collection through centralized link-based payment systems supporting merchant requests, transaction visibility, operational workflows, and scalable payment acceptance experiences." },
  overview: { title: "Unified Infrastructure for Link-Based Payments", text: "Support flexible and scalable payment collection workflows through secure infrastructure designed for payment link generation, customer payment journeys, operational visibility, and real-time transaction handling.", cards: [
    { t: "Link-Based Collections", d: "Enable customers to complete payments through secure shareable links." },
    { t: "Merchant Payment Requests", d: "Simplify merchant collection operations through centralized request systems." },
    { t: "Real-Time Visibility", d: "Track payment activities and operational workflows centrally." },
    { t: "Scalable Architecture", d: "Support growing payment operations through resilient infrastructure." },
  ]},
  sections: [
    { title: "Link-Based Collection Infrastructure", text: "Simplify digital payment acceptance through secure and scalable payment link generation systems.", caps: [
      { t: "Payment Link Generation", d: "Create secure payment links for customer collection workflows." },
      { t: "Real-Time Tracking", d: "Monitor payment activities and transaction workflows in real time." },
      { t: "Centralized Operations", d: "Manage payment links and collection workflows through unified systems." },
      { t: "Scalable Infrastructure", d: "Support high-volume collection activities across ecosystems." },
    ]},
    { title: "Merchant Payment Requests", text: "Enable merchants and businesses to initiate secure customer payment requests through centralized infrastructure systems.", caps: [
      { t: "Request Workflows", d: "Create and manage customer payment requests across environments." },
      { t: "Collection Visibility", d: "Track merchant payment activities and collection workflows centrally." },
      { t: "Lifecycle Management", d: "Monitor payment states, events, and operational activities." },
      { t: "Workflow Management", d: "Support structured merchant collection operations and handling." },
    ]},
    { title: "Shareable Payment Experience", text: "Deliver frictionless customer payment journeys through shareable and accessible payment collection workflows.", caps: [
      { t: "Shareable Journeys", d: "Enable payment collections through easily shareable workflows." },
      { t: "Customer-Friendly Experience", d: "Support simple and intuitive customer payment interactions." },
      { t: "Multi-Channel Sharing", d: "Distribute payment requests across communication channels." },
      { t: "Payment Visibility", d: "Monitor customer payment interactions centrally." },
    ]},
  ],
  benefits: { title: "Designed for Flexible Payment Collections", cards: [
    { t: "Faster Collections", d: "Enable quick customer payment acceptance through shareable workflows." },
    { t: "Simplified Operations", d: "Manage payment requests and workflows through centralized infrastructure." },
    { t: "Scalable Infrastructure", d: "Support growing digital payment ecosystems through resilient architecture." },
    { t: "Real-Time Visibility", d: "Track customer payments and transaction workflows centrally." },
  ]},
  developer: { title: "Developer-Friendly Payment Collection Infrastructure", text: "Accelerate payment collection integrations through APIs, operational systems, technical documentation, and scalable workflow infrastructure.", tags: ["APIs", "Payment Link Workflows", "Webhooks", "Technical Documentation", "Sandbox Access"] },
  security: { title: "Secure Infrastructure for Payment Collections", text: "Enhency supports secure payment collection workflows, transaction visibility, operational governance, and scalable digital payment ecosystems.", cards: [
    { t: "Secure Payment Workflows", d: "Protect payment collection operations through security systems." },
    { t: "Operational Monitoring", d: "Monitor payment activities and collection workflows continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted payment collection operations." },
    { t: "Operational Governance", d: "Enable structured payment collection and merchant management." },
  ]},
  useCases: { title: "Built for Modern Digital Payment Operations", cards: [
    { t: "Merchants", d: "Simplify customer payment collection through secure payment link systems." },
    { t: "Fintech Platforms", d: "Enable digital payment workflows through API-first infrastructure." },
    { t: "Enterprises", d: "Support large-scale customer payment requests and collection workflows." },
    { t: "Payment Aggregators", d: "Manage merchant collection operations and request systems centrally." },
  ]},
  cta: { headline: "Simplify Digital Payment Collections with Enhency", text: "Launch scalable payment link infrastructure with merchant payment requests, shareable payment experiences, and centralized transaction visibility.", primary: DEMO, secondary: CONTACT },
};

PAGES["payment-form"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "Payment Form" }],
  hero: { headline: "Hosted Payment Forms for Seamless Checkout Experiences", text: "Simplify payment collection through hosted payment forms designed for secure checkout experiences, flexible collection workflows, and scalable digital payment operations.", primary: SALES, secondary: DOCS, visual: "code" },
  intro: { title: "Modern Infrastructure for Hosted Payment Collection", text: "Enhency Payment Form infrastructure enables merchants, businesses, fintechs, and enterprises to collect payments through hosted checkout experiences and structured payment collection workflows built on secure and scalable infrastructure." },
  overview: { title: "Unified Infrastructure for Checkout Experiences", text: "Support flexible payment collection through infrastructure designed for hosted payment forms, secure checkout journeys, operational visibility, and real-time transaction handling.", cards: [
    { t: "Hosted Payment Forms", d: "Collect payments through secure, ready-to-use hosted form experiences." },
    { t: "Checkout Experience", d: "Deliver smooth and intuitive customer checkout journeys." },
    { t: "Collection Workflows", d: "Support structured payment collection workflows across digital channels." },
    { t: "Real-Time Visibility", d: "Track payment activities and operational workflows centrally." },
  ]},
  sections: [
    { title: "Hosted Payment Forms", text: "Enable secure payment collection through hosted payment form infrastructure designed for fast deployment and operational simplicity.", caps: [
      { t: "Ready-to-Use Forms", d: "Deploy hosted payment forms without complex implementation." },
      { t: "Secure Collection", d: "Protect payment workflows through infrastructure-focused systems." },
      { t: "Flexible Configuration", d: "Configure form fields and collection settings operationally." },
      { t: "Real-Time Tracking", d: "Monitor payment activities and transaction workflows centrally." },
    ]},
    { title: "Checkout Experience", text: "Deliver seamless checkout journeys through optimized payment experiences designed for customer simplicity and operational continuity.", caps: [
      { t: "Smooth Journeys", d: "Enable frictionless customer checkout experiences." },
      { t: "Responsive Experience", d: "Support checkout across digital customer touchpoints." },
      { t: "Operational Continuity", d: "Maintain reliable payment collection workflows." },
      { t: "Visibility", d: "Track checkout activities and payment events centrally." },
    ]},
    { title: "Payment Collection Workflows", text: "Support structured payment collection through centralized workflows designed for operational efficiency and transaction visibility.", caps: [
      { t: "Collection Management", d: "Manage payment collection workflows through centralized systems." },
      { t: "Lifecycle Tracking", d: "Monitor payment states, events, and operational activities." },
      { t: "Workflow Automation", d: "Simplify collection processes through operational infrastructure." },
      { t: "Centralized Visibility", d: "Track payment collections across digital ecosystems." },
    ]},
  ],
  benefits: { title: "Designed for Flexible Checkout Operations", cards: [
    { t: "Faster Deployment", d: "Launch hosted payment forms quickly without heavy development." },
    { t: "Simplified Collections", d: "Manage checkout and collection workflows through centralized systems." },
    { t: "Scalable Infrastructure", d: "Support growing payment ecosystems through resilient architecture." },
    { t: "Real-Time Visibility", d: "Track checkout payments and workflows through unified systems." },
  ]},
  developer: { title: "Developer-Friendly Payment Form Infrastructure", text: "Accelerate checkout integrations through APIs, operational systems, technical documentation, and scalable workflow infrastructure.", tags: ["APIs", "Checkout Workflows", "Webhooks", "Technical Documentation", "Sandbox Access"] },
  security: { title: "Secure Infrastructure for Checkout Collections", text: "Enhency supports secure checkout workflows, transaction visibility, operational governance, and scalable digital payment ecosystems.", cards: [
    { t: "Secure Checkout", d: "Protect checkout workflows through infrastructure-focused systems." },
    { t: "Operational Monitoring", d: "Monitor checkout activities and workflows continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted checkout operations." },
    { t: "Operational Governance", d: "Enable structured checkout and collection management." },
  ]},
  useCases: { title: "Built for Modern Checkout Ecosystems", cards: [
    { t: "Merchants", d: "Collect payments through secure hosted checkout experiences." },
    { t: "Fintech Platforms", d: "Enable digital checkout workflows through API-first infrastructure." },
    { t: "Enterprises", d: "Support large-scale checkout and collection operations." },
    { t: "Payment Aggregators", d: "Manage merchant checkout collection operations centrally." },
  ]},
  cta: { headline: "Simplify Checkout Experiences with Enhency", text: "Launch scalable hosted payment forms with secure checkout experiences and centralized payment collection workflows.", primary: DEMO, secondary: CONTACT },
};

PAGES["tpv"] = {
  crumb: [{ t: "Solutions", href: "#" }, { t: "TPV" }],
  hero: { headline: "Secure TPV Infrastructure for Verified Banking Transactions", text: "Enable secure and compliant payment workflows through scalable TPV infrastructure designed for account verification, banking validation, and transaction authenticity across financial ecosystems.", primary: SALES, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Modern Infrastructure for Banking Validation Workflows", text: "Enhency TPV Infrastructure enables banks, fintechs, payment aggregators, and enterprises to validate customer banking details, strengthen transaction authenticity, and support secure payment workflows through centralized verification systems." },
  overview: { title: "Unified Infrastructure for Secure Banking Validation", text: "Support reliable financial operations through infrastructure designed for account verification, payment validation workflows, operational monitoring, and secure banking transaction management.", cards: [
    { t: "Third Party Validation", d: "Enable structured banking validation workflows for secure payment operations." },
    { t: "Account Verification", d: "Validate banking details and customer account information centrally." },
    { t: "Secure Payment Workflows", d: "Support trusted financial operations through verification systems." },
    { t: "Validation Visibility", d: "Track validation activities and transaction workflows centrally." },
  ]},
  sections: [
    { title: "Third Party Validation Infrastructure", text: "Support secure payment workflows through centralized TPV systems designed for operational verification and transaction authenticity management.", caps: [
      { t: "Validation Workflows", d: "Enable structured validation operations for financial transactions." },
      { t: "Payment Verification", d: "Support secure payment processing through banking validation." },
      { t: "Authenticity Management", d: "Strengthen transaction trust and operational verification handling." },
      { t: "Centralized Operations", d: "Manage TPV workflows and validation activities through unified systems." },
    ]},
    { title: "Account Verification Infrastructure", text: "Validate customer banking details and account information through scalable infrastructure designed for reliable payment operations.", caps: [
      { t: "Bank Account Verification", d: "Support customer account validation and verification workflows." },
      { t: "Account Matching", d: "Enable transaction-level verification and account consistency checks." },
      { t: "Real-Time Visibility", d: "Track account verification workflows and activities centrally." },
      { t: "Scalable Verification", d: "Support high-volume validation operations through resilient systems." },
    ]},
    { title: "Secure Banking Validation", text: "Strengthen banking transaction integrity through secure validation systems and centralized operational controls.", caps: [
      { t: "Secure Workflows", d: "Protect banking validation operations through security systems." },
      { t: "Validation Monitoring", d: "Track payment verification activities and workflows continuously." },
      { t: "Operational Governance", d: "Enable structured banking validation management." },
      { t: "Reliable Infrastructure", d: "Support uninterrupted verification through scalable architecture." },
    ]},
  ],
  benefits: { title: "Designed for Secure Financial Operations", cards: [
    { t: "Improved Transaction Trust", d: "Strengthen payment authenticity and workflow reliability through validation." },
    { t: "Faster Verification", d: "Enable real-time account validation and operational banking workflows." },
    { t: "Centralized Management", d: "Manage TPV operations and account verification through unified systems." },
    { t: "Scalable Infrastructure", d: "Support growing transaction ecosystems through resilient architecture." },
  ]},
  developer: { title: "Developer-Friendly TPV Infrastructure", text: "Accelerate banking validation integrations through APIs, operational systems, technical documentation, and scalable infrastructure support.", tags: ["APIs", "Banking Validation Workflows", "Webhooks", "Technical Documentation", "Sandbox Access"] },
  security: { title: "Secure Infrastructure for Banking Validation", text: "Enhency supports secure banking validation workflows, operational visibility, account verification systems, and scalable financial operations.", cards: [
    { t: "Secure Validation", d: "Protect banking verification workflows through operational systems." },
    { t: "Operational Monitoring", d: "Monitor validation activities and transaction workflows continuously." },
    { t: "Infrastructure Reliability", d: "Support uninterrupted banking verification operations." },
    { t: "Operational Governance", d: "Enable structured banking validation management." },
  ]},
  useCases: { title: "Built for Modern Financial Validation Ecosystems", cards: [
    { t: "Banks", d: "Strengthen banking transaction workflows through secure account verification." },
    { t: "Payment Aggregators", d: "Enable secure merchant payment validation and banking verification." },
    { t: "Fintech Platforms", d: "Support trusted payment experiences through API-driven TPV systems." },
    { t: "Enterprises", d: "Manage large-scale banking validation workflows centrally." },
  ]},
  cta: { headline: "Strengthen Banking Verification Workflows with Enhency", text: "Launch scalable TPV infrastructure with account verification, secure banking validation workflows, and centralized operational visibility.", primary: DEMO, secondary: CONTACT },
};

/* ---------------- ABOUT ---------------- */

PAGES["company"] = {
  crumb: [{ t: "About", href: "#" }, { t: "Company" }],
  hero: { headline: "Building Modern Infrastructure for Digital Financial Ecosystems", text: "Enhency is a financial infrastructure platform enabling banks, fintechs, payment aggregators, TPAPs, and enterprises to build, launch, and scale secure digital financial experiences through enterprise-grade payment and banking technology solutions.", primary: SALES, secondary: { t: "Explore Solutions", href: "index.html#solutions" }, visual: "network" },
  intro: { title: "Company Overview", text: "Enhency was built to simplify modern financial operations through scalable infrastructure designed for payments, banking, merchant ecosystems, onboarding workflows, fraud prevention, and digital financial experiences. We help financial institutions and businesses accelerate digital transformation through API-first infrastructure, operationally reliable systems, and centralized financial technology solutions." },
  overview: { title: "Mission & Vision", text: "Our mission is to simplify and modernize financial infrastructure through scalable, secure, and API-driven technology solutions for banks, fintechs, payment ecosystems, and enterprises — powering the next generation of digital financial infrastructure.", cards: [
    { t: "Accelerate Innovation", d: "Help organizations accelerate digital financial innovation across ecosystems." },
    { t: "Simplify Complexity", d: "Simplify operational complexity through centralized infrastructure systems." },
    { t: "Improve Reliability", d: "Improve payment reliability and strengthen transaction security." },
    { t: "Scale Efficiently", d: "Scale financial ecosystems efficiently through resilient architecture." },
  ]},
  sections: [
    { title: "Infrastructure Philosophy", text: "Financial infrastructure demands operational reliability, transaction integrity, scalability, and ecosystem interoperability. Enhency is designed with an infrastructure-first philosophy focused on enabling resilient financial operations.", caps: [
      { t: "Reliability First", d: "Support uninterrupted financial operations through resilient architecture." },
      { t: "API-Driven Systems", d: "Enable scalable integrations and ecosystem interoperability through modern APIs." },
      { t: "Operational Visibility", d: "Provide centralized transaction monitoring and workflow management." },
      { t: "Scalable Architecture", d: "Support growing transaction volumes through enterprise-grade infrastructure." },
    ]},
    { title: "Technology Focus", text: "Enhency focuses on building modern financial infrastructure powered by scalable architecture, operational intelligence, secure transaction systems, and API-first technology frameworks.", caps: [
      { t: "Real-Time Payment Infrastructure", d: "Support high-volume ecosystems across UPI, IMPS, merchant payments, and banking." },
      { t: "Scalable API Infrastructure", d: "Enable seamless integrations through APIs, SDKs, and webhooks." },
      { t: "Transaction Orchestration", d: "Manage routing, reconciliation, and operational visibility centrally." },
      { t: "Fraud & Risk Infrastructure", d: "Support transaction security through centralized fraud intelligence." },
    ]},
  ],
  benefits: { title: "Core Values", cards: [
    { t: "Reliability", d: "Financial infrastructure should deliver operational continuity and transaction trust." },
    { t: "Security", d: "We prioritize secure transaction systems and operational protection across workflows." },
    { t: "Scalability", d: "We build infrastructure designed to support growing financial ecosystems." },
    { t: "Innovation", d: "We focus on simplifying complex financial operations through modern technology." },
    { t: "Ecosystem Enablement", d: "We enable banks, fintechs, merchants, and enterprises to build scalable experiences." },
  ]},
  useCases: { title: "Who We Serve", cards: [
    { t: "Banks", d: "Modernize digital banking and payment infrastructure through scalable systems." },
    { t: "Fintech Platforms", d: "Accelerate digital financial innovation through API-first infrastructure." },
    { t: "Payment Aggregators", d: "Simplify merchant operations and payment workflows centrally." },
    { t: "Enterprises", d: "Support secure and scalable digital payment operations across ecosystems." },
  ]},
  cta: { headline: "Powering the Future of Digital Financial Infrastructure", text: "Enhency enables modern financial businesses to launch secure payment ecosystems, merchant operations, digital banking experiences, and scalable financial workflows through enterprise-grade infrastructure.", primary: { t: "Connect With Us", href: "contact.html" }, secondary: { t: "Explore Products", href: "index.html#products" } },
};

/* ---------------- RESOURCES ---------------- */

PAGES["docs"] = {
  crumb: [{ t: "Resources", href: "#" }, { t: "Docs" }],
  hero: { headline: "Developer Documentation for Modern Financial Infrastructure", text: "Access APIs, SDKs, integration workflows, webhooks, sandbox environments, and technical resources designed to simplify payment integrations and financial infrastructure operations.", primary: { t: "Explore APIs", href: "#" }, secondary: { t: "Access Sandbox", href: "#" }, visual: "code" },
  intro: { title: "Built for Developers & Financial Ecosystems", text: "Enhency provides developer-focused documentation and integration infrastructure to help banks, fintechs, TPAPs, payment aggregators, merchants, and enterprises accelerate implementation and operational onboarding — designed for secure integrations, scalable payment workflows, and faster deployment cycles." },
  overview: { title: "Unified Developer Infrastructure", text: "Access centralized technical resources covering APIs, SDKs, onboarding workflows, webhooks, operational integrations, and sandbox environments through structured documentation systems.", cards: [
    { t: "API-First Integration", d: "Integrate payment infrastructure and financial workflows through scalable APIs." },
    { t: "SDK & Workflow Support", d: "Accelerate implementation through SDK infrastructure and structured workflows." },
    { t: "Real-Time Visibility", d: "Monitor transaction workflows through webhook systems and centralized infrastructure." },
    { t: "Secure Sandbox", d: "Test integrations and operational workflows through isolated environments." },
  ]},
  sections: [
    { title: "API Documentation", text: "Access structured API documentation designed for scalable payment integrations, onboarding systems, transaction workflows, and operational infrastructure management.", caps: [
      { t: "REST API Infrastructure", d: "Integrate payment workflows through API-driven systems." },
      { t: "Endpoint Documentation", d: "Access references, request structures, and response formats." },
      { t: "Authentication Workflows", d: "Implement secure API authentication and access management." },
      { t: "UPI · IMPS · NACH · Verification · Merchant · TPV APIs", d: "Structured documentation across all core products and webhook events." },
    ]},
    { title: "SDK Documentation & Integration Guides", text: "Accelerate implementation through SDK infrastructure and step-by-step integration workflows designed to simplify onboarding and payment infrastructure implementation.", caps: [
      { t: "Mobile SDK Support", d: "Enable secure payment workflows across mobile ecosystems (Android, TPAP, Payment, Merchant SDKs)." },
      { t: "Integration Workflows", d: "Follow structured workflows for payment and infrastructure integrations." },
      { t: "Operational Setup Guidance", d: "Simplify onboarding and implementation through centralized integration systems." },
      { t: "Transaction Flow Docs", d: "Understand payment workflows, states, and infrastructure handling." },
    ]},
    { title: "Webhooks & Sandbox Access", text: "Enable real-time operational communication through webhook systems, and test integrations through secure sandbox environments before going live.", caps: [
      { t: "Real-Time Event Notifications", d: "Receive transaction updates and operational events instantly." },
      { t: "Lifecycle Events", d: "Track transaction success, failure, settlement, reconciliation, and refund events." },
      { t: "Secure Testing Environment", d: "Validate integrations without impacting production infrastructure." },
      { t: "Mock Transaction Flows", d: "Simulate transaction flows, test credentials, and validate integrations." },
    ]},
  ],
  benefits: { title: "Developer-First Financial Infrastructure", cards: [
    { t: "Faster Integration Cycles", d: "Accelerate deployment through structured documentation and workflows." },
    { t: "Centralized Resources", d: "Access APIs, SDKs, guides, and webhooks through unified documentation." },
    { t: "Scalable Architecture", d: "Support growing transaction ecosystems through resilient developer infrastructure." },
    { t: "Operational Visibility", d: "Monitor integrations and transaction workflows through centralized systems." },
  ]},
  developer: { title: "Technical Support & Integration Assistance", text: "Our technical teams support developers, fintechs, banks, and enterprises with onboarding workflows, operational integrations, sandbox setup, and infrastructure implementation guidance.", tags: ["API Support", "SDK Guidance", "Integration Assistance", "Sandbox Support", "Webhook Testing", "Integration Validation"] },
  cta: { headline: "Build Faster with Enhency Developer Infrastructure", text: "Access APIs, SDKs, integration workflows, webhook systems, and sandbox environments designed for scalable payment and financial infrastructure integrations.", primary: { t: "Explore Documentation", href: "#" }, secondary: { t: "Access Sandbox", href: "#" } },
};

PAGES["blog"] = {
  crumb: [{ t: "Resources", href: "#" }, { t: "Blog" }],
  hero: { headline: "Insights on Payments, Banking Infrastructure & Financial Technology", text: "Explore industry insights, infrastructure trends, payment ecosystems, operational strategies, engineering perspectives, and product updates shaping modern financial technology.", primary: { t: "Explore Articles", href: "#" }, secondary: DOCS, visual: "dashboard" },
  intro: { title: "Knowledge Hub for Modern Financial Ecosystems", text: "The Enhency Blog shares insights across payments, banking infrastructure, merchant ecosystems, fraud prevention, digital financial operations, engineering systems, and infrastructure-led innovation — created for banks, fintechs, payment aggregators, TPAPs, developers, and operational leaders." },
  overview: { title: "Explore by Category", text: "Discover insights, operational strategies, technical workflows, and ecosystem updates across financial infrastructure and digital payment operations.", cards: [
    { t: "Payments", d: "Payment ecosystems, transaction infrastructure, orchestration strategies, and operations." },
    { t: "UPI", d: "UPI infrastructure, TPAP ecosystems, acquiring & issuer workflows, and scalability." },
    { t: "Banking Infrastructure", d: "Digital banking systems, onboarding infrastructure, and scalable banking technology." },
    { t: "Merchant Payments", d: "Onboarding, QR infrastructure, reconciliation, and settlement operations." },
    { t: "Fraud & Risk", d: "Fraud prevention, transaction monitoring, and operational risk management." },
    { t: "Engineering", d: "Architecture decisions, scalability strategies, and infrastructure systems." },
  ]},
  sections: [
    { title: "Featured Insights", text: "Hand-picked perspectives on building and scaling modern financial infrastructure.", caps: [
      { t: "Designing Scalable UPI Infrastructure", d: "Architecting UPI systems for modern payment ecosystems." },
      { t: "Payment Gateway Orchestration", d: "How orchestration improves transaction reliability." },
      { t: "Resilient Merchant Payment Operations", d: "Building merchant payment operations that scale." },
      { t: "Real-Time Financial Systems", d: "Infrastructure considerations for real-time payments." },
      { t: "Simplifying Digital Onboarding", d: "Onboarding through verification infrastructure." },
      { t: "Transaction Monitoring & Fraud Detection", d: "Fraud detection in modern payment ecosystems." },
    ]},
  ],
  benefits: { title: "Our Content Philosophy", cards: [
    { t: "Infrastructure-Led Thinking", d: "Content focused on operational scalability and ecosystem understanding." },
    { t: "Technical Clarity", d: "Clear explanations of payment system reliability and architecture." },
    { t: "Ecosystem Understanding", d: "Helping teams better understand modern financial ecosystems." },
    { t: "Financial Innovation", d: "Perspectives on financial technology innovation and infrastructure operations." },
  ]},
  cta: { headline: "Explore the Future of Financial Infrastructure", text: "Discover insights, engineering strategies, infrastructure trends, and operational best practices shaping modern digital financial ecosystems.", primary: { t: "Explore Articles", href: "#" }, secondary: { t: "Explore Solutions", href: "index.html#solutions" } },
};

PAGES["careers"] = {
  crumb: [{ t: "Resources", href: "#" }, { t: "Careers" }],
  hero: { headline: "Build the Future of Financial Infrastructure with Enhency", text: "Join a team focused on building scalable payment systems, digital banking infrastructure, merchant ecosystems, onboarding platforms, fraud prevention systems, and modern financial technology solutions.", primary: { t: "Explore Open Roles", href: "#" }, secondary: { t: "Connect With Us", href: "contact.html" }, visual: "dashboard" },
  intro: { title: "Careers at Enhency", text: "Enhency is building modern infrastructure for digital financial ecosystems across payments, banking technology, merchant operations, onboarding systems, fraud prevention infrastructure, and scalable financial platforms. We look for people passionate about solving complex financial problems and building scalable systems for real-world payment ecosystems." },
  overview: { title: "Open Positions", text: "Explore opportunities across product, engineering, operations, infrastructure, design, merchant ecosystems, and financial technology domains.", cards: [
    { t: "Product & Strategy", d: "Product Managers, Business Analysts, Strategy Associates, Ecosystem Managers." },
    { t: "Engineering & Infrastructure", d: "Backend, API, Platform, DevOps, and Infrastructure Engineers." },
    { t: "Payments & Operations", d: "Payment Operations, Merchant Operations, Settlement & Risk teams." },
    { t: "Design & Experience", d: "Product Designers, UX Designers, and Design Researchers." },
  ]},
  sections: [
    { title: "Our Culture", text: "We believe strong financial infrastructure is built through collaboration, operational excellence, continuous learning, and technology-driven thinking.", caps: [
      { t: "Infrastructure-First Thinking", d: "We solve ecosystem-level financial challenges through scalable systems." },
      { t: "Continuous Learning", d: "We encourage learning across payments, banking, and infrastructure systems." },
      { t: "Collaboration & Ownership", d: "We work closely across teams to build reliable financial products." },
      { t: "Operational Excellence", d: "We prioritize reliability, scalability, security, and ecosystem trust." },
    ]},
    { title: "Hiring Process", text: "Our hiring process evaluates problem-solving ability, operational thinking, collaboration, technical expertise, and alignment with modern financial infrastructure systems.", caps: [
      { t: "Application Review", d: "Initial review of experience, technical background, and ecosystem alignment." },
      { t: "Introductory Discussion", d: "Conversation on experience and problem-solving approach." },
      { t: "Technical / Functional Evaluation", d: "Role-specific discussions on systems thinking and capabilities." },
      { t: "Team Interaction & Final Discussion", d: "Collaborative discussions and alignment on responsibilities and growth." },
    ]},
  ],
  benefits: { title: "Why Join Enhency", cards: [
    { t: "Work on Real Financial Infrastructure", d: "Build systems that support real-world payment ecosystems and operations." },
    { t: "Solve Complex Challenges", d: "Work across payments, banking infrastructure, and transaction systems." },
    { t: "Build at Scale", d: "Contribute to infrastructure designed for high-volume financial operations." },
    { t: "Grow with the Ecosystem", d: "Be part of the evolving digital payments and banking landscape." },
  ]},
  cta: { headline: "Join Us in Building Modern Financial Infrastructure", text: "Work with teams building scalable payment systems, banking technology platforms, merchant ecosystems, onboarding infrastructure, and digital financial experiences.", primary: { t: "Explore Open Roles", href: "#" }, secondary: { t: "Connect With Us", href: "contact.html" } },
};

PAGES["case-studies"] = {
  crumb: [{ t: "Resources", href: "#" }, { t: "Case Studies" }],
  hero: { headline: "Real-World Financial Infrastructure Use Cases & Operational Success Stories", text: "Explore how modern financial ecosystems leverage Enhency infrastructure to simplify payment operations, merchant management, onboarding workflows, fraud prevention, banking experiences, and scalable transaction systems.", primary: { t: "Explore Case Studies", href: "#" }, secondary: SALES, visual: "dashboard" },
  intro: { title: "Built for Modern Financial Ecosystems", text: "Enhency infrastructure is designed to help banks, fintechs, payment aggregators, TPAPs, merchants, and enterprises solve operational complexity through scalable financial technology systems — highlighting payment transformation, operational optimization, merchant scalability, onboarding simplification, and infrastructure modernization." },
  overview: { title: "Explore by Category", text: "Discover infrastructure-led use cases and operational transformation stories across modern financial ecosystems.", cards: [
    { t: "Banking Solutions", d: "Modernizing payment systems, onboarding workflows, and digital banking infrastructure." },
    { t: "Merchant Payments", d: "Simplifying onboarding, acceptance, settlement, and reconciliation." },
    { t: "UPI Infrastructure", d: "Acquiring, issuing, and TPAP ecosystem deployments at scale." },
    { t: "Verification Solutions", d: "eKYC, CKYC, Video KYC, and account validation use cases." },
    { t: "Fraud Prevention", d: "Transaction monitoring, risk visibility, and security infrastructure." },
    { t: "Enterprise Integrations", d: "API-driven payment integration and financial workflow automation." },
  ]},
  sections: [
    { title: "Operational Outcomes Enabled Through Enhency", text: "Each engagement focuses on operational scalability, infrastructure reliability, transaction visibility, ecosystem interoperability, payment continuity, and centralized operational management.", caps: [
      { t: "Faster Operational Workflows", d: "Simplify onboarding, payment handling, and transaction operations centrally." },
      { t: "Improved Transaction Visibility", d: "Enable real-time operational monitoring and infrastructure transparency." },
      { t: "Scalable Financial Ecosystems", d: "Support growing transaction volumes through resilient architecture." },
      { t: "Centralized Management", d: "Unify financial workflows, reconciliation, onboarding, and monitoring." },
    ]},
  ],
  benefits: { title: "How We Approach Financial Infrastructure", cards: [
    { t: "Operational Scalability", d: "Designing systems that scale with growing financial operations." },
    { t: "Infrastructure Reliability", d: "Building resilient infrastructure for payment continuity." },
    { t: "Transaction Visibility", d: "Enabling real-time visibility across financial workflows." },
    { t: "Ecosystem Interoperability", d: "Working closely with ecosystem participants to simplify complexity." },
  ]},
  cta: { headline: "Build Scalable Financial Ecosystems with Enhency", text: "Explore how modern businesses use Enhency infrastructure to simplify payment operations, onboarding workflows, merchant ecosystems, fraud prevention, and digital financial experiences.", primary: SALES, secondary: { t: "Explore Solutions", href: "index.html#solutions" } },
};
