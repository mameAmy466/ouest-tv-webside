"use client";

import Image from "next/image";
import { useState } from "react";
import { Expand, PlayFill, Volume } from "./Icons";

/** Lecteur purement visuel (aucun flux réel). */
export default function VideoPlayer({ image, alt, live = false }: { image: string; alt: string; live?: boolean }) {
  const [playing, setPlaying] = useState(false);
  const [hd, setHd] = useState(true);
  const [muted, setMuted] = useState(false);

  return (
    <div className="player">
      <div className="player-screen">
        <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 640px" priority />
        {live && <span className="live-badge"><i /> LIVE</span>}
        {!live && (
          <div className="player-progress">
            <span>03:43</span>
            <div className="bar"><div style={{ width: "32%" }} /></div>
            <span>11:43</span>
          </div>
        )}
      </div>
      <div className="player-controls">
        <button className="ctrl" aria-label={playing ? "Pause" : "Lecture"} onClick={() => setPlaying((p) => !p)}>
          {playing ? <span className="pause-icon" /> : <PlayFill size={14} />}
        </button>
        <div className="ctrl-group">
          <button className={`ctrl ${hd ? "" : "off"}`} onClick={() => setHd((v) => !v)}>HD</button>
          <button className={`ctrl ${muted ? "off" : ""}`} aria-label="Son" onClick={() => setMuted((v) => !v)}><Volume size={15} /></button>
          <button className="ctrl" aria-label="Plein écran"><Expand size={15} /></button>
        </div>
      </div>
    </div>
  );
}
