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

const goodreadsOverrides = {
  "The Snowball: Warren Buffett and the Business of Life":
    "https://www.goodreads.com/book/show/2054761.The_Snowball",
  "Persepolis: The Story of a Childhood":
    "https://www.goodreads.com/book/show/9516.Persepolis",
  "Project Hail Mary": "https://www.goodreads.com/book/show/54493401-project-hail-mary",
  "Losing My Virginity": "https://www.goodreads.com/book/show/211099.Losing_My_Virginity",
  "To Kill a Mockingbird": "https://www.goodreads.com/book/show/2654.To_Kill_a_Mockingbird",
  "Atlas Shrugged": "https://www.goodreads.com/book/show/9365.Atlas_Shrugged",
  "Children of Time": "https://www.goodreads.com/book/show/25499718-children-of-time",
  "The Grapes of Wrath": "https://www.goodreads.com/book/show/18114322-the-grapes-of-wrath",
  "The Psychology of Money":
    "https://www.goodreads.com/book/show/55290131-the-psychology-of-money",
  "Fooled by Randomness": "https://www.goodreads.com/book/show/905654.Fooled_by_Randomness",
  "The Life You Can Save":
    "https://www.goodreads.com/book/show/49005196-the-life-you-can-save",
  "The Game": "https://www.goodreads.com/book/show/900.The_Game",
  "Hillbilly Elegy":
    "https://www.goodreads.com/book/show/27161156.Hillbilly_Elegy_A_Memoir_of_a_Family_and_Culture_in_Crisis"
};

const badGoodreadsTerms = [
  "summary",
  "guide",
  "study",
  "analysis",
  "quicklet",
  "instaread",
  "sparknotes",
  "graphic novel",
  "adaptation",
  "workbook"
];

const goodreadsResultPattern =
  /bookTitle" itemprop="url" href="([^"]+)".*?<span itemprop=["']name["'][^>]*>(.*?)<\/span>.*?authorName" itemprop="url" href="[^"]+"><span itemprop="name">(.*?)<\/span>/gs;

const normalizeText = (value) =>
  value
    .toLowerCase()
    .replaceAll("&", " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");

const decodeHtml = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

const stripTags = (value) => value.replace(/<[^>]+>/g, "").trim();

const scoreGoodreadsCandidate = ({ title, author, candidateTitle, candidateAuthor }) => {
  const targetTitle = normalizeText(title);
  const targetAuthor = normalizeText(author);
  const normalizedTitle = normalizeText(candidateTitle);
  const normalizedAuthor = normalizeText(candidateAuthor);
  const targetTitleTokens = new Set(targetTitle.split(" "));
  const candidateTitleTokens = new Set(normalizedTitle.split(" "));
  const targetAuthorTokens = new Set(targetAuthor.split(" "));
  const candidateAuthorTokens = new Set(normalizedAuthor.split(" "));

  let score = 0;

  if (targetTitle === normalizedTitle) score += 150;
  if (normalizedTitle.includes(targetTitle)) score += 80;
  if (targetTitle.includes(normalizedTitle)) score += 50;

  score +=
    [...targetTitleTokens].filter((token) => candidateTitleTokens.has(token)).length * 5;
  score -= Math.max(0, candidateTitleTokens.size - targetTitleTokens.size) * 3;

  if (targetAuthor === normalizedAuthor) score += 100;
  else if (
    normalizedAuthor.includes(targetAuthor) ||
    targetAuthor.includes(normalizedAuthor)
  ) {
    score += 60;
  }

  score +=
    [...targetAuthorTokens].filter((token) => candidateAuthorTokens.has(token)).length * 4;

  for (const term of badGoodreadsTerms) {
    if (normalizedTitle.includes(term) || normalizedAuthor.includes(term)) {
      score -= 140;
    }
  }

  return score;
};

const resolveGoodreadsUrl = async (title, author) => {
  if (goodreadsOverrides[title]) {
    return goodreadsOverrides[title];
  }

  const url = new URL("https://www.goodreads.com/search");
  url.searchParams.set("q", `${title} ${author}`);

  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) {
    return undefined;
  }

  const html = await response.text();
  const candidates = [];

  for (const match of html.matchAll(goodreadsResultPattern)) {
    const href = decodeHtml(match[1]).split("?")[0];
    const candidateTitle = decodeHtml(stripTags(match[2]));
    const candidateAuthor = decodeHtml(match[3]).trim();

    candidates.push({
      href: `https://www.goodreads.com${href}`,
      score: scoreGoodreadsCandidate({
        title,
        author,
        candidateTitle,
        candidateAuthor
      })
    });
  }

  candidates.sort((left, right) => right.score - left.score);
  return candidates[0]?.href;
};

const resolveAmazonUrl = async (title, author) => {
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", `${title} ${author}`);
  url.searchParams.set("i", "stripbooks");

  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0"
    }
  });

  if (!response.ok) {
    return undefined;
  }

  const html = await response.text();
  const asins = [...html.matchAll(/data-asin="([A-Z0-9]{10})"/g)]
    .map((match) => match[1])
    .filter((asin) => asin && asin !== "0000000000");

  const asin = asins[0];
  return asin ? `https://www.amazon.com/dp/${asin}` : undefined;
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
  const [goodreadsUrl, amazonUrl] = await Promise.all([
    resolveGoodreadsUrl(title, author),
    resolveAmazonUrl(title, author)
  ]);

  if (!match) {
    return {
      title,
      author,
      coverImage: undefined,
      goodreadsUrl,
      amazonUrl
    };
  }

  const coverId = match.cover_i;

  return {
    title,
    author,
    coverImage: coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
      : undefined,
    goodreadsUrl,
    amazonUrl
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
