import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const cards = [
  {
    label: "Total Students",
    value: "120",
    color: "#E6F1FB",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" fill="#185FA5" />
        <path
          d="M3 19c0-3.314 2.686-6 6-6 3.314 0 6 2.686 6 6"
          stroke="#185FA5"
          strokeWidth="1.8"
          fill="none"
        />
        <circle cx="17" cy="8" r="2.5" fill="#185FA5" opacity=".5" />
        <path
          d="M21 19c0-2.761-1.791-5-4-5"
          stroke="#185FA5"
          strokeWidth="1.8"
          fill="none"
          opacity=".5"
        />
      </svg>
    ),
    viewLink: "/students",
    addLink: "/students/add",
  },
  {
    label: "Total Teachers",
    value: "25",
    color: "#EAF3DE",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="13" rx="2" stroke="#3B6D11" strokeWidth="1.8" fill="none" />
        <path d="M8 20h8M12 16v4" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7 8h10M7 11h6" stroke="#3B6D11" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    viewLink: "/teachers",
    addLink: "/teachers/add",
  },
  {
    label: "Total Fees",
    value: "$12,500",
    color: "#FAEEDA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#BA7517" strokeWidth="1.8" fill="none" />
        <path d="M2 10h20" stroke="#BA7517" strokeWidth="1.8" />
        <circle cx="7" cy="15" r="1.5" fill="#BA7517" />
      </svg>
    ),
    viewLink: "/fees",
    addLink: "/fees/add",
  },
  {
    label: "Total Expenses",
    value: "$3,200",
    color: "#FCEBEB",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
          stroke="#A32D2D"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    viewLink: "/expenses",
    addLink: "/expenses/add",
  },
];

function Card({ label, value, color, icon, viewLink, addLink }) {
  const [hoverView, setHoverView] = useState(false);
  const [hoverAdd, setHoverAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column gap-3">
        {/* Top Section */}
        <div className="d-flex align-items-center gap-3">
          <div
            className="d-flex align-items-center justify-content-center rounded"
            style={{ background: color, width: "50px", height: "50px" }}
          >
            {icon}
          </div>
          <div>
            <p className="mb-1 text-muted" style={{ fontSize: "0.85rem" }}>{label}</p>
            <h5 className="m-0">{value}</h5>
          </div>
        </div>

        <hr />

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button
            className={`btn btn-outline-secondary flex-fill ${hoverView ? "active" : ""}`}
            onMouseEnter={() => setHoverView(true)}
            onMouseLeave={() => setHoverView(false)}
            onClick={() => navigate(viewLink)}
          >
            View
          </button>
          <button
            className={`btn btn-outline-dark flex-fill ${hoverAdd ? "active" : ""}`}
            onMouseEnter={() => setHoverAdd(true)}
            onMouseLeave={() => setHoverAdd(false)}
            onClick={() => navigate(addLink)}
          >
            + Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SchoolDashboard() {
  return (
    <div className="container py-4">
      <h2 className="mb-4">School Dashboard</h2>
      <div className="row g-3">
        {cards.map((card) => (
          <div key={card.label} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}