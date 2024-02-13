import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";

const StyledPrivacySection = styled.section`
  max-width: 140rem;
  padding: 9.6rem 7rem;

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
const StyledHeader = styled.h6`
  margin-bottom: 2.2rem;
  margin-top: 4.8rem;
  font-size: 1.6rem;
  padding-left: 7rem;
  font-weight: 600;

  @media (max-width: 625px) {
    padding-top: 3.2rem;
    text-align: center;
    padding-left: 0;
  }
`;

const StyledParagrah = styled.p`
  font-size: 1.4rem;

  ul {
    padding-left: 2rem;
  }

  li {
    line-height: 1.6;
    padding-top: 1rem;
  }
`;

function Privacy() {
  return (
    <>
      <PageNav />
      <StyledPrivacySection>
        <StyledHeader>
          *Premium Pool - Ihr Partner für exklusive Poolerlebnisse*
        </StyledHeader>
        <StyledParagrah>
          Bei Premium Pool dreht sich alles um die Schaffung unvergleichlicher
          Poolerlebnisse. Als Ihr zuverlässiger Partner bieten wir Ihnen nicht
          nur hochwertige Schwimmbadlösungen, sondern auch ein unübertroffenes
          Mass an Fachkenntnis, Engagement und Kundenservice.
        </StyledParagrah>

        <br />
        <StyledParagrah>
          Unser erfahrenes Team arbeitet mit Leidenschaft daran, Ihre Visionen
          zu verwirklichen und Ihren Pool zu einem echten Meisterwerk zu machen.
          Wir legen Wert auf Qualität, Innovation und Stil, um sicherzustellen,
          dass Ihr Pool nicht nur schön anzusehen ist, sondern auch ein Ort der
          Entspannung, Erholung und Freude für Sie und Ihre Familie darstellt.
        </StyledParagrah>
        <br />

        <StyledParagrah>
          Egal, ob Sie einen neuen Pool bauen, Ihren bestehenden Pool renovieren
          oder einfach nur professionelle Wartung und Pflege benötigen - bei
          Premium Pool sind Sie in besten Händen. Wir gehen über das Gewöhnliche
          hinaus, um aussergewöhnliche Ergebnisse zu erzielen und Ihnen ein
          Schwimmbaderlebnis zu bieten, das Ihre Erwartungen übertrifft.
        </StyledParagrah>
        <br />

        <StyledParagrah>
          Entdecken Sie die Welt von Premium Pool und lassen Sie uns gemeinsam
          Ihren Traum vom perfekten Pool verwirklichen.
        </StyledParagrah>
      </StyledPrivacySection>
      <Footer />
    </>
  );
}

export default Privacy;
