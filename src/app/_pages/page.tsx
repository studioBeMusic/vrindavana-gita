import Link from "next/link";
const PAGES = [
  "vrindavanagita-v3/legal.html",
  "vrindavanagita-v3/index.html",
  "vrindavanagita-v3/song.html",
  "vrindavanagita-v3/about.html",
  "vrindavanagita-v3/contact.html",
  "vrindavanagita-v3/adhyaya2-section1.html",
  "vrindavanagita-v3/terms.html",
  "vrindavanagita-v3/cookies.html",
  "vrindavanagita-v3/adhyaya2.html",
  "vrindavanagita-v3/adhyaya1-section1.html",
  "vrindavanagita-v3/adhyaya1.html",
  "vrindavanagita-v3/adhyaya1-section2.html",
  "vrindavanagita-v3/adhyaya2-section3.html",
  "vrindavanagita-v3/adhyaya2-section2.html",
  "vrindavanagita-v3/adhyaya1-section3.html",
  "vrindavanagita-v3/adhyaya1-section4.html",
  "vrindavanagita-v3/songs.html",
  "vrindavanagita-v3/adhyaya2-section4.html",
  "vrindavanagita-v3/privacy.html",
  "__MACOSX/vrindavanagita-v3/._legal.html",
  "__MACOSX/vrindavanagita-v3/._index.html",
  "__MACOSX/vrindavanagita-v3/._song.html",
  "__MACOSX/vrindavanagita-v3/._about.html",
  "__MACOSX/vrindavanagita-v3/._contact.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya2-section1.html",
  "__MACOSX/vrindavanagita-v3/._terms.html",
  "__MACOSX/vrindavanagita-v3/._cookies.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya2.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya1-section1.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya1.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya1-section2.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya2-section3.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya2-section2.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya1-section3.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya1-section4.html",
  "__MACOSX/vrindavanagita-v3/._songs.html",
  "__MACOSX/vrindavanagita-v3/._adhyaya2-section4.html",
  "__MACOSX/vrindavanagita-v3/._privacy.html"
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
