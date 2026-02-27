import { Calendar } from "@/components/Calendar/Calendar";
import type { Components, PuckCategory } from "@/puck/types";

type CalendarProps = Components["Calendar"];

export const puckCategory: PuckCategory = "molecules";

export const calendarPuckConfig = {
  Calendar: {
    label: "Calendar",
    fields: {
      month: { type: "number", label: "Month (1-12)" },
      year: { type: "number", label: "Year" },
      defaultMonth: { type: "text", label: "Default month (YYYY-MM-DD)" },
      showHeader: {
        type: "select",
        label: "Show header",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showWeekdays: {
        type: "select",
        label: "Show weekdays",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showOutsideDays: {
        type: "select",
        label: "Show outside days",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      showNavigation: {
        type: "select",
        label: "Show navigation",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      captionLayout: {
        type: "select",
        label: "Caption layout",
        options: [
          { label: "Label", value: "label" },
          { label: "Dropdown", value: "dropdown" },
        ],
      },
      weekStartsOn: {
        type: "select",
        label: "Week starts on",
        options: [
          { label: "Sunday", value: 0 },
          { label: "Monday", value: 1 },
          { label: "Tuesday", value: 2 },
          { label: "Wednesday", value: 3 },
          { label: "Thursday", value: 4 },
          { label: "Friday", value: 5 },
          { label: "Saturday", value: 6 },
        ],
      },
      mode: {
        type: "select",
        label: "Mode",
        options: [
          { label: "Single", value: "single" },
          { label: "Range", value: "range" },
        ],
      },
      cellSize: {
        type: "select",
        label: "Cell size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Default", value: "default" },
          { label: "Large", value: "lg" },
        ],
      },
      buttonVariant: {
        type: "select",
        label: "Button variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Secondary", value: "secondary" },
          { label: "Ghost", value: "ghost" },
          { label: "Link", value: "link" },
        ],
      },
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Outline", value: "outline" },
        ],
      },
      showPresets: {
        type: "select",
        label: "Show presets",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      presetKeys: {
        type: "array",
        label: "Preset keys",
        getItemSummary: (item: { key: string }) => item?.key || "Preset",
        arrayFields: { key: { type: "text", label: "Key" } },
      },
      showTime: {
        type: "select",
        label: "Show time",
        options: [
          { label: "No", value: false },
          { label: "Yes", value: true },
        ],
      },
      bookedDates: {
        type: "array",
        label: "Booked dates",
        getItemSummary: (item: { date: string }) => item?.date || "Date",
        arrayFields: { date: { type: "text", label: "Date" } },
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      defaultMonth: "",
      showHeader: true,
      showWeekdays: true,
      showOutsideDays: true,
      showNavigation: true,
      captionLayout: "label" as const,
      weekStartsOn: 0 as const,
      mode: "single" as const,
      showPresets: false,
      presetKeys: [],
      showTime: false,
      bookedDates: [],
      cellSize: "default" as const,
      variant: "default" as const,
      buttonVariant: "ghost" as const,
      className: "",
      id: "",
    },
    render: (props: CalendarProps) => <Calendar {...props} />,
  },
};
