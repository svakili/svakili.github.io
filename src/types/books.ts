export type BookRecord = {
  title: string;
  author?: string;
  slug: string;
  coverImage?: string;
  quote?: string;
  myTake?: string;
  goodreadsUrl?: string;
  amazonUrl?: string;
};

export type BooksMeta = {
  age: number;
  count: number;
  updatedAt: string;
};
