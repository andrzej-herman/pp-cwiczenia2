import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import vs_7 from "../img/vs_7.jpg";
import vs_8 from "../img/vs_8.jpg";

function Proj() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/clone">
            Tworzenie projektu aplikacji konsolowej w Visual Studio
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">
            Tworzenie projektu aplikacji konsolowej w Visual Studio
          </h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Gdy mamy już utworzone rozwiązanie (solution) - czyli kontener -
                dla naszego projektu quizu, musimy otworzyć je w Visual Studio.
                Możliwości są dwie:
                <br /> <br />
                <ul>
                  <li>
                    albo Uruchamiamy VS i z opcji po prawej stronie wybieramy
                    'Otwórz projekt lub rozwiązanie' - następnie wskazujemy na
                    dysku nasz plik rozwiązania (W moim przykładzie quiz-2.sln)
                  </li>
                  <li>
                    albo nie uruchamiamy VS i szukamy w eksploratorze plików
                    naszego pliku rozwiązania (W moim przykładzie quiz-2.sln), a
                    nastepnie klikamy na niego dwukrotnie. Wówczas VS otworzy
                    się sam już z wgranym rozwiązaniem.
                  </li>
                </ul>
              </p>
              <p style={{ textAlign: "justify" }}>
                Następnie w zakładce Eksplorator rozwiązania (Solution expolrer)
                klikamy prawym klawiszem myszy na nasze rozwiązanie i dodajemy
                nowy projekt. To już będzie nasza aplikacja Quiz, umieszczona w
                naszym kontenerze (rozwiązaniu) (solution) z repozytorium Gita.
                (proszę kliknąć na obrazek, aby powiększyć)
              </p>
              <br />
              <div className="center">
                <a href={vs_7} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_7}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Następnie z listy po prawej stronie wybieramy opcję Aplikacja
                konsoli (Console App (.NET Framework)). Aby ułatwic sobie
                wyszukiwanie możemy użyć pola wyszukiwania lub skorzystać z
                filtrów dostępnych w trzech rozwijalnych listach. W przypadku
                aplikacji konsolowej moglibyśmy spokojnie użyć także wersji .NET
                Core. To nie ma w tym momencie żadnego znaczenia. Wyjaśnię to
                Państwu później. (proszę kliknąć na obrazek, aby powiększyć)
              </p>
              <br />
              <div className="center">
                <a href={vs_8} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_8}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <br />
              <br />
              <Alert variant="danger">
                <strong>UWAGA !!! </strong>Dla Użytkowników komputerów Apple,
                nie będzie opcji .NET Framework. Należy wybrać opcję .NET Core
              </Alert>
              <p style={{ textAlign: "justify" }} className="mt-5">
                W następnym oknie w polu Nazwa projektu wpisujemy nazwę naszej
                aplikacji (Czyli w przypadku quizu - Quiz). Pola Lokalizacja i
                Framework pozostawiamy bez zmian i wciskamy przycisk 'Utwórz'
                (Create). I już mamy utworzoną konsolową aplikację Quiz
                (oczywiście jeszcze nie gotową :)). W oknie kodu programu
                widzicie Państwo kod, który gratis daje Nam już Microsoft.
              </p>
              <p style={{ textAlign: "justify" }} className="mt-2">
                Teraz będzie Państwu łatwiej zrozumieć, dlaczego potrzebne jest
                rozwiązanie (kontener). My będziemy pisać Quiz w wersji
                konsolowej. Ale moglibyśmy też chcieć napisać go w wersji
                desktopowej. Wówczas w tym samym pojemniku (rozwiązaniu)
                ponownie kliknelibyśmy prawym klawiszem na rozwiązaniu => Dodaj
                => Nowy projekt ... i wybralibyśmy wersję desktopową (Windows
                Forms App lub WPF App). Gdy zażyczylibyśmy sobie dodatkowo Quizu
                jako aplikacja internetowa działająca w przeglądarce wówczas
                dodalibyśmy projekt typu ASP.NET Core Web Application lub Blazor
                App (bo to są aplikacje webowe). A jak chcielibyśmy oddzielić
                frontend naszych aplikacji od ich backendu (pamiętacie: backend
                jest ten sam dla wszystkich wersji !!!) wówczas dodalibysmy
                następny projekt - tym razem - typu Class Library. (To jest
                projekt który jako efekt końcowy nie buduje pliku typu exe lecz
                bibliotekę o rozszerzeniu .dll - którą później dołączylibysmy do
                naszych aplikacji, a w nich pisalibyśmy sam frontend. Cały
                backend napisalibyśmy w tej bibliotece.)
              </p>
              <p style={{ textAlign: "justify" }} className="mt-2">
                Gdy od razu zakładacie że wasza apliakacja będzie miała kilka
                wersji trzeba jedynie pamiętać o tym, żeby nadać im inne nazwy.
                Nie może być bowiem w tym samym katalogu (rozwiązaniu), kilka
                katalogów (projektów) o takich samych nazwach. Wówczas najlepiej
                dla aplikacji konsolowej nadać np nazwę: QuizConsole, dla
                desktopowej QuizDesktop, dla webowej QuizWeb a dla backendu
                (biblioteki) np: QuizBackend.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Proj;
