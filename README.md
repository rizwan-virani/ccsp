# CCSP

**A comprehensive, open-source ISC2 CCSP study platform.**
In-depth coverage of all 6 exam domains, a 600-question bank with full per-distractor rationale, 600 Rapid Recall flashcards, 30 performance-based decision simulations, a drag-and-drop taxonomy classifier, 20 hands-on practice labs, and a full-length timed mock.

> Designed and authored by **Professor Rizwan Virani.**

---

## What this is

An academic preparation resource that tests your knowledge **dynamically** with original, randomized questions and hands-on simulators. It is a comprehensive study portal that covers every objective in the official ISC2 CCSP exam outline, and it is completely free, self-paced, and offline-capable once loaded.

## What this is not

- **Not** a source of actual or copyrighted ISC2 exam questions, "brain dumps," or leaked items. **Every question in this repository is original.**
- **Not** an official ISC2 product, and not affiliated with, endorsed by, or sponsored by ISC2.
- **Not** a guarantee of a passing score. It is a practice tool — the exam tests judgment, not memorization.

---

## Exam at a glance

| | |
| --- | --- |
| **Certification** | CCSP (Certified Cloud Security Professional) |
| **Governing body** | ISC2 |
| **Format** | Computerized Adaptive Testing (CAT) |
| **Duration** | 180 minutes (3 hours) |
| **Items** | 100–150 (adaptive) |
| **Passing score** | 700 / 1000 |
| **Domains** | 6 |

## The 6 domains (CCSP)

| # | Domain | Weight |
| --- | --- | --- |
| 1 | Cloud Concepts, Architecture & Design | 17% |
| 2 | Cloud Data Security | 20% |
| 3 | Cloud Platform & Infrastructure Security | 17% |
| 4 | Cloud Application Security | 17% |
| 5 | Cloud Security Operations | 16% |
| 6 | Legal, Risk & Compliance | 13% |

## Features

| Area | What you get |
| --- | --- |
| **Domain study modules** | 6 rigorous reading interfaces, one per exam domain, with deep technical definitions, comparison tables, exam tips, and real-world scenarios. **72 sections** mapped to the official CCSP outline, lazy-loaded per domain. |
| **Rapid Recall flashcards** | **600 cards** with a **Leitner spaced-repetition** scheduler, per-domain decks, a Master Acronym Drill, and an All Due Today review. |
| **Practice quizzes** | A bank of **600 original questions**, each graded with a full rationale that explains the correct answer **and why every individual distractor is wrong**. Domain, quick, adaptive, and missed-question modes. |
| **PBQ simulators** | **30 performance-based questions** across 5 formats, plus a drag-and-drop **Technical Taxonomy Mapping** engine (8 classification activities). |
| **Hands-on labs** | **20 interactive sandbox labs** with a full-screen console, dropdown configuration, a live command terminal, and a progress log. |
| **Mock exam** | A full-length, timed simulation weighted to the official domain percentages, with a countdown timer, flagging, and a domain-by-domain scoring dashboard. |
| **Supplemental hub** | An Industry Certification Explorer and a curated external-resources library. |
| **Theme** | A global light/dark toggle with all state saved to your browser. |

## How to use it

1. **Read the Exam Mechanics & Career Guidance cards first** to understand the adaptive format, scoring, and the vendor-neutral "cloud security architect" mindset.
2. **Deep-dive the Domain Study cards** — one rigorous reading interface per domain.
3. **Lock in terms with Rapid Recall Flashcards**, graded on a spaced-repetition scheduler.
4. **Validate with the Domain Quizzes**, drawn at random and graded with full rationale.
5. **Train practical skills in the PBQ Simulators** and the Technical Taxonomy Mapping engine.
6. **Get hands-on in the Labs** — flip a card to review objectives, then launch the sandbox console.
7. **Benchmark readiness with the full-length, timed Mock Exam.**

## Run it locally

The site is fully static — no build step. Serve the folder with any static web server:

```bash
# from the repository root:
python -m http.server 8116
# then open http://localhost:8116
```

Best experienced on a desktop or laptop in Google Chrome; the labs, terminal simulations, and drag-and-drop activities require a mouse and keyboard.

## Project structure

```
.
├── index.html                  # shell: hero, onboarding, dashboard mount, script order
├── LICENSE                     # dual license (MIT code + CC BY-NC-SA content)
├── README.md
└── assets/
    ├── css/
    │   └── styles.css          # theme + study-platform components, dark & light
    └── js/
        ├── contentData.js      # exam facts, domain metadata, readers
        ├── quizEngine.js       # assessment + PBQ engine
        ├── flashEngine.js      # spaced-repetition flashcard engine
        ├── app.js              # router, theme manager, analytics, reading UI
        └── content/            # lazy-loaded modules
            ├── domain1..6.js      # dense reading per domain
            ├── flash1..6.js       # flashcard decks
            ├── quiz1..6.js        # question bank per domain
            ├── pbqs.js            # performance-based question database
            ├── labs.js            # hands-on sandbox labs
            ├── taxonomy.js        # drag-and-drop classification
            └── certs.js           # Industry Certification Explorer catalog
```

## License

This project is **dual-licensed**:

- The **software framework and interface code** are licensed under the **MIT License**.
- The **educational curriculum content** (study text modules, question banks, flashcards, and lab scenarios) is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** (CC BY-NC-SA 4.0).

See the [LICENSE](LICENSE) file for full terms.

---

*This is a personal educational resource. All views and content are entirely my own and do not represent the views, positions, endorsements, or policies of my employer or of any other person, organization, or institution. "ISC2", "(ISC)²", and "CCSP" are trademarks or registered trademarks of International Information System Security Certification Consortium, Inc., used here only to identify the exam this resource helps you prepare for. All practice questions are original. Released for academic use.*
