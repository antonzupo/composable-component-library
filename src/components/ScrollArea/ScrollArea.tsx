import * as React from "react";
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollBar,
  ScrollAreaCorner,
} from "@/components/ui/scroll-area";
import type { Components } from "@/puck/types";

export type ScrollAreaProps = Omit<Components["ScrollArea"], "content"> & {
  children?: React.ReactNode;
};

function ScrollAreaPresentational({
  type = "hover",
  scrollHideDelay = 600,
  dir,
  viewportNonce = "",
  viewportClassName = "",
  className = "",
  id = "",
  showVerticalScrollbar = true,
  showHorizontalScrollbar = false,
  verticalScrollbarForceMount = false,
  horizontalScrollbarForceMount = false,
  verticalScrollbarClassName = "",
  horizontalScrollbarClassName = "",
  children,
}: ScrollAreaProps) {
  return (
    <ScrollAreaRoot
      type={type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      className={className || undefined}
      id={id || undefined}
    >
      <ScrollAreaViewport
        nonce={viewportNonce || undefined}
        className={viewportClassName || undefined}
      >
        {children}
      </ScrollAreaViewport>
      {showVerticalScrollbar && (
        <ScrollBar
          orientation="vertical"
          forceMount={verticalScrollbarForceMount ? true : undefined}
          className={verticalScrollbarClassName || undefined}
        />
      )}
      {showHorizontalScrollbar && (
        <ScrollBar
          orientation="horizontal"
          forceMount={horizontalScrollbarForceMount ? true : undefined}
          className={horizontalScrollbarClassName || undefined}
        />
      )}
      {(showVerticalScrollbar && showHorizontalScrollbar) && (
        <ScrollAreaCorner />
      )}
    </ScrollAreaRoot>
  );
}

export { ScrollAreaPresentational as ScrollArea };
