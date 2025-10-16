"use client";

import {useEffect, useRef} from "react";
import Hls from "hls.js";

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement|null>(null);

  useEffect(() => {
    const video = videoRef.current!;
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else {
      // Safari can play HLS natively
      video.src = src;
    }
  }, [src]);

  return (
    <video ref={videoRef} controls playsInline style={{width:"100%", height:"auto"}} />
  );
}
