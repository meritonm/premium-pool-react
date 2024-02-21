import styled from "styled-components";
import PageNav from "../components/PageNav";
import { useState } from "react";

import emailjs from "emailjs-com";

import Select from "react-select";

import videoForm from "../img/video1.mp4";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import de from "date-fns/locale/de";
import styles from "./AppLayout.module.css";

import Footer from "./Footer";

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
`;

const StyledContainerForm = styled.section`
  display: grid;
  max-width: 126rem;
  max-height: 90rem;
  border-radius: 12px;
  grid-template-columns: 1.5fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgb(113, 168, 169);
  background-image: linear-gradient(to right bottom, #b9d8df, #7fcde5);
  overflow: hidden;

  @media (max-width: 1126px) {
    max-height: 80rem;
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
    row-gap: 1rem;

    @media (max-width: 944px) {
      column-gap: 2rem;
      row-gap: 0.8rem;
      grid-template-columns: 1fr 1fr;
    }
  }

  .cta-form > div:nth-last-child(2),
  .cta-form > div:nth-last-child(3) {
    grid-column: span 2;
  }

  .cta-form label {
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 0.8rem;

    @media (max-width: 944px) {
      font-size: 1.2rem;
    }

    @media (max-width: 455px) {
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
    /* border-radius: 50px; */
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
    padding: 2.2rem 2.2rem 2.2rem 2.2rem;

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

const StyledPP = styled.p`
  font-size: 1.4rem;
  padding-bottom: 10.2rem;
  padding-top: 3.2rem;
  line-height: 1.4;

  @media (max-width: 944px) {
    font-size: 1.2rem;
  }
`;

const StyledFormH33 = styled.h3`
  color: #000000;
  font-weight: bold;
  padding-top: 3.6rem;
  font-size: 3.4rem;
  line-height: 1.4;

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

const customStyles = {
  control: (provided) => ({
    ...provided,
    fontSize: "1.2rem",
    borderRadius: "20px",
    width: "100%",
    border: "none",
    backgroundColor: "#fdf2e9",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0 8px rgba(253, 242, 233, 0.562)",
      backgroundColor: "#fdf2e9",
    },
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "1.2rem",
  }),
  menu: (provided) => ({
    ...provided,
    fontSize: "1.2rem",
  }),
  multiValue: (provided) => ({
    ...provided,
    fontSize: "1.2rem",
    backgroundColor: "#23a9d1",
    color: "#ececec",
    borderRadius: "50px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    fontSize: "1.2rem",
    color: "#ececec",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    fontSize: "1.2rem",
    color: "#ececec",
    "&:hover": {
      backgroundColor: "#1e8dae",
      color: "#ececec",
    },
  }),
};

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

  const [vorname, setVorname] = useState("");
  const [surname, setSurname] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [TelNumber, setTelNumber] = useState();
  const [street, setStreet] = useState("");

  const [date, setDate] = useState(null);

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedServicesError, setSelectedServicesError] = useState("");

  const [message, setComments] = useState("");

  const [telNumberError, setTelNumberError] = useState("");
  const [dateError, setDateError] = useState("");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const disableSundays = (date) => {
    return date.getDay() !== 0;
  };

  ////////////////////////////////////////////
  // PER MA VON
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [disabledDates, setDisabledDates] = useState([]);
  // useEffect(() => {
  //   fetchDisabledDates();
  // }, []);

  // const fetchDisabledDates = async () => {
  //   try {
  //     // Make an HTTP
  //     const response = await fetch("SERVER");
  //     const data = await response.json();

  //     // Update
  //     setDisabledDates(data.disabledDates);
  //   } catch (error) {
  //     console.error("Error fetching disabled dates:", error);
  //   }
  // };
  ////////////////////////////////////////////

  const serviceOptions = [
    { label: "Wartung und Pflege", value: "Wartung und Pflege" },
    { label: "Service", value: "Service" },
    { label: "Abdeckungen", value: "Abdeckungen" },
    { label: "Inbetriebnahme", value: "Inbetriebnahme" },
    { label: "Neubau und Umbau", value: "Neubau und Umbau" },
    { label: "Mehr...", value: "Mehr..." },
  ];

  const handleMultiSelectChange = (e) => {
    setSelectedServices(e);
    setSelectedServicesError("");
  };

  const handleDateChange = (date) => {
    // AFTER FIXED
    // setSelectedDate(date);

    if (date instanceof Date && !isNaN(date)) {
      setDate(date);
      setDateError("");
    } else {
      setDateError("Please enter a valid date");
    }
  };

  //////////////////////////////////////
  // PER MA VON
  // const isDateDisabled = (date) => {
  // return disabledDates.includes(date.toISOString().split("T")[0]);
  // };

  const handleTelNumberChange = (e) => {
    const inputValue = e.target.value;
    // if (!/^\d*$/.test(inputValue)) {
    if (!/^\+?\d*$/.test(inputValue)) {
      setTelNumberError("Please enter a valid numbers");
    } else {
      setTelNumber(inputValue);
      setTelNumberError("");
    }
  };

  const handleVideoClick = () => {
    setIsVideoPlaying((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      setSelectedServicesError("Please select at least one option.");
      return;
    }
    if (
      !vorname ||
      !surname ||
      !zipCode ||
      !city ||
      !email ||
      !street ||
      !TelNumber ||
      !date ||
      !selectedServices
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const formattedDate = date
      ? `${("0" + date.getDate()).slice(-2)}.${(
          "0" +
          (date.getMonth() + 1)
        ).slice(-2)}.${date.getFullYear()}`
      : "";

    const templateParams = {
      vorname: vorname,
      surname: surname,
      zipCode: zipCode,
      city: city,
      email: email,
      TelNumber: TelNumber,
      street: street,
      date: formattedDate,
      selectedServices: selectedServices
        .map((service) => service.label)
        .join(", "),
      message: message,
    };

    emailjs
      .send(
        "service_jhljgez",
        "template_9jsvzzj",
        templateParams,
        "ip0jGAK5NbKhVxrgU"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledContainerForm>
          <StyledFormContent>
            {isFormSubmitted ? (
              <>
                <StyledFormH33>Vielen Dank für Ihre Nachricht!</StyledFormH33>
                <StyledPP>
                  Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei
                  Ihnen melden.
                </StyledPP>
              </>
            ) : (
              <>
                <StyledFormH3>Buchen Sie Ihren Termin</StyledFormH3>
                <StyledP>
                  Tauchen Sie mit uns in eine Saison erfrischender und
                  problemloser Poolpflege ein. Kristallklares Wasser erwartet
                  Sie, denn wir bringen Fachwissen direkt an Ihren Pool.
                </StyledP>

                <form className="cta-form" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="Vorname">Vorname</label>
                    <input
                      type="text"
                      id="vorname"
                      placeholder="Vorname"
                      onChange={(e) => setVorname(e.target.value)}
                      value={vorname}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="Surname"
                      placeholder="Name"
                      onChange={(e) => setSurname(e.target.value)}
                      value={surname}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="zipcode">Postleitzahl</label>
                    <input
                      type="text"
                      id="zipcode"
                      onChange={(e) => setZipCode(e.target.value)}
                      value={zipCode}
                      placeholder="Postleitzahl"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="city">Wohnhort</label>
                    <input
                      type="text"
                      id="city"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                      placeholder="Wohnort"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="street">Strasse und Hausnummer</label>
                    <input
                      type="text"
                      id="street"
                      onChange={(e) => setStreet(e.target.value)}
                      value={street}
                      placeholder="Strasse und Hausnummer"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="telephone">Telefonnummer</label>
                    <input
                      type="tel"
                      id="telephone"
                      onChange={handleTelNumberChange}
                      value={TelNumber}
                      placeholder="Telefonnummer"
                      required
                    />
                    {telNumberError && (
                      <span style={{ color: "red" }}>{telNumberError}</span>
                    )}
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
                    <label htmlFor="date">Wunschtermin</label>
                    <DatePicker
                      id="date"
                      locale="de"
                      selected={date}
                      onChange={handleDateChange}
                      wrapperClassName={styles.datePickerWrapper}
                      dateFormat="dd.MM.yyyy"
                      placeholderText="Tag auswählen"
                      minDate={new Date()}
                      filterDate={disableSundays}
                      required
                    />
                    {dateError && (
                      <span style={{ color: "red" }}>{dateError}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="selectedServices">Service Optionen</label>
                    <Select
                      options={serviceOptions}
                      styles={customStyles}
                      display="chip"
                      value={selectedServices}
                      onChange={handleMultiSelectChange}
                      isMulti={true}
                      placeholder="Wähle eine oder mehrere"
                      maxSelectedLabels={1}
                    />
                    {selectedServicesError && (
                      <span style={{ color: "red" }}>
                        {selectedServicesError}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message">Kommentare</label>
                    <input
                      type="text"
                      id="message"
                      onChange={(e) => setComments(e.target.value)}
                      value={message}
                      placeholder="Optional: Erzählen Sie mehr..."
                      rows={4}
                      style={{
                        height: "100px",
                        paddingBottom: "8rem",
                      }}
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
