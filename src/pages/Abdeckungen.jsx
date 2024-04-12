import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import PremiumPoolLogo from "../img/PremiumPoolLogo.png";

import LaubundWinternetz from "../img/PhotoLaubUndWinternetze.jpg";

import RollschutzohneWasserberührung from "../img/RollschutzohneWasserberührung.jpg";

import ÜberflutSystem from "../img/ÜberflutSystem.jpg";

import RolladenLlamellenabdeckung from "../img/RolladenLlamellenabdeckung.jpeg";

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

const StyledHeader = styled.h2`
  text-align: center;
  margin-bottom: 2.2rem;
  margin-top: 4.8rem;
  font-size: 1.6rem;
  font-weight: 700;

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

const StyledParagraphCard = styled.p`
  font-size: 1.4rem;
  padding-top: 1.2rem;

  @media (max-width: 1133px) {
    height: 33rem;
  }
`;

const StyledSpanBold = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
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

const StyledFooterLogo = styled.a`
  display: block;
  align-self: flex-start;
  margin-bottom: -2.2rem;
`;

const StyledFooterLogoImg = styled.img`
  width: 14rem;
  height: 14rem;

  @media (max-width: 824px) {
    width: 12rem;
    height: 12rem;
  }

  @media (max-width: 650px) {
    width: 10rem;
    height: 10rem;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 10px;

  @media (max-width: 1133px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
    justify-content: center;
  }
`;

const StyledProductGrid = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
  gap: 4rem;
  margin-top: 4rem;
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.316);
  background-color: #b9e6f3;
  border-radius: 24px;
  flex-direction: row;
  margin-bottom: 2rem;
  height: 32rem;
  max-width: 130rem;

  @media (max-width: 1133px) {
    display: flex;
    gap: 0;

    max-width: 38rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    /* width: auto;
    height: auto; */

    width: 74rem;
    height: 66rem;
  }
`;

const StyledProductInfo = styled.div`
  flex: 1;
  margin-bottom: 2rem;
`;

const StyledProductPhoto = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto;
  max-width: 36rem;

  height: auto;

  @media (max-width: 1133px) {
    height: 24rem;
  }
`;

const StyledCenteredTitleContainer = styled.span`
  display: flex;
  padding-bottom: 1.6rem;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
`;

const StyledParagraphSpace = styled.div`
  padding-top: 6.2rem;
  padding-bottom: 3rem;
`;

function Abdeckungen() {
  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledHeader>Ihr Schutz für den Pool das ganze Jahr über</StyledHeader>

        <StyledParagraph>
          Willkommen bei <StyledSpanBold>Premium Pool,</StyledSpanBold> Ihrem
          Experten für hochwertige Pool abdeckungen.
        </StyledParagraph>
        <StyledParagraph>
          Entdecken Sie unsere umfassende Auswahl an Pool abdeckungen, die
          entwickelt wurden, um Ihren Pool das ganze Jahr über zu schützen und
          gleichzeitig Stil und Funktionalität zu bieten.
        </StyledParagraph>
        <br />
        <StyledCardContainer>
          <StyledProductGrid>
            <StyledProductInfo>
              <StyledCenteredTitleContainer>
                Rolladen - Llamellenabdeckung
              </StyledCenteredTitleContainer>
              <StyledParagraphCard>
                Unsere Lamellenabdeckungen aus Polycarbonat oder PVC bieten
                nicht nur Schutz, sondern auch Bequemlichkeit. Mit der
                Möglichkeit, Ihr Becken vollautomatisch zu öffnen und zu
                schließen, wird das Poolmanagement erleichtert. Das zeitlose und
                edle Design der Rollmatic Polycarbonat- oder PVC-Abdeckung
                rundet das Gesamtbild perfekt ab. Gönnen Sie sich das
                i-Tüpfelchen für Ihr Badejuwel!
              </StyledParagraphCard>
            </StyledProductInfo>
            <StyledProductPhoto
              alt="Rolladen - Llamellenabdeckung"
              src={RolladenLlamellenabdeckung}
              loading="lazy"
            />
          </StyledProductGrid>

          <StyledProductGrid>
            <StyledProductInfo>
              <StyledCenteredTitleContainer>
                Überflur System
              </StyledCenteredTitleContainer>
              <StyledParagraphCard>
                Unsere Überflur-Aufrollvorrichtungen sind qualitativ hochwertig,
                langlebig und für eine einfache Montage optimiert. Von manuellen
                Systemen mit Handkurbelbetrieb bis hin zu vollautomatischen
                Aufwickelvorrichtungen mit Fernbedienung bieten wir Lösungen für
                jeden Anspruch.
              </StyledParagraphCard>
            </StyledProductInfo>
            <StyledProductPhoto
              alt="Überflut System"
              src={ÜberflutSystem}
              loading="lazy"
            />
          </StyledProductGrid>

          <StyledProductGrid>
            <StyledProductInfo>
              <StyledCenteredTitleContainer>
                Rollschutz
              </StyledCenteredTitleContainer>
              <StyledParagraphCard>
                Unsere Rollschutzabdeckung ohne Wasserberührung bietet nicht nur
                Sicherheit, sondern auch den bestmöglichen Schutz für Ihren
                Pool. Sie ist ideal geeignet, um selbst unregelmässige
                Beckenformen passgenau abzudecken. Dank der massgeschneiderten
                Anpassung an die Geometrie Ihres Beckens bietet der Rollschutz
                optimale Voraussetzungen, um Verunreinigungen und die
                Verdunstung des Wassers effektiv zu minimieren. Kontaktieren Sie
                uns noch heute, um mehr über unsere Rollschutzabdeckungen zu
                erfahren und Ihren Pool optimal zu schützen.
              </StyledParagraphCard>
            </StyledProductInfo>
            <StyledProductPhoto
              alt="Rollschutz ohne Wasserberührung"
              src={RollschutzohneWasserberührung}
              loading="lazy"
            />
          </StyledProductGrid>

          <StyledProductGrid>
            <StyledProductInfo>
              <StyledCenteredTitleContainer>
                Laub- und Winternetze
              </StyledCenteredTitleContainer>
              <StyledParagraph>
                Mit unseren hochwertigen Laub- und Winternetzen halten Sie Ihr
                Poolwasser frei von Blättern, Zweigen und anderen
                Verunreinigungen. Unsere Netze bestehen aus UV-beständigem und
                fungizidbeschichtetem PVC-Material, das in Verbindung mit einem
                stabilen und reissfesten Trägergewebe zuverlässigen Schutz
                bietet. So verhindern Sie effektiv, dass Schmutz und kleine
                Tiere ins Wasser gelangen. Zudem wird das Montagesystem optisch
                und funktional perfekt an die Umgebung Ihres Pools angepasst.
                Kontaktieren Sie uns jetzt, um mehr über unsere hochwertigen
                Laub- und Winternetze zu erfahren und Ihren Pool optimal zu
                schützen.
              </StyledParagraph>
            </StyledProductInfo>
            <StyledProductPhoto
              alt="Laub- und Winternetze"
              src={LaubundWinternetz}
              loading="lazy"
            />
          </StyledProductGrid>
        </StyledCardContainer>

        <StyledParagraphSpace>
          <StyledParagraph>
            Besuchen Sie noch heute unsere Website und entdecken Sie, wie unsere
            hochwertigen Pool abdeckungen Ihrem Pool Schutz, Stil und
            Funktionalität verleihen können. Kontaktieren Sie unser freundliches
            Team, um mehr zu erfahren oder eine individuelle Beratung zu
            erhalten.
          </StyledParagraph>
        </StyledParagraphSpace>

        <StyledFooterLogo href="/">
          <StyledFooterLogoImg
            className="logo"
            alt="Premium Pool logo"
            src={PremiumPoolLogo}
            loading="lazy"
          ></StyledFooterLogoImg>
        </StyledFooterLogo>
        <br />
        <StyledParagraph>
          Kontaktinformationen:
          <br />
          <StyledNavLink to="tel:+41795559449">+41 79 555 94 49</StyledNavLink>
          <br />
          <StyledNavLink to="mailto:info@premiumpool.ch">
            info@premiumpool.ch
          </StyledNavLink>
          <br />
          Gilamstrasse 9A
          <br />
          4665 Oftringen
          <br />
          Mo - Fr 08:00 Uhr - 17:00 Uhr
        </StyledParagraph>
      </StyledSection>
      <Footer />
    </>
  );
}

export default Abdeckungen;
