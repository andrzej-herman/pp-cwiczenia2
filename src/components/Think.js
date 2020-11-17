import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import diagram from "../img/diagram.jpg";

function Think() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/thinking">
            'Myślenie' obiektowe i rozpoczęcie tworzenia aplikacji
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">
            'Myślenie' obiektowe i rozpoczęcie tworzenia aplikacji
          </h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col>
            <div style={{ padding: 20, color: "#535355" }}>
              <p style={{ textAlign: "justify" }}>
                Myślenie obiektowe to zdecydowanie najtrudniejsza rzecz w
                programowaniu obiektowym. Dużo trudniejsza niż samo pisanie
                kodu. Nauczenie się tej sztuki nie przyjdzie Wam łatwo, ale z
                czasem - pisząc coraz więcej programów - zobaczycie, że
                opanujecie tę sztukę. Jest to fundamentalna rzecz. Według mnie,
                nie można zostać dobrym programistą, nie myśląc obiektowo na
                etapie tworzenia aplikacji. Gdy będziecie mysleć obiektowo, to
                pisanie kodu jest już rzeczą banalnie prostą.
              </p>
              <p style={{ textAlign: "justify" }}>
                Jak powiedziałem Wam na zajęciach, nie jest dobrym pomysłem aby
                zacząć tworzyć aplikację od uruchomienia edytora kodu. Najpierw
                dobrze jest wziąć notes i zaplanować co my chcemy napisać.
                Zresztą w przypadku dużych projektów programistycznych jest to
                wręcz niezbędne a czasem nawet konieczne. Przypominacie sobie
                naszą pogawędkę na temat 'Rockstar Games' i tworzenia GTA VI? W
                tym przypadku niemożliwością jest napisanie dobrej gry, bez
                uprzedniego zaplanowania i podzielenia się obowiązkami. Są setki
                specjalnych narzędzi do planowania projektu aplikacji, jak
                chociażby programy do tworzenia diagramów, zależności itd. ..
              </p>
              <p style={{ textAlign: "justify" }}>
                Gdy zaczniemy planować, trzeba na chwilę zapomnieć o
                programowaniu. Teraz fundamentalne znaczenie ma właśnie myślenie
                obiektowe.{" "}
                <strong>
                  Polega ono na jak najbardziej zbliżonym do rzeczywistości
                  odzwierciedleniu w projekcie naszego programu rzeczy, które
                  występują w realnym świecie w kontekście tematu naszego
                  programu.
                </strong>{" "}
                Teraz musimy wziąć pod uwagę jaką aplikację mamy napisać. Jeżeli
                piszemy np. sklep internetowy, to postawmy się w sytuacji
                (wyobraźmy sobie) że jesteśmy w sklepie. Zastanówmy się jakie
                obiekty wystepują w sklepie, jakie zachodzą zależności między
                nimi. Powiedzieliście słusznie na zajęciach, że jednym z
                podstawowych "obiektów" w sklepie jest Produkt. I jest to strzał
                w dziesiątkę. Teraz zastanówmy się jakie ten produkt ma
                właściwości? Niewątpliwie ma nazwę, cenę, np. termin
                przydatności do spożycia, jednostkę miary w jakiej występuje
                (np. sztuka lub kg lub litr). Może mieć także kolor, wagę,
                rozmiar czy inne np. czy jest objety promocją, czy jest w danej
                chwili dostępny na magazynie itd ... Innym obiektem jest koszyk
                (lub kasa). To do niego wprowadzamy produkty i w konsekwencji
                podliczamy Klienta. Musimy więc dać możliwość dodawania tych
                produktów ... czyli będziemy pisać metodę "Dodaj produkt do
                koszyka" ...
              </p>
              <p style={{ textAlign: "justify" }}>
                Jeżeli piszemy program do obsługi wypożyczalni samochodów (np:
                aplikację webową firmy typu Car Rental) to wyobraźmy sobie że
                jesteśmy pracownikiem albo Klientem takiej firmy. Jakie bedą
                obiekty? Z pewnością samochód. Ma on typ, kolor, rodzaj napędu
                (benzyna, diesel, hybryda, elektryczny), klasę (compact,
                premium). Innym obiektem będzie z pewnością Klient. Pamietajcie
                też, że mogą wystepować także obiekty - nazwałbym je bardziej
                wirtualne. Taki obiektem w aplikacji do wypożyczalni będzię z
                pewnością "Wypożyczenie". Ma ono takie cechy jak: data
                wypożyczenia, Klient (kto wypożyczył), długość trwania, jaki
                pojazd został wypożyczony, jaka jest łączna cena za
                wypożyczenie. Pamiętajcie, że właściwościami obiektu mogą być
                inne obiekty, które napisaliśmy.
              </p>
              <p style={{ textAlign: "justify" }}>
                Oczywiście, że nie musimy wyobrażać sobie wszystkich rzeczy.
                Wszystko zależy od tego, jaką funkcjonalność ma spełniać nasza
                aplikacja. Po planowaniu, dopiero wówczas gdy mamy już plan
                działania, gdy mamy utworzone na "papierze" obiekty i metody,
                możemy przystapić do pisania kodu. Wówczas nasze kodowanie jest
                dużo bardziej efektywne, a poza tym - co ważniejsze - widzimy od
                razu logikę tego co piszemy. (proszę kliknąć na obrazek, aby
                powiększyć)
              </p>
              <br />
              <div className="center">
                <a href={diagram} target="_blank" rel="noopener noreferrer">
                  <img
                    className="solution_image__diagram"
                    src={diagram}
                    alt="moduły visual studio"
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Think;
