import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Col className="text-center py-3">
          Copyright &copy;{" "}
          <a
            href="https://solomanGarcia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soloman Garcia
          </a>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
