---
target: portfolio homepage
total_score: 24
p0_count: 0
p1_count: 2
timestamp: 2026-06-03T20-03-39Z
slug: src-pages-index-astro
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Project status chips help, but sticky nav has no current-section state and the CV/contact pending states give no clear completion path. |
| 2 | Match System / Real World | 3 | Spanish, recruiter-oriented copy works; terms like FURPS+ and internship/junior developer need clearer framing. |
| 3 | User Control and Freedom | 3 | Anchor nav, skip link, and footer back-to-top are solid; no trap states. |
| 4 | Consistency and Standards | 3 | Strong token/component consistency, but contact mixes real links with non-actionable pending spans. |
| 5 | Error Prevention | 1 | A primary download link points to a pending CV path and likely lets users hit a broken or unfinished action. |
| 6 | Recognition Rather Than Recall | 2 | Project evidence is mostly hidden behind case-study clicks; cards do not expose artifacts, outcomes, repos, or demos upfront. |
| 7 | Flexibility and Efficiency | 2 | Header anchors help scanning, but no direct CV/contact/social path in the header for recruiter speed. |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and restrained, but the repeated card/chip rhythm becomes generic. |
| 9 | Error Recovery | 1 | If CV/contact paths fail, there is no fallback, explanation, or alternate channel. |
| 10 | Help and Documentation | 2 | Case-study links and project summaries help, but technical terms and unfinished contact areas lack guidance. |
| **Total** | | **24/40** | **Acceptable foundation with credibility blockers** |

#### Anti-Patterns Verdict

**LLM assessment**: Moderate AI-slop risk, not a clear failure. The homepage avoids the worst tells: no gradient text, glass cards, oversized gimmick hero, boxed template shell, or purple-gradient developer portfolio pattern. The design direction is credible and aligned with PRODUCT.md and DESIGN.md. The main slop risk is structural sameness: section heading, summary, grid/card/chips repeats across the page, and decisive recruiter moments expose placeholders instead of confidence.

**Deterministic scan**: `detect.mjs --json src/pages/index.astro` returned exit status `0` and `[]`. No deterministic rule findings, no rule names, no file locations.

**Visual overlays**: No reliable user-visible overlay is available. Browser automation APIs were not exposed in this session, so no mutable injection, no `[Human]` tab, and no in-page `impeccable` console messages were available.

#### Overall Impression

The homepage has a disciplined foundation: clean Astro structure, readable typography, restrained amber accent, semantic sections, and project data sourced from the content collection. The single biggest opportunity is credibility conversion. A recruiter can understand the categories of evidence, but the page still withholds the proof and ends with visible placeholders for CV, education, email, and LinkedIn.

#### What's Working

- Strong semantic and accessibility base: skip link, `lang="es"`, semantic sections, visible focus, and reduced-motion support are already present.
- The visual system avoids major AI tells: no glassmorphism, no purple gradients, no boxed page wrapper, no oversized hero spectacle.
- The content strategy is pointed in the right direction: development, QA, requirements, data, and UX/UI are all tied to named projects.

#### Priority Issues

**[P1] Unfinished recruiter conversion path**

**Why it matters**: The target audience needs to download a CV, verify education, and contact Edgar quickly. Visible `pendiente` content makes the site feel unfinished at the exact moment it should create confidence.

**Fix**: Add the real CV file, professional email, LinkedIn, and education details. If any are unavailable, remove the broken or pending action and replace it with a truthful fallback that does not look unfinished.

**Suggested command**: `$impeccable harden portfolio homepage`

**[P1] Project evidence is too abstract on the homepage**

**Why it matters**: Cards show role, status, description, and tags, but not outcomes, artifacts, screenshots, repos, demos, test reports, schemas, or concrete proof. Recruiters need evidence without having to click every case study.

**Fix**: Add 1-2 evidence bullets per project and expose available artifacts directly on each card. SauceDemo should surface QA automation proof; CoffeeRank should surface database/UI proof; CIMA should surface requirements/trazability proof.

**Suggested command**: `$impeccable clarify portfolio homepage`

**[P2] All featured projects have the same visual weight**

**Why it matters**: Equal cards make the portfolio feel like a generic grid and hide which project is the strongest hiring signal.

**Fix**: Promote the strongest project into a lead case with more space and evidence, then treat the other two as supporting cases.

**Suggested command**: `$impeccable layout portfolio homepage`

**[P2] Skill chips create scan noise**

**Why it matters**: The skill grouping is useful, but long equal-weight tag lists read like inventory. They do not tell a reviewer which skills are strongest or where they are proven.

**Fix**: Reduce or prioritize tags and connect each skill group to the projects where those skills are demonstrated.

**Suggested command**: `$impeccable distill portfolio homepage`

**[P3] Header is efficient but under-converted**

**Why it matters**: Section anchors help scanning, but there is no direct route to CV, GitHub, LinkedIn, or email from the sticky header.

**Fix**: Add one restrained high-value action once real contact/CV details are available.

**Suggested command**: `$impeccable polish portfolio homepage`

#### Persona Red Flags

**Jordan (First-Timer)**: FURPS+, trazabilidad, Selenium/TestNG, and QA terms appear with limited plain-language context. Jordan can navigate, but may not understand why CIMA or SauceDemo matters without opening the case studies.

**Sam (Accessibility-Dependent User)**: Focus states and semantics are strong. The concern is contact: email and LinkedIn are non-actionable spans, so keyboard and screen-reader users encounter important channels that cannot be used.

**Casey (Distracted Mobile User)**: The stacked mobile header and long skills/project flow require a lot of vertical scanning before reaching contact. The most important action is not available because contact and CV are pending.

**Marina (Recruiter)**: Screens many early-career portfolios quickly. Red flags: no real CV download, no professional email, no LinkedIn, education details pending, and no direct artifact links on project cards. She cannot complete the basic evaluation loop.

#### Minor Observations

- The portrait is a good humanizing move and uses Astro image optimization.
- The dark resume band is visually effective, but it currently amplifies the unfinished CV state.
- External links open in a new tab but do not visibly communicate that behavior.
- The footer line about Astro reinforces engineering identity without overclaiming.

#### Questions to Consider

- If a recruiter reads only the hero, first project card, and contact section, what concrete evidence proves Edgar is ready?
- Which one project should become the homepage's lead proof instead of one of three equal cards?
- Should a CV/contact section exist before the actual CV, email, and LinkedIn are ready?
- What artifact would make each project undeniable: repo, test report, schema, screenshot, demo, or case-study result?
