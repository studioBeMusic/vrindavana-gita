"use client";
import { useEffect, useState } from "react";
export default function StaticHtml({ path }: { path: string }) {
  const [html, setHtml] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    let mounted = true;
    fetch(path, { cache: "no-store" })
      .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.text(); })
      .then(txt => { if (mounted) setHtml(txt); })
      .catch(e => { if (mounted) setErr(String(e)); });
    return () => { mounted = false; };
  }, [path]);
  if (err) return <main><h1>Error</h1><pre>{err}</pre></main>;
  if (!html) return <main>Loading…</main>;
  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}
