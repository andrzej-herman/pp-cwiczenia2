import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

function Loop() {
  const showLoop = () => {
    const table = [
      { id: 0, text: "pierwszy" },
      { id: 1, text: "drugi" },
      { id: 2, text: "trzeci" },
    ];
    table.forEach((e) => {
      alert(
        `Warunek jest prawdziwy: ${e.id} < 3. Wykonuje się ${e.text} przebieg pętli. Wartość licznika indeks wynosi: ${e.id}. Dopiero teraz jest zwiększana o jeden.`
      );
    });
  };

  const showLoopEach = () => {
    const table = [
      { id: 12, text: "pierwszy" },
      { id: 27, text: "drugi" },
      { id: 49, text: "trzeci" },
      { id: 91, text: "czwarty" },
    ];
    table.forEach((e) => {
      alert(`Wyświetlam ${e.text} element listy Liczby: ${e.id}`);
    });
  };

  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/loop">Pętla for i foreach</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Pętla for i foreach</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Pętle to jedne z najczęściej wykorzystywanych konstrukcji we
                wszystkich językach programowania. Pozwalają na wykonanie
                określonaego fragmentu kodu aplikacji wiele razy - tyle razy ile
                jest to potrzebne w kontekście logiki naszego programu. Poza tym
                pozwalają uniknąć tak zwanej: nadmiarowości kodu - czyli kodu
                napisanego niepotrzebnie, powtarzającego się niemal w
                niezmienionej postaci. Zapewnia to większą czytelność pisanych
                aplikacji. W poprzednim rodziale napisałem, że większość
                programów w zasadzie ogranicza się do szeroko rozumianych
                operacji na zestawie danych (kolekcjach danych). I właśnie pętle
                pozwalają nam na manipulowanie poszczególnymi elementami danej
                kolekcji. Pamiętacie, w naszym Quizie za pomocą pętli
                wyświetlamy wszystkie cztery odpowiedzi pytania - czyli działamy
                na poszczególnych elementach kolekcji odpowiedzi danego pytania.
                Język C# oferuje kilka rodzajów pętli. Dwa najpopularniejsze z
                nich poznamy w tym rozdziale.
              </p>
              <h5 style={{ marginTop: 40, marginBottom: 30 }}>
                Pętla <strong>for</strong>
              </h5>
              <p style={{ textAlign: "justify" }}>
                Pętla for pozwala na wielokrotne wykonanie kodu zawartego w
                ciele pętli (między nawiasami klamrowymi). Wykonanie tego kodu
                (czyli to, czy wogóle pętla zostanie wykonana choćby raz) jest
                uzależnione od wartości licznika pętli, ponieważ warunkiem tego
                wykonania jest prawdziwość warunku dotyczącego licznika. Licznik
                pętli for jest liczbą całkowitą (zmienną typu integer) i jest
                inkrementowany o 1 (jego wartość jest zwiększana o jeden) po
                każdym przebiegu pętli. Standardowo wartość początkowa licznika
                wynosi zero. Typowa pętla for wygląda nastepująco:
              </p>
              <code>
                {`for (int licznik = 0; licznik < iloscZalozonychWykonanPetli; licznik++)`}{" "}
                <br />
                {"{"} <br />
                &nbsp;&nbsp;&nbsp;// kod który się wykona przy każdym przebiegu
                pętli
                <br />
                {"}"}
              </code>
              <p style={{ textAlign: "justify", marginTop: 30 }}>
                Przed rozpoczęciem działania pętli (wykonania kodu zawartego w
                jej środku) sprawdzana jest wartość logiczna dotycząca warunku.
                Jeżeli wartość licznika spełnia warunek (w powyższym przypadku
                jest mniejsza od wartości zmiennej iloscZalozonychWykonanPetli)
                wówczas dojedzie do wykonania kodu w pętli. Nastepnie wartość
                licznika zostanie podniesiona o jeden - czyli będzie wynosiła 1,
                ponownie zostaje sprawdzona prawdziwość warunku i jeżeli jest
                spełniony, to kod w pętli wykona się drugi raz. I tak w kółko -
                dopóki wartość logiczna warunku licznika przyjmie wartość false.
                Wówczas już kod w pętli nie zostanie wykonany. Poniżej napisałem
                pętlę której kod w środku wykona się dokładnie 3 razy (pętla
                będzie miała 3 przebiegi):
              </p>
              <code>
                {`for (int indeks = 0; indeks < 3; indeks++)`} <br />
                {"{"} <br />
                &nbsp;&nbsp;&nbsp;// Wyświetl okienko przeglądarki
                <br />
                {"}"}
              </code>
              <p
                style={{
                  textAlign: "justify",
                  marginTop: 30,
                  marginBottom: 20,
                }}
              >
                Poniżej możecie Państwo zobaczyć działanie jej w rzeczywistości,
                naciskając przycisk:.
              </p>
              <Button variant="primary" onClick={showLoop}>
                Pokaż działanie powyższej pętli <strong>for</strong>
              </Button>
              <p style={{ textAlign: "justify", marginTop: 30 }}>
                Czwarty raz pętla się nie wykona ponieważ nie spełniony jest
                warunek dotczący licznika. Po trzecim wykonaniu pętli jego
                wartość została podniesiona o 1, tak więc wynosi teraz 3, a 3
                nie jest mniejsze od 3.
              </p>
              <Alert variant="info">
                <strong>UWAGA </strong> Zapis: indeks++, oznacza dokładnie to
                samo co zapis: indeks = indeks + 1
              </Alert>
              <h5 style={{ marginTop: 40, marginBottom: 30 }}>
                Pętla <strong>foreach</strong>
              </h5>
              <p style={{ textAlign: "justify" }}>
                Pętla foreach jest dedykowana specjalnie dla kolekcji (np:
                listy). Pozwala wykonać kod tyle razy ile elementów ma kolekcja
                którą podamy w nawiasach okrągłych jako parametr pętli. W
                związku z tym nie potrzebuje licznika i jest dużo prostsza w
                zastosowaniu. W jej warunku iterujemy po wszystkich elementach
                kolekcji którą wskazujemy za pomocą słowa kluczowego{" "}
                <strong>in</strong>. Przykład poniżej:
              </p>
              <code>
                {`List<int> Liczby = new List<int> { 12, 27, 49, 91 };`} <br />
                <br />
                {`foreach (int liczba in Liczby)`} <br />
                {"{"} <br />
                &nbsp;&nbsp;&nbsp;// wyswietl okienko z każdym elementem listy
                Liczby
                <br />
                {"}"}
              </code>

              <p
                style={{
                  textAlign: "justify",
                  marginTop: 30,
                  marginBottom: 20,
                }}
              >
                Poniżej możecie Państwo zobaczyć działanie jej w rzeczywistości,
                naciskając przycisk:.
              </p>
              <Button variant="success" onClick={showLoopEach}>
                Pokaż działanie powyższej pętli <strong>foreach</strong>
              </Button>
              <p style={{ textAlign: "justify", marginTop: 30 }}>
                Pętla wykona się dokładnie 4 razy, ponieważ tyle elementów
                zawiera lista Liczby.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Loop;
