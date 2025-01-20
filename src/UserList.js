
import React from "react";
import User from "./User";
import { Row, Col } from "react-bootstrap";

function UserList({ users }) {
  return (
    <Row>
      {users.map((user) => (
        <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
          <User user={user} />
        </Col>
      ))}
    </Row>
  );
}

export default UserList;
