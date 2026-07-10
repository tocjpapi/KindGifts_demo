/* @ds-bundle: {"format":4,"namespace":"KindGiftsBySebecclyDesignSystem_d02769","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"GiftCTA","sourcePath":"components/buttons/GiftCTA.jsx"},{"name":"WhatsAppButton","sourcePath":"components/buttons/WhatsAppButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"CampaignCard","sourcePath":"components/display/CampaignCard.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Money","sourcePath":"components/display/Money.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"StatBlock","sourcePath":"components/display/StatBlock.jsx"},{"name":"StepIndicator","sourcePath":"components/display/StepIndicator.jsx"},{"name":"TrustChip","sourcePath":"components/display/TrustChip.jsx"},{"name":"VerifiedBadge","sourcePath":"components/display/VerifiedBadge.jsx"},{"name":"AmountOption","sourcePath":"components/forms/AmountOption.jsx"},{"name":"FileUpload","sourcePath":"components/forms/FileUpload.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"0c42ab8d17c3","components/buttons/GiftCTA.jsx":"9a055d1f91de","components/buttons/WhatsAppButton.jsx":"0127bc71d7a7","components/display/Badge.jsx":"b1dcc6058ec2","components/display/CampaignCard.jsx":"ec2d3cefd932","components/display/Card.jsx":"8a5c0a237615","components/display/Money.jsx":"faf52c615e5b","components/display/ProgressBar.jsx":"f4ba2f10d74e","components/display/StatBlock.jsx":"f89224e0f016","components/display/StepIndicator.jsx":"971ef7b382b4","components/display/TrustChip.jsx":"6230c050c338","components/display/VerifiedBadge.jsx":"0f09844d1ce0","components/forms/AmountOption.jsx":"b93a7d78cf9f","components/forms/FileUpload.jsx":"79836c5e5a41","components/forms/Input.jsx":"35a88fbd539c","components/forms/Select.jsx":"68c2aca6e0f4","components/forms/Textarea.jsx":"f2f36234d327","components/forms/Toggle.jsx":"6abb4e2a3bb6","ui_kits/marketing/extras.jsx":"09caa8a613a5","ui_kits/marketing/screens.jsx":"b9895a7d867f","ui_kits/marketing/shell.jsx":"a72d32b28079","ui_kits/photos.js":"44b85e8851d5","ui_kits/webapp/admin.jsx":"fffc75d3f1e1","ui_kits/webapp/auth.jsx":"2dbc83256921","ui_kits/webapp/dashboards.jsx":"981f29418392","ui_kits/webapp/flows.jsx":"cf51ebfe1dc3","ui_kits/webapp/hospital.jsx":"5af5351ef198","ui_kits/webapp/onboarding.jsx":"6dd0c0468c6d","ui_kits/webapp/portal.jsx":"1ed49a9e0906"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KindGiftsBySebecclyDesignSystem_d02769 = window.KindGiftsBySebecclyDesignSystem_d02769 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — KindGifts primary button primitive.
 * Variants: primary (olive), action (pink), outline, ghost, secondary, whatsapp.
 */
function Button({
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
    sm: {
      padding: "0 16px",
      height: 38,
      fontSize: "var(--text-sm)",
      gap: 6
    },
    md: {
      padding: "0 22px",
      height: 48,
      fontSize: "var(--text-base)",
      gap: 8
    },
    lg: {
      padding: "0 30px",
      height: 56,
      fontSize: "var(--text-md)",
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--olive-600)",
      color: "var(--text-on-dark)",
      border: "1px solid var(--olive-600)",
      boxShadow: "var(--shadow-sm)"
    },
    action: {
      background: "var(--pink-500)",
      color: "#fff",
      border: "1px solid var(--pink-500)",
      boxShadow: "var(--shadow-pink)"
    },
    outline: {
      background: "transparent",
      color: "var(--olive-700)",
      border: "1.5px solid var(--olive-300)",
      boxShadow: "none"
    },
    secondary: {
      background: "var(--olive-50)",
      color: "var(--olive-700)",
      border: "1px solid var(--olive-100)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--olive-700)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    whatsapp: {
      background: "var(--whatsapp)",
      color: "#0b3d2e",
      border: "1px solid var(--whatsapp)",
      boxShadow: "none"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
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
      ...style
    },
    onMouseDown: e => !disabled && (e.currentTarget.style.transform = "scale(0.98)"),
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/GiftCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GiftCTA — the two canonical KindGifts calls to action.
 * type="need"  → 🎁 Need a Gift  (olive, soft outline)
 * type="give"  → ❤️ Give a Gift  (bold pink, high contrast)
 */
function GiftCTA({
  type = "give",
  size = "md",
  block = false,
  label,
  style = {},
  ...rest
}) {
  const isNeed = type === "need";
  const sizes = {
    md: {
      padding: "0 24px",
      height: 50,
      fontSize: "var(--text-base)"
    },
    lg: {
      padding: "0 34px",
      height: 60,
      fontSize: "var(--text-md)"
    }
  };
  const s = sizes[size] || sizes.md;
  const look = isNeed ? {
    background: "var(--olive-50)",
    color: "var(--olive-700)",
    border: "1.5px solid var(--olive-300)",
    boxShadow: "none"
  } : {
    background: "var(--pink-500)",
    color: "#fff",
    border: "1.5px solid var(--pink-500)",
    boxShadow: "var(--shadow-pink)"
  };
  const text = label || (isNeed ? "Need a Gift" : "Give a Gift");
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: s.height,
      minHeight: "var(--tap-min)",
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "transform var(--transition-fast), filter var(--transition-base)",
      ...look,
      ...style
    },
    onMouseDown: e => e.currentTarget.style.transform = "scale(0.98)",
    onMouseUp: e => e.currentTarget.style.transform = "scale(1)",
    onMouseLeave: e => e.currentTarget.style.transform = "scale(1)"
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.15em"
    }
  }, isNeed ? "🎁" : "❤️"), text);
}
Object.assign(__ds_scope, { GiftCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/GiftCTA.jsx", error: String((e && e.message) || e) }); }

// components/buttons/WhatsAppButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * WhatsAppButton — the recurring "Share on WhatsApp" action.
 * KindGifts is WhatsApp-first for a majority-mobile Nigerian audience.
 */
function WhatsAppButton({
  label = "Share on WhatsApp",
  size = "md",
  block = false,
  style = {},
  ...rest
}) {
  const h = size === "lg" ? 56 : 48;
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      height: h,
      minHeight: "var(--tap-min)",
      padding: "0 24px",
      background: "var(--whatsapp)",
      color: "#083b2c",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-base)",
      lineHeight: 1,
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: "pointer",
      transition: "transform var(--transition-fast), background var(--transition-base)",
      ...style
    },
    onMouseOver: e => (e.currentTarget.style.background = "var(--whatsapp-dark)", e.currentTarget.style.color = "#eafff5"),
    onMouseOut: e => (e.currentTarget.style.background = "var(--whatsapp)", e.currentTarget.style.color = "#083b2c")
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.94 7.94 0 0 0 12 20a7.94 7.94 0 0 0 5.6-13.7ZM12 18.5a6.6 6.6 0 0 1-3.4-.9l-.24-.15-2.5.66.67-2.43-.16-.25A6.59 6.59 0 1 1 12 18.5Zm3.6-4.95c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-2.66-2.33c-.2-.34.2-.32.57-1.06a.36.36 0 0 0 0-.34c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.66 8.66 0 0 0 3.32 2.93c1.85.8 1.85.53 2.19.5a1.98 1.98 0 0 0 1.3-.92 1.62 1.62 0 0 0 .11-.92c-.05-.08-.18-.13-.38-.23Z"
  })), label);
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/** Badge — small status/label pill. */
function Badge({
  children,
  tone = "neutral",
  style = {}
}) {
  const tones = {
    neutral: {
      bg: "var(--sand-100)",
      fg: "var(--sand-700)"
    },
    olive: {
      bg: "var(--olive-50)",
      fg: "var(--olive-700)"
    },
    pink: {
      bg: "var(--pink-50)",
      fg: "var(--pink-600)"
    },
    success: {
      bg: "var(--success-bg)",
      fg: "var(--success)"
    },
    warning: {
      bg: "var(--warning-bg)",
      fg: "var(--warning)"
    },
    danger: {
      bg: "var(--danger-bg)",
      fg: "var(--danger)"
    },
    info: {
      bg: "var(--info-bg)",
      fg: "var(--info)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.3,
      background: t.bg,
      color: t.fg,
      textTransform: "uppercase",
      letterSpacing: "var(--tracking-wide)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — warm white surface with hairline border + soft shadow. */
function Card({
  children,
  interactive = false,
  padding = 24,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding,
      transition: "transform var(--transition-base), box-shadow var(--transition-base)",
      ...style
    },
    onMouseOver: interactive ? e => (e.currentTarget.style.boxShadow = "var(--shadow-md)", e.currentTarget.style.transform = "translateY(-2px)") : undefined,
    onMouseOut: interactive ? e => (e.currentTarget.style.boxShadow = "var(--shadow-sm)", e.currentTarget.style.transform = "translateY(0)") : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Money.jsx
try { (() => {
/** Money — formats a number as Naira (₦) with grouped thousands and tabular figures. */
function Money({
  amount,
  size = "inherit",
  weight = "bold",
  color = "inherit",
  style = {}
}) {
  const n = typeof amount === "number" ? amount : Number(String(amount).replace(/[^0-9.-]/g, "")) || 0;
  const formatted = "₦" + n.toLocaleString("en-NG");
  const fontSize = size === "inherit" ? undefined : `var(--text-${size})`;
  const fontWeight = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  }[weight] || 700;
  return /*#__PURE__*/React.createElement("span", {
    className: "ff-num",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight,
      fontSize,
      color,
      ...style
    }
  }, formatted);
}
Object.assign(__ds_scope, { Money });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Money.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
/** ProgressBar — campaign funding progress with raised/goal caption. */
function ProgressBar({
  raised = 0,
  goal = 100,
  showCaption = true,
  height = 12,
  style = {}
}) {
  const pct = Math.min(100, goal > 0 ? Math.round(raised / goal * 100) : 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: "var(--progress-track)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: "linear-gradient(90deg, var(--pink-500), var(--pink-400))",
      borderRadius: "var(--radius-pill)",
      transition: "width var(--transition-slow)"
    }
  })), showCaption && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(__ds_scope.Money, {
    amount: raised,
    color: "var(--pink-600)"
  }), " raised"), /*#__PURE__*/React.createElement("span", null, "of ", /*#__PURE__*/React.createElement(__ds_scope.Money, {
    amount: goal,
    weight: "semibold",
    color: "var(--text-body)"
  }), " goal")));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/StatBlock.jsx
try { (() => {
/** StatBlock — a headline number + label (impact stats, fee transparency). */
function StatBlock({
  value,
  label,
  accent = "olive",
  align = "left",
  style = {}
}) {
  const color = accent === "pink" ? "var(--pink-500)" : accent === "on-dark" ? "var(--text-on-dark)" : "var(--olive-600)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "var(--text-3xl)",
      lineHeight: 1,
      color
    },
    className: "ff-num"
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: accent === "on-dark" ? "color-mix(in srgb, var(--text-on-dark) 75%, transparent)" : "var(--text-muted)",
      lineHeight: 1.4
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/display/StepIndicator.jsx
try { (() => {
/** StepIndicator — numbered progress for the stepped patient onboarding. */
function StepIndicator({
  steps = [],
  current = 0,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 0,
      ...style
    }
  }, steps.map((label, i) => {
    const done = i < current,
      active = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "var(--weight-bold)",
        fontSize: "var(--text-sm)",
        background: done ? "var(--olive-600)" : active ? "var(--pink-500)" : "var(--sand-100)",
        color: done || active ? "#fff" : "var(--text-muted)",
        border: active ? "none" : done ? "none" : "1px solid var(--border-strong)",
        transition: "all var(--transition-base)"
      }
    }, done ? "✓" : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: active ? "var(--weight-bold)" : "var(--weight-medium)",
        color: active ? "var(--text-strong)" : "var(--text-muted)",
        whiteSpace: "nowrap"
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        minWidth: 24,
        background: i < current ? "var(--olive-500)" : "var(--border-strong)",
        margin: "0 8px",
        marginBottom: 22
      }
    }));
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// components/display/TrustChip.jsx
try { (() => {
/** TrustChip — an icon + label credential used in the institutional trust banner. */
function TrustChip({
  icon = "🛡️",
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      borderRadius: "var(--radius-pill)",
      background: "color-mix(in srgb, var(--white) 12%, transparent)",
      border: "1px solid color-mix(in srgb, var(--white) 22%, transparent)",
      color: "var(--text-on-dark)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: 1.3,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, icon), label);
}
Object.assign(__ds_scope, { TrustChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TrustChip.jsx", error: String((e && e.message) || e) }); }

// components/display/VerifiedBadge.jsx
try { (() => {
/**
 * VerifiedBadge — the trust cue shown on vetted campaigns.
 * Uses the dedicated trust-green (distinct from brand olive).
 */
function VerifiedBadge({
  label = "Verified Campaign",
  size = "md",
  style = {}
}) {
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: sm ? "3px 9px" : "5px 12px",
      borderRadius: "var(--radius-pill)",
      background: "var(--success-bg)",
      color: "var(--success)",
      border: "1px solid color-mix(in srgb, var(--success) 30%, transparent)",
      fontSize: sm ? "var(--text-xs)" : "var(--text-sm)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.3,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: sm ? 13 : 15,
    height: sm ? 13 : 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5l-8-3Z",
    fill: "currentColor",
    fillOpacity: "0.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9 12 2 2 4-4"
  })), label);
}
Object.assign(__ds_scope, { VerifiedBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/VerifiedBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/CampaignCard.jsx
try { (() => {
/**
 * CampaignCard — the discovery-grid card for a medical campaign.
 * Photo, verified badge, patient name + short need, progress, and CTA.
 */
function CampaignCard({
  name,
  need,
  raised,
  goal,
  verified = true,
  image,
  onGive,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: 0,
    style: {
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "16 / 10",
      width: "100%",
      background: image ? `center/cover no-repeat url(${image})` : "linear-gradient(135deg, var(--olive-100), var(--pink-100))",
      display: "flex",
      alignItems: "flex-end",
      padding: 12
    }
  }, !image && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 40,
      opacity: 0.5
    },
    "aria-hidden": "true"
  }, "\uD83D\uDDBC\uFE0F"), verified && /*#__PURE__*/React.createElement(__ds_scope.VerifiedBadge, {
    size: "sm",
    style: {
      position: "relative",
      background: "var(--white)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)",
      marginBottom: 4
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, need)), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    raised: raised,
    goal: goal,
    height: 10,
    style: {
      marginTop: "auto"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.GiftCTA, {
    type: "give",
    block: true,
    onClick: onGive
  })));
}
Object.assign(__ds_scope, { CampaignCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/CampaignCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/AmountOption.jsx
try { (() => {
/**
 * AmountOption — a selectable preset gift amount tile with helper text.
 * Used on the donation box (₦5,000 / ₦25,000 / ₦100,000 / Custom).
 */
function AmountOption({
  amount,
  note,
  selected = false,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 2,
      textAlign: "left",
      width: "100%",
      cursor: "pointer",
      padding: "14px 16px",
      minHeight: "var(--tap-min)",
      borderRadius: "var(--radius-md)",
      border: `1.5px solid ${selected ? "var(--pink-500)" : "var(--border-strong)"}`,
      background: selected ? "var(--pink-50)" : "var(--white)",
      boxShadow: selected ? "var(--shadow-sm)" : "none",
      transition: "all var(--transition-base)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ff-num",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-bold)",
      fontSize: "var(--text-md)",
      color: selected ? "var(--pink-600)" : "var(--text-strong)"
    }
  }, amount), note && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: 1.35
    }
  }, note));
}
Object.assign(__ds_scope, { AmountOption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AmountOption.jsx", error: String((e && e.message) || e) }); }

// components/forms/FileUpload.jsx
try { (() => {
/**
 * FileUpload — dashed drop zone for medical documents / photos.
 * `secure` shows the private-to-clinical-team reassurance treatment.
 */
function FileUpload({
  label,
  hint,
  secure = false,
  icon = "📄",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, label, secure && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--success)",
      background: "var(--success-bg)",
      padding: "2px 8px",
      borderRadius: "var(--radius-pill)"
    }
  }, "\uD83D\uDD12 Private")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6,
      padding: "24px 16px",
      textAlign: "center",
      cursor: "pointer",
      border: "1.5px dashed var(--border-strong)",
      borderRadius: "var(--radius-md)",
      background: secure ? "var(--success-bg)" : "var(--surface-sunken)",
      transition: "border-color var(--transition-base), background var(--transition-base)"
    },
    onMouseOver: e => e.currentTarget.style.borderColor = "var(--olive-400)",
    onMouseOut: e => e.currentTarget.style.borderColor = "var(--border-strong)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    },
    "aria-hidden": "true"
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--olive-700)"
    }
  }, "Tap to upload or drag a file here"), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: 1.4,
      maxWidth: 360
    }
  }, hint)));
}
Object.assign(__ds_scope, { FileUpload });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FileUpload.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — labelled text field with optional helper/error text. */
function Input({
  label,
  helper,
  error,
  prefix,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      background: "var(--white)",
      border: `1.5px solid ${error ? "var(--danger)" : "var(--border-strong)"}`,
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      transition: "border-color var(--transition-base), box-shadow var(--transition-base)"
    },
    onFocus: e => (e.currentTarget.style.borderColor = "var(--olive-500)", e.currentTarget.style.boxShadow = "var(--ring-olive)"),
    onBlur: e => (e.currentTarget.style.borderColor = error ? "var(--danger)" : "var(--border-strong)", e.currentTarget.style.boxShadow = "none")
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "0 4px 0 14px",
      color: "var(--text-muted)",
      fontWeight: "var(--weight-semibold)"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      padding: prefix ? "13px 14px 13px 4px" : "13px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      minHeight: "var(--tap-min)"
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)",
      lineHeight: 1.4
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select — native select styled to match the form system. */
function Select({
  label,
  helper,
  options = [],
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    style: {
      width: "100%",
      appearance: "none",
      border: "1.5px solid var(--border-strong)",
      borderRadius: "var(--radius-md)",
      padding: "13px 40px 13px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--white)",
      minHeight: "var(--tap-min)",
      cursor: "pointer",
      outline: "none"
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)"
    }
  }, "\u25BE")), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — for campaign stories and updates. */
function Textarea({
  label,
  helper,
  rows = 5,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    style: {
      border: "1.5px solid var(--border-strong)",
      borderRadius: "var(--radius-md)",
      padding: "13px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-base)",
      color: "var(--text-strong)",
      background: "var(--white)",
      resize: "vertical",
      lineHeight: "var(--leading-normal)",
      outline: "none",
      transition: "border-color var(--transition-base), box-shadow var(--transition-base)"
    },
    onFocus: e => (e.currentTarget.style.borderColor = "var(--olive-500)", e.currentTarget.style.boxShadow = "var(--ring-olive)"),
    onBlur: e => (e.currentTarget.style.borderColor = "var(--border-strong)", e.currentTarget.style.boxShadow = "none")
  }, rest)), helper && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: 1.4
    }
  }, helper));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
/** Toggle — pill switch, used for the "Give anonymously" privacy control. */
function Toggle({
  checked = false,
  onChange,
  label,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => onChange && onChange(!checked),
    style: {
      width: 48,
      height: 28,
      borderRadius: "var(--radius-pill)",
      flexShrink: 0,
      background: checked ? "var(--olive-600)" : "var(--sand-300)",
      position: "relative",
      transition: "background var(--transition-base)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 23 : 3,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--transition-base)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/extras.jsx
try { (() => {
/* KindGifts marketing — Partner Hospitals / Impact Stories / About & FAQ. */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    Card,
    Badge,
    VerifiedBadge,
    Button,
    WhatsAppButton,
    GiftCTA
  } = NS;
  const Icon = window.KGIcon;
  const wrap = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px"
  };
  const Eyebrow = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: ".1em",
      color: "var(--pink-500)",
      marginBottom: 14
    }
  }, children);
  const H2 = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(28px,4vw,42px)",
      fontWeight: 600,
      color: "var(--text-strong)",
      lineHeight: 1.1,
      letterSpacing: "-.02em",
      ...style
    }
  }, children);
  function Partners() {
    const hospitals = [["Lagos University Teaching Hospital", "Oncology Centre", "Lagos", "hospital"], ["Sebeccly Cancer Centre", "Comprehensive Cancer Care", "Lagos", "heart-pulse"], ["National Hospital Abuja", "Radiotherapy & Diagnostics", "Abuja", "hospital"], ["University College Hospital", "Oncology & Surgery", "Ibadan", "hospital"], ["Lakeshore Cancer Center", "Medical Oncology", "Lagos", "heart-pulse"], ["Aminu Kano Teaching Hospital", "Radiotherapy Unit", "Kano", "hospital"], ["Me Cure Diagnostics", "Imaging & Pathology Lab", "Lagos", "microscope"], ["Clina-Lancet Laboratories", "Accredited Diagnostic Lab", "Lagos", "microscope"]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--olive-50)",
        padding: "56px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 780,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Partner Hospitals"), /*#__PURE__*/React.createElement(H2, null, "Funds go directly to accredited care."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 16
      }
    }, "KindGifts disburses to treatment centres \u2014 never personal accounts. These are the partnered hospitals, oncology centres, and diagnostic labs where gifts become care."))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "48px 24px 72px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
        gap: 18
      }
    }, hospitals.map(([n, t, city, ic]) => /*#__PURE__*/React.createElement(Card, {
      key: n,
      interactive: true,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "var(--radius-md)",
        background: "var(--olive-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "var(--olive-600)"
    })), /*#__PURE__*/React.createElement(VerifiedBadge, {
      size: "sm",
      label: "Accredited"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.2
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        display: "flex",
        gap: 5,
        alignItems: "center",
        marginTop: "auto"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 14,
      color: "var(--text-muted)"
    }), city))))));
  }
  function Stories() {
    const stories = [["Baby Chidi's surgery", "Recovered", "Thanks to 340 gifts, baby Chidi's heart surgery was fully funded. He is home and thriving with his family.", "👶🏾"], ["Dr. Lami completed radiotherapy", "In remission", "After 25 sessions funded by the community, Lami has finished treatment and returned to her clinic.", "👩🏾‍⚕️"], ["Emeka's chemotherapy", "Ongoing · fully funded", "Emeka's 6-month chemo plan is fully funded and underway. He shares weekly updates with his 1,200 donors.", "🧑🏾"], ["Mama Grace's dialysis", "Recovered", "The village rallied ₦8.4M for a year of dialysis. Mama Grace is stable and back to her market stall.", "👵🏾"]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--pink-50)",
        padding: "56px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 780,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Impact Stories"), /*#__PURE__*/React.createElement(H2, null, "Gifts in action."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 16
      }
    }, "Read the beautiful stories of recovery, healing, and hope made possible by a community that cared."))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "48px 24px 72px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
        gap: 20
      }
    }, stories.map(([t, status, body, emoji], i) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      interactive: true,
      padding: 0,
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        aspectRatio: "16/10",
        background: "var(--olive-100)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.KG_PHOTO(i % 2 === 0 ? window.KGP.community : window.KGP.hero, 560, 350, "entropy"),
      alt: t,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 12,
        bottom: 12,
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "rgba(255,255,255,.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 22,
        boxShadow: "var(--shadow-sm)"
      }
    }, emoji)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "\u2713 ", status), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--text-body)"
      }
    }, body)))))));
  }
  function About() {
    const faqs = [["Are there platform fees?", "KindGifts is free to join — no application or subscription fee. We retain a 7–10% nonprofit support fee plus a 2% processing fee to keep the platform secure, verified, and sustainable."], ["How do I upload my medical documents securely?", "Medical reports are uploaded to our private clinical verification team only. They are never posted publicly on your campaign page — they simply let us mark your campaign as verified."], ["Can I donate anonymously?", "Yes. Every donation flow includes a 'Hide my name' toggle so you can give anonymously while still receiving your receipt by email."], ["When are funds released?", "Full verification is triggered at ₦500,000 raised. After KYC, the Guarantors' Form, and clinical audit pass our bi-weekly board review, 100% of funds are released directly to the partner hospital."]];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "56px 24px 72px",
        maxWidth: 820
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "About & FAQ"), /*#__PURE__*/React.createElement(H2, null, "About KindGifts by Sebeccly."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 16
      }
    }, "Established in 2006, Sebeccly Cancer Care is a trusted Nigerian nonprofit dedicated to expanding access to life-saving treatment. KindGifts is its medical crowdfunding platform \u2014 merging AI pre-vetting, corporate KYC, independent medical oversight, and tier-1 bank escrow into the most secure medical crowdfunding ecosystem in the region."), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 600,
        color: "var(--text-strong)",
        margin: "40px 0 16px"
      }
    }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, faqs.map(([q, a]) => /*#__PURE__*/React.createElement(FAQ, {
      key: q,
      q: q,
      a: a
    }))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 32,
        background: "var(--olive-50)",
        border: "none",
        display: "flex",
        gap: 16,
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Still have questions?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        color: "var(--text-body)",
        fontSize: 14
      }
    }, "Chat with our empathetic support team instantly.")), /*#__PURE__*/React.createElement(WhatsAppButton, {
      label: "Chat with us on WhatsApp"
    })));
  }
  function FAQ({
    q,
    a
  }) {
    const [open, setOpen] = React.useState(false);
    return /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(o => !o),
      style: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        padding: "18px 20px",
        background: "none",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, q, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pink-500)",
        transform: open ? "rotate(45deg)" : "none",
        transition: "transform .2s",
        fontSize: 22,
        lineHeight: 1
      }
    }, "+")), open && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 20px 18px",
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, a));
  }
  function Transparency() {
    const records = [["Radiotherapy — 20 sessions", "LUTH Oncology", "₦7,000,000", "Mar 2026", "Ada O."], ["Chemotherapy — cycles 1–3", "UCH Ibadan", "₦3,600,000", "Feb 2026", "Emeka N."], ["Dialysis — 6 months", "National Hospital Abuja", "₦4,200,000", "Jan 2026", "Grace B."], ["Mastectomy & recovery", "Lakeshore Cancer Center", "₦2,800,000", "Jan 2026", "Anonymous"], ["CT & PET diagnostics", "Me Cure Diagnostics", "₦850,000", "Dec 2025", "Tunde A."], ["Immunotherapy — dose 1", "Sebeccly Cancer Centre", "₦5,400,000", "Dec 2025", "Anonymous"]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--olive-700)",
        color: "var(--cream)",
        padding: "56px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 820,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".1em",
        color: "var(--pink-300)",
        marginBottom: 14
      }
    }, "Public Transparency Hub"), /*#__PURE__*/React.createElement(H2, {
      style: {
        color: "var(--cream)"
      }
    }, "Proof of life. Proof of impact."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "color-mix(in srgb, var(--cream) 84%, transparent)",
        marginTop: 16
      }
    }, "After funds are disbursed, beneficiaries upload hospital receipts confirming utilisation. Every record below is vetted and anonymized \u2014 so the village that gave can audit exactly where its kindness went."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 36,
        justifyContent: "center",
        marginTop: 28,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 600
      },
      className: "ff-num"
    }, "\u20A62.4B+"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .8
      }
    }, "Disbursed to care")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 600
      },
      className: "ff-num"
    }, "1,240"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .8
      }
    }, "Verified utilisation reports")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 600
      },
      className: "ff-num"
    }, "100%"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        opacity: .8
      }
    }, "Routed to hospitals"))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "48px 24px 72px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 16,
        color: "var(--text-muted)",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "file-check",
      size: 16,
      color: "var(--success)"
    }), " Showing latest verified utilisation records"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
        gap: 16
      }
    }, records.map(([use, facility, amt, date, ben], i) => /*#__PURE__*/React.createElement(Card, {
      key: i,
      interactive: true,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(VerifiedBadge, {
      size: "sm",
      label: "Receipt verified"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, date)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 18,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.2
      }
    }, use), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 13.5,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "hospital",
      size: 15,
      color: "var(--olive-600)"
    }), facility), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: 10,
        marginTop: "auto"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Beneficiary: ", ben), /*#__PURE__*/React.createElement("span", {
      className: "ff-num",
      style: {
        fontWeight: 700,
        color: "var(--pink-600)"
      }
    }, amt)), /*#__PURE__*/React.createElement("button", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        background: "var(--sand-50)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        padding: "9px 0",
        fontSize: 13.5,
        fontWeight: 600,
        color: "var(--olive-700)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "eye",
      size: 15,
      color: "var(--olive-700)"
    }), " View anonymized receipt"))))));
  }
  function ProofPoints({
    go
  }) {
    const points = [["shield-check", "20 Years of Institutional Trust", "Built and managed by Sebeccly Cancer Care, a registered nonprofit with a flawless 20-year track record of clinical advocacy and patient support since 2006."], ["scan-face", "AI-Driven Fraud Pre-Vetting", "We deploy advanced AI scanning models to instantly analyze uploaded medical bills and documents, automatically flagging digital alterations, duplicate invoices, or metadata discrepancies."], ["id-card", "Government-Level Identity Vetting", "Every beneficiary undergoes strict administrative KYC, integrating official National Identity Number (NIN) validation to completely eliminate identity fraud."], ["stethoscope", "Independent Clinical Audits", "We don't just read paperwork; a dedicated independent clinical partner team meticulously audits every medical report, treatment plan, and hospital bill for clinical accuracy."], ["heart-handshake", "Direct Patient Consultations", "Before a single kobo is approved for release, our medical partners conduct direct, empathetic consultations with the patient to verify their active care timeline."], ["users", "Bi-Weekly Board Oversight", "A specialized medical and compliance board meets every 14 days to collectively review, debate, and formally approve or decline pending applications."], ["layers", "Milestone-Based Disbursements", "To prevent fund mismanagement, payouts are restricted to a strict two-stage tranche system (starting with an initial 35%), keeping fundraising tightly aligned with active care."], ["file-check", "Mandatory Utilization Audits", "To unlock the second stage of funding, patients must submit verifiable hospital receipts and updated medical reports, proving 100% of the first tranche went directly to care."], ["eye", "Public Transparency Reporting", "Every campaign features a live Public Disbursement Hub where anonymized hospital receipts and utilization reports are uploaded, allowing donors to track the exact real-world impact of their gift."], ["landmark", "Absolute Donor Escrow Security", "If a campaign is flagged or declined, 100% of the raised funds are legally safeguarded — either routed to another strictly verified indigent patient or returned directly to the donors."]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--olive-700)",
        color: "var(--cream)",
        padding: "64px 0 56px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 820,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".1em",
        color: "var(--pink-300)",
        marginBottom: 14
      }
    }, "The 10 proof points behind every gift"), /*#__PURE__*/React.createElement(H2, {
      style: {
        color: "var(--cream)"
      }
    }, "Why our vetting process reflects best practices."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "color-mix(in srgb, var(--cream) 84%, transparent)",
        marginTop: 16
      }
    }, "Every gift on KindGifts passes through ten deliberate layers of verification, oversight, and accountability \u2014 from AI fraud pre-vetting to milestone-based disbursements and public receipts. Here is exactly how your kindness is protected."))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "56px 24px 72px",
        maxWidth: 900
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, points.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      style: {
        display: "flex",
        gap: 20,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-num",
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 30,
        fontWeight: 600,
        color: "var(--pink-500)",
        lineHeight: 1
      }
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "var(--radius-md)",
        background: "var(--olive-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 24,
      color: "var(--olive-600)"
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.2,
        marginBottom: 6
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, d))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 28,
        background: "var(--olive-50)",
        border: "none",
        display: "flex",
        gap: 16,
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Give with total confidence."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        color: "var(--text-body)",
        fontSize: 14.5
      }
    }, "Ten layers of protection stand behind every campaign.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      size: "md",
      onClick: () => go && go("campaign"),
      style: {
        height: 46
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      pill: true,
      onClick: () => go && go("transparency")
    }, "View the Transparency Hub")))));
  }
  window.KGExtra = {
    Partners,
    Stories,
    About,
    Transparency,
    ProofPoints
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/extras.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/screens.jsx
try { (() => {
/* KindGifts marketing — Home / How It Works / Campaign screens. */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    GiftCTA,
    Button,
    WhatsAppButton,
    Card,
    Badge,
    VerifiedBadge,
    ProgressBar,
    TrustChip,
    StatBlock,
    Money,
    Input
  } = NS;
  const Icon = window.KGIcon;
  const wrap = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px"
  };
  const Eyebrow = ({
    children,
    dark
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: ".1em",
      color: dark ? "var(--pink-300)" : "var(--pink-500)",
      marginBottom: 14
    }
  }, children);
  const H2 = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "clamp(28px, 4vw, 42px)",
      fontWeight: 600,
      color: "var(--text-strong)",
      lineHeight: 1.1,
      letterSpacing: "-.02em",
      ...style
    }
  }, children);

  /* ============ HOME ============ */
  function Home({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "radial-gradient(120% 120% at 80% 0%, var(--olive-50), var(--cream) 55%)",
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: "grid",
        gridTemplateColumns: "1.05fr 0.95fr",
        gap: 48,
        alignItems: "center",
        padding: "64px 24px 72px"
      },
      className: "kg-hero-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Simple \xB7 Transparent \xB7 Secure"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "clamp(38px, 5.4vw, 60px)",
        fontWeight: 600,
        lineHeight: 1.04,
        letterSpacing: "-.025em",
        color: "var(--text-strong)"
      }
    }, "Medical Crowdfunding, Powered by ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--pink-500)"
      }
    }, "Community Kindness.")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.6,
        color: "var(--text-body)",
        marginTop: 20,
        maxWidth: 520
      }
    }, "No one should face a medical crisis alone. KindGifts connects patients in need of critical cancer and healthcare funding with a global community ready to support them. Backed by Sebeccly Cancer Care's 20-year legacy of trust, we transform medical bills into gifts of hope."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        marginTop: 30,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "need",
      size: "lg",
      onClick: () => go("need")
    }), /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      size: "lg",
      onClick: () => go("campaign")
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 22,
        alignItems: "center",
        color: "var(--text-muted)",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(VerifiedBadge, {
      size: "sm",
      label: "Every campaign verified"
    }), " \xB7 ", /*#__PURE__*/React.createElement("span", null, "100% of vetted funds go to care"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "4/5",
        borderRadius: "var(--radius-2xl)",
        background: "var(--olive-100)",
        boxShadow: "var(--shadow-lg)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.KG_PHOTO(window.KGP.hero, 800, 1000, "faces"),
      alt: "Community holding hands in Lagos, Nigeria",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement(Card, {
      padding: 16,
      style: {
        position: "absolute",
        left: -20,
        bottom: 28,
        width: 230,
        boxShadow: "var(--shadow-lg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginBottom: 8,
        fontWeight: 600
      }
    }, "Ada's radiotherapy"), /*#__PURE__*/React.createElement(ProgressBar, {
      raised: 6500000,
      goal: 10500000,
      height: 9
    }))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--olive-700)",
        color: "var(--text-on-dark)",
        padding: "56px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: 44,
        alignItems: "center"
      },
      className: "kg-trust-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      dark: true
    }, "Institutional-grade trust"), /*#__PURE__*/React.createElement(H2, {
      style: {
        color: "var(--cream)",
        fontSize: 30
      }
    }, "Protecting your generosity every step of the way."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "color-mix(in srgb, var(--cream) 84%, transparent)",
        marginTop: 14,
        lineHeight: 1.65,
        fontSize: 15
      }
    }, "Established in 2006, Sebeccly Cancer Care is a trusted nonprofit dedicated to expanding access to life-saving treatment. Backed by its 20-year legacy, KindGifts merges advanced AI pre-vetting and corporate KYC with independent medical oversight."), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "color-mix(in srgb, var(--cream) 84%, transparent)",
        marginTop: 12,
        lineHeight: 1.65,
        fontSize: 15
      }
    }, "Through alliances with tier-1 commercial banks, accredited auditors, and fintech compliance partners, every transaction is legally safeguarded and fully auditable \u2014 all the way to the hospital bill.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".08em",
        color: "var(--pink-300)",
        marginBottom: 14
      }
    }, "10 proof points behind every gift"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 10
      }
    }, [["shield-check", "20 Years of Institutional Trust"], ["scan-face", "AI-Driven Fraud Pre-Vetting"], ["id-card", "Government-Level Identity Vetting"], ["stethoscope", "Independent Clinical Audits"], ["heart-handshake", "Direct Patient Consultations"], ["users", "Bi-Weekly Board Oversight"], ["layers", "Milestone-Based Disbursements"], ["file-check", "Mandatory Utilization Audits"], ["eye", "Public Transparency Reporting"], ["landmark", "Absolute Donor Escrow Security"]].map(([ic, l]) => /*#__PURE__*/React.createElement(TrustChip, {
      key: l,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 16,
        color: "var(--cream)"
      }),
      label: l
    }))), /*#__PURE__*/React.createElement("button", {
      onClick: () => go("proof"),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 18,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14.5,
        fontWeight: 700,
        color: "var(--pink-300)"
      }
    }, "Learn more about the 10 proof points ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16,
      color: "var(--pink-300)"
    })))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "72px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: "0 auto",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "The KindGifts philosophy"), /*#__PURE__*/React.createElement(H2, null, "It takes a village to raise funds \u2014 but the village needs structure to survive."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 18
      }
    }, "By combining fintech compliance, clinical audits, and strict escrow banking, KindGifts ensures every Naira donated is mathematically and clinically guaranteed to go toward saving a real human life. We don't stop people from giving \u2014 we give them a reason to trust again.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 20,
        marginTop: 44
      },
      className: "kg-3col"
    }, [["shield-check", "Fintech Compliance", "KYC / NIN / BVN verification bypasses middlemen and proxy accounts."], ["stethoscope", "Healthtech Oversight", "AI document checks and independent clinical audits confirm every bill."], ["landmark", "Escrow Banking", "Funds route directly to partner hospitals — never a personal lump sum."]].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
      key: t,
      interactive: true,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 46,
        height: 46,
        borderRadius: "var(--radius-md)",
        background: "var(--olive-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 24,
      color: "var(--olive-600)"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--text-body)"
      }
    }, d))))), /*#__PURE__*/React.createElement(ScamStory, null), /*#__PURE__*/React.createElement(FraudTable, null), /*#__PURE__*/React.createElement(ProcessFlow, null), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--ivory)",
        padding: "72px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 620,
        margin: "0 auto 44px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Getting started is simple"), /*#__PURE__*/React.createElement(H2, null, "Three steps from crisis to care.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 24
      },
      className: "kg-3col"
    }, [["1", "Launch Your Campaign", "Set up your page and share your unique link with family, friends, and WhatsApp communities in under 10 minutes."], ["2", "Secure Verification", "Our clinical and KYC teams review medical reports behind the scenes to protect privacy and prevent fraud."], ["3", "Direct-to-Care Payouts", "Funds are disbursed in full, directly to partnered hospitals and oncology centres, to secure treatment."]].map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "var(--pink-500)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 18,
        fontFamily: "var(--font-display)"
      }
    }, n), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--text-body)"
      }
    }, d)))))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "24px 24px 72px"
      }
    }, /*#__PURE__*/React.createElement(PathsExplainer, {
      go: go
    }), /*#__PURE__*/React.createElement(Card, {
      padding: 0,
      style: {
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        marginTop: 24
      },
      className: "kg-fee-grid"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 44
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Our commitment"), /*#__PURE__*/React.createElement(H2, {
      style: {
        fontSize: 30
      }
    }, "Low costs, maximum impact."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 14
      }
    }, "KindGifts is free to join \u2014 no application or subscription fee. To keep the platform secure and sustainable, we retain a ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-strong)"
      }
    }, "7\u201310% nonprofit support fee"), " plus a standard ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-strong)"
      }
    }, "2% processing fee"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      onClick: () => go("campaign")
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--olive-700)",
        color: "var(--cream)",
        padding: 44,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 46,
        fontWeight: 600
      }
    }, "2-for-1"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        lineHeight: 1.6,
        fontSize: 15,
        color: "color-mix(in srgb, var(--cream) 85%, transparent)"
      }
    }, "For every \u20A61 contributed through fees, Sebeccly raises an average of \u20A61 more for patients \u2014 through corporate partnerships, matching-gift campaigns, and fundraising vouchers.")))), /*#__PURE__*/React.createElement(ClosingCTA, {
      go: go
    }));
  }
  function ClosingCTA({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "linear-gradient(140deg, var(--pink-600) 0%, var(--pink-800) 100%)",
        color: "#fff",
        padding: "72px 0",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "clamp(30px,4.5vw,46px)",
        fontWeight: 600,
        lineHeight: 1.1,
        color: "#fff"
      }
    }, "Be a part of the miracle today."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 18,
        lineHeight: 1.6,
        marginTop: 16,
        color: "color-mix(in srgb, #fff 92%, transparent)"
      }
    }, "Whether you are starting your journey toward healing or lifting someone else's burden, your community is waiting for you."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        justifyContent: "center",
        marginTop: 28,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => go("need"),
      style: {
        height: 56,
        padding: "0 32px",
        borderRadius: "var(--radius-pill)",
        border: "1.5px solid rgba(255,255,255,.6)",
        background: "rgba(255,255,255,.12)",
        color: "#fff",
        fontWeight: 700,
        fontSize: 17,
        cursor: "pointer"
      }
    }, "\uD83C\uDF81 Need a Gift"), /*#__PURE__*/React.createElement("button", {
      onClick: () => go("campaign"),
      style: {
        height: 56,
        padding: "0 32px",
        borderRadius: "var(--radius-pill)",
        border: "none",
        background: "#fff",
        color: "var(--pink-600)",
        fontWeight: 700,
        fontSize: 17,
        cursor: "pointer",
        boxShadow: "var(--shadow-md)"
      }
    }, "\u2764\uFE0F Give a Gift"))));
  }

  /* ---- Our Why: the anatomy of a medical scam (Save Ify) ---- */
  function ScamStory() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--olive-800)",
        color: "var(--cream)",
        padding: "72px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 940
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".1em",
        color: "var(--pink-300)",
        marginBottom: 14
      }
    }, "Our why \xB7 a short story"), /*#__PURE__*/React.createElement(H2, {
      style: {
        color: "var(--cream)"
      }
    }, "The anatomy of a medical scam."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginTop: 22,
        fontSize: 16.5,
        lineHeight: 1.75,
        color: "color-mix(in srgb, var(--cream) 88%, transparent)",
        maxWidth: 900
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "A viral post tore through Nigerian social media. An influencer with over two million followers posted a tearful video from a hospital room, beside a young woman said to be fighting stage-3 breast cancer, holding a sign: ", /*#__PURE__*/React.createElement("em", null, "\"Save Ify. \u20A610 million needed for urgent surgery.\"")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Moved by the plea, kindhearted Nigerians rallied. Within 48 hours \u2014 from executives giving \u20A6500,000 to market women sending their last \u20A61,000 \u2014 the target was surpassed, reaching ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--cream)"
      }
    }, "\u20A614 million"), ". Then the silence was deafening. No updates, no receipts, no photos of recovery."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "When journalists investigated, the truth broke Ify's heart. The influencer had taken \u20A67 million for a car down-payment and sent Ify just \u20A6500,000 (4%). Ify had already completed surgery months earlier under a free state initiative \u2014 the \"bills\" posted online were digitally altered: date, hospital name, and fees all changed. She had shared her real documents in good faith; they were manipulated and used to raise money behind her back."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0
      }
    }, "Elsewhere, a genuine patient crowdfunded \u20A65 million for radiotherapy that cost \u20A62.5 million. Under family pressure, he diverted \u20A63 million to rent and school fees and abandoned treatment. The village had rallied \u2014 but without structure and accountability, the village had been deceived. The next week, a truly indigent patient couldn't raise \u20A6200,000 for life-saving chemotherapy."), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--cream)",
        fontWeight: 600
      }
    }, "KindGifts doesn't stop people from giving. We give them a reason to trust again \u2014 replacing loose, unregulated appeals with a strict, AI-powered, medically audited pipeline, so every single Naira goes exactly where it belongs."))));
  }

  /* ---- How KindGifts prevents each scam ---- */
  function FraudTable() {
    const rows = [["Document alteration & bill inflation", "Scammers edit old medical reports — changing names or multiplying invoice costs to pocket the excess.", "AI pre-vetting scans document metadata to detect manipulation, then independent clinical partners cross-verify bills directly with the hospital."], ["Deceptive middlemen & influencer \u201ccuts\u201d", "Third-party fundraisers exploit a patient's story, open a personal account, and siphon off large \u201cmanagement fees.\u201d", "Direct patient KYC bypasses middlemen entirely: campaigns require the beneficiary's NIN and BVN, and funds sit in tier-1 bank escrow."], ["Fund diversion for non-medical use", "Once a lump sum hits a personal account, funds get spent on rent, fees, or luxuries — leaving treatment incomplete.", "Funds are never released to a personal account before vetting. After the ₦500,000 threshold and full review, money routes to the treating hospital and vetted beneficiary accounts."], ["Cash refund schemes", "Patients who raised money externally demand cash \u201crefunds\u201d from cancer centres for treatment they no longer need.", "Under our compliance framework, funds are designated for active care. If a plan changes, funds are legally locked and protected under escrow policy."], ["\u201cGhost campaigns\u201d & no accountability", "Once money is raised, the creator goes silent — donors never learn whether the patient was treated.", "After disbursement, beneficiaries must upload hospital receipts confirming utilisation. These are published live on the Public Transparency Hub for donors to audit."]];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "72px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 720,
        margin: "0 auto 40px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Countermeasures"), /*#__PURE__*/React.createElement(H2, null, "How we shut down each scam."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 14
      }
    }, "KindGifts cuts off the exact loopholes online scammers use to exploit philanthropic people.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, rows.map(([scam, wild, fix], i) => /*#__PURE__*/React.createElement(Card, {
      key: scam,
      padding: 0,
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.1fr 1.1fr 1.3fr"
      },
      className: "kg-fraud-row"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22,
        borderRight: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "var(--pink-50)",
        color: "var(--pink-600)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 13,
        flexShrink: 0
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 15.5,
        color: "var(--text-strong)",
        lineHeight: 1.35
      }
    }, scam))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22,
        borderRight: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--text-muted)",
        marginBottom: 6
      }
    }, "In the wild"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--text-body)"
      }
    }, wild)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22,
        background: "var(--olive-50)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--success)",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 14,
      color: "var(--success)"
    }), " How we prevent it"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.6,
        color: "var(--text-strong)"
      }
    }, fix)))))));
  }

  /* ---- Operational process flow (5 steps + escrow safeguard) ---- */
  function ProcessFlow() {
    const steps = [["scan-face", "AI Pre-Vetting & Rapid Launch", "Within 60 seconds", "On upload, our AI scans medical reports and invoices — analysing metadata for alterations, checking for duplicate invoice numbers, and flagging discrepancies before a campaign goes live."], ["id-card", "Bank & Identity KYC Compliance", "Triggered at ₦500,000", "NIN and BVN are validated against government databases to eliminate alias and proxy fraud. Full vetting triggers automatically at the ₦500,000 milestone, and the beneficiary submits a Guarantors' Form."], ["stethoscope", "Independent Clinical Audit & Consultation", "Within 7 days", "Our clinical partners contact the treating oncologist and hospital directly to verify diagnosis and costs, with a gentle consultation to confirm the medical timeline — stripping away deceptive middlemen."], ["banknote", "Full Fund Disbursement", "100% payout to care", "Once approved by our bi-weekly medical and compliance board, funds release in full — routed through tier-1 banking partners directly to the verified healthcare facility."], ["eye", "Public Transparency Hub Audit", "Post-disbursement", "The patient uploads verified hospital receipts confirming utilisation. Anonymized receipts and reports are published openly, giving the village of donors real-time proof of impact."]];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--ivory)",
        padding: "72px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 900
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 720,
        margin: "0 auto 44px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "The operational process flow"), /*#__PURE__*/React.createElement(H2, null, "Enforcing donor integrity, end to end.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, steps.map(([ic, t, tag, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--olive-600)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "#fff"
    })), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        flex: 1,
        background: "var(--border-strong)",
        margin: "6px 0"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 30
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 12,
        fontWeight: 800,
        textTransform: "uppercase",
        letterSpacing: ".08em",
        color: "var(--pink-600)"
      }
    }, tag), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 21,
        fontWeight: 600,
        color: "var(--text-strong)",
        margin: "3px 0 0"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "8px 0 0",
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, d))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--info-bg)",
        borderRadius: "var(--radius-lg)",
        padding: 20,
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 22,
      color: "var(--info)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--sand-700)"
      }
    }, /*#__PURE__*/React.createElement("strong", null, "The escrow safeguard:"), " if a campaign fails vetting or is flagged for misrepresentation, funds are legally locked in escrow \u2014 never handed to applicants. They are returned to donors or rerouted to another strictly verified patient in urgent need."))));
  }

  /* ---- Two paths: patient vs supporter ---- */
  function PathsExplainer({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 620,
        margin: "0 auto 32px"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Give a gift today"), /*#__PURE__*/React.createElement(H2, {
      style: {
        fontSize: 32
      }
    }, "Two ways to stand with a patient.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24
      },
      className: "kg-3col"
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        borderTop: "4px solid var(--olive-500)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 34
      }
    }, "\uD83C\uDF81"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "If you are a patient: you need a gift"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, "Share your medical journey with a secure, supportive network. Setting up a campaign is entirely free. We walk with you to help secure the funds needed for your radiotherapy, surgery, and recovery."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "need",
      onClick: () => go("need")
    }))), /*#__PURE__*/React.createElement(Card, {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14,
        borderTop: "4px solid var(--pink-500)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 34
      }
    }, "\u2764\uFE0F"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "If you are a supporter: you give a gift"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15.5,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, "Browse 100% verified medical campaigns. Your donation isn't just a transaction \u2014 it is a life-saving gift that goes directly toward radiotherapy, surgery, or related patient welfare."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      onClick: () => go("campaign")
    })))));
  }

  /* ============ HOW IT WORKS ============ */
  function HowItWorks({
    go
  }) {
    const [tab, setTab] = React.useState("policy");
    const tabs = [["policy", "Operational Policy"], ["pricing", "Pricing"], ["sustainability", "Sustainability"]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--olive-50)",
        padding: "56px 0 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 820,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "How KindGifts works"), /*#__PURE__*/React.createElement(H2, null, "Launch fast. Verify to disburse."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 16,
        fontStyle: "italic"
      }
    }, "\"If you want to walk fast, walk alone. If you want to walk far, walk with people.\" \u2014 African proverb")), /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: "flex",
        justifyContent: "center",
        gap: 4,
        marginTop: 32,
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, tabs.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setTab(k),
      style: {
        background: "none",
        border: "none",
        borderBottom: `3px solid ${tab === k ? "var(--pink-500)" : "transparent"}`,
        cursor: "pointer",
        padding: "14px 20px",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 700,
        color: tab === k ? "var(--text-strong)" : "var(--text-muted)"
      }
    }, l)))), /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "56px 24px",
        maxWidth: 880
      }
    }, tab === "policy" && /*#__PURE__*/React.createElement(Policy, null), tab === "pricing" && /*#__PURE__*/React.createElement(Pricing, {
      go: go
    }), tab === "sustainability" && /*#__PURE__*/React.createElement(Sustainability, {
      go: go
    })), /*#__PURE__*/React.createElement(ClosingCTA, {
      go: go
    }));
  }
  function Policy() {
    const steps = [["timer", "Fast Launch", "Under 10 minutes", "Set up your profile, share your story, upload your ID and medical documents, and launch your page immediately."], ["shield-check", "Secure Verification", "Triggered at ₦500,000", "We check your ID and bank details (KYC/NIN/BVN), you submit a Guarantors' Form, and our medical partners vet your clinical documents with a gentle consultation."], ["banknote", "Full Fund Release", "100% payout to care", "Once approved by our bi-weekly medical board, verified funds are released in full — routed directly to partner hospitals."], ["eye", "Public Transparency Hub", "Post-disbursement", "You upload receipts confirming utilisation. Anonymized records are published live so donors see real-time proof of impact."]];
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--success-bg)",
        border: "1px solid color-mix(in srgb, var(--success) 25%, transparent)",
        borderRadius: "var(--radius-lg)",
        padding: "16px 20px",
        display: "flex",
        gap: 12,
        alignItems: "center",
        marginBottom: 36
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 22,
      color: "var(--success)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15,
        color: "var(--sand-700)",
        lineHeight: 1.5
      }
    }, "Full verification is triggered once a campaign reaches ", /*#__PURE__*/React.createElement("strong", null, "\u20A6500,000"), " in donations \u2014 using a three-pronged process: ", /*#__PURE__*/React.createElement("strong", null, "KYC"), ", ", /*#__PURE__*/React.createElement("strong", null, "Clinical Audit"), ", and the ", /*#__PURE__*/React.createElement("strong", null, "Guarantors' Form"), ".")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 0
      }
    }, steps.map(([ic, t, tag, d], i) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "var(--olive-600)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 22,
      color: "#fff"
    })), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 2,
        flex: 1,
        background: "var(--border-strong)",
        margin: "6px 0"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingBottom: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, t), /*#__PURE__*/React.createElement(Badge, {
      tone: "pink"
    }, tag)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "8px 0 0",
        fontSize: 15,
        lineHeight: 1.65,
        color: "var(--text-body)"
      }
    }, d))))));
  }
  function Pricing({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(H2, null, "Transparent pricing, protected fundraising."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, "The platform is completely free to join \u2014 we never charge an application or subscription fee. To keep operations sustainable, we retain a ", /*#__PURE__*/React.createElement("strong", null, "7\u201310% nonprofit support fee"), " on donations, plus a standard ", /*#__PURE__*/React.createElement("strong", null, "2% transaction processing fee"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 16
      },
      className: "kg-3col"
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      value: "Free",
      label: "To launch a campaign"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      accent: "pink",
      value: "7\u201310%",
      label: "Nonprofit support fee"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      value: "2%",
      label: "Processing fee"
    }))), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 15,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, "These fees fund our AI pre-vetting infrastructure, secure tier-1 banking escrows, independent audits, and clinical verification boards \u2014 and fuel the marketing and corporate-partnership engines that turn every \u20A61 in fees into an average of \u20A62 in additional mobilized funding for patients."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      onClick: () => go("campaign")
    })));
  }
  function Sustainability({
    go
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(H2, null, "Keep KindGifts sustainable."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, "Our primary mission is that your generosity goes directly to patients who need it most \u2014 so supporting our operations is entirely optional. We always want the community to prioritise funding active medical campaigns."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--text-body)"
      }
    }, "But maintaining an institutional-grade, AI-vetted ecosystem requires resources. If you'd like to make a voluntary donation to keep the platform operational and free for indigent patients, we deeply appreciate your extra gift."), /*#__PURE__*/React.createElement(Card, {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        flexWrap: "wrap",
        background: "var(--olive-50)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Support the platform"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        color: "var(--text-body)",
        fontSize: 14
      }
    }, "Thank you for supporting the operations of KindGifts.")), /*#__PURE__*/React.createElement(Button, {
      variant: "action",
      pill: true,
      leadingIcon: /*#__PURE__*/React.createElement("span", null, "\u2764\uFE0F")
    }, "Donate to Sebeccly")));
  }

  /* ============ CAMPAIGN PAGE ============ */
  function Campaign({
    go
  }) {
    const [amt, setAmt] = React.useState(25000);
    const [custom, setCustom] = React.useState(false);
    const [customAmt, setCustomAmt] = React.useState("");
    const [anon, setAnon] = React.useState(false);
    const fmtAmt = s => {
      const n = Number(String(s).replace(/[^0-9]/g, ""));
      return n ? n.toLocaleString() : "";
    };
    const presets = [[5000, "Covers basic supportive medications"], [25000, "Contributes toward a radiotherapy session"], [100000, "Funds a major treatment session"]];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        ...wrap,
        padding: "40px 24px 72px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        window.location.href = "../webapp/index.html#discovery";
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--text-muted)",
        fontSize: 14,
        marginBottom: 20,
        display: "inline-flex",
        gap: 6,
        alignItems: "center",
        fontFamily: "var(--font-sans)"
      }
    }, "\u2190 Back to campaigns"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 40,
        alignItems: "start"
      },
      className: "kg-campaign-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: "16/9",
        borderRadius: "var(--radius-xl)",
        background: "var(--olive-100)",
        marginBottom: 20,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.KG_PHOTO(window.KGP.ada, 1000, 560, "faces"),
      alt: "Ada, patient",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        marginBottom: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(VerifiedBadge, null), /*#__PURE__*/React.createElement(Badge, {
      tone: "olive"
    }, "Oncology"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, "Lagos University Teaching Hospital")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.1
      }
    }, "Help Ada complete her radiotherapy"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 16
      }
    }, "Ada is a 34-year-old teacher and mother of two, diagnosed with stage-2 breast cancer. She has completed surgery and now needs 20 sessions of radiotherapy to finish her treatment. Every gift brings her one step closer to going home cancer-free."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.7,
        color: "var(--text-body)",
        marginTop: 12
      }
    }, "Funds go directly to LUTH's oncology unit once vetted. Thank you for standing with our family. \u2014 ", /*#__PURE__*/React.createElement("em", null, "The Okafor family")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 20
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      label: "Share Ada's story"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "link",
        size: 18
      })
    }, "Copy link"))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 88
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: 24,
      style: {
        boxShadow: "var(--shadow-md)"
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      raised: 6500000,
      goal: 10500000
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        margin: "12px 0 0",
        display: "flex",
        gap: 6,
        alignItems: "flex-start",
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 15,
      color: "var(--success)"
    }), " Verified campaign \xB7 funds go directly to the beneficiary in full once vetted, or to LUTH."), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border-subtle)",
        margin: "20px 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-strong)",
        marginBottom: 12
      }
    }, "Select gift amount"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, presets.map(([v, note]) => /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: () => {
        setAmt(v);
        setCustom(false);
      },
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 2,
        textAlign: "left",
        padding: "13px 16px",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        border: `1.5px solid ${amt === v && !custom ? "var(--pink-500)" : "var(--border-strong)"}`,
        background: amt === v && !custom ? "var(--pink-50)" : "var(--white)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "ff-num",
      style: {
        fontWeight: 700,
        fontSize: 18,
        color: amt === v && !custom ? "var(--pink-600)" : "var(--text-strong)"
      }
    }, "\u20A6", v.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, note))), /*#__PURE__*/React.createElement("button", {
      onClick: () => setCustom(true),
      style: {
        padding: "13px 16px",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        border: `1.5px solid ${custom ? "var(--pink-500)" : "var(--border-strong)"}`,
        background: custom ? "var(--pink-50)" : "var(--white)",
        fontWeight: 700,
        fontSize: 15,
        color: custom ? "var(--pink-600)" : "var(--text-strong)",
        textAlign: "left"
      }
    }, "Custom amount"), custom && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 16px",
        borderRadius: "var(--radius-md)",
        border: "1.5px solid var(--pink-500)",
        background: "var(--white)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "\u20A6"), /*#__PURE__*/React.createElement("input", {
      autoFocus: true,
      value: customAmt,
      onChange: e => setCustomAmt(fmtAmt(e.target.value)),
      inputMode: "numeric",
      placeholder: "Enter amount",
      className: "ff-num",
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        padding: "12px 0",
        fontFamily: "var(--font-sans)",
        fontSize: 18,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }))), /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        marginTop: 16,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.preventDefault();
        setAnon(a => !a);
      },
      style: {
        width: 44,
        height: 26,
        borderRadius: 999,
        background: anon ? "var(--olive-600)" : "var(--sand-300)",
        position: "relative",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 3,
        left: anon ? 21 : 3,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#fff",
        transition: "left .2s"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, "Hide my name (Give anonymously)")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      block: true,
      size: "lg",
      label: `Give ₦${custom ? customAmt || "0" : amt.toLocaleString()}`,
      onClick: () => {
        window.location.href = "../webapp/index.html#success";
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        textAlign: "center",
        margin: "12px 0 0"
      }
    }, "\uD83D\uDD12 Secured by tier-1 bank escrow \xB7 Paystack")))));
  }
  window.KGScreens = {
    Home,
    HowItWorks,
    Campaign
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/shell.jsx
try { (() => {
/* KindGifts marketing website — screens.
 * Composes DS primitives from the compiled bundle namespace + Lucide icons.
 * Attaches screen components to window for index.html to use. */
const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
const {
  GiftCTA,
  Button,
  WhatsAppButton,
  Card,
  Badge,
  VerifiedBadge,
  ProgressBar,
  TrustChip,
  StatBlock,
  Money
} = NS;
function Icon({
  name,
  size = 20,
  color = "currentColor",
  stroke = 2
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color,
          "stroke-width": stroke
        },
        nameAttr: "data-lucide"
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: "inline-flex",
      lineHeight: 0,
      color
    }
  });
}
window.KGIcon = Icon;
const wrap = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px"
};

/* ---------------- Header ---------------- */
function Header({
  route,
  go
}) {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [role, setRole] = React.useState("donor");
  React.useEffect(() => {
    try {
      setLoggedIn(localStorage.getItem("kg_loggedIn") === "1");
      setRole(localStorage.getItem("kg_role") || "donor");
    } catch (e) {}
  }, []);
  const links = [["how", "How It Works"], ["partners", "Partner Hospitals"], ["stories", "Impact Stories"], ["about", "About Us"]];
  const [open, setOpen] = React.useState(false);
  const goClose = k => {
    setOpen(false);
    go(k);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "color-mix(in srgb, var(--cream) 92%, transparent)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 72,
      padding: "0 24px 0 16px",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => goClose("home"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      lineHeight: 1,
      textAlign: "left",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo.png",
    alt: "KindGifts by Sebeccly",
    style: {
      height: 40,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap",
      justifyContent: "center"
    },
    className: "kg-desktop-nav"
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 12px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      whiteSpace: "nowrap",
      color: route === k ? "var(--olive-700)" : "var(--text-body)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      flexShrink: 0
    },
    className: "kg-desktop-cta"
  }, loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("dashboard"),
    style: {
      height: 44,
      padding: "0 22px",
      borderRadius: "var(--radius-pill)",
      background: "var(--olive-600)",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, "My Dashboard"), /*#__PURE__*/React.createElement("button", {
    onClick: () => go("logout"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-body)",
      whiteSpace: "nowrap"
    }
  }, "Log Out")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("login"),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "8px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      fontWeight: 600,
      color: "var(--text-body)",
      whiteSpace: "nowrap"
    }
  }, "Log In"), /*#__PURE__*/React.createElement(GiftCTA, {
    type: "need",
    size: "md",
    onClick: () => go("need"),
    style: {
      height: 44
    }
  }), /*#__PURE__*/React.createElement(GiftCTA, {
    type: "give",
    size: "md",
    onClick: () => go("campaign"),
    style: {
      height: 44
    }
  }))), /*#__PURE__*/React.createElement("button", {
    className: "kg-mobile-toggle",
    onClick: () => setOpen(o => !o),
    "aria-label": "Menu",
    "aria-expanded": open,
    style: {
      display: "none",
      background: "none",
      border: "1px solid var(--border-strong)",
      borderRadius: 10,
      width: 44,
      height: 44,
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--olive-700)",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: open ? "x" : "menu",
    size: 22
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "kg-mobile-menu",
    style: {
      display: "none",
      flexDirection: "column",
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--cream)",
      padding: "12px 24px 20px"
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, links.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => goClose(k),
    style: {
      background: "none",
      border: "none",
      borderBottom: "1px solid var(--border-subtle)",
      cursor: "pointer",
      padding: "14px 4px",
      textAlign: "left",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 600,
      color: route === k ? "var(--olive-700)" : "var(--text-body)"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      marginTop: 18
    }
  }, loggedIn ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => goClose("dashboard"),
    style: {
      height: 48,
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-pill)",
      background: "var(--olive-600)",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 700
    }
  }, "My Dashboard"), /*#__PURE__*/React.createElement("button", {
    onClick: () => goClose("logout"),
    style: {
      background: "none",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      height: 48,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-body)"
    }
  }, "Log Out")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GiftCTA, {
    type: "need",
    size: "md",
    onClick: () => goClose("need"),
    style: {
      height: 48,
      width: "100%",
      justifyContent: "center"
    }
  }), /*#__PURE__*/React.createElement(GiftCTA, {
    type: "give",
    size: "md",
    onClick: () => goClose("campaign"),
    style: {
      height: 48,
      width: "100%",
      justifyContent: "center"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => goClose("login"),
    style: {
      background: "none",
      border: "1px solid var(--border-strong)",
      borderRadius: "var(--radius-pill)",
      height: 48,
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--text-body)"
    }
  }, "Log In")))));
}
window.KGHeader = Header;

/* ---------------- Footer ---------------- */
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--olive-800)",
      color: "color-mix(in srgb, var(--cream) 82%, transparent)",
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: "56px 24px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 40,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 340
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "logo.png",
    alt: "KindGifts by Sebeccly",
    style: {
      height: 40,
      display: "block",
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 14
    }
  }, "Medical crowdfunding, powered by community kindness. An initiative of Sebeccly Cancer Care."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(WhatsAppButton, {
    label: "Support via WhatsApp"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FooterCol, {
    title: "Platform",
    items: [["how", "How It Works"], ["transparency", "Transparency Hub"], ["stories", "Impact Stories"], ["partners", "Partner Hospitals"], ["about", "About & FAQ"]],
    go: go
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Get started",
    items: [["need", "Need a Gift"], ["campaign", "Give a Gift"]],
    go: go
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.14)",
      marginTop: 40,
      paddingTop: 24,
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      justifyContent: "space-between",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KindGifts by Sebeccly Cancer Care. Registered Nonprofit since 2006."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Terms of Service"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Contact Support")))));
}
function FooterCol({
  title,
  items,
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "var(--pink-200)",
      marginBottom: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go(k),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      padding: 0,
      color: "color-mix(in srgb, var(--cream) 82%, transparent)",
      fontSize: 14,
      fontFamily: "var(--font-sans)"
    }
  }, l))));
}
window.KGFooter = Footer;

/* ---------------- WhatsApp floating widget ---------------- */
function WhatsAppWidget() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 20,
      bottom: 20,
      zIndex: 60,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: 12
    }
  }, open && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      background: "var(--white)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      border: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--whatsapp-dark)",
      color: "#fff",
      padding: "14px 16px",
      fontWeight: 700
    }
  }, "Chat with us"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      fontSize: 14,
      color: "var(--text-body)",
      lineHeight: 1.5
    }
  }, "Have a question about a campaign or verification? Our team replies fast on WhatsApp."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 16px"
    }
  }, /*#__PURE__*/React.createElement(WhatsAppButton, {
    label: "Start chat",
    block: true
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    "aria-label": "WhatsApp support",
    style: {
      width: 60,
      height: 60,
      borderRadius: "50%",
      background: "var(--whatsapp)",
      border: "none",
      boxShadow: "var(--shadow-lg)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#083b2c"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "30",
    height: "30",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.94 7.94 0 0 0 12 20a7.94 7.94 0 0 0 5.6-13.7ZM12 18.5a6.6 6.6 0 0 1-3.4-.9l-.24-.15-2.5.66.67-2.43-.16-.25A6.59 6.59 0 1 1 12 18.5Zm3.6-4.95c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.51.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-2.66-2.33c-.2-.34.2-.32.57-1.06a.36.36 0 0 0 0-.34c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .79 2 8.66 8.66 0 0 0 3.32 2.93c1.85.8 1.85.53 2.19.5a1.98 1.98 0 0 0 1.3-.92 1.62 1.62 0 0 0 .11-.92c-.05-.08-.18-.13-.38-.23Z"
  }))));
}
window.KGWhatsAppWidget = WhatsAppWidget;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/photos.js
try { (() => {
/* KindGifts — shared Unsplash imagery helper (real African photography, free license).
 * Loaded before the babel screen scripts so window.KG_PHOTO / window.KGP are ready. */
window.KG_PHOTO = function (id, w, h, crop) {
  var u = "https://images.unsplash.com/photo-" + id + "?fm=jpg&auto=format&q=70&w=" + (w || 800) + "&fit=crop";
  if (h) u += "&h=" + h;
  u += "&crop=" + (crop || "entropy");
  return u;
};
window.KGP = {
  // Two people holding hands, Lagos, Nigeria — Boluwatife Oguns
  hero: "1675438617081-f7d78a28ec95",
  // Smiling woman — Eye for Ebony (used as patient "Ada")
  ada: "1507152927179-bc4ebfef7103",
  // African hands held together, solidarity — Iwaria Inc.
  community: "1655720359248-eeace8c709c5"
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/photos.js", error: String((e && e.message) || e) }); }

// ui_kits/webapp/admin.jsx
try { (() => {
/* KindGifts web app — Admin portal (utilitarian, data-forward). */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    Button,
    Badge,
    Money,
    ProgressBar,
    Input,
    Textarea
  } = NS;
  const Icon = window.KGWIcon;
  const P = window.KGWPortal;
  const {
    Shell,
    Pad,
    Table,
    Td,
    MiniStat,
    BigStat,
    Panel,
    SectionLabel,
    SplitBars,
    BarChart
  } = P;
  const flagMeta = {
    clear: ["success", "AI: Clear"],
    review: ["warning", "AI: Needs review"],
    hold: ["danger", "AI: Flagged"]
  };
  const QUEUE = [{
    name: "Ada Okafor",
    title: "Radiotherapy completion",
    goal: 10500000,
    raised: 6500000,
    flag: "clear",
    hospital: "LUTH",
    diag: "Breast cancer (Stage 2)"
  }, {
    name: "Emeka Nwosu",
    title: "Chemotherapy — 6 cycles",
    goal: 8000000,
    raised: 320000,
    flag: "review",
    hospital: "UCH Ibadan",
    diag: "Colorectal cancer"
  }, {
    name: "Grace Bello",
    title: "Dialysis — 12 months",
    goal: 8400000,
    raised: 410000,
    flag: "clear",
    hospital: "National Hospital Abuja",
    diag: "Chronic kidney disease"
  }, {
    name: "Tunde Ade",
    title: "Spinal surgery",
    goal: 5000000,
    raised: 90000,
    flag: "hold",
    hospital: "Lakeshore",
    diag: "Herniated disc"
  }];
  function Admin() {
    return /*#__PURE__*/React.createElement(Shell, {
      subtitle: "ADMIN PORTAL",
      tone: "dark",
      user: {
        initials: "SO",
        name: "Sade O.",
        role: "Verification lead"
      },
      modules: [{
        key: "home",
        icon: "layout-dashboard",
        label: "Dashboard",
        render: AdmHome
      }, {
        key: "users",
        icon: "users",
        label: "User Management",
        render: AdmUsers
      }, {
        key: "campaigns",
        icon: "megaphone",
        label: "Campaign Management",
        render: AdmCampaigns
      }, {
        key: "verify",
        icon: "shield-check",
        label: "Verification Center",
        badge: 4,
        render: AdmVerify
      }, {
        key: "money",
        icon: "banknote",
        label: "Donations & Withdrawals",
        render: AdmMoney
      }, {
        key: "reports",
        icon: "bar-chart-3",
        label: "Reports",
        render: AdmReports
      }, {
        key: "cms",
        icon: "layout-template",
        label: "CMS",
        render: AdmCMS
      }, {
        key: "settings",
        icon: "settings",
        label: "Platform Settings",
        render: AdmSettings
      }]
    });
  }

  /* ---- Dashboard ---- */
  function AdmHome() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 12,
        marginBottom: 18
      },
      className: "kgw-3col"
    }, /*#__PURE__*/React.createElement(BigStat, {
      label: "Total raised",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 512400000,
        size: "sm"
      }),
      sub: "+18% vs last qtr"
    }), /*#__PURE__*/React.createElement(BigStat, {
      label: "Patients funded",
      value: "1,284",
      sub: "+64 this month"
    }), /*#__PURE__*/React.createElement(BigStat, {
      label: "Pending verification",
      value: "4",
      sub: "needs review",
      tone: "danger"
    }), /*#__PURE__*/React.createElement(BigStat, {
      label: "Fraud caught",
      value: "27",
      sub: "AI pre-vetting",
      tone: "danger"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 16
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Funds raised (\u20A6M / month)"
    }, /*#__PURE__*/React.createElement(BarChart, {
      bars: [["Feb", 32], ["Mar", 41], ["Apr", 38], ["May", 52], ["Jun", 47], ["Jul", 61]]
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "Where funds go"
    }, /*#__PURE__*/React.createElement(SplitBars, {
      rows: [["Oncology", 46, "var(--pink-500)"], ["Renal / dialysis", 24, "var(--olive-600)"], ["Cardiac", 18, "var(--info)"], ["Other", 12, "var(--sand-400)"]]
    }))));
  }

  /* ---- User Management ---- */
  function AdmUsers() {
    const rows = [["Ada Okafor", "ada@example.com", "Patient", "Active", "success"], ["Adeola Johnson", "adeola@mail.com", "Donor", "Active", "success"], ["LUTH Oncology", "admin@luth.org", "Hospital", "Verified", "olive"], ["Tunde Ade", "tunde@example.com", "Patient", "Suspended", "danger"], ["Sade Okoro", "sade@kindgifts.org", "Admin", "Active", "success"], ["UCH Ibadan", "care@uch.org", "Hospital", "Pending", "warning"]];
    const roleTone = {
      Patient: "pink",
      Donor: "info",
      Hospital: "olive",
      Admin: "neutral"
    };
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Total users",
      value: "9,431"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Patients",
      value: "1,284"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Hospitals",
      value: "18"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Suspended",
      value: "6",
      tone: "danger"
    })), /*#__PURE__*/React.createElement(Table, {
      cols: ["Name", "Email", "Role", "Status", ""]
    }, rows.map(([n, e, role, st, tone], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, n)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)"
      }
    }, e)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: roleTone[role]
    }, role)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, st)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Manage"))))));
  }

  /* ---- Campaign Management ---- */
  function AdmCampaigns() {
    const rows = [{
      name: "Ada Okafor",
      title: "Radiotherapy completion",
      goal: 10500000,
      raised: 6500000,
      status: "Live",
      tone: "success"
    }, {
      name: "Chidi Umeh",
      title: "Kidney transplant",
      goal: 15000000,
      raised: 11200000,
      status: "Live",
      tone: "success"
    }, {
      name: "Fatima Bello",
      title: "Leukemia treatment",
      goal: 9200000,
      raised: 2100000,
      status: "Live",
      tone: "success"
    }, {
      name: "Tunde Ade",
      title: "Spinal surgery",
      goal: 5000000,
      raised: 90000,
      status: "Flagged",
      tone: "danger"
    }, {
      name: "Ngozi Eze",
      title: "Cardiac surgery",
      goal: 12000000,
      raised: 11950000,
      status: "Completed",
      tone: "olive"
    }];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Active campaigns",
      value: "38"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Completed",
      value: "1,246",
      tone: "success"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Flagged",
      value: "3",
      tone: "danger"
    })), /*#__PURE__*/React.createElement(Table, {
      cols: ["Patient", "Campaign", "Progress", "Status", ""]
    }, rows.map((r, i) => {
      const pct = Math.round(r.raised / r.goal * 100);
      return /*#__PURE__*/React.createElement("tr", {
        key: i
      }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: "var(--text-strong)"
        }
      }, r.name)), /*#__PURE__*/React.createElement(Td, null, r.title), /*#__PURE__*/React.createElement(Td, {
        style: {
          minWidth: 190
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          marginBottom: 4
        }
      }, /*#__PURE__*/React.createElement(Money, {
        amount: r.raised,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: pct >= 90 ? "var(--success)" : "var(--olive-700)"
        }
      }, pct, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
        raised: r.raised,
        goal: r.goal,
        showCaption: false,
        height: 8
      })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm"
      }, "View"), r.tone === "danger" && /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        style: {
          borderColor: "var(--danger)",
          color: "var(--danger)"
        }
      }, "Suspend"))));
    })));
  }

  /* ---- Verification Center (the rich queue) ---- */
  function AdmVerify() {
    const [sel, setSel] = React.useState(0);
    const c = QUEUE[sel];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "300px 1fr",
        minWidth: 0,
        height: "100%"
      },
      className: "kgw-admin-main"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRight: "1px solid var(--border-subtle)",
        background: "var(--white)",
        overflow: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 16px",
        borderBottom: "1px solid var(--border-subtle)",
        fontWeight: 700,
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, "Pending Verification \xB7 4"), QUEUE.map((q, i) => /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => setSel(i),
      style: {
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "12px 16px",
        border: "none",
        borderBottom: "1px solid var(--border-subtle)",
        borderLeft: `3px solid ${sel === i ? "var(--pink-500)" : "transparent"}`,
        background: sel === i ? "var(--pink-50)" : "var(--white)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: "var(--text-strong)"
      }
    }, q.name), /*#__PURE__*/React.createElement(Badge, {
      tone: flagMeta[q.flag][0]
    }, q.flag)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, q.title)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        overflow: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 24,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, c.title, " \xB7 ", c.hospital)), /*#__PURE__*/React.createElement(Badge, {
      tone: flagMeta[c.flag][0]
    }, flagMeta[c.flag][1])), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: 12,
        margin: "18px 0"
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Raised",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: c.raised,
        size: "md"
      })
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Goal",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: c.goal,
        size: "md"
      })
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Diagnosis",
      value: /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13
        }
      }, c.diag)
    })), /*#__PURE__*/React.createElement(SectionLabel, null, "Uploaded documents"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
        marginBottom: 20
      }
    }, [["National ID (NIN)", "file-check"], ["Medical report", "file-text"], ["Hospital bill", "receipt"], ["Guarantors' Form", "file-signature"]].map(([l, ic]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 12px",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        background: "var(--white)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16,
      color: "var(--olive-600)"
    }), l, /*#__PURE__*/React.createElement(Icon, {
      name: "external-link",
      size: 13,
      color: "var(--text-muted)"
    })))), /*#__PURE__*/React.createElement(SectionLabel, null, "AI pre-vetting"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        background: c.flag === "clear" ? "var(--success-bg)" : c.flag === "review" ? "var(--warning-bg)" : "var(--danger-bg)",
        fontSize: 13.5,
        lineHeight: 1.5,
        color: "var(--sand-700)",
        marginBottom: 20
      }
    }, c.flag === "clear" && "✓ No document manipulation detected. Invoice numbers unique. Metadata consistent.", c.flag === "review" && "⚠ Invoice date metadata differs from document creation date. Recommend clinical cross-check.", c.flag === "hold" && "⛔ Possible image alteration detected on hospital bill. Duplicate invoice number found in historical database."), /*#__PURE__*/React.createElement(SectionLabel, null, "Virtual consultation (Zoho Bookings)"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        padding: "12px 14px",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        marginBottom: 24,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "video",
      size: 18,
      color: "var(--info)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-body)",
        flex: 1
      }
    }, c.flag === "clear" ? "Consultation completed · Mar 10, 2026" : "No consultation booked yet"), c.flag === "clear" ? /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Completed") : /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm"
    }, "Send booking link")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 16,
        color: "#fff"
      })
    }, "Approve for disbursement"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      style: {
        borderColor: "var(--danger)",
        color: "var(--danger)"
      },
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "x",
        size: 16,
        color: "var(--danger)"
      })
    }, "Reject with reason"))));
  }
  function Stat({
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 12px",
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-sm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--text-muted)",
        fontWeight: 700
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        marginTop: 4
      }
    }, value));
  }

  /* ---- Donations & Withdrawals ---- */
  function AdmMoney() {
    const disb = [["Ijeoma A.", "LUTH", 10500000, "KG-DB-4471", "paid"], ["Samuel O.", "National Hospital Abuja", 8400000, "KG-DB-4470", "processing"], ["Ruth M.", "UCH Ibadan", 6000000, "KG-DB-4468", "paid"], ["David K.", "St. Nicholas", 15000000, "KG-DB-4465", "queued"]];
    const tone = {
      paid: "success",
      processing: "warning",
      queued: "olive"
    };
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Donations (month)",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 48200000,
        size: "sm"
      }),
      tone: "pink"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Disbursed (all-time)",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 412000000,
        size: "sm"
      }),
      tone: "success"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Held in escrow",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 23400000,
        size: "sm"
      })
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Awaiting release",
      value: "3",
      tone: "warning"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        background: "var(--olive-50)",
        fontSize: 13.5,
        color: "var(--text-body)",
        marginBottom: 16,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 17,
      color: "var(--olive-700)"
    }), " All payouts route ", /*#__PURE__*/React.createElement("strong", {
      style: {
        margin: "0 4px"
      }
    }, "directly to accredited hospitals"), " \u2014 never to personal accounts."), /*#__PURE__*/React.createElement(SectionLabel, null, "Recent disbursements"), /*#__PURE__*/React.createElement(Table, {
      cols: ["Patient", "Hospital", "Amount", "Reference", "Status"]
    }, disb.map(([pt, h, amt, ref, st], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, pt)), /*#__PURE__*/React.createElement(Td, null, h), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Money, {
      amount: amt,
      size: "xs"
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "monospace",
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, ref)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: tone[st]
    }, st))))));
  }

  /* ---- Reports ---- */
  function AdmReports() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      pill: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 15
      })
    }, "Export CSV")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 12,
        marginBottom: 18
      },
      className: "kgw-3col"
    }, /*#__PURE__*/React.createElement(BigStat, {
      label: "Total raised",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 512400000,
        size: "sm"
      }),
      sub: "+18% vs last qtr"
    }), /*#__PURE__*/React.createElement(BigStat, {
      label: "Avg. verification",
      value: "3.2 days",
      sub: "\u22120.4d faster"
    }), /*#__PURE__*/React.createElement(BigStat, {
      label: "Success rate",
      value: "94%",
      sub: "campaigns funded"
    }), /*#__PURE__*/React.createElement(BigStat, {
      label: "Repeat donors",
      value: "1,204",
      sub: "recurring givers"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        gap: 16
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Funds raised (\u20A6M / month)"
    }, /*#__PURE__*/React.createElement(BarChart, {
      bars: [["Feb", 32], ["Mar", 41], ["Apr", 38], ["May", 52], ["Jun", 47], ["Jul", 61]]
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "Campaigns by category"
    }, /*#__PURE__*/React.createElement(SplitBars, {
      rows: [["Oncology", 52, "var(--pink-500)"], ["Renal", 21, "var(--olive-600)"], ["Cardiac", 15, "var(--info)"], ["Other", 12, "var(--sand-400)"]]
    }))));
  }

  /* ---- CMS ---- */
  function AdmCMS() {
    const groups = [["Impact Stories", "book-open", 24, "Recovery stories on the marketing site"], ["Partner Hospitals", "hospital", 18, "Accredited hospital & lab directory"], ["FAQ entries", "help-circle", 12, "About & FAQ page"], ["Transparency records", "eye", 1240, "Public disbursement hub"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))",
        gap: 14
      }
    }, groups.map(([t, ic, n, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        padding: 18,
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 42,
        height: 42,
        borderRadius: "var(--radius-md)",
        background: "var(--olive-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 21,
      color: "var(--olive-600)"
    })), /*#__PURE__*/React.createElement("span", {
      className: "ff-num",
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, n.toLocaleString())), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 16
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 13.5,
        color: "var(--text-body)",
        lineHeight: 1.5,
        flex: 1
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "pencil",
        size: 14
      })
    }, "Manage"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "Add"))))));
  }

  /* ---- Platform Settings ---- */
  function AdmSettings() {
    const toggles = [["AI fraud pre-vetting", "Scan every upload for alterations and duplicates", true], ["Require Guarantors' Form", "Mandatory above the verification threshold", true], ["Anonymous donations", "Allow donors to hide their name", true], ["Public Transparency Hub", "Publish anonymized utilization receipts", true], ["Maintenance mode", "Take the platform offline for updates", false]];
    return /*#__PURE__*/React.createElement(Pad, {
      style: {
        maxWidth: 720
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginBottom: 18
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Nonprofit support fee (%)",
      defaultValue: "7\u201310"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Processing fee (%)",
      defaultValue: "2"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Verification threshold",
      prefix: "\u20A6",
      defaultValue: "500,000"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Disbursement tranche 1 (%)",
      defaultValue: "35"
    })), /*#__PURE__*/React.createElement(Panel, {
      title: "Controls"
    }, toggles.map(([l, d, on], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 0",
        borderTop: i ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 14.5
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, d)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 26,
        borderRadius: 999,
        background: on ? "var(--olive-600)" : "var(--sand-200, var(--sand-100))",
        position: "relative",
        flexShrink: 0,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 3,
        left: on ? 21 : 3,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "#fff",
        transition: "left .15s",
        boxShadow: "var(--shadow-sm)"
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true
    }, "Save changes"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Reset")));
  }
  window.KGWAdmin = Admin;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/admin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/auth.jsx
try { (() => {
/* KindGifts web app — shared Login / Sign Up for donors and patients. */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    GiftCTA,
    Button,
    Card,
    Input
  } = NS;
  const Icon = window.KGWIcon;
  function RoleToggle({
    role,
    setRole,
    opts
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        background: "var(--sand-50)",
        padding: 5,
        borderRadius: "var(--radius-pill)"
      }
    }, opts.map(([k, ic, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => setRole(k),
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "11px 0",
        borderRadius: "var(--radius-pill)",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        background: role === k ? "var(--white)" : "transparent",
        color: role === k ? "var(--text-strong)" : "var(--text-muted)",
        boxShadow: role === k ? "var(--shadow-sm)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, ic), " ", l)));
  }
  function Brand() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        marginBottom: 24
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "logo.png",
      alt: "KindGifts by Sebeccly",
      style: {
        height: 52,
        display: "block",
        margin: "0 auto 4px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: "var(--text-muted)",
        letterSpacing: ".02em"
      }
    }, "by Sebeccly Cancer Care"));
  }
  function Auth() {
    const [mode, setMode] = React.useState("login"); // login | signup
    const [role, setRole] = React.useState("donor");
    const isLogin = mode === "login";
    // Donors sign up during the donation flow, so Sign Up here is for patients & hospitals only.
    const loginRoles = [["patient", "🎁", "Patient"], ["donor", "❤️", "Donor"], ["hospital", "🏥", "Hospital"]];
    const signupRoles = [["patient", "🎁", "Patient"], ["hospital", "🏥", "Hospital"]];
    const goMode = m => {
      setMode(m);
      if (m === "signup" && role === "donor") setRole("patient");
    };
    const isHospital = role === "hospital";
    const createLabel = {
      patient: "Create Patient Account",
      hospital: "Register Hospital",
      donor: "Create Account"
    }[role];
    const doLogin = r => {
      try {
        localStorage.setItem("kg_loggedIn", "1");
        localStorage.setItem("kg_role", r);
      } catch (e) {}
      const dest = r === "donor" ? "donor" : r === "hospital" ? "hospital" : "patient";
      window.location.hash = "#" + dest;
      window.location.reload();
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "70vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "48px 20px 90px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 440
      }
    }, /*#__PURE__*/React.createElement(Brand, null), /*#__PURE__*/React.createElement(Card, {
      padding: 28
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        borderBottom: "1px solid var(--border-subtle)",
        marginBottom: 22
      }
    }, [["login", "Log In"], ["signup", "Sign Up"]].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => goMode(k),
      style: {
        flex: 1,
        background: "none",
        border: "none",
        borderBottom: `3px solid ${mode === k ? "var(--pink-500)" : "transparent"}`,
        cursor: "pointer",
        padding: "10px 0 14px",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 700,
        color: mode === k ? "var(--text-strong)" : "var(--text-muted)"
      }
    }, l))), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 600,
        color: "var(--text-strong)",
        textAlign: "center",
        margin: 0
      }
    }, isLogin ? "Welcome back." : isHospital ? "Register your hospital." : "Create your account."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14.5,
        color: "var(--text-muted)",
        textAlign: "center",
        margin: "6px 0 20px",
        lineHeight: 1.5
      }
    }, isLogin ? "Log in to manage your campaigns, gifts, or patients." : isHospital ? "Join as a partner hospital to receive verified, direct-to-care payouts." : "It takes a minute — and keeps every gift secure."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(RoleToggle, {
      role: role,
      setRole: setRole,
      opts: isLogin ? loginRoles : signupRoles
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, !isLogin && isHospital && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Input, {
      label: "Registered hospital name",
      placeholder: "e.g. Lagos University Teaching Hospital"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "RC number",
      placeholder: "e.g. RC 1234567",
      helper: "Your CAC registration number, so we can verify the facility."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Hospital address",
      placeholder: "Street, city, state"
    })), /*#__PURE__*/React.createElement(Input, {
      label: isHospital ? "Official email address" : "Email address",
      type: "email",
      placeholder: isHospital ? "admin@hospital.org" : "you@example.com"
    }), !isLogin && /*#__PURE__*/React.createElement(Input, {
      label: "Phone number",
      prefix: "+234",
      type: "tel",
      placeholder: "801 234 5678",
      helper: "For verification codes and updates."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Password",
      type: "password",
      placeholder: isLogin ? "Your password" : "At least 8 characters"
    }), !isLogin && /*#__PURE__*/React.createElement(Input, {
      label: "Confirm password",
      type: "password",
      placeholder: "Re-enter your password"
    })), isLogin && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right",
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--pink-600)",
        fontSize: 13.5,
        fontWeight: 600,
        fontFamily: "var(--font-sans)"
      }
    }, "Forgot password?")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20
      }
    }, role === "donor" ? /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      block: true,
      size: "lg",
      label: "Log In",
      onClick: () => doLogin("donor")
    }) : /*#__PURE__*/React.createElement(GiftCTA, {
      type: "need",
      block: true,
      size: "lg",
      label: isLogin ? "Log In" : createLabel,
      onClick: () => doLogin(role)
    })), !isLogin && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)",
        textAlign: "center",
        margin: "14px 0 0",
        lineHeight: 1.5
      }
    }, "By continuing you agree to our Terms and Privacy Policy. Your data is protected under our KYC compliance framework.")), /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        fontSize: 14.5,
        color: "var(--text-body)",
        marginTop: 20
      }
    }, isLogin ? /*#__PURE__*/React.createElement(React.Fragment, null, "New to KindGifts? ", /*#__PURE__*/React.createElement("button", {
      onClick: () => goMode("signup"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--pink-600)",
        fontWeight: 700,
        fontSize: 14.5,
        fontFamily: "var(--font-sans)"
      }
    }, "Create an account"), " \xB7 donors sign up while giving.") : /*#__PURE__*/React.createElement(React.Fragment, null, "Already have an account? ", /*#__PURE__*/React.createElement("button", {
      onClick: () => goMode("login"),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: "var(--pink-600)",
        fontWeight: 700,
        fontSize: 14.5,
        fontFamily: "var(--font-sans)"
      }
    }, "Log in")))));
  }
  window.KGWAuth = Auth;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/auth.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/dashboards.jsx
try { (() => {
/* KindGifts web app — Patient & Donor dashboards (full portals). */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    Button,
    WhatsAppButton,
    Card,
    Badge,
    VerifiedBadge,
    ProgressBar,
    StatBlock,
    Money,
    Textarea,
    FileUpload,
    Input,
    CampaignCard
  } = NS;
  const Icon = window.KGWIcon;
  const P = window.KGWPortal;
  const {
    Shell,
    Pad,
    Table,
    Td,
    MiniStat,
    Panel,
    SectionLabel,
    Empty
  } = P;

  /* =====================================================================
     PATIENT PORTAL
     ===================================================================== */
  function PatientDashboard() {
    return /*#__PURE__*/React.createElement(Shell, {
      subtitle: "PATIENT PORTAL",
      tone: "light",
      user: {
        initials: "AO",
        name: "Ada Okafor",
        role: "Patient"
      },
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        pill: true,
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 15,
          color: "#fff"
        })
      }, "New campaign"),
      modules: [{
        key: "home",
        icon: "layout-dashboard",
        label: "Dashboard",
        render: PatHome
      }, {
        key: "campaigns",
        icon: "megaphone",
        label: "Campaigns",
        render: PatCampaigns
      }, {
        key: "records",
        icon: "folder-heart",
        label: "Medical Records",
        render: PatRecords
      }, {
        key: "verify",
        icon: "shield-check",
        label: "Verification",
        render: PatVerify
      }, {
        key: "withdrawals",
        icon: "banknote",
        label: "Withdrawals",
        render: PatWithdrawals
      }, {
        key: "profile",
        icon: "user",
        label: "Profile",
        render: PatProfile
      }]
    });
  }
  function PatHome() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 12,
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Welcome back, Ada \uD83D\uDC4B"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Your campaign")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(VerifiedBadge, null), /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Live"))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 12,
        flexWrap: "wrap",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Help Ada complete her radiotherapy"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "340 gifts")), /*#__PURE__*/React.createElement(ProgressBar, {
      raised: 6500000,
      goal: 10500000,
      height: 14
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 18,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      label: "Share on WhatsApp"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "link",
        size: 16
      })
    }, "Copy link"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: 18,
        marginBottom: 18
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Verification & disbursement"), /*#__PURE__*/React.createElement(Tracker, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        display: "flex",
        gap: 24,
        justifyContent: "space-around"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 6500000,
        size: "xl"
      }),
      accent: "pink",
      label: "Raised"
    }), /*#__PURE__*/React.createElement(StatBlock, {
      value: "62%",
      label: "of goal"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: "var(--olive-50)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lightbulb",
      size: 20,
      color: "var(--olive-600)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 14
      }
    }, "Sharing tip"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        lineHeight: 1.5,
        color: "var(--text-body)"
      }
    }, "Post your link in family and church WhatsApp groups first \u2014 that's where most gifts come from.")))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Post an update"), /*#__PURE__*/React.createElement(Textarea, {
      rows: 3,
      placeholder: "Share how you're doing with your donors\u2026"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true
    }, "Post update"))));
  }
  function Tracker() {
    const steps = [["Threshold reached (₦500,000)", "done"], ["KYC · NIN / BVN verified", "done"], ["Guarantors' Form submitted", "done"], ["Clinical audit & consultation", "active"], ["Board approval (bi-weekly)", "pending"], ["Full release to LUTH", "pending"]];
    return steps.map(([l, st]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "9px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: st === "done" ? "var(--success)" : st === "active" ? "var(--warning-bg)" : "var(--sand-100)",
        color: st === "done" ? "#fff" : st === "active" ? "var(--warning)" : "var(--text-muted)",
        fontSize: 12,
        fontWeight: 700,
        border: st === "active" ? "2px solid var(--warning)" : "none"
      }
    }, st === "done" ? "✓" : st === "active" ? "•" : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: st === "pending" ? "var(--text-muted)" : "var(--text-body)",
        fontWeight: st === "active" ? 700 : 400
      }
    }, l), st === "active" && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      style: {
        marginLeft: "auto"
      }
    }, "In review")));
  }
  function PatCampaigns() {
    const rows = [{
      title: "Help Ada complete her radiotherapy",
      goal: 10500000,
      raised: 6500000,
      status: "Live",
      tone: "success",
      gifts: 340
    }, {
      title: "Ada's follow-up scans (2025)",
      goal: 1200000,
      raised: 1200000,
      status: "Completed",
      tone: "olive",
      gifts: 88
    }];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(Table, {
      cols: ["Campaign", "Progress", "Gifts", "Status", ""]
    }, rows.map((r, i) => {
      const pct = Math.round(r.raised / r.goal * 100);
      return /*#__PURE__*/React.createElement("tr", {
        key: i
      }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: "var(--text-strong)"
        }
      }, r.title)), /*#__PURE__*/React.createElement(Td, {
        style: {
          minWidth: 200
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          marginBottom: 4
        }
      }, /*#__PURE__*/React.createElement(Money, {
        amount: r.raised,
        size: "xs"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          color: "var(--olive-700)"
        }
      }, pct, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
        raised: r.raised,
        goal: r.goal,
        showCaption: false,
        height: 8
      })), /*#__PURE__*/React.createElement(Td, null, r.gifts), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
        tone: r.tone
      }, r.status)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm"
      }, "Manage")));
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
        background: "var(--olive-50)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "Need to raise for new treatment?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, "Launch a new campaign in under 10 minutes.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16,
        color: "#fff"
      })
    }, "Start a new campaign")));
  }
  function PatRecords() {
    const docs = [["National ID (NIN)", "file-check", "Verified", "success", "Jan 12, 2026"], ["Medical report — Oncology", "file-text", "Verified", "success", "Jan 14, 2026"], ["Hospital bill — LUTH", "receipt", "Verified", "success", "Jan 14, 2026"], ["Guarantors' Form", "file-signature", "Verified", "success", "Jan 20, 2026"], ["Follow-up scan report", "scan", "In review", "warning", "Mar 02, 2026"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Documents on file",
      value: "5"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Verified",
      value: "4",
      tone: "success"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "In review",
      value: "1",
      tone: "warning"
    })), /*#__PURE__*/React.createElement(Table, {
      cols: ["Document", "Uploaded", "Status", ""]
    }, docs.map(([l, ic, st, tone, date], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--olive-600)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, l))), /*#__PURE__*/React.createElement(Td, null, date), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, st)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "eye",
        size: 15
      })
    }, "View"))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, "Upload a new document"), /*#__PURE__*/React.createElement(FileUpload, {
      hint: "Medical reports are shared only with our private clinical verification team \u2014 never posted publicly.",
      icon: "\uD83D\uDCC4"
    })));
  }
  function PatVerify() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        gap: 18
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Verification & disbursement"), /*#__PURE__*/React.createElement(Tracker, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Identity (KYC)"), [["NIN validated", true], ["BVN matched", true], ["Bank account confirmed", true]].map(([l, ok]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "7px 0",
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ok ? "check-circle-2" : "circle",
      size: 17,
      color: ok ? "var(--success)" : "var(--text-muted)"
    }), l))), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: "var(--warning-bg)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 19,
      color: "var(--warning)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 14
      }
    }, "Next step: clinical consultation"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 10px",
        fontSize: 13.5,
        lineHeight: 1.5,
        color: "var(--text-body)"
      }
    }, "Our medical partner will call to confirm your active care timeline before board review."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "video",
        size: 15
      })
    }, "Book consultation")))))));
  }
  function PatWithdrawals() {
    const rows = [["Tranche 1 — initial 35%", 3675000, "Paid to LUTH", "success", "Feb 20, 2026", "KG-DB-4419"], ["Tranche 2 — remaining 65%", 6825000, "Awaiting utilization audit", "warning", "—", "—"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Raised",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 6500000,
        size: "sm"
      })
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Disbursed to hospital",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 3675000,
        size: "sm"
      }),
      tone: "success"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Held in escrow",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 2825000,
        size: "sm"
      }),
      tone: "warning"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        background: "var(--olive-50)",
        fontSize: 13.5,
        color: "var(--text-body)",
        marginBottom: 16,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 17,
      color: "var(--olive-700)"
    }), " Funds are released in tranches ", /*#__PURE__*/React.createElement("strong", {
      style: {
        margin: "0 4px"
      }
    }, "directly to LUTH"), " \u2014 never to a personal account."), /*#__PURE__*/React.createElement(Table, {
      cols: ["Tranche", "Amount", "Status", "Date", "Reference"]
    }, rows.map(([l, amt, st, tone, date, ref], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, l)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Money, {
      amount: amt,
      size: "xs"
    })), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, st)), /*#__PURE__*/React.createElement(Td, null, date), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "monospace",
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, ref))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, null, "Unlock tranche 2 \u2014 upload utilization proof"), /*#__PURE__*/React.createElement(FileUpload, {
      hint: "Submit hospital receipts and an updated medical report proving tranche 1 went to care.",
      icon: "\uD83E\uDDFE"
    })));
  }
  function PatProfile() {
    return /*#__PURE__*/React.createElement(Pad, {
      style: {
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Personal information"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      value: "Ada Okafor",
      readOnly: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email address",
      type: "email",
      value: "ada.okafor@example.com",
      readOnly: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone number",
      prefix: "+234",
      value: "801 234 5678",
      readOnly: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "National Identity Number (NIN)",
      value: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4821",
      readOnly: true,
      helper: "Verified \u2014 locked for your security."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Hospital of care",
      value: "Lagos University Teaching Hospital (LUTH)",
      readOnly: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 18
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true
    }, "Edit details"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Change password"))));
  }

  /* =====================================================================
     DONOR PORTAL
     ===================================================================== */
  function DonorDashboard() {
    return /*#__PURE__*/React.createElement(Shell, {
      subtitle: "DONOR PORTAL",
      tone: "light",
      user: {
        initials: "AJ",
        name: "Adeola Johnson",
        role: "Donor · Guardian"
      },
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        pill: true,
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "heart",
          size: 15,
          color: "#fff"
        })
      }, "Give a gift"),
      modules: [{
        key: "home",
        icon: "layout-dashboard",
        label: "Dashboard",
        render: DonHome
      }, {
        key: "discover",
        icon: "compass",
        label: "Campaign Discovery",
        render: DonDiscover
      }, {
        key: "give",
        icon: "heart-handshake",
        label: "Donations",
        render: DonGive
      }, {
        key: "history",
        icon: "receipt",
        label: "Donation History",
        render: DonHistory
      }, {
        key: "saved",
        icon: "bookmark",
        label: "Saved Campaigns",
        render: DonSaved
      }]
    });
  }
  const FOLLOWED = [["Help Ada complete her radiotherapy", "In treatment", "success", 62], ["Baby Chidi's heart surgery", "Recovered", "olive", 100], ["Emeka's chemotherapy", "Ongoing", "warning", 44]];
  function DonHome() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Welcome back, Adeola \uD83D\uDC9C"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 26,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Your impact so far")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 12,
        marginBottom: 20
      },
      className: "kgw-3col"
    }, /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 4200000,
        size: "xl"
      }),
      accent: "pink",
      label: "Total gifted"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      value: "18",
      label: "Gifts given"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      value: "12",
      label: "Patients supported"
    })), /*#__PURE__*/React.createElement(Card, {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement(StatBlock, {
      align: "center",
      value: "4",
      label: "Full recoveries \uD83C\uDF89"
    }))), /*#__PURE__*/React.createElement(Panel, {
      title: "Patients you're following",
      right: /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm"
      }, "View all"),
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 8px"
      }
    }, FOLLOWED.map(([t, st, tone, pct], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 0",
        borderTop: i ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-md)",
        background: "var(--pink-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, "\u2764\uFE0F"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--text-strong)",
        fontSize: 15,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 2
      }
    }, pct, "% funded")), /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, st))))));
  }
  function CampaignGrid({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px,1fr))",
        gap: 16
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(CampaignCard, {
      key: i,
      name: it.name,
      need: it.need,
      raised: it.raised,
      goal: it.goal,
      verified: true,
      image: window.KG_PHOTO(i % 2 ? window.KGP.community : window.KGP.hero, 480, 300, "faces")
    })));
  }
  const DISCOVER = [{
    name: "Grace's dialysis — 12 months",
    need: "Chronic kidney disease · National Hospital Abuja",
    raised: 410000,
    goal: 8400000
  }, {
    name: "Tunde's spinal surgery",
    need: "Herniated disc · Lakeshore",
    raised: 900000,
    goal: 5000000
  }, {
    name: "Fatima's leukemia treatment",
    need: "Leukemia · AKTH Kano",
    raised: 2100000,
    goal: 9200000
  }, {
    name: "Chidi's kidney transplant",
    need: "Renal failure · St. Nicholas",
    raised: 11200000,
    goal: 15000000
  }, {
    name: "Bola's chemotherapy",
    need: "Breast cancer · UCH Ibadan",
    raised: 3350000,
    goal: 6000000
  }, {
    name: "Ngozi's cardiac surgery",
    need: "Heart valve repair · UNTH Enugu",
    raised: 11950000,
    goal: 12000000
  }];
  function DonDiscover() {
    const cats = ["All", "Oncology", "Renal", "Cardiac", "Surgery", "Near goal"];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 16
      }
    }, cats.map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        padding: "7px 14px",
        borderRadius: "var(--radius-pill)",
        fontSize: 13.5,
        fontWeight: 700,
        cursor: "pointer",
        background: i === 0 ? "var(--olive-600)" : "var(--white)",
        color: i === 0 ? "#fff" : "var(--text-body)",
        border: "1px solid " + (i === 0 ? "var(--olive-600)" : "var(--border-strong)")
      }
    }, c))), /*#__PURE__*/React.createElement(CampaignGrid, {
      items: DISCOVER
    }));
  }
  function DonGive() {
    const recurring = [["Help Ada complete her radiotherapy", 25000, "12th monthly"], ["Emeka's chemotherapy", 15000, "4th monthly"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 18
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Make a gift"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginBottom: 14
      }
    }, [5000, 10000, 25000, 50000].map(a => /*#__PURE__*/React.createElement("span", {
      key: a,
      style: {
        padding: "10px 16px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--border-strong)",
        fontWeight: 700,
        cursor: "pointer",
        color: "var(--text-strong)"
      }
    }, /*#__PURE__*/React.createElement(Money, {
      amount: a,
      size: "sm"
    })))), /*#__PURE__*/React.createElement(Input, {
      label: "Or enter an amount",
      prefix: "\u20A6",
      placeholder: "10,000"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "14px 0",
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "repeat",
      size: 16,
      color: "var(--olive-600)"
    }), " Make this a monthly gift"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true,
      block: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "heart",
        size: 16,
        color: "#fff"
      })
    }, "Give a gift")), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(SectionLabel, null, "Recurring gifts"), recurring.map(([t, amt, note], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 0",
        borderTop: i ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "var(--radius-md)",
        background: "var(--pink-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, "\uD83D\uDD01"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: "var(--text-strong)",
        fontSize: 14,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Money, {
      amount: amt,
      size: "xs"
    }), " \xB7 ", note)), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Manage"))))));
  }
  function DonHistory() {
    const gifts = [["Help Ada complete her radiotherapy", 25000, "Mar 12, 2026", "In treatment"], ["Baby Chidi's heart surgery", 10000, "Feb 28, 2026", "Recovered"], ["Emeka's chemotherapy", 50000, "Feb 04, 2026", "Ongoing"], ["Grace's dialysis", 15000, "Jan 22, 2026", "Ongoing"], ["Mama Grace's dialysis", 20000, "Dec 18, 2025", "Recovered"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Total gifted",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 4200000,
        size: "sm"
      }),
      tone: "pink"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Gifts this year",
      value: "18"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Tax receipts",
      value: "18"
    })), /*#__PURE__*/React.createElement(Table, {
      cols: ["Campaign", "Amount", "Date", "Status", ""]
    }, gifts.map(([t, amt, date, status], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, t)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Money, {
      amount: amt,
      size: "xs"
    })), /*#__PURE__*/React.createElement(Td, null, date), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--success)",
        fontWeight: 600
      }
    }, status)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 15
      })
    }, "Receipt"))))));
  }
  function DonSaved() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(CampaignGrid, {
      items: DISCOVER.slice(0, 3)
    }));
  }
  window.KGWDash = {
    PatientDashboard,
    DonorDashboard
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/dashboards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/flows.jsx
try { (() => {
/* KindGifts web app — Donor post-donation success + 7-step Vetting Progress tracker. */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    Button,
    WhatsAppButton,
    Card,
    Badge,
    VerifiedBadge,
    ProgressBar,
    Money,
    StatBlock,
    CampaignCard,
    Input,
    GiftCTA
  } = NS;
  const Icon = window.KGWIcon;

  /* ---------- Donor campaign discovery grid ---------- */
  function Discovery() {
    const CAMPAIGNS = [{
      name: "Help Ada complete her radiotherapy",
      need: "20 sessions of radiotherapy at LUTH, Lagos",
      raised: 6500000,
      goal: 10500000,
      cat: "Oncology",
      img: window.KG_PHOTO(window.KGP.ada, 640, 400, "faces")
    }, {
      name: "Emeka's chemotherapy fund",
      need: "6 cycles of chemotherapy at UCH Ibadan",
      raised: 320000,
      goal: 8000000,
      cat: "Oncology",
      img: window.KG_PHOTO(window.KGP.community, 640, 400, "entropy")
    }, {
      name: "A new heart valve for Ngozi",
      need: "Cardiac surgery at UNTH Enugu",
      raised: 4200000,
      goal: 6500000,
      cat: "Cardiac",
      img: window.KG_PHOTO(window.KGP.hero, 640, 400, "entropy")
    }, {
      name: "Baby Tari's incubator care",
      need: "Neonatal intensive care, 4 weeks",
      raised: 890000,
      goal: 2400000,
      cat: "Paediatric",
      img: window.KG_PHOTO(window.KGP.ada, 641, 400, "faces")
    }, {
      name: "Musa's kidney dialysis",
      need: "Ongoing dialysis at NNPC Hospital Kaduna",
      raised: 1750000,
      goal: 3000000,
      cat: "Renal",
      img: window.KG_PHOTO(window.KGP.community, 641, 400, "entropy")
    }, {
      name: "Restore Blessing's sight",
      need: "Corneal transplant at LUTH",
      raised: 980000,
      goal: 1500000,
      cat: "Surgery",
      img: window.KG_PHOTO(window.KGP.hero, 642, 400, "entropy")
    }];
    const CATS = ["All", "Oncology", "Cardiac", "Paediatric", "Renal", "Surgery"];
    const [cat, setCat] = React.useState("All");
    const [q, setQ] = React.useState("");
    const shown = CAMPAIGNS.filter(c => (cat === "All" || c.cat === cat) && (q.trim() === "" || (c.name + " " + c.need).toLowerCase().includes(q.toLowerCase())));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1160,
        margin: "0 auto",
        padding: "36px 20px 90px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        maxWidth: 640,
        margin: "0 auto 28px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".08em",
        color: "var(--pink-600)"
      }
    }, "Give a Gift"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 38,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.1,
        margin: "8px 0 0"
      }
    }, "Become someone's medical miracle today."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16.5,
        lineHeight: 1.6,
        color: "var(--text-body)",
        marginTop: 12
      }
    }, "Browse verified medical campaigns. Every single kobo goes directly toward life-saving cancer care and medical treatments.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flex: "1 1 260px",
        maxWidth: 380,
        background: "var(--white)",
        border: "1.5px solid var(--border-strong)",
        borderRadius: "var(--radius-pill)",
        padding: "11px 16px"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 18,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("input", {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "Search by patient name, diagnosis, or hospital...",
      style: {
        border: "none",
        outline: "none",
        background: "transparent",
        flex: 1,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--text-strong)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, CATS.map(c => /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: () => setCat(c),
      style: {
        padding: "9px 16px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        border: `1.5px solid ${cat === c ? "var(--olive-600)" : "var(--border-strong)"}`,
        background: cat === c ? "var(--olive-600)" : "var(--white)",
        color: cat === c ? "#fff" : "var(--text-body)"
      }
    }, c)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 22
      },
      className: "kgw-3col"
    }, shown.map(c => /*#__PURE__*/React.createElement(CampaignCard, {
      key: c.name,
      name: c.name,
      need: c.need,
      raised: c.raised,
      goal: c.goal,
      image: c.img,
      onGive: () => {
        window.location.href = "../marketing/index.html#campaign";
      }
    }))), shown.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "60px 20px",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search-x",
      size: 32,
      color: "var(--text-muted)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 12,
        fontSize: 15
      }
    }, "No campaigns match your search. Try another term or category.")));
  }

  /* ---------- Donor post-donation success ---------- */
  function DonorSuccess() {
    const shell = {
      maxWidth: 620,
      margin: "0 auto",
      padding: "40px 20px 90px",
      textAlign: "center"
    };
    const campaignLink = "https://kindgifts.org/c/ada-radiotherapy";
    const shareText = `Hello, I am using KindGifts to raise funds for my treatment. Please consider reading my story, giving a gift if you can, or sharing this link with your network. Thank you for your love and support: ${campaignLink}`;
    const shareWhatsApp = () => window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank", "noopener");
    return /*#__PURE__*/React.createElement("div", {
      style: shell
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 84,
        height: 84,
        borderRadius: "50%",
        background: "var(--pink-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        fontSize: 40
      }
    }, "\u2764\uFE0F"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 600,
        color: "var(--text-strong)",
        marginTop: 18,
        lineHeight: 1.1
      }
    }, "Thank you for your life-changing gift!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16.5,
        lineHeight: 1.65,
        color: "var(--text-body)",
        marginTop: 14
      }
    }, "You have just eased a massive burden for ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-strong)"
      }
    }, "Ada"), " and brought her one step closer to recovery. An official receipt has been sent to your email."), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 24,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 14,
        paddingBottom: 14,
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.KG_PHOTO(window.KGP.ada, 96, 96, "faces"),
      alt: "Ada",
      style: {
        width: 44,
        height: 44,
        borderRadius: "50%",
        objectFit: "cover"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 15
      }
    }, "Ada Okafor"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, "Radiotherapy \xB7 LUTH")), /*#__PURE__*/React.createElement(VerifiedBadge, {
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "Your gift"), /*#__PURE__*/React.createElement(Money, {
      amount: 25000,
      size: "lg",
      color: "var(--pink-600)"
    })), /*#__PURE__*/React.createElement(ProgressBar, {
      raised: 6525000,
      goal: 10500000,
      height: 12
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginTop: 12,
        fontSize: 13,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 15,
      color: "var(--success)"
    }), " Held in tier-1 bank escrow \xB7 released to LUTH only after vetting.")), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 20,
        textAlign: "left",
        background: "var(--pink-50)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "user-plus",
      size: 20,
      color: "var(--pink-600)"
    }), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-strong)",
        margin: 0
      }
    }, "Create your donor account")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 16px",
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--text-body)"
      }
    }, "Save your details to follow Ada's recovery, keep all your receipts in one place, and give again in one tap."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Your name"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email address",
      type: "email",
      placeholder: "you@example.com"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone number",
      prefix: "+234",
      type: "tel",
      placeholder: "801 234 5678"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "give",
      block: true,
      label: "Create My Account"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0",
        fontSize: 12.5,
        textAlign: "center",
        color: "var(--text-muted)"
      }
    }, "No thanks \u2014 your receipt is already on its way by email.")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--olive-50)",
        borderRadius: "var(--radius-lg)",
        padding: 20,
        marginTop: 20,
        textAlign: "left",
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trending-up",
      size: 22,
      color: "var(--olive-600)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 15
      }
    }, "Want to double your impact?"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--text-body)"
      }
    }, "Share Ada's story with your network so others can give a gift too."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(WhatsAppButton, {
      label: "Share This Campaign",
      block: true,
      size: "lg",
      onClick: shareWhatsApp
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      block: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 18
      })
    }, "Download receipt"), /*#__PURE__*/React.createElement("button", {
      style: {
        background: "none",
        border: "none",
        color: "var(--text-muted)",
        cursor: "pointer",
        fontSize: 14,
        fontFamily: "var(--font-sans)"
      }
    }, "Follow Ada's recovery \u2192")));
  }

  /* ---------- 7-step Vetting Progress tracker (green = done, red = pending) ---------- */
  function VettingTracker() {
    const steps = [["rocket", "Campaign launched", "Page live in under 10 minutes and shareable.", "done"], ["scan-face", "AI pre-vetting passed", "Documents scanned for manipulation before going live.", "done"], ["heart-handshake", "Fundraising live", "Sharing with family, friends & WhatsApp communities.", "done"], ["flag", "Milestone reached · ₦500,000", "Full vetting is triggered at the funding milestone.", "done"], ["id-card", "KYC · NIN / BVN validated", "Identity & bank details confirmed against government databases.", "active"], ["stethoscope", "Clinical audit & consultation", "Zoho consultation booked with our clinical partner team.", "pending"], ["banknote", "Board approval & 100% disbursement", "Bi-weekly board sign-off, then full release to the hospital.", "pending"]];
    const doneCount = steps.filter(s => s[3] === "done").length;
    const meta = {
      done: {
        ring: "var(--success)",
        bg: "var(--success)",
        fg: "#fff",
        chipTone: "success",
        chip: "Completed"
      },
      active: {
        ring: "var(--pink-500)",
        bg: "var(--pink-50)",
        fg: "var(--pink-600)",
        chipTone: "pink",
        chip: "In progress"
      },
      pending: {
        ring: "var(--danger)",
        bg: "#fff",
        fg: "var(--danger)",
        chipTone: "danger",
        chip: "Pending"
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: "0 auto",
        padding: "28px 20px 90px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 28,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, "Verification progress"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: "var(--text-muted)"
      }
    }, doneCount, " of ", steps.length, " steps complete")), /*#__PURE__*/React.createElement("p", {
      style: {
        color: "var(--text-body)",
        fontSize: 15,
        marginTop: 0,
        marginBottom: 24,
        lineHeight: 1.6
      }
    }, "Follow every step from launch to disbursement. ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--success)",
        fontWeight: 700
      }
    }, "Green"), " is done, ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--danger)",
        fontWeight: 700
      }
    }, "red"), " is still pending \u2014 no funds are released until vetting is complete."), /*#__PURE__*/React.createElement(Card, {
      padding: 26
    }, steps.map(([ic, t, d, st], i) => {
      const m = meta[st];
      return /*#__PURE__*/React.createElement("div", {
        key: t,
        style: {
          display: "flex",
          gap: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 44,
          height: 44,
          borderRadius: "50%",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: m.bg,
          color: m.fg,
          border: `2px solid ${m.ring}`,
          boxShadow: st === "active" ? "0 0 0 4px var(--pink-100)" : "none"
        }
      }, st === "done" ? /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 20,
        color: "#fff"
      }) : /*#__PURE__*/React.createElement(Icon, {
        name: ic,
        size: 19,
        color: m.fg
      })), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 2,
          flex: 1,
          minHeight: 22,
          background: st === "done" ? "var(--success)" : "var(--border-strong)",
          margin: "6px 0"
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          paddingBottom: i < steps.length - 1 ? 22 : 0,
          flex: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 700,
          fontSize: 16.5,
          color: "var(--text-strong)"
        }
      }, t), /*#__PURE__*/React.createElement(Badge, {
        tone: m.chipTone
      }, m.chip)), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "4px 0 0",
          fontSize: 14,
          lineHeight: 1.55,
          color: "var(--text-body)"
        }
      }, d), st === "active" && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 12
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "outline",
        size: "sm",
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "upload",
          size: 15
        })
      }, "Upload Guarantors' Form")), st === "pending" && ic === "stethoscope" && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 12
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "calendar",
          size: 15
        })
      }, "Book consultation (Zoho)"))));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--info-bg)",
        borderRadius: "var(--radius-lg)",
        padding: 18,
        marginTop: 20,
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "lock",
      size: 20,
      color: "var(--info)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--sand-700)"
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Controlled disbursement:"), " for ongoing withdrawals, you'll upload receipts showing how prior funds were spent before the next release is approved.")));
  }
  window.KGWFlows = {
    DonorSuccess,
    VettingTracker,
    Discovery
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/flows.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/hospital.jsx
try { (() => {
/* KindGifts web app — Hospital partner portal. */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    Button,
    Card,
    Badge,
    Money,
    VerifiedBadge
  } = NS;
  const Icon = window.KGWIcon;
  const P = window.KGWPortal;
  const {
    Shell,
    Pad,
    Table,
    Td,
    MiniStat,
    Panel,
    SectionLabel
  } = P;
  function HospitalDashboard() {
    return /*#__PURE__*/React.createElement(Shell, {
      subtitle: "HOSPITAL PORTAL",
      tone: "dark",
      user: {
        initials: "LU",
        name: "LUTH Oncology",
        role: "Partner hospital"
      },
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        size: "sm",
        pill: true,
        leadingIcon: /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 15,
          color: "#fff"
        })
      }, "Confirm patient"),
      modules: [{
        key: "home",
        icon: "layout-dashboard",
        label: "Dashboard",
        render: HospHome
      }, {
        key: "verify",
        icon: "user-check",
        label: "Patient Verification",
        badge: 3,
        render: HospVerify
      }, {
        key: "docs",
        icon: "files",
        label: "Medical Documents",
        render: HospDocs
      }, {
        key: "consult",
        icon: "video",
        label: "Consultation Management",
        render: HospConsult
      }]
    });
  }
  const PATIENTS = [{
    name: "Ada Okafor",
    diag: "Breast cancer (Stage 2)",
    plan: "Radiotherapy — 25 sessions",
    status: "Awaiting confirmation",
    tone: "warning"
  }, {
    name: "Emeka Nwosu",
    diag: "Colorectal cancer",
    plan: "Chemotherapy — 6 cycles",
    status: "Awaiting confirmation",
    tone: "warning"
  }, {
    name: "Ijeoma Abah",
    diag: "Cervical cancer",
    plan: "Brachytherapy — 4 sessions",
    status: "Awaiting confirmation",
    tone: "warning"
  }, {
    name: "Samuel Ojo",
    diag: "Lymphoma",
    plan: "Immunotherapy — dose 2",
    status: "Confirmed",
    tone: "success"
  }];
  function HospHome() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginBottom: 20,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Patients awaiting confirmation",
      value: "3",
      tone: "warning"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Confirmed this month",
      value: "14",
      tone: "success"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Funds received (month)",
      value: /*#__PURE__*/React.createElement(Money, {
        amount: 41200000,
        size: "sm"
      }),
      tone: "pink"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Active care plans",
      value: "22"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: 18
      },
      className: "kgw-2col"
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "Recent activity"
    }, [["user-check", "Ada Okafor's care plan confirmed", "2h ago"], ["banknote", "₦10.5M received for Ijeoma Abah", "1d ago"], ["video", "Consultation completed — Emeka Nwosu", "2d ago"], ["file-check", "Medical report uploaded — Samuel Ojo", "3d ago"]].map(([ic, l, t], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 0",
        borderTop: i ? "1px solid var(--border-subtle)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: "var(--olive-50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 16,
      color: "var(--olive-600)"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        color: "var(--text-muted)"
      }
    }, t)))), /*#__PURE__*/React.createElement(Card, {
      style: {
        background: "var(--olive-50)",
        border: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "shield-check",
      size: 20,
      color: "var(--olive-600)"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 14
      }
    }, "Direct-to-care payouts"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 13.5,
        lineHeight: 1.5,
        color: "var(--text-body)"
      }
    }, "All approved funds route directly to your accredited hospital account \u2014 verified against each patient's care plan."))))));
  }
  function HospVerify() {
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement(Table, {
      cols: ["Patient", "Diagnosis", "Care plan", "Status", ""]
    }, PATIENTS.map((p, i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, p.name)), /*#__PURE__*/React.createElement(Td, null, p.diag), /*#__PURE__*/React.createElement(Td, null, p.plan), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: p.tone
    }, p.status)), /*#__PURE__*/React.createElement(Td, null, p.tone === "warning" ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm"
    }, "Confirm"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Flag")) : /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "eye",
        size: 15
      })
    }, "View"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        background: "var(--olive-50)",
        fontSize: 13.5,
        color: "var(--text-body)",
        marginTop: 16,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 17,
      color: "var(--olive-700)"
    }), " Confirming a patient verifies their diagnosis and treatment costs against your records \u2014 a required step before board approval."));
  }
  function HospDocs() {
    const docs = [["Ada Okafor", "Radiotherapy treatment plan", "file-text", "Mar 02, 2026"], ["Ada Okafor", "Hospital bill — itemized", "receipt", "Mar 02, 2026"], ["Emeka Nwosu", "Chemotherapy protocol", "file-text", "Mar 01, 2026"], ["Ijeoma Abah", "Pathology report", "microscope", "Feb 28, 2026"], ["Samuel Ojo", "Immunotherapy dosage sheet", "file-signature", "Feb 25, 2026"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Documents shared",
      value: "28"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Awaiting your upload",
      value: "2",
      tone: "warning"
    })), /*#__PURE__*/React.createElement(Table, {
      cols: ["Patient", "Document", "Shared", ""]
    }, docs.map(([pt, l, ic, date], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, pt)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17,
      color: "var(--olive-600)"
    }), l)), /*#__PURE__*/React.createElement(Td, null, date), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 15
      })
    }, "Download")))))), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 16,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "Upload a treatment record"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontSize: 14,
        color: "var(--text-body)"
      }
    }, "Attach care plans, bills, or reports for a patient's verification.")), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true,
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "upload",
        size: 16,
        color: "#fff"
      })
    }, "Upload document")));
  }
  function HospConsult() {
    const rows = [["Ada Okafor", "Mar 10, 2026 · 11:00", "Dr. Bello (Oncology)", "Completed", "success"], ["Emeka Nwosu", "Mar 12, 2026 · 14:30", "Dr. Bello (Oncology)", "Scheduled", "warning"], ["Ijeoma Abah", "—", "Unassigned", "To schedule", "olive"]];
    return /*#__PURE__*/React.createElement(Pad, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginBottom: 16,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      label: "Completed (month)",
      value: "9",
      tone: "success"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "Scheduled",
      value: "4",
      tone: "warning"
    }), /*#__PURE__*/React.createElement(MiniStat, {
      label: "To schedule",
      value: "3"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 14px",
        borderRadius: "var(--radius-sm)",
        background: "var(--info-bg)",
        fontSize: 13.5,
        color: "var(--text-body)",
        marginBottom: 16,
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "video",
      size: 17,
      color: "var(--info)"
    }), " Consultations are booked and hosted through ", /*#__PURE__*/React.createElement("strong", {
      style: {
        margin: "0 4px"
      }
    }, "Zoho Bookings"), " \u2014 synced automatically to this portal."), /*#__PURE__*/React.createElement(Table, {
      cols: ["Patient", "Slot", "Clinician", "Status", ""]
    }, rows.map(([pt, slot, doc, st, tone], i) => /*#__PURE__*/React.createElement("tr", {
      key: i
    }, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, pt)), /*#__PURE__*/React.createElement(Td, null, slot), /*#__PURE__*/React.createElement(Td, null, doc), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, st)), /*#__PURE__*/React.createElement(Td, null, st === "Completed" ? /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "file-text",
        size: 15
      })
    }, "Notes") : /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      leadingIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "calendar",
        size: 15
      })
    }, st === "Scheduled" ? "Reschedule" : "Book slot"))))));
  }
  window.KGWHospital = {
    HospitalDashboard
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/hospital.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/onboarding.jsx
try { (() => {
/* KindGifts web app — "Need a Gift" patient onboarding (stepped). */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    GiftCTA,
    Button,
    WhatsAppButton,
    Card,
    Badge,
    Input,
    Textarea,
    Select,
    FileUpload,
    StepIndicator
  } = NS;
  const Icon = window.KGWIcon;
  function Onboarding() {
    const [step, setStep] = React.useState(0); // 0 welcome, 1-4 steps, 5 success
    const steps = ["Account", "Your story", "The need", "Verify"];
    const shell = {
      maxWidth: 640,
      margin: "0 auto",
      padding: "32px 20px 80px"
    };
    if (step === 0) return /*#__PURE__*/React.createElement("div", {
      style: {
        ...shell,
        textAlign: "center",
        paddingTop: 56
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 52
      }
    }, "\uD83C\uDF81"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 38,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.1,
        marginTop: 8
      }
    }, "We are here to stand with you."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.65,
        color: "var(--text-body)",
        marginTop: 16
      }
    }, "Sharing your health journey can be tough, but you don't have to carry the financial burden alone. Let's help your community wrap their arms around you with the gift of healthcare."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(GiftCTA, {
      type: "need",
      size: "lg",
      label: "I Need a Health Gift",
      onClick: () => setStep(1)
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 13,
        color: "var(--text-muted)",
        marginTop: 16
      }
    }, "Setting up a campaign is entirely free \xB7 takes under 10 minutes"));
    if (step === 5) return /*#__PURE__*/React.createElement("div", {
      style: {
        ...shell,
        textAlign: "center",
        paddingTop: 48
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 72,
        height: 72,
        borderRadius: "50%",
        background: "var(--warning-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 34,
      color: "var(--warning)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "warning"
    }, "Pending review")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 34,
        fontWeight: 600,
        color: "var(--text-strong)",
        lineHeight: 1.15,
        margin: "14px 0 0"
      }
    }, "Your campaign has been submitted!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.65,
        color: "var(--text-body)",
        margin: "14px 0 0"
      }
    }, "Thank you, Ada. Your request is now ", /*#__PURE__*/React.createElement("strong", null, "awaiting review by the KindGifts admin team"), ". It will not be visible to donors until it's approved \u2014 this protects everyone in the community."), /*#__PURE__*/React.createElement(Card, {
      style: {
        marginTop: 24,
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "var(--text-muted)",
        textTransform: "uppercase",
        letterSpacing: ".06em",
        marginBottom: 14
      }
    }, "What happens next"), [["AI pre-vetting of your documents", "done"], ["Admin team reviews your submission", "active"], ["Approved &amp; published — you get your shareable link", "pending"]].map(([l, st], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "9px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: "50%",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: st === "done" ? "var(--success)" : st === "active" ? "var(--warning-bg)" : "var(--sand-100)",
        color: st === "done" ? "#fff" : st === "active" ? "var(--warning)" : "var(--text-muted)",
        fontSize: 12,
        fontWeight: 700,
        border: st === "active" ? "2px solid var(--warning)" : "none"
      }
    }, st === "done" ? "✓" : st === "active" ? "•" : ""), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: st === "pending" ? "var(--text-muted)" : "var(--text-body)",
        fontWeight: st === "active" ? 700 : 400
      },
      dangerouslySetInnerHTML: {
        __html: l
      }
    }), st === "active" && /*#__PURE__*/React.createElement(Badge, {
      tone: "warning",
      style: {
        marginLeft: "auto"
      }
    }, "In review")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        fontSize: 13.5,
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 15,
      color: "var(--text-muted)"
    }), " We'll notify you by WhatsApp & email the moment it's approved \u2014 usually within 48 hours."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true,
      block: true,
      size: "lg",
      onClick: () => {
        window.location.hash = "#patient";
        window.location.reload();
      }
    }, "Go to my dashboard"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      block: true,
      onClick: () => setStep(0)
    }, "Back to start")));
    return /*#__PURE__*/React.createElement("div", {
      style: shell
    }, /*#__PURE__*/React.createElement(StepIndicator, {
      steps: steps,
      current: step - 1,
      style: {
        marginBottom: 32
      }
    }), /*#__PURE__*/React.createElement(Card, {
      padding: 28
    }, step === 1 && /*#__PURE__*/React.createElement(AccountStep, null), step === 2 && /*#__PURE__*/React.createElement(Step1, null), step === 3 && /*#__PURE__*/React.createElement(Step2, null), step === 4 && /*#__PURE__*/React.createElement(Step3, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 28,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setStep(step - 1)
    }, "\u2190 Back"), step < 4 ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      pill: true,
      onClick: () => setStep(step + 1)
    }, "Continue") : /*#__PURE__*/React.createElement(GiftCTA, {
      type: "need",
      label: "Submit for review",
      onClick: () => setStep(5)
    }))));
  }
  function AccountStep() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      n: "1",
      t: "Create Your Account",
      d: "This keeps your campaign secure and lets you manage it anytime."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email address",
      type: "email",
      placeholder: "you@example.com",
      helper: "Your receipt and campaign updates are sent here."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone number",
      prefix: "+234",
      type: "tel",
      placeholder: "801 234 5678",
      helper: "We'll send verification codes and donor alerts here."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Create a password",
      type: "password",
      placeholder: "At least 8 characters"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Confirm password",
      type: "password",
      placeholder: "Re-enter your password"
    }));
  }
  function Step1() {
    const [beneficiary, setBeneficiary] = React.useState("Myself");
    const isOrg = beneficiary === "A Hospital / Charity";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      n: "2",
      t: "The Story",
      d: "Your community just wants to know how to support you."
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Who is this health gift for?",
      options: ["Myself", "A family member", "A friend", "A Hospital / Charity"],
      value: beneficiary,
      onChange: e => setBeneficiary(e.target.value)
    }), isOrg && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 16,
        background: "var(--olive-50)",
        borderRadius: "var(--radius-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "Organisation details"), /*#__PURE__*/React.createElement(Input, {
      label: "Registered legal name",
      placeholder: "e.g. Sebeccly Cancer Care Foundation"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "RC number",
      placeholder: "e.g. RC 1234567",
      helper: "Your CAC registration number, so we can verify the organisation."
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Hospital / charity address",
      rows: 2,
      placeholder: "Street, city, state"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Campaign title",
      placeholder: "e.g. Help Ada complete her radiotherapy"
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Tell your story",
      rows: 5,
      helper: "Share a bit about your diagnosis and what this treatment means for your recovery. Keep it simple."
    }), /*#__PURE__*/React.createElement(FileUpload, {
      label: "Upload a photo or short video",
      icon: "\uD83D\uDCF7",
      hint: "Use a clear photo \u2014 this helps donors connect with you better."
    }));
  }
  function Step2() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      n: "3",
      t: "The Financial Need",
      d: "So donors know exactly how their gift helps."
    }), /*#__PURE__*/React.createElement(Input, {
      label: "What is your funding goal?",
      prefix: "\u20A6",
      placeholder: "10,500,000",
      helper: "The total amount you need to raise for your treatment."
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "What will this gift cover?",
      rows: 4,
      placeholder: "e.g. Radiotherapy \u2014 20 sessions, surgery follow-up, medications & supportive care",
      helper: "Describe in your own words what the total will go toward, so donors see where their gift helps."
    }));
  }
  function Step3() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      n: "4",
      t: "Trust & Verification",
      d: "This is what lets donors give with total confidence."
    }), /*#__PURE__*/React.createElement(FileUpload, {
      label: "Upload Medical Verification",
      secure: true,
      hint: "Upload a recent medical report, bill, or hospital ID. This stays private with our clinical verification team \u2014 it is never posted publicly, but it tells donors your campaign is verified and secure."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--info-bg)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "info",
      size: 20,
      color: "var(--info)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14,
        lineHeight: 1.55,
        color: "var(--sand-700)"
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Guarantors' Form"), " \u2014 once your campaign reaches ", /*#__PURE__*/React.createElement("strong", null, "\u20A6500,000"), " in donations, we'll ask you to upload a completed Guarantors' Form. This confirms your identity and intended use of funds before any money is released.")));
  }
  function SectionHead({
    n,
    t,
    d
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "50%",
        background: "var(--pink-500)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        flexShrink: 0
      }
    }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontSize: 14,
        color: "var(--text-muted)"
      }
    }, d)));
  }
  window.KGWOnboarding = Onboarding;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/onboarding.jsx", error: String((e && e.message) || e) }); }

// ui_kits/webapp/portal.jsx
try { (() => {
/* KindGifts web app — shared Portal shell + data-view atoms.
 * Every dashboard (patient, donor, hospital, admin) is a Shell with a sidebar of modules. */
(function () {
  const NS = window.KindGiftsBySebecclyDesignSystem_d02769;
  const {
    Badge
  } = NS;
  const Icon = window.KGWIcon;

  /* Sidebar + topbar + module switcher. modules: [{key,icon,label,badge,render}] */
  function Shell({
    subtitle,
    modules,
    tone = "dark",
    user,
    initial,
    action
  }) {
    const [sel, setSel] = React.useState(initial || modules[0].key);
    const active = modules.find(m => m.key === sel) || modules[0];
    const dark = tone === "dark";
    const sideBg = dark ? "var(--olive-800)" : "var(--white)";
    const dim = dark ? "color-mix(in srgb,var(--cream) 80%,transparent)" : "var(--text-body)";
    const brandColor = dark ? "var(--cream)" : "var(--olive-700)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "230px 1fr",
        minHeight: 640,
        background: "var(--sand-50)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        border: "1px solid var(--border-subtle)"
      },
      className: "kgw-admin"
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        background: sideBg,
        color: dim,
        padding: "20px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRight: dark ? "none" : "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px 16px"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "logo.png",
      alt: "KindGifts",
      style: {
        height: 30,
        display: "block",
        marginBottom: 8,
        filter: dark ? "brightness(0) invert(1)" : "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        display: "block",
        color: "var(--pink-300)",
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        letterSpacing: ".08em"
      }
    }, subtitle)), modules.map(m => {
      const on = m.key === sel;
      const onBg = dark ? "rgba(255,255,255,.12)" : "var(--olive-50)";
      const onFg = dark ? "var(--cream)" : "var(--olive-700)";
      return /*#__PURE__*/React.createElement("div", {
        key: m.key,
        onClick: () => setSel(m.key),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 10px",
          borderRadius: "var(--radius-sm)",
          fontSize: 14,
          fontWeight: on ? 700 : 500,
          background: on ? onBg : "transparent",
          color: on ? onFg : dim,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: m.icon,
        size: 17,
        color: "currentColor"
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, m.label), m.badge != null && /*#__PURE__*/React.createElement(Badge, {
        tone: "pink"
      }, m.badge));
    }), user && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto",
        padding: "12px 8px 0",
        borderTop: dark ? "1px solid rgba(255,255,255,.14)" : "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        background: "var(--pink-500)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 12,
        flexShrink: 0
      }
    }, user.initials), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.3,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: dark ? "var(--cream)" : "var(--text-strong)",
        fontWeight: 600,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11
      }
    }, user.role)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 20px",
        borderBottom: "1px solid var(--border-subtle)",
        background: "var(--white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 20,
        fontWeight: 600,
        color: "var(--text-strong)"
      }
    }, active.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, action, /*#__PURE__*/React.createElement("div", {
      className: "kgw-search",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 12px",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--radius-pill)",
        color: "var(--text-muted)",
        fontSize: 13,
        minWidth: 160
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 15,
      color: "var(--text-muted)"
    }), "Search\u2026"))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "auto"
      }
    }, React.createElement(active.render))));
  }

  /* ---- data atoms ---- */
  const Pad = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      ...style
    }
  }, children);
  function Table({
    cols,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        overflowX: "auto",
        background: "var(--white)"
      }
    }, /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        minWidth: 520,
        borderCollapse: "collapse",
        fontSize: 13.5,
        color: "var(--text-body)"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        background: "var(--sand-50)"
      }
    }, cols.map((c, i) => /*#__PURE__*/React.createElement("th", {
      key: i,
      style: {
        textAlign: "left",
        padding: "10px 14px",
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--text-muted)",
        fontWeight: 700
      }
    }, c)))), /*#__PURE__*/React.createElement("tbody", null, children)));
  }
  const Td = ({
    children,
    style
  }) => /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 14px",
      verticalAlign: "middle",
      borderTop: "1px solid var(--border-subtle)",
      ...style
    }
  }, children);
  function MiniStat({
    label,
    value,
    tone
  }) {
    const c = tone === "success" ? "var(--success)" : tone === "warning" ? "var(--warning)" : tone === "pink" ? "var(--pink-600)" : "var(--text-strong)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 150px",
        padding: "12px 14px",
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--text-muted)",
        fontWeight: 700
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 20,
        color: c,
        marginTop: 4
      }
    }, value));
  }
  function BigStat({
    label,
    value,
    sub,
    tone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        textTransform: "uppercase",
        letterSpacing: ".06em",
        color: "var(--text-muted)",
        fontWeight: 700
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 24,
        color: "var(--text-strong)",
        margin: "6px 0 4px",
        fontFamily: "var(--font-display)"
      }
    }, value), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: tone === "danger" ? "var(--danger)" : "var(--success)",
        fontWeight: 600
      }
    }, sub));
  }
  function Panel({
    title,
    children,
    right,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16,
        background: "var(--white)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-md)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, title), right), children);
  }
  const SectionLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".06em",
      color: "var(--text-muted)",
      marginBottom: 10
    }
  }, children);

  /* Horizontal split-bar (analytics) */
  function SplitBars({
    rows
  }) {
    return rows.map(([l, v, col]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 13,
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-body)"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, v, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 999,
        background: "var(--sand-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: v + "%",
        height: "100%",
        borderRadius: 999,
        background: col
      }
    }))));
  }
  /* Vertical bar chart */
  function BarChart({
    bars,
    unit
  }) {
    const max = Math.max(...bars.map(b => b[1]));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 14,
        height: 200,
        padding: "10px 4px 0"
      }
    }, bars.map(([m, v]) => /*#__PURE__*/React.createElement("div", {
      key: m,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        height: "100%",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, v, unit || ""), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 46,
        height: v / max * 100 + "%",
        background: "var(--pink-500)",
        borderRadius: "6px 6px 0 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--text-muted)"
      }
    }, m))));
  }

  /* Empty state */
  function Empty({
    icon,
    title,
    body
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        padding: "50px 20px",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        margin: "0 auto 14px",
        borderRadius: "50%",
        background: "var(--sand-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 24,
      color: "var(--text-muted)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)",
        fontSize: 16
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px auto 0",
        maxWidth: 340,
        fontSize: 14,
        lineHeight: 1.5
      }
    }, body));
  }
  window.KGWPortal = {
    Shell,
    Pad,
    Table,
    Td,
    MiniStat,
    BigStat,
    Panel,
    SectionLabel,
    SplitBars,
    BarChart,
    Empty
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/webapp/portal.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GiftCTA = __ds_scope.GiftCTA;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CampaignCard = __ds_scope.CampaignCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Money = __ds_scope.Money;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

__ds_ns.TrustChip = __ds_scope.TrustChip;

__ds_ns.VerifiedBadge = __ds_scope.VerifiedBadge;

__ds_ns.AmountOption = __ds_scope.AmountOption;

__ds_ns.FileUpload = __ds_scope.FileUpload;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

})();
