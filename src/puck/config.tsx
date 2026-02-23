import type { Config } from "@puckeditor/core";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/utils";

/** Props passed by Puck to slot/area content components */
type AreaContentProps = { className?: string; minEmptyHeight?: number };

/**
 * Atomic design + Puck:
 * - Atoms: Button, Text
 * - Molecules: Card (slot for nesting)
 * - Organisms: Section, HeroCard
 * - Layout: Grid, Flex, Space
 */

export type Components = {
  Button: {
    label: string;
    content: unknown[];
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size: "default" | "sm" | "lg" | "icon";
    type: "button" | "submit" | "reset";
    disabled: boolean;
    align: "left" | "center" | "right";
    fullWidth: boolean;
    showBadge: boolean;
    badgeText: string;
    badgeVariant: "default" | "secondary" | "destructive" | "outline" | "ghost";
    badgePosition: "start" | "end" | "top-right";
    className: string;
    id: string;
    ariaLabel: string;
  };
  Badge: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline" | "ghost";
    className: string;
    id: string;
  };
  Text: {
    content: string;
    as: "p" | "span" | "h1" | "h2" | "h3" | "label";
    align: "left" | "center" | "right";
    className: string;
    id: string;
  };
  Image: {
    src: string;
    alt: string;
    objectFit: "cover" | "contain" | "fill" | "none";
    align: "left" | "center" | "right";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  Card: {
    title: string;
    description: string;
    content: unknown[];
    className: string;
    id: string;
    showHeader: boolean;
    showDescription: boolean;
  };
  Section: {
    content: unknown[];
    className: string;
    id: string;
  };
  HeroCard: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaVariant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    ctaSize: "default" | "sm" | "lg" | "icon";
    ctaAlign: "left" | "center" | "right";
    content: unknown[];
    className: string;
    id: string;
    showDescription: boolean;
  };
  Grid: {
    content: unknown[];
    columns: 2 | 3 | 4 | 6 | 12;
    gap: "none" | "sm" | "md" | "lg";
    className: string;
    id: string;
  };
  Flex: {
    content: unknown[];
    direction: "row" | "column" | "row-reverse" | "column-reverse";
    justify: "start" | "center" | "end" | "between" | "around";
    align: "start" | "center" | "end" | "stretch";
    gap: "none" | "sm" | "md" | "lg";
    wrap: boolean;
    className: string;
    id: string;
  };
  Space: {
    size: "xs" | "sm" | "md" | "lg" | "xl";
    direction: "horizontal" | "vertical";
    className: string;
    id: string;
  };
};

export const config: Config<Components> = {
  categories: {
    atoms: { title: "Atoms", defaultExpanded: true, components: ["Button", "Badge", "Text", "Image"] },
    molecules: { title: "Molecules", defaultExpanded: true, components: ["Card"] },
    organisms: { title: "Organisms", defaultExpanded: true, components: ["Section", "HeroCard"] },
    layout: { title: "Layout", defaultExpanded: true, components: ["Grid", "Flex", "Space"] },
  },
  components: {
    Button: {
      label: "Button",
      fields: {
        label: { type: "text", label: "Label (when content is empty)" },
        content: {
          type: "slot",
          label: "Content inside button",
          allow: ["Badge", "Text"],
        },
        variant: {
          type: "select",
          label: "Variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
            { label: "Secondary", value: "secondary" },
            { label: "Ghost", value: "ghost" },
            { label: "Link", value: "link" },
          ],
        },
        size: {
          type: "select",
          label: "Size",
          options: [
            { label: "Default", value: "default" },
            { label: "Small", value: "sm" },
            { label: "Large", value: "lg" },
            { label: "Icon", value: "icon" },
          ],
        },
        type: {
          type: "select",
          label: "Type",
          options: [
            { label: "Button", value: "button" },
            { label: "Submit", value: "submit" },
            { label: "Reset", value: "reset" },
          ],
        },
        disabled: {
          type: "select",
          label: "Disabled",
          options: [{ label: "No", value: false }, { label: "Yes", value: true }],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        fullWidth: {
          type: "select",
          label: "Full width",
          options: [{ label: "No", value: false }, { label: "Yes", value: true }],
        },
        showBadge: {
          type: "select",
          label: "Show badge",
          options: [{ label: "No", value: false }, { label: "Yes", value: true }],
        },
        badgeText: { type: "text", label: "Badge text" },
        badgeVariant: {
          type: "select",
          label: "Badge variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
            { label: "Ghost", value: "ghost" },
          ],
        },
        badgePosition: {
          type: "select",
          label: "Badge position",
          options: [
            { label: "Start (before label)", value: "start" },
            { label: "End (after label)", value: "end" },
            { label: "Top right", value: "top-right" },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
        ariaLabel: { type: "text", label: "Aria label" },
      },
      defaultProps: {
        label: "Button",
        content: [],
        variant: "default",
        size: "default",
        type: "button",
        disabled: false,
        align: "left",
        fullWidth: false,
        showBadge: false,
        badgeText: "",
        badgeVariant: "secondary",
        badgePosition: "end",
        className: "",
        id: "",
        ariaLabel: "",
      },
      render: ({ label, content, variant, size, type, disabled, align, fullWidth, showBadge, badgeText, badgeVariant, badgePosition, className, id, ariaLabel }) => {
        const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
        const badgeEl = showBadge && badgeText ? <Badge variant={badgeVariant}>{badgeText}</Badge> : null;
        const labelEl = (
          <>
            {label ? label : null}
            {Content ? <Content minEmptyHeight={40} /> : null}
          </>
        );
        const isTopRight = badgePosition === "top-right";
        return (
          <div className={cn("flex w-full", align === "center" && "justify-center", align === "right" && "justify-end")}>
            <Button
              variant={variant}
              size={size}
              type={type}
              disabled={disabled}
              className={cn(className || undefined, fullWidth && "w-full", isTopRight && "relative")}
              id={id || undefined}
              aria-label={ariaLabel || undefined}
            >
              {isTopRight && badgeEl ? (
                <>
                  <span className="inline-flex items-center gap-1.5">{labelEl}</span>
                  <span className="absolute -right-1 -top-1">{badgeEl}</span>
                </>
              ) : (
                <span className="inline-flex items-center gap-1.5">
                  {badgePosition === "start" && badgeEl}
                  {labelEl}
                  {badgePosition === "end" && badgeEl}
                </span>
              )}
            </Button>
          </div>
        );
      },
    },
    Image: {
      label: "Image",
      fields: {
        src: { type: "text", label: "Image URL" },
        alt: { type: "text", label: "Alt text" },
        objectFit: {
          type: "select",
          label: "Object fit",
          options: [
            { label: "Cover", value: "cover" },
            { label: "Contain", value: "contain" },
            { label: "Fill", value: "fill" },
            { label: "None", value: "none" },
          ],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        rounded: {
          type: "select",
          label: "Rounded",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
            { label: "Full", value: "full" },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: {
        src: "https://placehold.co/600x400",
        alt: "",
        objectFit: "cover",
        align: "center",
        rounded: "md",
        className: "",
        id: "",
      },
      render: ({ src, alt, objectFit, align, rounded, className, id }) => {
        if (!src) return <div className="flex min-h-[120px] items-center justify-center rounded-md border border-dashed border-border bg-muted/50 text-muted-foreground text-sm">No image URL</div>;
        const alignClass = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "";
        const roundedClass = rounded === "none" ? "" : rounded === "sm" ? "rounded-sm" : rounded === "md" ? "rounded-md" : rounded === "lg" ? "rounded-lg" : "rounded-full";
        const objectFitClass = objectFit === "cover" ? "object-cover" : objectFit === "contain" ? "object-contain" : objectFit === "fill" ? "object-fill" : "object-none";
        return (
          <div className={cn("w-full", alignClass)}>
            <img
              src={src}
              alt={alt || ""}
              className={cn("max-w-full h-auto", objectFitClass, roundedClass, className)}
              id={id || undefined}
            />
          </div>
        );
      },
    },
    Badge: {
      label: "Badge",
      fields: {
        text: { type: "text", label: "Text" },
        variant: {
          type: "select",
          label: "Variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Secondary", value: "secondary" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
            { label: "Ghost", value: "ghost" },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: {
        text: "Badge",
        variant: "default",
        className: "",
        id: "",
      },
      render: ({ text, variant, className, id }) => (
        <Badge variant={variant} className={className || undefined} id={id || undefined}>
          {text}
        </Badge>
      ),
    },
    Text: {
      label: "Text",
      fields: {
        content: { type: "textarea", label: "Content" },
        as: {
          type: "select",
          label: "Element",
          options: [
            { label: "Paragraph", value: "p" },
            { label: "Span", value: "span" },
            { label: "Heading 1", value: "h1" },
            { label: "Heading 2", value: "h2" },
            { label: "Heading 3", value: "h3" },
            { label: "Label", value: "label" },
          ],
        },
        align: {
          type: "select",
          label: "Alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: {
        content: "Text block",
        as: "p",
        align: "left",
        className: "",
        id: "",
      },
      render: ({ content, as, align, className, id }) => (
        <div className={cn("w-full", align === "center" && "text-center", align === "right" && "text-right")}>
          <Text as={as} className={className || undefined} id={id || undefined}>
            {content}
          </Text>
        </div>
      ),
    },
    Card: {
      label: "Card",
      fields: {
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description" },
        content: { type: "slot", label: "Content" },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
        showHeader: {
          type: "select",
          label: "Show header",
          options: [{ label: "Yes", value: true }, { label: "No", value: false }],
        },
        showDescription: {
          type: "select",
          label: "Show description",
          options: [{ label: "Yes", value: true }, { label: "No", value: false }],
        },
      },
      defaultProps: {
        title: "Card title",
        description: "Card description",
        content: [],
        className: "",
        id: "",
        showHeader: true,
        showDescription: true,
      },
      render: ({ title, description, content, className, id, showHeader, showDescription }) => {
        const Content = content as unknown as ComponentType | undefined;
        return (
          <Card className={className || undefined} id={id || undefined}>
            {showHeader && (
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                {showDescription && <CardDescription>{description}</CardDescription>}
              </CardHeader>
            )}
            <CardContent>
              {Content ? <Content /> : null}
            </CardContent>
          </Card>
        );
      },
    },
    Section: {
      label: "Section",
      fields: {
        content: { type: "slot", label: "Content" },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: { content: [], className: "", id: "" },
      render: ({ content, className, id }) => {
        const Content = content as unknown as ComponentType | undefined;
        return (
          <section
            className={cn("rounded-lg border border-border bg-muted/30 p-6", className)}
            id={id || undefined}
          >
            {Content ? <Content /> : null}
          </section>
        );
      },
    },
    HeroCard: {
      label: "Hero Card",
      fields: {
        title: { type: "text", label: "Title" },
        description: { type: "text", label: "Description" },
        ctaLabel: { type: "text", label: "Button label" },
        ctaVariant: {
          type: "select",
          label: "Button variant",
          options: [
            { label: "Default", value: "default" },
            { label: "Destructive", value: "destructive" },
            { label: "Outline", value: "outline" },
            { label: "Secondary", value: "secondary" },
            { label: "Ghost", value: "ghost" },
            { label: "Link", value: "link" },
          ],
        },
        ctaSize: {
          type: "select",
          label: "Button size",
          options: [
            { label: "Default", value: "default" },
            { label: "Small", value: "sm" },
            { label: "Large", value: "lg" },
            { label: "Icon", value: "icon" },
          ],
        },
        ctaAlign: {
          type: "select",
          label: "Button alignment",
          options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
          ],
        },
        content: { type: "slot", label: "Extra content" },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
        showDescription: {
          type: "select",
          label: "Show description",
          options: [{ label: "Yes", value: true }, { label: "No", value: false }],
        },
      },
      defaultProps: {
        title: "Hero title",
        description: "Supporting copy.",
        ctaLabel: "Learn more",
        ctaVariant: "default",
        ctaSize: "lg",
        ctaAlign: "left",
        content: [],
        className: "",
        id: "",
        showDescription: true,
      },
      render: ({ title, description, ctaLabel, ctaVariant, ctaSize, ctaAlign, content, className, id, showDescription }) => {
        const Content = content as unknown as ComponentType | undefined;
        return (
          <Card className={className || undefined} id={id || undefined}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {showDescription && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div
                className={cn(
                  "flex w-full",
                  ctaAlign === "center" && "justify-center",
                  ctaAlign === "right" && "justify-end"
                )}
              >
                <Button variant={ctaVariant} size={ctaSize}>{ctaLabel}</Button>
              </div>
              {Content ? <Content /> : null}
            </CardContent>
          </Card>
        );
      },
    },
    Grid: {
      label: "Grid",
      fields: {
        content: { type: "slot", label: "Content" },
        columns: {
          type: "select",
          label: "Columns",
          options: [
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
            { label: "6", value: 6 },
            { label: "12", value: 12 },
          ],
        },
        gap: {
          type: "select",
          label: "Gap",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: {
        content: [],
        columns: 3,
        gap: "md",
        className: "",
        id: "",
      },
      render: ({ content, columns, gap, className, id }) => {
        const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
        const gapClass = gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";
        const colsClass =
          columns === 2 ? "grid-cols-2" : columns === 3 ? "grid-cols-3" : columns === 4 ? "grid-cols-4" : columns === 6 ? "grid-cols-6" : "grid-cols-12";
        if (!Content) return <div className={cn("grid", colsClass, gapClass, "min-h-[120px]", className)} id={id || undefined} />;
        return (
          <div id={id || undefined} className="contents">
            <Content
              className={cn("grid", colsClass, gapClass, className)}
              minEmptyHeight={160}
            />
          </div>
        );
      },
    },
    Flex: {
      label: "Flex",
      fields: {
        content: { type: "slot", label: "Content" },
        direction: {
          type: "select",
          label: "Direction",
          options: [
            { label: "Row", value: "row" },
            { label: "Column", value: "column" },
            { label: "Row reverse", value: "row-reverse" },
            { label: "Column reverse", value: "column-reverse" },
          ],
        },
        justify: {
          type: "select",
          label: "Justify",
          options: [
            { label: "Start", value: "start" },
            { label: "Center", value: "center" },
            { label: "End", value: "end" },
            { label: "Between", value: "between" },
            { label: "Around", value: "around" },
          ],
        },
        align: {
          type: "select",
          label: "Align",
          options: [
            { label: "Start", value: "start" },
            { label: "Center", value: "center" },
            { label: "End", value: "end" },
            { label: "Stretch", value: "stretch" },
          ],
        },
        gap: {
          type: "select",
          label: "Gap",
          options: [
            { label: "None", value: "none" },
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" },
          ],
        },
        wrap: {
          type: "select",
          label: "Wrap",
          options: [
            { label: "No", value: false },
            { label: "Yes", value: true },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: {
        content: [],
        direction: "row",
        justify: "start",
        align: "start",
        gap: "md",
        wrap: false,
        className: "",
        id: "",
      },
      render: ({ content, direction, justify, align, gap, wrap, className, id }) => {
        const Content = content as unknown as ComponentType<AreaContentProps> | undefined;
        const justifyClass =
          justify === "start" ? "justify-start" : justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : justify === "between" ? "justify-between" : "justify-around";
        const alignClass =
          align === "start" ? "items-start" : align === "center" ? "items-center" : align === "end" ? "items-end" : "items-stretch";
        const gapClass = gap === "none" ? "gap-0" : gap === "sm" ? "gap-2" : gap === "md" ? "gap-4" : "gap-6";
        const flexDir =
          direction === "row" ? "flex-row" : direction === "column" ? "flex-col" : direction === "row-reverse" ? "flex-row-reverse" : "flex-col-reverse";
        if (!Content) return <div className={cn("flex", flexDir, justifyClass, alignClass, gapClass, wrap && "flex-wrap", "min-h-[120px]", className)} id={id || undefined} />;
        return (
          <div id={id || undefined} className="contents">
            <Content
              className={cn("flex", flexDir, justifyClass, alignClass, gapClass, wrap && "flex-wrap", className)}
              minEmptyHeight={160}
            />
          </div>
        );
      },
    },
    Space: {
      label: "Space",
      fields: {
        size: {
          type: "select",
          label: "Size",
          options: [
            { label: "XS", value: "xs" },
            { label: "SM", value: "sm" },
            { label: "MD", value: "md" },
            { label: "LG", value: "lg" },
            { label: "XL", value: "xl" },
          ],
        },
        direction: {
          type: "select",
          label: "Direction",
          options: [
            { label: "Vertical", value: "vertical" },
            { label: "Horizontal", value: "horizontal" },
          ],
        },
        className: { type: "text", label: "Class name" },
        id: { type: "text", label: "ID" },
      },
      defaultProps: {
        size: "md",
        direction: "vertical",
        className: "",
        id: "",
      },
      render: ({ size, direction, className, id }) => {
        const spaceSize =
          size === "xs" ? "0.5rem" : size === "sm" ? "0.75rem" : size === "md" ? "1rem" : size === "lg" ? "1.5rem" : "2rem";
        return (
          <div
            role="presentation"
            aria-hidden
            className={cn(direction === "vertical" ? "w-full" : "h-full shrink-0", className)}
            id={id || undefined}
            style={
              direction === "vertical"
                ? { height: spaceSize, minHeight: spaceSize }
                : { width: spaceSize, minWidth: spaceSize }
            }
          />
        );
      },
    },
  },
  root: {
    render: ({ children }) => <div>{children}</div>,
  },
};
