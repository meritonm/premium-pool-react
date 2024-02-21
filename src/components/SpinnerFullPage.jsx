import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const StyledSpinnerFullPage = styled.div`
  margin: 2.5rem;
  height: calc(100vh - 5rem);
  background-color: #2d3439;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SpinnerFullPage() {
  return (
    <StyledSpinnerFullPage>
      <Spinner />
    </StyledSpinnerFullPage>
  );
}

export default SpinnerFullPage;
