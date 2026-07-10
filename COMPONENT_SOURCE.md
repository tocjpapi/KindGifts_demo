# KindGifts — Component Source Reference

Full source of every design-system component (React + CSS custom properties). These are **design references** — recreate them in your codebase using its own patterns. Prop shapes are the `.jsx` signatures below and are also summarised in `README.md`.


## buttons

### Button

**Props (`Button.d.ts`):**
```ts
import * as React from "react";

/**
 * Primary button primitive for KindGifts.
 * @startingPoint section="Buttons" subtitle="Olive / pink / outline button system" viewport="700x160"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: "primary" | "action" | "outline" | "secondary" | "ghost" | "whatsapp";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Fully rounded pill shape (used for the main CTAs). @default false */
  pill?: boolean;
  /** Full-width. @default false */
  block?: boolean;
  disabled?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
```

**Source (`Button.jsx`):**
```jsx
import React from "react";

/**
 * Button — KindGifts primary button primitive.
 * Variants: primary (olive), action (pink), outline, ghost, secondary, whatsapp.
 */
export function Button({
  variant = "primary",
  size = "md",
  pill = false,
  block = false,
  disabled = false,
  leadingIcon = null,
  trailingIcon = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "0 16px", height: 38, fontSize: "var(--text-sm)", gap: 6 },
    md: { padding: "0 22px", height: 48, fontSize: "var(--text-base)", gap: 8 },
    lg: { padding: "0 30px", height: 56, fontSize: "var(--text-md)", gap: 10 },
  };
  const variants = {
    primary: {
      background: "var(--olive-600)", color: "var(--text-on-dark)",
      border: "1px solid var(--olive-600)", boxShadow: "var(--shadow-sm)",
    },
    action: {
      background: "var(--pink-500)", color: "#fff",
      border: "1px solid var(--pink-500)", boxShadow: "var(--shadow-pink)",
    },
    outline: {
      background: "transparent", color: "var(--olive-700)",
      border: "1.5px solid var(--olive-300)", boxShadow: "none",
    },
    secondary: {
      background: "var(--olive-50)", color: "var(--olive-700)",
      border: "1px solid var(--olive-100)", boxShadow: "none",
    },
    ghost: {
      background: "transparent", color: "var(--olive-700)",
      border: "1px solid transparent", boxShadow: "none",
    },
    whatsapp: {
      background: "var(--whatsapp)", color: "#0b3d2e",
      border: "1px solid var(--whatsapp)", boxShadow: "none",
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return (
    <button
      disabled={disabled}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.height,
        minHeight: "var(--tap-min)",
        padding: s.padding,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--weight-bold)",
        fontSize: s.fontSize,
        lineHeight: 1,
        whiteSpace: "nowrap",
        borderRadius: pill ? "var(--radius-pill)" : "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "transform var(--transition-fast), box-shadow var(--transition-base), background var(--transition-base)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => !disabled && (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
```

### GiftCTA

**Props (`GiftCTA.d.ts`):**
```ts
import * as React from "react";

/**
 * The two canonical KindGifts CTAs (🎁 Need a Gift / ❤️ Give a Gift).
 * @startingPoint section="Buttons" subtitle="The two canonical gift CTAs" viewport="700x140"
 */
export interface GiftCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** "need" = olive soft outline, "give" = bold pink. @default "give" */
  type?: "need" | "give";
  /** @default "md" */
  size?: "md" | "lg";
  block?: boolean;
  /** Override the default label text. */
  label?: string;
}
export function GiftCTA(props: GiftCTAProps): JSX.Element;
```

**Source (`GiftCTA.jsx`):**
```jsx
import React from "react";

/**
 * GiftCTA — the two canonical KindGifts calls to action.
 * type="need"  → 🎁 Need a Gift  (olive, soft outline)
 * type="give"  → ❤️ Give a Gift  (bold pink, high contrast)
 */
export function GiftCTA({ type = "give", size = "md", block = false, label, style = {}, ...rest }) {
  const isNeed = type === "need";
  const sizes = {
    md: { padding: "0 24px", height: 50, fontSize: "var(--text-base)" },
    lg: { padding: "0 34px", height: 60, fontSize: "var(--text-md)" },
  };
  const s = sizes[size] || sizes.md;
  const look = isNeed
    ? { background: "var(--olive-50)", color: "var(--olive-700)", border: "1.5px solid var(--olive-300)", boxShadow: "none" }
    : { background: "var(--pink-500)", color: "#fff", border: "1.5px solid var(--pink-500)", boxShadow: "var(--shadow-pink)" };
  const text = label || (isNeed ? "Need a Gift" : "Give a Gift");
  return (
    <button
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center", justifyContent: "center", gap: 8,
        height: s.height, minHeight: "var(--tap-min)", padding: s.padding,
        fontFamily: "var(--font-sans)", fontWeight: "var(--weight-bold)",
        fontSize: s.fontSize, lineHeight: 1,
        borderRadius: "var(--radius-pill)", cursor: "pointer",
        whiteSpace: "nowrap",
        transition: "transform var(--transition-fast), filter var(--transition-base)",
        ...look, ...style,
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      {...rest}
    >
      <span aria-hidden="true" style={{ fontSize: "1.15em" }}>{isNeed ? "🎁" : "❤️"}</span>
      {text}
    </button>
  );
}
```

### WhatsAppButton

**Props (`WhatsAppButton.d.ts`):**
```ts
import * as React from "react";

/** WhatsApp-first share/support button. */
export interface WhatsAppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: "md" | "lg";
  block?: boolean;
}
export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
```

**Source (`WhatsAppButton.jsx`):**
```jsx
import React from "react";

/**
 * WhatsAppButton — the recurring "Share on WhatsApp" action.
 * KindGifts is WhatsApp-first for a majority-mobile Nigerian audience.
 */
export function WhatsAppButton({ label = "Share on WhatsApp", size = "md", block = false, style = {}, ...rest }) {
  const h = size === "lg" ? 56 : 48;
  return (
    <button
      style={{
        display: block ? "flex" : "inline-flex", width: block ? "100%" : "auto",
        alignItems: "center", justifyContent: "center", gap: 10,
        height: h, minHeight: "var(--tap-min)", padding: "0 24px",
        background: "var(--whatsapp)", color: "#083b2c",
        fontFamily: "var(--font-sans)", fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-base)", lineHeight: 1,
        border: "none", borderRadius: "var(--radius-pill)", cursor: "pointer",
        transition: "transform var(--transition-fast), background var(--transition-base)",
        ...style,
      }}
      onMouseOver={(e) => (e.currentTarget.style.background = "var(--whatsapp-dark)", e.currentTarget.style.color = "#eafff5")}
      onMouseOut={(e) => (e.currentTarget.style.background = "var(--whatsapp)", e.currentTarget.style.color = "#083b2c")}
      {...rest}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.94 7.94 0 0 0 12 20a7.94 7.94 0 0 0 5.6-13.7ZM12 18.5a6.6 6.6 0 0 1-3.4-.9l-.24-.15-2.5.66.67-2.43-.16-.25A6.59 6.59 0 1 1 12 18.5Zm3.6-4.95c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-2.66-2.33c-.2-.34.2-.32.57-1.06a.36.36 0 0 0 0-.34c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.66 8.66 0 0 0 3.32 2.93c1.85.8 1.85.53 2.19.5a1.98 1.98 0 0 0 1.3-.92 1.62 1.62 0 0 0 .11-.92c-.05-.08-.18-.13-.38-.23Z"/>
      </svg>
      {label}
    </button>
  );
}
```


## display

### Badge

**Props (`Badge.d.ts`):**
```ts
import * as React from "react";
export interface BadgeProps {
  tone?: "neutral" | "olive" | "pink" | "success" | "warning" | "danger" | "info";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
```

**Source (`Badge.jsx`):**
```jsx
import React from "react";

/** Badge — small status/label pill. */
export function Badge({ children, tone = "neutral", style = {} }) {
  const tones = {
    neutral: { bg: "var(--sand-100)", fg: "var(--sand-700)" },
    olive:   { bg: "var(--olive-50)", fg: "var(--olive-700)" },
    pink:    { bg: "var(--pink-50)", fg: "var(--pink-600)" },
    success: { bg: "var(--success-bg)", fg: "var(--success)" },
    warning: { bg: "var(--warning-bg)", fg: "var(--warning)" },
    danger:  { bg: "var(--danger-bg)", fg: "var(--danger)" },
    info:    { bg: "var(--info-bg)", fg: "var(--info)" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: "4px 10px", borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-xs)", fontWeight: "var(--weight-bold)",
      lineHeight: 1.3, background: t.bg, color: t.fg,
      textTransform: "uppercase", letterSpacing: "var(--tracking-wide)",
      ...style,
    }}>
      {children}
    </span>
  );
}
```

### CampaignCard

**Props (`CampaignCard.d.ts`):**
```ts
import * as React from "react";
/**
 * Discovery-grid campaign card (photo, verified badge, progress, Give CTA).
 * @startingPoint section="Display" subtitle="Campaign discovery card" viewport="380x460"
 */
export interface CampaignCardProps {
  name: string;
  need: string;
  raised: number;
  goal: number;
  verified?: boolean;
  /** Image URL; a warm placeholder shows when omitted. */
  image?: string;
  onGive?: () => void;
  style?: React.CSSProperties;
}
export function CampaignCard(props: CampaignCardProps): JSX.Element;
```

**Source (`CampaignCard.jsx`):**
```jsx
import React from "react";
import { Card } from "./Card.jsx";
import { VerifiedBadge } from "./VerifiedBadge.jsx";
import { ProgressBar } from "./ProgressBar.jsx";
import { GiftCTA } from "../buttons/GiftCTA.jsx";

/**
 * CampaignCard — the discovery-grid card for a medical campaign.
 * Photo, verified badge, patient name + short need, progress, and CTA.
 */
export function CampaignCard({ name, need, raised, goal, verified = true, image, onGive, style = {} }) {
  return (
    <Card interactive padding={0} style={{ overflow: "hidden", display: "flex", flexDirection: "column", ...style }}>
      <div style={{
        position: "relative", aspectRatio: "16 / 10", width: "100%",
        background: image ? `center/cover no-repeat url(${image})` : "linear-gradient(135deg, var(--olive-100), var(--pink-100))",
        display: "flex", alignItems: "flex-end", padding: 12,
      }}>
        {!image && <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, opacity: 0.5 }} aria-hidden="true">🖼️</span>}
        {verified && <VerifiedBadge size="sm" style={{ position: "relative", background: "var(--white)" }} />}
      </div>
      <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <div>
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", color: "var(--text-strong)", marginBottom: 4 }}>{name}</h4>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--text-body)", lineHeight: 1.5 }}>{need}</p>
        </div>
        <ProgressBar raised={raised} goal={goal} height={10} style={{ marginTop: "auto" }} />
        <GiftCTA type="give" block onClick={onGive} />
      </div>
    </Card>
  );
}
```

### Card

**Props (`Card.d.ts`):**
```ts
import * as React from "react";
/**
 * Warm white content surface (hairline border + soft shadow).
 * @startingPoint section="Display" subtitle="Card / badge / progress surfaces" viewport="700x220"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: number | string;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;
```

**Source (`Card.jsx`):**
```jsx
import React from "react";

/** Card — warm white surface with hairline border + soft shadow. */
export function Card({ children, interactive = false, padding = 24, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-sm)",
        padding,
        transition: "transform var(--transition-base), box-shadow var(--transition-base)",
        ...style,
      }}
      onMouseOver={interactive ? (e) => (e.currentTarget.style.boxShadow = "var(--shadow-md)", e.currentTarget.style.transform = "translateY(-2px)") : undefined}
      onMouseOut={interactive ? (e) => (e.currentTarget.style.boxShadow = "var(--shadow-sm)", e.currentTarget.style.transform = "translateY(0)") : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
```

### Money

**Props (`Money.d.ts`):**
```ts
import * as React from "react";
/** Formats a number as Naira (₦) with grouped thousands + tabular figures. */
export interface MoneyProps {
  amount: number | string;
  size?: "inherit" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl";
  weight?: "regular" | "medium" | "semibold" | "bold";
  color?: string;
  style?: React.CSSProperties;
}
export function Money(props: MoneyProps): JSX.Element;
```

**Source (`Money.jsx`):**
```jsx
import React from "react";

/** Money — formats a number as Naira (₦) with grouped thousands and tabular figures. */
export function Money({ amount, size = "inherit", weight = "bold", color = "inherit", style = {} }) {
  const n = typeof amount === "number" ? amount : Number(String(amount).replace(/[^0-9.-]/g, "")) || 0;
  const formatted = "₦" + n.toLocaleString("en-NG");
  const fontSize = size === "inherit" ? undefined : `var(--text-${size})`;
  const fontWeight = { regular: 400, medium: 500, semibold: 600, bold: 700 }[weight] || 700;
  return (
    <span className="ff-num" style={{ fontFamily: "var(--font-sans)", fontWeight, fontSize, color, ...style }}>
      {formatted}
    </span>
  );
}
```

### ProgressBar

**Props (`ProgressBar.d.ts`):**
```ts
import * as React from "react";
/** Campaign funding progress bar with raised/goal caption (pink fill). */
export interface ProgressBarProps {
  raised?: number;
  goal?: number;
  showCaption?: boolean;
  height?: number;
  style?: React.CSSProperties;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
```

**Source (`ProgressBar.jsx`):**
```jsx
import React from "react";
import { Money } from "./Money.jsx";

/** ProgressBar — campaign funding progress with raised/goal caption. */
export function ProgressBar({ raised = 0, goal = 100, showCaption = true, height = 12, style = {} }) {
  const pct = Math.min(100, goal > 0 ? Math.round((raised / goal) * 100) : 0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}>
      <div style={{ height, background: "var(--progress-track)", borderRadius: "var(--radius-pill)", overflow: "hidden" }}>
        <div style={{
          width: pct + "%", height: "100%",
          background: "linear-gradient(90deg, var(--pink-500), var(--pink-400))",
          borderRadius: "var(--radius-pill)",
          transition: "width var(--transition-slow)",
        }} />
      </div>
      {showCaption && (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          <span><Money amount={raised} color="var(--pink-600)" /> raised</span>
          <span>of <Money amount={goal} weight="semibold" color="var(--text-body)" /> goal</span>
        </div>
      )}
    </div>
  );
}
```

### StatBlock

**Props (`StatBlock.d.ts`):**
```ts
import * as React from "react";
/** A headline number + label (impact / fee-transparency stats). */
export interface StatBlockProps {
  value: React.ReactNode;
  label: string;
  accent?: "olive" | "pink" | "on-dark";
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export function StatBlock(props: StatBlockProps): JSX.Element;
```

**Source (`StatBlock.jsx`):**
```jsx
import React from "react";

/** StatBlock — a headline number + label (impact stats, fee transparency). */
export function StatBlock({ value, label, accent = "olive", align = "left", style = {} }) {
  const color = accent === "pink" ? "var(--pink-500)" : accent === "on-dark" ? "var(--text-on-dark)" : "var(--olive-600)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, textAlign: align, ...style }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-3xl)", lineHeight: 1, color }} className="ff-num">
        {value}
      </span>
      <span style={{ fontSize: "var(--text-sm)", color: accent === "on-dark" ? "color-mix(in srgb, var(--text-on-dark) 75%, transparent)" : "var(--text-muted)", lineHeight: 1.4 }}>
        {label}
      </span>
    </div>
  );
}
```

### StepIndicator

**Props (`StepIndicator.d.ts`):**
```ts
import * as React from "react";
/** Numbered step progress for the patient onboarding flow. */
export interface StepIndicatorProps {
  steps: string[];
  /** 0-based index of the active step. */
  current?: number;
  style?: React.CSSProperties;
}
export function StepIndicator(props: StepIndicatorProps): JSX.Element;
```

**Source (`StepIndicator.jsx`):**
```jsx
import React from "react";

/** StepIndicator — numbered progress for the stepped patient onboarding. */
export function StepIndicator({ steps = [], current = 0, style = {} }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, ...style }}>
      {steps.map((label, i) => {
        const done = i < current, active = i === current;
        return (
          <React.Fragment key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flexShrink: 0 }}>
              <span style={{
                width: 34, height: 34, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "var(--weight-bold)", fontSize: "var(--text-sm)",
                background: done ? "var(--olive-600)" : active ? "var(--pink-500)" : "var(--sand-100)",
                color: done || active ? "#fff" : "var(--text-muted)",
                border: active ? "none" : done ? "none" : "1px solid var(--border-strong)",
                transition: "all var(--transition-base)",
              }}>{done ? "✓" : i + 1}</span>
              <span style={{ fontSize: "var(--text-xs)", fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)", color: active ? "var(--text-strong)" : "var(--text-muted)", whiteSpace: "nowrap" }}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <span style={{ flex: 1, height: 2, minWidth: 24, background: i < current ? "var(--olive-500)" : "var(--border-strong)", margin: "0 8px", marginBottom: 22 }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
```

### TrustChip

**Props (`TrustChip.d.ts`):**
```ts
import * as React from "react";
/** Icon + label credential chip for the institutional trust banner (dark bg). */
export interface TrustChipProps {
  icon?: string;
  label: string;
  style?: React.CSSProperties;
}
export function TrustChip(props: TrustChipProps): JSX.Element;
```

**Source (`TrustChip.jsx`):**
```jsx
import React from "react";

/** TrustChip — an icon + label credential used in the institutional trust banner. */
export function TrustChip({ icon = "🛡️", label, style = {} }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      padding: "8px 14px", borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb, var(--white) 12%, transparent)",
      border: "1px solid color-mix(in srgb, var(--white) 22%, transparent)",
      color: "var(--text-on-dark)", fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)", lineHeight: 1.3, ...style,
    }}>
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
```

### VerifiedBadge

**Props (`VerifiedBadge.d.ts`):**
```ts
import * as React from "react";
/** The trust cue on vetted campaigns (dedicated trust-green shield-check). */
export interface VerifiedBadgeProps {
  label?: string;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export function VerifiedBadge(props: VerifiedBadgeProps): JSX.Element;
```

**Source (`VerifiedBadge.jsx`):**
```jsx
import React from "react";

/**
 * VerifiedBadge — the trust cue shown on vetted campaigns.
 * Uses the dedicated trust-green (distinct from brand olive).
 */
export function VerifiedBadge({ label = "Verified Campaign", size = "md", style = {} }) {
  const sm = size === "sm";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: sm ? "3px 9px" : "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: "var(--success-bg)", color: "var(--success)",
      border: "1px solid color-mix(in srgb, var(--success) 30%, transparent)",
      fontSize: sm ? "var(--text-xs)" : "var(--text-sm)",
      fontWeight: "var(--weight-bold)", lineHeight: 1.3, ...style,
    }}>
      <svg width={sm ? 13 : 15} height={sm ? 13 : 15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z" fill="currentColor" fillOpacity="0.14" />
        <path d="m9 12 2 2 4-4" />
      </svg>
      {label}
    </span>
  );
}
```


## forms

### AmountOption

**Props (`AmountOption.d.ts`):**
```ts
import * as React from "react";
/** A selectable preset gift-amount tile with optional impact note. */
export interface AmountOptionProps {
  /** Formatted amount, e.g. "₦25,000". */
  amount: string;
  /** Impact helper, e.g. "Contributes toward a radiotherapy session". */
  note?: string;
  selected?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function AmountOption(props: AmountOptionProps): JSX.Element;
```

**Source (`AmountOption.jsx`):**
```jsx
import React from "react";

/**
 * AmountOption — a selectable preset gift amount tile with helper text.
 * Used on the donation box (₦5,000 / ₦25,000 / ₦100,000 / Custom).
 */
export function AmountOption({ amount, note, selected = false, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 2,
        textAlign: "left", width: "100%", cursor: "pointer",
        padding: "14px 16px", minHeight: "var(--tap-min)",
        borderRadius: "var(--radius-md)",
        border: `1.5px solid ${selected ? "var(--pink-500)" : "var(--border-strong)"}`,
        background: selected ? "var(--pink-50)" : "var(--white)",
        boxShadow: selected ? "var(--shadow-sm)" : "none",
        transition: "all var(--transition-base)",
        ...style,
      }}
    >
      <span className="ff-num" style={{ fontFamily: "var(--font-sans)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-md)", color: selected ? "var(--pink-600)" : "var(--text-strong)" }}>
        {amount}
      </span>
      {note && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.35 }}>{note}</span>}
    </button>
  );
}
```

### FileUpload

**Props (`FileUpload.d.ts`):**
```ts
import * as React from "react";
/** Dashed drop zone for documents/photos. `secure` marks private clinical uploads. */
export interface FileUploadProps {
  label?: string;
  hint?: string;
  /** Show the "🔒 Private — clinical team only" reassurance. */
  secure?: boolean;
  icon?: string;
  style?: React.CSSProperties;
}
export function FileUpload(props: FileUploadProps): JSX.Element;
```

**Source (`FileUpload.jsx`):**
```jsx
import React from "react";

/**
 * FileUpload — dashed drop zone for medical documents / photos.
 * `secure` shows the private-to-clinical-team reassurance treatment.
 */
export function FileUpload({ label, hint, secure = false, icon = "📄", style = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)", display: "flex", alignItems: "center", gap: 6 }}>
          {label}
          {secure && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "var(--text-xs)", fontWeight: "var(--weight-semibold)", color: "var(--success)", background: "var(--success-bg)", padding: "2px 8px", borderRadius: "var(--radius-pill)" }}>
              🔒 Private
            </span>
          )}
        </label>
      )}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        padding: "24px 16px", textAlign: "center", cursor: "pointer",
        border: "1.5px dashed var(--border-strong)", borderRadius: "var(--radius-md)",
        background: secure ? "var(--success-bg)" : "var(--surface-sunken)",
        transition: "border-color var(--transition-base), background var(--transition-base)",
      }}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--olive-400)")}
        onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
      >
        <span style={{ fontSize: 24 }} aria-hidden="true">{icon}</span>
        <span style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--olive-700)" }}>
          Tap to upload or drag a file here
        </span>
        {hint && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.4, maxWidth: 360 }}>{hint}</span>}
      </div>
    </div>
  );
}
```

### Input

**Props (`Input.d.ts`):**
```ts
import * as React from "react";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helper?: string;
  error?: string;
  /** Leading text prefix, e.g. "₦". */
  prefix?: string;
}
export function Input(props: InputProps): JSX.Element;
```

**Source (`Input.jsx`):**
```jsx
import React from "react";

/** Input — labelled text field with optional helper/error text. */
export function Input({ label, helper, error, prefix, id, style = {}, ...rest }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>
          {label}
        </label>
      )}
      <div style={{
        display: "flex", alignItems: "center",
        background: "var(--white)",
        border: `1.5px solid ${error ? "var(--danger)" : "var(--border-strong)"}`,
        borderRadius: "var(--radius-md)", overflow: "hidden",
        transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
      }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--olive-500)", e.currentTarget.style.boxShadow = "var(--ring-olive)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--border-strong)", e.currentTarget.style.boxShadow = "none")}
      >
        {prefix && <span style={{ padding: "0 4px 0 14px", color: "var(--text-muted)", fontWeight: "var(--weight-semibold)" }}>{prefix}</span>}
        <input id={inputId} style={{
          flex: 1, border: "none", outline: "none", background: "transparent",
          padding: prefix ? "13px 14px 13px 4px" : "13px 14px",
          fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--text-strong)",
          minHeight: "var(--tap-min)",
        }} {...rest} />
      </div>
      {(helper || error) && (
        <span style={{ fontSize: "var(--text-xs)", color: error ? "var(--danger)" : "var(--text-muted)", lineHeight: 1.4 }}>
          {error || helper}
        </span>
      )}
    </div>
  );
}
```

### Select

**Props (`Select.d.ts`):**
```ts
import * as React from "react";
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  helper?: string;
  options?: Array<string | { value: string; label: string }>;
}
export function Select(props: SelectProps): JSX.Element;
```

**Source (`Select.jsx`):**
```jsx
import React from "react";

/** Select — native select styled to match the form system. */
export function Select({ label, helper, options = [], id, style = {}, ...rest }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select id={inputId} style={{
          width: "100%", appearance: "none", border: "1.5px solid var(--border-strong)",
          borderRadius: "var(--radius-md)", padding: "13px 40px 13px 14px",
          fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", color: "var(--text-strong)",
          background: "var(--white)", minHeight: "var(--tap-min)", cursor: "pointer", outline: "none",
        }} {...rest}>
          {options.map((o) => (typeof o === "string"
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>))}
        </select>
        <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--text-muted)" }}>▾</span>
      </div>
      {helper && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{helper}</span>}
    </div>
  );
}
```

### Textarea

**Props (`Textarea.d.ts`):**
```ts
import * as React from "react";
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helper?: string;
  rows?: number;
}
export function Textarea(props: TextareaProps): JSX.Element;
```

**Source (`Textarea.jsx`):**
```jsx
import React from "react";

/** Textarea — for campaign stories and updates. */
export function Textarea({ label, helper, rows = 5, id, style = {}, ...rest }) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>
          {label}
        </label>
      )}
      <textarea id={inputId} rows={rows} style={{
        border: "1.5px solid var(--border-strong)", borderRadius: "var(--radius-md)",
        padding: "13px 14px", fontFamily: "var(--font-sans)", fontSize: "var(--text-base)",
        color: "var(--text-strong)", background: "var(--white)", resize: "vertical",
        lineHeight: "var(--leading-normal)", outline: "none",
        transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
      }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--olive-500)", e.currentTarget.style.boxShadow = "var(--ring-olive)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)", e.currentTarget.style.boxShadow = "none")}
        {...rest} />
      {helper && <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", lineHeight: 1.4 }}>{helper}</span>}
    </div>
  );
}
```

### Toggle

**Props (`Toggle.d.ts`):**
```ts
import * as React from "react";
/** Pill switch (e.g. the "Give anonymously" privacy toggle). */
export interface ToggleProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  label?: string;
  style?: React.CSSProperties;
}
export function Toggle(props: ToggleProps): JSX.Element;
```

**Source (`Toggle.jsx`):**
```jsx
import React from "react";

/** Toggle — pill switch, used for the "Give anonymously" privacy control. */
export function Toggle({ checked = false, onChange, label, style = {} }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: "pointer", ...style }}>
      <span
        onClick={() => onChange && onChange(!checked)}
        style={{
          width: 48, height: 28, borderRadius: "var(--radius-pill)", flexShrink: 0,
          background: checked ? "var(--olive-600)" : "var(--sand-300)",
          position: "relative", transition: "background var(--transition-base)",
        }}
      >
        <span style={{
          position: "absolute", top: 3, left: checked ? 23 : 3,
          width: 22, height: 22, borderRadius: "50%", background: "#fff",
          boxShadow: "var(--shadow-xs)", transition: "left var(--transition-base)",
        }} />
      </span>
      {label && <span style={{ fontSize: "var(--text-sm)", color: "var(--text-body)" }}>{label}</span>}
    </label>
  );
}
```
