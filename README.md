# Handoff: KindGifts by Sebeccly — Design System, Marketing Site & Web App

## Overview
KindGifts is a **medical crowdfunding platform** by Sebeccly Cancer Care — "Medical crowdfunding, powered by community kindness." This bundle contains a complete design system (tokens + component library) plus two fully-designed surfaces:

1. **Marketing website** — Home, How It Works, Partner Hospitals, Impact Stories, About/FAQ, Transparency Hub, the "10 Proof Points" page, and the "anatomy of a medical scam" story.
2. **Web app** — role-based product with four portals (Patient, Donor, Hospital, Admin), a stepped "Need a Gift" patient onboarding, a donor "Give a Gift" discovery/donation flow, a shared auth screen, and a vetting-progress tracker.

The two canonical actions across the whole product are **🎁 Need a Gift** (patient/beneficiary) and **❤️ Give a Gift** (donor).

## About the Design Files
The files in this bundle are **design references authored in HTML/JSX** — prototypes that show the intended look, copy, and behavior. They are **not production code to ship directly**. The task is to **recreate these designs in your target codebase** using its established framework, patterns, and libraries. If no front-end environment exists yet, pick the most appropriate stack (the prototypes are React + plain CSS custom properties, so React/Next.js is a natural fit) and implement there.

The components are authored as React function components that read design tokens from CSS custom properties. You can port the tokens verbatim (they're framework-agnostic CSS variables) and re-implement the components in your component system.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, copy, and interactions are all specified. Recreate the UI pixel-perfectly using your codebase's libraries, mapping the tokens below to your theme.

---

## Design Tokens

All tokens live in `styles.css` which imports the files under `tokens/`. Colors are defined in **OKLCH** (with hex equivalents in comments) on two brand hues.

### Color — Olive Green (primary / institutional / "Need a Gift"), hue 108.2
| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--olive-50` | `oklch(0.96 0.030 108.2)` | #F4F6E9 | Subtle background (cards, alerts) |
| `--olive-100` | `oklch(0.93 0.045 108.2)` | — | |
| `--olive-200` | `oklch(0.88 0.060 108.2)` | #DCE2B9 | Light border (dividers, inputs) |
| `--olive-300` | `oklch(0.75 0.100 108.2)` | #B2BD78 | Muted component / disabled |
| `--olive-400` | `oklch(0.64 0.115 108.2)` | — | |
| `--olive-500` | `oklch(0.54 0.110 108.2)` | — | |
| `--olive-600` | `oklch(0.44 0.090 108.2)` | #4B541D | **Brand base** (buttons, headers) |
| `--olive-700` | `oklch(0.375 0.075 108.2)` | — | Dark text / hover / active |
| `--olive-800` | `oklch(0.30 0.060 108.2)` | — | Dark surfaces (sidebars, footer) |
| `--olive-900` | `oklch(0.23 0.045 108.2)` | — | |

### Color — Deep Pink (accent / heart / "Give a Gift"), hue 350.5
| Token | OKLCH | Hex | Role |
|---|---|---|---|
| `--pink-50` | `oklch(0.95 0.040 350.5)` | #FFF0F5 | Subtle background (badges, tint) |
| `--pink-100` | `oklch(0.90 0.070 350.5)` | — | |
| `--pink-200` | `oklch(0.85 0.100 350.5)` | #FFC4DB | Light border / focus |
| `--pink-300` | `oklch(0.70 0.180 350.5)` | #FF79AC | Muted component / tags |
| `--pink-400` | `oklch(0.64 0.230 350.5)` | — | |
| `--pink-500` | `oklch(0.58 0.270 350.5)` | #DC1B73 | **Brand base accent** (CTAs) |
| `--pink-600` | `oklch(0.47 0.210 350.5)` | — | Links / hover on light |
| `--pink-700` | `oklch(0.42 0.220 350.5)` | #9D004F | Dark hover / active |
| `--pink-800` | `oklch(0.35 0.180 350.5)` | — | |
| `--pink-900` | `oklch(0.28 0.140 350.5)` | — | |

Functional aliases also exist: `--olive-subtle/border/muted/base/hover` and `--pink-subtle/border/muted/base/hover`.

### Color — Warm neutrals & semantic
Warm, cream-tinted neutrals (never stark clinical white/gray):
- `--cream #FBF9F4` (app bg), `--ivory #F5F2E9` (alt bg), `--white #FFFFFF`
- `--sand-50 #F7F6F1` → `--sand-900 #1B1A12` (10-stop warm gray), `--ink #1F2012`
- Text: `--text-strong` (ink), `--text-body` (sand-700), `--text-muted` (sand-500), `--text-on-dark #F6F5EE`
- Borders: `--border-subtle` (sand-200), `--border-strong` (sand-300)
- Semantic: `--success #1F8A5B` / `--success-bg #E4F3EC`; `--warning #B76E00` / `--warning-bg #FBEFD9`; `--danger #C0392B` / `--danger-bg #FBE7E4`; `--info #2A6F9E` / `--info-bg #E4EFF6`
- WhatsApp: `--whatsapp #25D366`, `--whatsapp-dark #128C7E`

**Accessibility note:** dark shades (oklch L < 0.45) are used for text/surfaces that carry white text (olive-600/700/800, pink-500). Do not put white text on the muted mid stops (olive-300, pink-300) — contrast is insufficient. Full token detail in `tokens/colors.css`.

### Typography (`tokens/fonts.css`, `tokens/typography.css`)
- **Display serif:** `Newsreader` — headings, hero copy (warm, editorial, dignified). `--font-display`.
- **UI sans:** `Plus Jakarta Sans` — all UI and body. `--font-sans`.
- Loaded via Google Fonts. Numeric values use a tabular-figure treatment (`.ff-num`) for currency.
- Type scale tokens `--text-xs … --text-3xl`; weights 400/500/600/700(/800). Slide/large headings use `clamp()`.

### Spacing, radii, shadows (`tokens/spacing.css`, `tokens/radii.css`, `tokens/base.css`)
- 4px base spacing scale.
- Radii: cards ~16px (`--radius-lg`), inputs ~12px (`--radius-md`), small `--radius-sm`, and **pill `--radius-pill` (999px)** for primary CTAs. `--radius-2xl` for hero imagery.
- Shadows: `--shadow-sm/md/lg`, plus `--shadow-pink` for pink CTAs. Focus rings: `--ring` (pink), `--ring-olive`.
- Tap target minimum `--tap-min` (44px).

---

## Component Library (`COMPONENT_SOURCE.md`)
Full source of every component (and its prop types) is consolidated in **`COMPONENT_SOURCE.md`** in this bundle. They are React function components that read design tokens from CSS custom properties. Namespace on `window.KindGiftsBySebecclyDesignSystem_d02769` when using the compiled bundle.

**Buttons** (`components/buttons/`)
- `Button` — variants: `primary` (olive, white text), `action` (pink, white text), `outline`, `secondary`, `ghost`, `whatsapp`. Props: `size` (sm/md/lg), `pill`, `block`, `disabled`, `leadingIcon`, `trailingIcon`.
- `GiftCTA` — the two canonical CTAs. `type="need"` → 🎁 olive soft-outline; `type="give"` → ❤️ bold pink high-contrast. Props: `size`, `block`, `label`, `onClick`. (Always renders its emoji — don't reuse for non-gift labels.)
- `WhatsAppButton` — green WhatsApp action; `label`, `block`, `size`.

**Display** (`components/display/`)
- `Card` — white-on-cream surface, hairline border, ~16px radius; `padding`, `interactive` (hover lift).
- `Money` — formats Naira `₦` with grouped thousands + tabular figures; `amount`, `size` (inherit/sm/base/md/lg/xl/2xl/3xl), `weight`, `color`.
- `ProgressBar` — campaign funding; `raised`, `goal`, `height`, `showCaption` (renders raised/goal caption).
- `Badge` — status pill; `tone`: neutral/olive/pink/success/warning/danger/info.
- `VerifiedBadge` — trust-green shield; `label`, `size`.
- `TrustChip` — chip for dark banners; `icon`, `label`.
- `StatBlock` — big number + label; `value`, `label`, `align`, `accent`.
- `StepIndicator` — numbered step progress; `steps`, `current`.
- `CampaignCard` — discovery card: image, name, need, `ProgressBar`, verified badge.

**Forms** (`components/forms/`)
- `Input` (`label`, `helper`, `error`, `prefix` e.g. ₦/+234, plus native input props), `Textarea` (`rows`), `Select` (`options`), `FileUpload` (`label`, `hint`, `secure`, `icon`), `Toggle` (`label`, `checked`, `onChange`), `AmountOption` (donation amount chip).

---

## Surfaces

### Marketing website (`ui_kits/marketing/`)
Single-page React app (`index.html`) with a hash/state router in the inline script; screens in `screens.jsx` + `extras.jsx`; shared chrome (`Header`, `Footer`, floating WhatsApp widget) in `shell.jsx`.

- **Header** — sticky, cream/blur, 72px. Left: logo (`logo.png`, 40px). Center nav: How It Works · Partner Hospitals · Impact Stories · About Us. Right: Log In + 🎁 Need a Gift + ❤️ Give a Gift. **Logged-in state** (localStorage `kg_loggedIn === "1"`): right side becomes a **My Dashboard** olive pill + Log Out; "My Dashboard" routes to the user's portal by `kg_role`. Collapses to a hamburger menu ≤960px.
- **Home** — hero (eyebrow "Simple · Transparent · Secure", H1 "Medical Crowdfunding, Powered by Community Kindness.", subhead, dual CTAs, verified badge, hero image + floating campaign stat card); olive trust banner with the **10 proof-point** TrustChips + "Learn more" link; philosophy section; getting-started; fee transparency; the deep-pink **"Be a part of the miracle today"** closing CTA (gradient `linear-gradient(140deg, var(--pink-600), var(--pink-800))`, white text).
- **10 Proof Points page** (`ProofPoints` in `extras.jsx`) — olive hero + 10 numbered cards (icon, title, description) detailing the vetting pipeline; give/transparency CTAs.
- **Partner Hospitals / Impact Stories / About & FAQ / Transparency Hub** — in `extras.jsx`.
- **The anatomy of a medical scam** (`ScamStory`) + **How we shut down each scam** (`FraudTable`) — olive-800 editorial section, ~940px reading column.
- **Footer** — olive-800; white logo (inverted via `filter: brightness(0) invert(1)`), tagline, WhatsApp button, Platform/Get-started link columns.

### Web app (`ui_kits/webapp/`)
React app (`index.html`) with a top demo view-switcher and hash routes (`#login`, `#patient`, `#donor`, `#hospital`, `#admin`, `#discovery`, `#success`). Shared portal shell in `portal.jsx`.

- **Auth** (`auth.jsx`) — Log In / Sign Up card; role toggle (Patient / Donor / Hospital); logging in sets `localStorage.kg_loggedIn = "1"` + `kg_role` and routes to the matching portal.
- **Need a Gift onboarding** (`onboarding.jsx`) — welcome → Account → Story → Financial Need → Trust & Verification → **submission success**. The final screen is a **"Pending review"** state: clock icon, "awaiting KindGifts admin approval / not visible to donors until approved" copy, a what-happens-next checklist, and a notify note. Button label "Submit for review".
- **Portal shell** (`portal.jsx`, `window.KGWPortal`) — `Shell({ subtitle, modules, tone, user, action, initial })`: left sidebar (logo + subtitle + module nav + user chip) and a main area with a top bar (active module title + search) that renders the active module. `tone="light"` (patient/donor) vs `tone="dark"` olive sidebar (hospital/admin). Shared atoms: `Table/Td`, `MiniStat`, `BigStat`, `Panel`, `SectionLabel`, `SplitBars`, `BarChart`, `Empty`, `Pad`. **Each module must be rendered as a component (`React.createElement(active.render)`), not called as a function**, so per-module hooks are isolated.
- **Patient portal** (`dashboards.jsx`) — modules: Dashboard, Campaigns, Medical Records, Verification, Withdrawals, Profile.
- **Donor portal** (`dashboards.jsx`) — Dashboard, Campaign Discovery, Donations, Donation History, Saved Campaigns.
- **Hospital portal** (`hospital.jsx`) — Dashboard, Patient Verification, Medical Documents, Consultation Management.
- **Admin portal** (`admin.jsx`) — Dashboard, User Management, Campaign Management, Verification Center (rich per-campaign vetting queue with AI pre-vetting flag + Zoho consultation + approve/reject), Donations & Withdrawals, Reports, CMS, Platform Settings.

---

## Interactions & Behavior
- **Routing** is client-side (React state + `window.location.hash`); marketing↔web-app links are cross-page `href`s. Replace with your router.
- **Auth/session** is prototyped with `localStorage` keys `kg_loggedIn` ("1") and `kg_role` ("patient"|"donor"|"hospital"|"admin"). Logout clears them. Replace with real auth/session; drive the header's logged-in state and dashboard routing from your session.
- **Buttons** scale to 0.98 on press; `Card interactive` lifts on hover; pink CTAs carry `--shadow-pink`.
- **Onboarding** advances one step per Continue (guard against double-advance — React state batching). Final submission → pending-review, never auto-live.
- **Verification Center** selects a campaign from a list to populate the detail pane; AI-flag tone (clear/review/hold) drives the badge + message + consultation state.
- **Responsive:** marketing collapses at 960px (hamburger, all grids → 1 col); web app at 820px (portal sidebars stack, grids → 1 col, tables scroll horizontally, search hides), with a 1000px step for 3-col→2-col. Both pages set `overflow-x: hidden`. Tap targets ≥44px.

## State Management
Minimal, per-surface local state in the prototypes: current route/view, onboarding step, selected queue item, role toggles, FAQ open/close, mobile-menu open. For production, wire: session/auth (role-based routing), campaign data + funding progress, document uploads, verification workflow status, disbursement/tranche state, donation history, and CMS/settings. Data is currently hard-coded sample content inline in each screen file.

## Assets
- **Logo:** `ui_kits/marketing/logo.png` and `ui_kits/webapp/logo.png` — a raster export (cropped tight to artwork) of the supplied KindGifts logo (gift box with pink hearts + "KindGifts" wordmark). Used dark on light surfaces and inverted to white on dark surfaces via `filter: brightness(0) invert(1)`. Ask the design owner for the original vector for production.
- **Photos:** placeholder photography is pulled via a helper (`window.KG_PHOTO` / `window.KGP` in `ui_kits/photos.js`). Replace with licensed imagery / real campaign photos.
- **Icons:** [Lucide](https://lucide.dev) (loaded from CDN). Emoji 🎁 ❤️ 🏥 are used intentionally as functional wayfinding.

## Files
Reference source in this bundle:
- `styles.css` — entry stylesheet (imports all tokens).
- `tokens/` — `colors.css`, `fonts.css`, `typography.css`, `spacing.css`, `radii.css`, `base.css`.
- `COMPONENT_SOURCE.md` — full source + prop types for all 18 components (buttons, display, forms).
- `ui_kits/marketing/` — `index.html`, `shell.jsx`, `screens.jsx`, `extras.jsx`, `logo.png`.
- `ui_kits/webapp/` — `index.html`, `auth.jsx`, `onboarding.jsx`, `portal.jsx`, `dashboards.jsx`, `hospital.jsx`, `admin.jsx`, `flows.jsx`, `logo.png`.
- `ui_kits/photos.js` — placeholder image helper.
- `readme.md` — original design-system brief and rationale.

**Note:** `_ds_bundle.js`, `_ds_manifest.json`, and `_adherence.oxlintrc.json` are compiled artifacts of the design-system tooling — informational only, not needed to implement.
