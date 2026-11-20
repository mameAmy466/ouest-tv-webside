import Image from "next/image";
import type { Video } from "@/lib/data";
import { PlayBadge } from "./VideoCard";

export default function Featured({ main, list }: { main: Video; list: Video[] }) {
  return (
    <div className="featured">
      <a href="#" className="featured-main">
        <div className="featured-bar"><PlayBadge /></div>
        <div className="featured-img">
          <Image src={main.image} alt="" fill sizes="(max-width: 900px) 100vw, 700px" />
        </div>
        <div className="featured-caption">
          <h3>{main.title}</h3>
          <p>{main.date}</p>
        </div>
      </a>
      <div className="featured-list">
        {list.map((v) => (
          <a href="#" key={v.id} className="mini-card">
            <div className="mini-thumb">
              <Image src={v.image} alt="" fill sizes="120px" />
              <PlayBadge small />
            </div>
            <div className="mini-body">
              <h4>{v.title}</h4>
              <p>{v.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
