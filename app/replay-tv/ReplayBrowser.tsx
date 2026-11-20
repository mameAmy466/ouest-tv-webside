"use client";

import { useRef, useState } from "react";
import Featured from "@/components/Featured";
import LoadMore from "@/components/LoadMore";
import { VideoGrid } from "@/components/VideoCard";
import { ChevronLeft, ChevronRight } from "@/components/Icons";
import { featured, latest, morePool, replayCategories, sideList } from "@/lib/data";

/** Rotation simple des données fictives pour donner l'impression d'un contenu par catégorie. */
function rotate<T>(arr: T[], n: number) {
  const k = n % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}

export default function ReplayBrowser() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => tabsRef.current?.scrollBy({ left: dir * 220, behavior: "smooth" });

  const grid = rotate([...latest, ...morePool], active * 3).slice(0, 4);
  const list = rotate(sideList, active);

  return (
    <section className="section container">
      <div className="tabs-wrap">
        <button className="tab-arrow" aria-label="Précédent" onClick={() => scroll(-1)}><ChevronLeft size={14} /></button>
        <div className="tabs" ref={tabsRef}>
          {replayCategories.map((c, i) => (
            <button key={c} className={`tab ${i === active ? "active" : ""}`} onClick={() => setActive(i)}>
              {c}
            </button>
          ))}
        </div>
        <button className="tab-arrow red" aria-label="Suivant" onClick={() => scroll(1)}><ChevronRight size={14} /></button>
      </div>

      <div className="section-head">
        <h2 className="tab-title">À revoir TV</h2>
      </div>
      <Featured main={{ ...featured, category: replayCategories[active] }} list={list} />
      <VideoGrid videos={grid} />
      <LoadMore key={active} />
    </section>
  );
}
