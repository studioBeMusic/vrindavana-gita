import Link from "next/link";
const PAGES = [
  "legal.html",
  "index.html",
  "song.html",
  "about.html",
  "contact.html",
  "adhyaya2-section1.html",
  "terms.html",
  "cookies.html",
  "adhyaya2.html",
  "adhyaya1-section1.html",
  "adhyaya1.html",
  "adhyaya1-section2.html",
  "adhyaya2-section3.html",
  "adhyaya2-section2.html",
  "adhyaya1-section3.html",
  "adhyaya1-section4.html",
  "songs.html",
  "adhyaya2-section4.html",
  "privacy.html"
] as const;
export default function Pages() {
  return (
    <main>
      <h1>All Imported HTML Pages</h1>
      <ul>
        {PAGES.map(p => <li key={p}><Link href={`/p/${p}`}>{p}</Link></li>)}
      </ul>
    </main>
  );
}
