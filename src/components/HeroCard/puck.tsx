import type { ComponentType } from "react";
import { HeroCard } from "@/components/HeroCard/HeroCard";
import type { Components } from "@/puck/types";

const HERO_CONTENT_API = "/api/hero-content";

export const heroCardPuckConfig = {
  HeroCard: {
    label: "Hero Card",
    fields: {
      dataSourceMode: {
        type: "select",
        label: "Data source",
        options: [
          { label: "Manual", value: "manual" },
          { label: "From API", value: "api" },
        ],
      },
      dataSource: {
        type: "external",
        label: "Content from API",
        placeholder: "Select hero content",
        getItemSummary: (item: { title?: string; id?: string }) => item?.title ?? item?.id ?? "Selected",
        fetchList: async ({ query }: { query?: string }) => {
          try {
            const url = query ? `${HERO_CONTENT_API}?q=${encodeURIComponent(query)}` : HERO_CONTENT_API;
            const res = await fetch(url);
            if (!res.ok) throw new Error(String(res.status));
            const data = await res.json();
            return Array.isArray(data) ? data : data.items ?? [];
          } catch {
            return [
              { id: "1", title: "Welcome", description: "Content from your API.", ctaLabel: "Get started" },
              { id: "2", title: "Learn more", description: "Connect your API at /api/hero-content.", ctaLabel: "Read more" },
            ];
          }
        },
      },
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
      dataSourceMode: "manual" as const,
      dataSource: null,
      title: "Hero title",
      description: "Supporting copy.",
      ctaLabel: "Learn more",
      ctaVariant: "default" as const,
      ctaSize: "lg" as const,
      ctaAlign: "left" as const,
      content: [],
      className: "",
      id: "",
      showDescription: true,
    },
    resolveData: async ({ props }: { props: Components["HeroCard"] }) => {
      if (props.dataSourceMode !== "api" || !props.dataSource) {
        return { props, readOnly: { title: false, description: false, ctaLabel: false } };
      }
      return {
        props: {
          ...props,
          title: props.dataSource.title ?? props.title,
          description: props.dataSource.description ?? props.description,
          ctaLabel: props.dataSource.ctaLabel ?? props.ctaLabel,
        },
        readOnly: { title: true, description: true, ctaLabel: true },
      };
    },
    render: ({
      dataSourceMode,
      dataSource,
      title,
      description,
      ctaLabel,
      ctaVariant,
      ctaSize,
      ctaAlign,
      content,
      className,
      id,
      showDescription,
    }: Components["HeroCard"]) => {
      const Content = content as unknown as ComponentType | undefined;
      const displayTitle = dataSourceMode === "api" && dataSource?.title != null ? dataSource.title : title;
      const displayDescription = dataSourceMode === "api" && dataSource?.description != null ? dataSource.description : description;
      const displayCtaLabel = dataSourceMode === "api" && dataSource?.ctaLabel != null ? dataSource.ctaLabel : ctaLabel;
      return (
        <HeroCard
          title={displayTitle}
          description={displayDescription}
          ctaLabel={displayCtaLabel}
          ctaVariant={ctaVariant}
          ctaSize={ctaSize}
          ctaAlign={ctaAlign}
          className={className || undefined}
          id={id || undefined}
          showDescription={showDescription}
        >
          {Content ? <Content /> : null}
        </HeroCard>
      );
    },
  },
};
