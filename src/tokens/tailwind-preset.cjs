// AI Design System — Tailwind preset. Load src/tokens/tokens.css first; classes read its CSS variables.
// Usage: presets: [require("ai-design-system/tailwind")]  ·  e.g. bg-bg-brand text-text-on-brand rounded-md p-lg shadow-focus-ring
/** @type {import("tailwindcss").Config} */
module.exports = {
  "darkMode": [
    "selector",
    "[data-theme=\"dark\"]"
  ],
  "theme": {
    "extend": {
      "colors": {
        "bg": {
          "default": "var(--bg-default)",
          "subtle": "var(--bg-subtle)",
          "muted": "var(--bg-muted)",
          "hover": "var(--bg-hover)",
          "pressed": "var(--bg-pressed)",
          "disabled": "var(--bg-disabled)",
          "strong": "var(--bg-strong)",
          "inverse": "var(--bg-inverse)",
          "overlay": "var(--bg-overlay)",
          "brand": "var(--bg-brand)",
          "brand-hover": "var(--bg-brand-hover)",
          "selected": "var(--bg-selected)",
          "brand-subtle": "var(--bg-brand-subtle)",
          "success-subtle": "var(--bg-success-subtle)",
          "warning-subtle": "var(--bg-warning-subtle)",
          "danger": "var(--bg-danger)",
          "danger-hover": "var(--bg-danger-hover)",
          "danger-subtle": "var(--bg-danger-subtle)"
        },
        "text": {
          "primary": "var(--text-primary)",
          "secondary": "var(--text-secondary)",
          "placeholder": "var(--text-placeholder)",
          "disabled": "var(--text-disabled)",
          "on-brand": "var(--text-on-brand)",
          "inverse": "var(--text-inverse)",
          "brand": "var(--text-brand)",
          "success": "var(--text-success)",
          "warning": "var(--text-warning)",
          "danger": "var(--text-danger)"
        },
        "border": {
          "default": "var(--border-default)",
          "strong": "var(--border-strong)",
          "focus": "var(--border-focus)",
          "brand": "var(--border-brand)",
          "danger": "var(--border-danger)",
          "disabled": "var(--border-disabled)"
        },
        "icon": {
          "primary": "var(--icon-primary)",
          "secondary": "var(--icon-secondary)",
          "on-brand": "var(--icon-on-brand)",
          "brand": "var(--icon-brand)"
        }
      },
      "spacing": {
        "none": "var(--space-none)",
        "2xs": "var(--space-2xs)",
        "xs": "var(--space-xs)",
        "sm": "var(--space-sm)",
        "md": "var(--space-md)",
        "lg": "var(--space-lg)",
        "xl": "var(--space-xl)",
        "2xl": "var(--space-2xl)",
        "3xl": "var(--space-3xl)",
        "4xl": "var(--space-4xl)"
      },
      "borderRadius": {
        "none": "var(--radius-none)",
        "sm": "var(--radius-sm)",
        "md": "var(--radius-md)",
        "lg": "var(--radius-lg)",
        "xl": "var(--radius-xl)",
        "full": "var(--radius-full)"
      },
      "boxShadow": {
        "sm": "var(--shadow-sm)",
        "md": "var(--shadow-md)",
        "lg": "var(--shadow-lg)",
        "focus-ring": "var(--focus-ring)",
        "focus-ring-inset": "var(--focus-ring-inset)"
      },
      "fontFamily": {
        "sans": [
          "var(--font-sans)"
        ],
        "mono": [
          "var(--font-mono)"
        ]
      },
      "fontSize": {
        "display": [
          "48px",
          {
            "lineHeight": "56px",
            "fontWeight": "700",
            "letterSpacing": "-1px"
          }
        ],
        "heading-h1": [
          "36px",
          {
            "lineHeight": "44px",
            "fontWeight": "700",
            "letterSpacing": "-0.5px"
          }
        ],
        "heading-h2": [
          "28px",
          {
            "lineHeight": "36px",
            "fontWeight": "600",
            "letterSpacing": "-0.25px"
          }
        ],
        "heading-h3": [
          "22px",
          {
            "lineHeight": "30px",
            "fontWeight": "600",
            "letterSpacing": "0px"
          }
        ],
        "heading-h4": [
          "18px",
          {
            "lineHeight": "26px",
            "fontWeight": "600",
            "letterSpacing": "0px"
          }
        ],
        "body-large": [
          "18px",
          {
            "lineHeight": "28px",
            "fontWeight": "400",
            "letterSpacing": "0px"
          }
        ],
        "body-medium": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "400",
            "letterSpacing": "0px"
          }
        ],
        "body-small": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "400",
            "letterSpacing": "0px"
          }
        ],
        "label-large": [
          "16px",
          {
            "lineHeight": "24px",
            "fontWeight": "600",
            "letterSpacing": "0px"
          }
        ],
        "label-medium": [
          "14px",
          {
            "lineHeight": "20px",
            "fontWeight": "600",
            "letterSpacing": "0px"
          }
        ],
        "label-small": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "600",
            "letterSpacing": "0.2px"
          }
        ],
        "label-xsmall": [
          "11px",
          {
            "lineHeight": "14px",
            "fontWeight": "600",
            "letterSpacing": "0.2px"
          }
        ],
        "caption": [
          "12px",
          {
            "lineHeight": "16px",
            "fontWeight": "400",
            "letterSpacing": "0px"
          }
        ],
        "code": [
          "13px",
          {
            "lineHeight": "20px",
            "fontWeight": "400",
            "letterSpacing": "0px"
          }
        ]
      },
      "minHeight": {
        "touch": "var(--size-touch)"
      },
      "minWidth": {
        "touch": "var(--size-touch)"
      }
    }
  }
};
