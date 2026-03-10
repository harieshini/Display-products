import React from "react";
import { useNavigate } from "react-router-dom";

function PolicyCard({ policy }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/policy/${policy.id}`);
  };

  return (
    <div className="card" onClick={handleClick}>

      <div className="card-top">

        <span className="material-icons icon">
          {policy.icon}
        </span>

        <div className="policy-info">
          <h3>{policy.type}</h3>

          <p className="number">
            {policy.number}
          </p>

          <p className="effective">
            Effective: {policy.effective}
          </p>
        </div>

        <span className="material-icons arrow">
          chevron_right
        </span>

      </div>

      {/* Automatic Payment */}
      {policy.paymentType === "auto" && (
        <p className="message">
          {policy.message}
        </p>
      )}

      {/* Manual Payment */}
      {policy.paymentType === "manual" && (
        <div className="card-bottom">

          <div>
            <h2>{policy.amount}</h2>
            <p className="due">{policy.due}</p>
          </div>

          <button>
            {policy.button}
          </button>

        </div>
      )}

    </div>
  );
}

export default PolicyCard;