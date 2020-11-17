import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Clone from "../components/Clone";
import Footer from "../components/Footer";

function Cloning() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Clone />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Cloning;
