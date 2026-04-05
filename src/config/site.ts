export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Soheyl Vakili",
  title: "Soheyl Vakili",
  description: "Soheyl Vakili.",
  siteUrl: "https://svakili.github.io",
  nav: [{ label: "Books", href: "/books" }] satisfies NavItem[]
};
