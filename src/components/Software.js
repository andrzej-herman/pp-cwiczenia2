import React, { Fragment } from "react";
import "../App.css";
import { Row, Col, Card, Button, Tabs, Tab, Breadcrumb } from "react-bootstrap";
import git from "../img/git-logo.jpg";
import vs from "../img/visual-studio.jpg";
import tortoise from "../img/tortoise-git.jpg";
import mac from "../img/vs-mac.jpg";
import { Link } from "react-router-dom";

function Software() {
  return (
    <Fragment>
      <Breadcrumb className="content__breadcrumb">
        <Breadcrumb.Item active>
          <Link to="/">Spis treści</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          <Link to="/software">Oprogramowanie</Link>
        </Breadcrumb.Item>
      </Breadcrumb>

      <Row className="content">
        <Col>
          <h3 className="content__title">Oprogramowanie</h3>
        </Col>
      </Row>

      <Row className="content">
        <Row className="software__container">
          <Col lg={6} md={6} xs={12}>
            <Card className="software__card">
              <Card.Img variant="top" src={vs} alt="git" />
              <Card.Body>
                <Card.Title>Visual Studio Community 2019</Card.Title>
                <Card.Text>
                  Rozbudowane, modułowe i zintegrowane środowisko programowania
                  (IDE), doskonałe do tworzenia aplikacji. Dostarcza wielu
                  narzędzi które ułatwiają pisanie kodu.
                </Card.Text>
                <a
                  href="https://visualstudio.microsoft.com/pl/vs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <Card className="software__card">
              <Card.Img variant="top" src={mac} alt="git" />
              <Card.Body>
                <Card.Title>Visual Studio for Mac</Card.Title>
                <Card.Text>
                  Wersja Visual Studio przeznaczona na komputery z systemem
                  macOS. Umożliwia tworzenie aplikacji konsolowych i webowych z
                  wykorzystaniem technologii .NET Core.
                </Card.Text>
                <a
                  href="https://visualstudio.microsoft.com/pl/vs/mac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="software__container">
          <Col lg={6} md={6} xs={12}>
            <Card className="software__card">
              <Card.Img variant="top" src={git} alt="git" />
              <Card.Body>
                <Card.Title>Git</Card.Title>
                <Card.Text>
                  Oprogramowanie umożliwiające obsługę technologii Git, czyli
                  systemu kontroli wersji. Niezbędne do pobrania. Bez tej
                  aplikacji nie będzie możliwa współpraca z Githubem.
                </Card.Text>
                <a
                  href="https://git-scm.com/downloads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} md={6} xs={12}>
            <Card className="software__card">
              <Card.Img variant="top" src={tortoise} alt="git" />
              <Card.Body>
                <Card.Title>Tortoise Git</Card.Title>
                <Card.Text>
                  Przydatna (lecz nie niezbędna) nakładka do systemu Windows,
                  znacznie ułatwiająca obsługę Gita. Tworzy w menu kontekstowym
                  dodatkowe opcje związane z kontrolą wersji i nie trzeba używać
                  wiersza poleceń.
                </Card.Text>
                <a
                  href="https://tortoisegit.org/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-und"
                >
                  <Button
                    variant="primary"
                    style={{ paddingLeft: 25, paddingRight: 25 }}
                  >
                    Pobierz
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    </Fragment>
  );
}

export default Software;
