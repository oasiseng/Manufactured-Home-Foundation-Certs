# Validation Checklist

Use this checklist before treating the repository contents as the current operating baseline.

## Schema and example validation

- Confirm each sanitized case file contains every required top-level block from `ops/schemas/case.schema.yaml`.
- Confirm every evidence item uses only `present`, `missing`, or `not_applicable`.
- Confirm every case has one triage outcome and at least one rationale note.
- Confirm Boxabl cases include product-specific evidence fields.

## Triage validation

- Test a straightforward remote case.
- Test a missing-evidence case.
- Test an obvious site-tech case.
- Test an accessory-structure case.
- Test a Boxabl case.

## Letter validation

- Cross-check `ops/schemas/letter-fields.schema.yaml` against the local sample letters whenever the template family changes.
- Confirm every conditional clause has a decision trigger.
- Confirm the guide does not assume footing excavation or invasive verification unless the scope says so.

## Privacy validation

- No real owner, borrower, lender, parcel, or address data appears in `examples/sanitized/`.
- No signatures or license numbers are copied from actual stamped letters into tracked examples.
- Public docs contain educational guidance only, not client-specific evidence or internal-only heuristics.

## Reference alignment

- Every public checklist or guide should map back to at least one internal SOP or source reference.
- If internal rules change, update `references/source-map.md` and the affected public docs together.
