/* ============================================================================
   CCSP  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the target objects the textbook-dense domain reading modules populate
   (CCSP.reading[1..6], appended from the lazy-loaded content modules).

   This file loads first and establishes the global CCSP namespace consumed
   by quizEngine.js, flashEngine.js, and app.js.

   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.CCSP = window.CCSP || {};

/* SINGLE SOURCE OF TRUTH for every exam figure. The dashboard cards, mock-exam
   engine, scoring, analytics, readiness projection, and history readouts all
   READ from this object — no exam figure is duplicated as a literal elsewhere.

   Note on `maxQuestions`: the live CCSP is a Computerized Adaptive Test (CAT)
   of 100–150 items, so there is no fixed length. `itemsLabel`/`itemsMin`/
   `itemsMax` describe the REAL exam; `maxQuestions` is the length of THIS
   platform's fixed-form practice mock (a transparent approximation of the
   adaptive exam) and is the only figure the mock engine reads. */
CCSP.exam = {
  code: "CCSP",
  name: "CCSP",
  fullName: "Certified Cloud Security Professional",
  vendor: "ISC2",
  format: "CAT",                 // Computerized Adaptive Testing
  minutes: 180,                  // 3 hours
  itemsMin: 100, itemsMax: 150,
  itemsLabel: "100–150",
  maxQuestions: 125,             // fixed-form practice-mock length (engine reads this)
  scaleLow: 0, scaleHigh: 1000, passing: 700,
  domains: 6,
  launched: "2015",
  body: "ISC2"
};

/* Per-domain metadata. `objectives` mirror the official ISC2 CCSP Exam Outline
   (effective October 1, 2025). `weight` is the official average domain weight;
   `sectionCount` is the number of dense reading sections this platform authors
   for the domain. */
CCSP.domainMeta = [
  { id: 1, weight: 17, color: "d1", icon: "☁", title: "Cloud Concepts, Architecture & Design", sectionCount: 12,
    short: "Cloud building blocks: the shared responsibility model, reference architecture, service and deployment models, and core cloud security concepts and design principles.",
    objectives: [
      { id: "1.1", t: "Understand cloud computing concepts" },
      { id: "1.2", t: "Describe cloud reference architecture" },
      { id: "1.3", t: "Understand security concepts relevant to cloud computing" },
      { id: "1.4", t: "Understand design principles of secure cloud computing" },
      { id: "1.5", t: "Evaluate cloud service providers" }
    ] },
  { id: 2, weight: 20, color: "d2", icon: "🗄", title: "Cloud Data Security", sectionCount: 14,
    short: "Securing data in the cloud: the data lifecycle, storage architectures, encryption and key management, tokenization, DLP, classification, and rights management.",
    objectives: [
      { id: "2.1", t: "Describe cloud data concepts" },
      { id: "2.2", t: "Design and implement cloud data storage architectures" },
      { id: "2.3", t: "Design and apply data security technologies and strategies" },
      { id: "2.4", t: "Implement data discovery" },
      { id: "2.5", t: "Plan and implement data classification" },
      { id: "2.6", t: "Design and implement Information Rights Management (IRM)" },
      { id: "2.7", t: "Plan and implement data retention, deletion, and archiving policies" },
      { id: "2.8", t: "Design and implement auditability, traceability, and accountability of data events" }
    ] },
  { id: 3, weight: 17, color: "d3", icon: "🏗", title: "Cloud Platform & Infrastructure Security", sectionCount: 11,
    short: "Securing cloud compute, network, and storage: virtualization, secure data-center design, cloud risk, and business continuity and disaster recovery.",
    objectives: [
      { id: "3.1", t: "Comprehend cloud infrastructure and platform components" },
      { id: "3.2", t: "Design a secure data center" },
      { id: "3.3", t: "Analyze risks associated with cloud infrastructure and platforms" },
      { id: "3.4", t: "Plan and implementation of security controls" },
      { id: "3.5", t: "Plan business continuity (BC) and disaster recovery (DR)" }
    ] },
  { id: 4, weight: 17, color: "d4", icon: "🧩", title: "Cloud Application Security", sectionCount: 12,
    short: "Securing cloud applications: the secure SDLC, application testing (SAST/DAST), supply-chain risk, identity for apps, and cloud application architecture.",
    objectives: [
      { id: "4.1", t: "Advocate training and awareness for application security" },
      { id: "4.2", t: "Describe the Secure Software Development Life Cycle (SDLC) process" },
      { id: "4.3", t: "Apply the Secure Software Development Life Cycle (SDLC)" },
      { id: "4.4", t: "Apply cloud software assurance and validation" },
      { id: "4.5", t: "Use verified secure software" },
      { id: "4.6", t: "Comprehend the specifics of cloud application architecture" },
      { id: "4.7", t: "Design appropriate Identity and Access Management (IAM) solutions" }
    ] },
  { id: 5, weight: 16, color: "d5", icon: "🛡", title: "Cloud Security Operations", sectionCount: 13,
    short: "Running cloud operations securely: physical and logical infrastructure, monitoring, change and configuration management, incident handling, and digital forensics.",
    objectives: [
      { id: "5.1", t: "Build and implement physical and logical infrastructure for cloud environment" },
      { id: "5.2", t: "Operate and maintain physical and logical infrastructure for cloud environment" },
      { id: "5.3", t: "Implement operational controls and standards (e.g., ITIL, ISO/IEC 20000-1)" },
      { id: "5.4", t: "Support digital forensics" },
      { id: "5.5", t: "Manage communication with relevant parties" },
      { id: "5.6", t: "Manage security operations" }
    ] },
  { id: 6, weight: 13, color: "d6", icon: "⚖", title: "Legal, Risk & Compliance", sectionCount: 10,
    short: "Cloud legal and compliance: laws and regulations, privacy, audit processes, cloud risk management, and vendor and contract management.",
    objectives: [
      { id: "6.1", t: "Articulate legal requirements and unique risks within the cloud environment" },
      { id: "6.2", t: "Understand privacy issues" },
      { id: "6.3", t: "Understand audit process, methodologies, and required adaptations for a cloud environment" },
      { id: "6.4", t: "Understand implications of cloud to enterprise risk management" },
      { id: "6.5", t: "Understand outsourcing and cloud contract design" }
    ] }
];

/* The five PBQ formats. `domainColor` just drives the badge tint. */
CCSP.pbqFormats = [
  { id: 1, icon: "☁", domainColor: 1, obj: "1.2 / 1.4", badge: "ARCHITECTURE", title: "Service Models & Shared Responsibility",
    desc: "Read a deployment scenario, then work it field by field — pick the correct cloud service category, name the responsible party across the shared-responsibility line, choose the deployment model, and select the design principle the situation demands.",
    long: "Each scenario gives you a workload and a set of requirements. Work the architecture: classify the <b>service category</b> (SaaS, PaaS, IaaS), assign responsibility across the <b>shared-responsibility model</b> (who secures the hypervisor, the OS, the app, the data), choose the correct <b>deployment model</b> (public, private, hybrid, community, multi-cloud), and select the <b>secure-design principle</b> (secure data lifecycle, BC/DR, portability/interoperability, avoiding vendor lock-in) that fits." },
  { id: 2, icon: "🗄", domainColor: 2, obj: "2.1 / 2.3 / 2.5", badge: "DATA SECURITY", title: "Data Lifecycle, Classification & Protection",
    desc: "Given a data element and a context, sequence the cloud data lifecycle phase, choose the right protection technology, set the classification, and apply the correct retention or destruction action.",
    long: "You are the cloud data-security lead. For each information asset, identify the <b>cloud data lifecycle phase</b> (create, store, use, share, archive, destroy), select the correct <b>protection technique</b> (encryption, tokenization, masking, anonymization, hashing, DLP), assign the <b>classification</b> and mapping, and choose the correct <b>lifecycle action</b> — retention period, crypto-shredding/overwrite destruction, or legal hold." },
  { id: 3, icon: "🏗", domainColor: 3, obj: "3.3 / 3.4 / 3.5", badge: "INFRA & BC/DR", title: "Infrastructure Risk, Controls & Recovery",
    desc: "Analyze a cloud-infrastructure scenario: identify the risk, select the control that addresses it across the responsibility line, and choose the correct business-continuity or disaster-recovery metric and strategy.",
    long: "Engineer the resilient platform. For each situation, identify the <b>cloud vulnerability, threat, or attack</b>, choose the correct <b>security control</b> (physical/environmental, system/storage/comms protection, IAM, audit mechanism), and select the right <b>BC/DR objective</b> — Recovery Time Objective (RTO), Recovery Point Objective (RPO), recovery service level — and the plan strategy (backup, pilot light, warm standby, multi-region) the requirement demands." },
  { id: 4, icon: "🧩", domainColor: 4, obj: "4.3 / 4.6 / 4.7", badge: "APP SECURITY", title: "Secure SDLC, App Architecture & IAM",
    desc: "Choose the threat-modeling approach, select the supplemental application security control, and configure the identity and access management technology the cloud application requires.",
    long: "A workspace for cloud application security. For each requirement, select the correct <b>threat-modeling method</b> (STRIDE, DREAD, PASTA, ATASM), choose the right <b>supplemental control</b> (WAF, Database Activity Monitoring, XML firewall, API gateway, sandboxing), and configure the correct <b>IAM technology</b> (federated identity, IdP, SAML/OIDC/OAuth SSO, MFA, CASB, secrets management) for the scenario." },
  { id: 5, icon: "⚖", domainColor: 6, obj: "6.2 / 6.3 / 6.4", badge: "LEGAL & RISK", title: "Privacy, Audit & Enterprise Risk",
    desc: "Map the scenario to the correct privacy regime, choose the right audit report or scope, classify the data-protection role, and select the enterprise risk-treatment decision the situation demands.",
    long: "Run the governance decision. Identify the applicable <b>privacy regime or standard</b> (GDPR, HIPAA, ISO/IEC 27018, GAPP, PIA), select the correct <b>audit artifact</b> (SOC 1 / SOC 2 Type I vs. II, SSAE, ISAE, gap analysis, scope statement), assign the <b>data-protection role</b> (owner/controller vs. custodian/processor), and choose the correct <b>risk-treatment option</b> (avoid, mitigate, transfer, share, accept) and the contract vehicle (SLA, MSA, SOW) that governs it." }
];

/* Curated free study resources. */
CCSP.resources = [
  { icon: "📄", title: "Official ISC2 CCSP Certification Exam Outline", host: "isc2.org",
    url: "https://www.isc2.org/certifications/ccsp/ccsp-certification-exam-outline",
    desc: "The authoritative blueprint — every domain, objective, and sub-topic ISC2 can test, with the official domain weightings. Download the outline PDF and use it as your master checklist." },
  { icon: "📘", title: "(ISC)² CCSP Official Study Guide (OSG) & Official Practice Tests", host: "isc2.org",
    url: "https://www.isc2.org/certifications/ccsp",
    desc: "The Sybex Official Study Guide (Malisow) and its companion practice-test book are the canonical text pair, mapped chapter-by-chapter to the six domains." },
  { icon: "☁️", title: "CSA Security Guidance & Cloud Controls Matrix (CCM)", host: "cloudsecurityalliance.org",
    url: "https://cloudsecurityalliance.org/research/guidance/",
    desc: "The Cloud Security Alliance's Security Guidance v4, the Cloud Controls Matrix (CCM), and the CAIQ underpin much of the CCSP's shared-responsibility, controls, and assurance vocabulary. Free with registration." },
  { icon: "📚", title: "NIST SP 800-145, 800-146 & 800-210", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/publications/sp",
    desc: "When a definition must be exact, go to the source. NIST SP 800-145 defines the essential characteristics, service models, and deployment models; 800-146 covers cloud synopsis and recommendations; and 800-210 addresses access control for cloud systems." },
  { icon: "🌐", title: "ISO/IEC 27017 & 27018", host: "iso.org",
    url: "https://www.iso.org/",
    desc: "ISO/IEC 27017 provides cloud-specific security controls and 27018 governs the protection of PII in public clouds. Both are named criteria in the CCSP outline for evaluating providers and protecting privacy." },
  { icon: "👥", title: "r/ccsp — Community Wiki, Study Plans & “I Passed” Threads", host: "reddit.com/r/ccsp",
    url: "https://www.reddit.com/r/ccsp/",
    desc: "Crowd-sourced study plans, exam-experience intel, and “how the adaptive exam feels” posts. Read recent pass write-ups for where candidates get stuck and how the CCSP mindset differs from CISSP." }
];

/* ---- Reader: Exam Mechanics card ---- */
CCSP.examMechanics = [
  { heading: "Format: Computerized Adaptive Testing (CAT)", body:
    "<p>The <strong>ISC2 CCSP</strong> exam is delivered as a <strong>Computerized Adaptive Test (CAT)</strong>. Rather than a fixed form, the engine chooses each next question based on how you answered the previous ones: answer correctly and it serves a harder item; miss one and it eases off, continually narrowing its estimate of your ability. As a result the exam length is <strong>variable — between 100 and 150 items</strong> — completed within a <strong>3-hour</strong> appointment. A portion of the items are unscored pretest questions ISC2 is trialing for future forms, and you cannot tell them from scored items, so treat every question as if it counts.</p>" +
    "<p>Because it is adaptive, <strong>you cannot skip a question, flag it, or go back</strong>. Once you confirm an answer it is final and the next item is chosen from it. This is the single biggest mental adjustment from CompTIA-style linear exams: there is no review pass, no flag-and-return. You must commit to your best answer and move on.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>The CAT can end at <strong>any point from item 100 onward</strong> the moment the engine is confident you are above (or below) the passing standard. Do not read anything into the exam ending at 100 or running to 150 — people pass and fail at both extremes. Keep the same focus on question 100 as on question 1.</div>" },
  { heading: "Scoring: the 700 / 1000 standard", body:
    "<p>CCSP is scored on a scaled range of <strong>0 to 1000</strong>, and the passing standard is <strong>700</strong>. Scaled scoring is not a percentage of questions correct: ISC2 weights items by difficulty and equates across the adaptive path so that no candidate is advantaged or disadvantaged by the particular items they draw. You will not see a numeric score if you pass — a pass simply reports “Pass.” A fail report lists your weakest domains, ranked, to guide re-study.</p>" +
    "<p>Because the exam is pass/fail and adaptive, there is <strong>no target percentage</strong> to aim for. The engine drives you toward roughly a 50% success rate on the items it serves — that is by design and does <em>not</em> mean you are failing. Confidence should come from your <em>preparation</em> and practice-test trends, not from a running sense of how many you are getting right during the real exam.</p>" +
    "<blockquote>This platform’s mock exam reports a scaled score using a transparent linear approximation of the 0–1000 band against the 700 line. Use it as a <em>relative</em> readiness signal — “am I consistently clearing 700 on full-length practice?” — not as a literal prediction of your official adaptive result.</blockquote>" },
  { heading: "Question styles and the CCSP mindset", body:
    "<p>CCSP questions are famously <strong>“best answer”</strong> items. Frequently two, three, or all four options are technically correct — your job is to pick the <em>best</em> one for the scenario, from the perspective of a <strong>cloud security professional who advises the business, not a hands-on administrator clicking through one provider's console</strong>. When two answers both “work,” the CCSP-correct choice is usually the one that is vendor-neutral, addresses the shared-responsibility split correctly, protects the data across its lifecycle, or follows the correct governance sequence.</p>" +
    "<ul><li><strong>Think architecture and governance, not a single vendor.</strong> The CCSP is deliberately provider-neutral: prefer the answer grounded in cloud concepts (NIST, CSA, ISO) over an AWS/Azure/GCP-specific feature name.</li><li><strong>Know the shared-responsibility line cold.</strong> Many items hinge on <em>who</em> is responsible — customer or provider — for a control under IaaS vs. PaaS vs. SaaS.</li><li><strong>Follow the correct order.</strong> Assess before you remediate; classify before you protect; and get contractual/legal footing before you act across jurisdictions.</li><li><strong>Watch the qualifiers.</strong> Words like <strong>FIRST</strong>, <strong>BEST</strong>, <strong>MOST</strong>, and <strong>LEAST</strong> are decisive — the answer changes entirely depending on which is present.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>For every scenario, ask: <em>“What would a vendor-neutral cloud security architect who owns the data and the contract do here?”</em> That framing resolves most “two answers look right” situations.</div>" },
  { heading: "Eligibility, endorsement, and the Associate path", body:
    "<p>To become a full CCSP you need <strong>five years of cumulative, paid work experience</strong> in Information Technology, of which <strong>three years must be in information security</strong> and <strong>at least one year</strong> in one or more of the six CCSP domains. Earning <strong>CSA's CCSK</strong> certificate can substitute for one year of the domain experience, and holding an active <strong>ISC2 CISSP</strong> credential satisfies the <em>entire</em> CCSP experience requirement. If you pass the exam without the experience, you become an <strong>Associate of ISC2</strong> and have up to <strong>six years</strong> to earn the required experience.</p>" +
    "<p>Passing is not the final step: you must have your experience <strong>endorsed by an existing ISC2-certified professional</strong> in good standing, who attests to your experience. ISC2 audits a percentage of applications. The exam voucher is <strong>US$599</strong> (pricing varies by region), and there may be funding available for a free voucher — connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<div class='callout scenario'><div class='lbl'>Note</div>You must also <strong>attest to the ISC2 Code of Professional Ethics</strong> and, once certified, maintain the credential with <strong>Continuing Professional Education (CPE)</strong> credits — 90 over each three-year cycle for CCSP — plus the Annual Maintenance Fee.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>The CCSP is delivered at <strong>Pearson VUE test centers</strong>. Bring two acceptable forms of ID; arrive early. You cannot bring notes, phones, or smartwatches into the test room, and you are continuously monitored. A basic on-screen calculator and an erasable note board are provided.</p>" +
    "<p>Pace yourself: with up to 150 items in 180 minutes you have a little over a minute per question on average, but you will not need a review pass (there is none). Read each scenario carefully <em>once</em>, identify the actual ask in the final sentence, apply the vendor-neutral cloud-architect mindset, commit, and move on. Do not agonize — second-guessing is costly when you cannot return.</p>" +
    "<div class='callout exam'><div class='lbl'>Mindset</div>The CCSP rewards <strong>breadth and judgment across the whole cloud stack</strong>, not deep trivia in any one provider. You are being certified as a cloud security <em>architect and advisor</em> — answer every question from that altitude.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
CCSP.careerGuidance = [
  { heading: "Where CCSP sits on the ladder", body:
    "<p><strong>CCSP is the gold-standard, vendor-neutral certification for experienced cloud security professionals.</strong> Administered by <strong>ISC2</strong> (in collaboration with the Cloud Security Alliance), it certifies that you can design, engineer, and manage the security of cloud environments — architecture and design, data security, platform and infrastructure security, application security, operations, and legal/risk/compliance. It is not an entry-level credential; it sits at the <em>senior/specialist</em> tier, above foundational certs (Security+, CCSK) and alongside advanced credentials like CISSP.</p>" +
    "<p>For hiring managers, CCSP on a résumé is shorthand for “this person can own cloud security decisions across providers and speak the language of both architecture and risk.” It is one of the most frequently <em>required</em> certifications in senior cloud-security postings, and it is formally approved under the U.S. DoD <strong>8140/8570</strong> framework for several IAT/IAM Level II and III roles.</p>" },
  { heading: "Why a vendor-neutral cloud credential matters", body:
    "<p>Most senior cloud-security hiring tests two things: can you reason about security across <em>any</em> cloud — not just the one your current employer uses — and can you translate architecture into decisions the business will fund and auditors will accept. Provider-specific skills (an AWS or Azure certification) age with each console redesign; the <em>judgment</em> — where the shared-responsibility line falls, how to protect data through its lifecycle, how to structure a cloud contract and audit — is durable and transferable. CCSP certifies that layer explicitly, which is why it travels across clouds, industries, and toolchains.</p>" +
    "<p>The exam's deliberate vendor-neutral framing is the point: organizations running multi-cloud and hybrid estates do not want a specialist who only knows one provider's buttons. They want someone who designs to concepts and standards (NIST, CSA, ISO) and can defend a decision regardless of which cloud it lands on.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>CCSP names the exact skill set senior cloud roles are hiring for: <strong>cloud security architecture and risk judgment</strong> that does not expire when the company adds a second or third cloud provider.</div>" },
  { heading: "Roles CCSP opens", body:
    "<p>CCSP aligns with a cluster of mid-to-senior cloud roles. Combined with experience it credibly qualifies you for:</p>" +
    "<ul>" +
    "<li><strong>Cloud Security Architect</strong> — designing secure cloud architectures across service and deployment models. The whole exam maps to this job.</li>" +
    "<li><strong>Cloud Security Engineer</strong> — implementing and operating controls, IAM, and data protection in the cloud (Domains 2, 3, 4, 5).</li>" +
    "<li><strong>Cloud Security Consultant / Advisor</strong> — assessing risk, evaluating providers, and advising on governance across Domains 1 and 6.</li>" +
    "<li><strong>Cloud GRC / Compliance Lead</strong> — legal, risk, privacy, audit, and contract work rooted in Domain 6.</li>" +
    "<li><strong>Security Operations / DevSecOps Lead (Cloud)</strong> — operations, monitoring, and secure delivery pipelines from Domains 4 and 5.</li>" +
    "</ul>" },
  { heading: "Building the path around CCSP", body:
    "<p>CCSP pairs naturally with a broader security career. A common trajectory: <em>CISSP (breadth) → CCSP (cloud depth) → cloud leadership</em>, or the reverse for practitioners who start in cloud. Because a current CISSP waives the entire CCSP experience requirement, many senior professionals hold both — CISSP proving enterprise-security breadth and CCSP proving cloud specialization. From here, add provider certifications (AWS/Azure/GCP security specialties) for hands-on depth, <strong>CCSK</strong> for CSA alignment, or <strong>CISM</strong> for the management track.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>CCSP is as much an <strong>architecture-and-governance mindset</strong> credential as a knowledge one. Pair it with demonstrable cloud experience — leading a migration securely, owning a cloud data-protection design, negotiating a provider's SLA — because the endorsement requirement and most senior interviews probe for real decisions you have made, not just facts you have memorized.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: CCSP.reading[N] = [ ...sections ]. */
CCSP.reading = CCSP.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: CCSP.flash[N] = [ ...cards ]. */
CCSP.flash = CCSP.flash || {};
