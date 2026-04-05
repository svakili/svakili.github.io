import type { BookRecord, BooksMeta } from "../types/books";

type RawBook = Omit<BookRecord, "slug">;

const rawBooks: RawBook[] = [
  {
    title: "Kitchen Confidential",
    author: "Anthony Bourdain",
    coverImage: "https://covers.openlibrary.org/b/id/843879-M.jpg"
  },
  {
    title: "Freakonomics",
    author: "Steven D. Levitt and Stephen J. Dubner",
    coverImage: "https://covers.openlibrary.org/b/id/11172914-M.jpg"
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    coverImage: "https://covers.openlibrary.org/b/id/12727001-M.jpg"
  },
  {
    title: "The Snowball: Warren Buffett and the Business of Life",
    author: "Alice Schroeder"
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    coverImage: "https://covers.openlibrary.org/b/id/11261770-M.jpg"
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    coverImage: "https://covers.openlibrary.org/b/id/13314878-M.jpg"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    coverImage: "https://covers.openlibrary.org/b/id/14846827-M.jpg"
  },
  {
    title: "Persepolis: The Story of a Childhood",
    author: "Marjane Satrapi"
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    coverImage: "https://covers.openlibrary.org/b/id/11203708-M.jpg"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    coverImage: "https://covers.openlibrary.org/b/id/11481354-M.jpg"
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    coverImage: "https://covers.openlibrary.org/b/id/12374726-M.jpg"
  },
  {
    title: "The Fifth Mountain",
    author: "Paulo Coelho",
    coverImage: "https://covers.openlibrary.org/b/id/10754963-M.jpg"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    coverImage: "https://covers.openlibrary.org/b/id/11200092-M.jpg"
  },
  { title: "1984", author: "George Orwell" },
  {
    title: "Never Eat Alone",
    author: "Keith Ferrazzi",
    coverImage: "https://covers.openlibrary.org/b/id/6802201-M.jpg"
  },
  {
    title: "Losing My Virginity",
    author: "Richard Branson",
    coverImage: "https://covers.openlibrary.org/b/id/605511-M.jpg"
  },
  {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman",
    coverImage: "https://covers.openlibrary.org/b/id/9274698-M.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://covers.openlibrary.org/b/id/14351077-M.jpg"
  },
  {
    title: "The Brain That Changes Itself",
    author: "Norman Doidge",
    coverImage: "https://covers.openlibrary.org/b/id/1333251-M.jpg"
  },
  {
    title: "Atlas Shrugged",
    author: "Ayn Rand",
    coverImage: "https://covers.openlibrary.org/b/id/362277-M.jpg"
  },
  {
    title: "Reading Lolita in Tehran",
    author: "Azar Nafisi",
    coverImage: "https://covers.openlibrary.org/b/id/227873-M.jpg"
  },
  { title: "The Red and the Black", author: "Stendhal" },
  {
    title: "Memoirs of a Geisha",
    author: "Arthur Golden",
    coverImage: "https://covers.openlibrary.org/b/id/8231782-M.jpg"
  },
  {
    title: "Children of Time",
    author: "Adrian Tchaikovsky",
    coverImage: "https://covers.openlibrary.org/b/id/8264706-M.jpg"
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    coverImage: "https://covers.openlibrary.org/b/id/11480483-M.jpg"
  },
  {
    title: "East of Eden",
    author: "John Steinbeck",
    coverImage: "https://covers.openlibrary.org/b/id/11386937-M.jpg"
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    coverImage: "https://covers.openlibrary.org/b/id/12715902-M.jpg"
  },
  {
    title: "That Will Never Work",
    author: "Marc Randolph",
    coverImage: "https://covers.openlibrary.org/b/id/10663066-M.jpg"
  },
  {
    title: "Harry Potter Series",
    author: "J.K. Rowling",
    coverImage: "https://covers.openlibrary.org/b/id/8457523-M.jpg"
  },
  { title: "The Psychology of Money", author: "Morgan Housel" },
  {
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    coverImage: "https://covers.openlibrary.org/b/id/855791-M.jpg"
  },
  { title: "Blindness", author: "Jose Saramago" },
  {
    title: "The Fountainhead",
    author: "Ayn Rand",
    coverImage: "https://covers.openlibrary.org/b/id/6767765-M.jpg"
  },
  {
    title: "The Five Love Languages of Children",
    author: "Gary Chapman and Ross Campbell",
    coverImage: "https://covers.openlibrary.org/b/id/927648-M.jpg"
  },
  {
    title: "The Bitcoin Standard",
    author: "Saifedean Ammous",
    coverImage: "https://covers.openlibrary.org/b/id/10320866-M.jpg"
  },
  {
    title: "Sophie's World",
    author: "Jostein Gaarder",
    coverImage: "https://covers.openlibrary.org/b/id/7110628-M.jpg"
  },
  {
    title: "The Life You Can Save",
    author: "Peter Singer",
    coverImage: "https://covers.openlibrary.org/b/id/6289300-M.jpg"
  },
  {
    title: "Darius the Great Is Not Okay",
    author: "Adib Khorram",
    coverImage: "https://covers.openlibrary.org/b/id/9274780-M.jpg"
  },
  { title: "Ducks: Two Years in the Oil Sands", author: "Kate Beaton" },
  {
    title: "Jack: Straight from the Gut",
    author: "Jack Welch",
    coverImage: "https://covers.openlibrary.org/b/id/11554912-M.jpg"
  },
  {
    title: "Babel",
    author: "R. F. Kuang",
    coverImage: "https://covers.openlibrary.org/b/id/12468631-M.jpg"
  },
  {
    title: "The Game",
    author: "Neil Strauss",
    coverImage: "https://covers.openlibrary.org/b/id/8538692-M.jpg"
  },
  {
    title: "Hillbilly Elegy",
    author: "J. D. Vance",
    coverImage: "https://covers.openlibrary.org/b/id/14846900-M.jpg"
  },
  { title: "The Alchemist", author: "Paulo Coelho" }
];

const createExternalUrl = (base: string, param: string, title: string, author?: string) => {
  const query = [title, author].filter(Boolean).join(" ");
  const url = new URL(base);
  url.searchParams.set(param, query);
  return url.toString();
};

const createSlug = (title: string) =>
  title
    .toLowerCase()
    .normalize("NFKD")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const books: BookRecord[] = rawBooks.map((book) => ({
  ...book,
  slug: createSlug(book.title),
  goodreadsUrl: createExternalUrl("https://www.goodreads.com/search", "q", book.title, book.author),
  amazonUrl: createExternalUrl("https://www.amazon.com/s", "k", book.title, book.author)
}));

export const booksMeta: BooksMeta = {
  count: books.length,
  updatedAt: "2025-04-01"
};
