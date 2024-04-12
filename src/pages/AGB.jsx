import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const StyledSection = styled.section`
  padding: 9.6rem 7rem;

  @media (max-width: 1200px) {
    padding-top: 9.2rem;
    padding-bottom: 9.2rem;
    padding-left: 9.2rem;
    padding-right: 9.2rem;
  }

  @media (max-width: 944px) {
    padding-top: 7.2rem;
    padding-bottom: 7.2rem;
    padding-left: 6.2rem;
    padding-right: 6.2rem;
  }

  @media (max-width: 704px) {
    padding-top: 5.2rem;
    padding-bottom: 5.2rem;
    padding-left: 4.2rem;
    padding-right: 4.2rem;
  }

  @media (max-width: 624px) {
    padding-top: 4.2rem;
    padding-bottom: 4.2rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;

const StyledHeader = styled.h6`
  margin-bottom: 2.2rem;
  margin-top: 4.8rem;
  font-size: 1.6rem;
  padding-left: 7rem;
  font-weight: 600;

  @media (max-width: 625px) {
    padding-top: 3.2rem;
    text-align: center;
    padding-left: 0;
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  padding-top: 1.2rem;

  ul {
    padding-left: 2rem;
  }

  li {
    line-height: 1.6;
    padding-top: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  color: blue;
  text-decoration: underline;

  &:hover,
  &:active {
    color: #5580bf;
    transition: all 0.3s;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

function AGB() {
  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledHeader>Allgemeine Geschäftsbedingungen</StyledHeader>
        <StyledParagraph>
          Allgemeine Geschäftsbedingungen (AGB) der Musliu Poolbau für das
          Online Booking Tool, sowie schriftliche und telefonische
          Terminvereinbarungen.
        </StyledParagraph>
        <StyledParagraph>
          Geltungsbereich Für alle Buchungen für Termine durch Verbraucher
          gelten die nachfolgenden AGB. Verbraucher ist jede natürliche
          Person/Kunde, die eine Buchung für eine Dienstleistung bei Musliu
          Poolbau über Unser Online-Booking-System, schriftlich per E-Mail, per
          Whatsapp oder telefonisch abschliesst.
        </StyledParagraph>
        <StyledParagraph>
          Vertragspartner, Vertragsschluss Der Kaufvertrag einer Dienstleistung
          kommt zustande mit Musliu Poolbau. Mit der Buchung einer
          Dienstleistung schliesst der Verbraucher ein verbindliches Angebot zum
          Vertragsschluss über diese Dienstleistung ab. Die Dienstleistung kann
          zunächst unverbindlich in den Warenkorb abgelegt werden und die
          Eingaben vor Absenden der verbindlichen Buchung jederzeit korrigiert
          werden. Hierzu nutzt der Verbraucher die im Bestellablauf vorgesehenen
          und erläuterten Korrekturhilfen. Die Buchung kommt zustande, durch das
          Anklicken des Bestellbuttons das Angebot über die Dienstleistung
          anzunehmen, sowie die Bestätigung der Annahme der AGB von Musliu
          Poolbau sowie der Annahme der Stornierungsbedingungen von Musliu
          Poolbau.
        </StyledParagraph>
        <StyledParagraph>
          Vertragssprache, Vertragstextspeicherung Die für den Kaufvertrag zur
          Verfügung stehende Sprache ist Deutsch. Die online getätigte Buchung
          wird gespeichert und der Verbraucher erhält eine Email als
          Buchungsbestätigung. Absagen unter 24h werden mit 50% des
          Dienstleistungspreises verrechnet. KEINE ABSAGEN/NICHTZUGANG ZUM POOL
          werden mit 100% des Preises verrechnet. Die Buchungsbestätigung wir
          dem Kunden direkt nach dem telefonischen Erstgespräch per E-Mail
          zugesendet.
        </StyledParagraph>
        <br />
        <StyledParagraph>Bezahlung:</StyledParagraph>
        <StyledParagraph>
          EC & BAR
          <br />
          Bei Uns werden Bar sowie EC-Karte akzeptiert.
          <br />
          <br />
          Keditkarte
          <br />
          Bei uns werden alle gängigen Kredit-Karten akzeptiert.
          <br />
          <br />
          TWINT
          <br />
          Wir akzeptieren TWINT Zahlungen über unseren TWINT QR-Code.
        </StyledParagraph>
        <StyledParagraph>
          Datenschutz <br />
          Die teilnehmende Person erklärt sich einverstanden, dass ihre
          Anmeldeinformationen für interne Zwecke gespeichert werden dürfen.
        </StyledParagraph>
        <StyledParagraph>
          Gerichtsstand
          <br />
          Der Gerichtstand ist Oftringen und es gilt das schweizerische Recht.
        </StyledParagraph>
        <StyledParagraph>
          Kontakt
          <br />
          Sie erreichen uns für Fragen und Beanstandungen zu unseren offiziellen
          Öffnungszeiten unter der Telefonnummer{" "}
          <StyledNavLink to="tel:+41795559449">
            +41 79 555 94 49
          </StyledNavLink>{" "}
          sowie per E-Mail unter{" "}
          <StyledNavLink to="mailto:info@premiumpool.ch">
            info@premiumpool.ch
          </StyledNavLink>{" "}
          <br />
          <br />
          Unsere Öffnungszeiten
          <br />
          <StyledSpan>Mo - Fr 08:00 Uhr - 17:00 Uhr</StyledSpan>
        </StyledParagraph>
        <StyledParagraph>
          Kontaktadresse
          <br />
          Musliu Poolbau
          <br />
          Arion Musliu
          <br />
          Gilamstrasse 9A
          <br />
          4665 Oftringen
          <br />
        </StyledParagraph>
      </StyledSection>
      <Footer />
    </>
  );
}

export default AGB;
