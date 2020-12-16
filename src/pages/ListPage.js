import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";

function ListPage() {
  return (
    <Fragment>
      <Container>
        <Header />
        <List />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default ListPage;
