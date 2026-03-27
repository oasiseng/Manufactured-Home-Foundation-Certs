# Foundation Certification Operations Repo

This repository is the operating system for manufactured-home foundation certification work. It combines internal workflows, structured review rules, reusable templates, sanitized example cases, and a publishable public knowledge lane.

The immediate goal is consistency: faster intake, clearer remote-vs-site decisions, cleaner handoffs, and less reinvention when building final deliverables. The longer-term goal is transparency and leverage: publish the parts that help the market while keeping client-specific evidence and internal heuristics private.

## Operating principles

- Keep raw client evidence out of git.
- Standardize the review workflow before automating it.
- Treat remote review as the default only when evidence quality is high.
- Escalate conservatively when visibility, load path, or site conditions are unclear.
- Separate public education from internal decision logic.

## Repository layout

- `ops/` internal workflows, templates, schemas, and QA checklists
- `references/` source map tying internal rules to governing references and marketing/process baselines
- `examples/sanitized/` anonymized cases for training, onboarding, and future automation tests
- `public/` publishable guides and checklists
- `boxabl/` Boxabl-specific intake and review workflow
- `tools/` reserved for lightweight scripts and future automation

## Recommended operating flow

1. Receive the package and log it against the case schema.
2. Classify the job as standard manufactured home or Boxabl.
3. Compare submitted evidence to the minimum remote package.
4. Run conservative triage rules.
5. Output one of three statuses: `remote_review`, `request_more_evidence`, or `site_tech_dispatch`.
6. Assemble the final deliverable using the letter field schema and template guide.
7. Publish only sanitized materials to the public lane.

## Local source library

This workspace currently contains raw sample material at the repo root and in the `example appraisals/` and `example client pics/` folders. Those files are intentionally ignored by git so the repository can remain safe to share and version.

Use those local files as a source library when improving checklists, rules, and templates, but do not copy real names, addresses, parcel numbers, lender file numbers, or signatures into tracked content.

## Related resources

- Oasis service page: <https://oasisengineering.com/manufactured-home-foundation-letter/>
- Mortgage-compliance process article: <https://oasisengineering.com/2025/07/10/role-of-engineering-certifications-in-mortgage-compliance/>
- Manufactured-home calculator: <https://github.com/oasiseng/manufactured-home-foundation-calculator>
- Boxabl foundations guide repo: <https://github.com/oasiseng/boxabl-foundations-guide>
