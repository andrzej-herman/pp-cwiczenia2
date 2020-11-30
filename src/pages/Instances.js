import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InstancesComponent from "../components/InstancesComponent";

function Instances() {
  return (
    <Fragment>
      <Container>
        <Header />
        <InstancesComponent />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Instances;
