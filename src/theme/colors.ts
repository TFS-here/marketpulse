 export const colors = {
  background: "#111827",
  surface: "#1F2937",
  textPrimary: "#F8FAFC",
  textSecondary: "#CBD5E1",
  purchase: "#22C55E",
  sale: "#EF4444",
  analytics: "#60A5FA",
  analytics2: "#A78BFA",
} as const;

export type ThemeColor = keyof typeof colors;