# OUEST-TV — site web (maquette intégrée)

Intégration Next.js (App Router + TypeScript) des maquettes OUEST-TV.
**Données fictives, uniquement pour tester le visuel** : aucun flux vidéo réel, aucun envoi de formulaire.

## Pages
| Route | Contenu |
|---|---|
| `/` | Accueil : hero + abonnement, « A la Une », Actualité africaine, Questions A, Charger plus |
| `/live-tv` | Lecteur « En direct » (visuel) + vidéos à revoir |
| `/replay-tv` | Lecteur replay + onglets de catégories défilants + vidéos à revoir |
| `/a-propos` | Présentation de la chaîne |
| `/contact` | Coordonnées + formulaire (captcha visuel) |

## Lancer
```bash
npm install
npm run dev
```
Puis ouvrir http://localhost:3000

## Structure
- `app/` — pages et `globals.css` (tous les styles, responsive inclus)
- `components/` — Header, Footer, VideoPlayer, Featured, VideoCard, LoadMore, Icons
- `lib/data.ts` — données fictives (titres, dates, vignettes)
- `public/img/` — images extraites des maquettes (logo, carte, vignettes, badges stores)
