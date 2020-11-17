import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Think from "../components/Think";
import Footer from "../components/Footer";

function Thinking() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Think />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Thinking;
