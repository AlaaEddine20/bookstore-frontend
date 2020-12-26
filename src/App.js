import NavBar from "./components/navbar/Navbar";
import Books from "./components/book-items/Books";
import Footer from "./components/footer/Footer";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container className="App">
      <NavBar />
      <Books />
      <Footer />
    </Container>
  );
}

export default App;
