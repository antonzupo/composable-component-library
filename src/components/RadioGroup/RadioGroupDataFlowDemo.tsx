import { useEffect, useState } from "react";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import {
  getRadioGroupContentSets,
  type RadioGroupContentSet,
} from "@/data/radioGroup";

/**
 * Demo: data layer → props → UI.
 * Fetches options from the mock data layer and passes them to RadioGroup.
 * Replace the implementation in src/data/radioGroup.ts with a real API
 * and this component unchanged will show live API data.
 */
export function RadioGroupDataFlowDemo() {
  const [sets, setSets] = useState<RadioGroupContentSet[] | null>(null);

  useEffect(() => {
    getRadioGroupContentSets().then(setSets);
  }, []);

  if (!sets?.length) return null;

  return (
    <div className="space-y-4 rounded-lg border border-border bg-muted/20 p-4">
      <p className="text-sm font-medium text-muted-foreground">
        Data flow demo: mock data layer → props → RadioGroup
      </p>
      <div className="flex flex-wrap gap-8">
        {sets.slice(0, 2).map((set) => (
          <div key={set.id}>
            <p className="mb-2 text-sm font-medium text-foreground">
              {set.label}
            </p>
            <RadioGroup
              options={set.options}
              name={`demo-${set.id}`}
              id={`demo-${set.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
