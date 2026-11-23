import type { AppCategory } from "../content/site";

type TagColor = "magenta" | "purple" | "teal";

const categoryColors: Partial<Record<AppCategory, TagColor>> = {
  Arcade: "magenta",
  Finance: "purple",
};

export function getTagColor(category: AppCategory): TagColor {
  return categoryColors[category] ?? "teal";
}
