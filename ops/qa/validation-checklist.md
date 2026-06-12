# Validation Checklist

Use this checklist before treating the repository contents as the current operating baseline.

## Schema and example validation

- Parse every tracked YAML file with a YAML 1.1-compatible loader (e.g. `python3 -c "import yaml,glob; [yaml.safe_load(open(f)) for f in glob.glob('**/*.yaml', recursive=True)]"`). A file that fails to parse fails validation.
- Confirm string-valued fields that look like YAML keywords (`no`, `yes`, `on`, `off`) are quoted so they load as strings, not booleans (e.g. `addition_scope_affects_load_path: "no"`).
- Confirm each sanitized case file contains every required top-level block from `ops/schemas/case.schema.yaml`.
- Confirm every evidence item uses only `present`, `missing`, or `not_applicable`.
- Confirm every case has one triage outcome and at least one rationale note.
- Confirm Boxabl cases include product-specific evidence fields.

## Triage validation

- Confirm every field name referenced in `ops/triage/triage-rules.yaml` conditions and preferred lists exists in `ops/schemas/case.schema.yaml` (or is documented as a synthetic condition in the rules file).
- Run each sanitized example case through the decision rules top to bottom; the first matching rule's output must equal the case's recorded `dispatch.outcome`.
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

## Public asset validation

- Render every SVG in `public/diagrams/` (e.g. with cairosvg or a browser) and confirm no label is clipped at the canvas edge, no text overlaps another element, and the FHA-status language matches the markdown guides.
- Confirm `public/foundation-visual-guide.jsx` FHA-status callouts match the SVG flowchart legend and the markdown guides whenever any of them changes.

## Reference alignment

- Every public checklist or guide should map back to at least one internal SOP or source reference.
- If internal rules change, update `references/source-map.md` and the affected public docs together.
