import * as React from "react";
import {
  InputOTP as InputOTPRoot,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import type { Components } from "@/puck/types";

export type InputOTPProps = Components["InputOTP"];

const PATTERN_PRESETS: Record<
  Exclude<InputOTPProps["patternPreset"], "custom" | "none">,
  string
> = {
  digits: "^\\d+$",
  letters: "^[a-zA-Z]+$",
  alphanumeric: "^[a-zA-Z0-9]+$",
};

function getPattern(props: InputOTPProps): string | undefined {
  if (props.patternPreset === "none") return undefined;
  if (props.patternPreset === "custom") return props.patternCustom || undefined;
  return PATTERN_PRESETS[props.patternPreset] ?? undefined;
}

export function InputOTP(props: InputOTPProps) {
  const pattern = getPattern(props);
  const { maxLength, separatorEvery } = props;
  const groupSize = separatorEvery > 0 ? separatorEvery : maxLength;
  const chunks: number[][] = [];
  for (let i = 0; i < maxLength; i += groupSize) {
    chunks.push(
      Array.from(
        { length: Math.min(groupSize, maxLength - i) },
        (_, j) => i + j
      )
    );
  }
  return (
    <InputOTPRoot
      maxLength={props.maxLength}
      defaultValue={props.value}
      pattern={pattern}
      disabled={props.disabled}
      className={cn(props.className)}
      id={props.id || undefined}
    >
      {chunks.map((indices, chunkIndex) => (
        <React.Fragment key={chunkIndex}>
          <InputOTPGroup>
            {indices.map((i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
          {chunkIndex < chunks.length - 1 ? <InputOTPSeparator /> : null}
        </React.Fragment>
      ))}
    </InputOTPRoot>
  );
}
