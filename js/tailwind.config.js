// Shared Tailwind CSS Configuration — used by all portfolio pages
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary":                    "#c4c0ff",
        "primary-container":          "#8781ff",
        "primary-fixed":              "#e3dfff",
        "primary-fixed-dim":          "#c4c0ff",
        "on-primary":                 "#2000a4",
        "on-primary-container":       "#1b0091",
        "on-primary-fixed":           "#100069",
        "on-primary-fixed-variant":   "#3622ca",
        "inverse-primary":            "#4f44e2",
        "secondary":                  "#c6c6c7",
        "secondary-container":        "#454747",
        "secondary-fixed":            "#e2e2e2",
        "secondary-fixed-dim":        "#c6c6c7",
        "on-secondary":               "#2f3131",
        "on-secondary-container":     "#b4b5b5",
        "on-secondary-fixed":         "#1a1c1c",
        "on-secondary-fixed-variant": "#454747",
        "tertiary":                   "#ffb785",
        "tertiary-container":         "#db761f",
        "tertiary-fixed":             "#ffdcc6",
        "tertiary-fixed-dim":         "#ffb785",
        "on-tertiary":                "#502500",
        "on-tertiary-container":      "#461f00",
        "on-tertiary-fixed":          "#301400",
        "on-tertiary-fixed-variant":  "#713700",
        "error":                      "#ffb4ab",
        "error-container":            "#93000a",
        "on-error":                   "#690005",
        "on-error-container":         "#ffdad6",
        "surface":                    "#13121b",
        "surface-dim":                "#13121b",
        "surface-bright":             "#393842",
        "surface-variant":            "#35343e",
        "surface-container-lowest":   "#0e0d16",
        "surface-container-low":      "#1b1b24",
        "surface-container":          "#1f1f28",
        "surface-container-high":     "#2a2933",
        "surface-container-highest":  "#35343e",
        "surface-tint":               "#c4c0ff",
        "background":                 "#0a0a0f",
        "on-surface":                 "#e4e1ee",
        "on-surface-variant":         "#c7c4d8",
        "on-background":              "#e4e1ee",
        "inverse-surface":            "#e4e1ee",
        "inverse-on-surface":         "#302f39",
        "outline":                    "#918fa1",
        "outline-variant":            "#464555"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg:      "0.25rem",
        xl:      "0.5rem",
        full:    "0.75rem"
      },
      spacing: {
        "stack-sm":               "8px",
        "stack-md":               "16px",
        "stack-lg":               "32px",
        "gutter":                 "32px",
        "container-max":          "1200px",
        "section-padding":        "100px",
        "section-padding-mobile": "60px"
      },
      fontFamily: {
        "display-xl":        ["Space Grotesk"],
        "display-xl-mobile": ["Space Grotesk"],
        "headline-lg":       ["Space Grotesk"],
        "headline-lg-mobile":["Space Grotesk"],
        "headline-md":       ["Space Grotesk"],
        "body-lg":           ["Inter"],
        "body-md":           ["Inter"],
        "label-caps":        ["Inter"]
      },
      fontSize: {
        "display-xl":        ["80px",  { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-xl-mobile": ["48px",  { lineHeight: "1.1", letterSpacing: "-0.04em", fontWeight: "700" }],
        "headline-lg":       ["48px",  { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-lg-mobile":["32px",  { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md":       ["32px",  { lineHeight: "1.3", fontWeight: "500" }],
        "body-lg":           ["18px",  { lineHeight: "1.6", fontWeight: "400" }],
        "body-md":           ["16px",  { lineHeight: "1.6", fontWeight: "400" }],
        "label-caps":        ["12px",  { lineHeight: "1",   letterSpacing: "0.1em", fontWeight: "600" }]
      }
    }
  }
}
