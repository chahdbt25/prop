
import React from "react";
import { Card } from "react-bootstrap";

function User({ user }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.age} ans</Card.Subtitle>
        <Card.Text>{user.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default User;
