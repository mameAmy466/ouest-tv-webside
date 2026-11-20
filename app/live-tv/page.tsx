import type { Metadata } from "next";
import Featured from "@/components/Featured";
import LoadMore from "@/components/LoadMore";
import VideoPlayer from "@/components/VideoPlayer";
import { VideoGrid } from "@/components/VideoCard";
import { featured, latest, sideList } from "@/lib/data";

export const metadata: Metadata = { title: "Live TV" };

export default function LivePage() {
  return (
    <>
      <section className="hero hero-player">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="live-label">EN DIRECT</p>
            <h1 className="h-program">WARI</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            </p>
          </div>
          <VideoPlayer image="/img/live-guinee.jpg" alt="Direct OUEST-TV" live />
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2 className="tab-title">À revoir TV</h2>
        </div>
        <Featured main={featured} list={sideList} />
        <VideoGrid videos={latest} />
        <LoadMore />
      </section>
    </>
  );
}
