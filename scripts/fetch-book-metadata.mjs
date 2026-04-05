import fs from "node:fs/promises";

const books = [
  { title: "Kitchen Confidential", author: "Anthony Bourdain" },
  { title: "Freakonomics", author: "Steven D. Levitt and Stephen J. Dubner" },
  { title: "Slaughterhouse-Five", author: "Kurt Vonnegut" },
  {
    title: "The Snowball: Warren Buffett and the Business of Life",
    author: "Alice Schroeder"
  },
  { title: "Animal Farm", author: "George Orwell" },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie"
  },
  { title: "The Kite Runner", author: "Khaled Hosseini" },
  {
    title: "Persepolis: The Story of a Childhood",
    author: "Marjane Satrapi"
  },
  { title: "Man's Search for Meaning", author: "Viktor E. Frankl" },
  { title: "Dune", author: "Frank Herbert" },
  { title: "Steve Jobs", author: "Walter Isaacson" },
  { title: "The Fifth Mountain", author: "Paulo Coelho" },
  { title: "Project Hail Mary", author: "Andy Weir" },
  { title: "1984", author: "George Orwell" },
  { title: "Never Eat Alone", author: "Keith Ferrazzi" },
  { title: "Losing My Virginity", author: "Richard Branson" },
  {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman"
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  {
    title: "The Brain That Changes Itself",
    author: "Norman Doidge"
  },
  { title: "Atlas Shrugged", author: "Ayn Rand" },
  { title: "Reading Lolita in Tehran", author: "Azar Nafisi" },
  { title: "The Red and the Black", author: "Stendhal" },
  { title: "Memoirs of a Geisha", author: "Arthur Golden" },
  { title: "Children of Time", author: "Adrian Tchaikovsky" },
  { title: "The Name of the Wind", author: "Patrick Rothfuss" },
  { title: "East of Eden", author: "John Steinbeck" },
  { title: "The Grapes of Wrath", author: "John Steinbeck" },
  { title: "That Will Never Work", author: "Marc Randolph" },
  { title: "Harry Potter Series", author: "J.K. Rowling" },
  { title: "The Psychology of Money", author: "Morgan Housel" },
  { title: "Fooled by Randomness", author: "Nassim Nicholas Taleb" },
  { title: "Blindness", author: "Jose Saramago" },
  { title: "The Fountainhead", author: "Ayn Rand" },
  {
    title: "The Five Love Languages of Children",
    author: "Gary Chapman and Ross Campbell"
  },
  { title: "The Bitcoin Standard", author: "Saifedean Ammous" },
  { title: "Sophie's World", author: "Jostein Gaarder" },
  { title: "The Life You Can Save", author: "Peter Singer" },
  { title: "Darius the Great Is Not Okay", author: "Adib Khorram" },
  { title: "Ducks: Two Years in the Oil Sands", author: "Kate Beaton" },
  { title: "Jack: Straight from the Gut", author: "Jack Welch" },
  { title: "Babel", author: "R. F. Kuang" },
  { title: "The Game", author: "Neil Strauss" },
  { title: "Hillbilly Elegy", author: "J. D. Vance" },
  { title: "The Alchemist", author: "Paulo Coelho" }
];

const buildExternalUrl = (base, param, title, author) => {
  const url = new URL(base);
  url.searchParams.set(param, [title, author].filter(Boolean).join(" "));
  return url.toString();
};

const searchBook = async ({ title, author }) => {
  const query = new URLSearchParams({ title, author }).toString();
  const response = await fetch(`https://openlibrary.org/search.json?${query}`);

  if (!response.ok) {
    throw new Error(`Open Library search failed for "${title}"`);
  }

  const data = await response.json();
  const docs = Array.isArray(data.docs) ? data.docs : [];
  const match = docs.find((doc) => doc.author_name?.includes(author)) ?? docs[0];

  if (!match) {
    return {
      title,
      author,
      coverImage: undefined,
      goodreadsUrl: buildExternalUrl("https://www.goodreads.com/search", "q", title, author),
      amazonUrl: buildExternalUrl("https://www.amazon.com/s", "k", title, author)
    };
  }

  const goodreadsId = Array.isArray(match.id_goodreads) ? match.id_goodreads[0] : undefined;
  const amazonId = Array.isArray(match.id_amazon) ? match.id_amazon[0] : undefined;
  const coverId = match.cover_i;

  return {
    title,
    author,
    coverImage: coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : undefined,
    goodreadsUrl: goodreadsId
      ? `https://www.goodreads.com/book/show/${goodreadsId}`
      : buildExternalUrl("https://www.goodreads.com/search", "q", title, author),
    amazonUrl: amazonId
      ? `https://www.amazon.com/dp/${amazonId}`
      : buildExternalUrl("https://www.amazon.com/s", "k", title, author)
  };
};

const results = [];

for (const book of books) {
  results.push(await searchBook(book));
}

await fs.writeFile(
  new URL("../tmp-book-metadata.json", import.meta.url),
  `${JSON.stringify(results, null, 2)}\n`
);

console.log(`Wrote ${results.length} records to tmp-book-metadata.json`);
