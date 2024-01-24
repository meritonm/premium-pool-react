import styled, { keyframes } from "styled-components";

import aboutUsImage from "../img/AboutUs1.png";

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
  padding-top: 14.2rem;
  padding-bottom: 9.2rem;
  padding-left: 12.2rem;
  padding-right: 12.2rem;
  animation: ${fadeIn} 1s ease;

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

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 7rem;
  font-size: 1.8rem;
  line-height: 1.2;
  @media (max-width: 944px) {
    grid-template-columns: 1fr;
    font-size: 1.6rem;
  }

  @media (max-width: 700px) {
    gap: 4rem;
  }
`;

const StyledBox = styled.div`
  font-size: 1.8rem;

  padding-top: 1rem;
  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }

  @media (max-width: 944px) {
  }

  @media (max-width: 700px) {
    font-size: 1.4rem;
  }

  @media (max-width: 624px) {
  }
`;

const StyledDoxImg = styled.div`
  background-image: url(${aboutUsImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 24rem;
  object-fit: cover;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 944px) {
    height: 28rem;
  }

  @media (max-width: 700px) {
    height: 24rem;
    width: 70%;
  }
`;

const StyledPP = styled.span`
  font-weight: 600;
`;

function AboutUs() {
  return (
    <StyledSection id="next-section">
      <StyledDiv>
        <StyledBox>
          Willkommen bei <StyledPP>Premium Pool,</StyledPP> wo die Errichtung
          und Pflege von Schwimmbädern unsere Leidenschaft ist! Mit einem
          professionellen Team und langjähriger Erfahrung im Bereich Bau,
          Wartung und Service von Schwimmbädern sind wir hier, um Ihnen eine
          außergewöhnliche Erfahrung zu bieten. Jedes Poolprojekt ist für uns
          eine einzigartige Herausforderung, und wir arbeiten mit Hingabe daran,
          sicherzustellen, dass Ihre Pools eine wahre Oase der Frische und
          Schönheit sind. Entdecken Sie unsere Angebote und werden Sie Teil der
          Gemeinschaft von Premium Pool, wo Qualität in jedem Detail zum
          Ausdruck kommt. Vielen Dank, dass Sie sich für Premium Pool
          entschieden haben, wo Pools zu Kunstwerken werden!
        </StyledBox>

        <StyledDoxImg loading="lazy" />
      </StyledDiv>
    </StyledSection>
  );
}

export default AboutUs;
