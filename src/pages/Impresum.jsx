import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const StyledSection = styled.section`
  max-width: 140rem;
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

const StyledSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
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

function Impresum() {
  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledHeader>Kontakt-Adresse</StyledHeader>
        <StyledParagraph>
          <StyledSpan>Musliu Poolbau</StyledSpan>
          <br />
          Gilamstrasse 9A
          <br />
          4665 Oftringen
          <br />
          Schweiz
          <br />
          <StyledNavLink to="mailto:info@premiumpool.ch">
            info@premiumpool.ch
          </StyledNavLink>
        </StyledParagraph>
        <StyledParagraph>
          Vertretungsberechtigte Person
          <StyledSpan> Arion Musliu</StyledSpan>, Geschäftsinhaber
        </StyledParagraph>
        <StyledParagraph>
          Handelsregister-Eintrag:
          <StyledSpan> CHE-143.160.121</StyledSpan>
        </StyledParagraph>

        <StyledParagraph>
          <StyledSpan>Haftungsausschluss</StyledSpan>
          <br />
          Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
          Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
          Vollständigkeit der Informationen.
        </StyledParagraph>

        <StyledParagraph>
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder
          immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw.
          Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der
          Verbindung oder durch technische Störungen entstanden sind, werden
          ausgeschlossen.
        </StyledParagraph>

        <StyledParagraph>
          Alle Angebote sind unverbindlich. Der Autor behält es sich
          ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne
          besondere Ankündigung zu verändern, zu ergänzen, zu löschen oder die
          Veröffentlichung zeitweise oder endgültig einzustellen.
        </StyledParagraph>

        <StyledParagraph>
          <StyledSpan>Haftungsausschluss für Links</StyledSpan>
          <br />
          Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
          Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
          Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
          erfolgen auf eigene Gefahr des jeweiligen Nutzers.
        </StyledParagraph>

        <StyledParagraph>
          <StyledSpan>Urheberrechte</StyledSpan>
          <br />
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
          anderen Dateien auf dieser Website, gehören ausschliesslich der Firma
          Musliu Poolbau oder den speziell genannten Rechteinhabern. Für die
          Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des
          Urheberrechtsträgers im Voraus einzuholen.
        </StyledParagraph>
      </StyledSection>
      <Footer />
    </>
  );
}

export default Impresum;
