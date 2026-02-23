import type { Data } from "@puckeditor/core";

/**
 * Sample engagement: a Card on the page with a Button nested inside it.
 * Demonstrates nested components.
 */
export const sampleData: Data = {
  root: { props: {} },
  content: [
    {
      type: "Card",
      props: {
        id: "Card-1",
        title: "Welcome",
        description: "Drag a button or text into this card from the left panel.",
        content: [
          {
            type: "Button",
            props: {
              id: "Button-1",
              label: "Get started",
              variant: "default",
              size: "default",
            },
          },
        ],
      },
    },
  ],
};
