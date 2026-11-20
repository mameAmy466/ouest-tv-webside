import Image from "next/image";
import type { Video } from "@/lib/data";
import { PlayFill } from "./Icons";

export function PlayBadge({ small = false }: { small?: boolean }) {
  return (
    <span className={`play-badge ${small ? "small" : ""}`}>
      <PlayFill size={small ? 8 : 14} />
    </span>
  );
}

export default function VideoCard({ video }: { video: Video }) {
  return (
    <a href="#" className="video-card">
      <div className="thumb">
        <Image src={video.image} alt="" fill sizes="(max-width: 600px) 50vw, 280px" />
        <PlayBadge />
      </div>
      <p className="date">{video.date}</p>
      <h4>{video.title}</h4>
    </a>
  );
}

export function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="video-grid">
      {videos.map((v, i) => (
        <VideoCard key={`${v.id}-${i}`} video={v} />
      ))}
    </div>
  );
}
