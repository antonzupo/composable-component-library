import React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";
import type { Layout } from "react-resizable-panels";

export type ResizableProps = Components["Resizable"];

function renderPanelContent(
  content: unknown,
  minEmptyHeight = 80
): React.ReactNode {
  if (content == null) return null;
  const Content = content as React.ComponentType<AreaContentProps> | undefined;
  if (typeof Content === "function") {
    return <Content minEmptyHeight={minEmptyHeight} />;
  }
  return content as React.ReactNode;
}

export function Resizable({
  direction,
  autoSaveId,
  tagName: Tag = "div",
  className,
  id,
  groupDefaultLayout,
  groupDisableCursor,
  groupDisabled,
  groupResizeTargetMinimumSize,
  groupResizeTargetMinimumSizeCoarse,
  groupResizeTargetMinimumSizeFine,
  groupStyle,
  onLayoutChange,
  onLayoutChanged,
  panel1Content,
  panel1DefaultSize,
  panel1MinSize,
  panel1MaxSize,
  panel1Collapsible,
  panel1CollapsedSize,
  panel1Order,
  panel1ClassName,
  panel1Id,
  panel1Disabled,
  panel1GroupResizeBehavior,
  panel1Style,
  panel1Ref,
  handleWithHandle,
  handleClassName,
  handleDisabled,
  handleId,
  handleStyle,
  panel2Content,
  panel2DefaultSize,
  panel2MinSize,
  panel2MaxSize,
  panel2Collapsible,
  panel2CollapsedSize,
  panel2Order,
  panel2ClassName,
  panel2Id,
  panel2Disabled,
  panel2GroupResizeBehavior,
  panel2Style,
  panel2Ref,
}: ResizableProps) {
  const panel1 = {
    id: panel1Id,
    order: panel1Order,
    content: panel1Content,
    defaultSize: panel1DefaultSize,
    minSize: panel1MinSize,
    maxSize: panel1MaxSize,
    collapsible: panel1Collapsible,
    collapsedSize: panel1CollapsedSize,
    className: panel1ClassName,
    disabled: panel1Disabled,
    groupResizeBehavior: panel1GroupResizeBehavior,
    style: panel1Style,
    panelRef: panel1Ref,
  };
  const panel2 = {
    id: panel2Id,
    order: panel2Order,
    content: panel2Content,
    defaultSize: panel2DefaultSize,
    minSize: panel2MinSize,
    maxSize: panel2MaxSize,
    collapsible: panel2Collapsible,
    collapsedSize: panel2CollapsedSize,
    className: panel2ClassName,
    disabled: panel2Disabled,
    groupResizeBehavior: panel2GroupResizeBehavior,
    style: panel2Style,
    panelRef: panel2Ref,
  };
  const [first, second] = panel1.order <= panel2.order ? [panel1, panel2] : [panel2, panel1];

  const resizeTargetMinimumSize =
    groupResizeTargetMinimumSize ??
    (groupResizeTargetMinimumSizeCoarse != null || groupResizeTargetMinimumSizeFine != null
      ? {
          coarse: groupResizeTargetMinimumSizeCoarse ?? 20,
          fine: groupResizeTargetMinimumSizeFine ?? 10,
        }
      : undefined);

  const tagProps = {
    className: cn(
      "w-full h-full min-h-[120px]",
      direction === "vertical" && "flex flex-col min-h-[200px]",
      className
    ),
    id: id || undefined,
  };
  return React.createElement(
    Tag as keyof JSX.IntrinsicElements,
    tagProps,
    <ResizablePanelGroup
      orientation={direction}
      id={autoSaveId || undefined}
      className={cn(
        "h-full w-full min-w-0",
        direction === "vertical" && "min-h-[200px] flex-1"
      )}
      defaultLayout={groupDefaultLayout as Layout | undefined}
      disableCursor={groupDisableCursor}
      disabled={groupDisabled}
      resizeTargetMinimumSize={resizeTargetMinimumSize}
      style={groupStyle}
      onLayoutChange={onLayoutChange as ((layout: Layout) => void) | undefined}
      onLayoutChanged={onLayoutChanged as ((layout: Layout) => void) | undefined}
    >
      <ResizablePanel
        id={first.id || undefined}
        defaultSize={`${first.defaultSize}%`}
        minSize={`${first.minSize}%`}
        maxSize={`${first.maxSize}%`}
        collapsible={first.collapsible}
        collapsedSize={`${first.collapsedSize}%`}
        className={first.className || undefined}
        disabled={first.disabled}
        groupResizeBehavior={first.groupResizeBehavior}
        style={first.style}
        panelRef={first.panelRef}
      >
        {renderPanelContent(first.content)}
      </ResizablePanel>
      <ResizableHandle
        withHandle={handleWithHandle}
        className={handleClassName || undefined}
        direction={direction}
        disabled={handleDisabled}
        id={handleId}
        style={handleStyle}
      />
      <ResizablePanel
        id={second.id || undefined}
        defaultSize={`${second.defaultSize}%`}
        minSize={`${second.minSize}%`}
        maxSize={`${second.maxSize}%`}
        collapsible={second.collapsible}
        collapsedSize={`${second.collapsedSize}%`}
        className={second.className || undefined}
        disabled={second.disabled}
        groupResizeBehavior={second.groupResizeBehavior}
        style={second.style}
        panelRef={second.panelRef}
      >
        {renderPanelContent(second.content)}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
