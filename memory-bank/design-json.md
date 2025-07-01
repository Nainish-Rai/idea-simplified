```json
{
  "name": "Samuel Spenser Photography Portfolio",
  "version": "1.0.0",
  "description": "A visual style guide for a modern, minimalist photography portfolio website with a focus on strong typography, high-contrast layouts, and a clean grid system. The design features distinct dark and light themes.",
  "aesthetic": {
    "mood": [
      "Modern",
      "Minimalist",
      "Professional",
      "High-End",
      "Artistic",
      "Cinematic"
    ],
    "keywords": [
      "High Contrast",
      "Grid-Based",
      "Asymmetrical Layout",
      "Bold Typography",
      "Generous Whitespace",
      "Micro-interactions",
      "Dual-Theme"
    ]
  },
  "colorPalette": {
    "darkTheme": {
      "background": "#111111",
      "surface": "#1A1A1A",
      "primaryText": "#FFFFFF",
      "secondaryText": "#A0A0A0",
      "accent": "#FFFFFF",
      "divider": "#2C2C2C"
    },
    "lightTheme": {
      "background": "#F5F5F5",
      "surface": "#FFFFFF",
      "primaryText": "#111111",
      "secondaryText": "#666666",
      "accent": "#000000",
      "divider": "#E0E0E0"
    },
    "callToAction": {
      "background": "#1ED760",
      "text": "#000000",
      "description": "Used for standout elements like the chat bubbles."
    }
  },
  "typography": {
    "primaryFont": {
      "name": "General Sans-Serif",
      "family": "Inter, 'Helvetica Neue', Arial, sans-serif",
      "url": "https://fonts.google.com/specimen/Inter",
      "description": "A versatile sans-serif used for most UI text, from body to headings."
    },
    "accentFont": {
      "name": "Accent Italic Serif",
      "family": "'Playfair Display', 'Georgia', serif",
      "style": "italic",
      "description": "An elegant italic serif used for emphasis, like the word 'Captured'."
    },
    "displayHeading": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 800,
      "fontSize": "clamp(4rem, 12vw, 9rem)",
      "lineHeight": 0.9,
      "letterSpacing": "-0.04em",
      "textTransform": "uppercase",
      "description": "Used for the largest, most impactful titles like 'SAMUEL SPENSER.'"
    },
    "h1": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 700,
      "fontSize": "clamp(2.5rem, 6vw, 4.5rem)",
      "lineHeight": 1.1,
      "letterSpacing": "-0.02em",
      "description": "Used for main section titles like 'My blog' and 'Any questions?'."
    },
    "h2": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 600,
      "fontSize": "1.75rem",
      "lineHeight": 1.3,
      "description": "Used for sub-headings like 'Professional Headshots'."
    },
    "body": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.6,
      "colorDark": "rgba(255, 255, 255, 0.7)",
      "colorLight": "#666666"
    },
    "link": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 500,
      "textDecoration": "none",
      "hover": {
        "textDecoration": "underline"
      },
      "description": "General text links. Often paired with a right-up arrow icon."
    },
    "navLink": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 500,
      "fontSize": "2rem",
      "lineHeight": 1.4,
      "color": "#FFFFFF",
      "description": "For the main navigation menu items on the dark theme hero."
    },
    "testimonialQuote": {
      "fontFamily": "Primary Sans-Serif",
      "fontWeight": 700,
      "fontSize": "clamp(2rem, 5vw, 3.5rem)",
      "lineHeight": 1.2,
      "letterSpacing": "-0.02em",
      "description": "The large quote text in the testimonial section."
    }
  },
  "layout": {
    "grid": {
      "type": "12-column grid",
      "gutters": "24px",
      "maxWidth": "1440px",
      "description": "A visible grid system with faint vertical lines is used for alignment, especially noticeable in the hero sections."
    },
    "spacingUnit": "8px",
    "sectionPadding": "clamp(80px, 10vw, 160px) 0",
    "containerPadding": "0 clamp(24px, 4vw, 48px)"
  },
  "components": {
    "buttons": {
      "iconButton": {
        "shape": "circle",
        "size": "64px",
        "backgroundColorDark": "rgba(255, 255, 255, 0.1)",
        "backgroundColorLight": "rgba(0, 0, 0, 0.05)",
        "iconColor": "theme.primaryText",
        "iconSize": "24px",
        "iconType": "plus",
        "hover": {
          "transform": "scale(1.1)",
          "backgroundColor": "rgba(255, 255, 255, 0.2)"
        }
      },
      "arrowLink": {
        "icon": "arrow-right-up",
        "size": "24px",
        "display": "inline-flex",
        "alignItems": "center",
        "gap": "8px",
        "hover": {
          "textDecoration": "underline"
        }
      }
    },
    "cards": {
      "base": {
        "backgroundColor": "theme.surface",
        "borderRadius": "16px",
        "padding": "24px",
        "boxShadow": "none",
        "border": "1px solid transparent",
        "description": "Base card style, often seen in light theme sections."
      },
      "portfolioItem": {
        "borderRadius": "24px",
        "overflow": "hidden",
        "position": "relative",
        "hover": {
          "transform": "scale(1.02)",
          "iconVisibility": "visible"
        },
        "overlay": "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
        "icon": {
          "type": "arrow-right-up",
          "position": "top-right",
          "margin": "16px",
          "backgroundColor": "rgba(0,0,0,0.3)",
          "color": "#FFFFFF",
          "padding": "12px",
          "borderRadius": "50%"
        }
      }
    },
    "accordion": {
      "wrapper": {
        "borderBottom": "1px solid theme.divider"
      },
      "trigger": {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "cursor": "pointer",
        "padding": "32px 0",
        "typography": "h2"
      },
      "icon": {
        "type": "plus-circle",
        "size": "32px",
        "openState": {
          "transform": "rotate(45deg)"
        },
        "transition": "transform 0.3s ease"
      },
      "content": {
        "paddingBottom": "32px",
        "typography": "body",
        "maxWidth": "75ch"
      }
    },
    "decorativeElements": {
      "cornerBrackets": {
        "size": "20px",
        "strokeWidth": "1px",
        "colorDark": "rgba(255, 255, 255, 0.4)",
        "colorLight": "rgba(0, 0, 0, 0.4)",
        "description": "Small L-shaped brackets at the corners of some images and sections."
      },
      "gridLines": {
        "strokeWidth": "1px",
        "color": "rgba(255, 255, 255, 0.08)",
        "description": "Faint vertical lines indicating the grid structure, primarily in hero sections."
      },
      "testimonialQuoteMark": {
        "fontSize": "clamp(6rem, 15vw, 10rem)",
        "colorLight": "rgba(0, 0, 0, 0.08)",
        "fontFamily": "serif",
        "fontWeight": 700,
        "position": "absolute",
        "zIndex": -1
      }
    }
  },
  "imagery": {
    "style": "Professional, high-quality, and emotive. A mix of portraits, lifestyle, and fashion shots.",
    "colorGrading": "Ranges from moody, high-contrast black and white to warm, natural-toned color palettes. The grading is consistently cinematic and professional.",
    "treatment": {
      "display": "Used as full-bleed background heroes, within rounded cards, and as standalone portfolio galleries.",
      "overlays": "Text is often overlaid on images, sometimes with a soft gradient to ensure legibility."
    }
  }
}
```
