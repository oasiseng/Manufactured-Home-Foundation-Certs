# Tools Lane

This lane is reserved for lightweight scripts and future automation.

## Current scripts

- `check-case-pack.ps1` runs a baseline structure check against the sanitized example cases.
- `privacy-scan.ps1` scans tracked text content for obvious privacy leaks such as email addresses, phone numbers, and any user-supplied literal patterns.

## Near-term backlog

- Triage assistant that reads a case record and suggests an outcome
- Letter assembly helper that maps case data to the template field schema

## Working rule

Do not automate around a weak manual workflow. Update the SOPs and schemas first, then add scripts that reflect the stabilized process.
