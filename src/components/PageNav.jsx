import { NavLink, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useLayoutEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

import PremiumPoolLogo from "../img/PremiumPoolLogo.png";

const navBtnOpenAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const navBtnCloseAnimation = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;

const StyledNav = styled.nav`
  background-color: #a8def0;

  font-size: 1.8rem;
  color: #000000;
  font-weight: 500;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  height: 8rem;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 7rem;
  padding-right: 7rem;
  z-index: 999999;
  display: flex;
  justify-content: space-between;
  animation: ${navBtnOpenAnimation} 1s ease;

  .btn-nav {
    display: none;
  }

  @media (max-width: 1140px) {
    padding-left: 5rem;
  }

  @media (max-width: 940px) {
    padding-left: 4.2rem;
  }

  @media (max-width: 820px) {
    padding-left: 2.8rem;
  }

  @media (max-width: 600px) {
    padding-left: 2rem;
  }

  @media (max-width: 420px) {
    padding-left: 0.8rem;
  }

  ul {
    list-style: none;
    display: flex;
    border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    gap: 6rem;

    @media (max-width: 1092px) {
      gap: 3rem;
    }

    @media (max-width: 940px) {
      display: ${({ isNavOpen }) => (isNavOpen ? "flex" : "none")};
      position: absolute;
      top: 8rem;
      left: 0;
      width: 100%;
      height: 85vh;
      background-color: rgba(152, 214, 237, 0.928);
      font-size: 2.4rem;

      border-radius: 15px;

      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 999999;
      gap: 7rem;

      text-align: center;
      animation: ${navBtnCloseAnimation} 0.5s ease;

      animation: ${({ isNavOpen }) =>
          isNavOpen ? navBtnOpenAnimation : navBtnCloseAnimation}
        0.5s ease;
    }
  }

  a {
    display: block;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 600;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    animation: ${navBtnOpenAnimation} 1.2s ease;

    &:hover,
    &:active {
      color: #2fb1ab;
      transition: 0.5s;
    }

    @media (max-width: 940px) {
      margin-bottom: 1rem;
    }
  }

  .nav-btn {
    height: 2.4rem;
    width: 2.4rem;
    opacity: 0;
    visibility: hidden;
    margin-right: 2.4rem;

    @media (max-width: 940px) {
      display: block;
      opacity: 1;
      visibility: visible;
    }

    @media (max-width: 600px) {
      margin-right: 1.8rem;
    }

    @media (max-width: 420px) {
      margin-right: 1rem;
    }
  }

  .nav-open-btn,
  .nav-close-btn {
    display: none;
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
  }
  .nav-open-btn {
    display: ${({ isNavOpen }) => (isNavOpen ? "none" : "block")};
  }

  .nav-close-btn {
    display: ${({ isNavOpen }) => (isNavOpen ? "block" : "none")};
  }
`;

const StyledSpan = styled.nav`
  img {
    position: absolute;
    width: 10rem;
    height: auto;

    top: -0.8rem;
  }

  @media (max-width: 940px) {
    margin-top: 1.5rem;
  }
`;

function PageNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <StyledNav isNavOpen={isNavOpen}>
      <NavLink to="/">
        <StyledSpan>
          <img src={PremiumPoolLogo} alt="Premium Pool Logo" />
        </StyledSpan>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/service">Service</NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/abdeckungen">Abdeckungen</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>

      <IoMenu
        className={`nav-btn nav-open-btn ${isNavOpen && "hidden"}`}
        onClick={toggleNav}
      />
      <IoClose
        className={`nav-btn nav-close-btn ${!isNavOpen && "hidden"}`}
        onClick={toggleNav}
      />
    </StyledNav>
  );
}

export default PageNav;
