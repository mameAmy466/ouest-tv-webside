import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "A propos" };

export default function AboutPage() {
  return (
    <section className="about">
      <div className="container about-grid">
        <div className="about-text">
          <p>
            L&apos;actualité, des magazines et des documentaires, c&apos;est l&apos;Afrique en développement sur{" "}
            <strong>OUEST-TV</strong>, la chaine régionale ouest africaine d&apos;information en continu. Toutes les
            thématiques sont prises en compte, pour réduire le déficit de diffusion de la construction de l&apos;Afrique.
          </p>
          <p>
            Des reportages et des dossiers, sur les chantiers du continent, vous font vivre au rythme d&apos;une autre
            Afrique. Sur OUEST-TV, c&apos;est le temps du développement !<br />
            Abonnez-vous :{" "}
            <a href="https://youtube.com/user/chaineouesttv" target="_blank" rel="noreferrer">
              https://youtube.com/user/chaineouesttv
            </a>
          </p>
        </div>
        <div className="about-visual">
          <span className="ring r1" />
          <span className="ring r2" />
          <span className="ring r3" />
          <Image src="/img/afrique.png" alt="Les magazines OUEST-TV" width={485} height={490} />
        </div>
      </div>
    </section>
  );
}
