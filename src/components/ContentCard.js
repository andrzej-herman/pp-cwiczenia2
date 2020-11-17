import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContentCard({ title, text, link }) {
  return (
    <Col lg={4} md={4} xs={12}>
      <Link className="link" to={link}>
        <Card className="content__card" style={{ height: "155px" }}>
          <Card.Body>
            <Card.Title className="card__title">{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default ContentCard;
