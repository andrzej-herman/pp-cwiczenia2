import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import ObjCls from "../components/ObjCls";
import Footer from "../components/Footer";

function Objects() {
  return (
    <Fragment>
      <Container>
        <Header />
        <ObjCls />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Objects;
