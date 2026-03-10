import { InputOTP } from "@/components/InputOTP/InputOTP";
import type { Components } from "@/puck/types";

type InputOTPProps = Components["InputOTP"];

export const inputOtpPuckConfig = {
  InputOTP: {
    label: "Input OTP",
    fields: {
      maxLength: {
        type: "number" as const,
        label: "Length",
        min: 4,
        max: 8,
      },
      value: { type: "text", label: "Default value (preview)" },
      patternPreset: {
        type: "select" as const,
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
        type: "text" as const,
        label: "Custom pattern (regex, e.g. ^\\d+$)",
      },
      separatorEvery: {
        type: "select" as const,
        label: "Separator between groups",
        options: [
          { label: "None", value: 0 },
          { label: "Every 2 digits", value: 2 },
          { label: "Every 3 digits", value: 3 },
          { label: "Every 4 digits", value: 4 },
        ],
      },
      disabled: {
        type: "radio" as const,
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
    } satisfies InputOTPProps,
    render: (props: InputOTPProps) => <InputOTP {...props} />,
  },
};
