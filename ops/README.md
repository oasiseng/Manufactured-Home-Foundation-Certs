# Operations Lane

The `ops/` lane is the internal working core of the repository. It is designed for repeatable production work rather than public marketing.

## Contents

- `intake/` evidence requirements and intake checklists
- `triage/` human-readable and machine-readable remote-vs-site decision rules
- `field/` site-tech procedures for in-person verification
- `templates/` reusable communication and deliverable assembly guides
- `schemas/` structured field definitions for case records and letter preparation
- `qa/` validation steps for privacy, consistency, and completeness

## Usage pattern

- Start every new job in `intake/`.
- Move to `triage/` once evidence is logged.
- Use `field/` only when the case is escalated or the lender/AHJ requires a site visit.
- Use `templates/` after the decision path is clear.
- Use `schemas/` whenever data is being structured for later automation.
