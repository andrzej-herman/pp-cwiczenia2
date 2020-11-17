import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import clonetor from "../img/clone-tortoise.jpg";
import cloneimg from "../img/clone.jpg";
import vs_6 from "../img/vs_6.jpg";
import vs_4 from "../img/vs_4.jpg";

function Clone() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/clone">Klonowanie repozytorium z serwera Github</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">
            Klonowanie repozytorium z serwera Github
          </h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Na początku musimy wybrać na swoim dysku miejsce gdzie będziemy
                trzymali swoje kody aplikacji. W tym celu musimy utworzyć
                katalog. To, gdzie go utworzymy nie ma oczywiście żadnego
                znaczenia. My wybraliśmy katolog o nazwie "SAN" umieszczony
                bezpośrednio na dysku C:. Po utworzeniu katalogu, otwieramy
                przeglądarkę internetową i logujemy się na swojego Githuba.
                Następnie przechodzimy na zakładkę "Repositories" i klikamy na
                nazwę repozytorium z naszym quizem, które utworzyliśmy
                wcześniej. Klikamy na zielony przycisk "Code" i kopiujemy do
                schowka adres naszego repozytorium.
              </p>
              <div className="center">
                <a href={cloneimg} target="_blank" rel="noopener noreferrer">
                  <img
                    className="software__clone__img"
                    src={cloneimg}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <h5 className="mb-3 mt-5" style={{ color: "#2e1ea2" }}>
                Klonowanie za pomocą wiersza poleceń, Power Shella lub Terminala
                w systemie macOS
              </h5>
              <p style={{ textAlign: "justify" }}>
                W systemie Windows uruchamiamy wiersz poleceń lub program Power
                Shell. Natomiast w macach i macbookach uruchamiamy Terminal. W
                oknie przechodzimy do katalogu, który przed chwilą utworzyliśmy.
                Możemy do tego wykorzystać komendę cd (change directory). W
                naszym przypadku przechodzimy do katalogu SAN. Wpisujemy zatem
                komendę: (nastepnie naciskamy Enter)
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  cd C:/SAN
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Gdy jesteśmy już we właściwym katalogu klonujemy repozytorium
                wpisując komendę git clone oraz adres repozytorium który przed
                momentem skopiowaliśmy z naszego Githuba.
              </p>
              <div>
                <code style={{ fontSize: 18, fontWeight: "bold" }}>
                  git clone WASZ_ADRES_REPOZYTORIUM
                </code>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-4">
                Po nacisnięciu klawisza Enter, repozytorium skopiuje się serwera
                Github do naszego katalogu na dysku. W okienku wyświetli się
                rezultat operacji klonowania.
              </p>
              <Alert variant="danger">
                <strong>UWAGA !!! </strong>Jeżeli wykonujemy operację klonowania
                po raz pierwszy na naszym komputerze, po naciśnięciu klawisza
                Enter - zanim pliki skopiują się na nasz dysk - system wyświetli
                okienko logowania do serwisu Github. Należy wówczas dokonać
                autoryzacji, wpisując swoją nazwę Użytkownika GitHub oraz hasło.
              </Alert>
              <h5 className="mb-3 mt-5" style={{ color: "#2e1ea2" }}>
                Klonowanie za pomocą programu Tortoise Git
              </h5>
              <p style={{ textAlign: "justify" }}>
                Jeżeli zainstalowalismy sobie program Tortoise Git, wówczas
                mozemy skorzystać z jego "dobrodziejstw" i za jego pomocą
                dokonać sklonowania naszego repozytorim na dysk. Po skopiowaniu
                do schowka ze strony Githuba naszego adresu repozytorium quizu
                wchodzimy za pomocą eksploratora plików do katalogu który
                utworzyliśmy (w naszym przypadku SAN) i naciskając w nim prawy
                klawisz myszy wybieramy opcję Git Clone.
              </p>
              <br />
              <div className="center">
                <a href={clonetor} target="_blank" rel="noopener noreferrer">
                  <img
                    className="software__clone__tortoise"
                    src={clonetor}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Tortoise Git automatycznie wpisze w pole adresu nasz adres
                repozytorium. Nam jedynie pozostaje nacisnąć przycisk "OK" i po
                chwili katalog z naszym repozytorium zostanie skopiowany do
                naszego katalogu SAN.
              </p>
              <h5 className="mb-3 mt-5" style={{ color: "#2e1ea2" }}>
                Klonowanie za pomocą Visual Studio
              </h5>
              <p style={{ textAlign: "justify" }}>
                O tej opcji nie mówiłem Państwu w ogóle na zajęciach. A myślę,
                że jest ona najłatwiejsza ze wszystkich i to z niej będziecie
                Państwo korzystać najcześciej. Nie wymaga ona bowiem używania
                wiersza poleceń, ani instalacji dodatkowego oprogramowania.
                Musimy mieć jedynie zainstalowanego Gita oraz Visual Studio.
                Okazuje się (ponieważ sprawdziłem), że w nowych wersjach VS (tej
                już którą mamy) Microsoft znacznie usprawnił obsługę Gita, a w
                szczególności proces klonowania istniejącego już na serwerze
                repozytorium.
              </p>
              <p style={{ textAlign: "justify" }}>
                W naszym katalogu z projektami (SAN) tworzymy nowy pusty katalog
                o identycznej nazwie jak nazwa naszego repozytorium na Githubie
                (W tym przykładzie quiz-2). Następnie uruchamiamy Visual Studio.
                Tym razem wybieramy opcję 'Kontynuuj bez kodu' (Continue without
                code).
              </p>
              <br />
              <div className="center">
                <a href={vs_4} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_4}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Następnie przechodzimy do zakładki Team Explorer (nie pamiętam
                dokładnie polskiej nazwy: ale będzie coś z zespołem :)). Jest to
                moduł w Visual Studio służący do obsługi Gita. Pamiętajmy, że
                musimy mieć połączenie z internetem. (VS bowiem połączy się z
                serwisem GitHub). Wybieramy opcję 'Clone'. Następnie w polu
                powyżej wklejamy adres naszego repo skopiowany ze strony
                Githuba. A w polu poniżej koniecznie wskazujemy ścieżkę do
                naszego nowego pustego katalogu (U mnie jest to C:/SAN/quiz-2).
                Możemy też użyć przycisku trzech kropek aby wybrać nasz katalog
                quiz-2. Teraz wciskamy przycisk 'Klonuj' (Clone).
                <br />
              </p>
              <Alert variant="danger">
                <strong>UWAGA !!! </strong>Jeżeli nie widzicie Państwo zakładki
                Team Explorer lub Solution Explorer (Ekspolorator rozwiązania)
                należy z menu Widok (View) włączyć widoczność tych zakładek.
              </Alert>
              <br />
              <div className="center">
                <a href={vs_6} target="_blank" rel="noopener noreferrer">
                  <img
                    className="software__clone__tortoise"
                    src={vs_6}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Po chwili, Visual Studio połączy się z naszym kontem na Githubie
                i sklonuje nasze repozytorium. (Katalog z naszym repozytorium
                zostanie skopiowany do naszego katalogu SAN). Możecie teraz
                państwo wejść sobie do katalogu SAN\quiz-2 (u Was oczywiście
                inna nazwa) i zobaczyć, że nie jest on już pusty (chyba, że na
                Githube utworzyliście puste repozytorium, natomiast napewno
                zawiera on ukryty katalog .git).
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Clone;
