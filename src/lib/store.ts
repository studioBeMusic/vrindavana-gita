import { create } from "zustand";

type PlayerState = {
  currentSlug: string | null;
  setCurrent: (slug: string | null) => void;
  isPlaying: boolean;
  setPlaying: (v: boolean) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSlug: null,
  setCurrent: (slug) => set({ currentSlug: slug }),
  isPlaying: false,
  setPlaying: (v) => set({ isPlaying: v })
}));
