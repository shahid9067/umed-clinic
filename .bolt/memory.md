# Project memory

## Product intent & audience

- Premium one-page marketing site for UMED Clinic in Latur, focused on trust-building and appointment enquiries.
- Audience includes people seeking psychiatric and mental-health care, plus family members and caregivers.
- Featured practitioner: Dr Shradha (Niture) Patrike, MBBS, DPM, Consultant Psychiatrist.
- Primary conversion path is direct WhatsApp appointment enquiry.
- Experience should feel calm, discreet, credible, human, and appropriate for healthcare.

## Brand personality & voice

- Reassuring, compassionate, professional, medically credible, and discreet.
- Premium/editorial rather than commercial or impersonal.
- Use clear, empathetic language and avoid unsupported outcomes, fear-based messaging, and unnecessary jargon.
- Keep UMED branding central while presenting the doctor and local clinic identity clearly.
- Calls to action should invite conversation without pressure.

## Visual design & UX direction

- Responsive single-page layout with an editorial, slide-like section rhythm and restrained transitions.
- Framed white composition with generous margins, teal navigation/actions, deep green support tones, and limited gold accents.
- Logo, doctor portrait, and approved clinic/facility imagery should be the primary visual anchors.
- Care section uses responsive image-plus-content cards with distinct image panels, visible circular service icon badges, headings, concise descriptions, and optional “Learn more” links.
- Care and WhatsApp actions should remain prominent; WhatsApp should use a recognizable brighter green treatment.
- Navigation labels are concise and map to visible sections: About, Doctor, Care, Spaces, Approach, FAQ, Resources, Visit.
- Prefer meaningful composition, calm imagery, accessible contrast, clear focus states, semantic structure, useful alt text, and reduced-motion support.
- Avoid dense repeated grids, noisy decoration, excessive gradients, novelty interactions, and poster-like artwork in Approach/Spaces.
- Mobile layouts must preserve readable image crops, reachable appointment actions, and stable card spacing.
- Care card icons must not be clipped by image wrappers or overflow rules; badges need sufficient edge clearance and strong contrast.
- Avoid using one repeated image across all Care cards. Distinct, approved imagery should support the individual consultation/service content.
- If remote imagery is temporarily used for testing, verify reliability and replace it with approved local or licensed assets before release.

## Decisions, constraints & rationale

- Stack: Vite + React.
- Appointment flow is WhatsApp-only; no backend, authentication, database, or complex scheduler is required.
- WhatsApp appointment number is `90670 89323`; links should normalize its formatting.
- Doctor details must remain: Dr Shradha (Niture) Patrike — MBBS, DPM — Consultant Psychiatrist.
- Clinic-provided assets and source information are authoritative. Do not invent services, facilities, credentials, testimonials, outcomes, certifications, or contact details.
- The poster should not be displayed; Approach should use a clean quote/information treatment.
- A previous implementation was reported as complete, but requested changes were not reliably reflected. Treat the current rendered page and source as unverified until audited.
- The latest reported Care update claims six distinct consultation images and repositioned, fully visible icon badges. This is not independently verified; inspect the actual implementation and browser rendering.
- The latest reported images use Pexels and therefore depend on internet access. This is a release risk and conflicts with the preference for approved local or licensed clinic imagery.
- Preserve existing project conventions, component patterns, Lucide icons, and `@/` imports without unnecessary dependencies.
- Instructions in `.bolt/prompt` remain authoritative for global implementation guidance.

## Open questions & assumptions

- Confirm whether the six Care cards actually render distinct images and whether all icon badges are fully visible at desktop and mobile breakpoints.
- Confirm the approved replacement for any Pexels image and whether each asset is local, licensed, reliably loaded, and appropriately cropped.
- Verify every Care card’s wording, icon, and imagery against approved clinic services.
- Verify final address, alternate phone numbers, email, hours, and map/location link.
- Confirm preferred display name: “Dr Shradha Niture Patrike” or “Dr Shradha (Niture) Patrike.”
- Verify WhatsApp ownership and preferred prefilled enquiry message.
- Confirm whether privacy, emergency-care, disclaimer, and accessibility copy is required.
- Validate logo, portrait, facility imagery, mobile crops, section anchors, and final section count.