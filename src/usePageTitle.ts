import { useEffect } from "react";
import { studio } from "./content/site";

export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = title ? `${title} · ${studio.name}` : studio.name;
  }, [title]);
}
