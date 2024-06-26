import React from "react";
import styled, { keyframes } from "styled-components";
import PageNav from "../components/PageNav";
import imageForWartungPflege from "../img/050836a9766b9e58b5a171cd47453f5b.jpg";
import imageNeubau from "../img/e9399a760b6bef825fa9b73fc976ae6b.jpg";
import imagePoolrekonstruktion from "../img/4a03f28484d9094f697f4d6b59469f6c.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledSection = styled.section`
  padding-top: 12.2rem;
  padding-bottom: 9.2rem;
  padding-left: 9.2rem;
  padding-right: 9.2rem;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 1200px) {
    padding-top: 11.2rem;
    padding-left: 7.2rem;
    padding-right: 7.2rem;
  }

  @media (max-width: 944px) {
    padding-bottom: 7.2rem;
    padding-left: 6.2rem;
    padding-right: 6.2rem;
  }

  @media (max-width: 704px) {
    padding-bottom: 5.2rem;
    padding-left: 4.2rem;
    padding-right: 4.2rem;
  }

  @media (max-width: 624px) {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  animation: ${fadeIn} 1s ease;
  gap: 5rem;
  border-radius: 10px;

  @media (max-width: 1228px) {
    flex-wrap: wrap;
  }
`;

const StyledCard = styled.div`
  max-width: 324px;
  background-color: #b9e6f3;
  display: flex;
  border-radius: 18px;
  padding: 0rem;
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.316);
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-1.2rem);
    transition: all 0.5s;
  }
`;

const StyledImage = styled.img`
  display: flex;
  width: 100%;
  padding: 16px;
  height: 20rem;
  object-fit: cover;
`;

const StyledText = styled.p`
  color: #333;
  padding: 1.5rem;
  font-size: 1.4rem;
  height: 22rem;
`;

const StyledTitel = styled.h6`
  margin: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
`;

const StyledButton = styled.button`
  color: inherit;
  margin-top: 3.2rem;

  text-transform: uppercase;
  padding: 1.2rem 2.2rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  color: #ececec;
  background-color: #1e93b7;
  border-radius: 50px;
  margin-right: 2rem;

  &:hover,
  :active {
    background-color: #197490;
    transition: all 1s;
  }

  @media (max-width: 350px) {
    margin-top: 6rem;
  }
`;

const StyledButtonMore = styled.button`
  color: inherit;
  margin-top: 3.2rem;

  text-transform: uppercase;
  padding: 1.2rem 2.2rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  margin-bottom: 2rem;
  cursor: pointer;
  color: #ececec;
  background-color: #39a1c0;
  border-radius: 50px;

  &:hover,
  :active {
    background-color: #197490;
    transition: all 1s;
  }

  @media (max-width: 350px) {
    margin-top: 6rem;
  }
`;

const SapceButtonSpan = styled.span``;

function Service() {
  const navigate = useNavigate();

  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledCardContainer>
          <StyledCard>
            <StyledImage
              src={imageForWartungPflege}
              alt="Wartung und Pflege Schwimmbad"
              loading="lazy"
            />
            <StyledTitel>Wartung und Pflege</StyledTitel>
            <StyledText>
              Wir bieten einen umfassenden Service zur Wartung und Pflege von
              Schwimmbädern an, einschliesslich regelmässiger Reinigung,
              Überprüfung der Wasserchemie und notwendiger Reparaturen. Wir
              achten auf die Sicherheit und optimale Funktionsweise der
              Schwimmbäder.
            </StyledText>
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                navigate("/kontakt");
              }}
            >
              Termin Buchen
            </StyledButton>
          </StyledCard>

          <StyledCard>
            <StyledImage
              src={imageNeubau}
              alt="Neubau und Umbau"
              loading="lazy"
            />
            <StyledTitel>Neubau und Umbau</StyledTitel>
            <StyledText>
              Ob Sie von Grund auf einen neuen Pool planen oder Ihren
              bestehenden Pool in eine Oase der Entspannung und Erholung
              verwandeln möchten, wir stehen Ihnen mit Fachkenntnis und
              Kreativität zur Seite. Von der Gestaltung bis zur Fertigstellung
              sorgen wir dafür, dass Ihr Pool Ihren individuellen Bedürfnissen
              und Wünschen entspricht.
            </StyledText>
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                navigate("/kontakt");
              }}
            >
              Termin Buchen
            </StyledButton>
          </StyledCard>

          <StyledCard>
            <StyledImage
              src={imagePoolrekonstruktion}
              alt="Poolrekonstruktion"
              loading="lazy"
            />
            <StyledTitel>Abdeckung</StyledTitel>
            <StyledText>
              Die perfekte Kombination aus Schutz und Stil für Ihren Pool. Die
              Abdeckungen bieten nicht nur eine effektive Barriere gegen Schmutz
              und Blätter, sondern sind auch ästhetisch ansprechend. Geniessen
              Sie sauberes Wasser und minimieren Sie den Wartungsaufwand,
              während Sie gleichzeitig die Sicherheit erhöhen. Finden Sie mit
              uns die ideale Lösung für Ihren Pool.
            </StyledText>
            <SapceButtonSpan>
              <StyledButton
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/kontakt");
                }}
              >
                Termin Buchen
              </StyledButton>
              <StyledButtonMore
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/abdeckungen");
                }}
              >
                LERNE MEHR
              </StyledButtonMore>
            </SapceButtonSpan>
          </StyledCard>
        </StyledCardContainer>
      </StyledSection>
      <Footer />
    </>
  );
}

export default Service;
