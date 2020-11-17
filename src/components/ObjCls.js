import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function ObjCls() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/objects">Obiekty (klasy)</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Obiekty (klasy)</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Moglibyście zapytać dlaczego ten typ programowania, którego
                podstaw się uczymy, nazywa się programowaniem obiektowym? Nazywa
                się tak właśnie dlatego, że operujemy w nim na obiektach.
                Wszystko w językach obiektowych jest obiektem. (w językach z
                grupy .NET (min. C#, Visual Basic, C++, F#, Typescript) -
                wszystko poza tak zwaną "przestrzenią nazw": (ang. namespace) -
                do tego później wrócimy). Jak poznacie kiedyś pojęcie
                dziedziczenia (niezwykle istotna rzecz w programowaniu
                obiektowym), to zobaczycie, że wszystkie obiekty dziedziczą
                (czyli wywodzą się) od klasy o nazwie ... Object. Niektóre
                obiekty dostajemy już od razu od Microsoftu uruchamiając Visual
                Studio, np: Program, czy Konsola. Jednak większość obiektów
                będziemy tworzyć sami (np. "Produkt" w aplikacji sklepu
                internetowego, czy "Pytanie", "Odpowiedź" czy "Koło Ratunkowe" w
                naszym quizie).
              </p>
              <p style={{ textAlign: "justify" }}>
                Co to jest obiekt w C#? My przyjeliśmy uproszczone założenie, że
                obiekt = klasa. I niech tak zostanie. Dla naszych potrzeb nauki
                programowania na tym etapie, takie uproszczenie wystarczy. (Są
                jeszcze inne obiekty oprócz klas jak: struktury, interfejsy,
                typy proste jak np. int, boolean, double itd ..., ale o tym
                opowiemy sobie już kiedy indziej). Dla nas narazie wystarczy, że
                jest to klasa. Po co tworzymy obiekty? Tworzymy je po to, aby
                móc napisać aplikację, która będzie zawierała logikę, dzięki
                której będzie działać tak jak to sobie zaplanowaliśmy.
              </p>
              <p style={{ textAlign: "justify" }}>
                Zapamiętajcie świętą zasadę programowania obiektowego.{" "}
                <strong>
                  Polega ono na odpowiednim manipulowaniu (zmianie ich wartości
                  bądź nie) właściwościami obiektów w określonych sytuacjach i w
                  określonym czasie oraz wywoływaniu ich metod w określonych
                  sytuacjach i w określonym czasie.
                </strong>{" "}
                I już. Ot cała filozofia programowania obiektowego. Weźmy
                pierwszy lepszy przykład, który już znamy. Co robi metoda
                WriteLine obiektu (klasy) Konsola? Wyświetla tekst na konsoli.
                Prawda? Co musimy zrobić, żeby wyświetlić tekst? Wywołać metodę
                WriteLine obiektu Konsola. Prawda? Czyli osiągneliśmy jakiś
                efekt, wywołując metodę obiektu. Jak chcemy uzyskać "bajer", że
                tekst na konsoli będzie czerwony zamiast białego, to co robimy:
                zmieniamy właściwość obiektu Konsola o nazwie ForegroundColor na
                kolor czerwony. Jedyne co będziemy pisać w naszej aplikacji Quiz
                to w odpowiednim momencie i określonych okolicznościach
                wywoływać odpowiednie metody (które sobie wcześniej utworzymy)
                obiektów które utworzymy oraz zmieniać właściwości tych
                obiektów. Jeżeli Uczestnik naszego quizu prawidłowo odpowie na
                pytanie, wówczas zmienimy właściwość instancji obiektu Gracz o
                nazwie Wygrana z np. 0 na 100 oraz jednocześnie zmienimy
                właściwości klasy Pytanie: Treść, Kategoria, Odpowiedzi nadając
                im nowe wartości i wyświetlimy użytkownikowi nowy egzemplarz
                pytania (o innej treści, innej treści odpowiedzi, i wyższej
                kategorii - już nie za 100 zł lecz za 500 zł).
              </p>
              <p style={{ textAlign: "justify" }}>
                Dodam jeszcze (jest to bardzo istotne), że w języku C# występuje
                pewna hierarchia. Na samej jej górze jest tak zwana przestrzeń
                nazw (namespace). Jest ich dużo. O kilku już niedługo się
                Państwo dowiecie. W niej znajdują się różne obiekty (np: klasy),
                dalej w obiektach znajdują się właściwości tego obiektu i jego
                metody. A w metodach znajdują się instrukcje. Instrukcje
                generalnie polegają albo na ustawieniu wartości zmiennej (np.
                jej nadaniu albo zmianie - np. wartości właściwości jakiegoś
                obiektu, albo wywołaniu metody). Wszystko jest jedną wielką
                hierarchią. Przekonacie się Państwo, że ma to sens i ułatwia
                zrozumienie programowania obiektowego.
              </p>
              <p style={{ textAlign: "justify" }}>
                Ostatnia rzecz w tym rodziale, to kwestia ilości obiektów.
                Wróćmy na moment do naszego Quizu. Sprawdziłem w Wikipedii, że w
                Milionarach (na wzór których piszemy Quiz) jest dwanaście pytań
                (w kategoriach: od 500 zł do 1 000 000 zł). Pamiętacie jak
                mówiłem, że dobrze by było, żebyśmy mieli przygotowane więcej
                niż jedno pytanie z danej kategorii. Po prostu, żeby nasz Quiz
                nie był nudny i za każdym razem, żeby nie wyświetlało się to
                samo pytanie, powinniśmy jakoś wybierać aktualne pytanie z
                naszego zbioru pytań. Przyjmijmy założenie, że przygotowaliśmy
                sobie po 10 pytań z każdej kategorii (oczywiście wraz z
                odpowiedziami). Teraz możecie zadać mi pytanie? Czy to oznacza,
                że będziemy musieli utworzyć 120 klas o nazwie "Pytanie"?
                <br /> <br /> Odpowiedź brzmi:{" "}
                <strong>OCZYWIŚCIE, ŻE NIE !!!</strong> Tworzymy tylko jedną
                klasę (obiekt) "Pytanie". Obiekt w programowaniu jest pewnym
                wzorcem.{" "}
                <strong>
                  Na podstawie tego wzorca tworzymy poszczególne egzemplarze
                  (instancje) tego obiektu
                </strong>{" "}
                - tyle ile w danym momencie potrzebujemy. Możemy powiedzieć, że
                będziemy mieli 120 egzemplarzy klasy "Pytanie". Fachowo
                powiedzielibyśmy, że w naszym programie będzię występowało 120
                instancji klasy (obiektu) "Pytanie". Jeżeli wywołujemy metodę
                jakiejś klasy, to tak naprawdę możemy ją jedynie wywołać na
                instancji tej klasy, a nie na niej samej. To bardzo ważne.
                Zwróćmy uwagę, że jak będziemy chcieli wyświetlić graczowi
                naszego Quizu pytanie, to najpierw wybierzemy (jak je
                wybierzemy, to wymyślimy na trzecich ćwiczeniach) jedno z pytań
                danej kategorii, a następnie je wyświetlimy. Ale przecież nie
                wywołamy metody WyswietlPytanie na samej klasie, tylko na tym
                konkretnym - tym wybranym - egzemplarzu naszej klasy Pytanie.
                Tak samo jest z właściwościami. Możemy sterować (nadawać
                wartości lub zmieniać wartości) jedynie właściwościami instancji
                klasy, a nie jej samej.
              </p>
              <p style={{ textAlign: "justify" }}>
                Jedynym wyjątkiem od tej reguły są tak zwane obiekty (klasy)
                statyczne. Oznaczamy je poprzez wpisanie przed nimi słowa
                kluczowego "static". Są to obiekty, które z natury występują
                tylko w jednym egzemplarzu. Przykładem takiej klasy jest znana
                już Wam klasa Console (Konsola). Tutaj Visual Studio nie pozwoli
                Nam na utworzenie egzemplarza tej klasy. Zatem jej metody (np.
                Beep() czy WriteLine() ) można wykonywać jedynie na niej samej.
                Czasami i my będziemy potrzebowali tworzyć klasy statyczne. Po
                co i dlaczego, to opowiemy sobie kiedy indziej.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default ObjCls;
