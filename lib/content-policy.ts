/** Adult content is the intended brand category, but remains unavailable until legal review and required written provider/platform approvals are complete. */
export const contentCategories = {
  adultErotica: { label: "Adult erotic fiction (18+)", enabled: false, restricted: true },
  fictionalAdultRoleplay: { label: "Fictional adult roleplay (18+)", enabled: false, restricted: true },
} as const;
export function isCategoryEnabled(key: keyof typeof contentCategories) {
  const category = contentCategories[key];
  if (category.restricted) return false; // hard stop until reviewed and explicitly cleared
  return category.enabled;
}
