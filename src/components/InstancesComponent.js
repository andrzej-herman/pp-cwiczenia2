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
          <Link to="/instances">
            Instancje (egzemplarze) klasy - cykl życia
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">
            Instancje (egzemplarze) klasy - cykl życia
          </h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Z rodziału 7 o obiektach (klasach) oraz z ćwiczeń, wiecie już,
                że klasa jest pewnym wirtualnym wzorcem obiektu. Tworzymy ją,
                nadajemy jej odpowiednie właściwości, aby stanowiła niejako
                wzorzec dla egzemplarzy tej klasy, które będą "żyły" w pisanej
                przez Nas aplikacji. W naszym programie nie występują same klasy
                jako takie, tylko ich poszczzególne instancje (egzemplarze)
                zbudowane na wzorcu klasy, którą reprezentują. Jeżeli piszemy
                internetowy komis samochodowy, z pewnością napiszemy sobie klasę
                o nazwie Samochod. Będzie ona posiadała szereg różnych
                właściwości, takich jak marka, model, rok produkcji,
                wyposażenie, cena ... itd. itp. Teraz wyobraźmy sobie, że
                skończyliśmy pisać naszą apkę internetową i opublikowaliśmy
                stronę "Internetowy komis samochodowy" w sieci.
                <br /> <br />
                Pierwsza osoba, która wejdzie na naszą stronę zobaczy, że nie ma
                jeszcze żadnych samochodów do kupienia. Oczywicie, nie ma bo
                nikt jeszcze nie dodał swojego samochodu do sprzedaży. My nie
                sprzedajemy swoich samochodów na naszej stronie. Ma ona być
                jedynie pośrednikiem między sprzedającymi a kupującymi. Są na
                niej opcje: sprzedaj swój samochód oraz kup samochód. Teraz
                następna osoba odwiedza naszą stronę. Mamy szczęście, akurat ona
                nie jest zainteresowana kupnem samochodu, a chciałaby go
                sprzedać. Widzi więc przycisk, sprzedaj swój samochód
                (oczywiście przycisk, który sami wcześniej umieściliśmy w naszej
                aplikacji). Naciska go i jego oczom ukazuje się formularz w
                którego pola może wpisać cechy charakterystyczne pojazdu który
                chce sprzedać czyli ... marka, model, rok produkcji, wyposażenie
                oraz oczywiście cenę jaką chciałby uzyskać.
                <br />
                <br />
                Zauważmy teraz fakt, że w kodzie naszej aplikacji np: w C# mamy
                klasę Samochód (przecież sami ją sobie napisaliśmy). Natomisat
                żaden egzemplarz tej klasy w tym momencie jeszcze nie istnieje
                !!! Narazie komis jest pusty. Dopóki nasz Użytkownik - który
                jest właśnie teraz na naszej stronie i chce sprzedać swój
                samochód - nie doda za pomocą formularza swojego konkretnego
                pojazdu do sprzedaży - ilość instancji klasy samochód jest równa
                zero. W programowaniu obiektowym nie operujemy na samych klasach
                - jedynie na ich instancjach (wyjątkiem są klasy typu static -
                mówiliśmy o tym na zajęciach - ale to jest marginalna sprawa).
                <br />
                <br />
                Teraz nasz sprzedający wypełnia formularz. Wpisuje w pola markę
                swojego samochodu, jego model, rok produkcji, wyposażenie itd
                ... oraz wpisuje cenę za jaką chce wystawić swój pojazd w naszym
                internetowym komisie. Na końcu przyciska przygotowany przez Nas
                wcześniej - we frontendzie naszej apki - przycisk - "Wystaw
                samochód".
                <br /> <br />
                Co się teraz dzieje w naszej aplikacji? Teraz aplikacja wykrywa,
                że użytkownik nacisnął nasz przycisk (jest wiele sposobów w
                programowaniu na wykrywanie kliknięcia myszą, wpisywania teksu
                na klawiaturze itd itp.. generalnie na wykrywanie aktywności
                Użytkownika aplikacji. Zresztą jeden już znacie -
                Console.ReadLine() - wykrywa co uzytkownik wpisał z klawiatury.)
                Po wykryciu nacisnięcia tego przycisku zostaje wywołana metoda,
                którą sobie sami wcześniej napisaliśmy o nazwie: ... powiedzmy
                Wystaw_Samochod_Do_Sprzedazy. Z pewnością przyjmuje ona jako
                argumenty wartości które zczytalismy z pól formularza
                wypełnionego przed chwilą przez Sprzedającego. Co jest środku
                tej metody? Na początku zapewne jakaś walidacja, czy Użytkownik
                wypełnił pola formularza poprawnie (zapewne z wykorzystaniem
                instrukcji warunkowej if => patrz{` `}
                <Link to="/if">rodział nr 12</Link>). Następnie - gdy wszystko
                jest ok - metoda tworzy pierwszy egzemplarz klasy Samochód w
                naszej aplikacji. Zauważmy, do tej pory żadnego nie było. Była
                klasa Samochód, ale nie było żadnej jej instancji !!! Załóżmy,
                że nasz sprzedający wpisał w pola formularza takie wartości:
              </p>
              <div>
                <ul>
                  <li>Marka: Audi</li>
                  <li>Model: A6</li>
                  <li>Rok produkcji: 2012</li>
                  <li>Cena: 60 000 PLN</li>
                </ul>
              </div>
              <p>
                Jaki będzie dalej kod w naszej metodzie
                Wystaw_Samochod_Do_Sprzedazy? Będzie taki:
                <br />
                <br />
                <code>
                  Samochod samochodKlienta = new Samochod <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;
                  {`Marka = "Audi"`}
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  {`Model = "A6"`}
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  {`RokProdukcji = 2012`}
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  {`Cena = 60000`}
                  &nbsp;&nbsp;&nbsp;
                  <br />
                  {"};"}
                </code>
                <br />
                <br />
                Dopiero teraz - po użyciu instrukcji{" "}
                <strong>
                  Samochod samochodKlienta ={" "}
                  <span style={{ color: "#ff0000" }}>new</span> Samochod
                </strong>{" "}
                powstaje egzemplarz naszej klasy samochod. Przed uzyciem słowa
                kluczowego <strong>new</strong> zmienna o nazwie samochodKlienta
                przyjmowała wartość <strong>null</strong>. Ten egzemplarz
                obiektu samochód jeszcze nie istniał.
                <br />
                <br />W tym momencie nasza pierwsza instancja klasy Samochód
                rozpoczęła swój cykl życia. W profesjonalnej aplikacji zapewne
                zapisalibyśmy informacje o tym konkretnym egzemplarzu samochodu
                do bazy danych, aby potem móc prezentować go np.: na stronie
                głównej naszego serwisu w ofertach do sprzedaży. Teraz także
                możemy manipulować wartościami jej właściwości. Bo ten
                egzamplarz już istnieje. Jeżeli nasz Użytkownik nie sprzeda
                samochodu przez - dajmy na to - trzy miesiące i uzna, że musi
                obnizyć cenę sprzedaży, to dajemy mu (oczwiście wcześniej przez
                Nas przygorowaną) metodę Zmien_Cene_Sprzedazy. W niej wykonamy
                ponowne ustawienie właściwości Cena tego konkretnego pojazdu
                (instancji) na inną (zapewne niższą - taką jaką zażyczy sobie
                sprzedający) wartość.
                <br />
                <br />
                No dobrze. A kiedy ten konkretny egzemplarz klasy samochod
                kończy swój żywot w naszej aplikacji? Odpowiedź brzmi: wtedy
                kiedy będziemy tego chcieli. To my napisalismy ten program i my
                o tym decydujemy. Może to być np. w momencie gdy ten samochód
                zostanie sprzedany (tzn. inny Użytkownik naszego serwisu -
                zainteresowany kupnem - kupi go). Ale niekoniecznie, bo możemy
                na przykład chcieć (wszystko zależy od tego jak zaplanowaliśmy
                sobie nasz program) aby w naszym programie była jakaś historia
                transakcji. Wówczas ten konkretny egzemplarz będzie istniał cały
                czas. Nie będziemy go już co prawda wystawiać do sprzedaży (bo
                przecież już został sprzedany), ale na przykład będziemy go
                uwzględniać w raportach z historii transakcji.
                <br />
                <br />A co zrobić gdy jednak chcemy zakończyć żywot w naszym
                programie tego konkretnego egzemplarza klasy Samochod? Jak
                dokonać jego żywota? Wystarczy jedna linijka kodu:
                <br />
                <br />
                <code>samochodKlienta = null;</code>
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default InstancesComponent;
