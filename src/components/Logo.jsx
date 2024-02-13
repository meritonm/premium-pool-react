import styled from "styled-components";

function Logo() {
  const StyledLogo = styled.img`
    width: 200px;
    height: auto;
  `;

  return (
    <StyledLogo src="../img/PremiumPoolLogo.png" alt="Premium Pool Logo" />
  );
}

export default Logo;
