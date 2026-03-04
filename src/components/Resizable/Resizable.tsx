import React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import type { AreaContentProps, Components } from "@/puck/types";

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
  panel1Content,
  panel1DefaultSize,
  panel1MinSize,
  panel1MaxSize,
  panel1Collapsible,
  panel1CollapsedSize,
  panel1Order,
  panel1ClassName,
  panel1Id,
  handleWithHandle,
  handleClassName,
  panel2Content,
  panel2DefaultSize,
  panel2MinSize,
  panel2MaxSize,
  panel2Collapsible,
  panel2CollapsedSize,
  panel2Order,
  panel2ClassName,
  panel2Id,
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
  };
  const [first, second] = panel1.order <= panel2.order ? [panel1, panel2] : [panel2, panel1];

  return (
    <Tag className={cn("w-full h-full min-h-[120px]", className)} id={id || undefined}>
      <ResizablePanelGroup
        direction={direction}
        autoSaveId={autoSaveId || undefined}
        className="h-full w-full"
      >
        <ResizablePanel
          id={first.id || undefined}
          order={first.order}
          defaultSize={first.defaultSize}
          minSize={first.minSize}
          maxSize={first.maxSize}
          collapsible={first.collapsible}
          collapsedSize={first.collapsedSize}
          className={first.className || undefined}
        >
          {renderPanelContent(first.content)}
        </ResizablePanel>
        <ResizableHandle withHandle={handleWithHandle} className={handleClassName || undefined} />
        <ResizablePanel
          id={second.id || undefined}
          order={second.order}
          defaultSize={second.defaultSize}
          minSize={second.minSize}
          maxSize={second.maxSize}
          collapsible={second.collapsible}
          collapsedSize={second.collapsedSize}
          className={second.className || undefined}
        >
          {renderPanelContent(second.content)}
        </ResizablePanel>
      </ResizablePanelGroup>
    </Tag>
  );
}
