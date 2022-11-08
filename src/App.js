import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/netflix" element={<Home />} />
        <Route path="*" element={<Navigate to="/netflix" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
