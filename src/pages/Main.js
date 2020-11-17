import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";

function Main() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Content />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Main;
