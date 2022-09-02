import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import { Header } from "./header";

export function App() {
  return (
    <>
      <Header />
      <Card>
        <Card.Header>yo</Card.Header>
        <Card.Body>eee</Card.Body>
      </Card>
    </>
  );
}
