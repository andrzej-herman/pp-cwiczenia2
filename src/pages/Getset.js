import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GetSetComponent from "../components/GetSetComponent";

function Getset() {
  return (
    <Fragment>
      <Container>
        <Header />
        <GetSetComponent />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Getset;
