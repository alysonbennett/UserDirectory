import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron"
import Card from "../src/components/Card"
import Wrapper from "../src/components/Wrapper"
// import About from "./pages/About";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Wrapper>
          <Card />
        </Wrapper>

      </div>
    </Router>
  );
}

export default App;
