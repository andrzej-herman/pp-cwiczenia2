import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentCard from "./ContentCard";

function Content() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Spis treści</h3>
        </Col>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="1. Oprogramowanie"
              text="Potrzebne oprogramowanie oraz linki do pobrania."
              link="/software"
            />
            <ContentCard
              title="2. Instalacja oprogramowania"
              text="Informacje dotyczące prawidłowej instalacji oprogramowania."
              link="/install"
            />
            <ContentCard
              title="3. Klonowanie repozytorium z serwera Github"
              text="Informacje dotyczące klonowania repozytorium aplikacji quiz
                    z serwera Github."
              link="/clone"
            />
          </Row>
        </div>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="4. Tworzenie rozwiązania w Visual Studio"
              text="Instrukcja tworzenia rozwiązania (pojemnika) dla projektu quiz."
              link="/solution"
            />
            <ContentCard
              title="5. Tworzenie projektu aplikacji konsolowej w Visual Studio"
              text="Instrukcja utworzenia projektu aplikacji Quiz w Visual Studio"
              link="/project"
            />
            <ContentCard
              title="6. 'Myślenie' obiektowe i rozpoczęcie tworzenia aplikacji"
              text="Jak nauczyć się myśleć obiektowo i jak zacząć tworzenie programu?"
              link="/thinking"
            />
          </Row>
        </div>
      </Row>
      <Row>
        <div>
          <Row className="software__container">
            <ContentCard
              title="7. Obiekty (klasy)"
              text="Co to są obiekty i po co je tworzymy? Czy jest to konieczne?"
              link="/objects"
            />
            <ContentCard
              title="8. Właściwości (cechy) obiektów"
              text="Właściwości obiektu. Dlaczego są takie ważne? Co może być właściwością obiektu?"
              link="/properties"
            />
            <ContentCard
              title="9. Metody"
              text="Dlaczego obiekty mają metody? Po co niektóre metody mogą zwracać jakąś wartość a inne nie?"
              link="/methods"
            />
          </Row>
        </div>
      </Row>
    </Fragment>
  );
}

export default Content;
