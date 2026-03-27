# Engineer Letter Assembly Guide

The current sample letters are highly standardized. Build the final letter from a controlled field set rather than freehand edits.

## Base sections

1. Date and lender information
2. Property identifier and parcel information
3. Owner and borrower information
4. Engineer identity, license state, and evaluation date
5. Non-invasive visual inspection statement
6. HUD / PFGMH compliance statement
7. Foundation system description
8. Accessory structure statement, if applicable
9. Suitability-for-site statement
10. Wheels / axles / hitch statement
11. Limitation statement regarding hidden footing depths
12. Validity term and movement history statement
13. Signature block

## Required confirmations before drafting

- Correct engineer and license for the property state
- Correct issue date and evaluation date
- Confirmed address and parcel reference
- Confirmed foundation type wording
- Reviewed additions and accessory structures
- Confirmed whether accessory language is needed
- Confirmed whether movement history language needs special qualification

## Standard wording controls

- Keep the inspection method non-invasive unless the engagement scope says otherwise.
- Only state compliance after the evidence supports the conclusion.
- Use accessory wording only for structures that were actually reviewed.
- Do not imply footing depths were physically excavated unless they were.
- Keep validity language consistent across letters unless a client or jurisdiction requires different wording.

## Letter family variables

- Lender name, address, and file number
- Property address and parcel identifiers
- Owner and borrower names
- Engineer name, title, state, and license number
- Evaluation date
- Foundation type description
- Additions or accessory structures reviewed
- Installation year or movement-history statement

## Source of truth

Use `ops/schemas/letter-fields.schema.yaml` as the structured source of truth for placeholders and conditional clauses.
