import styled from "styled-components";
import PageNav from "../components/PageNav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

const StyledSection = styled.section`
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

const StyledSpan = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
`;

const StyledParagraph = styled.p`
  font-size: 1.4rem;
  padding-top: 1.2rem;

  ul {
    padding-left: 2rem;
  }

  li {
    line-height: 1.6;
    padding-top: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  color: blue;
  text-decoration: underline;

  &:hover,
  &:active {
    color: #5580bf;
    transition: all 0.3s;
  }
`;

function Privacy() {
  return (
    <>
      <PageNav />
      <StyledSection>
        <StyledHeader>Datenschutzerklärung</StyledHeader>
        <StyledParagraph>
          Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere
          der EU-Datenschutzgrundverordnung (DSGVO), ist:
        </StyledParagraph>
        <StyledParagraph>
          <StyledSpan>Musliu Poolbau</StyledSpan>
          <br />
          Gilamstrasse 9A
          <br />
          4665 Oftringen
          <br />
          <br />
          <StyledNavLink to="tel:+41795559449">+41 79 555 94 49</StyledNavLink>
          <br />
          <StyledNavLink to="mailto:info@premiumpool.ch" target="_blank">
            info@premiumpool.ch
          </StyledNavLink>
        </StyledParagraph>
        <StyledNavLink
          to="http://www.premiumpool.ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.premiumpool.ch
        </StyledNavLink>

        <StyledParagraph>Allgemeiner Hinweis</StyledParagraph>
        <StyledParagraph>
          Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den
          datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz,
          DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
          Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser
          Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
          der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </StyledParagraph>
        <StyledParagraph>
          In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die
          Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten,
          Missbrauch oder vor Fälschung zu schützen.
        </StyledParagraph>
        <StyledParagraph>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
        </StyledParagraph>
        <StyledParagraph>
          Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung,
          Verarbeitung und Nutzung von Daten gemäss der nachfolgenden
          Beschreibung einverstanden. Diese Website kann grundsätzlich ohne
          Registrierung besucht werden. Dabei werden Daten wie beispielsweise
          aufgerufene Seiten bzw. Namen der abgerufenen Datei, Datum und Uhrzeit
          zu statistischen Zwecken auf dem Server gespeichert, ohne dass diese
          Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene
          Daten, insbesondere Name, Adresse oder E-Mail-Adresse werden soweit
          möglich auf freiwilliger Basis erhoben. Ohne Ihre Einwilligung erfolgt
          keine Weitergabe der Daten an Dritte.
        </StyledParagraph>
        <StyledParagraph>Datenschutzerklärung für Cookies</StyledParagraph>
        <StyledParagraph>
          Diese Website verwendet Cookies. Cookies sind Textdateien, die Daten
          von besuchten Websites oder Domains enthalten und von einem Browser
          auf dem Computer des Benutzers gespeichert werden. Ein Cookie dient in
          erster Linie dazu, die Informationen über einen Benutzer während oder
          nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Zu
          den gespeicherten Angaben können z.B. die Spracheinstellungen auf
          einer Webseite, der Loginstatus, ein Warenkorb oder die Stelle, an der
          ein Video geschaut wurde, gehören. Zu dem Begriff der Cookies zählen
          wir ferner andere Technologien, die die gleichen Funktionen wie
          Cookies erfüllen (z.B. wenn Angaben der Nutzer anhand pseudonymer
          Onlinekennzeichnungen gespeichert werden, auch als «Nutzer-IDs»
          bezeichnet)
        </StyledParagraph>

        <StyledParagraph>
          Die folgenden Cookie-Typen und Funktionen werden unterschieden:
        </StyledParagraph>
        <StyledParagraph>
          Temporäre Cookies (auch: Session- oder Sitzungs-Cookies): Temporäre
          Cookies werden spätestens gelöscht, nachdem ein Nutzer ein
          Online-Angebot verlassen und seinen Browser geschlossen hat.
          Permanente Cookies: Permanente Cookies bleiben auch nach dem
          Schliessen des Browsers gespeichert. So kann beispielsweise der
          Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt
          werden, wenn der Nutzer eine Website erneut besucht. Ebenso können die
          Interessen von Nutzern, die zur Reichweitenmessung oder zu
          Marketingzwecken verwendet werden, in einem solchen Cookie gespeichert
          werden. First-Party-Cookies: First-Party-Cookies werden von uns selbst
          gesetzt. Third-Party-Cookies (auch: Drittanbieter-Cookies):
          Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden (sog.
          Dritten) verwendet, um Benutzerinformationen zu verarbeiten.
          Notwendige (auch: essenzielle oder unbedingt erforderliche) Cookies:
          Cookies können zum einen für den Betrieb einer Webseite unbedingt
          erforderlich sein (z.B. um Logins oder andere Nutzereingaben zu
          speichern oder aus Gründen der Sicherheit). Statistik-, Marketing- und
          Personalisierung-Cookies: Ferner werden Cookies im Regelfall auch im
          Rahmen der Reichweitenmessung eingesetzt sowie dann, wenn die
          Interessen eines Nutzers oder sein Verhalten (z.B. Betrachten
          bestimmter Inhalte, Nutzen von Funktionen etc.) auf einzelnen
          Webseiten in einem Nutzerprofil gespeichert werden. Solche Profile
          dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die ihren
          potenziellen Interessen entsprechen. Dieses Verfahren wird auch als
          «Tracking», d.h., Nachverfolgung der potenziellen Interessen der
          Nutzer bezeichnet. Soweit wir Cookies oder «Tracking»-Technologien
          einsetzen, informieren wir Sie gesondert in unserer
          Datenschutzerklärung oder im Rahmen der Einholung einer Einwilligung.
          Hinweise zu Rechtsgrundlagen: Auf welcher Rechtsgrundlage wir Ihre
          personenbezogenen Daten mithilfe von Cookies verarbeiten, hängt davon
          ab, ob wir Sie um eine Einwilligung bitten. Falls dies zutrifft und
          Sie in die Nutzung von Cookies einwilligen, ist die Rechtsgrundlage
          der Verarbeitung Ihrer Daten die erklärte Einwilligung. Andernfalls
          werden die mithilfe von Cookies verarbeiteten Daten auf Grundlage
          unserer berechtigten Interessen (z.B. an einem
          betriebswirtschaftlichen Betrieb unseres Onlineangebotes und dessen
          Verbesserung) verarbeitet oder, wenn der Einsatz von Cookies
          erforderlich ist, um unsere vertraglichen Verpflichtungen zu erfüllen.
        </StyledParagraph>
        <StyledParagraph>
          Speicherdauer: Sofern wir Ihnen keine expliziten Angaben zur
          Speicherdauer von permanenten Cookies mitteilen (z. B. im Rahmen eines
          sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die
          Speicherdauer bis zu zwei Jahre betragen kann.
        </StyledParagraph>
        <StyledParagraph>
          Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-Out): Abhängig
          davon, ob die Verarbeitung auf Grundlage einer Einwilligung oder
          gesetzlichen Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit,
          eine erteilte Einwilligung zu widerrufen oder der Verarbeitung Ihrer
          Daten durch Cookie-Technologien zu widersprechen (zusammenfassend als
          «Opt-Out» bezeichnet). Sie können Ihren Widerspruch zunächst mittels
          der Einstellungen Ihres Browsers erklären, z.B., indem Sie die Nutzung
          von Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit
          unseres Onlineangebotes eingeschränkt werden kann). Ein Widerspruch
          gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann
          auch mittels einer Vielzahl von Diensten, vor allem im Fall des
          Trackings, über die Webseiten https://optout.aboutads.info und
          https://www.youronlinechoices.com/ erklärt werden. Daneben können Sie
          weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten
          Dienstleistern und Cookies erhalten.
        </StyledParagraph>
        <StyledParagraph>
          Verarbeitung von Cookie-Daten auf Grundlage einer Einwilligung: Wir
          setzen ein Verfahren zum Cookie-Einwilligungs-Management ein, in
          dessen Rahmen die Einwilligungen der Nutzer in den Einsatz von
          Cookies, bzw. der im Rahmen des
          Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen
          und Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen
          werden können. Hierbei wird die Einwilligungserklärung gespeichert, um
          deren Abfrage nicht erneut wiederholen zu müssen und die Einwilligung
          entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die
          Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes
          Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um
          die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können.
          Vorbehaltlich individueller Angaben zu den Anbietern von
          Cookie-Management-Diensten gelten die folgenden Hinweise: Die Dauer
          der Speicherung der Einwilligung kann bis zu zwei Jahren betragen.
          Hierbei wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem
          Zeitpunkt der Einwilligung, Angaben zur Reichweite der Einwilligung
          (z. B. welche Kategorien von Cookies und/oder Diensteanbieter) sowie
          dem Browser, System und verwendeten Endgerät gespeichert.
        </StyledParagraph>
        <StyledParagraph>
          Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten,
          Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
          (z.B. Geräte-Informationen, IP-Adressen). Betroffene Personen: Nutzer
          (z.B. Webseitenbesucher, Nutzer von Onlinediensten). Rechtsgrundlagen:
          Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO), Berechtigte
          Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO). Kostenpflichtige
          Leistungen
        </StyledParagraph>
        <StyledParagraph>
          Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche
          Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung resp.
          Ihren Auftrag ausführen zu können. Wir speichern diese Daten in
          unseren Systemen, bis die gesetzlichen Aufbewahrungsfristen abgelaufen
          sind.
        </StyledParagraph>
        <StyledParagraph>
          Datenschutzerklärung für Google Analytics
        </StyledParagraph>
        <StyledParagraph>
          Diese Website benutzt Google Analytics, einen Webanalysedienst der
          Google Ireland Limited. Wenn der Verantwortliche für die
          Datenverarbeitung auf dieser Website ausserhalb des Europäischen
          Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google
          Analytics Datenverarbeitung durch Google LLC. Google LLC und Google
          Ireland Limited werden nachfolgend «Google» genannt.
        </StyledParagraph>
        <StyledParagraph>
          Über die gewonnenen Statistiken können wir unser Angebot verbessern
          und für Sie als Nutzer interessanter ausgestalten. Diese Website
          verwendet Google Analytics zudem für eine geräteübergreifende Analyse
          von Besucherströmen, die über eine User-ID durchgeführt wird. Sofern
          Sie über ein Google-Benutzerkonto verfügen, können Sie in den dortigen
          Einstellungen unter «Meine Daten», «persönliche Daten» die
          geräteübergreifende Analyse Ihrer Nutzung deaktivieren.
        </StyledParagraph>
        <StyledParagraph>
          Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1
          S. 1 lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem
          Browser übermittelte IP-Adresse wird nicht mit anderen Daten von
          Google zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser
          Website Google Analytics um den Code «_anonymizeIp();» erweitert
          wurde, um eine anonymisierte Erfassung von IP-Adressen zu
          gewährleisten. Dadurch werden IP-Adressen gekürzt weiterverarbeitet,
          eine Personenbeziehbarkeit kann damit ausgeschlossen werden. Soweit
          den über Sie erhobenen Daten ein Personenbezug zukommt, wird dieser
          also sofort ausgeschlossen und die personenbezogenen Daten damit
          umgehend gelöscht.
        </StyledParagraph>

        <StyledParagraph>
          Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
          Google in den USA übertragen und dort gekürzt. Im Auftrag des
          Betreibers dieser Website wird Google diese Informationen benutzen, um
          Ihre Nutzung der Website auszuwerten, um Reports über die
          Websitenaktivitäten zusammenzustellen und um weitere mit der
          Websitennutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitenbetreiber zu erbringen.
        </StyledParagraph>
        <StyledParagraph>
          Google Analytics verwendet Cookies. Die durch den Cookie erzeugten
          Informationen über Ihre Benutzung dieser Website werden in der Regel
          an einen Server von Google in den USA übertragen und dort gespeichert.
          Sie können die Speicherung der Cookies durch eine entsprechende
          Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
          darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
          Funktionen dieser Website vollumfänglich werden nutzen können. Sie
          können darüber hinaus die Erfassung der durch das Cookie erzeugten und
          auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse)
          an Google sowie die Verarbeitung dieser Daten durch Google verhindern,
          indem sie das unter dem folgenden Link verfügbare Browser-Plugin
          herunterladen und installieren: Google Analytics deaktivieren.
        </StyledParagraph>
        <StyledParagraph>
          Ausserdem können Sie die Nutzung von Google Analytics auch verhindern,
          indem sie auf diesen Link klicken: Google Analytics deaktivieren.
          Hierdurch wird ein sog. opt-out Cookie auf ihrem Datenträger
          gespeichert, der die Verarbeitung personenbezogener Daten durch Google
          Analytics verhindert. Bitte beachten Sie, dass bei einem Löschen
          sämtlicher Cookies auf Ihrem Endgerät auch diese Opt-out-Cookies
          gelöscht werden, d.h., dass Sie erneut die Opt-out-Cookies setzen
          müssen, wenn Sie weiterhin diese Form der Datenerhebung verhindern
          wollen. Die Opt-out-Cookies sind pro Browser und Rechner/Endgerät
          gesetzt und müssen daher für jeden Browser, Rechner oder anderes
          Endgerät gesondert aktiviert werden.
        </StyledParagraph>
        <StyledParagraph>
          Datenschutzerklärung für die Nutzung von Google Web Fonts
        </StyledParagraph>
        <StyledParagraph>
          Diese Website nutzt zur einheitlichen Darstellung von Schriftarten so
          genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
          einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
          Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Wenn Ihr
          Browser Web Fonts nicht unterstützt, wird eine Standardschrift von
          Ihrem Computer genutzt.
        </StyledParagraph>
        <StyledParagraph>
          Weitere Informationen zu Google Web Fonts finden Sie unter
          <span>
            <StyledNavLink
              to="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/fonts/faq
            </StyledNavLink>
            und in der Datenschutzerklärung von Google:
            <StyledNavLink
              to="https://www.google.com/policies/privacy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.google.com/policies/privacy/
            </StyledNavLink>
          </span>
          und in der Datenschutzerklärung von Google:
        </StyledParagraph>
        <StyledParagraph>Google Tag Manager</StyledParagraph>
        <StyledParagraph>
          Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über
          eine Oberfläche verwalten können und so z.B. Google Analytics sowie
          andere Google-Marketing-Dienste in unser Onlineangebot einbinden
          können. Der Tag Manager selbst, welcher die Tags implementiert,
          verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf
          die Verarbeitung der personenbezogenen Daten der Nutzer wird auf die
          folgenden Angaben zu den Google-Diensten verwiesen.
          Nutzungsrichtlinien:
          <span>
            <StyledNavLink
              to="https://www.google.com/intl/de/tagmanager/use-policy.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Tag Manager
            </StyledNavLink>
            <span>
              (https://www.google.com/intl/de/tagmanager/use-policy.html)
            </span>
          </span>{" "}
        </StyledParagraph>
        <StyledParagraph>Externe Zahlungsdienstleister</StyledParagraph>
        <StyledParagraph>
          Diese Website setzt externe Zahlungsdienstleister ein, über deren
          Plattformen die Nutzer und wir Zahlungstransaktionen vornehmen können.
          Zum Beispiel über
        </StyledParagraph>
        <StyledParagraph>
          <div>
            <span>
              <StyledNavLink
                to="https://www.postfinance.ch/de/detail/rechtliches-barrierefreiheit.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                PostFinance
              </StyledNavLink>
              <span>
                (https://www.postfinance.ch/de/detail/rechtliches-barrierefreiheit.html)
              </span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visa
              </StyledNavLink>
              <span>
                (https://www.visa.de/nutzungsbedingungen/visa-privacy-center.html)
              </span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.mastercard.ch/de-ch/datenschutz.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mastercard
              </StyledNavLink>
              <span>(https://www.mastercard.ch/de-ch/datenschutz.html)</span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.americanexpress.com/de/legal/online-datenschutzerklarung.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Express
              </StyledNavLink>
              <span>
                (https://www.americanexpress.com/de/legal/online-datenschutzerklarung.html)
              </span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Paypal
              </StyledNavLink>
              <span>
                (https://www.paypal.com/de/webapps/mpp/ua/privacy-full)
              </span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.bexio.com/de-CH/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bexio AG
              </StyledNavLink>
              <span>(https://www.bexio.com/de-CH/datenschutz)</span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.payrexx.ch/site/assets/files/2592/datenschutzerklaerung.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Payrexx AG
              </StyledNavLink>
              <span>
                (https://www.payrexx.ch/site/assets/files/2592/datenschutzerklaerung.pdf)
              </span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://support.apple.com/de-ch/ht203027"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Pay
              </StyledNavLink>
              <span>(https://support.apple.com/de-ch/ht203027)</span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://stripe.com/ch/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Stripe
              </StyledNavLink>
              <span>(https://stripe.com/ch/privacy)</span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.klarna.com/de/datenschutz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Klarna
              </StyledNavLink>
              <span>(https://www.klarna.com/de/datenschutz/)</span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Skrill
              </StyledNavLink>
              <span>
                (https://www.skrill.com/de/fusszeile/datenschutzrichtlinie/)
              </span>
            </span>
            <br />
            <span>
              <StyledNavLink
                to="https://www.giropay.de/rechtliches/datenschutzerklaerung"
                target="_blank"
                rel="noopener noreferrer"
              >
                Giropay
              </StyledNavLink>
              <span>
                (https://www.giropay.de/rechtliches/datenschutzerklaerung)
              </span>{" "}
              etc.
            </span>
          </div>
          Im Rahmen der Erfüllung von Verträgen setzen wir die
          Zahlungsdienstleister auf Grundlage der schweizerischen
          Datenschutzverordnung sowie und soweit nötig, des Art. 6 Abs. 1 lit.
          b. EU-DSGVO ein. Im Übrigen setzen wir externe Zahlungsdienstleister
          auf Grundlage unserer berechtigten Interessen gem. schweizerischer
          Datenschutzverordnung sowie und soweit nötig, gem. Art. 6 Abs. 1 lit.
          f. EU-DSGVO ein, um unseren Nutzern effektive und sichere
          Zahlungsmöglichkeit zu bieten.
        </StyledParagraph>
        <StyledParagraph>
          Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören
          Bestandsdaten, wie z.B. der Name und die Adresse, Bankdaten, wie u.a.
          Kontonummern oder Kreditkartennummern, Passwörter, TANs und Prüfsummen
          sowie die Vertrags-, Summen und empfängerbezogenen Angaben. Die
          Angaben sind erforderlich, um die Transaktionen durchzuführen. Die
          eingegebenen Daten werden jedoch nur durch die Zahlungsdienstleister
          verarbeitet und bei diesen gespeichert. Wir als Betreiber erhalten
          keinerlei Informationen zu (Bank-) Konto oder Kreditkarte, sondern
          lediglich Informationen zur Bestätigung (Annahme) oder Ablehnung der
          Zahlung. Unter Umständen werden die Daten seitens der
          Zahlungsdienstleister an Wirtschaftsauskunfteien übermittelt. Diese
          Übermittlung bezweckt die Identitäts- und Bonitätsprüfung. Hierzu
          verweisen wir auf die AGB und Datenschutzhinweise der
          Zahlungsdienstleister.
        </StyledParagraph>
        <StyledParagraph>
          Für die Zahlungsgeschäfte gelten die Geschäftsbedingungen und die
          Datenschutzhinweise der jeweiligen Zahlungsdienstleister, welche
          innerhalb der jeweiligen Website, bzw. Transaktionsapplikationen
          abrufbar sind. Wir verweisen auf diese ebenfalls zwecks weiterer
          Informationen und Geltendmachung von Widerrufs-, Auskunfts- und
          anderen Betroffenenrechten.
        </StyledParagraph>
        <StyledParagraph>Urheberrechte</StyledParagraph>
        <StyledParagraph>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
          anderen Dateien auf der Website, gehören ausschliesslich dem Betreiber
          dieser Website oder den speziell genannten Rechteinhabern. Für die
          Reproduktion von sämtlichen Dateien, ist die schriftliche Zustimmung
          des Urheberrechtsträgers im Voraus einzuholen.
        </StyledParagraph>
        <StyledParagraph>
          Wer ohne Einwilligung des jeweiligen Rechteinhabers eine
          Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls
          schadenersatzpflichtig machen.
        </StyledParagraph>
        <StyledParagraph>Änderungen</StyledParagraph>
        <StyledParagraph>
          Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung
          anpassen. Es gilt die jeweils aktuelle, auf unserer Website
          publizierte Fassung. Soweit die Datenschutzerklärung Teil einer
          Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer
          Aktualisierung über die Änderung per E-Mail oder auf andere geeignete
          Weise informieren.
        </StyledParagraph>
        <StyledParagraph>Fragen an den Datenschutzbeauftragten</StyledParagraph>
        <StyledParagraph>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
          E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu
          Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person
          in unserer Organisation.
        </StyledParagraph>
      </StyledSection>
      <Footer />
    </>
  );
}

export default Privacy;
