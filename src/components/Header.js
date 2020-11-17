import React from "react";
import "./Header.css";
import { Row, Col, Jumbotron } from "react-bootstrap";
import logo from "../img/logo.png";

function Header() {
  return (
    <Row className="header">
      <Col>
        <Jumbotron className="header__jumbo">
          <img className="header__logo" src={logo} alt="andrzej-herman" />
          <h1 className="header__title">Podstawy programowania</h1>
          <h4 className="header__subtitle">
            Materiały uzupełniające do ćwiczeń dla studentów
          </h4>
          <hr />
          <p>Opracowanie i realizacja: mgr inż. Andrzej Herman</p>
        </Jumbotron>
      </Col>
    </Row>
  );
}

export default Header;
