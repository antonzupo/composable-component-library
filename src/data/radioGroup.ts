/** Data access layer for Radio Group options. */

export interface RadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupContentSet {
  id: string;
  label: string;
  options: RadioGroupOption[];
}

const MOCK_RADIO_GROUP_SETS: RadioGroupContentSet[] = [
  {
    id: "delivery",
    label: "Delivery method",
    options: [
      { value: "standard", label: "Standard delivery" },
      { value: "express", label: "Express delivery" },
      { value: "pickup", label: "Pick up in store", disabled: false },
    ],
  },
  {
    id: "size",
    label: "Size",
    options: [
      { value: "sm", label: "Small" },
      { value: "md", label: "Medium" },
      { value: "lg", label: "Large" },
    ],
  },
  {
    id: "plan",
    label: "Subscription plan",
    options: [
      { value: "monthly", label: "Monthly" },
      { value: "yearly", label: "Yearly (save 20%)" },
    ],
  },
];

/** Fetches available radio group content sets. */
export async function getRadioGroupContentSets(
  _query?: string
): Promise<RadioGroupContentSet[]> {
  await Promise.resolve();
  return [...MOCK_RADIO_GROUP_SETS];
}

/** Fetches options for a single radio group by id. */
export async function getRadioGroupOptionsById(
  id: string
): Promise<RadioGroupOption[]> {
  const set = MOCK_RADIO_GROUP_SETS.find((s) => s.id === id);
  return set ? [...set.options] : [];
}
