import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Software from "../components/Software";

function Soft() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Software />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Soft;
