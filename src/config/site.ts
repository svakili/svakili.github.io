export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Soheyl Vakili",
  title: "Soheyl Vakili",
  description:
    "A personal site in progress, beginning with a living list of books that changed my life.",
  siteUrl: "https://svakili.github.io",
  nav: [{ label: "Books", href: "/books" }] satisfies NavItem[],
  footerNote: "Built with Astro."
};
