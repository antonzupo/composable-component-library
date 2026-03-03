import React, { type ComponentType } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card/Card";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

type CardProps = Components["Card"];

/** Responsive height classes for image section: mobile → sm → md → lg */
const imageSectionSizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "h-28 min-h-24 sm:h-32 md:h-40 lg:h-48",
  md: "h-36 min-h-28 sm:h-44 md:h-52 lg:h-64",
  lg: "h-44 min-h-36 sm:h-56 md:h-64 lg:h-80",
};

const slotAllow = [
  "Text",
  "Badge",
  "Button",
  "Image",
  "Checkbox",
  "Card",
  "Accordion",
  "Alert",
  "AlertDialog",
  "AspectRatio",
  "Avatar",
  "Breadcrumb",
  "Calendar",
  "Carousel",
  "Chart",
  "Collapsible",
  "Combobox",
  "Command",
  "ContextMenu",
  "Dialog",
  "DropdownMenu",
  "Empty",
  "Field",
  "HoverCard",
  "Input",
  "InputGroup",
  "Flex",
  "Grid",
  "HeroCard",
  "Section",
  "Space",
] as const;

const footerAllow = ["Button", "Text", "Badge"] as const;

const cardActionAllow = ["Button", "Text", "Badge", "Flex", "Space"] as const;

const headerAllow = ["Image", "AspectRatio", "Avatar", "Badge", "Text"] as const;

export const cardPuckConfig = {
  Card: {
    label: "Card",
    fields: {
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
      showHeader: {
        type: "select",
        label: "Show header",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showDescription: {
        type: "select",
        label: "Show description",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showImageSection: {
        type: "select",
        label: "Show image section",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      imageSectionSize: {
        type: "select",
        label: "Image section size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Medium", value: "md" },
          { label: "Large", value: "lg" },
        ],
      },
      header: {
        type: "slot",
        label: "Image section (drag image here)",
        allow: [...headerAllow],
      },
      content: {
        type: "slot",
        label: "Content",
        allow: [...slotAllow],
      },
      showCardAction: {
        type: "select",
        label: "Show card action",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      cardAction: {
        type: "slot",
        label: "Card action",
        allow: [...cardActionAllow],
      },
      showFooter: {
        type: "select",
        label: "Show footer",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      footer: {
        type: "slot",
        label: "Footer",
        allow: [...footerAllow],
      },
      size: {
        type: "select",
        label: "Size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Default", value: "default" },
          { label: "Large", value: "lg" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      title: "Card title",
      description: "Card description text.",
      showHeader: true,
      showDescription: true,
      showImageSection: false,
      imageSectionSize: "md" as const,
      header: [],
      content: [],
      showCardAction: false,
      cardAction: [],
      showFooter: false,
      footer: [],
      size: "default" as const,
      className: "",
      id: "",
    },
    render: ({
      title = "Card title",
      description = "Card description text.",
      header = [],
      content = [],
      cardAction = [],
      footer = [],
      size = "default",
      showImageSection = false,
      imageSectionSize = "md",
      className,
      id,
      showHeader = true,
      showDescription = true,
      showCardAction = false,
      showFooter = false,
    }: CardProps) => {
      const HeaderContent = header as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Content = content as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const CardActionContent = cardAction as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const Footer = footer as unknown as
        | ComponentType<AreaContentProps>
        | undefined;
      const imageSectionHeightClass = imageSectionSizeClasses[imageSectionSize];
      const showHeaderRow = showHeader || showCardAction;
      return (
        <Card size={size} className={className || undefined} id={id || undefined}>
          {showImageSection && (
            <div
              className={cn(
                "relative w-full overflow-hidden flex flex-col",
                imageSectionHeightClass,
                size === "sm" ? "rounded-t-md" : size === "lg" ? "rounded-t-xl" : "rounded-t-lg"
              )}
            >
              {HeaderContent ? (
                <div className="min-h-0 flex-1 w-full [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
                  <HeaderContent minEmptyHeight={120} />
                </div>
              ) : (
                <span className="text-muted-foreground text-sm absolute inset-0 flex items-center justify-center">
                  Add image to section
                </span>
              )}
            </div>
          )}
          {showHeaderRow && (
            <CardHeader>
              <div className="flex w-full flex-row flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1.5">
                  {showHeader && (
                    <>
                      <CardTitle>{title}</CardTitle>
                      {showDescription && (
                        <CardDescription>{description}</CardDescription>
                      )}
                    </>
                  )}
                </div>
                {showCardAction && (
                  <div className="flex min-h-[44px] min-w-[120px] shrink-0 self-stretch sm:min-w-[140px]">
                    {typeof CardActionContent === "function" ? (
                      <CardActionContent
                        className="flex flex-wrap items-center justify-end gap-2 w-full"
                        minEmptyHeight={44}
                        style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", justifyContent: "flex-end" }}
                      />
                    ) : CardActionContent != null && !Array.isArray(CardActionContent) ? (
                      (CardActionContent as React.ReactNode)
                    ) : (
                      <span className="text-muted-foreground text-sm whitespace-nowrap">
                        Add action
                      </span>
                    )}
                  </div>
                )}
              </div>
            </CardHeader>
          )}
          <CardContent>
            {Content ? (
              <Content minEmptyHeight={120} />
            ) : (
              <span className="text-muted-foreground text-sm">
                Add content to the card
              </span>
            )}
          </CardContent>
          {showFooter && (
            <CardFooter>
              {Footer ? (
                <Footer minEmptyHeight={44} />
              ) : (
                <span className="text-muted-foreground text-sm">
                  Add buttons or text to the footer
                </span>
              )}
            </CardFooter>
          )}
        </Card>
      );
    },
  },
};
