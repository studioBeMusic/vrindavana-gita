"use client";

import { useMemo } from "react";
import { getAllSongs } from "@/lib/songs";
import AudioPlayer from "@/components/player/AudioPlayer";
import VideoPlayer from "@/components/player/VideoPlayer";
import LyricSync from "@/components/player/LyricSync";
import RagaViz from "@/components/player/RagaViz";

export default function SongsPage() {
  // getAllSongs() is static; in a real app you'd fetch from an API or FS at build time
  const all = useMemo(() => getAllSongs(), []);

  return (
    <main>
      <h1>Songs</h1>
      {all.length === 0 && <p>No songs loaded yet.</p>}
      <div style={{display:"grid", gap:24}}>
        {all.map(song => (
          <div key={song.slug} className="card">
            <h3>{song.title}</h3>
            {song.hlsUrl ? (
              <VideoPlayer src={song.hlsUrl} />
            ) : song.audioUrl ? (
              <AudioPlayer src={song.audioUrl} slug={song.slug} />
            ) : (
              <p>Missing media URL</p>
            )}

            <section style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16, marginTop:16}}>
              <div>
                <h4>Lyrics</h4>
                {song.lyrics && song.lyrics.length > 0
                  ? <LyricSync lines={song.lyrics} />
                  : <p>(Add timed lyrics in <code>src/lib/songs.ts</code>)</p>}
              </div>
              <div>
                <h4>Rāga</h4>
                <RagaViz raag={song.raag} />
                <div style={{marginTop:8}}><strong>Tāla:</strong> {song.taal || "—"}</div>
                <div><strong>Tempo:</strong> {song.tempo ? `${song.tempo} BPM` : "—"}</div>
              </div>
            </section>
          </div>
        ))}
      </div>
    </main>
  );
}
