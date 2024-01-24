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
const StyledHeader = styled.p`
  margin-bottom: 2.2rem;
  margin-top: 4.8rem;
  font-size: 1.6rem;
  padding-left: 7rem;
  font-weight: 600;
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
const StyledParagrahFirst = styled.p`
  font-size: 1.4rem;
`;

const StyledParagrahPP = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const PageLink = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
  color: blue;
  text-decoration: underline;

  &:hover,
  &:active {
    color: #2fb1ab;
    transition: all 0.3s;
  }
`;

function Privacy() {
  return (
    <>
      <PageNav />
      <StyledPrivacySection>
        <StyledHeader>Privacy & terms | Datenschutzerklärung </StyledHeader>
        <StyledParagrah>
          Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere
          der EU-Datenschutzgrundverordnung (DSGVO), ist:
        </StyledParagrah>
        <br />

        <StyledParagrahPP>Premium Pool GmbH</StyledParagrahPP>
        <StyledParagrahFirst>Gilamstraße </StyledParagrahFirst>
        <StyledParagrahFirst>4665 Oftringen AG</StyledParagrahFirst>

        <StyledParagrahFirst>+41 79 900 80 03</StyledParagrahFirst>
        <StyledParagrahFirst>www.premiumpool.ch</StyledParagrahFirst>
        <StyledParagrahFirst>premium@pool.ch</StyledParagrahFirst>

        <StyledHeader>Allgemeiner Hinweis</StyledHeader>
        <StyledParagrah>
          Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den
          datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz,
          DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
          Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser
          Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
          der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
          <br />
          <br />
          In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die
          Datenbanken so gut wie möglich vor fremden Zugriffen, Verlusten,
          Missbrauch oder vor Fälschung zu schützen.
          <br />
          <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich.
          <br />
          <br />
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
        </StyledParagrah>

        <StyledHeader>Datenschutzerklärung für Cookies</StyledHeader>
        <StyledParagrah>
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
          bezeichnet)Diese Website verwendet Cookies. Cookies sind Textdateien,
          die Daten von besuchten Websites oder Domains enthalten und von einem
          Browser auf dem Computer des Benutzers gespeichert werden. Ein Cookie
          dient in erster Linie dazu, die Informationen über einen Benutzer
          während oder nach seinem Besuch innerhalb eines Onlineangebotes zu
          speichern. Zu den gespeicherten Angaben können z.B. die
          Spracheinstellungen auf einer Webseite, der Loginstatus, ein Warenkorb
          oder die Stelle, an der ein Video geschaut wurde, gehören. Zu dem
          Begriff der Cookies zählen wir ferner andere Technologien, die die
          gleichen Funktionen wie Cookies erfüllen (z.B. wenn Angaben der Nutzer
          anhand pseudonymer Onlinekennzeichnungen gespeichert werden, auch als
          «Nutzer-IDs» bezeichnet)
        </StyledParagrah>

        <StyledParagrah>
          <br />
          Die folgenden Cookie-Typen und Funktionen werden unterschieden:
          <br />
          <ul>
            <li>
              Temporäre Cookies (auch: Session- oder Sitzungs-Cookies):
              Temporäre Cookies werden spätestens gelöscht, nachdem ein Nutzer
              ein Online-Angebot verlassen und seinen Browser geschlossen hat.
            </li>
            <li>
              Permanente Cookies: Permanente Cookies bleiben auch nach dem
              Schliessen des Browsers gespeichert. So kann beispielsweise der
              Login-Status gespeichert oder bevorzugte Inhalte direkt angezeigt
              werden, wenn der Nutzer eine Website erneut besucht. Ebenso können
              die Interessen von Nutzern, die zur Reichweitenmessung oder zu
              Marketingzwecken verwendet werden, in einem solchen Cookie
              gespeichert werden.
            </li>
            <li>
              First-Party-Cookies: First-Party-Cookies werden von uns selbst
              gesetzt.
            </li>
            <li>
              Third-Party-Cookies (auch: Drittanbieter-Cookies):
              Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden
              (sog. Dritten) verwendet, um Benutzerinformationen zu verarbeiten.
            </li>
            <li>
              Notwendige (auch: essenzielle oder unbedingt erforderliche)
              Cookies: Cookies können zum einen für den Betrieb einer Webseite
              unbedingt erforderlich sein (z.B. um Logins oder andere
              Nutzereingaben zu speichern oder aus Gründen der Sicherheit).
            </li>
            <li>
              Statistik-, Marketing- und Personalisierung-Cookies: Ferner werden
              Cookies im Regelfall auch im Rahmen der Reichweitenmessung
              eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein
              Verhalten (z.B. Betrachten bestimmter Inhalte, Nutzen von
              Funktionen etc.) auf einzelnen Webseiten in einem Nutzerprofil
              gespeichert werden. Solche Profile dienen dazu, den Nutzern z.B.
              Inhalte anzuzeigen, die ihren potenziellen Interessen entsprechen.
              Dieses Verfahren wird auch als «Tracking», d.h., Nachverfolgung
              der potenziellen Interessen der Nutzer bezeichnet. Soweit wir
              Cookies oder «Tracking»-Technologien einsetzen, informieren wir
              Sie gesondert in unserer Datenschutzerklärung oder im Rahmen der
              Einholung einer Einwilligung.
            </li>
          </ul>
        </StyledParagrah>
        <br />
        <StyledParagrah>
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
          <br />
          <br />
          Speicherdauer: Sofern wir Ihnen keine expliziten Angaben zur
          Speicherdauer von permanenten Cookies mitteilen (z. B. im Rahmen eines
          sog. Cookie-Opt-Ins), gehen Sie bitte davon aus, dass die
          Speicherdauer bis zu zwei Jahre betragen kann.
          <br />
          <br />
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
          Trackings, über die Webseiten
          <PageLink href="https://optout.aboutads.info" target="_blank">
            https://optout.aboutads.info
          </PageLink>{" "}
          |
          <PageLink href="https://www.youronlinechoices.com" target="_blank">
            https://www.youronlinechoices.com/
          </PageLink>
          erklärt werden. Daneben können Sie weitere Widerspruchshinweise im
          Rahmen der Angaben zu den eingesetzten Dienstleistern und Cookies
          erhalten.
          <br />
          <br />
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
        </StyledParagrah>
        <StyledParagrah>
          <ul>
            <li>
              Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten,
              Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten
              (z.B. Geräte-Informationen, IP-Adressen).
            </li>
            <li>
              Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von
              Onlinediensten).
            </li>
            <li>
              Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a. DSGVO),
              Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
            </li>
          </ul>
        </StyledParagrah>

        <StyledHeader>Kostenpflichtige Leistungen</StyledHeader>
        <StyledParagrah>
          Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche
          Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung resp.
          Ihren Auftrag ausführen zu können. Wir speichern diese Daten in
          unseren Systemen, bis die gesetzlichen Aufbewahrungsfristen abgelaufen
          sind.
        </StyledParagrah>

        <StyledHeader>Datenschutzerklärung für Google Analytics</StyledHeader>
        <StyledParagrah>
          Diese Website benutzt Google Analytics, einen Webanalysedienst der
          Google Ireland Limited. Wenn der Verantwortliche für die
          Datenverarbeitung auf dieser Website ausserhalb des Europäischen
          Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google
          Analytics Datenverarbeitung durch Google LLC. Google LLC und Google
          Ireland Limited werden nachfolgend «Google» genannt. Über die
          gewonnenen Statistiken können wir unser Angebot verbessern und für Sie
          als Nutzer interessanter ausgestalten. Diese Website verwendet Google
          Analytics zudem für eine geräteübergreifende Analyse von
          Besucherströmen, die über eine User-ID durchgeführt wird. Sofern Sie
          über ein Google-Benutzerkonto verfügen, können Sie in den dortigen
          Einstellungen unter «Meine Daten», «persönliche Daten» die
          geräteübergreifende Analyse Ihrer Nutzung deaktivieren. <br />
          <br />
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
          umgehend gelöscht. <br />
          <br />
          Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
          Google in den USA übertragen und dort gekürzt. Im Auftrag des
          Betreibers dieser Website wird Google diese Informationen benutzen, um
          Ihre Nutzung der Website auszuwerten, um Reports über die
          Websitenaktivitäten zusammenzustellen und um weitere mit der
          Websitennutzung und der Internetnutzung verbundene Dienstleistungen
          gegenüber dem Websitenbetreiber zu erbringen. Google Analytics
          verwendet Cookies. Die durch den Cookie erzeugten Informationen über
          Ihre Benutzung dieser Website werden in der Regel an einen Server von
          Google in den USA übertragen und dort gespeichert. Sie können die
          Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
          Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass
          Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
          Website vollumfänglich werden nutzen können.
          <br />
          <br />
          Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
          und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
          IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google
          verhindern, indem sie das unter dem folgenden Link verfügbare
          Browser-Plugin herunterladen und installieren: Google Analytics
          deaktivieren. Ausserdem können Sie die Nutzung von Google Analytics
          auch verhindern, indem sie auf diesen Link klicken: Google Analytics
          deaktivieren. Hierdurch wird ein sog. opt-out Cookie auf ihrem
          Datenträger gespeichert, der die Verarbeitung personenbezogener Daten
          durch Google Analytics verhindert. Bitte beachten Sie, dass bei einem
          Löschen sämtlicher Cookies auf Ihrem Endgerät auch diese
          Opt-out-Cookies gelöscht werden, d.h., dass Sie erneut die
          Opt-out-Cookies setzen müssen, wenn Sie weiterhin diese Form der
          Datenerhebung verhindern wollen. Die Opt-out-Cookies sind pro Browser
          und Rechner/Endgerät gesetzt und müssen daher für jeden Browser,
          Rechner oder anderes Endgerät gesondert aktiviert werden.
        </StyledParagrah>

        <StyledHeader>Urheberrechte</StyledHeader>
        <StyledParagrah>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Videos,
          Fotos oder anderen Dateien auf der Website, gehören ausschliesslich
          dem Betreiber dieser Website oder den speziell genannten
          Rechteinhabern. Für die Reproduktion von sämtlichen Dateien, ist die
          schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
          Wer ohne Einwilligung des jeweiligen Rechteinhabers eine
          Urheberrechtsverletzung begeht, kann sich strafbar und allenfalls
          schadenersatzpflichtig machen.
        </StyledParagrah>

        <StyledHeader>Änderungen</StyledHeader>
        <StyledParagrah>
          Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung
          anpassen. Es gilt die jeweils aktuelle, auf unserer Website
          publizierte Fassung. Soweit die Datenschutzerklärung Teil einer
          Vereinbarung mit Ihnen ist, werden wir Sie im Falle einer
          Aktualisierung über die Änderung per E-Mail oder auf andere geeignete
          Weise informieren.
        </StyledParagrah>

        <StyledHeader>Fragen an den Datenschutzbeauftragten</StyledHeader>
        <StyledParagrah>
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
          E-Mail oder wenden Sie sich direkt an die für den Datenschutz zu
          Beginn der Datenschutzerklärung aufgeführten, verantwortlichen Person
          in unserer Organisation.
        </StyledParagrah>

        <StyledParagrah>
          Quelle:{" "}
          <PageLink href="https://www.swissanwalt.ch" target="_blank">
            SwissAnwalt
          </PageLink>
        </StyledParagrah>
      </StyledPrivacySection>
      <Footer />
    </>
  );
}

export default Privacy;
