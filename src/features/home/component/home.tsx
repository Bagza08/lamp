import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="blob:https://web.telegram.org/88fe14ca-aee4-454d-b5f5-46844cff376b"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            L.A.M.P
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;
