// AI Design System tokens — generated from tokens.json. Do not edit by hand.

export const themes = ["light", "dark"] as const;
export type Theme = typeof themes[number];

/** Resolved color values per theme. */
export const color = {
  "bg-default": { light: "#ffffff", dark: "#0f172a" },
  "bg-subtle": { light: "#f8fafc", dark: "#162033" },
  "bg-muted": { light: "#f1f5f9", dark: "#1e293b" },
  "bg-hover": { light: "#f1f5f9", dark: "#1e293b" },
  "bg-pressed": { light: "#e2e8f0", dark: "#334155" },
  "bg-disabled": { light: "#f1f5f9", dark: "#1e293b" },
  "bg-strong": { light: "#8190a6", dark: "#64748b" },
  "bg-inverse": { light: "#0f172a", dark: "#f8fafc" },
  "bg-overlay": { light: "rgba(15,23,42,0.45)", dark: "rgba(0,0,0,0.6)" },
  "bg-brand": { light: "#4f46e5", dark: "#4f46e5" },
  "bg-brand-hover": { light: "#4338ca", dark: "#4338ca" },
  "bg-selected": { light: "#4f46e5", dark: "#6366f1" },
  "bg-brand-subtle": { light: "#eef2ff", dark: "#1e1b4b" },
  "bg-success-subtle": { light: "#dcfce7", dark: "#052e16" },
  "bg-warning-subtle": { light: "#fef3c7", dark: "#451a03" },
  "bg-danger": { light: "#dc2626", dark: "#dc2626" },
  "bg-danger-hover": { light: "#b91c1c", dark: "#b91c1c" },
  "bg-danger-subtle": { light: "#fee2e2", dark: "#450a0a" },
  "text-primary": { light: "#0f172a", dark: "#f8fafc" },
  "text-secondary": { light: "#475569", dark: "#94a3b8" },
  "text-placeholder": { light: "#64748b", dark: "#94a3b8" },
  "text-disabled": { light: "#94a3b8", dark: "#475569" },
  "text-on-brand": { light: "#ffffff", dark: "#ffffff" },
  "text-inverse": { light: "#ffffff", dark: "#0f172a" },
  "text-brand": { light: "#4f46e5", dark: "#a5b4fc" },
  "text-success": { light: "#15803d", dark: "#4ade80" },
  "text-warning": { light: "#b45309", dark: "#fbbf24" },
  "text-danger": { light: "#b91c1c", dark: "#f87171" },
  "border-default": { light: "#e2e8f0", dark: "#1e293b" },
  "border-strong": { light: "#8190a6", dark: "#64748b" },
  "border-focus": { light: "#6366f1", dark: "#818cf8" },
  "border-brand": { light: "#4f46e5", dark: "#818cf8" },
  "border-danger": { light: "#ef4444", dark: "#f87171" },
  "border-disabled": { light: "#e2e8f0", dark: "#1e293b" },
  "icon-primary": { light: "#0f172a", dark: "#f8fafc" },
  "icon-secondary": { light: "#64748b", dark: "#94a3b8" },
  "icon-on-brand": { light: "#ffffff", dark: "#ffffff" },
  "icon-brand": { light: "#4f46e5", dark: "#a5b4fc" },
} as const;
export type ColorToken = keyof typeof color;

/** CSS variable for a token, e.g. cssVar("bg-brand") → "var(--bg-brand)". */
export const cssVar = (name: string) => `var(--${name})`;

export const spacing = {
  "space-none": "0px",
  "space-2xs": "2px",
  "space-xs": "4px",
  "space-sm": "8px",
  "space-md": "12px",
  "space-lg": "16px",
  "space-xl": "24px",
  "space-2xl": "32px",
  "space-3xl": "48px",
  "space-4xl": "64px",
} as const;

export const radius = {
  "radius-none": "0px",
  "radius-sm": "2px",
  "radius-md": "4px",
  "radius-lg": "8px",
  "radius-xl": "16px",
  "radius-full": "9999px",
} as const;

export const size = {
  "size-touch": "44px",
  "size-row": "56px",
  "size-row-2": "72px",
  "size-bar": "56px",
  "size-bottom-nav": "64px",
  "size-fab": "56px",
} as const;

export const shadow = {
  "shadow-sm": {"light":"0 1px 2px rgba(15,23,42,0.06)","dark":"0 1px 2px rgba(0,0,0,0.4)"},
  "shadow-md": {"light":"0 4px 8px -2px rgba(15,23,42,0.08), 0 2px 4px -2px rgba(15,23,42,0.06)","dark":"0 4px 8px -2px rgba(0,0,0,0.5), 0 2px 4px -2px rgba(0,0,0,0.4)"},
  "shadow-lg": {"light":"0 12px 24px -4px rgba(15,23,42,0.10), 0 4px 8px -4px rgba(15,23,42,0.06)","dark":"0 12px 24px -4px rgba(0,0,0,0.6), 0 4px 8px -4px rgba(0,0,0,0.4)"},
  "focus-ring": {"light":"0 0 0 2px #ffffff, 0 0 0 4px #6366f1","dark":"0 0 0 2px #0f172a, 0 0 0 4px #818cf8"},
  "focus-ring-inset": {"light":"inset 0 0 0 2px #6366f1","dark":"inset 0 0 0 2px #818cf8"},
} as const;

export const font = {
  "sans": "\"Plus Jakarta Sans\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
  "mono": "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
} as const;

export const typography = {
  "display": { family: "sans", fontSize: "48px", lineHeight: "56px", fontWeight: 700, letterSpacing: "-1px" },
  "heading-h1": { family: "sans", fontSize: "36px", lineHeight: "44px", fontWeight: 700, letterSpacing: "-0.5px" },
  "heading-h2": { family: "sans", fontSize: "28px", lineHeight: "36px", fontWeight: 600, letterSpacing: "-0.25px" },
  "heading-h3": { family: "sans", fontSize: "22px", lineHeight: "30px", fontWeight: 600, letterSpacing: "0px" },
  "heading-h4": { family: "sans", fontSize: "18px", lineHeight: "26px", fontWeight: 600, letterSpacing: "0px" },
  "body-large": { family: "sans", fontSize: "18px", lineHeight: "28px", fontWeight: 400, letterSpacing: "0px" },
  "body-medium": { family: "sans", fontSize: "16px", lineHeight: "24px", fontWeight: 400, letterSpacing: "0px" },
  "body-small": { family: "sans", fontSize: "14px", lineHeight: "20px", fontWeight: 400, letterSpacing: "0px" },
  "label-large": { family: "sans", fontSize: "16px", lineHeight: "24px", fontWeight: 600, letterSpacing: "0px" },
  "label-medium": { family: "sans", fontSize: "14px", lineHeight: "20px", fontWeight: 600, letterSpacing: "0px" },
  "label-small": { family: "sans", fontSize: "12px", lineHeight: "16px", fontWeight: 600, letterSpacing: "0.2px" },
  "label-xsmall": { family: "sans", fontSize: "11px", lineHeight: "14px", fontWeight: 600, letterSpacing: "0.2px" },
  "caption": { family: "sans", fontSize: "12px", lineHeight: "16px", fontWeight: 400, letterSpacing: "0px" },
  "code": { family: "mono", fontSize: "13px", lineHeight: "20px", fontWeight: 400, letterSpacing: "0px" },
} as const;
