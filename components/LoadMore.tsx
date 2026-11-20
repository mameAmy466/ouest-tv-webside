"use client";

import { useState } from "react";
import { morePool, type Video } from "@/lib/data";
import { VideoGrid } from "./VideoCard";

/** Simule « Charger plus » en ajoutant des vidéos fictives. */
export default function LoadMore({ initial = [] }: { initial?: Video[] }) {
  const [items, setItems] = useState<Video[]>(initial);
  const [page, setPage] = useState(0);

  const load = () => {
    const start = (page * 4) % morePool.length;
    setItems((prev) => [...prev, ...morePool.slice(start, start + 4)]);
    setPage((p) => p + 1);
  };

  return (
    <>
      {items.length > 0 && <VideoGrid videos={items} />}
      <div className="load-more">
        <button onClick={load}>Charger plus</button>
      </div>
    </>
  );
}
