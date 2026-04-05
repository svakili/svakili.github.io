export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Soheyl Vakili",
  title: "Soheyl Vakili",
  description: "A quiet personal website for enduring interests, ideas, and reading.",
  siteUrl: "https://svakili.github.io",
  nav: [{ label: "Books", href: "/books" }] satisfies NavItem[],
  footerNote: "Built with Astro."
};
