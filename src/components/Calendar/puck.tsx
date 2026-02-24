import { Calendar } from "@/components/Calendar/Calendar";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

export const calendarPuckConfig = {
  Calendar: {
    label: "Calendar",
    fields: {
      month: {
        type: "number",
        label: "Month (0–11)",
        min: 0,
        max: 11,
      },
      year: {
        type: "number",
        label: "Year",
        min: 2000,
        max: 2100,
      },
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
      variant: {
        type: "select",
        label: "Variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Outline", value: "outline" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      showHeader: true,
      showWeekdays: true,
      variant: "default" as const,
      className: "",
      id: "",
    },
    render: ({ month, year, showHeader, showWeekdays, variant, className, id }: Components["Calendar"]) => (
      <Calendar
        month={month}
        year={year}
        showHeader={showHeader}
        showWeekdays={showWeekdays}
        variant={variant}
        className={className || undefined}
        id={id || undefined}
      />
    ),
  },
};
