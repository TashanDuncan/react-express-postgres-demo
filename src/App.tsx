import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { AddStock } from "./stock/AddStock";
import { DisplayStock } from "./stock/DisplayStock";
import styled from "styled-components";
import "./reset.css";
import "./styles.css";
import { EditStock } from "./stock/EditStock";
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin: 20px 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  .active {
    border-bottom: 1px white solid;
  }
`;
const StyledNavLink = styled(NavLink)`
  padding: 10px;
  margin: 0 10px;
  :hover {
    background-color: white;
    color: black;
  }
`;

export default function App() {
  return (
    <div className="App">
      <Title>Neil Garners 2023 Stock List!</Title>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DisplayStock />} />
          <Route path="add" element={<AddStock />} />
          <Route path="edit/:stockId" element={<EditStock />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Nav>
        <StyledNavLink to={"/"}>Home</StyledNavLink>

        <StyledNavLink to={"/add"}>Add New</StyledNavLink>
      </Nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
