import React from "react";
import Player from "./player";
import players from "./players";
import { Container, Row, Col } from "react-bootstrap";

const PlayersList = () => {
  return (
    <Container>
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={4} lg={3}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
