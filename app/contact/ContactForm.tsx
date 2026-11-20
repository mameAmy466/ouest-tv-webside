"use client";

import { useState } from "react";
import { Arrow, ChevronDown, Refresh, Volume } from "@/components/Icons";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
const newCode = () => Array.from({ length: 9 }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join("");

export default function ContactForm() {
  const [code, setCode] = useState("LH76G54hU");
  const [sent, setSent] = useState(false);

  return (
    <div className="form-shell">
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <h2>Veuillez remplir les champs ci-dessous</h2>

        <div className="grid-2">
          <label>Nom*<input required placeholder="Votre nom" /></label>
          <label>Prénom*<input required placeholder="Votre prénom" /></label>
          <label>Adresse e-mail*<input required type="email" placeholder="Votre e-mail" /></label>
          <label>Téléphone<input type="tel" placeholder="Votre téléphone" /></label>
        </div>

        <label>
          Objet*
          <span className="select">
            <select required defaultValue="">
              <option value="" disabled>Objet</option>
              <option>Information générale</option>
              <option>Espace publicitaire</option>
              <option>Programmes</option>
              <option>Partenariat</option>
            </select>
            <ChevronDown />
          </span>
        </label>

        <label>Message*<textarea required rows={5} placeholder="Quel est votre message ?" /></label>

        <p className="note">* Les champs marqués d&apos;un astérisque sont obligatoires.</p>

        <label className="check">
          <input type="checkbox" required />
          <span>
            En fournissant ces informations, vous acceptez que nous puissions traiter vos données personnelles
            conformément à notre politique de confidentialité.*
          </span>
        </label>

        <div className="captcha-row">
          <div className="captcha">
            <span className="captcha-code">{code}</span>
            <div className="captcha-actions">
              <button type="button" aria-label="Écouter le code"><Volume size={20} /></button>
              <button type="button" aria-label="Nouveau code" onClick={() => setCode(newCode())}><Refresh /></button>
            </div>
          </div>
          <input className="captcha-input" placeholder="Entrez le code ici" aria-label="Code de sécurité" />
        </div>

        <button type="submit" className="btn-send">Envoyer <Arrow /></button>
        {sent && <p className="sent">Merci ! Votre message a bien été envoyé (démo — aucun envoi réel).</p>}
      </form>
    </div>
  );
}
