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
    author: "Alice Schroeder",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1320458276i/2054761.jpg"
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    coverImage: "https://covers.openlibrary.org/b/id/11261770-M.jpg"
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1348670562i/6945594.jpg"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    coverImage: "https://covers.openlibrary.org/b/id/14846827-M.jpg"
  },
  {
    title: "Persepolis: The Story of a Childhood",
    author: "Marjane Satrapi",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1425871473i/9516.jpg"
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
  {
    title: "1984",
    author: "George Orwell",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg"
  },
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
  {
    title: "The Red and the Black",
    author: "Stendhal",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1635011110i/14662.jpg"
  },
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
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1375670575i/18114322.jpg"
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
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1599740486i/55290131.jpg"
  },
  {
    title: "Fooled by Randomness",
    author: "Nassim Nicholas Taleb",
    coverImage: "https://covers.openlibrary.org/b/id/855791-M.jpg"
  },
  {
    title: "Blindness",
    author: "Jose Saramago",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1528481068i/40495148.jpg"
  },
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
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1517051735i/36448501.jpg"
  },
  {
    title: "Sophie's World",
    author: "Jostein Gaarder",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1343459906i/10959.jpg"
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
  {
    title: "Ducks: Two Years in the Oil Sands",
    author: "Kate Beaton",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1642101898i/59069071.jpg"
  },
  {
    title: "Jack: Straight from the Gut",
    author: "Jack Welch",
    coverImage: "https://covers.openlibrary.org/b/id/11554912-M.jpg"
  },
  {
    title: "Babel",
    author: "R. F. Kuang",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1677361825i/57945316.jpg"
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
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg"
  }
];

const directBookLinks: Record<
  string,
  Pick<BookRecord, "goodreadsUrl" | "amazonUrl">
> = {
  "Kitchen Confidential": {
    goodreadsUrl: "https://www.goodreads.com/book/show/33313.Kitchen_Confidential",
    amazonUrl: "https://www.amazon.com/dp/0060899220"
  },
  Freakonomics: {
    goodreadsUrl: "https://www.goodreads.com/book/show/7159006-freakonomics",
    amazonUrl: "https://www.amazon.com/dp/B000TK5BS2"
  },
  "Slaughterhouse-Five": {
    goodreadsUrl: "https://www.goodreads.com/book/show/4981.Slaughterhouse_Five",
    amazonUrl: "https://www.amazon.com/dp/0385333846"
  },
  "The Snowball: Warren Buffett and the Business of Life": {
    goodreadsUrl: "https://www.goodreads.com/book/show/2054761.The_Snowball",
    amazonUrl: "https://www.amazon.com/dp/0553805096"
  },
  "Animal Farm": {
    goodreadsUrl: "https://www.goodreads.com/book/show/170448.Animal_Farm",
    amazonUrl: "https://www.amazon.com/dp/0451526341"
  },
  "How to Win Friends and Influence People": {
    goodreadsUrl:
      "https://www.goodreads.com/book/show/6945594-how-to-win-friends-and-influence-people-by-dale-carnegie",
    amazonUrl: "https://www.amazon.com/dp/1439167346"
  },
  "The Kite Runner": {
    goodreadsUrl: "https://www.goodreads.com/book/show/17165596-the-kite-runner",
    amazonUrl: "https://www.amazon.com/dp/159463193X"
  },
  "Persepolis: The Story of a Childhood": {
    goodreadsUrl: "https://www.goodreads.com/book/show/9516.Persepolis",
    amazonUrl: "https://www.amazon.com/dp/037571457X"
  },
  "Man's Search for Meaning": {
    goodreadsUrl: "https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning",
    amazonUrl: "https://www.amazon.com/dp/080701429X"
  },
  Dune: {
    goodreadsUrl: "https://www.goodreads.com/book/show/44767458-dune",
    amazonUrl: "https://www.amazon.com/dp/059309932X"
  },
  "Steve Jobs": {
    goodreadsUrl: "https://www.goodreads.com/book/show/11084145-steve-jobs",
    amazonUrl: "https://www.amazon.com/dp/1451648537"
  },
  "The Fifth Mountain": {
    goodreadsUrl: "https://www.goodreads.com/book/show/1429.The_Fifth_Mountain",
    amazonUrl: "https://www.amazon.com/dp/0060930136"
  },
  "Project Hail Mary": {
    goodreadsUrl: "https://www.goodreads.com/book/show/54493401-project-hail-mary",
    amazonUrl: "https://www.amazon.com/dp/0593135202"
  },
  "1984": {
    goodreadsUrl: "https://www.goodreads.com/book/show/61439040-1984",
    amazonUrl: "https://www.amazon.com/dp/0452284236"
  },
  "Never Eat Alone": {
    goodreadsUrl: "https://www.goodreads.com/book/show/84699.Never_Eat_Alone",
    amazonUrl: "https://www.amazon.com/dp/0385512058"
  },
  "Losing My Virginity": {
    goodreadsUrl: "https://www.goodreads.com/book/show/211099.Losing_My_Virginity",
    amazonUrl: "https://www.amazon.com/dp/0812932293"
  },
  "Surely You're Joking, Mr. Feynman!": {
    goodreadsUrl: "https://www.goodreads.com/book/show/35167685-surely-you-re-joking-mr-feynman",
    amazonUrl: "https://www.amazon.com/dp/0393355624"
  },
  "To Kill a Mockingbird": {
    goodreadsUrl: "https://www.goodreads.com/book/show/2654.To_Kill_a_Mockingbird",
    amazonUrl: "https://www.amazon.com/dp/0060935464"
  },
  "The Brain That Changes Itself": {
    goodreadsUrl:
      "https://www.goodreads.com/book/show/200281451-the-brain-that-changes-itself",
    amazonUrl: "https://www.amazon.com/dp/0143113100"
  },
  "Atlas Shrugged": {
    goodreadsUrl: "https://www.goodreads.com/book/show/9365.Atlas_Shrugged",
    amazonUrl: "https://www.amazon.com/dp/0394415760"
  },
  "Reading Lolita in Tehran": {
    goodreadsUrl: "https://www.goodreads.com/book/show/7603.Reading_Lolita_in_Tehran",
    amazonUrl: "https://www.amazon.com/dp/081297106X"
  },
  "The Red and the Black": {
    goodreadsUrl: "https://www.goodreads.com/book/show/14662.The_Red_and_the_Black",
    amazonUrl: "https://www.amazon.com/dp/0140447644"
  },
  "Memoirs of a Geisha": {
    goodreadsUrl: "https://www.goodreads.com/book/show/929.Memoirs_of_a_Geisha",
    amazonUrl: "https://www.amazon.com/dp/1400096898"
  },
  "Children of Time": {
    goodreadsUrl: "https://www.goodreads.com/book/show/25499718-children-of-time",
    amazonUrl: "https://www.amazon.com/dp/1447273281"
  },
  "The Name of the Wind": {
    goodreadsUrl: "https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind",
    amazonUrl: "https://www.amazon.com/dp/075640407X"
  },
  "East of Eden": {
    goodreadsUrl: "https://www.goodreads.com/book/show/4406.East_of_Eden",
    amazonUrl: "https://www.amazon.com/dp/0142000655"
  },
  "The Grapes of Wrath": {
    goodreadsUrl: "https://www.goodreads.com/book/show/18114322-the-grapes-of-wrath",
    amazonUrl: "https://www.amazon.com/dp/067001690X"
  },
  "That Will Never Work": {
    goodreadsUrl: "https://www.goodreads.com/book/show/44428950-that-will-never-work",
    amazonUrl: "https://www.amazon.com/dp/0316530204"
  },
  "Harry Potter Series": {
    goodreadsUrl: "https://www.goodreads.com/book/show/862041.Harry_Potter_Series_Box_Set",
    amazonUrl: "https://www.amazon.com/dp/0545044251"
  },
  "The Psychology of Money": {
    goodreadsUrl: "https://www.goodreads.com/book/show/55290131-the-psychology-of-money",
    amazonUrl: "https://www.amazon.com/dp/9390166268"
  },
  "Fooled by Randomness": {
    goodreadsUrl: "https://www.goodreads.com/book/show/905654.Fooled_by_Randomness",
    amazonUrl: "https://www.amazon.com/dp/0141031484"
  },
  Blindness: {
    goodreadsUrl: "https://www.goodreads.com/book/show/40495148-blindness",
    amazonUrl: "https://www.amazon.com/dp/0156007754"
  },
  "The Fountainhead": {
    goodreadsUrl: "https://www.goodreads.com/book/show/2122.The_Fountainhead",
    amazonUrl: "https://www.amazon.com/dp/B000Z7FH38"
  },
  "The Five Love Languages of Children": {
    goodreadsUrl:
      "https://www.goodreads.com/book/show/163016844-the-five-love-languages-of-children",
    amazonUrl: "https://www.amazon.com/dp/B01GQO95PY"
  },
  "The Bitcoin Standard": {
    goodreadsUrl: "https://www.goodreads.com/book/show/36448501-the-bitcoin-standard",
    amazonUrl: "https://www.amazon.com/dp/1119473861"
  },
  "Sophie's World": {
    goodreadsUrl: "https://www.goodreads.com/book/show/10959.Sophie_s_World",
    amazonUrl: "https://www.amazon.com/dp/1857993284"
  },
  "The Life You Can Save": {
    goodreadsUrl: "https://www.goodreads.com/book/show/49005196-the-life-you-can-save",
    amazonUrl: "https://www.amazon.com/dp/1733672702"
  },
  "Darius the Great Is Not Okay": {
    goodreadsUrl: "https://www.goodreads.com/book/show/37506437-darius-the-great-is-not-okay",
    amazonUrl: "https://www.amazon.com/dp/0525552960"
  },
  "Ducks: Two Years in the Oil Sands": {
    goodreadsUrl: "https://www.goodreads.com/book/show/59069071-ducks",
    amazonUrl: "https://www.amazon.com/dp/1770462899"
  },
  "Jack: Straight from the Gut": {
    goodreadsUrl: "https://www.goodreads.com/book/show/5559.Jack",
    amazonUrl: "https://www.amazon.com/dp/5559608475"
  },
  Babel: {
    goodreadsUrl: "https://www.goodreads.com/book/show/57945316-babel",
    amazonUrl: "https://www.amazon.com/dp/0063021420"
  },
  "The Game": {
    goodreadsUrl: "https://www.goodreads.com/book/show/900.The_Game",
    amazonUrl: "https://www.amazon.com/dp/0060554738"
  },
  "Hillbilly Elegy": {
    goodreadsUrl:
      "https://www.goodreads.com/book/show/27161156.Hillbilly_Elegy_A_Memoir_of_a_Family_and_Culture_in_Crisis",
    amazonUrl: "https://www.amazon.com/dp/B01EM4ZJBO"
  },
  "The Alchemist": {
    goodreadsUrl: "https://www.goodreads.com/book/show/18144590-the-alchemist",
    amazonUrl: "https://www.amazon.com/dp/0062315005"
  }
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
  ...directBookLinks[book.title]
}));

export const booksMeta: BooksMeta = {
  count: books.length,
  updatedAt: "2025-04-01"
};
