import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PolicyList from "./components/PolicyList";
import PolicyDetails from "./pages/PolicyDetails";

function App() {

  return (
    <div className="container">

      <div className="header">
        <h1>Plymouth Rock</h1>
        <span>assurance</span>
      </div>

      <Routes>

        <Route path="/" element={<PolicyList />} />

        <Route path="/policy/:id" element={<PolicyDetails />} />

      </Routes>

    </div>
  );
}

export default App;