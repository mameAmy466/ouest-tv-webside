import type { Metadata } from "next";
import VideoPlayer from "@/components/VideoPlayer";
import ReplayBrowser from "./ReplayBrowser";

export const metadata: Metadata = { title: "Replay TV" };

export default function ReplayPage() {
  return (
    <>
      <section className="hero hero-player">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1 className="h-replay">SENEGAL : L&apos; ARMEE ANNONCE UNE OPERATION CONTRE LA REBELLION EN CASAMANCE</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
            </p>
          </div>
          <VideoPlayer image="/img/replay-questions.jpg" alt="Replay OUEST-TV" />
        </div>
      </section>
      <ReplayBrowser />
    </>
  );
}
