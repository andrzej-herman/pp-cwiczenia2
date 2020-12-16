import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Loop from "../components/Loop";
import Footer from "../components/Footer";

function LoopPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Loop />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default LoopPage;
