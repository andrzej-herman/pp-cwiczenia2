import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import vs_1 from "../img/vs_1.jpg";
import vs_2 from "../img/vs_2.jpg";
import vs_3 from "../img/vs_3.jpg";
import vs_4 from "../img/vs_4.jpg";
import folderquiz from "../img/folder_quiz.jpg";
import vs_5 from "../img/vs_5.jpg";

function Sol() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/solution">Tworzenie rozwiązania w Visual Studio</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">
            Tworzenie rozwiązania w Visual Studio
          </h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Jak wspomniałem Państwu na zajęciach tworzenie pustego
                rozwiązania nie jest wcale konieczne. Jeżeli nie chcemy trzymać
                kodu na serwerze Githuba, to nie ma takiej potrzeby. Otwieramy
                wówczas VS i po prostu wybieramy opcję tworzenia nowego
                projektu, nadajemy mu nazwę i wciskamy przycisk 'Utwórz'.
                (Notabene VS i tak utworzy automatycznie rozwiązanie - czyli
                plik z rozszerzeniem .sln - aby była możliwość dodania do tego
                pojemnika ewentualnie później innych projektów aplikacji).
                <br /> <br />
                Jeżeli jednak chcemy trzymać kod na Githubie utworzenie pustego
                rozwiązania jest jak najbardziej wskazane. Pozwala to utrzymywać
                porządek w katalogach z naszymi plikami programów na dysku i -
                co ważniejsze - pozwala odzwierciedlić strukturę katalogów na
                naszym Githubie. Omówię tutaj dwie metody. Pierwsza to ta, z
                której korzystaliśmy na zajęciach - czyli tworzenie rozwiązania
                na podstawie istniejącego już repozytorium na serwerze Github.
                Natomiast druga to opcja, gdy nie utworzyliśmy jeszcze repo na
                serwerze Githuba i tworzymy je najpierw u siebie na dysku, a
                dopiero potem wysyłamy ("PUSH") na serwer.
              </p>
              <h5 className="mb-3 mt-5" style={{ color: "#2e1ea2" }}>
                Tworzenie rozwiązania do istniejącego repozytorium na serwerze
                Githuba
              </h5>
              <p style={{ textAlign: "justify" }}>
                Najpierw oczywiście klonujemy repozytorium do naszego katalogu w
                którym trzymamy wszystkie nasze repozytoria. (W naszym przypadku
                SAN). Krok ten omówiłem w poprzednim rozdziale. Musimy pamiętać
                jak nazywa się to repozytorium. W tym przykładzie to quiz-0000.
                (kliknij aby powiększyć)
              </p>
              <br />
              <div className="center">
                <a href={folderquiz} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={folderquiz}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Katalog quiz-0000 zawiera pliki .gitignore oraz README.md. (oraz
                ukryty katalog .git) Natomiast równie dobrze mógłby nic nie
                zawierać (oprócz ukrytego katalogu .git => on musi być). To nie
                ma znaczenia. W naszym przypadku zawiera, ponieważ podczas
                tworzenia repozytorium na Githubie zażyczylismy sobie
                (zaznaczając ptaszki 'add README' oraz 'add .gitignore') aby te
                pliki już były na początku. <br />
                README.md jest po prostu plikiem tekstowym zawierającym
                informacje dotyczące naszego repozytorium. Możemy w nim opisać
                co robi nasza aplikacja, jak ją zainstalować itd... . Jest on
                całkowicie opcjonalny. Plik .gitignore powinien być (ale też
                niekoniecznie), ponieważ zapisane są w nim informacje, czego git
                ma nie pushować na serwer. Jak dowiecie się w trakcie naszych
                dalszych ćwiczeń, pewnych rzeczy nie wysyłamy na serwer Githuba.
                Nie będę teraz o tym pisał, bo na tym etapie ta wiedza jest Nam
                jeszcze nie potrzebna.
              </p>
              <p style={{ textAlign: "justify" }}>
                Teraz uruchamiamy Visual Studio. Z prawej strony okna wybieramy
                opcję "Utwórz nowy projekt" (Create new project).
              </p>
              <br />
              <div className="center">
                <a href={vs_1} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_1}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Na nastepnym ekranie z listy wuboru po prawej stronie
                wyszukujemy opcję "Puste rozwiązanie" (Blank solution). Możemy
                sobie ułatwić wyszukiwanie wpisując w pole szukania "roz" (w
                przypadku wersji polskiej) lub "sol" (w przypadku wersji
                angielskiej) lub wybrać z pierwszej od prawej listy rozwijalnej
                typ Inne (Other).
              </p>
              <br />
              <div className="center">
                <a href={vs_2} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_2}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                W ostatnim oknie na ekranie konfiguracji projektu musimy
                koniecznie w polu nazwa rozwiązania (Solution name) wpisać nazwę
                naszego repozytorium. (W tym przykładzie to quiz-0000).
                Pamiętajmy: nazwa musi być identyczna jak nazwa katalogu z
                repozytorium. W drugim polu Lokalizacja (Location) musimy
                koniecznie wskazać nasz katalog z projektami. (W naszym
                przypadku to SAN). Możemy skorzystać z trzech kropek i wówczas
                wybrać z dysku właściwy katalog. Pozostaje już tylko wcisnąć
                przycisk 'Utwórz' (Create) i mamy utworzone rozwiązanie dla
                naszego repozytorium. Pamiętajmy, że jest to pojemnik na nasze
                projekty. W nim będziemy umieszczać wszystkie aplikacje bądź
                biblioteki z których składa się nasz projekt Quizu.
              </p>
              <br />
              <div className="center">
                <a href={vs_3} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_3}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Jeżeli poprawnie wykonaliśmy wszystkie kroki, to w naszym
                katalogu z repozytorium (W moim przykładzie quiz-0000) zostanie
                utworzony trzeci plik (oprócz już wcześniej istniejących
                .gitignore i README.md) o nazwie quiz-0000.sln
              </p>

              <h5 className="mb-3 mt-5" style={{ color: "#2e1ea2" }}>
                Tworzenie repozytorium i rozwiązania najpierw na dysku komputera
              </h5>
              <p style={{ textAlign: "justify" }}>
                Tej opcji nie omawialiśmy szczegółowo na zajęciach. Wspomniałem
                tylko o niej. Stosujemy ja wówczas, gdy nie utworzyliśmy
                wcześniej repozytorium na Githubie. Będziemy tworzyć je najpierw
                lokalnie na naszym dysku. I dopiero potem utworzymy w nim nasze
                rozwiązanie. W tym przypadku postępujemy trochę inaczej. W
                naszym katalogu z repozytoriami (SAN) tworzymy nowy pusty
                katalog o nazwie takiej, jaką chcemy żeby miało nasze
                repozytorium (nazwa to będzie potem również nazwą naszego repo
                na Githubie). W moim przykładzie to quiz-7777. Następnie
                uruchamiamy Visual Studio. Tym razem jednak wybieramy opcję:
                'Kontynuuj bez kodu' (Continue without code)
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
                moduł w Visual Studio służący do obsługi Gita. Wybieramy opcję
                'New', następnie koniecznie w polu wpisujemy ścieżkę do naszego
                nowo utworzonego katalogu w katalogu SAN (Czyli w tym
                przykładzie quiz-7777). Możemy tez użyć przycisku trzech kropek
                aby wybrać nasz katalog quiz-7777. Teraz wciskamy przycisk
                'Utwórz' (Create).
                <br />
              </p>
              <Alert variant="danger">
                <strong>UWAGA !!! </strong>Jeżeli nie widzicie Państwo zakładki
                Team Explorer lub Solution Explorer (Ekspolorator rozwiązania)
                należy z menu Widok (View) włączyć widoczność tych zakładek.
              </Alert>
              <br />
              <div className="center">
                <a href={vs_5} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__folderquiz"
                    src={vs_5}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
              <p style={{ textAlign: "justify" }} className="mt-5">
                Teraz mogą państwo zobaczyć, że w katalogu quiz-7777 (u Państwa
                to będzie zapewnie oczywiście inna nazwa) powstały dwa pliki:
                .gitignore oraz .gitattributes. Oba te pliki nie są obowiązkowe,
                ale .gitignore jest wskazany. (Visual Studio nie tworzy
                domyślnie pliku z informacjami o repozytorium README.md - więc
                dlatego go nie ma, ale to w niczym nie przeszkadza). Dodatkowo
                powstał ukryty katalog .git. Visual Studio utworzył repozytorium
                Gita. Moglibyśmy je teraz za pomocą komendy push wysłać do
                serwisu Github. Teraz pozostaje jedynie utworzyć rozwiązanie,
                analogicznie jak w poprzedniej metodzie. Czyli wybieramy opcję
                Utwórz projekt => Puste rozwiązanie => W polu lokalizacja
                wskazujemy katalog SAN, a w polu Nazwa rozwiązania wpisujmy
                nazwę naszego repozytorium (quiz-7777). Naciskamy Create i już.
                <br />
              </p>

              <p style={{ textAlign: "justify" }} className="mt-4">
                Jak Państwo widzą jedyną różnicą w tych dwóch metodach jest to,
                iż w pierwszej z nich tworzyliśmy rozwiązanie w katalogu który
                powstał w wyniku zklonowania go z serwisu Github. Natomiast w
                drugiej metodzie stworzyliśmy rozwiązanie w katalogu, który
                najpierw sami utworzyliśmy, a następnie utworzyliśmy w nim
                lokalne repozytorium Gita. Proszę pamiętać, że dopóki nie
                wyślemy, to nie istnieje jeszcze ono na serwerze Githuba.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Sol;
