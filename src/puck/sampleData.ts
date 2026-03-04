import type { Data } from "@puckeditor/core";

function localDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Template data for the Puck editor. */
export const sampleData: Data = {
  root: { props: {} },
  content: [
    {
      type: "HeroCard",
      props: {
        content: [],
        dataSourceMode: "manual",
        dataSource: null,
        title: "Build something beautiful",
        description:
          "Compose pages with drag-and-drop. Mix sections, cards, and content blocks to create engaging experiences—no code required.",
        ctaLabel: "Start building",
        ctaVariant: "default",
        ctaSize: "lg",
        ctaAlign: "left",
        className:
          "bg-gradient-to-br from-primary/15 via-card to-primary/10 border-primary/20 shadow-md",
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
                { label: "Products", href: "/products", node: "default" },
                { label: "Wines", href: "/products/wines", node: "dropdown" },
                { label: "Red", href: "/products/wines/red", node: "dropdown" },
                { label: "Region", href: "/products/wines/red/region", node: "collapsed" },
                { label: "Current" },
              ],
              separator: "chevron",
              className: "",
              id: "breadcrumb-nav",
            },
          },
        ],
        className: "bg-muted/20 rounded-xl border-border/80",
        id: "Section-breadcrumb",
      },
    },

    { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-after-breadcrumb" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Text",
            props: {
              content: "How it works",
              as: "h2",
              align: "center",
              className: "text-foreground font-semibold tracking-tight",
              id: "item-section-heading",
            },
          },
          { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-before-items" } },
          {
            type: "Item",
            props: {
              displayMode: "group",
              variant: "outline",
              size: "default",
              title: "",
              description: "",
              mediaVariant: "none",
              mediaIcon: "",
              mediaImageSrc: "",
              mediaImageAlt: "",
              mediaAvatarSrc: "",
              mediaAvatarAlt: "",
              mediaAvatarFallback: "?",
              showHeader: false,
              headerLeft: "",
              headerRight: "",
              useAsLink: false,
              href: "",
              openInNewTab: false,
              showFooter: false,
              footerLeft: "",
              footerRight: "",
              items: [
                {
                  title: "Drag & drop",
                  description: "Arrange components on the canvas. Reorder, nest, and style without touching code.",
                  mediaVariant: "icon",
                  mediaIcon: "GripVertical",
                  mediaImageSrc: "",
                  mediaImageAlt: "",
                  mediaAvatarSrc: "",
                  mediaAvatarAlt: "",
                  mediaAvatarFallback: "?",
                },
                {
                  title: "Real-time preview",
                  description: "See changes as you edit. Switch to preview mode to experience the final page.",
                  mediaVariant: "icon",
                  mediaIcon: "Eye",
                  mediaImageSrc: "",
                  mediaImageAlt: "",
                  mediaAvatarSrc: "",
                  mediaAvatarAlt: "",
                  mediaAvatarFallback: "?",
                },
                {
                  title: "Export & ship",
                  description: "Publish your layout as data. Integrate with your CMS or app and keep full control.",
                  mediaVariant: "icon",
                  mediaIcon: "Rocket",
                  mediaImageSrc: "",
                  mediaImageAlt: "",
                  mediaAvatarSrc: "",
                  mediaAvatarAlt: "",
                  mediaAvatarFallback: "?",
                },
              ],
              className: "rounded-xl border-border bg-card/80 shadow-sm",
              id: "item-group-features",
            },
          },
        ],
        id: "Section-item-group",
        className: "bg-muted/10 rounded-xl py-6",
      },
    },
 
    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-items" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Text",
            props: {
              content: "Radio Group (data flow demo)",
              as: "h2",
              align: "center",
              className: "text-foreground font-semibold tracking-tight",
              id: "radio-group-heading",
            },
          },
          { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-before-radio" } },
          {
            type: "RadioGroup",
            props: {
              dataSourceMode: "manual",
              dataSource: null,
              options: [
                { value: "yes", label: "Yes", disabled: false },
                { value: "no", label: "No", disabled: false },
              ],
              defaultValue: "",
              name: "demo-manual",
              disabled: false,
              orientation: "vertical",
              required: false,
              className: "",
              id: "radio-demo-manual",
            },
          },
          { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-between-radio" } },
          {
            type: "RadioGroup",
            props: {
              dataSourceMode: "api",
              dataSource: {
                id: "delivery",
                label: "Delivery method",
                options: [
                  { value: "standard", label: "Standard delivery" },
                  { value: "express", label: "Express delivery" },
                  { value: "pickup", label: "Pick up in store" },
                ],
              },
              options: [],
              defaultValue: "standard",
              name: "demo-api",
              disabled: false,
              orientation: "horizontal",
              required: false,
              className: "",
              id: "radio-demo-api",
            },
          },
        ],
        className: "bg-muted/10 rounded-xl py-6",
        id: "Section-radio-demo",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-radio" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Section",
            props: {
              content: [
                {
                  type: "Text",
                  props: {
                    content: "What you can do",
                    as: "h2",
                    align: "center",
                    className: "text-foreground font-semibold tracking-tight",
                    id: "section-heading",
                  },
                },
                { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-before-grid" } },
                {
                  type: "Grid",
                  props: {
                    content: [
                      {
                        type: "Card",
                        props: {
                          content: [
                            {
                              type: "AspectRatio",
                              props: {
                                content: [
                                  {
                                    type: "Button",
                                    props: {
                                      contentMode: "text",
                                      content: [],
                                      label: "Try it",
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
                                      id: "Button-card-1",
                                      ariaLabel: "",
                                    },
                                  },
                                ],
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                className: "",
                                id: "AspectRatio-card-1",
                              },
                            },
                          ],
                          id: "card-1",
                          title: "Drag & drop",
                          description:
                            "Arrange components on the canvas. Reorder, nest, and style without touching code.",
                          showHeader: true,
                          showDescription: true,
                          showImageSection: false,
                          imageSectionSize: "md",
                          header: [],
                          showCardAction: false,
                          cardAction: [],
                          showFooter: false,
                          footer: [],
                          size: "default",
                          className: "shadow-sm border-border/80 hover:shadow transition-shadow",
                        },
                      },
                      {
                        type: "Card",
                        props: {
                          content: [
                            {
                              type: "AspectRatio",
                              props: {
                                content: [
                                  {
                                    type: "Image",
                                    props: {
                                      src: "https://placehold.co/400x200/1a1a2e/eee?text=Preview",
                                      alt: "Preview placeholder",
                                      objectFit: "cover",
                                      align: "center",
                                      rounded: "md",
                                      className: "",
                                      id: "img-preview",
                                    },
                                  },
                                ],
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                className: "",
                                id: "AspectRatio-card-2",
                              },
                            },
                          ],
                          id: "card-2",
                          title: "Real-time preview",
                          description:
                            "See changes as you edit. Switch to preview mode to experience the final page.",
                          showHeader: true,
                          showDescription: true,
                          showImageSection: false,
                          imageSectionSize: "md",
                          header: [],
                          showCardAction: false,
                          cardAction: [],
                          showFooter: false,
                          footer: [],
                          size: "default",
                          className: "shadow-sm border-border/80 hover:shadow transition-shadow",
                        },
                      },
                      {
                        type: "Card",
                        props: {
                          content: [
                            {
                              type: "AspectRatio",
                              props: {
                                content: [
                                  {
                                    type: "Badge",
                                    props: {
                                      text: "Coming soon",
                                      variant: "secondary",
                                      className: "",
                                      id: "badge-export",
                                    },
                                  },
                                ],
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                className: "",
                                id: "AspectRatio-card-3",
                              },
                            },
                          ],
                          id: "card-3",
                          title: "Export & ship",
                          description:
                            "Publish your layout as data. Integrate with your CMS or app and keep full control.",
                          showHeader: true,
                          showDescription: true,
                          showImageSection: false,
                          imageSectionSize: "md",
                          header: [],
                          showCardAction: false,
                          cardAction: [],
                          showFooter: false,
                          footer: [],
                          size: "default",
                          className: "shadow-sm border-border/80 hover:shadow transition-shadow",
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
              id: "features",
              className: "",
            },
          },
        ],
        className: "bg-muted/10 rounded-xl py-1",
        id: "Section-features",
      },
    },

    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-after-features" } },

    {
      type: "Section",
      props: {
        content: [
          {
            type: "Text",
            props: {
              content: "Frequently asked",
              as: "h2",
              align: "center",
              className: "text-foreground font-semibold tracking-tight",
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
                    "Yes. Cards, Sections, HeroCard, Grid, and Flex all have content slots. Drop Buttons, Text, Images, and other blocks inside them.",
                },
                {
                  trigger: "Where is my content stored?",
                  content:
                    "Layout and props are stored as structured data. Use the editor's publish callback or export to persist and use it in your app or CMS.",
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
              className: "border-border bg-card/80 shadow-sm",
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
            type: "Text",
            props: {
              content: "Pick a date",
              as: "h2",
              align: "center",
              className: "text-foreground font-semibold tracking-tight",
              id: "calendar-heading",
            },
          },
          { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-calendar-1" } },
          {
            type: "Calendar",
            props: {
              month: new Date().getMonth() + 1,
              year: new Date().getFullYear(),
              showHeader: true,
              showWeekdays: true,
              showOutsideDays: false,
              showNavigation: true,
              captionLayout: "label",
              weekStartsOn: 0,
              mode: "single",
              showPresets: true,
              presetKeys: [
                { key: "today" },
                { key: "tomorrow" },
                { key: "next7days" },
              ],
              showTime: false,
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
              className: "mx-auto",
              id: "calendar-single",
            },
          },
          { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-calendar-2" } },
          {
            type: "Text",
            props: {
              content: "Select a range",
              as: "h3",
              align: "center",
              className: "text-foreground font-medium",
              id: "calendar-range-heading",
            },
          },
          { type: "Space", props: { size: "md", direction: "vertical", className: "", id: "Space-calendar-3" } },
          {
            type: "Calendar",
            props: {
              month: new Date().getMonth() + 1,
              year: new Date().getFullYear(),
              showHeader: true,
              showWeekdays: true,
              showOutsideDays: true,
              showNavigation: true,
              captionLayout: "label",
              weekStartsOn: 0,
              mode: "range",
              showPresets: true,
              presetKeys: [
                { key: "thisWeek" },
                { key: "next7days" },
                { key: "thisMonth" },
              ],
              showTime: false,
              bookedDates: [],
              cellSize: "default",
              variant: "outline",
              buttonVariant: "ghost",
              className: "mx-auto",
              id: "calendar-range",
            },
          },
        ],
        id: "calendar-section",
        className: "bg-muted/10 rounded-xl py-8",
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
              className: "",
            },
          },
        ],
        className: "rounded-xl",
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
                  type: "Text",
                  props: {
                    content:
                      "Use the button below to start a conversation or request a walkthrough.",
                    as: "p",
                    align: "left",
                    className: "",
                    id: "cta-text",
                  },
                },
                {
                  type: "Button",
                  props: {
                    contentMode: "text",
                    content: [],
                    id: "btn-cta",
                    label: "Contact us",
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
                    ariaLabel: "Contact us",
                  },
                },
              ],
              id: "card-cta",
              title: "Get in touch",
              description: "Have questions or want to see a demo? We're here to help.",
              showHeader: true,
              showDescription: true,
              showImageSection: false,
              imageSectionSize: "md",
              header: [],
              showCardAction: false,
              cardAction: [],
              showFooter: false,
              footer: [],
              size: "default",
              className:
                "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-sm",
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
