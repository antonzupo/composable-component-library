import type { Data } from "@puckeditor/core";

function localDateString(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Sample template: hero, breadcrumb, feature grid, calendar, accordion FAQ, alert, and nested card. */
export const sampleData: Data = {
  root: { props: {} },
  content: [
    // Hero
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
    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-4c4cee8e-1ae5-4585-bc14-f93150a6ee4a" } },

    // Breadcrumb (shows per-item node: default, dropdown, collapsed)
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
        id: "Section-75fed3e9-44a1-4072-9cec-43c170052dc9",
      },
    },
    { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-8d01516c-d8ce-4c78-bf56-925188b68a24" } },

    // Features grid
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
                { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-b7b3e72c-7e1c-4cdb-b354-ccaef28d1a5d" } },
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
                                      content: [],
                                      label: "Try it",
                                      variant: "outline",
                                      size: "default",
                                      type: "button",
                                      disabled: false,
                                      className: "",
                                      id: "Button-2abc2335-3460-4d56-91ad-3393510cfee3",
                                      ariaLabel: "",
                                    },
                                  },
                                ],
                                ratio: "16/9",
                                objectFit: "cover",
                                rounded: "none",
                                className: "",
                                id: "AspectRatio-02fbcb4c-728f-4f33-b9f3-d06696ffd0d1",
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
                                id: "AspectRatio-ac976573-c206-4798-92ae-31e394d287a5",
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
                                id: "AspectRatio-a2e94786-bb67-4c99-8a72-3ce3e08f68a8",
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
        id: "Section-53c92d02-0141-4abd-bb6c-ae598600d239",
      },
    },
    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-411ef11e-296f-49a8-8ded-4b8ba96bb904" } },

    // FAQ
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
          { type: "Space", props: { size: "lg", direction: "vertical", className: "", id: "Space-cbf1ed3a-77e4-402d-b986-0dbe10cb9a92" } },
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
    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-1fe08a5e-29f1-426a-8c91-b6d87add34dd" } },

    // Calendar
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

    // Alert CTA
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
              variant: "success",
              titleAlign: "left",
              descriptionAlign: "left",
              rounded: "lg",
              padding: "md",
              fullWidth: true,
              showIcon: true,
              ariaLive: "polite",
              className: "border-green-500/30",
            },
          },
        ],
        className: "rounded-xl",
        id: "Section-9341c4c8-dcc7-4a26-9aea-147a5038474f",
      },
    },
    { type: "Space", props: { size: "xl", direction: "vertical", className: "", id: "Space-e96cad57-5b14-496e-b63f-0e6c03f03660" } },

    // CTA card
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
                    content: [],
                    id: "btn-cta",
                    label: "Contact us",
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
