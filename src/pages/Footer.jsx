import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const StyledFooter = styled.footer`
  padding-top: 9.2rem;
  padding-bottom: 9.2rem;
  padding-left: 12.2rem;
  padding-right: 12.2rem;
  border-top: 1px solid #add6d4;
  /* color: #2fb1ab; */

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
    padding-bottom: 4.2rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 10rem;

  @media (max-width: 1200px) {
    gap: 8rem;
  }

  @media (max-width: 944px) {
    gap: 6rem;
  }
  @media (max-width: 820px) {
    grid-template-columns: 1.5fr 1fr;
    row-gap: 10rem;
  }

  @media (max-width: 704px) {
    row-gap: 12rem;
  }

  @media (max-width: 370px) {
    grid-template-columns: 1.5fr;
  }
`;

const StyledLogoCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
  }
`;

const StyledFooterLogo = styled.a`
  display: block;
  margin-bottom: 3.2rem;
  width: 2rem;
  height: 2rem;
`;

const StyledSocialLink = styled.ul`
  list-style: none;
  display: flex;
  gap: 2.4rem;
`;

const StyledCopyright = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: #767676;
  margin-top: auto;
`;

const StyledAddressCol = styled.div``;

const StyledFooterHeading = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 4rem;
`;

const StyledContacts = styled.address`
  font-style: normal;
  font-size: 1.4rem;
  line-height: 1.6;
`;

const StyledAddress = styled.p`
  margin-bottom: 2.4rem;
`;

const StyledNavCol = styled.nav``;

const StyledFooterNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledFooterLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #606060;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #2fb1ab;
  }
`;

const StyledFooterA = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  color: #606060;
  transition: all 0.3s;

  &:hover,
  &:active {
    color: #2fb1ab;
  }
`;

const StyledPremiumP = styled.p`
  font-weight: bold;
  color: #444444;
`;

const StyledSocialIcon = styled(StyledFooterLogo)`
  height: 3.5rem;
  width: 3.5rem;

  color: #242424;

  @media (max-width: 900px) {
    height: 3rem;
    width: 3rem;
  }

  & svg {
    height: 100%;
    width: 100%;
  }

  transition: all 0.3s;

  &:hover,
  &:active {
    color: #2fb1ab;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="container">
        <StyledGrid>
          <StyledLogoCol>
            <StyledFooterLogo>
              <img
                className="logo"
                alt="Premium Pool logo"
                src="/img/PremiumPoolLogo.png"
              />
            </StyledFooterLogo>

            <StyledSocialLink>
              <li>
                <StyledFooterA
                  href="https://www.instagram.com/premiumpool.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Premium Pool instagram"
                >
                  <StyledSocialIcon>
                    <FaInstagram />
                  </StyledSocialIcon>
                </StyledFooterA>
              </li>
              <li>
                <StyledFooterA
                  href="https://www.instagram.com/premiumpool.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Premium Pool facebook"
                >
                  <StyledSocialIcon>
                    <FaFacebook />
                  </StyledSocialIcon>
                </StyledFooterA>
              </li>
              <li>
                <StyledFooterA
                  href="https://wa.me/+41795559449"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="Premium Pool whatsaap"
                >
                  <StyledSocialIcon>
                    <FaWhatsapp />
                  </StyledSocialIcon>
                </StyledFooterA>
              </li>
            </StyledSocialLink>

            <StyledCopyright>
              Copyright &copy; {currentYear}. All rights reserved by
              <StyledPremiumP>Premium Pool</StyledPremiumP>
            </StyledCopyright>
          </StyledLogoCol>

          <StyledAddressCol>
            <StyledFooterHeading>Contact us</StyledFooterHeading>
            <StyledContacts>
              <StyledAddress>
                Gilamstraße, Oftringen, <br />
                4665, Schweiz
              </StyledAddress>
              <div>
                <StyledFooterLink to="tel:+41795559449">
                  +41 79 555 94 49
                </StyledFooterLink>
                <br />
                <StyledFooterLink to="mailto:---.com">
                  premium@pool.ch
                </StyledFooterLink>
              </div>
            </StyledContacts>
          </StyledAddressCol>

          <StyledNavCol>
            <StyledFooterHeading>Company</StyledFooterHeading>
            <StyledFooterNav>
              <li>
                <StyledFooterLink to="/about">About Us</StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink to="/for-business">
                  For Business
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink to="/building-partners">
                  Building partners
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink to="/careers">Careers</StyledFooterLink>
              </li>
            </StyledFooterNav>
          </StyledNavCol>

          <StyledNavCol>
            <StyledFooterHeading>Resources</StyledFooterHeading>
            <StyledFooterNav>
              <li>
                <StyledFooterLink to="/recipedirectory">
                  Recipedirectory
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink to="/help-center">
                  Help Center
                </StyledFooterLink>
              </li>
              <li>
                <StyledFooterLink to="/privacy">
                  Privacy & terms
                </StyledFooterLink>
              </li>
            </StyledFooterNav>
          </StyledNavCol>
        </StyledGrid>
      </div>
    </StyledFooter>
  );
}

export default Footer;
