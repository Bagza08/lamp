import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Home() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://drive.google.com/uc?export=view&id=1M3oSvZbaZ7XviSUlZ6CNk3Ib_mZ4bDU3"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            L.A.M.P
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;
