import logo from "./logo.svg";
import "./App.css";
import { Listing } from "./pages/Listing";
import { Additem } from "./pages/Additem";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Listing />}></Route>
          <Route exact path="/add" element={<Additem />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
