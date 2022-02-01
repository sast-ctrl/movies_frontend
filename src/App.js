import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/Home.js'

export const API_URL = "https://movies-backend-ns.herokuapp.com/api";
const App = () => {
  return (
    <main className="App">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </main>
  );
}

export default App;
