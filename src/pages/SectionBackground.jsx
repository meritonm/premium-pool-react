import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { RiArrowDownDoubleLine } from "react-icons/ri";

import backgroundImageOfPremiumPool from "../img/backgroundPremiumPool.jpg";

const StyledRender = styled.div`
  /* padding: 9.6rem 7rem 9.6rem 7rem; */
`;

/////////////////////////////////
// backgroundImage

const StyledPhotoBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const OverlayGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(6, 6, 6, 0.7), rgba(0, 0, 0, 0.7));
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

/////////////////////////////////
// Text

const StyledText = styled.div`
  position: absolute;

  top: 45%;
  left: 40%;
  color: #ececec;
  transform: translate(-50%, -35%);
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 940px) {
    top: 50%;
  }
  @media (max-width: 641px) {
    top: 45%;
  }
`;

const StyledH1 = styled.h1`
  font-size: 6.8rem;

  display: inline-block;
  margin-right: -50%;
  transform: translateX(0%);

  @media (max-width: 1344px) {
    font-size: 6.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 5rem;
  }

  @media (max-width: 940px) {
    font-size: 4.2rem;
  }

  @media (max-width: 809px) {
    font-size: 3.8rem;
  }

  @media (max-width: 721px) {
    font-size: 3.4rem;
    line-height: 1.6;
  }

  @media (max-width: 641px) {
    font-size: 2.8rem;
  }

  @media (max-width: 507px) {
    font-size: 2.4rem;
  }

  @media (max-width: 485px) {
    font-size: 2.2rem;
  }
  @media (max-width: 425px) {
    font-size: 2rem;
  }

  @media (max-width: 390px) {
    font-size: 1.8rem;
  }
`;

const StyledH3 = styled.h1`
  display: inline-block;
  margin-right: -50%;

  padding-bottom: 5.2rem;
  font-size: 4.8rem;
  font-weight: 500;
  @media (max-width: 1344px) {
    font-size: 5rem;
  }

  @media (max-width: 1200px) {
    font-size: 3.8rem;
  }

  @media (max-width: 940px) {
    font-size: 3rem;
  }

  @media (max-width: 809px) {
    font-size: 2.6rem;
  }

  @media (max-width: 721px) {
    font-size: 2.2rem;
  }

  @media (max-width: 641px) {
    font-size: 2rem;
  }

  @media (max-width: 507px) {
    font-size: 1.8rem;
    padding-bottom: 8.2rem;
  }

  @media (max-width: 485px) {
    font-size: 1.6rem;
  }
`;

const StyledParagraph = styled.p`
  display: inline-block;
  margin-right: -20%;

  font-weight: 500;
  font-size: 3.2rem;
  padding-bottom: 7.4rem;
  @media (max-width: 1200px) {
    font-size: 2.4rem;
    letter-spacing: 1px;
  }
  @media (max-width: 1105px) {
    font-size: 2.2rem;
  }
  @media (max-width: 900px) {
    font-size: 1.8rem;
    line-height: 1.5;
    padding-bottom: 4.2rem;
  }
  @media (max-width: 597px) {
    font-size: 1.6rem;
  }

  @media (max-width: 485px) {
    font-size: 1.4rem;
  }
`;

/////////////////////////////////
// Button
const StyledButtonContainer = styled.div`
  /* display: inline-block; */

  display: flex;

  gap: 7rem;

  @media (max-width: 809px) {
    padding-top: 1.6rem;
    gap: 6rem;
  }
  @media (max-width: 721px) {
    gap: 2.4rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 485px) {
    gap: 1.4rem;
    padding-top: 5rem;
    /* display: inline-block; */
    margin-right: -40%;
  }

  @media (max-width: 425px) {
    gap: 1rem;
  }
`;

const StyledButton = styled.button`
  color: inherit;
  display: flex;

  margin-top: 1.8rem;
  text-transform: uppercase;
  padding: 1.6rem 3.2rem;
  font-family: inherit;
  font-size: 2rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  color: #ececec;
  background-color: #23a9d1;
  border-radius: 50px;

  &:hover,
  :active {
    background-color: #1e8dae;
    transition: all 1s;
    transform: scale(1.1);
  }

  @media (max-width: 1200px) {
    font-size: 1.9rem;
  }
  @media (max-width: 1105px) {
    font-size: 1.8rem;
  }
  @media (max-width: 850px) {
    font-size: 1.7rem;
  }

  @media (max-width: 721px) {
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
  }
  @media (max-width: 597px) {
    font-size: 1.3rem;
    padding: 1rem 2rem;
  }
  @media (max-width: 485px) {
    /* font-size: 1.2rem; */
    /* padding: 0.8rem 1.8rem; */
    /* width: 16rem; */
    /* text-align: center; */
    justify-content: center;
  }
  @media (max-width: 425px) {
    /* font-size: 1.1rem; */
  }
  @media (max-width: 390px) {
    /* font-size: 1rem; */
    /* padding: 0.6rem 1.6rem; */
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
  }

  @media (max-width: 295px) {
    font-size: 1.1rem;
    padding: 0.6rem 1.4rem;
  }

  &:last-child {
    background-color: #2eb3dc;
    color: #ececec;

    &:hover {
      background-color: #219bc0;
      transform: scale(1.1);
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;
const ScrollDownButton = styled.button`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  color: #ececec;

  &:hover {
    color: #23a9d1;
    transition: all 1s;
  }
`;

function SectionBackground() {
  const navigate = useNavigate();
  const handleScrollDown = () => {
    const nextSection = document.getElementById("next-section");
    const nextSectionPosition = nextSection.offsetTop;

    window.scrollTo({
      top: nextSectionPosition,
      behavior: "smooth",
    });
  };

  return (
    <StyledRender>
      <StyledPhotoBackground>
        <OverlayGradient />
        <PhotoImage
          src={backgroundImageOfPremiumPool}
          alt="Background"
          loading="lazy"
        />
        <StyledText>
          <StyledH1>IHR POOL, UNSERE LEIDENSCHAFT</StyledH1>
          <StyledH3>Wir beherrschen die kunst des Pools</StyledH3>
          <StyledParagraph>
            Tauchen Sie ein in eine Welt, in der Innovation auf Entspannung
            trifft und Ihr Traumpool Wirklichkeit wird
          </StyledParagraph>
          <StyledButtonContainer>
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                navigate("/kontakt");
              }}
            >
              Termin Buchen
            </StyledButton>
            <StyledButton
              onClick={(e) => {
                e.preventDefault();
                navigate("/service");
              }}
            >
              LERNE MEHR
            </StyledButton>
          </StyledButtonContainer>
        </StyledText>
        <ScrollDownButton onClick={handleScrollDown}>
          <RiArrowDownDoubleLine />
        </ScrollDownButton>
      </StyledPhotoBackground>
    </StyledRender>
  );
}

export default SectionBackground;
