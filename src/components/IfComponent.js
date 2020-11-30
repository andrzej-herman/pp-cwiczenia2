import React, { Fragment, useState } from "react";
import "../App.css";
import {
  Row,
  Col,
  Breadcrumb,
  InputGroup,
  FormControl,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import peselImg from "../img/pesel.jpg";
import pdf from "../pdf/kod-pesel.pdf";

function IfComponent() {
  const isValidPesel = (pesel) => {
    if (pesel.trim().length === 0) return "Proszę wpisać PESEL";
    if (isNaN(pesel)) return "PESEL musi się składać z samych cyfr";
    if (pesel.trim().length !== 11) return "PESEL musi się składać z 11 cyfr";

    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    let controlNumber = parseInt(pesel.substring(10, 11));

    for (let i = 0; i < weight.length; i++) {
      sum += parseInt(pesel.substring(i, i + 1)) * weight[i];
    }
    sum = sum % 10;
    if ((10 - sum) % 10 === controlNumber) {
      if (
        pesel === "22222222222" ||
        pesel === "44444444444" ||
        pesel === "66666666666" ||
        pesel === "88888888888"
      ) {
        return "Nieprawidłowy PESEL";
      } else {
        return "Prawidłowy PESEL";
      }
    } else {
      return "Nieprawidłowy PESEL";
    }
  };

  const [pesel, setPesel] = useState("");
  const [valid, setValid] = useState("unknown");

  const onChange = (e) => {
    setPesel(e.target.value);
  };

  const handlePesel = () => {
    setValid(isValidPesel(pesel));
  };

  const handleReset = () => {
    setValid("unknown");
    setPesel("");
  };

  const getResult = (valid) => {
    if (valid === "unknown") {
      return null;
    } else if (valid === "Prawidłowy PESEL") {
      return <Alert variant="success">{valid}</Alert>;
    } else {
      return <Alert variant="danger">{valid}</Alert>;
    }
  };

  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/if">Instrukcja warunkowa if</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Instrukcja warunkowa if</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Warunkowe wykonywanie określonej części kodu jest jednym z
                fundamentalnych elementów programowania. Możemy w ten sposób
                reagować na określone zachowania użytkowników aplikacji. Pozwala
                Nam to na dostosowanie działania aplikacji do wielu różnych
                scenariuszy. W naszej aplikacji Quiz po zadaniu pytania graczowi
                musimy zareagować na udzieloną przez niego odpowiedź. Jak wiemy,
                są conajmniej dwie możliwości: albo gracz udzieli poprawnej
                odpowiedzi, albo nie. Proszę zauważyć, że programista, który
                pisze kod programu nie wie, czy udzielona odpowiedź będzie
                prawidłowa czy nie. W związku z tym musi przygotować kod, który
                będzie odpowiedni dla obydwu przypadków. Tym bardziej, że -
                proszę zauważyć - zachowanie programu dla tych dwóch przypadków
                będzie zupełnie inne. Jeżeli udzieli prawidłowej odpowiedzi,
                wyświetlamy mu komunikat z gratulacjami, nastepnie podnosimy
                wartość jego wygranej, zmieniamy kategorię pytania na wyższą i
                wyświetlamu mu następne pytanie już z wyższej kategorii. Co
                więcej - jeżeli pytanie o którym mowa jest ostatnim pytaniem (za
                milion), wówczas zachowanie aplikacji będzie zupełnie inne. Po
                udzieleniu poprawnej odpowiedzi, gratulujemy Użytkownikowi,
                informujemy, że wygrał milion, ale już nie zadajemy nastepnego
                pytania ... ponieważ go nie ma. Musimy zatem najpierw sprawdzić
                - po udzieleniu poprawnej odpowiedzi przez Użytkownika czy
                pytanie nie było ostatnim (sprawdzamy aktualną kategorię
                pytania). Z kolei gdy odpowiedź użytkownika jest błędna -
                wówczas informaujemy o błedzie i kończymy program. Tak więc
                widzimy, że musimy być przygotowani na każdą ewentualność.
                <br /> <br />
                Zresztą takich sytuacji w programowaniu jest od groma. Wyobraźmy
                sobie że piszemy jakiś program w którym użytkownik musi podać
                swoje dane osobowe. Jednym z pól jest adres zameldowania. Piszmy
                formularz w którym jest miejsce na wpisanie tego adresu. Jest to
                jakieś pole tekstowe. Jest tylko jedno. Pod spodem jest
                "ptaszek" (nazywa się to checkbox) z tekstem "Inny adres do
                korespondencji". Jest on domyślnie odznaczony. My nie wiemy, czy
                użytkownik zaznaczy ten ptaszek czy nie. Ale musimy być
                przygotowani, na to, że może zaznaczyć. Wówczas musimy napisać
                kod, który spowoduje pokazanie się na naszym formularzu
                dodatkowego pola na wpisanie adresu do korespondencji.
                <br /> <br />
                Inny przykład. Piszemy jakiś sklep internetowy. Klient powkładał
                sobie do koszyka jakieś produkty. Nasz program wyliczył mu
                łączną cenę za te zakupy. Przygotowaliśmy wcześniej pole na
                wpisanie kodu rabatowego. Klient - o ile posiada taki kod - może
                go wpisać w to pole i nacisnąć przycisk np: "Przelicz" lub
                "Zastosuj kod rabatowy". My nie wiemy, czy Klient posiada taki
                kod i zechce go wykorzystać. Ale musimy być przygotowani na to,
                że tak. Tak więc musimy przygotować dwie wersjie kodu naszej
                aplikacji. Jedną na to, że cena jaka jest do zapłaty pozostaje
                bez zmian, a drugą na wypadek użycia kodu rabatowego przez
                kupujacego - wówczas musimy napisać algorytm przeliczajacy na
                nowo cenę Klienta i zastosować go (wywołać tę metodę), aby
                ustwić nową cenę za zakupy.
                <br />
                <br />
                Genaralnie sprowadza się to do prostej zasady:{" "}
                <strong>
                  JEŻELI SCENARIUSZ A => TO WÓWCZAS KOD A, JEŻELI SCENARIUSZ B,
                  TO WÓWCZAS KOD B, ITD ... A JEŻELI ŻADEN Z TYCH SCENARIUSZY,
                  TO WÓWCZAS KOD INNY.
                </strong>{" "}
                W językach programowania taką funkcjonalność wykonywania kodu
                dla określonego scenariusza (warunku) możemy zaimplementować za
                pomocą <strong>instrukcji warunkowej if</strong>
                <br />
                <br />
                Mamy trzy wersje tej instrukcji. Pierwsza, najprostsza:
                <br />
                <br />
                <code>
                  if (warunek) <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// ten kod programu wykona się jeżeli
                  warunek będzie spełniony
                  <br />
                  &nbsp;&nbsp;&nbsp;// innymi słowy => jeżeli wartość logiczna
                  wyrażenia w nawiasie będzie równa <strong>true</strong>
                  <br />
                  {"}"}
                </code>
                <br /> <br />
                Proszę zwrócić uwagę, że powyższa wersja instrukcji if nie
                przewiduje żadnej akcji w przypadku, gdy warunek będzie
                niespełniony. Po prostu nie napisaliśmy żadnego kodu dla takiego
                przypadku. Gdy chcemy jednak aby nasz program reagował także na
                to wówczas użyjemy drugiej wersji, która wygląda tak:
                <br />
                <br />
                <code>
                  if (warunek) <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// ten kod programu wykona się jeżeli
                  warunek będzie spełniony
                  <br />
                  &nbsp;&nbsp;&nbsp;// innymi słowy => jeżeli wartość logiczna
                  wyrażenia w nawiasie będzie równa <strong>true</strong>
                  <br />
                  {"}"}
                  <br />
                  else <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// ten kod programu wykona się jeżeli
                  warunek będzie nie spełniony
                  <br />
                  &nbsp;&nbsp;&nbsp;// innymi słowy => jeżeli wartość logiczna
                  wyrażenia warunek będzie równa <strong>false</strong>
                  <br />
                  {"}"}
                </code>
                <br /> <br />W tym przypadku napisaliśmy kod dla każdego
                możliwego scenariusza. Jeżeli warunek nie jest spełniony,
                wówczas wykona się kod z drugiej klamry. Bardzo istotny jest
                fakt, że kompilator rozpatruje warunki po kolei, zgodnie z tym
                jak je napisaliśmy.{" "}
                <strong>
                  Jeżeli warunek jest spełniony - wówczas kompilator wykona kod
                  z bloku pierwszego i wogóle nie zajrzy do kodu napisanego w
                  tym drugim bloku (po else). Zupełnie go zignoruje.
                </strong>
                <br /> <br />
                Mamy jeszcze trzecią wersję instrukcji warunkowej if, która
                rozpatruje kilka szczegółowych warunków:
                <br />
                <br />
                <code>
                  if (warunek 1) <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// ten kod programu wykona się jeżeli
                  warunek 1 będzie spełniony
                  <br />
                  &nbsp;&nbsp;&nbsp;// innymi słowy => jeżeli wartość logiczna
                  wyrażenia warunek 1 będzie równa <strong>true</strong>
                  <br />
                  {"}"}
                  <br />
                  else if (warunek 2)
                  <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// ten kod programu wykona się jeżeli
                  warunek 1 nie będzie spełniony, ale spełniony będzie warunek 2
                  <br />
                  &nbsp;&nbsp;&nbsp;// innymi słowy => jeżeli wartość logiczna
                  wyrażenia warunek 1 będzie równa <strong>false</strong> a
                  wartość logiczna wyrażenia warunek 2 będzie równa{" "}
                  <strong>true</strong>
                  <br />
                  {"}"}
                  <br />
                  else <br />
                  {"{"} <br />
                  &nbsp;&nbsp;&nbsp;// ten kod programu wykona się jeżeli
                  warunek 1 będzie nie spełniony i jednocześnie warunek 2 też
                  nie będzie spełniony
                  <br />
                  &nbsp;&nbsp;&nbsp;// czyli => jeżeli wartość logiczna
                  wyrażenia warunek 1 będzie równa <strong>false</strong> i
                  wartość logiczna wyrażenia warunek 2 także będzie równa{" "}
                  <strong>false</strong>
                  <br />
                  {"}"}
                </code>
                <br /> <br />
                Bloków else if możemy dodać tyle ile Nam się podoba i w każdym z
                nich dawać do rozpatrzenia inne warunki. Należy jednak pamiętać
                o dwóch podstawowych sprawach: <br />
              </p>
              <div>
                <ul>
                  <li>
                    Warunki muszą się nawzajem wykluczać. Inaczej taka
                    instrukcja nie ma sensu.{" "}
                  </li>
                  <li>
                    Nie należy przesadzać z ilością bloków if else. Wówczas kod
                    programu staje sie mało czytelny. Jeżeli z logiki naszej
                    aplikacji wynika, że musimy rozpatrywać bardzo dużo różnych
                    warunków - wówczas zalecane jest uzywanie innych instrukcji
                    warunkowych np: instrukcji <strong>switch</strong>, ale o
                    niej dowiemy się kiedy indziej.
                  </li>
                </ul>
              </div>
              <br />

              <Card
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: "#f6f9fa",
                }}
              >
                <Card.Body>
                  <h4 style={{ marginBottom: 0 }}>
                    Przykład działania instrukcji warunkowej if
                  </h4>
                  <span style={{ marginTop: 0, color: "#007bb6" }}>
                    Sprawdzanie poprawności PESEL
                  </span>
                  <br />
                  <br />
                  <InputGroup className="mb-3">
                    <FormControl
                      placeholder="Wpisz swój PESEL"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      onChange={onChange}
                      value={pesel}
                    />
                    <InputGroup.Append>
                      <Button variant="outline-secondary" onClick={handlePesel}>
                        Sprawdź poprawność PESEL
                      </Button>
                      <Button variant="outline-danger" onClick={handleReset}>
                        Resetuj formularz
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                  {getResult(valid)}
                </Card.Body>
              </Card>
              <br />
              <br />
              <h5 style={{ marginBottom: 0 }}>Kod aplikacji konsolowej w C#</h5>
              <span style={{ marginTop: 5 }}>
                Możesz sobie pobrać ten kod i wypróbować w swoim Visual Studio
              </span>
              <div style={{ marginTop: 5 }}>
                <a href={pdf} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline-secondary" size="sm">
                    Pobierz kod programu
                  </Button>
                </a>
              </div>

              <br />
              <img src={peselImg} alt="kod_pesel" />
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default IfComponent;
