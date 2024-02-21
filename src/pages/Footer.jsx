import styled from "styled-components";
import PremiumPoolLogo from "../img/PremiumPoolLogo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const StyledFooter = styled.footer`
  padding-top: 9.2rem;
  padding-bottom: 9.2rem;
  padding-left: 12.2rem;
  padding-right: 12.2rem;
  border-top: 1px solid #add6d4;

  @media (max-width: 1200px) {
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
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  justify-content: center;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 18rem;

  @media (max-width: 1200px) {
    gap: 8rem;
  }

  @media (max-width: 944px) {
    gap: 6rem;
  }

  @media (max-width: 600px) {
    gap: 4rem;
  }

  @media (max-width: 465px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

const StyledDiv = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;

  row-gap: 2rem;
`;

const StyledFooterLogo = styled.a`
  display: block;
  align-self: flex-start;

  margin-bottom: -2.2rem;
`;

const StyledFooterLogoImg = styled.img`
  width: 18rem;
  height: 18rem;

  @media (max-width: 824px) {
    width: 14rem;
    height: 14rem;
  }

  @media (max-width: 650px) {
    width: 12rem;
    height: 12rem;
  }
`;

const StyledDivIcon = styled.div`
  display: flex;
  gap: 2.4rem;
`;

const StyledFooterIcon = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  color: #606060;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #2fb1ab;
  }
`;

const StyledSpanIcon = styled.span`
  transition: all 0.3s;

  color: #242424;

  & svg {
    height: 3.2rem;
    width: 3.2rem;

    @media (max-width: 650px) {
      height: 2.4rem;
      width: 2.4rem;
    }

    @media (max-width: 450px) {
      height: 2.2rem;
      width: 2.2rem;
    }
  }

  &:hover,
  &:active {
    color: #2fb1ab;
  }
`;

const StyledDivAddress = styled.div`
  font-size: 1.4rem;
  color: #606060;
  padding-bottom: 2rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.4rem;

  color: #606060;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #2fb1ab;
  }
`;

const StyledCopyright = styled.p`
  padding-top: 4rem;
  text-align: center;
  font-size: 1.4rem;

  color: #606060;
  margin-top: auto;
`;

const StyledPremiumP = styled.span`
  font-weight: bold;
  color: #444444;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledGrid>
        <StyledDiv>
          <StyledFooterLogo href="/">
            <StyledFooterLogoImg
              className="logo"
              alt="Premium Pool logo"
              src={PremiumPoolLogo}
            ></StyledFooterLogoImg>
          </StyledFooterLogo>
          <StyledDivIcon>
            <StyledFooterIcon
              href="https://wa.me/+41795559449"
              target="_blank"
              rel="noopener noreferrer"
              alt="Premium Pool Whatsaap"
            >
              <StyledSpanIcon>
                <FaWhatsapp />
              </StyledSpanIcon>
            </StyledFooterIcon>

            <StyledFooterIcon
              href="https://www.facebook.com/profile.php?id=61554910856718"
              target="_blank"
              rel="noopener noreferrer"
              alt="Premium Pool Facebook"
            >
              <StyledSpanIcon>
                <FaFacebook />
              </StyledSpanIcon>{" "}
            </StyledFooterIcon>
            <StyledFooterIcon
              href="https://www.instagram.com/premiumpool.ch/"
              target="_blank"
              rel="noopener noreferrer"
              alt="Premium Pool Instagram"
            >
              <StyledSpanIcon>
                <FaInstagram />
              </StyledSpanIcon>
            </StyledFooterIcon>
          </StyledDivIcon>
        </StyledDiv>

        <StyledDiv>
          <StyledDivAddress>
            <ul>
              Gilamstrasse 9A <br />
              4665 Oftringen
            </ul>
          </StyledDivAddress>
          <StyledNavLink to="tel:+41795559449">+41 79 555 94 49</StyledNavLink>

          <StyledNavLink to="mailto:info@premiumpool.ch">
            info@premiumpool.ch
          </StyledNavLink>
        </StyledDiv>

        <StyledDiv>
          <StyledNavLink to="/uber">Über uns</StyledNavLink>

          <StyledNavLink to="/impresum">Impressum</StyledNavLink>

          <StyledNavLink to="/datenschutz">Datenschutz</StyledNavLink>

          <StyledNavLink to="/agb">AGB</StyledNavLink>

          <StyledNavLink to="/careers">Careers</StyledNavLink>
        </StyledDiv>
      </StyledGrid>
      <StyledCopyright>
        Copyright &copy; {currentYear}. All rights reserved by
        <StyledPremiumP> Musliu Poolbau</StyledPremiumP>
      </StyledCopyright>
    </StyledFooter>
  );
}

export default Footer;
