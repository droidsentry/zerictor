/**
 * サイトのナビゲーション設定
 */
export const NAVIGATION_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
  { label: "CAREERS", href: "/careers" },
] as const;

export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
