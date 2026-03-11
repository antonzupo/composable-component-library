import type { Data } from "@puckeditor/core";

function localDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Template data for the Puck editor. */
export const sampleData: Data = {
  root: {
    props: {
      maxWidth: "6xl",
      paddingX: "md",
    },
  } as Data["root"],
  content: [
    {
      type: "HeroCard",
      props: {
        content: [],
        dataSourceMode: "manual",
        dataSource: null,
        title: "Ship faster with composable UI",
        description:
          "Drag, drop, and compose. Build production-ready pages with a full design system—no lock-in, full control of your data and code.",
        ctaLabel: "Get early access",
        ctaVariant: "default",
        ctaSize: "lg",
        ctaAlign: "center",
        className:
          "bg-gradient-to-br from-primary/20 via-background to-primary/5 border border-primary/20 shadow-xl rounded-2xl text-center",
        id: "hero-main",
        showDescription: true,
      },
      readOnly: { title: false, description: false, ctaLabel: false },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-hero-after" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Breadcrumb",
            props: {
              items: [
                { label: "Home", href: "/", node: "default" },
                { label: "Product", href: "/product", node: "default" },
                { label: "Templates", href: "/product/templates", node: "default" },
                { label: "Overview" },
              ],
              separator: "chevron",
              className: "text-muted-foreground",
              id: "breadcrumb-nav",
            },
          },
        ],
        className: "",
        id: "Section-breadcrumb",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-breadcrumb" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Typography",
            props: {
              content: "Everything you need to ship",
              variant: "h2",
              className: "text-2xl font-bold tracking-tight text-foreground text-center",
              id: "features-heading",
            },
          },
          {
            type: "Typography",
            props: {
              content: "Composable blocks that work together. Edit any section in the canvas.",
              variant: "p",
              className: "text-muted-foreground max-w-xl mx-auto text-center",
              id: "features-sub",
            },
          },
          { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-before-cards" } },
          {
            type: "Grid",
            props: {
              content: [
                {
                  type: "GridItem",
                  props: {
                    content: [
                      {
                        type: "Card",
                        props: {
                          title: "Visual editor",
                          description: "Drag and drop components. Reorder, nest, and style in real time—no code required.",
                          showHeader: true,
                          showDescription: true,
                          showImageSection: true,
                          imageSectionSize: "md",
                          header: [
                            {
                              type: "AspectRatio",
                              props: {
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                content: [
                                  {
                                    type: "Image",
                                    props: {
                                      src: "https://placehold.co/600x340/0f172a/38bdf8?text=Editor",
                                      alt: "Visual editor",
                                      objectFit: "cover",
                                      align: "center",
                                      rounded: "none",
                                      className: "",
                                      id: "img-editor",
                                    },
                                  },
                                ],
                                className: "rounded-t-xl overflow-hidden",
                                id: "AspectRatio-card-1",
                              },
                            },
                          ],
                          content: [],
                          showCardAction: true,
                          cardAction: [
                            {
                              type: "Button",
                              props: {
                                contentMode: "text",
                                content: [],
                                label: "Try editor",
                                icon: "",
                                iconPosition: "start",
                                roundedFull: false,
                                showSpinner: false,
                                spinnerPosition: "start",
                                variant: "outline",
                                size: "default",
                                type: "button",
                                disabled: false,
                                className: "",
                                id: "btn-card-1",
                                ariaLabel: "Try editor",
                              },
                            },
                          ],
                          showFooter: false,
                          footer: [],
                          size: "default",
                          className: "overflow-hidden border-border/80 shadow-lg hover:shadow-xl transition-shadow",
                          id: "card-editor",
                        },
                      },
                    ],
                    spanColumns: 1,
                    spanRows: 1,
                    className: "",
                    id: "gi-editor",
                  },
                },
                {
                  type: "GridItem",
                  props: {
                    content: [
                      {
                        type: "Card",
                        props: {
                          title: "Live preview",
                          description: "See changes instantly. Switch to preview mode to experience the final page as users will.",
                          showHeader: true,
                          showDescription: true,
                          showImageSection: true,
                          imageSectionSize: "md",
                          header: [
                            {
                              type: "AspectRatio",
                              props: {
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                content: [
                                  {
                                    type: "Image",
                                    props: {
                                      src: "https://placehold.co/600x340/0f172a/34d399?text=Preview",
                                      alt: "Live preview",
                                      objectFit: "cover",
                                      align: "center",
                                      rounded: "none",
                                      className: "",
                                      id: "img-preview",
                                    },
                                  },
                                ],
                                className: "rounded-t-xl overflow-hidden",
                                id: "AspectRatio-card-2",
                              },
                            },
                          ],
                          content: [],
                          showCardAction: true,
                          cardAction: [
                            {
                              type: "Button",
                              props: {
                                contentMode: "text",
                                content: [],
                                label: "View demo",
                                icon: "",
                                iconPosition: "start",
                                roundedFull: false,
                                showSpinner: false,
                                spinnerPosition: "start",
                                variant: "outline",
                                size: "default",
                                type: "button",
                                disabled: false,
                                className: "",
                                id: "btn-card-2",
                                ariaLabel: "View demo",
                              },
                            },
                          ],
                          showFooter: false,
                          footer: [],
                          size: "default",
                          className: "overflow-hidden border-border/80 shadow-lg hover:shadow-xl transition-shadow",
                          id: "card-preview",
                        },
                      },
                    ],
                    spanColumns: 1,
                    spanRows: 1,
                    className: "",
                    id: "gi-preview",
                  },
                },
                {
                  type: "GridItem",
                  props: {
                    content: [
                      {
                        type: "Card",
                        props: {
                          title: "Export & integrate",
                          description: "Publish as structured data. Connect to your CMS or app and keep full ownership.",
                          showHeader: true,
                          showDescription: true,
                          showImageSection: true,
                          imageSectionSize: "md",
                          header: [
                            {
                              type: "AspectRatio",
                              props: {
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                content: [
                                  {
                                    type: "Badge",
                                    props: {
                                      text: "API ready",
                                      variant: "secondary",
                                      showIcon: false,
                                      icon: "",
                                      iconPosition: "left",
                                      showSpinner: false,
                                      spinnerPosition: "left",
                                      useAsLink: false,
                                      href: "",
                                      openInNewTab: false,
                                      className: "text-sm px-4 py-2",
                                      id: "badge-api",
                                    },
                                  },
                                ],
                                className: "rounded-t-xl bg-muted/50 flex items-center justify-center",
                                id: "AspectRatio-card-3",
                              },
                            },
                          ],
                          content: [],
                          showCardAction: true,
                          cardAction: [
                            {
                              type: "Button",
                              props: {
                                contentMode: "text",
                                content: [],
                                label: "Learn more",
                                icon: "",
                                iconPosition: "start",
                                roundedFull: false,
                                showSpinner: false,
                                spinnerPosition: "start",
                                variant: "outline",
                                size: "default",
                                type: "button",
                                disabled: false,
                                className: "",
                                id: "btn-card-3",
                                ariaLabel: "Learn more",
                              },
                            },
                          ],
                          showFooter: false,
                          footer: [],
                          size: "default",
                          className: "overflow-hidden border-border/80 shadow-lg hover:shadow-xl transition-shadow",
                          id: "card-export",
                        },
                      },
                    ],
                    spanColumns: 1,
                    spanRows: 1,
                    className: "",
                    id: "gi-export",
                  },
                },
              ],
              columns: 3,
              gap: "lg",
              className: "",
              id: "feature-grid",
            },
          },
        ],
        id: "Section-features",
        className: "bg-muted/5 rounded-2xl py-12 px-4",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-features" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Tabs",
            props: {
              id: "tabs-demo",
              defaultValue: "features",
              orientation: "horizontal",
              variant: "line",
              className: "w-full",
              items: [
                {
                  value: "features",
                  label: "Features",
                  content: [
                    {
                      type: "Typography",
                      props: {
                        content: "Components, layout primitives, forms, and data tables—all composable and editable in the canvas.",
                        variant: "p",
                        className: "text-muted-foreground",
                        id: "tab-features-text",
                      },
                    },
                  ],
                },
                {
                  value: "resources",
                  label: "Resources",
                  content: [
                    {
                      type: "Typography",
                      props: {
                        content: "Docs, examples, and design tokens. Everything you need to customize and extend the system.",
                        variant: "p",
                        className: "text-muted-foreground",
                        id: "tab-resources-text",
                      },
                    },
                  ],
                },
                {
                  value: "pricing",
                  label: "Pricing",
                  content: [
                    {
                      type: "Typography",
                      props: {
                        content: "Simple, transparent pricing. Start free and scale as you grow.",
                        variant: "p",
                        className: "text-muted-foreground",
                        id: "tab-pricing-text",
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
        className: "border border-border/80 rounded-xl bg-card p-6 shadow-sm",
        id: "Section-tabs",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-tabs" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Typography",
            props: {
              content: "Request early access",
              variant: "h2",
              className: "text-2xl font-bold tracking-tight text-foreground text-center",
              id: "form-heading",
            },
          },
          {
            type: "Typography",
            props: {
              content: "Join the waitlist. We'll be in touch soon.",
              variant: "p",
              className: "text-muted-foreground mb-6 text-center",
              id: "form-sub",
            },
          },
          {
            type: "Card",
            props: {
              id: "card-form",
              title: "",
              description: "",
              showHeader: false,
              showDescription: false,
              showImageSection: false,
              imageSectionSize: "md",
              header: [],
              content: [
                {
                  type: "Grid",
                  props: {
                    columns: 2,
                    gap: "md",
                    className: "",
                    id: "form-grid",
                    content: [
                      {
                        type: "GridItem",
                        props: {
                          content: [
                            {
                              type: "Field",
                              props: {
                                label: "Email",
                                description: "",
                                error: "",
                                orientation: "vertical",
                                content: [
                                  {
                                    type: "Input",
                                    props: {
                                      type: "email",
                                      placeholder: "you@company.com",
                                      defaultValue: "",
                                      disabled: false,
                                      className: "",
                                      id: "input-email",
                                    },
                                  },
                                ],
                                className: "",
                                id: "field-email",
                              },
                            },
                          ],
                          spanColumns: 1,
                          spanRows: 1,
                          className: "",
                          id: "gi-email",
                        },
                      },
                      {
                        type: "GridItem",
                        props: {
                          content: [
                            {
                              type: "Field",
                              props: {
                                label: "Company",
                                description: "",
                                error: "",
                                orientation: "vertical",
                                content: [
                                  {
                                    type: "Input",
                                    props: {
                                      type: "text",
                                      placeholder: "Acme Inc",
                                      defaultValue: "",
                                      disabled: false,
                                      className: "",
                                      id: "input-company",
                                    },
                                  },
                                ],
                                className: "",
                                id: "field-company",
                              },
                            },
                          ],
                          spanColumns: 1,
                          spanRows: 1,
                          className: "",
                          id: "gi-company",
                        },
                      },
                      {
                        type: "GridItem",
                        props: {
                          content: [
                            {
                              type: "Field",
                              props: {
                                label: "Budget",
                                description: "",
                                error: "",
                                orientation: "vertical",
                                content: [
                                  {
                                    type: "InputGroup",
                                    props: {
                                      addonStart: "$",
                                      addonEnd: "/mo",
                                      addonStartAlign: "inline-start",
                                      addonEndAlign: "inline-end",
                                      addonStartType: "text",
                                      addonEndType: "text",
                                      addonStartIcon: "",
                                      addonEndIcon: "",
                                      placeholder: "0",
                                      type: "text",
                                      useTextarea: false,
                                      disabled: false,
                                      className: "",
                                      id: "input-group-budget",
                                    },
                                  },
                                ],
                                className: "",
                                id: "field-budget",
                              },
                            },
                          ],
                          spanColumns: 1,
                          spanRows: 1,
                          className: "",
                          id: "gi-budget",
                        },
                      },
                      {
                        type: "GridItem",
                        props: {
                          content: [
                            {
                              type: "Field",
                              props: {
                                label: "Country",
                                description: "",
                                error: "",
                                orientation: "vertical",
                                content: [
                                  {
                                    type: "NativeSelect",
                                    props: {
                                      optionMode: "flat",
                                      options: [
                                        { value: "", label: "Select country" },
                                        { value: "us", label: "United States" },
                                        { value: "uk", label: "United Kingdom" },
                                        { value: "ca", label: "Canada" },
                                        { value: "de", label: "Germany" },
                                      ],
                                      optionGroups: [],
                                      placeholder: "Select...",
                                      defaultValue: "",
                                      disabled: false,
                                      size: "default",
                                      className: "",
                                      id: "select-country",
                                    },
                                  },
                                ],
                                className: "",
                                id: "field-country",
                              },
                            },
                          ],
                          spanColumns: 1,
                          spanRows: 1,
                          className: "",
                          id: "gi-country",
                        },
                      },
                    ],
                  },
                },
                {
                  type: "Field",
                  props: {
                    label: "Tell us about your project",
                    description: "",
                    error: "",
                    orientation: "vertical",
                    content: [
                      {
                        type: "TextArea",
                        props: {
                          placeholder: "What are you building?",
                          defaultValue: "",
                          disabled: false,
                          rows: 3,
                          className: "",
                          id: "textarea-message",
                        },
                      },
                    ],
                    className: "",
                    id: "field-message",
                  },
                },
                { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-form-opts" } },
                {
                  type: "Flex",
                  props: {
                    content: [
                      {
                        type: "Checkbox",
                        props: {
                          label: "Subscribe to product updates",
                          checked: true,
                          disabled: false,
                          size: "default",
                          className: "",
                          id: "checkbox-updates",
                        },
                      },
                      { type: "Space", props: { size: "lg", direction: "horizontal", className: "", id: "Space-form-sw" } },
                      {
                        type: "Switch",
                        props: {
                          label: "I agree to the terms",
                          checked: false,
                          disabled: false,
                          size: "default",
                          className: "",
                          id: "switch-terms",
                        },
                      },
                    ],
                    direction: "row",
                    justify: "start",
                    align: "center",
                    gap: "lg",
                    wrap: true,
                    className: "",
                    id: "flex-form-options",
                  },
                },
                { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-form-btn" } },
                {
                  type: "Button",
                  props: {
                    contentMode: "text",
                    content: [],
                    label: "Submit request",
                    icon: "",
                    iconPosition: "start",
                    roundedFull: false,
                    showSpinner: false,
                    spinnerPosition: "start",
                    variant: "default",
                    size: "lg",
                    type: "submit",
                    disabled: false,
                    className: "w-full sm:w-auto",
                    id: "btn-submit",
                    ariaLabel: "Submit request",
                  },
                },
              ],
              showCardAction: false,
              cardAction: [],
              showFooter: false,
              footer: [],
              size: "default",
              className: "border border-primary/20 shadow-lg bg-card",
            },
          },
        ],
        className: "max-w-2xl mx-auto",
        id: "Section-form",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-form" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Typography",
            props: {
              content: "Early access spots",
              variant: "h3",
              className: "text-lg font-semibold text-foreground text-center",
              id: "progress-heading",
            },
          },
          { type: "Space", props: { size: "sm", direction: "vertical", className: "", id: "Space-progress" } },
          {
            type: "Progress",
            props: {
              value: 72,
              max: 100,
              indeterminate: false,
              valueLabel: "72% claimed",
              className: "max-w-md mx-auto",
              id: "progress-spots",
            },
          },
          {
            type: "Typography",
            props: {
              content: "72% of early access spots claimed this week",
              variant: "p",
              className: "text-sm text-muted-foreground mt-2 text-center",
              id: "progress-caption",
            },
          },
        ],
        className: "bg-muted/10 rounded-xl py-6 px-4",
        id: "Section-progress",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-progress" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Typography",
            props: {
              content: "Frequently asked",
              variant: "h2",
              className: "text-2xl font-bold tracking-tight text-foreground text-center",
              id: "faq-heading",
            },
          },
          { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-before-faq" } },
          {
            type: "Accordion",
            props: {
              id: "faq-accordion",
              items: [
                {
                  trigger: "How do I add a new component?",
                  content:
                    "Open the component panel on the left, then drag the component you want onto the canvas or into a slot (e.g. inside a Card or Section).",
                },
                {
                  trigger: "Can I nest components?",
                  content:
                    "Yes. Cards, Sections, HeroCard, Grid, and Flex all have content slots. Drop Buttons, Typography, Images, and other blocks inside them.",
                },
                {
                  trigger: "Where is my content stored?",
                  content:
                    "Layout and props are stored as structured data. Use the editor's publish callback or export to persist and use it in your app or CMS.",
                },
                {
                  trigger: "Is there an API?",
                  content:
                    "Yes. You can load options from an API for components like RadioGroup and Select, and export your layout as JSON for use in your own stack.",
                },
              ],
              type: "single",
              defaultOpen: "first",
              collapsible: true,
              triggerAlign: "left",
              contentAlign: "left",
              triggerPadding: "md",
              contentPadding: "md",
              showIcon: true,
              iconPosition: "end",
              rounded: "lg",
              variant: "bordered",
              fullWidth: true,
              className: "border-border bg-card/80 shadow-sm max-w-2xl mx-auto",
            },
          },
        ],
        id: "faq",
        className: "",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-faq" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Typography",
            props: {
              content: "Book a demo",
              variant: "h2",
              className: "text-2xl font-bold tracking-tight text-foreground text-center",
              id: "calendar-heading",
            },
          },
          {
            type: "Typography",
            props: {
              content: "Pick a time that works for you.",
              variant: "p",
              className: "text-muted-foreground mb-6 text-center",
              id: "calendar-sub",
            },
          },
          {
            type: "Calendar",
            props: {
              month: new Date().getMonth() + 1,
              year: new Date().getFullYear(),
              defaultMonth: "",
              showHeader: true,
              showWeekdays: true,
              showOutsideDays: false,
              showNavigation: true,
              captionLayout: "label",
              weekStartsOn: 0,
              mode: "single",
              bookedDates: (() => {
                const today = new Date();
                const d2 = new Date(today);
                d2.setDate(today.getDate() + 2);
                const d5 = new Date(today);
                d5.setDate(today.getDate() + 5);
                return [{ date: localDateString(d2) }, { date: localDateString(d5) }];
              })(),
              cellSize: "default",
              variant: "default",
              buttonVariant: "ghost",
              className: "mx-auto border border-border rounded-lg p-4 bg-card",
              id: "calendar-demo",
            },
          },
        ],
        id: "calendar-section",
        className: "bg-muted/5 rounded-2xl py-10",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-calendar-after" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Alert",
            props: {
              id: "alert-cta",
              title: "Ready to customize?",
              description:
                "Switch to Edit mode and rearrange this template. Every block is editable—change copy, swap components, or add new sections.",
              showTitle: true,
              variant: "default",
              showIcon: false,
              icon: "",
              showAction: false,
              alertAction: [],
              className: "border-primary/30 bg-primary/5",
            },
          },
        ],
        className: "rounded-xl max-w-2xl mx-auto",
        id: "Section-alert",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-before-cta" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Card",
            props: {
              content: [
                {
                  type: "Typography",
                  props: {
                    content: "Have questions or want to see a live walkthrough? We're here to help.",
                    variant: "p",
                    className: "text-muted-foreground text-center",
                    id: "cta-text",
                  },
                },
                { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-cta-btns" } },
                {
                  type: "ButtonGroup",
                  props: {
                    content: [
                      {
                        type: "Button",
                        props: {
                          contentMode: "text",
                          content: [],
                          label: "Contact sales",
                          icon: "",
                          iconPosition: "start",
                          roundedFull: false,
                          showSpinner: false,
                          spinnerPosition: "start",
                          variant: "default",
                          size: "lg",
                          type: "button",
                          disabled: false,
                          className: "",
                          id: "btn-sales",
                          ariaLabel: "Contact sales",
                        },
                      },
                      {
                        type: "Button",
                        props: {
                          contentMode: "text",
                          content: [],
                          label: "Book a demo",
                          icon: "",
                          iconPosition: "start",
                          roundedFull: false,
                          showSpinner: false,
                          spinnerPosition: "start",
                          variant: "outline",
                          size: "lg",
                          type: "button",
                          disabled: false,
                          className: "",
                          id: "btn-demo",
                          ariaLabel: "Book a demo",
                        },
                      },
                    ],
                    orientation: "horizontal",
                    appearance: "merged",
                    buttonVariant: "outline",
                    ariaLabel: "Contact actions",
                    ariaLabelledby: "",
                    className: "justify-center",
                    id: "btn-group-cta",
                  },
                },
              ],
              id: "card-cta",
              title: "Get in touch",
              description: "",
              showHeader: true,
              showDescription: false,
              showImageSection: false,
              imageSectionSize: "md",
              header: [],
              showCardAction: false,
              cardAction: [],
              showFooter: false,
              footer: [],
              size: "default",
              className: "bg-gradient-to-br from-primary/15 to-primary/5 border-primary/20 shadow-lg rounded-2xl text-center max-w-xl mx-auto",
            },
          },
        ],
        id: "cta-section",
        className: "rounded-xl",
      },
    },
  ],
  zones: {},
};
