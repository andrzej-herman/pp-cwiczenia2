import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function List() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/list">Lista - potężne narzędzie C#</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Lista - potężne narzędzie C#</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                W świecie programowania, większość pisanych aplikacji w sumie
                ogranicza się do wykonywania różnorodnych operacji na zbiorach
                danych. Na przykład internetowy serwis Allegro - to od strony
                programisty - operacje na zbiorach: produktów, kupujących,
                sprzedających, zbiorach form płatności itd, itp ... Te dane są
                przeważnie przetrzymywane w bazach danych różnego typu (np:
                relacyjne bazy danych SQL, bazy danych noSQL, tekstowe bazy
                danych: np: Goole Firestore, czy też bazy danych json np:
                MongoDB). W momencie gdy programista musi użyć te dane, np; w
                celu wyświetlania listy produktów na stronie, czy wyświetlenia
                danych konta Użytkownika pobiera sobie je z bazy danych i
                umieszcza w pamięci operacyjnej w konstrukcjach specjalnie
                przeznaczonych do tego celu, aby mógł je wykorzystać w swojej
                aplikacji. W programowaniu takie konstrukcje mają ogólną nazwę
                kolekcji.
              </p>
              <p>
                Jest wiele konstrukcji programistycznych reprezentujących
                kolekcje - czyli zbiór elementów. C# oferuje Nam: tablice,
                listy, słowniki, tzw: tuple, tzw: kolekcje obserwacyjne, tzw:
                haszsety, czy tzw: dbsety. Wszystkie z nich mają swoje
                szczególne zastosowania i programista może sobie wybrać w w
                jakim z nich będzie przechowywał elementy - w zależności czego
                potrzebuje. My - na początku naszej nauki programowania -
                skoncentrujemy się na jednej z najczęściej używanych w języku C#
                typów kolekcji: liście. Lista jest to klasa. Deklarujemy ją
                poprzez użycie słowa kluczowego <strong>List</strong> oraz zaraz
                po nim (bez spacji) w nawiasach ostrych musimy zadeklarować typ
                elementów jaki lista będzie przechowywać np:
              </p>

              <code>
                {`public List<string> Cytaty`} {`    `} // przechowuje cytaty
                czyli zmienne typu string
              </code>
              <br />
              <code>
                {`public List<bool> ListaPozwolen`} {`    `} // przechowuje
                zmienne typu bool (prawda lub fałsz)
              </code>
              <br />
              <code>
                {`public List<int> Losowania`} {`    `} // przechowuje numery
                wylosowane w poszczególnych losowaniach lotto
              </code>
              <br />
              <code>
                {`public List<null> Nulle`} {`    `} // przechowuje same nulle -
                bez sensu ale też może przechowywać
              </code>
              <br />
              <code>
                {`public List<Produkt> Produkty`} {`    `} // przechowuje listę
                produktów
              </code>
              <br />
              <code>
                {`public List<List<Samochod>> ListaTypowSamochodow`} {`    `} //
                przechowuje listę list samochodów
              </code>
              <p style={{ marginTop: 20 }}>
                Kilka ważnych kwestii. Po pierwsze - jak widzimy - lista może
                przechowywać cokolwiek chcemy, to znaczy dowolny obiekt. Może
                nawet przechowywać inne listy (czyli listy mogą być
                zagnieżdżone). Po drugie: lista jest kolekcją dynamiczną, to
                znaczy, że nie musimy deklarować ile będzie przechowywać
                elementów i co więcej liczba jej elementów może ulegać zmianie w
                czasie. Po trzecie - ponieważ lista jest klasą, to (o ile nie
                korzystamy z innych narzędzi tworzących listę) musimy jej
                egzemlparz powołać do życia poprzez Użycie słówa{" "}
                <strong>new</strong>. Przed tym jest nullem:
              </p>
              <code>
                public class Sklep <br />
                {"{"} <br />
                &nbsp;&nbsp;&nbsp;public Sklep()
                <br />
                &nbsp;&nbsp;&nbsp;{"{"}
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {`ListaProduktowSklepu = new List<Produkt>();`}
                <br />
                &nbsp;&nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;{" "}
                {`public List<Produkt> ListaProduktowSklepu { get; set; }`}
                <br />
                {"}"}
              </code>
              <p style={{ marginTop: 20, marginBottom: 30 }}>
                Proszę zwrócić uwagę, że gdybyśmy w konstruktorze klasy Sklep
                nie zainicjalizowali nowego egzemplarza listy (innymi słowy: nie
                utworzyli nowej pustej listy), to właściwość
                {` List<Produkt> ListaProduktowSklepu`} była by nullem i nie
                moglibyśmy korzystać z żadnej jej właściwości ani metody.
              </p>
              <p style={{ marginTop: 20, marginBottom: 30 }}>
                Aby "wyłowić" z listy jej konkretny element są w tym celu
                przygotowane specjalne metody. Natomiast w najprostszy sposób
                możemy to zrobić poprzez wskazanie indeksu elementu w nawiasie
                kwadratowym. Należy jedynie pamiętać, że liczenie zaczynamy od
                zera:
              </p>
              <code>{` sklep.ListaProduktowSklepu[0]; // pierwszy element na liście produktów sklepu`}</code>
              <br />
              <code>{` sklep.ListaProduktowSklepu[87]; // osiemdziesiąty ósmy produkt na liście produktów sklepu`}</code>
              <br />
              <br />
              <h5>Właściwości i metody klasy List</h5>
              <p style={{ marginTop: 20, marginBottom: 30 }}>
                Lista posiada wiele wbudowanych metod oraz właściwości. Nie
                poznamy ich wszystkich na tym semestrze, ponieważ jest ich zbyt
                wiele. natomiast kilka z nich wykorzystamy w naszym Quizie i z
                pewnością przydadzą się Wam podczas pisania aplikacji na
                zaliczenie. Wykorzystalismy już właściwość{" "}
                <strong>Count</strong>. To właściwość klasy lista, która
                reprezentuje ilość jej elementów. Gdybyśmy chcieli dowiedzieć
                się ile elementów jest na liście produktów sklepu wystarczyłoby
                napisać:
              </p>
              <code>{` Sklep odziezowy = new Sklep(); `}</code>
              <br />
              <code>{` int ileElementow = sklep.ListaProduktowSklepu.Count; `}</code>
              <p style={{ marginTop: 20, marginBottom: 30 }}>
                W zmiennej o nazwie ileElementow przechowalibyśmy liczbę
                oznaczającą ile produktów posiada dany sklep. Oczywiście w tym
                przypadku wartość byłaby równa zero, ponieważ nie dodaliśmy do
                listy jeszcze żądnych elementów. Aby to zrobić należy wywołać
                metodę klasy Lista oa nazwie <strong>Add</strong>:
              </p>
              <code>{` sklep.ListaProduktowSklepu.Add(new Produkt("odzież")); `}</code>
              <p style={{ marginTop: 20, marginBottom: 30 }}>
                Pamiętajmy, że do listy możemy dodać jedynie element który
                odpowiada typowi, jaki ta lista ma przechowywać. Nie możemy
                dodać do naszej listy produktów sklepu np: liczby 10, lub napisu
                "odzież." - ponieważ lista ta przechowuje jedynie obiekty klasy
                produkt.
              </p>
              <code>{` sklep.ListaProduktowSklepu.Add(new Produkt("odzież")); // OK`}</code>
              <br />
              <br />
              <code>{` List<int> Liczby = new List<int>; `}</code>
              <br />
              <code>{` Liczby.Add(12); // OK `}</code>
              <br />
              <code>{` Liczby.Add(3.14); // Błąd => 3.14 nie jest liczbą całkowitą `}</code>
              <br />
              <code>{` Liczby.Add("super"); // Błąd `}</code>
              <br />
              <br />
              <code>{` List<string> Imiona = new List<string>; `}</code>
              <br />
              <code>{` Imiona.Add(false); // Błąd `}</code>
              <br />
              <code>{` Imiona.Add("Tomasz"); // OK `}</code>
              <br />
              <br />
              <code>{` Sklep odziezowy = new Sklep(); `}</code>
              <br />
              <code>{` List<Sklep> SklepyWOkolicy = new List<Sklep>; `}</code>
              <br />
              <code>{` SklepyWOkolicy.Add("odzieżowy"); // Błąd => bo "odzieżowy" to string`}</code>
              <br />
              <code>{` SklepyWOkolicy.Add(odziezowy); // OK => bo odziezowy to obiekt typu Sklep; `}</code>
              <br />
              <p style={{ marginTop: 20, marginBottom: 30 }}>
                Na następnych zajęciach poznamy jeszcze inne bardzo przydatne
                metody, które oferuje Nam lista. np:
              </p>
              <ul>
                <li>
                  OrderBy() - sortuje elementy listy według zadanego kryterium w
                  porządku rosnącym
                </li>
                <li>
                  OrderByDescending() - sortuje elementy listy według zadanego
                  kryterium w porządku malejącym
                </li>
                <li>
                  First() - Wybiera z listy jeden (pierwszy) element o
                  określonych właściwościach
                </li>
                <li>
                  Where() - Wybiera z listy tylko elementy spełniające określone
                  kryteria (tej metody użyjemy aby wybrać z wszystkich pytań
                  naszej Bazy Pytań Quizu tylko pytania z określonej kategorii)
                </li>
                <li>
                  Sum() - Sumuje wskazane właściwości listy obiektów. Np. w
                  programie KasaSklepowa możemy jedną linijką kodu zsumować
                  wszystkie ceny Produktów na kasie i mamy gotową sumę do
                  zapłacenia przez Klienta (bez użycia pętli)
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default List;
