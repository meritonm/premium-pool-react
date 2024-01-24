import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaArrowLeftLong } from "react-icons/fa6";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-2rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const dropAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1rem);
  }
`;

const StyledPageWorking = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.2rem;
  margin-top: 2rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #dff3f5;
  border: 1px solid #f1eeee;
  border-radius: 50px;
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  animation: ${fadeIn} 1s ease;

  & h1 {
    margin-bottom: 3.2rem;
    font-size: 4.2rem;
    line-height: 1.2;
    position: relative;

    @media (max-width: 1200px) {
      font-size: 3.8rem;
    }

    @media (max-width: 944px) {
      font-size: 3.4rem;
    }

    @media (max-width: 704px) {
      font-size: 3rem;
    }

    @media (max-width: 624px) {
      font-size: 2.6rem;
    }
  }

  & p {
    font-size: 2rem;
    margin-bottom: 3.2rem;

    @media (max-width: 944px) {
      font-size: 1.8rem;
    }
  }
`;

const WaterDrop = styled.span`
  padding-left: 2rem;
  display: inline-block;
  font-size: 4rem;
  margin: 0 0.4rem;
  animation: ${dropAnimation} 1s infinite;

  &:nth-child(2) {
    animation-delay: 0.2s;
  }

  &:nth-child(3) {
    animation-delay: 0.4s;
  }

  @media (max-width: 700px) {
    font-size: 1.8rem;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  color: inherit;
  margin-top: 1.8rem;
  text-transform: uppercase;
  padding: 1.2rem 2.2rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  margin-bottom: 2rem;
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
`;

const SpanStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

function StillWorking() {
  const navigate = useNavigate();

  return (
    <>
      <StyledPageWorking>
        <Box>
          <h1>
            Aufregende Dinge brauen sich zusammen!
            <br />
            <WaterDrop>💧</WaterDrop>
            <WaterDrop>💧</WaterDrop>
            <WaterDrop>💧</WaterDrop>
          </h1>
          <p>
            Wir arbeiten hart daran, Ihnen etwas Erstaunliches zu präsentieren.
            Bleiben Sie dran!
          </p>
          <StyledButton
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >
            <SpanStyled>
              <FaArrowLeftLong />
            </SpanStyled>
            Zurück
          </StyledButton>
        </Box>
      </StyledPageWorking>
    </>
  );
}

export default StillWorking;
