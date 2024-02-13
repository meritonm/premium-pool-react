import styled, { keyframes } from "styled-components";
import {
  HiOutlineCog,
  HiOutlineAdjustments,
  HiOutlineLightBulb,
} from "react-icons/hi";

import { MdOutlineCleaningServices } from "react-icons/md";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";

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

const StyledSectionFeatured = styled.section`
  padding-top: 6.2rem;
  padding-bottom: 9.2rem;
  padding-left: 12.2rem;
  padding-right: 12.2rem;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 1200px) {
    padding-left: 9.2rem;
    padding-right: 9.2rem;
  }

  @media (max-width: 944px) {
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

const StyledHeadingFeatured = styled.h2`
  padding-bottom: 4.2rem;
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.75px;
  font-weight: 500;
  text-align: center;
  color: #888;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2.4rem;
  animation: ${fadeIn} 1s ease;

  @media (max-width: 1272px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12rem;
    row-gap: 4rem;
  }

  @media (max-width: 700px) {
    grid-gap: 8rem;
    row-gap: 4rem;
  }

  @media (max-width: 528px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledFeature = styled.div`
  text-align: left;
`;

const FeatureTitle = styled.h6`
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FeatureText = styled.p`
  font-size: 1.3rem;
  color: #555;
`;

const StyledIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #23a9d1;
`;

const features = [
  {
    icon: <MdOutlineCleaningServices />,
    title: "Wartung und Pflege",
    text: "Wir bieten einen umfassenden Service zur Wartung und Pflege von Schwimmbädern an.",
  },
  {
    icon: <HiOutlineAdjustments />,
    title: "Service",
    text: "Automatische Dosierung für eine präzise chemische Balance im Pool, damit Sie das Wasser immer geniessen können.",
  },
  {
    icon: <HiOutlineCog />,
    title: "Abdeckungen",
    text: "Schützen Sie Ihren Pool stilvoll und effektiv mit hochwertiger Poolabdeckung.",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Inbetriebnahme",
    text: "Integrierte Technologie zur Überwachung und Steuerung Ihres Pools für höchsten Komfort",
  },

  {
    icon: <TfiLayoutMediaOverlay />,
    title: "Neubau und Umbau",
    text: "Verwandeln Sie Ihren Aussenbereich in einen Ort der Erholung und Unterhaltung mit unserem professionellen Neubau- und Umbauservice für Pools.",
  },
];

function FeaturedSection() {
  return (
    <StyledSectionFeatured>
      <StyledHeadingFeatured>unsere Dienstleistungen</StyledHeadingFeatured>
      <StyledGrid>
        {features.map((feature, index) => (
          <StyledFeature key={index}>
            <StyledIcon>{feature.icon}</StyledIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureText>{feature.text}</FeatureText>
          </StyledFeature>
        ))}
      </StyledGrid>
    </StyledSectionFeatured>
  );
}

export default FeaturedSection;
