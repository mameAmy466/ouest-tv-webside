import Image from "next/image";
import Link from "next/link";
import { FacebookSquare, GooglePlus, Instagram, Linkedin, Phone, Pin, Pinterest, Rss, Twitter, Youtube } from "./Icons";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <Image src="/img/logo.png" alt="OUEST-TV" width={132} height={64} />
          </div>

          <div className="footer-app">
            <h3>
              Telecharger notre appli mobile Ouest TV <span className="accent">L&apos;Officiel</span>
            </h3>
            <div className="stores">
              <a href="#" aria-label="Disponible sur Google Play">
                <Image src="/img/google-play.png" alt="Disponible sur Google Play" width={204} height={62} />
              </a>
              <a href="#" aria-label="Télécharger dans l'App Store">
                <Image src="/img/app-store.png" alt="Télécharger dans l'App Store" width={203} height={61} />
              </a>
            </div>
          </div>

          <div className="footer-contact">
            <p className="row"><Pin className="accent" /> <span>Bourguiba rue 12</span></p>
            <p className="row"><Phone className="accent" /> <span>(+221) 33 841 13 13<br />(+221) 31 822 34 90</span></p>
            <div className="follow">
              <span>Suivez – nous</span>
              <a href="#" aria-label="Facebook"><FacebookSquare /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="YouTube"><Youtube /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Google+"><GooglePlus /></a>
              <a href="#" aria-label="Pinterest"><Pinterest /></a>
              <a href="#" aria-label="RSS"><Rss /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <nav>
            <Link href="/live-tv">TÉLÉVISION</Link>
            <Link href="/replay-tv">ARCHIVES</Link>
            <Link href="/contact">ESPACE PUB</Link>
            <Link href="/replay-tv">PROGRAMMES</Link>
          </nav>
          <p className="copyright">Copyright © 2024 • aCAN Group.</p>
        </div>
      </div>
    </footer>
  );
}
