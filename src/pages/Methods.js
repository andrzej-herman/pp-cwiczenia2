import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Met from "../components/Met";
import Footer from "../components/Footer";

function Methods() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Met />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Methods;
