import Category from "./components/Categories";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiFoodTruck />
          <Logo to={""}> La maison des recettes </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: wavy;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "bold",blue;
`;

const Nav = styled.div`
  padding: 1rem 0rem;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
