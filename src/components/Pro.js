import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

function Pro() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/properties">Właściwości (cechy) obiektów</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Właściwości (cechy) obiektów</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Wiecie już co to jest obiekt z punktu widzenia obiektowego
                języka programowania. Wiecie także z zajęć, że obiekt posiada
                właściwości (cechy) i metody. W tym rodziale zajmiemy się
                właściwościami. Jednak zanim przejdziemy do meritum, odpowiedzmy
                sobie jeszcze na jedno pytanie.
                <br /> <br />
                Czy obiekt musi posiadać właściwości i cechy? Oczywiście, że
                nie. Obiekt może je posiadać, ale wcale nie musi. Możemy napisać
                sobie klasę pustą, która nie posiada ani właściwości, ani metod
                np:
                <br />
                <br />
                <code>
                  class Samochod <br />
                  {"{"} <br /> <br />
                  {"}"}
                </code>
                <br /> <br />
                Jak najbardziej prawidłowy obiekt o nazwie Samochod. Pytanie
                brzmi: tylko po co? Jaki jest sens tworzenia pustych obiektów?
                Nie ma żadnego. Marnowanie klawiatury i nic więcej. Tak więc
                zapamiętajcie, że obiekt powinien posiadać przynajmniej jedną
                właściwość, lub przynajmniej jedną metodę lub to i to. Nie musi
                posiadać jednocześnie właściwości i metod, ale powinien posiadać
                albo właściwości, albo metody albo to i to. Wszystko zależy
                logiki jaką zaplanowaliśmy dla tego obiektu w naszym programie.
              </p>
              <p style={{ textAlign: "justify" }}>
                Przejdźmy teraz do tematu tego rodziału, czyli właściwości. Są
                to cechy, które charakteryzują obiekt danego typu. Banał.
                Właściwości obiektu klasy człowiek to np: wzrost, waga, kolor
                oczu, kolor włosów, wiek, płeć, PESEL, adres, nr telefonu itd ..
                Możemy również znależć inne właściwości, np: Czy kiedykolwiek
                przebywał za granicą? albo Jaki jest jego stosunek do jakiejś
                partii politycznej? Pamiętajmy, że cechy jakich będzimy używać w
                naszej aplikacji są uzależnione od kontekstu naszego programu,
                od tego jaka ma być funkcjonalność aplikacji, którą właśnie
                zamierzamy napisać. Weźmy na przykład aplikację do salonu
                samochodowego oraz aplikację do wypożyczalni samochodów. W obu
                przypadkach z pewnością utworzymy obiekt Samochód. Będzie miał
                on wiele wspólnych cech. Ale np. cecha Cena za dobę wypożyczenia
                już nie. Prawda? Owszem, właściwość ta jest niezwykle istotna w
                programie dla wypożyczalni. Ale jaki jest sens dodawać tę
                właściwość do klasy Samochód do programu dla salonu
                samochodowego, w którym nie wypożycza się samochodów.
                <br /> <br />
                Spójrzmy teraz na klasę Pytanie z naszego Quizu (na razie z
                samymi własciwościami, bez metod). Mogłaby ona wyglądać np. tak:
                <br />
                <br />
                <code>
                  public class Pytanie <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;public string Tresc {"{"} get; set;{" }"}
                  <br />
                  &nbsp;&nbsp;&nbsp;public int Kategoria {"{"} get; set;{" }"}
                  <br />
                  &nbsp;&nbsp;&nbsp;public string Odpowiedz_1 {"{"} get; set;
                  {" }"}
                  <br />
                  &nbsp;&nbsp;&nbsp;public string Odpowiedz_2 {"{"} get; set;
                  {" }"}
                  <br />
                  &nbsp;&nbsp;&nbsp;public string Odpowiedz_3 {"{"} get; set;
                  {" }"}
                  <br />
                  &nbsp;&nbsp;&nbsp;public string Odpowiedz_4 {"{"} get; set;
                  {" }"}
                  <br />
                  {"}"}
                </code>
                <br /> <br />
                Jeżeli chodzi o instrukcje get; oraz set; to zostawmy na razie
                ten temat. Wytłumaczę Państwu to na najbliższych zajęciach.
                Teraz skupmy się na logice naszego obiektu Pytanie. Widzimy, że
                właściwość Treść jest przechowywana w zmiennej typu string.
                Czyli może być napisem. Jest to jak najbardziej ok. Treść
                pytania to niewątpliwie tekst (treść). Co ważniejsze nie
                wymagamy od tej właściwości, aby niosła za sobą jakieś inne
                dodatkowe informacje. Po prostu treść pytania. Tak samo z
                właściwością Kategoria. Jest ona typu int (liczba). Ma ona
                oznaczać wartość liczbową pytania (kwotę jaka jest do wygrania
                za prawidłową odpowiedź na to pytanie). Tutaj także jest ok.
                mamy zmienną typu int i ma ona oznaczać liczbę (kwotę).
                Natomiast spójrzmy na właściwości Odpowiedzi. Mamy tutaj typ
                string, czyli tekst. OK. Odpowiedź na pytanie to także tekst.
                Zgadza się. Ale my potrzebujemy jeszcze wiedzieć która z tych
                odpowiedzi jest prawidłowa. Sama treść odpowiedzi jest
                niewystarczająca w kontekście w jakim ma działać nasza
                aplikacja. Powinniśmy zatem utworzyć następny obiekt (klasę) o
                nazwie Odpowiedz i nadać jej odpowiednie właściwości np:
                <br />
                <br />
                <code>
                  public class Odpowiedz <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;public string Tresc {"{"} get; set;{" }"}
                  <br />
                  &nbsp;&nbsp;&nbsp;public bool CzyPrawidlowa {"{"} get; set;
                  {" }"}
                  <br />
                  {"}"}
                </code>
                <br /> <br />I ten obiekt przekazać do klasy Pytanie jako
                właściwości Odpowiedz (zamiast zmiennej typu string). Więc teraz
                właściwość np: Odpowiedz_1 klasy Pytanie będzie wyglądała tak:
                <br />
                <br />
                <code>
                  &nbsp;&nbsp;&nbsp;public Odpowiedz Odpowiedz_1 {"{"} get; set;
                  {" }"}
                </code>
                <br /> <br />W ten sposób chciałbym Państwu przekazać bardzo
                istotny fakt:{" "}
                <strong>
                  Właściwościami obiektu mogą być także obiekty !!!
                </strong>
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Pro;
