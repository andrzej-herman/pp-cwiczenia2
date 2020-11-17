import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Proj from "../components/Proj";
import Footer from "../components/Footer";

function Project() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Proj />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Project;
