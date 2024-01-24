import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

import styled from "styled-components";

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 7.2rem;
  font-size: 2.4rem;
`;

const PoolDrop = styled.span`
  display: inline-block;
  font-size: 4rem;
  margin: 0 0.4rem;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-1rem);
    }
    60% {
      transform: translateY(-0.5rem);
    }
  }
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
  padding: 2rem;

  & h1 {
    margin-bottom: 3.2rem;
    padding-top: 5rem;
    font-size: 4.2rem;

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

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <StyledPageNotFound>
      <Box>
        <h1>
          Ups! Sie haben eine trockene Stelle gefunden
          <PoolDrop>💧</PoolDrop>
        </h1>
        <p>
          Die Seite, die Sie suchen, ist in den digitalen Pool verdampft.
          Tauchen Sie zurück in unsere Website und machen Sie einen Spritzer!
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
    </StyledPageNotFound>
  );
}

export default PageNotFound;
