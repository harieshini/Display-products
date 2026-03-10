import React from "react";
import "./App.css";

function App() {

  const policies = [
    {
      id: 1,
      type: "Auto Policy",
      number: "PRA00008087333",
      effective: "07/01/2025 - 07/01/2026",
      paymentType: "auto",
      message:
        "An automatic payment of $157.91 will be submitted on 04/01 using account ending in 1111.",
      icon: "directions_car"
    },
    {
      id: 2,
      type: "Home Policy",
      number: "NJH00008080616",
      effective: "09/22/2025 - 09/22/2026",
      paymentType: "manual",
      amount: "$477.34",
      due: "Due on 03/22",
      button: "Pay Now",
      icon: "home"
    },
    {
      id: 3,
      type: "Home Policy",
      number: "NJH00008006987",
      effective: "09/01/2025 - 09/01/2026",
      paymentType: "auto",
      message:
        "An automatic payment of $525.90 will be submitted on 04/15 using account ending in 4582.",
      icon: "home"
    }
  ];

  return (
    <div className="container">

      <div className="header">
        <h1>Plymouth Rock</h1>
        <span>assurance</span>
      </div>

      <div className="policy-list">
        {policies.map((policy) => (
          <PolicyCard key={policy.id} policy={policy} />
        ))}
      </div>

      <div className="bottom-link">
        <span className="plus">+</span>
        <div>
          <p>Don't see your policy?</p>
          <p className="link">Click here to link it!</p>
        </div>
      </div>

    </div>
  );
}

function PolicyCard({ policy }) {

  return (
    <div className="card">

      <div className="card-top">

        <span className="material-icons icon">
          {policy.icon}
        </span>

        <div className="policy-info">
          <h3>{policy.type}</h3>
          <p className="number">{policy.number}</p>
          <p className="effective">Effective: {policy.effective}</p>
        </div>

        <span className="material-icons arrow">
          chevron_right
        </span>

      </div>

      
      {policy.paymentType === "auto" && (
        <p className="message">
          {policy.message}
        </p>
      )}

      
      {policy.paymentType === "manual" && (
        <div className="card-bottom">

          <div>
            <h2>{policy.amount}</h2>
            <p className="due">{policy.due}</p>
          </div>

          <button>{policy.button}</button>

        </div>
      )}

    </div>
  );
}

export default App;