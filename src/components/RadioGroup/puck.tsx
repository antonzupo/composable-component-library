import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import type { Components } from "@/puck/types";
import {
  getRadioGroupContentSets,
  type RadioGroupContentSet,
} from "@/data/radioGroup";

type RadioGroupProps = Components["RadioGroup"];

const optionArrayFields = {
  value: { type: "text" as const, label: "Value" },
  label: { type: "text" as const, label: "Label" },
  disabled: {
    type: "radio" as const,
    label: "Disabled",
    options: [
      { label: "No", value: false },
      { label: "Yes", value: true },
    ],
  },
};

export const radioGroupPuckConfig = {
  RadioGroup: {
    label: "Radio Group",
    fields: {
      dataSourceMode: {
        type: "radio" as const,
        label: "Data source",
        options: [
          { label: "Manual", value: "manual" },
          { label: "From API / CMS", value: "api" },
        ],
      },
      dataSource: {
        type: "external" as const,
        label: "Options from API / CMS",
        placeholder: "Select a radio group set",
        getItemSummary: (item: RadioGroupContentSet) =>
          item?.label ?? item?.id ?? "Selected",
        fetchList: async ({ query }: { query?: string }) => {
          return getRadioGroupContentSets(query);
        },
      },
      options: {
        type: "array" as const,
        label: "Options (manual)",
        getItemSummary: (item: { value?: string; label?: string }) =>
          item?.label ?? item?.value ?? "Option",
        arrayFields: optionArrayFields,
        defaultItemProps: () => ({ value: "", label: "Option", disabled: false }),
      },
      defaultValue: { type: "text" as const, label: "Default value" },
      name: { type: "text" as const, label: "Name (form)" },
      disabled: {
        type: "radio" as const,
        label: "Disabled",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      orientation: {
        type: "radio" as const,
        label: "Orientation",
        options: [
          { label: "Vertical", value: "vertical" },
          { label: "Horizontal", value: "horizontal" },
        ],
      },
      required: {
        type: "radio" as const,
        label: "Required",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      className: { type: "text" as const, label: "Class name" },
      id: { type: "text" as const, label: "ID" },
    },
    defaultProps: {
      dataSourceMode: "manual" as const,
      dataSource: null,
      options: [
        { value: "a", label: "Option A", disabled: false },
        { value: "b", label: "Option B", disabled: false },
        { value: "c", label: "Option C", disabled: false },
      ],
      defaultValue: "",
      name: "",
      disabled: false,
      orientation: "vertical" as const,
      required: false,
      className: "",
      id: "",
    } satisfies RadioGroupProps,
    resolveData: async ({ props }: { props: RadioGroupProps }) => {
      if (props.dataSourceMode !== "api" || !props.dataSource?.options) {
        return { props };
      }
      return {
        props: {
          ...props,
          options: props.dataSource.options,
        },
      };
    },
    render: (props: RadioGroupProps) => {
      const options =
        props.dataSourceMode === "api" && props.dataSource?.options?.length
          ? props.dataSource.options
          : props.options;
      return (
        <RadioGroup
          options={options}
          defaultValue={props.defaultValue || undefined}
          name={props.name || undefined}
          disabled={props.disabled}
          orientation={props.orientation}
          required={props.required}
          className={props.className || undefined}
          id={props.id || undefined}
        />
      );
    },
  },
};
