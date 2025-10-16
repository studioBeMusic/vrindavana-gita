export type LyricLine = { t: number; text: string; translit?: string };
export type Song = {
  slug: string;
  title: string;
  section?: string;
  audioUrl?: string;     // local /media/*.mp3 or remote
  hlsUrl?: string;       // optional .m3u8
  cover?: string;
  raag?: string;
  taal?: string;
  tempo?: number;
  lyrics?: LyricLine[];
};

// Seed a couple of demo entries; replace with your actual catalog.
export const songs: Song[] = [
  {
    slug: "vrindavana-sharanagati-yatra",
    title: "Vṛndāvana – Śaraṇāgati Yātrā",
    section: "Adhyāya I — Songs of Vṛndāvana",
    audioUrl: "/media/song-demo.mp3",
    raag: "Yaman",
    taal: "Teentaal",
    tempo: 84,
    lyrics: [
      { t: 0,   text: "Vṛndāvana-dhūliḥ, śaraṇāgati yātrā", translit: "Vṛndāvana-dhūliḥ, śaraṇāgati yātrā" },
      { t: 5.5, text: "Hṛdaye vraja-rasaḥ, ānanda-vṛṣṭiḥ" },
      { t: 12,  text: "Govardhana-śailaḥ, śaraṇam mama" },
      { t: 18,  text: "Rādhā-kṛpā-kāṭākṣaḥ, mama dīpaḥ" }
    ]
  }
];

export function getAllSongs() { return songs; }
