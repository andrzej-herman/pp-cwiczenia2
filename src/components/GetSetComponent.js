import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function GetSetComponent() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/getset">GET, SET - Modyfikatory dostępu</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">GET, SET - Modyfikatory dostępu</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Kiedy tworzymy właściwości jakiegoś obiektu (klasy) który sobie
                sami utworzyliśmy na potrzeby naszej aplikacji, powinniśmy do
                każdej właściwości dodać tak zwane modyfikatory dostępu. Są to
                słowa kluczowe w języku C#:{" "}
                <strong style={{ color: "#ff0000" }}>get</strong> oraz{" "}
                <strong style={{ color: "#ff0000" }}>set</strong>. Zresztą
                VisualStudio pomaga nam utworzyć poprawne właściwości, za pomocą
                skrótu: prop. Po wpisaniu słówka prop i dwukrotnym naciśnięciu
                klawisza Tab edytor wygeneruje dla nas szablon właściwości:
                <br /> <br />
                <code>{`public int MyProperty { get; set; }`}</code>
                <br />
                <br />
                Oczywiście jest to tylko schemat. Teraz powinniśmy (oczywiście
                jeżeli potrzeba) zmienić typ int na taki, który nam odpowiada
                dla tej właściwości naszej klasy (chyba że akurat potrzebujemy
                int-a). Dodatkowo musimy nadać nazwę tej właściwości zmieniając
                odpowiednio słówko "MyProperty". Pamietajmy, że nazwa
                właściwości powinna odzwierciedlać cechę obiektu, którą ta
                właściwość reprezentuje. Jeżeli mamy klasę Produkt a piszemy jej
                właściwość, która ma reprezentować cenę tego produktu, to
                naturalnym jest, że powinniśmy tej właściwości nadać nazwę Cena
                (ewentualnie Price - jeżeli piszemy nazwy po angielsku). Gdy
                bedziemy nadawać inne - niezwiązane z cechą nazwy - prędzej czy
                później sami pogubimy się w naszym kodzie. Tak więc, na przykład
                właściwość obiektu Produkt, która ma reprezentować jego cenę
                mogłaby wyglądać tak:
                <br /> <br />
                <code>{`public decimal Cena { get; set; }`}</code>
                <br />
                <br />
                Ok. Teraz zajmiemy się już dokładnie modyfikatorami dostepu
                czyli słówkami get i set. Odpowiadają one za to, żebyśmy byli w
                stanie pobrać w naszej aplikacji wartość właściwości (get) oraz
                ustawić (nadać jej) tę wartość jeżeli potrzeba (set).
                Przypomnijmy sobie naszą metodę WyswietlPytanie(Pytanie pytanie)
                z naszego Quizu. Metoda to wyświetla na Uzytkownikowi w konsoli
                pełne pytanie, czyli kategorię, treść pytania i oczywiście
                cztery możliwe odpowiedzi. Potrzebujemy w niej - co oczywiste -
                odczytać wartości wszystkch cech pytania. Czyli jego treść,
                kategorię, treści odpowiedzi itd ... Bez tego nie bylibyśmy w
                stanie nic wyświetlić. Dzięki temu, że umieściliśmy przy
                właściwościach klasy Pytanie słówko get, jesteśmy w stanie
                odczytać wartość danego egzemplarza (instancji) klasy pytanie.
                Wynika stąd logiczny wniosek.{" "}
                <strong>
                  Pisanie właściwości bez modyfikatora get nie ma najmniejszego
                  sensu - gdyż nie będziemy w stanie odczytać jej wartości.
                </strong>
                <br />
                <br />
                Trochę inna sytuacja jest ze słówkiem set. Ono z kolei odpowiada
                za ustawienie (zapisanie) wartości właściwości. Gdy nie będzie
                tego słówka set nie będziemy w stanie ustawić żadnej wartości
                dla takiej właściwości. To też wydaje się bez sensu. Ponieważ
                musimy nadać (chociażby na początku) jakąś wartość naszej
                właściwości. Wyobraźmy sobie, że mamy naszą klasę Pytanie i jej
                właściwość Treść i nie umieszczamy przy niej słówka set. Wówczas
                nie będziemy mogli nadać żadnemu egzemplarzowi pytania treści.
                Nie będziemy mogli napisać np:, że Tresc = "Jak miał na imię
                Einstein?". Bez sensu, prawda? Po co nam taka właściwość. W tym
                przypadku, użycie słowa set jest jak najbardziej potrzebne.
                <br />
                <br />
                Zdarzają się oczywiście pewne szczególne właściwości, dla
                których musimy mocno ograniczyć (a wręcz uniemożliwić) nadawanie
                im nowych (innych) wartości. Wyobrażmy sobie że piszemy jakąś
                aplikację do obsługi np: pacjentów przychodni lekarskiej. Mamy
                zatem klasę Pacjent i jedną z jego właściwości: PESEL.
                Zastanówmy się, czy PESEL człowieka ulega zmianie? Odpowiedź
                jest oczywista: oczywiście, że nie. Raz nadany PESEL potem już
                nie ulega zmianie. Wówczas zrobilibyśmy tak:
                <br />
                <br />
                <code>
                  public class Pacjent <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;
                  {`public string PESEL { get; private set; }`}
                  <br />
                  {"}"}
                </code>
                <br /> <br />
                Słowko get jest nam oczywiście potrzebne, ponieważ wielokrotnie
                będziemy potrzebować użyć PESELU pacjenta (np w metodzie
                drukującej recepty.) Całkowity brak słówka set też nie jest
                dobry, ponieważ nie będziemy nawet w stanie nadać instancji
                pacjenta jakiejś wartości początkowej (a przecież ma PESEL).
                Nadajemy więc modyfikatorowi set własność private. To pozwoli
                zmieniać wartość właściwości PESEL tylko wewnątrz klasy Pacjent,
                a uniemożliwi zmianę tej wartości w innym miejscu kodu naszego
                programu. Nadamy mu raz wartość początkową (jego PESEL) w
                momencie tworzenia tego konkretnego egzemplarza pacjenta (np w
                metodzie pierwszy raz rejestrującej nowego - jeszcze nie
                istniejącego w tej przychdni - pacjenta) i potem już nie
                będziemy jej nigdy zmieniać.
                <br /> <br />
                Są także pewne szczególne właściwości w których wogóle nie
                potrzebujemy modyfikatora set. Potrzebny jest tylko get. Tak
                zgadza się. Takiej właściwości nie będziemy wogóle mogli nadać
                żadnej wartości !!! Zapytacie po co więc taka właściwość ? Otóż
                odpowiedź brzmi: ta właściwość będzie sobie nadawała wartość
                sama. Tak, sama. Chcecie przykład? Proszę bardzo. Wyobrażmy
                sobie, że piszemy jakąś aplikację która pokazuje nam prognozę
                pogody. Pobieramy sobie z termometra do programu (albo z
                jakiegoś serwisu internetowego temperaturę dla naszej
                lokalizacji). Powiedzmy, że jest to temperatura wyrażona w
                stopniach Fahrenheita. Mamy więc klasę PrognozaPogody a w niej:
                właściwość typu double Tempertaura_w_stopniach_Fahrenheita. Ma
                ona oczywiście get i set. Musimy przecież nadać wartość tej
                właściwości (tę temperaturę którą pobraliśmy z termometra albo z
                internetu). Dodatkowo chcemy mieć także (bedziemy ją wyświetlać
                Użytkownikom naszego serwisu) tę samą temperaturę, tylko
                wyrażoną w stopniach Celsjusza. Spójrzmy zatem na właściwość:
                Tempertaura_w_stopniach_Celsjusza
                <br />
                <br />
                <code>
                  public class PrognozaPogody <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;
                  {`public double Tempertaura_w_stopniach_Fahrenheita { get; set; }`}
                  <br />
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  {`public double Tempertaura_w_stopniach_Celsjusza`}
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {`get { return 5.0 / 9 * (Tempertaura_w_stopniach_Fahrenheita - 32); }`}
                  <br />
                  &nbsp;&nbsp;&nbsp;
                  {"}"}
                  <br />
                  <br />
                  {"}"}
                </code>
                <br />
                <br />
                Jak widzimy właściwość Tempertaura_w_stopniach_Celsjusza wogóle
                nie ma słówka set. Ma tylko get. Nie potrzebuje set, ponieważ
                jej wartość jest ustawiana automatycznie na podstawie wartości
                właściwości Tempertaura_w_stopniach_Fahrenheita. Ma w sobie
                napisany po prostu wzór na przeliczanie temperatury ze stopni
                Fahrenheita na stopnie Celsjusza. I to wystarczy. Możemy zawsze
                kiedy potrzebujemy w naszej aplikacji odwoływać się do tej
                wartości. To znaczy pobrać ją. Ponieważ nie jesteśmy w stanie
                jej samodzielnie ustawić. Natomiast wystarczy, że prognoza
                pogody będzie miała ustawioną wartość temperatury w stopniach
                Fahrenheita i wówczas wiemy na 100%, że będziemy mieli także
                dostepną temperaturę wyrażoną w stopniach Celsjusza.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default GetSetComponent;
