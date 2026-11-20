import type { Metadata } from "next";
import { Building, PhoneRing } from "@/components/Icons";
import ContactForm from "./ContactForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h1>Restons en contact</h1>
          <p className="intro">Pour toute question, n&apos;hésitez pas à nous contacter.</p>
          <div className="info-item">
            <Building className="accent" />
            <div>
              <h3>Adresse</h3>
              <p>7 rue Karack KA05 X KA40 -<br />Dakar, Sénégal</p>
            </div>
          </div>
          <div className="info-item">
            <PhoneRing className="accent" />
            <div>
              <h3>Téléphone</h3>
              <p>+221 33 897 98 99</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
