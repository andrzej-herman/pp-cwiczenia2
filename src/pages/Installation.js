import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Install from "../components/Install";
import Footer from "../components/Footer";

function Installation() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Install />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Installation;
