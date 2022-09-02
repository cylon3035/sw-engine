import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import { Header } from "./header";

export function App({ ships }: { ships: string[] }) {
  return (
    <>
      <Header />
      <Card>
        <Card.Header>yo</Card.Header>
        <Card.Body>ships</Card.Body>
        <ListGroup>
          {ships.map((ship) => (
            <ListGroupItem key={ship}>{ship}</ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    </>
  );
}
