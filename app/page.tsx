import Image from "next/image";
import Featured from "@/components/Featured";
import LoadMore from "@/components/LoadMore";
import { VideoGrid } from "@/components/VideoCard";
import { Arrow } from "@/components/Icons";
import { actualite, featured, latest, questions, sideList } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <h1>OUEST-TV 1ère CHAÎNE INFO D&apos;AFRIQUE DE L&apos;OUEST.</h1>
            <p>
              Disponible sur le bouquet CANAL+AFRIQUE : canal 179 ;<br />
              sur CANAL + sur le bouquet ORANGE TV : canal 213 ;<br />
              sur le bouquet ORANGE TV : canal 51
            </p>
            <form className="subscribe" action="#">
              <input type="email" placeholder="Votre email ici" aria-label="Votre email" />
              <button type="submit">S&apos;abonner</button>
            </form>
          </div>
          <div className="hero-visual">
            <Image src="/img/afrique.png" alt="Programmes OUEST-TV sur la carte de l'Afrique" width={485} height={490} priority />
            <span className="hero-shadow" />
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2 className="tab-title">A la Une</h2>
          <a href="#" className="btn-more">Voir plus <Arrow size={14} /></a>
        </div>
        <Featured main={featured} list={sideList} />
        <VideoGrid videos={latest} />
      </section>

      <section className="section container">
        <div className="section-head plain">
          <h2>ACTUALITE AFRICAINE</h2>
          <a href="#" className="link-more">Voir plus</a>
        </div>
        <VideoGrid videos={actualite} />
      </section>

      <section className="section container">
        <div className="section-head plain">
          <h2>QUESTIONS A</h2>
          <a href="#" className="link-more">Voir plus</a>
        </div>
        <VideoGrid videos={questions} />
        <LoadMore />
      </section>
    </>
  );
}
