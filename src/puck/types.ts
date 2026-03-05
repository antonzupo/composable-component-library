export type { PuckCategory } from "@/puck/categories";
import type { TableData } from "@/data/table";

export type AreaContentProps = {
  className?: string;
  minEmptyHeight?: number;
  style?: React.CSSProperties;
  allow?: string[];
  disallow?: string[];
};

export type Components = {
  Button: {
    contentMode: "text" | "icon" | "both";
    label: string;
    content: unknown[];
    icon: string;
    iconPosition: "start" | "end";
    roundedFull: boolean;
    showSpinner: boolean;
    spinnerPosition: "start" | "end";
    variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size: "default" | "sm" | "lg" | "icon";
    type: "button" | "submit" | "reset";
    disabled: boolean;
    className: string;
    id: string;
    ariaLabel: string;
  };
  ButtonGroup: {
    content: unknown[];
    orientation: "horizontal" | "vertical";
    ariaLabel: string;
    ariaLabelledby: string;
    className: string;
    id: string;
  };
  ButtonGroupSeparator: {
    orientation: "horizontal" | "vertical";
    className: string;
  };
  Badge: {
    text: string;
    variant: "default" | "secondary" | "destructive" | "outline" | "ghost";
    showIcon: boolean;
    icon: string;
    iconPosition: "left" | "right";
    showSpinner: boolean;
    spinnerPosition: "left" | "right";
    useAsLink: boolean;
    href: string;
    openInNewTab: boolean;
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
    header: unknown[];
    content: unknown[];
    cardAction: unknown[];
    footer: unknown[];
    size: "sm" | "default" | "lg";
    showImageSection: boolean;
    imageSectionSize: "sm" | "md" | "lg";
    className: string;
    id: string;
    showHeader: boolean;
    showDescription: boolean;
    showCardAction: boolean;
    showFooter: boolean;
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
    children?: React.ReactNode;
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
    variant: "default" | "destructive";
    showIcon: boolean;
    icon: string;
    showAction: boolean;
    alertAction: unknown[];
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
  Dialog: {
    trigger: unknown[];
    triggerLabel: string;
    content: unknown[];
    contentLabel: string;
    contentClassName: string;
    overlayClassName: string;
    className: string;
    id: string;
    defaultOpen: boolean;
    modal: boolean;
    title: string;
    description: string;
    showCloseButton: boolean;
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
    showBadge: boolean;
    badgeContent: string;
    badgeIcon: string;
    badgePosition: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    badgeVariant: "default" | "secondary" | "destructive" | "outline" | "ghost";
    badgeColorClass: string;
    className: string;
    id: string;
  };
  AvatarGroup: {
    content: unknown[];
    showCount: boolean;
    count: string;
    countIcon: string;
    countSize: "sm" | "md" | "lg";
    className: string;
    id: string;
  };
  Accordion: {
    items: Array<{ trigger: string; content: string; disabled?: boolean }>;
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
    showBorder: boolean;
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
    onCheckedChange?: (checked: boolean) => void;
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
    options: Array<{ value: string; label: string }>;
    value: string;
    placeholder: string;
    searchPlaceholder: string;
    emptyText: string;
    disabled: boolean;
    className: string;
    id: string;
  };
  Command: {
    showInput: boolean;
    inputPlaceholder: string;
    emptyText: string;
    items: Array<{ value: string; label: string; groupHeading: string }>;
    className: string;
    id: string;
  };
  ContextMenu: {
    trigger: unknown[];
    modal: boolean;
    contentClassName: string;
    items: Array<{
      type: "item" | "separator" | "label" | "sub" | "checkbox" | "radioGroup";
      label: string;
      disabled: boolean;
      shortcut: string;
      subItemsText: string;
      inset: boolean;
      groupHeading: string;
      checked: boolean;
      value: string;
      optionsText: string;
    }>;
    className: string;
    id: string;
  };
  DataTable: {
    columns: Array<{ id: string; header: string }>;
    rows: Array<{ values: string }>;
    caption: string;
    className: string;
    id: string;
  };
  Table: {
    dataSourceMode: "manual" | "api";
    dataSource: (TableData & { id?: string }) | null;
    columns: TableData["columns"];
    rows: TableData["rows"];
    caption: string;
    variant: "default" | "bordered";
    className: string;
    id: string;
  };
  Tabs: {
    items: Array<{ value: string; label: string; content: unknown[] }>;
    defaultValue: string;
    orientation: "horizontal" | "vertical";
    variant: "default" | "line";
    className: string;
    id: string;
  };
  DatePicker: {
    appearance: "basic" | "dateOfBirth" | "input" | "timePicker" | "naturalLanguage";
    placeholder: string;
    mode: "single" | "range";
    triggerVariant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    triggerSize: "default" | "sm" | "lg" | "icon";
    contentClassName: string;
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
    trigger: unknown[];
    triggerLabel: string;
    content: unknown[];
    contentClassName: string;
    className: string;
    id: string;
  };
  Sheet: {
    trigger: unknown[] | React.ReactNode;
    triggerLabel: string;
    content: unknown[] | React.ReactNode;
    contentClassName?: string;
    side: "right" | "left" | "top" | "bottom";
    className?: string;
    id?: string;
  };
  Sidebar: {
    defaultOpen: boolean;
    side: "left" | "right";
    variant: "sidebar" | "floating" | "inset";
    collapsible: "offcanvas" | "icon" | "none";
    sidebarContent: unknown[] | React.ReactNode;
    mainContent: unknown[] | React.ReactNode;
    className?: string;
    id?: string;
  };
  DropdownMenu: {
    trigger: unknown[];
    triggerLabel: string;
    contentClassName: string;
    items: Array<{
      type: "item" | "separator" | "label" | "sub" | "checkbox" | "radioGroup";
      label: string;
      disabled: boolean;
      shortcut: string;
      subItemsText: string;
      inset: boolean;
      groupHeading: string;
      checked: boolean;
      value: string;
      optionsText: string;
    }>;
    className: string;
    id: string;
  };
  Empty: {
    title: string;
    description: string;
    mediaVariant: "default" | "icon";
    content: unknown[];
    className: string;
    id: string;
  };
  Field: {
    label: string;
    description: string;
    error: string;
    orientation: "vertical" | "horizontal" | "responsive";
    content: unknown[];
    className: string;
    id: string;
  };
  HoverCard: {
    trigger: unknown[];
    triggerLabel: string;
    content: unknown[];
    contentClassName: string;
    openDelay: number;
    closeDelay: number;
    className: string;
    id: string;
  };
  Tooltip: {
    trigger: unknown[] | React.ReactNode;
    triggerLabel: string;
    content: string;
    side: "top" | "right" | "bottom" | "left";
    sideOffset: number;
    delayDuration: number;
    className: string;
    id: string;
    puck?: { isEditing?: boolean };
  };
  Input: {
    type: string;
    placeholder: string;
    defaultValue: string;
    disabled: boolean;
    className: string;
    id: string;
  };
  TextArea: {
    placeholder: string;
    defaultValue: string;
    disabled: boolean;
    rows: number;
    className: string;
    id: string;
  };
  InputGroup: {
    addonStart: string;
    addonEnd: string;
    placeholder: string;
    type: string;
    useTextarea: boolean;
    disabled: boolean;
    className: string;
    id: string;
  };
  InputOTP: {
    maxLength: number;
    value: string;
    patternPreset: "none" | "digits" | "letters" | "alphanumeric" | "custom";
    patternCustom: string;
    separatorEvery: 0 | 2 | 3 | 4;
    disabled: boolean;
    className: string;
    id: string;
  };
  Item: {
    displayMode: "single" | "group";
    variant: "default" | "outline" | "muted";
    size: "default" | "sm";
    title: string;
    description: string;
    mediaVariant: "none" | "icon" | "image" | "avatar";
    mediaIcon: string;
    mediaImageSrc: string;
    mediaImageAlt: string;
    mediaAvatarSrc: string;
    mediaAvatarAlt: string;
    mediaAvatarFallback: string;
    showHeader: boolean;
    headerLeft: string;
    headerRight: string;
    useAsLink: boolean;
    href: string;
    openInNewTab: boolean;
    showFooter: boolean;
    footerLeft: string;
    footerRight: string;
    items: Array<{
      title: string;
      description: string;
      mediaVariant: "none" | "icon" | "image" | "avatar";
      mediaIcon: string;
      mediaImageSrc: string;
      mediaImageAlt: string;
      mediaAvatarSrc: string;
      mediaAvatarAlt: string;
      mediaAvatarFallback: string;
    }>;
    className: string;
    id: string;
  };
  Kbd: {
    displayMode: "single" | "group";
    text: string;
    keys: Array<{ key: string }>;
    className: string;
    id: string;
  };
  Label: {
    text: string;
    htmlFor: string;
    className: string;
    id: string;
  };
  Menubar: {
    menus: Array<{
      trigger: string;
      items: Array<{
        type: "item" | "separator" | "label" | "checkbox" | "radioGroup" | "sub";
        label: string;
        disabled: boolean;
        shortcut: string;
        inset: boolean;
        checked: boolean;
        value: string;
        optionsText: string;
        subItemsText: string;
      }>;
    }>;
    className: string;
    id: string;
  };
  NavigationMenu: {
    orientation: "horizontal" | "vertical";
    dir: "ltr" | "rtl";
    delayDuration: number;
    skipDelayDuration: number;
    value: string;
    defaultValue: string;
    items: Array<{
      type: "trigger" | "link";
      label: string;
      href: string;
      disabled: boolean;
      contentLinks: Array<{ label: string; href: string }>;
    }>;
    className: string;
    listClassName: string;
    id: string;
  };
  NativeSelect: {
    optionMode: "flat" | "grouped";
    options: Array<{ value: string; label: string }>;
    optionGroups: Array<{
      groupLabel: string;
      options: Array<{ value: string; label: string }>;
    }>;
    placeholder: string;
    defaultValue: string;
    disabled: boolean;
    size: "sm" | "default";
    className: string;
    id: string;
  };
  Select: {
    defaultValue: string;
    value: string;
    disabled: boolean;
    required: boolean;
    name: string;
    dir: "ltr" | "rtl";
    triggerClassName: string;
    placeholder: string;
    position: "popper" | "item-aligned";
    side: "top" | "right" | "bottom" | "left";
    sideOffset: number;
    align: "start" | "center" | "end";
    alignOffset: number;
    avoidCollisions: boolean;
    collisionPadding: number;
    hideWhenDetached: boolean;
    contentClassName: string;
    optionMode: "flat" | "grouped";
    options: Array<{ value: string; label: string; disabled?: boolean }>;
    optionGroups: Array<{
      groupLabel: string;
      options: Array<{ value: string; label: string; disabled?: boolean }>;
    }>;
    separatorBetweenGroups: boolean;
    className: string;
    id: string;
  };
  Popover: {
    trigger: unknown[];
    triggerLabel: string;
    content: unknown[];
    contentClassName: string;
    align: "start" | "center" | "end";
    side: "top" | "right" | "bottom" | "left";
    sideOffset: number;
    className: string;
    id: string;
  };
  Progress: {
    value: number;
    max: number;
    indeterminate: boolean;
    valueLabel: string;
    className: string;
    id: string;
  };
  Pagination: {
    pageCount: number;
    currentPage: number;
    showPreviousNext: boolean;
    showFirstLast: boolean;
    siblingCount: number;
    className: string;
    id: string;
  };
  RadioGroup: {
    dataSourceMode: "manual" | "api";
    dataSource: {
      id: string;
      label: string;
      options: Array<{ value: string; label: string; disabled?: boolean }>;
    } | null;
    options: Array<{ value: string; label: string; disabled?: boolean }>;
    defaultValue: string;
    name: string;
    disabled: boolean;
    orientation: "horizontal" | "vertical";
    required: boolean;
    className: string;
    id: string;
  };
  Slider: {
    value: number;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    className: string;
    id: string;
  };
  Resizable: {
    direction: "horizontal" | "vertical";
    autoSaveId: string;
    tagName: string;
    className: string;
    id: string;
    // Group (v4): all optional props (Layout = map of panel id to percentage)
    groupDefaultLayout?: Record<string, number>;
    groupDisableCursor?: boolean;
    groupDisabled?: boolean;
    groupResizeTargetMinimumSize?: { coarse: number; fine: number };
    groupResizeTargetMinimumSizeCoarse?: number;
    groupResizeTargetMinimumSizeFine?: number;
    groupStyle?: React.CSSProperties;
    onLayoutChange?: (layout: Record<string, number>) => void;
    onLayoutChanged?: (layout: Record<string, number>) => void;
    // Panel 1
    panel1Content: unknown[];
    panel1DefaultSize: number;
    panel1MinSize: number;
    panel1MaxSize: number;
    panel1Collapsible: boolean;
    panel1CollapsedSize: number;
    panel1Order: number;
    panel1ClassName: string;
    panel1Id: string;
    panel1Disabled?: boolean;
    panel1GroupResizeBehavior?: "preserve-relative-size" | "preserve-pixel-size";
    panel1Style?: React.CSSProperties;
    panel1Ref?: React.Ref<import("react-resizable-panels").PanelImperativeHandle | null>;
    // Handle / Separator (v4)
    handleWithHandle: boolean;
    handleClassName: string;
    handleDisabled?: boolean;
    handleId?: string;
    handleStyle?: React.CSSProperties;
    // Panel 2
    panel2Content: unknown[];
    panel2DefaultSize: number;
    panel2MinSize: number;
    panel2MaxSize: number;
    panel2Collapsible: boolean;
    panel2CollapsedSize: number;
    panel2Order: number;
    panel2ClassName: string;
    panel2Id: string;
    panel2Disabled?: boolean;
    panel2GroupResizeBehavior?: "preserve-relative-size" | "preserve-pixel-size";
    panel2Style?: React.CSSProperties;
    panel2Ref?: React.Ref<import("react-resizable-panels").PanelImperativeHandle | null>;
  };
  Separator: {
    orientation: "horizontal" | "vertical";
    decorative: boolean;
    className: string;
    id: string;
  };
  Skeleton: {
    variant: "single" | "avatar" | "card" | "text" | "form" | "table";
    className: string;
    id: string;
    width: string;
    height: string;
    style: string;
    role: string;
    tabIndex: number | "";
    ariaLabel: string;
  };
  Spinner: {
    size: "sm" | "default" | "lg";
    className: string;
    id: string;
    ariaLabel: string;
  };
  Switch: {
    label: string;
    checked: boolean;
    disabled: boolean;
    size: "default" | "sm" | "lg";
    className: string;
    id: string;
    onCheckedChange?: (checked: boolean) => void;
  };
  Toggle: {
    label: string;
    icon: string;
    iconPosition: "start" | "end";
    variant: "default" | "outline";
    size: "default" | "sm" | "lg";
    defaultPressed: boolean;
    disabled: boolean;
    className: string;
    id: string;
  };
  ToggleGroup: {
    type: "single" | "multiple";
    defaultValue: string;
    items: Array<{ value: string; label: string }>;
    variant: "default" | "outline";
    size: "default" | "sm" | "lg";
    spacing: "none" | "sm" | "md" | "lg";
    orientation: "horizontal" | "vertical";
    disabled: boolean;
    className: string;
    id: string;
  };
  Typography: {
    content: string;
    variant:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "p"
      | "blockquote"
      | "list"
      | "inline-code"
      | "lead"
      | "large"
      | "small"
      | "muted";
    className: string;
    id: string;
  };
  Sonner: {
    position:
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right"
      | "top-center"
      | "bottom-center";
    expand: boolean;
    richColors: boolean;
    closeButton: boolean;
    className: string;
    id: string;
  };
  ScrollArea: {
    type: "auto" | "always" | "scroll" | "hover";
    scrollHideDelay: number;
    dir: "ltr" | "rtl";
    viewportNonce: string;
    viewportClassName: string;
    className: string;
    id: string;
    content: unknown[];
    showVerticalScrollbar: boolean;
    showHorizontalScrollbar: boolean;
    verticalScrollbarForceMount: boolean;
    horizontalScrollbarForceMount: boolean;
    verticalScrollbarClassName: string;
    horizontalScrollbarClassName: string;
  };
};
  