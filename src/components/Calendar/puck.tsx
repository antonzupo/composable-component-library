import { Calendar } from "@/components/Calendar/Calendar";
import type { Components, PuckCategory } from "@/puck/types";

export const puckCategory: PuckCategory = "molecules";

const PRESET_OPTIONS = [
  { label: "Today", value: "today" },
  { label: "Tomorrow", value: "tomorrow" },
  { label: "This week", value: "thisWeek" },
  { label: "Next 7 days", value: "next7days" },
  { label: "This month", value: "thisMonth" },
];

export const calendarPuckConfig = {
  Calendar: {
    label: "Calendar",
    fields: {
      month: {
        type: "number",
        label: "Month (1–12)",
        min: 1,
        max: 12,
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
        label: "Calendar mode",
        options: [
          { label: "Single date", value: "single" },
          { label: "Range", value: "range" },
        ],
      },
      showPresets: {
        type: "select",
        label: "Show presets",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      presetKeys: {
        type: "array",
        label: "Presets",
        getItemSummary: (item: { key: string }) => PRESET_OPTIONS.find((o) => o.value === item.key)?.label ?? item.key,
        arrayFields: {
          key: {
            type: "select",
            label: "Preset",
            options: PRESET_OPTIONS,
          },
        },
      },
      showTime: {
        type: "select",
        label: "Date & Time Picker (show time)",
        options: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
      },
      bookedDates: {
        type: "array",
        label: "Booked dates",
        getItemSummary: (item: { date: string }) => item?.date ?? "Date",
        arrayFields: {
          date: {
            type: "text",
            label: "Date (YYYY-MM-DD)",
          },
        },
      },
      cellSize: {
        type: "select",
        label: "Custom cell size",
        options: [
          { label: "Small", value: "sm" },
          { label: "Default", value: "default" },
          { label: "Large", value: "lg" },
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
      buttonVariant: {
        type: "select",
        label: "Navigation button variant",
        options: [
          { label: "Default", value: "default" },
          { label: "Destructive", value: "destructive" },
          { label: "Outline", value: "outline" },
          { label: "Secondary", value: "secondary" },
          { label: "Ghost", value: "ghost" },
          { label: "Link", value: "link" },
        ],
      },
      className: { type: "text", label: "Class name" },
      id: { type: "text", label: "ID" },
    },
    defaultProps: {
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
      showHeader: true,
      showWeekdays: true,
      showOutsideDays: false,
      showNavigation: false,
      captionLayout: "label" as const,
      weekStartsOn: 0 as const,
      mode: "single" as const,
      showPresets: false,
      presetKeys: [] as { key: string }[],
      showTime: false,
      bookedDates: [] as { date: string }[],
      cellSize: "default" as const,
      variant: "default" as const,
      buttonVariant: "ghost" as const,
      className: "",
      id: "",
    },
    render: ({
      month,
      year,
      showHeader,
      showWeekdays,
      showOutsideDays,
      showNavigation,
      captionLayout,
      weekStartsOn,
      mode,
      showPresets,
      presetKeys,
      showTime,
      bookedDates,
      cellSize,
      variant,
      buttonVariant,
      className,
      id,
    }: Components["Calendar"]) => {
      const parseLocalDate = (s: string): Date | null => {
        const parts = s.trim().match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        if (!parts) return null;
        const [, y, m, d] = parts.map(Number);
        if (m < 1 || m > 12 || d < 1 || d > 31) return null;
        const date = new Date(y, m - 1, d);
        return isNaN(date.getTime()) ? null : date;
      };
      const bookedDatesParsed =
        bookedDates?.length > 0
          ? bookedDates
              .map((item) => {
                const d = typeof item === "string" ? item : (item as { date: string })?.date;
                if (!d) return null;
                return parseLocalDate(d);
              })
              .filter((d): d is Date => d !== null)
          : undefined;
      const presetKeyStrings = Array.isArray(presetKeys) ? presetKeys.map((p) => (typeof p === "string" ? p : (p as { key: string }).key)) : [];
      return (
        <Calendar
          month={month}
          year={year}
          showHeader={showHeader}
          showWeekdays={showWeekdays}
          showOutsideDays={showOutsideDays}
          showNavigation={showNavigation}
          captionLayout={captionLayout}
          weekStartsOn={weekStartsOn}
          mode={mode}
          showPresets={showPresets}
          presetKeys={presetKeyStrings.length > 0 ? presetKeyStrings : undefined}
          showTime={showTime}
          bookedDates={bookedDatesParsed}
          cellSize={cellSize}
          variant={variant}
          buttonVariant={buttonVariant}
          className={className || undefined}
          id={id || undefined}
        />
      );
    },
  },
};
