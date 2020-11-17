import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Pro from "../components/Pro";
import Footer from "../components/Footer";

function Properties() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Pro />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Properties;
