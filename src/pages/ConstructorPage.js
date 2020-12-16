import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Constructor from "../components/Constructor";
import Footer from "../components/Footer";

function ConstructorPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <Constructor />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ConstructorPage;
