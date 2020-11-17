import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Sol from "../components/Sol";
import Footer from "../components/Footer";

function Solution() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Sol />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Solution;
