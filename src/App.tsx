import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { AddStock } from './stock/AddStock';
import { DisplayStock } from './stock/DisplayStock';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1>Stock</h1>
            {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DisplayStock />} />
          <Route path="add" element={<AddStock />} />
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
      <nav>
        <li>
        <Link to={'/'}>Home</Link>
        </li>
        <li>
        <Link to={'/add'}>Add New</Link>
        </li>
      </nav>

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