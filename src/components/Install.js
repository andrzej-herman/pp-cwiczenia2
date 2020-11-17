import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Tabs, Tab, Breadcrumb, Alert } from "react-bootstrap";
import moduly from "../img/moduly.jpg";
import tg from "../img/tg.jpg";

import { Link } from "react-router-dom";

function Install() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/install">Instalacja oprogramowania</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Instalacja oprogramowania</h3>
        </Col>
      </Row>

      <Row>
        <Row className="software__container">
          <Col>
            <div className="software__desc">
              <Tabs defaultActiveKey="vs" id="uncontrolled-tab-example">
                <Tab
                  eventKey="vs"
                  title="Visual Studio Community 2019"
                  className="tab"
                >
                  <div className="software__tab">
                    <p className="mb-4">
                      Pobieramy instalator. Uruchamiamy go. Gdy ukaże się ekran
                      z wyborem modułów do zainstalowania wybieramy z nich
                      cztery opcje - więcej Nam teraz nie potrzeba. Wybór opcji
                      przedstawia poniższy printscreen (proszę kliknąć w
                      obrazek, aby go powiększyć).
                    </p>
                    <div className="center">
                      <a
                        href={moduly}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="software__moduly"
                          src={moduly}
                          alt="moduły visual studio"
                        />
                      </a>
                    </div>
                    <p className="mt-5">
                      Jeżeli ktoś z Państwa życzy sobie mieć angielską wersję,
                      wówczas należy wejść w zakładkę 'Pakiety językowe' i
                      odznaczyć polski, a zaznaczyć angielski. Po naciśnięciu
                      przycisku 'Zainstaluj' proszę się uzbroić w cierpliwość.
                      Pobiera się dosyć duża ilość danych. W przypadku wolnego
                      połączenia internetowego instalacja może zająć nawet
                      kilkadziesiąt minut.
                    </p>
                    <Alert variant="danger">
                      <strong>UWAGA !!! </strong>Do instalacji Visual Studio
                      Community niezbędne jest połączenie internetowe. Potrzebne
                      jest także minimum 10 GB wolnego miejsca na dysku
                      systemowym.
                    </Alert>
                  </div>
                </Tab>
                <Tab
                  eventKey="mac"
                  title="Visual Studio for Mac"
                  className="tab"
                >
                  <div className="software__tab">
                    <p className="mb-4">
                      Pobieramy instalator. Jest to plik w formacie .dmg czyli
                      obraz dysku dla systemu macOS. Po pobraniu kiliamy na
                      pobrany plik. Wówczas macOS zamontuje ten obraz dysku oraz
                      poprosi o przesunięcie instalatora do folderu aplilacji.
                      Teraz instalacja rozpocznie się automatycznie. Jest to
                      typowy proces. Klikamy cały czas dalej. Istnieje też
                      mozliwość wyboru wersji językowej programu.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="git" title="Git" className="tab">
                  <div className="software__tab">
                    <p className="mb-4">
                      Pobieramy instalator. Nastepnie uruchamiamy plik
                      instalacyjny. Proces jest w pełni automatyczny. Jest wiele
                      okien "po drodze", ale cały czas wybieramy "Next". Po paru
                      chwilach proces zakończy się.
                    </p>
                    <p className="mb-4">
                      Po zakończeniu procesu instalacji musimy upewnić się, że
                      Git został poprawnie zainstalowany oraz zarejestrowany w
                      systemie. Dotyczy to zarówno systemu Windows jak i macOS.
                      W tym celu uruchamiamy:
                      <ul>
                        <li>
                          - dla systemu Windows => wiersz polecenia lub Power
                          Shell
                        </li>
                        <li>- dla systemu macOS => Terminal</li>
                      </ul>
                      W oknie wpisujemy komendę:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        git --version
                      </code>
                    </div>
                    <p className="mt-4">
                      Jeżeli wszystko jest ok, w oknie wyświetli się numer
                      wersji Gita, np:
                    </p>
                    <div>
                      <code style={{ fontSize: 18, fontWeight: "bold" }}>
                        git version 2.25.1.windows.1
                      </code>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="tor" title="Tortoise Git" className="tab">
                  <div className="software__tab">
                    <Alert variant="danger">
                      <strong>UWAGA !!! </strong>Przed instalacją Tortoise Git w
                      systemie musi już być zainstalowany Git. Jest to wersja
                      tylko dla systemu Windows.
                    </Alert>
                    <p className="mb-4">
                      Pobieramy instalator. Uruchamiamy go. Proces instalacji
                      przebiega standardowo. W pewnym momencie instalator będzie
                      potrzebował scieżki do pliku Git.exe w naszym systemie
                      operacyjnym. Jeżeli zainstalowaliśmy wcześniej Gita ze
                      standardowymi ustawieniami, to Tortoise Git znajdzie sobie
                      sam tę ścieżkę. Domyślnie jest to:{" "}
                      <span style={{ color: "#FF0000" }}>
                        {"C:\\Program Files\\Git\\bin\\git.exe"}
                      </span>{" "}
                      Jeżeli jednak zmienialiśmy lokalizację podczas instalacji
                      Gita to bedziemy musieli wskazać teraz samodzielnie gdzie
                      znajduje się u Nas plik git.exe.
                    </p>
                    <p className="mt-2">
                      Po zakończenu instalacji instalator poprosi Nas o ponownie
                      uruchomienie systemu Windows. Po restarcie w menu
                      kontekstowym systemu Windows (czyli po naciśnięciu prawego
                      klawisza myszy) pojawi się kilka nowych pozycji do obsługi
                      repozytoriów Gita. Przedstawia to poniższy printscreen.
                      (proszę kliknąć w obrazek, aby go powiększyć)
                    </p>
                    <div className="center">
                      <a href={tg} target="_blank" rel="noopener noreferrer">
                        <img
                          className="software__tg"
                          src={tg}
                          alt="moduły visual studio"
                        />
                      </a>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Install;
