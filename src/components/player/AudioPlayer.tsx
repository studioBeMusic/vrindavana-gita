"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePlayerStore } from "@/lib/store";

export default function AudioPlayer({ src, slug }: { src: string; slug: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const isPlaying = usePlayerStore((s) => s.isPlaying);
  const setPlaying = usePlayerStore((s) => s.setPlaying);
  const setCurrent = usePlayerStore((s) => s.setCurrent);

  useEffect(() => {
    if (!containerRef.current || wavesurferRef.current) return;

    (async () => {
      const WS = (await import("wavesurfer.js")).default;
      const ws = WS.create({
        container: containerRef.current!,
        waveColor: "#bbb",
        progressColor: "#333",
        height: 64,
        cursorWidth: 1,
      });
      wavesurferRef.current = ws;
      ws.load(src);
      ws.on("ready", () => setReady(true));
      ws.on("play", () => {
        setPlaying(true);
        setCurrent(slug);
      });
      ws.on("pause", () => setPlaying(false));
      ws.on("finish", () => setPlaying(false));
    })();

    return () => wavesurferRef.current?.destroy?.();
  }, [src, setCurrent, setPlaying, slug]);

  const toggle = useCallback(() => wavesurferRef.current?.playPause(), []);
  const skip = useCallback((sec: number) => {
    const ws = wavesurferRef.current;
    if (!ws) return;
    ws.setTime(Math.max(0, ws.getCurrentTime() + sec));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        toggle();
      }
      if (e.code === "ArrowLeft") skip(-5);
      if (e.code === "ArrowRight") skip(5);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [skip, toggle]);

  return (
    <div aria-label="Audio player">
      <div ref={containerRef} aria-busy={!ready} />
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button onClick={toggle} aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => skip(-5)} aria-label="Back 5 seconds">
          -5s
        </button>
        <button onClick={() => skip(5)} aria-label="Forward 5 seconds">
          +5s
        </button>
      </div>
    </div>
  );
}
