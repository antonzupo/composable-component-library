import { createContext, useContext } from "react";

export const IsPuckEditorContext = createContext(false);

export function useIsPuckEditor(): boolean {
  return useContext(IsPuckEditorContext);
}
