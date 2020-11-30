import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function InstancesComponent() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/instances">Instancje klas (cykl życia)</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Instancje klas (cykl życia)</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Metody to - oprócz właściwości - druga składowa obiektów. Czy
                obiekty muszą mieć metody? Oczywiście, że nie. W świecie
                programowania zostało utworzonych wiele obiektów, które nie
                posiadają żadnych metod. Jedynie właściwości. Typowym przykładem
                takiego obiektu (klasy) jest klasa reprezentująca np: encję bazy
                danych. To czy w naszym utworzonym obiekcie napiszemy jakąś
                metodę, zależy tylko od tego jaki to jest obiekt i co chcemy
                osiągnąć tworząc go. Weźmy zatem jako przykład nasz ulubiony
                sklep internetowy. Klasa Produkt może zawierać jedynie
                właściwości: nazwę, cenę, rozmiar itd, itp .... Ale na przykład
                klasa Koszyk już niekoniecznie. Będzie ona zawierała właściwości
                takie jak np: ilość produktów w koszyku, łączna cena do zapłaty
                itd .. A jakie metody? Zastanówmy się chwilę. Po co jest w ogóle
                koszyk w sklepie? Po co jest koszyk w aplikacji internetowej
                typu np. Allegro? Jest po to, aby wkładać do niego produkty.
                Także po to, aby na końcu można było policzyć ile ma zapłacić
                Klient sklepu. Prawda? Pusty koszyk nic nam nie daje. Aby nie
                był pusty, muszą być w nim produkty. Aby były w nim produkty,
                trzeba je do niego włożyć. Naturalne zatem jest, że w klasie
                Koszyk powinna znaleźć się metoda w o nazwie np: DodajProdukt.
                Co ona będzie robiła? (pamiętajmy, że metoda musi "coś robić").
                Ano, będzie dodawać produkt. Mówięc językiem bardziej fachowym,
                będzie powiekszać listę produktów znajdujących się aktualnie w
                koszyku.
                <br /> <br />
                Wiemy także, że metoda - oprócz tego, że "coś robi" - może
                zwracać dodatkowo jakąś wartość. Może, ale nie musi. Gdy nie
                zwraca, wówczas mówimy, że jest typu <strong>void</strong>. Taką
                znaną już nam metodą jest metoda obiektu Console o nazwie
                WriteLine(string text). Wyświetla on tekst na konsoli, ale nic
                nie zwraca (jest typu void). I to wystarczy. Nie ma potrzeby,
                żeby ona zwracała jakąś wartość. Natomiast zastanówmy się kiedy
                jest potrzeba żeby metoda coś zwracała. Oczywiście wtedy, gdy
                wynika to z naszego wyobrażenia co tej metody. Jak potrzebujemy,
                żeby coś zwracała to piszemy ją tak, żeby zwracała. Załóżmy, że
                piszemy metodę , która ma dodawać do siebie dwie liczby
                całkowite x i y. Liczby te podajemy na wejściu (jako argumenty
                tej metody). W środku niej jest niezwykle skomplikowany
                algorytm: x + y. Skoro jej zadaniem jest dodawanie do siebie
                dwóch liczb, to czy nie przydałoby się, aby zwracała jakąś
                wartość? Co nam da to, że ona doda do siebie x i y i nie zwróci
                wyniku? Odpowiedź jest oczywista: nic nam to nie da. Powinna
                zwracać zatem wynik tego dodawania. tylko wtedy pisanie jej ma
                sens.
                <br />
                <br />
                Teraz pomyślmy jaką wartość może zwracać metoda. Może zwracać
                jakąś liczbę. Pewnie. Może zwracać tekst (string). Oczywiście.
                Taką metodą zwracającą tekst jest również znana nam metoda
                obiektu Console, ReadLine(). Zwraca ona tekst wpisany przez
                Użytkownika. OK. Idźmy dalej. Czy metoda może zwracać wartość
                typu bool (prawda lub fałsz)? Załóżmy, że piszemy dużą aplikację
                internetową - serwis transakcyjny jakiegoś banku (notabene, to
                był temat mojej pracy magisterskiej :)). Np. iPKO, czy mBanku.
                Programujemy moduł zajmujący się przelewami. Musimy napisać
                metodę, której zadaniem jest sprawdzenie, czy wpisany przez
                Klienta numer konta bankowego jest poprawny. W środku tej metody
                mamy algorytm sprawdzający cyfrę kontrolną numeru i na tej
                podstawie wiemy, czy numer konta jest poprawny czy nie. Jaki typ
                wartości powinna ta metoda zwrócić? Nas interesuje czy podany
                numer konta jest poprawny czy nie. Oczywiście, że prawda lub
                fałsz (czyli typ bool).
                <br />
                <br />
                Wiemy już, że metoda może zwracać wiele typów wartości. A czy
                może zwracać obiekt (klasę)? Wyobraźmy sobie, że gdzieś w naszej
                aplikacji Quiz mamy metodę jak:
                <br />
                <br />
                <code>
                  public Pytanie WylosujPytanie() <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// algorytm losujący pytanie
                  <br />
                  {"}"}
                </code>
                <br /> <br />
                Jest ona źle napisana. Brakuje w niej w środku co najmniej
                jednej podstawowej rzeczy. Zresztą Visual Studio pokazałoby Nam
                błąd. Ale to teraz dla Nas nieistotne. Ważne jest to co zwraca
                ta metoda. Jaką zwraca wartość. Skoro nazywa się WylosujPytanie,
                może powinna zwracać właśnie Pytanie?
                <strong>
                  {" "}
                  Dokładnie !!! Zwraca ona ten wylosowany egzemplarz obiektu
                  Pytanie. Jest to bardzo ważne. Metody mogą zwracać absolutnie
                  wszystko. To co chcemy !!!.
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default InstancesComponent;
