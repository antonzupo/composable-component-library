/** Props passed by Puck to slot/area content components */
export type AreaContentProps = { className?: string; minEmptyHeight?: number };

export type PuckCategory = "atoms" | "molecules" | "organisms" | "layout";

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
    dataSourceMode: "manual" | "api";
    dataSource: { id: string; title: string; description: string; ctaLabel: string } | null;
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
  Alert: {
    title: string;
    description: string;
    showTitle: boolean;
    variant: "default" | "destructive" | "success" | "warning";
    titleAlign: "left" | "center" | "right";
    descriptionAlign: "left" | "center" | "right";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    padding: "none" | "sm" | "md" | "lg";
    fullWidth: boolean;
    showIcon: boolean;
    ariaLive: "polite" | "assertive" | "off";
    className: string;
    id: string;
  };
  AlertDialog: {
    title: string;
    description: string;
    cancelLabel: string;
    confirmLabel: string;
    confirmVariant: "default" | "destructive";
    showCancel: boolean;
    titleAlign: "left" | "center" | "right";
    descriptionAlign: "left" | "center" | "right";
    actionsAlign: "start" | "center" | "end";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    padding: "none" | "sm" | "md" | "lg";
    className: string;
    id: string;
  };
  AspectRatio: {
    ratio: "1/1" | "4/3" | "3/4" | "16/9" | "9/16" | "21/9" | "9/21";
    objectFit: "cover" | "contain" | "fill" | "none";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    content: unknown[];
    className: string;
    id: string;
  };
  Avatar: {
    src: string;
    alt: string;
    fallback: string;
    size: "sm" | "md" | "lg";
    rounded: "full" | "none" | "sm" | "md" | "lg";
    className: string;
    id: string;
  };
  Accordion: {
    items: Array<{ trigger: string; content: string }>;
    type: "single" | "multiple";
    defaultOpen: "first" | "none" | "all";
    collapsible: boolean;
    triggerAlign: "left" | "center" | "right";
    contentAlign: "left" | "center" | "right";
    triggerPadding: "none" | "sm" | "md" | "lg";
    contentPadding: "none" | "sm" | "md" | "lg";
    showIcon: boolean;
    iconPosition: "start" | "end";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    variant: "default" | "bordered" | "ghost";
    fullWidth: boolean;
    className: string;
    id: string;
  };
  Breadcrumb: {
    items: Array<{ label: string; href?: string; node?: "default" | "dropdown" | "collapsed" }>;
    separator: "slash" | "chevron" | "dot";
    className: string;
    id: string;
  };
  Calendar: {
    month: number;
    year: number;
    defaultMonth?: string;
    showHeader: boolean;
    showWeekdays: boolean;
    showOutsideDays: boolean;
    showNavigation: boolean;
    captionLayout: "label" | "dropdown";
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    mode: "single" | "range";
    showPresets: boolean;
    presetKeys: Array<{ key: string }>;
    showTime: boolean;
    bookedDates: Array<{ date: string }>;
    cellSize: "sm" | "default" | "lg";
    variant: "default" | "outline";
    buttonVariant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    className: string;
    id: string;
  };
  Carousel: {
    slides: Array<{ slide: unknown }>;
    autoPlay: boolean;
    interval: number;
    showArrows: boolean;
    showDots: boolean;
    size: "1" | "2" | "3";
    spacing: "none" | "sm" | "md" | "lg";
    orientation: "horizontal" | "vertical";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  Chart: {
    dataSourceMode: "manual" | "api";
    dataSourceUrl: string;
    type: "line" | "bar" | "pie";
    data: Array<Record<string, string | number>>;
    dataKey: string;
    xAxisKey: string;
    lines: string;
    bars: string;
    height: number;
    showGrid: boolean;
    showLegend: boolean;
    showTooltip: boolean;
    variant: "default" | "muted";
    className: string;
    id: string;
  };
  Checkbox: {
    label: string;
    checked: boolean;
    disabled: boolean;
    size: "default" | "sm" | "lg";
    className: string;
    id: string;
  };
  Collapsible: {
    trigger: string;
    content: unknown[];
    defaultOpen: boolean;
    appearance: "default" | "fileTree";
    triggerAlign: "left" | "center" | "right";
    contentAlign: "left" | "center" | "right";
    triggerPadding: "none" | "sm" | "md" | "lg";
    contentPadding: "none" | "sm" | "md" | "lg";
    showIcon: boolean;
    iconPosition: "start" | "end";
    variant: "default" | "bordered" | "ghost";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    fullWidth: boolean;
    className: string;
    id: string;
  };
  Combobox: {
    placeholder: string;
    emptyText: string;
    options: Array<{ value: string; label: string }>;
    multiple: boolean;
    disabled: boolean;
    size: "sm" | "default" | "lg";
    variant: "default" | "outline";
    position: "start" | "end";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  Command: {
    placeholder: string;
    emptyText: string;
    groups: Array<{
      heading?: string;
      items: Array<{ label: string; value?: string; shortcut?: string }>;
    }>;
    disabled: boolean;
    size: "sm" | "default" | "lg";
    variant: "default" | "outline";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  ContextMenu: {
    items: Array<{ label: string; shortcut?: string; disabled?: boolean }>;
    triggerContent: unknown[];
    side: "top" | "right" | "bottom" | "left";
    align: "start" | "center" | "end";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  DataTable: {
    columns: Array<{ key: string; label: string; width?: string }>;
    data: Array<Record<string, string | number>>;
    size: "sm" | "default" | "lg";
    variant: "default" | "bordered" | "striped";
    showHeader: boolean;
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  DatePicker: {
    triggerLabel: string;
    placeholder: string;
    defaultMonth: string;
    mode: "single" | "range";
    showTime: boolean;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    cellSize: "sm" | "default" | "lg";
    variant: "default" | "outline";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    className: string;
    id: string;
  };
  Dialog: {
    title: string;
    description: string;
    content: unknown[];
    showClose: boolean;
    titleAlign: "left" | "center" | "right";
    descriptionAlign: "left" | "center" | "right";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    padding: "none" | "sm" | "md" | "lg";
    className: string;
    id: string;
  };
  Direction: {
    dir: "ltr" | "rtl";
    content: unknown[];
    className: string;
    id: string;
  };
  Drawer: {
    title: string;
    description: string;
    content: unknown[];
    side: "top" | "right" | "bottom" | "left";
    showHandle: boolean;
    titleAlign: "left" | "center" | "right";
    descriptionAlign: "left" | "center" | "right";
    rounded: "none" | "sm" | "md" | "lg" | "full";
    padding: "none" | "sm" | "md" | "lg";
    className: string;
    id: string;
  };
};
