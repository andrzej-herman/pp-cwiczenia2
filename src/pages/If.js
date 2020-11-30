import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IfComponent from "../components/IfComponent";

function If() {
  return (
    <Fragment>
      <Container>
        <Header />
        <IfComponent />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default If;
