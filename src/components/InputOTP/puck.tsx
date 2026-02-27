import * as React from "react";
import {
  InputOTP as InputOTPRoot,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "atoms";

const PATTERN_PRESETS: Record<
  Exclude<Components["InputOTP"]["patternPreset"], "custom" | "none">,
  string
> = {
  digits: "^\\d+$",
  letters: "^[a-zA-Z]+$",
  alphanumeric: "^[a-zA-Z0-9]+$",
};

function getPattern(props: Components["InputOTP"]): string | undefined {
  if (props.patternPreset === "none") return undefined;
  if (props.patternPreset === "custom") return props.patternCustom || undefined;
  return PATTERN_PRESETS[props.patternPreset] ?? undefined;
}

export const inputOtpPuckConfig = {
  InputOTP: {
    label: "Input OTP",
    fields: {
      maxLength: {
        type: "number",
        label: "Length",
        min: 4,
        max: 8,
      },
      value: { type: "text", label: "Default value (preview)" },
      patternPreset: {
        type: "select",
        label: "Pattern",
        options: [
          { label: "None", value: "none" },
          { label: "Digits only", value: "digits" },
          { label: "Letters only", value: "letters" },
          { label: "Letters and numbers", value: "alphanumeric" },
          { label: "Custom (regex)", value: "custom" },
        ],
      },
      patternCustom: {
        type: "text",
        label: "Custom pattern (regex, e.g. ^\\d+$)",
      },
      separatorEvery: {
        type: "select",
        label: "Separator between groups",
        options: [
          { label: "None", value: 0 },
          { label: "Every 2 digits", value: 2 },
          { label: "Every 3 digits", value: 3 },
          { label: "Every 4 digits", value: 4 },
        ],
      },
      disabled: {
        type: "select",
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      maxLength: 6,
      value: "",
      patternPreset: "none" as const,
      patternCustom: "",
      separatorEvery: 0 as const,
      disabled: false,
      className: "",
      id: "",
    },
    render: (props: Components["InputOTP"]) => {
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
          className={props.className || undefined}
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
    },
  },
};
