// Données fictives — uniquement pour tester le rendu visuel.

export type Video = {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
};

const T = {
  aziz: "QUESTIONS A DR ABDOUL AZIZ KASSE DU 06 OCTOBRE 2021",
  senegal: "SENEGAL : L' ARMEE ANNONCE UNE OPERATION CONTRE LA REBELLION EN CASAMANCE",
  seydi: "QUESTION A SEYDI GASSAMA DU 21 SEPTEMBRE 2021",
  kenya: "KENYA - TRANSPORT DU 13 OCTOBRE 2021",
  guinee: "GUINEE : LA JUNTE MET A LA RETRAITE PLUS DE 40 GENERAUX",
  somalie: "SOMALIE - TRANSPORT DU 12 OCTOBRE 2021",
};

export const featured: Video = {
  id: "somalie",
  title: T.somalie,
  image: "/img/somalie.jpg",
  date: "Jeudi 02 Fev 2023 | 15:22:32",
  category: "ACTUALITE AFRICAINE",
};

export const sideList: Video[] = [
  { id: "s1", title: T.senegal, image: "/img/thumb2.jpg", date: "Jeudi 02 Fev 2023 | 15:22:32", category: "ACTUALITE AFRICAINE" },
  { id: "s2", title: T.guinee, image: "/img/thumb3.jpg", date: "Jeudi 02 Fev 2023 | 15:22:32", category: "ACTUALITE AFRICAINE" },
  { id: "s3", title: T.aziz, image: "/img/thumb1.jpg", date: "Jeudi 02 Fev 2023 | 15:22:32", category: "QUESTIONS A" },
  { id: "s4", title: T.kenya, image: "/img/thumb4.jpg", date: "Jeudi 02 Fev 2023 | 15:22:32", category: "ACTUALITE AFRICAINE" },
];

export const latest: Video[] = [
  { id: "l1", title: T.aziz, image: "/img/thumb1.jpg", date: "26 juin 2025 - 19:03", category: "QUESTIONS A" },
  { id: "l2", title: T.senegal, image: "/img/thumb2.jpg", date: "26 juin 2025 - 19:03", category: "ACTUALITE AFRICAINE" },
  { id: "l3", title: T.guinee, image: "/img/thumb3.jpg", date: "26 juin 2025 - 19:03", category: "ACTUALITE AFRICAINE" },
  { id: "l4", title: T.kenya, image: "/img/thumb4.jpg", date: "26 juin 2025 - 19:03", category: "TOURNÉE AFRICAINE" },
];

export const actualite: Video[] = [
  { id: "a1", title: T.seydi, image: "/img/thumb5.jpg", date: "26 juin 2025 - 19:03", category: "ACTUALITE AFRICAINE" },
  { id: "a2", title: T.kenya, image: "/img/thumb6.jpg", date: "26 juin 2025 - 19:03", category: "ACTUALITE AFRICAINE" },
  { id: "a3", title: T.aziz, image: "/img/thumb7.jpg", date: "26 juin 2025 - 19:03", category: "ACTUALITE AFRICAINE" },
  { id: "a4", title: T.seydi, image: "/img/thumb8.jpg", date: "26 juin 2025 - 19:03", category: "ACTUALITE AFRICAINE" },
];

export const questions: Video[] = [
  { id: "q1", title: T.aziz, image: "/img/thumb9.jpg", date: "26 juin 2025 - 19:03", category: "QUESTIONS A" },
  { id: "q2", title: T.seydi, image: "/img/thumb10.jpg", date: "26 juin 2025 - 19:03", category: "QUESTIONS A" },
  { id: "q3", title: T.seydi, image: "/img/thumb11.jpg", date: "26 juin 2025 - 19:03", category: "QUESTIONS A" },
  { id: "q4", title: T.kenya, image: "/img/thumb12.jpg", date: "26 juin 2025 - 19:03", category: "QUESTIONS A" },
];

export const replayCategories = [
  "ACTUALITE AFRICAINE",
  "QUESTIONS A",
  "FORUM",
  "TOURNÉE AFRICAINE",
  "INTÉGRATION AFRICAINE",
  "UEMOA",
  "WARI",
  "GROS PLAN",
];

/** Pool utilisé pour simuler le bouton « Charger plus ». */
export const morePool: Video[] = [...actualite, ...questions, ...latest];
