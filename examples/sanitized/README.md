# Sanitized Example Cases

These examples are synthetic training and process-validation files based on recurring patterns in the local source library. They are safe to track because they do not include real names, addresses, parcel numbers, signatures, or lender file numbers.

## Case pack

- `standard-remote-approval.case.yaml` straightforward remote review
- `missing-evidence.case.yaml` request-more-information path
- `site-tech-required.case.yaml` obvious in-person verification path
- `accessory-structure.case.yaml` remote review with accessory wording required
- `boxabl.case.yaml` Boxabl-specific workflow example

## Editing rules

- Keep all identifiers synthetic.
- Keep city and state realistic enough for workflow testing, but do not use the original source addresses.
- Record why the triage outcome was selected.
- If a new internal rule is added, update at least one example case to exercise it.
