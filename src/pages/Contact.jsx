import styled from "styled-components";
import PageNav from "../components/PageNav";
import { useState } from "react";

import videoForm from "../img/video1.mp4";
import Footer from "./Footer";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import styles from "./AppLayout.module.css";

registerLocale("de", de);

const StyledSection = styled.section`
  padding: 11.6rem 3.2rem 11.6rem 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    padding-top: 10.2rem;
    padding-bottom: 9.2rem;
  }

  @media (max-width: 944px) {
    padding-bottom: 7.2rem;
  }

  @media (max-width: 704px) {
    padding-bottom: 5.2rem;
  }

  @media (max-width: 624px) {
    padding-bottom: 4.2rem;
  }

  @media (max-width: 528px) {
    /* padding-left: ;
    padding-right: ;  */
  }

  @media (max-width: 400px) {
    /* padding-bottom: ;
    padding-left: ;
    padding-right: ; */
  }
`;

const StyledContainerForm = styled.section`
  display: grid;
  max-width: 126rem;
  max-height: 72rem;
  border-radius: 12px;
  grid-template-columns: 1.5fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgb(113, 168, 169);
  background-image: linear-gradient(to right bottom, #b9d8df, #7fcde5);
  overflow: hidden;

  @media (max-width: 1126px) {
    max-height: 74rem;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row: 2 / -2;
  }
`;

const StyledFormContent = styled.div`
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;

  & input {
    font-size: 1.4rem;
    border-radius: 20px;
    @media (max-width: 944px) {
      font-size: 1.2rem;
    }
  }

  .cta-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3.2rem;
    row-gap: 2rem;

    @media (max-width: 944px) {
      column-gap: 2rem;
      row-gap: 1rem;
    }
  }

  .cta-form label {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.8rem;

    @media (max-width: 944px) {
      font-size: 1.2rem;
    }

    @media (max-width: 450px) {
      display: none;
    }
  }

  .cta-form input,
  .cta-form select {
    width: 100%;
    padding: 1rem;
    font-size: 1.4rem;

    border: none;
    background-color: #fdf2e9;
    border-radius: 50px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    @media (max-width: 944px) {
      font-size: 1.2rem;
    }
  }

  .cta-form input::placeholder {
    color: #aaa;
  }

  .cta *:focus {
    outline: none;
    box-shadow: 0 0 0 8px rgba(253, 242, 233, 0.562);
  }

  @media (max-width: 1126px) {
    padding: 3.2rem 4.2rem 4.2rem 4.2rem;

    & input {
      font-size: 1.3rem;
      @media (max-width: 944px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const StyledFormH3 = styled.h3`
  color: #000000;
  font-weight: bold;
  padding-bottom: 2.4rem;
  font-size: 3.4rem;
  line-height: 1.2;

  @media (max-width: 1126px) {
    padding-bottom: 1.8rem;
    line-height: 1.1;
    font-size: 3rem;
  }

  @media (max-width: 944px) {
    padding-bottom: 1.4rem;
    font-size: 2.4rem;
  }

  @media (max-width: 520px) {
    font-size: 2.2rem;
  }
`;

const StyledP = styled.p`
  font-size: 1.4rem;
  padding-bottom: 2.4rem;
  line-height: 1.4;

  @media (max-width: 944px) {
    font-size: 1.2rem;
  }
`;

const StyledSelect = styled.select`
  font-size: 1.8rem;
  font-family: inherit;
  color: inherit;
  border: none;
  background-color: #fdf2e9;
  border-radius: 50px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  & option {
    font-size: 1.6rem;
  }

  @media (max-width: 1126px) {
    font-size: 1rem;

    & option {
      font-size: 1.2rem;
    }
  }
`;

const StyledVideo = styled.video`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right bottom,
    rgba(235, 151, 78, 0.35),
    rgba(230, 125, 34, 0.35)
  );
  background-size: cover;
  background-position: center;
  object-fit: cover;

  @media (max-width: 700px) {
    display: none;
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

const StyledButton = styled.button`
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

function Contact() {
  const [setIsVideoPlaying] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState();
  const [comments, setComments] = useState("");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const data = [
    name,
    email,
    address,
    street,
    zipcode,
    date,
    selectedService,
    comments,
  ];

  const handleVideoClick = () => {
    setIsVideoPlaying((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !address ||
      !street ||
      !zipcode ||
      !date ||
      !selectedService
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    console.log("Form submitted:", data);

    setName("");
    setEmail("");
    setAddress("");
    setStreet("");
    setZipCode("");
    setDate("");
    setSelectedService("");
    setComments("");

    setIsFormSubmitted(true);
  };

  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledContainerForm>
          <StyledFormContent>
            {isFormSubmitted ? (
              <>
                <StyledFormH3>Vielen Dank für Ihre Nachricht!</StyledFormH3>
                <StyledP>
                  Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei
                  Ihnen melden.
                </StyledP>
              </>
            ) : (
              <>
                <StyledFormH3>Buchen Sie Ihren Termin</StyledFormH3>
                <StyledP>
                  Tauchen Sie mit uns in eine Saison erfrischender und
                  problemloser Poolpflege ein. Kristallklares Wasser erwartet
                  Sie, denn wir bringen Fachwissen direkt an Ihren Pool.
                  Beginnen Sie noch heute mit der Gewissheit, dass Sie jederzeit
                  die Flexibilität haben, sich anzupassen oder eine Pause
                  einzulegen. Und rate was? Ihr erster Poolservice geht aufs
                  Haus!
                </StyledP>

                <form className="cta-form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="fullName">Name und Vorname</label>
                    <input
                      type="text"
                      id="fullName"
                      placeholder="Name und Vorname"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="E-Mail"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city">Wohnhort</label>
                    <input
                      type="text"
                      id="city"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                      placeholder="Wohnort"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="street">Straße und Hausnummer</label>
                    <input
                      type="text"
                      id="street"
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                      placeholder="Straße und Hausnummer"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zipcode">Postleitzahl</label>
                    <input
                      type="text"
                      id="zipcode"
                      onChange={(e) => setZipCode(e.target.value)}
                      value={zipcode}
                      placeholder="Postleitzahl"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="date">Wunschtermin</label>
                    <DatePicker
                      // showIcon
                      id="date"
                      locale="de"
                      selected={date}
                      onChange={(date) => setDate(date)}
                      wrapperClassName={styles.datePickerWrapper}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceOption">Service Optionen</label>
                    <StyledSelect
                      id="serviceOption"
                      onChange={(e) => setSelectedService(e.target.value)}
                      value={selectedService}
                      required
                    >
                      <option value="">Wähle eine Option</option>
                      <option value="cleanPool">Poolreinigung</option>
                      <option value="restartPool">Abdeckung reinigen</option>
                      <option value="checkAdditive">IBN</option>
                      <option value="changeEngine">
                        Service Atumatikdosieranlage
                      </option>
                      <option value="Umbau">Umbau</option>
                    </StyledSelect>
                  </div>
                  <div>
                    <label htmlFor="comments">Kommentare</label>
                    <input
                      type="text"
                      id="comments"
                      onChange={(e) => setComments(e.target.value)}
                      value={comments}
                      placeholder="Optional: Erzählen Sie mehr..."
                    />
                  </div>

                  <StyledButton>Senden</StyledButton>
                </form>
              </>
            )}
          </StyledFormContent>

          {/* other side */}
          <StyledVideo
            controls
            autoPlay
            loop
            muted
            onClick={handleVideoClick}
            onPause={() => setIsVideoPlaying(false)}
            onPlay={() => setIsVideoPlaying(true)}
            alt="Premium Pool video"
            playsInline
          >
            <source src={videoForm} alt="Premium Pool video" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </StyledContainerForm>
      </StyledSection>

      <Footer />
    </>
  );
}

export default Contact;
