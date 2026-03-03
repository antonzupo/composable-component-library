"use client";

import * as React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

export interface ResizablePanelProps {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  collapsedSize?: number;
  order?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface ResizableHandleProps {
  withHandle?: boolean;
  className?: string;
}

export interface ResizableProps {
  direction?: "horizontal" | "vertical";
  autoSaveId?: string;
  tagName?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  panel1: ResizablePanelProps & { children?: React.ReactNode };
  handle?: ResizableHandleProps;
  panel2: ResizablePanelProps & { children?: React.ReactNode };
}

const DEFAULT_PANEL: ResizablePanelProps = {
  defaultSize: 50,
  minSize: 10,
  maxSize: 90,
  collapsible: false,
  collapsedSize: 0,
  order: 0,
  className: undefined,
  id: undefined,
};

function applyPanelProps(
  props: ResizablePanelProps & { children?: React.ReactNode }
): ResizablePanelProps & { children?: React.ReactNode } {
  const { order, className, id, style, ...rest } = props;
  const orderStyle =
    order !== undefined && order !== 0 ? { ...style, order } : style;
  return {
    ...rest,
    className,
    id,
    style: orderStyle,
    children: props.children,
  };
}

export function Resizable({
  direction = "horizontal",
  autoSaveId,
  tagName: WrapperTag = "div",
  className,
  id,
  panel1,
  handle = {},
  panel2,
}: ResizableProps) {
  const groupId = autoSaveId || id;
  const p1 = { ...DEFAULT_PANEL, ...panel1 };
  const p2 = { ...DEFAULT_PANEL, ...panel2 };
  const { withHandle, className: handleClassName } = handle;

  const panel1Props = applyPanelProps(p1);
  const panel2Props = applyPanelProps(p2);

  return (
    <WrapperTag className={cn("w-full min-h-[200px]", className)} id={id}>
      <ResizablePanelGroup
        direction={direction}
        id={groupId}
        className="h-full w-full"
      >
        <ResizablePanel
          defaultSize={panel1Props.defaultSize}
          minSize={panel1Props.minSize}
          maxSize={panel1Props.maxSize}
          collapsible={panel1Props.collapsible}
          collapsedSize={panel1Props.collapsedSize}
          id={panel1Props.id}
          className={panel1Props.className}
          style={panel1Props.style}
        >
          <div className="flex h-full items-center justify-center p-4">
            {panel1Props.children ?? (
              <span className="text-muted-foreground text-sm">
                Panel 1 content
              </span>
            )}
          </div>
        </ResizablePanel>
        <ResizableHandle
          withHandle={withHandle}
          className={handleClassName}
        />
        <ResizablePanel
          defaultSize={panel2Props.defaultSize}
          minSize={panel2Props.minSize}
          maxSize={panel2Props.maxSize}
          collapsible={panel2Props.collapsible}
          collapsedSize={panel2Props.collapsedSize}
          id={panel2Props.id}
          className={panel2Props.className}
          style={panel2Props.style}
        >
          <div className="flex h-full items-center justify-center p-4">
            {panel2Props.children ?? (
              <span className="text-muted-foreground text-sm">
                Panel 2 content
              </span>
            )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </WrapperTag>
  );
}
