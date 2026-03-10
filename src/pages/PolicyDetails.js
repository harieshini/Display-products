import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PolicyDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const policies = useSelector((state) => state.policies.policies);

  const policy = policies.find((p) => p.id === Number(id));

  if (!policy) {
    return <p>Policy not found</p>;
  }

  return (

    <div className="details-page">

      <button onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2>{policy.type}</h2>

      <p><b>Policy Number:</b> {policy.number}</p>

      <p><b>Effective Period:</b> {policy.effective}</p>

      <p><b>Payment Type:</b> {policy.paymentType}</p>

      {policy.paymentType === "manual" && (
        <>
          <p><b>Amount:</b> {policy.amount}</p>
          <p><b>Due Date:</b> {policy.due}</p>
        </>
      )}

      {policy.paymentType === "auto" && (
        <p>{policy.message}</p>
      )}

    </div>
  );
}

export default PolicyDetails;