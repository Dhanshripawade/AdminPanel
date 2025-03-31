import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFoundPage = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center bg-light">
      <Row className="text-center">
        <Col>
          <h1 className="fw-bold mb-3">Sorry, page not found!</h1>
          <p className="text-muted mb-4">
            Sorry, we couldn’t find the page you’re looking for.<br />
            Perhaps you’ve mistyped the URL? Be sure to check your spelling.
          </p>

          <div className="mb-4">
            <div className="position-relative d-inline-block">

              <img src="https://free.minimals.cc/assets/illustrations/illustration-404.svg" alt="" />
            </div>
          </div>

          <Button variant="dark" href="/">
            Go to home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
