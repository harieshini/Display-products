import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PolicyList() {

  const policies = useSelector((state) => state.policies.policies);
  const navigate = useNavigate();

  return (

    <div className="policy-list">

      {policies.map((policy) => (

        <div
          key={policy.id}
          className="card"
          onClick={() => navigate(`/policy/${policy.id}`)}
        >

          <div className="card-top">

            <span className="material-icons icon">
              {policy.icon}
            </span>

            <div className="policy-info">
              <h3>{policy.type}</h3>
              <p className="number">{policy.number}</p>
              <p className="effective">
                Effective: {policy.effective}
              </p>
            </div>

            <span className="material-icons arrow">
              chevron_right
            </span>

          </div>

          {policy.paymentType === "auto" && (
            <p className="message">{policy.message}</p>
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

      ))}

    </div>

  );
}

export default PolicyList;