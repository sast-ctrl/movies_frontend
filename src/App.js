import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.js'
import Details from './pages/Details.js'
import { Link } from "react-router-dom";

export const API_URL = "https://movies-backend-ns.herokuapp.com/api";
const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        {/* <Link to="/login">Log in</Link>
        <Link to='/signup'>Sign up</Link> */}

        <Link to="/" className="navbar-brand">Movies App</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-between" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
            <Link to="/log-in" className="nav-link">Log in</Link>
            </li>
            <li className="nav-item">
            <Link to="/sign-up" className="nav-link">Sign up</Link>
            </li>
          </ul>
        </div>

      </nav>
      <main className="App">


        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies/:slug" element={<Details />} />
          </Routes>
        </div>

      </main>
    </>
  );
}

export default App;
