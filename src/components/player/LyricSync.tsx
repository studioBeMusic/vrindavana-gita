"use client";

import { useEffect, useMemo, useState } from "react";
import type { LyricLine } from "@/lib/songs";

type Props = {
  lines: LyricLine[];
  getCurrentTime?: () => number;
};

export default function LyricSync({ lines, getCurrentTime }: Props) {
  const [now, setNow] = useState(0);
  const sorted = useMemo(() => [...lines].sort((a,b)=>a.t-b.t), [lines]);

  useEffect(() => {
    const id = setInterval(() => {
      const t = getCurrentTime ? getCurrentTime() : 0;
      setNow(t);
    }, 250);
    return () => clearInterval(id);
  }, [getCurrentTime]);

  const activeIdx = useMemo(() => {
    let i = 0;
    while (i < sorted.length && sorted[i].t <= now) i++;
    return Math.max(0, i - 1);
  }, [now, sorted]);

  return (
    <div className="lyrics" aria-live="polite">
      {sorted.map((l, i) => (
        <div key={i} className={i === activeIdx ? "activeLine" : undefined}>
          {l.text}{l.translit ? `
(${l.translit})` : ""}
        </div>
      ))}
    </div>
  );
}
