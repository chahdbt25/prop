
import React from "react";
import { Container } from "react-bootstrap";
import UserList from "./UserList";
import users from "./data";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="mt-5">
      <h1>Liste des utilisateurs</h1>
      <UserList users={users} />
    </Container>
  );
}

export default App;

